import { NextApiRequest, NextApiResponse } from "next";
import { skus } from "../skus";
import type { Sku, ResponseError } from "../../../../interfaces";

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Sku | ResponseError>
) {
  const { query } = req;
  const { sku } = query;
  const match = skus.find((s) => s.sku === sku);

  return match
    ? res.status(200).json(match)
    : res.status(404).json({ error: `sku not found.` });
}
