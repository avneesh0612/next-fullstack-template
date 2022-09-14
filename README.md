# FullStack Next.js template

## Tech

-   Next.js
-   Next Auth
-   MongoDB
-   Prisma
-   Chakra UI
-   Typescript
-   Prettier
-   ESlint

One click deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Favneesh0612%2Fnext-fullstack-template&env=DATABASE_URL,GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,NEXTAUTH_SECRET,NEXTAUTH_URL)

## How to use

### Clone the template

```bash
git clone https://github.com/avneesh0612/next-fullstack-template.git
```

### Install dependencies

```bash
pnpm
```

### Add environment variables

DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=
NEXTAUTH_URL=

-   Create a new mongodb database and get the connection string
-   Create a new google oauth app and get the client id and secret
-   Generate a random string for NEXTAUTH_SECRET

```bash
openssl rand -hex 32
```

-   Set NEXTAUTH_URL to your domain name (http://localhost:3000 if you are running locally)
