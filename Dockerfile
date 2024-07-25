FROM node:20-alpine

WORKDIR /app

ENV DATABASE_URL=postgresql://postgres:mysecretpassword@localhost:5432/postgres

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm", "start"]