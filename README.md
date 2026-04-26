# anudeepthota.github.io

Personal site for **Anudeep Thota** — built with [Vite](https://vite.dev/), React, TypeScript, Tailwind CSS, Framer Motion, and GitHub Pages.

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

The workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) builds `dist/` and pushes it to the **`gh-pages`** branch using [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages). That only needs the default **`GITHUB_TOKEN`** (`contents: write`).

We **do not** call the GitHub Pages admin API from Actions: `PUT /repos/.../pages` returns **403 Resource not accessible by integration** for `GITHUB_TOKEN`, so the site cannot be switched to “GitHub Actions” publishing automatically without a **personal access token** with repo admin (see `scripts/switch-pages-to-github-actions.sh` if you want that instead).

### One-time setup (fixes a blank site)

If **View Page Source** shows `<script … src="/src/main.tsx">`, Pages is still publishing **`main` / (root)** (source files), not the build.

1. Wait for the latest [Actions](https://github.com/anudeepthota/anudeepthota.github.io/actions) run on **`main`** to finish (it updates **`gh-pages`**).
2. Open **Settings → Pages**:  
   `https://github.com/anudeepthota/anudeepthota.github.io/settings/pages`
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Set **Branch** to **`gh-pages`** and folder **`/ (root)`**, then **Save**.
5. Hard-refresh `https://anudeepthota.github.io/`. Source should show `/assets/index-….js`, not `/src/main.tsx`.

**Manual “Run workflow”:** Use branch **`main`** in “Use workflow from”, not `gh-pages`.

## Repository

[https://github.com/anudeepthota/anudeepthota.github.io](https://github.com/anudeepthota/anudeepthota.github.io)
