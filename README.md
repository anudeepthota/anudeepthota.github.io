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

This workflow builds Vite output into `dist/` and pushes it to the **`gh-pages`** branch (see [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)).

### One-time setup (required)

If the live site is **blank**, open **View Page Source** on `https://anudeepthota.github.io/`. If you see `<script … src="/src/main.tsx">`, GitHub Pages is still serving the **source** tree from **`main`**, not the build. Browsers cannot run that file.

1. GitHub repo → **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch** (not “GitHub Actions” unless you switch the workflow back to `deploy-pages`).
3. Set **Branch** to **`gh-pages`** and folder **`/ (root)`**, then **Save**.
4. Wait for the latest [Actions](https://github.com/anudeepthota/anudeepthota.github.io/actions) run on `main` to finish (it creates/updates `gh-pages`).
5. Hard-refresh the site (or wait a minute for CDN cache).

Optional: use **GitHub Actions** as the Pages source instead, with the older `upload-pages-artifact` + `deploy-pages` pattern and `build_type: workflow` (see `scripts/switch-pages-to-github-actions.sh`). Do **not** leave the source on **`main` / (root)** for this Vite app.

## Repository

[https://github.com/anudeepthota/anudeepthota.github.io](https://github.com/anudeepthota/anudeepthota.github.io)
