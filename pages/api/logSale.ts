import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function logSale(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sku = req.query.sku as string;
  const units = req.query.units ? parseInt(req.query.units as string) : 1;

  // Validate units:
  if (isNaN(units)) {
    res.status(400).end();
  }

  // Get date without time of day:
  const currentDate = new Date();
  currentDate.setUTCHours(0, 0, 0, 0); // Set the time to midnight.

  // Get the best offer with sufficient stock:
  const response = await fetch(
    `http://localhost:${process.env["PORT"]}/api/bestOffer?sku=${sku}&units=${units}`
  );
  if (!response.ok) {
    const json = await response.json();
    res.status(404).json({ error: json.error ? json.error : "no offer" });
    return;
  }
  const offer = await response.json();
  const priceInCents = offer.price * 100;

  // Log the sale in the DB:
  try {
    // We wrap the operations in a single transaction,
    // so they either go through or don't together.
    // otherwise we could have inconsistent data.
    const transaction = await prisma.$transaction([
      // Create a new sale:
      prisma.sale.create({
        data: {
          date: currentDate,
          offerId: offer.id,
          priceInCents: priceInCents * units,
          sku: sku,
          units: units,
        },
      }),
      // Upsert (update or create) the sales report:
      prisma.dailySalesReport.upsert({
        where: {
          date_sku: {
            date: currentDate,
            sku: sku,
          },
        },
        create: {
          date: currentDate,
          sales: units,
          sku: sku,
          totalPriceInCents: priceInCents * units,
          totalUnits: units,
        },
        update: {
          updatedAt: new Date(),
          sales: {
            increment: 1,
          },
          totalUnits: {
            increment: units,
          },
          totalPriceInCents: {
            increment: priceInCents * units,
          },
        },
      }),
    ]);
    res.status(200).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "database transaction failed" });
    return;
  }
}
