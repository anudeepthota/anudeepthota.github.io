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

The workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) builds `dist/`, uploads it as a **Pages artifact**, and runs **`actions/deploy-pages`**. A step also calls the GitHub API so the site uses **`build_type: workflow`** (publish from Actions), **not** `main` / (root) — serving `main` is what causes a **blank page** (`/src/main.tsx` in “View Page Source”).

### After you push to `main`

1. Open [Actions](https://github.com/anudeepthota/anudeepthota.github.io/actions) and wait for **Deploy to GitHub Pages** to finish (green).
2. The first time, GitHub may ask you to **approve** the `github-pages` environment for the deploy job — approve it.
3. In **Settings → Pages → Build and deployment**, ensure **Source** is **GitHub Actions** (the API step usually sets this; if it still says “Deploy from a branch”, pick **GitHub Actions** and save).
4. Hard-refresh `https://anudeepthota.github.io/` and check **View Page Source**: you should see `src="/assets/index-…js"`, not `/src/main.tsx`.

**Manual “Run workflow”:** Use branch **`main`** in “Use workflow from”, not `gh-pages` (that branch has no workflow file).

### If the “Point Pages at GitHub Actions” step fails (403)

Your `GITHUB_TOKEN` may not be allowed to change Pages settings. Either:

- Set **Settings → Pages → Source** to **GitHub Actions** yourself, then re-run the workflow, or  
- Use a PAT with repo admin scope: `scripts/switch-pages-to-github-actions.sh` (export `GITHUB_TOKEN` or `GH_TOKEN`).

### Legacy: `gh-pages` branch only

Older docs referred to publishing the **`gh-pages`** branch. That still works if you point Pages at that branch, but **this repo’s workflow no longer updates `gh-pages`** — prefer **GitHub Actions** as above.

## Repository

[https://github.com/anudeepthota/anudeepthota.github.io](https://github.com/anudeepthota/anudeepthota.github.io)
