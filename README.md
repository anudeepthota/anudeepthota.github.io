# anudeepthota.github.io

Personal site for **Anudeep Thota** — built with [Vite](https://vitejs.dev/), React, TypeScript, Tailwind CSS, Framer Motion, and GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Output is written to `dist/`.

## Deploy (GitHub Pages)

1. In the repository on GitHub: **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) builds and publishes the site.

For a user site (`username.github.io`), the site is served from the default Pages URL after the first successful deployment.

## Repository

[https://github.com/anudeepthota/anudeepthota.github.io](https://github.com/anudeepthota/anudeepthota.github.io)
