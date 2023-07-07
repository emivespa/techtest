export type ResponseError = {
  error: string;
};

export type Sku = {
  sku: string;
  offers: Offer[];
};

export type Offer = {
  id: number;
  price: number;
  stock: number;
  shipping_price: number;
  delivery_date: Date;
  can_be_refunded: boolean;
  status: Status;
  guarantee: boolean;
  seller: Seller;
};

export type Status = "new" | "renew" | "used";

export type Seller = {
  name: string;
  qualification: number;
  reviews_quantity: number;
};
