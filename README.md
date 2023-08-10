## Built With

- [![Next][Next.js]][Next-url]
- [![Typescript][Typescript]][Typescript-url]
- [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
- [![Docker][Docker]][Docker-url]
- [![Prisma][Prisma]][Prisma-url]
- [![Stripe][Stripe]][Stripe-url]

## Getting Started

To install packages

```bash
yarn
```

To start the app

First, configure docker file which is located in: `src/docker/docker-compose.yml`

```yml
POSTGRES_USER: YOUR_USERNAME
POSTGRES_PASSWORD: YOUR_PASSWORD
POSTGRES_DB: YOUR_DB
```

Then start docker with:

```bash
docker compose up
```

Configure your `.env` file with your db's username, password and db:

```bash
DATABASE_URL="postgresql://{YOUR_USERNAME}:{YOUR_PASSWORD}@localhost:5432/{YOUR_DB}?schema=public"
```

If you want to see db tables visually, then start prisma studio:

```bash
npx prisma studio
```

Finally

```bash
yarn run dev
```

### Why am i using yarn instead of npm?

- It installs packages in parallel, so it is faster. Npm installs them sequentially
- Npm saves packages to dependencies when you pass `--save` tag into command. Yarn do this by default.
- It requires less memory space.
- Yarn has offline support.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Docker]: https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[Prisma]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[Stripe]: https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white
[Stripe-url]: https://stripe.com/
