# Abhyas (Astro)

Fast, static PYQ + test series site. Astro, plain CSS, no UI framework.

## Run
    npm install
    npm run dev        # http://localhost:4321
    npm run build      # output in dist/

## Add real content
- `src/data/exams.json`, `series.json`, `papers.json` control every page.
- Real questions for a test: create `src/data/questions/<test-id>.json`
  (same shape as `src/data/questions.json`: `{s, q, o[], a, e}`). Tests without a file show the demo questions.
- Marks and duration: `CFG` in `src/lib/data.js`.
- Site name: `src/data/site.json`.

## Deploy (GitHub Pages)
1. Push to the `main` branch.
2. Repo Settings > Pages > Source: **GitHub Actions**.
3. `.github/workflows/deploy.yml` builds and deploys on every push.
Custom domain: set `SITE` and `BASE=/` in the workflow `env`.
