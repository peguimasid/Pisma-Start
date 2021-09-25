<h1 align="center">Welcome to Prisma start👋</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> 💎 In this repository i test the basic features of prisma ORM like setup de environment, create migrations, tables, relationships between tables and many others features

## Install

```sh
git clone https://github.com/peguimasid/Pisma-Start.git
```

## Usage

- Install [docker](https://docs.docker.com/get-docker/)
- Create a mongo database: `docker run --name <database_name> -e POSTGRES_PASSWORD=<password> -p 5432:5432 -d <user>`
- Create and add this config to .env file

```
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/<database>?schema=public"
```

- Run `yarn` to install dependencies
- Run `yarn prisma migrate dev --name init` to run migrations
- Run `yarn ts-node index.ts`, update index file and see magic happens

## Author

👤 **Guilhermo Masid**

- Github: [@peguimasid](https://github.com/peguimasid)
- LinkedIn: [@Guilhermo Masid](https://www.linkedin.com/in/guilhermo-masid-494677b8/)

## Show your support

Give a ⭐️ if this project helped you!

---
