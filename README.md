This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


## Deploy on Heroku

To deploy on Heroku:

1. Make sure you have a `Procfile` with:
	```
	web: pnpm start
	```
2. Set your buildpack to Node.js (Heroku does this automatically for most Node projects).
3. Ensure your `pnpm-lock.yaml` is committed. Heroku will use it for dependency installation.
4. Push your code to Heroku:
	```bash
	git push heroku main
	```
5. Heroku will run `pnpm install`, `pnpm build`, and then `pnpm start`.

If you use environment variables, set them in the Heroku dashboard or with the CLI:
```bash
heroku config:set VAR_NAME=value
```

For more details, see [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support).
