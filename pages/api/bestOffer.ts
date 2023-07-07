import { NextApiRequest, NextApiResponse } from "next";
import type { Offer, Status } from "../../interfaces";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;
  const sku = query.sku;
  const units = query.units ? parseInt(query.units as string) : 1;

  // Validate query:
  if (typeof sku != "string") {
    return res.status(400).json({ error: `invalid sku` });
  }
  if (isNaN(units)) {
    return res.status(400).json({ error: `invalid units` });
  }

  try {
    // Get offers for the SKU.
    const response = await fetch(
      `http://localhost:${process.env["PORT"]}/api/mock/getAllSkuOffers/${sku}`
    );
    if (!response.ok) {
      const json = await response.json();
      return res
        .status(404)
        .json({ error: json.error ? json.error : "no offer" });
    }
    const match = await response.json();
    const offers = match.offers;

    // Filter offers with insufficient stock:
    const validOffers = offersWithEnoughStock(offers, units);

    // Return the "best":
    return validOffers?.length
      ? res.status(200).json(bestOffer(validOffers))
      : res.status(404).json({ error: `no offers with enough stock` });
  } catch {
    return res.status(500).json({ error: `something went wrong` });
  }
}

// offersWithEnoughStock returns offers with stock to cover units requested, if any.
const offersWithEnoughStock = (
  offers: Offer[],
  units: number
): Offer[] | undefined => {
  return offers?.filter((offer) => offer.stock >= units);
};

// bestOffer returns the best offers according to our hand picked criteria,
// in this case, in order of importance:
// - always prefer new, over renew, over used
// - when in doubt pick the cheapest
//
const bestOffer = (offers: Offer[] | undefined): Offer | undefined => {
  return cheapestOffer(bestOffersByStatus(offers));
};

// bestOffersByStatus returns offers matching the first status for which there are any offers,
// looking for new ones first, then renew, then used.
const bestOffersByStatus = (offers: Offer[] | undefined): Offer[] => {
  const statuses: Status[] = ["new", "renew", "used"]; // Preferred first.
  for (const status of statuses) {
    const statusOffers = offers?.filter((offer) => offer.status === status);
    if (statusOffers) {
      return statusOffers;
    }
  }
  return [];
};

// cheapestOffer returns the cheapest offer.
const cheapestOffer = (offers: Offer[] | undefined): Offer | undefined => {
  return offers?.reduce((cheatpestOffer: Offer, currentOffer: Offer) => {
    if (!cheapestOffer || currentOffer.price < cheatpestOffer.price) {
      return currentOffer;
    }
    return cheatpestOffer;
  }, offers[0]);
};
