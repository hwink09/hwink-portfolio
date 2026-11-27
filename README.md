This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Use Node.js 22.22.1 or later, pnpm 12.6.0, and Git. On Windows, make sure Node.js is on the PATH used by Git for Windows so hooks can run.

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The starter page lives at `src/app/[locale]/page.tsx`. Visit `/en` or `/vi` to verify either language, and use the language and theme menus to check that both preferences persist. Translation messages live in `messages/en.json` and `messages/vi.json`.

Set `SITE_URL` to the confirmed production origin before building for deployment to enable canonical and alternate-language metadata.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Development checks

| Command             | Purpose                                                |
| ------------------- | ------------------------------------------------------ |
| `pnpm lint`         | Check the project with ESLint                          |
| `pnpm lint:fix`     | Apply ESLint fixes                                     |
| `pnpm format`       | Format project files with Prettier                     |
| `pnpm format:check` | Check project formatting                               |
| `pnpm typecheck`    | Generate Next.js route types and run TypeScript checks |
| `pnpm build`        | Build the application for production                   |

`pnpm install` sets up Husky through the `prepare` script. The pre-commit hook runs ESLint and Prettier on matching staged files. The commit-msg hook checks Conventional Commits, for example `chore: configure development tooling`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
