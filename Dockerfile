FROM node:18-alpine AS base

# Install dependencies only when needed
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json* ./

# We also need prisma/schema.prisma
COPY prisma/schema.prisma ./

# npm ci will run `prisma generate`, it's in the postInstall script
RUN npm ci

COPY . .

RUN npm run build

ENV PORT 3000
EXPOSE 3000

CMD ["npm", "run", "start"]
