FROM node:20-alpine

WORKDIR /app

ENV DATABASE_URL=postgresql://postgres:102199@postgresdb:5432/postgresDatabase

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm", "start"]