# techtest

## Servicio `/api/bestOffer` `?sku=[sku]` `&units=[units]`

Devuelve la mejor oferta, según este criterio:
considerando solo ofertas con stock suficiente ("units"),
el mejor precio dentro de la mejor categoría.
Units es opcional.

## Servicio `/api/logSale` `?sku=[sku]` `&units=[units]`

Si hay ofertas disponibles con stock suficiente,
escribe una venta de la mejor oferta (según bestOffer)
y actualiza el reporte diario.
Devuelve la nueva venta ([0]) y el reporte actualizado o creado ([1]).
Units es opcional.

## Correr

### Con compose

```bash
docker compose up
```

Y abrir `localhost:3000` para probar los endpoints.

### Con npm y cualquier DB MySQL

Cambiando DATABASE_URL, pueden correr:

```bash
npm i
npx prisma db push # La primera vez.
npm run dev
```

## Detalles

- los tipos están en `./interfaces/index.ts`
- el proveedor esta mockeado en `/api/mock/getAllSkuOffers/[sku].ts`
  - y la data en `/api/mock/skus.ts`

### Por qué Next?

Quería tener un pequeño Frontend para probar las rutas.
**Los servicios no dependen de Next**,
mas alla de usar su _filesystem-based routing_ en `pages/api`
(son definiciones de rutas compatibles con ExpressJS),
y seria trivial implementarlos independientemente, algo así:

```js
const express = require("express");
const { prisma } = require("./lib/prisma");
const app = express();

app.get("/api/bestOffer", (req, res) => {
  // ...
});

app.listen(3000, () => {
  console.log("localhost:3000/api/bestOffer");
});
```
