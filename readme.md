- Create a Docker Network:

  ```sh
  docker network create my_network
  ```

- Start PostgreSQL Container

  ```sh
  docker run -p 5432:5432 -d --network my_network --name postgresdb -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=dbname postgres
  ```

- Generate Prisma Client

  ```sh
  npx prisma generate
  ```

- Apply Database Migrations

  ```sh
  npx prisma migrate dev --name init
  ```

  If it doesn't work change the `postgresdb:5432` to `localhost:5432`

- Build the app

  ```sh
  docker build -t app .
  ```

- Start the Application Container
  ```sh
  docker run -d --network my_network --name app -e DATABASE_URL="postgresql://user:password@postgresdb:5432/dbname" app
  ```
