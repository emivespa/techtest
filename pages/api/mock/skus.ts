import type { Sku } from "../../../interfaces";

export const skus: Sku[] = [
  {
    sku: "xxx",
    offers: [
      {
        id: 0,
        price: 1.0,
        stock: 1,
        shipping_price: 1.5,
        delivery_date: new Date("2023-05-27"),
        can_be_refunded: true,
        status: "new",
        guarantee: true,
        seller: {
          name: "xxxx",
          qualification: 1,
          reviews_quantity: 1,
        },
      },
      {
        id: 1,
        price: 2.0,
        stock: 2,
        shipping_price: 2.5,
        delivery_date: new Date("2023-05-27"),
        can_be_refunded: true,
        status: "new",
        guarantee: true,
        seller: {
          name: "yyyy",
          qualification: 2,
          reviews_quantity: 1,
        },
      },
      {
        id: 2,
        price: 3.0,
        stock: 3,
        shipping_price: 3.5,
        delivery_date: new Date("2023-05-27"),
        can_be_refunded: true,
        status: "new",
        guarantee: true,
        seller: {
          name: "zzzz",
          qualification: 3,
          reviews_quantity: 1,
        },
      },
    ],
  },

  {
    sku: "yyy",
    offers: [
      {
        id: 0,
        price: 2.0,
        stock: 4,
        shipping_price: 2.5,
        delivery_date: new Date("2023-05-27"),
        can_be_refunded: true,
        status: "new",
        guarantee: true,
        seller: {
          name: "xxxx",
          qualification: 1,
          reviews_quantity: 1,
        },
      },
      {
        id: 1,
        price: 1.0,
        stock: 5,
        shipping_price: 1.5,
        delivery_date: new Date("2023-05-27"),
        can_be_refunded: true,
        status: "new",
        guarantee: true,
        seller: {
          name: "yyyy",
          qualification: 2,
          reviews_quantity: 1,
        },
      },
      {
        id: 2,
        price: 3.0,
        stock: 6,
        shipping_price: 3.5,
        delivery_date: new Date("2023-05-27"),
        can_be_refunded: true,
        status: "new",
        guarantee: true,
        seller: {
          name: "zzzz",
          qualification: 2,
          reviews_quantity: 1,
        },
      },
    ],
  },

  {
    sku: "zzz",
    offers: [
      {
        id: 0,
        price: 3.0,
        stock: 7,
        shipping_price: 3.5,
        delivery_date: new Date("2023-05-27"),
        can_be_refunded: true,
        status: "new",
        guarantee: true,
        seller: {
          name: "xxxx",
          qualification: 1,
          reviews_quantity: 1,
        },
      },
      {
        id: 1,
        price: 2.0,
        stock: 8,
        shipping_price: 2.5,
        delivery_date: new Date("2023-05-27"),
        can_be_refunded: true,
        status: "new",
        guarantee: true,
        seller: {
          name: "yyyy",
          qualification: 2,
          reviews_quantity: 1,
        },
      },
      {
        id: 2,
        price: 1.0,
        stock: 9,
        shipping_price: 1.5,
        delivery_date: new Date("2023-05-27"),
        can_be_refunded: true,
        status: "new",
        guarantee: true,
        seller: {
          name: "zzzz",
          qualification: 2,
          reviews_quantity: 1,
        },
      },
    ],
  },
];