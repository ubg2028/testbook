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

## Blog
Add a markdown file in `src/content/blog/`. The file name becomes the address (`my-post.md` -> `/blog/my-post/`).

    ---
    title: "Your post title"
    description: "One or two sentences for Google and for the blog list."
    date: 2026-10-20
    author: abhyas-team        # abhyas-team, niraj-singh or jay-verma
    reviewedBy: jay-verma      # optional, only if Jay really checked it
    category: Preparation
    exam: ssc-cgl              # optional, slug from exams.json
    ---

    Write the post here. Use ## for section headings.
    Link to pages like [SSC CGL papers](/exams/ssc-cgl/); the base path is added for you.

Set `draft: true` to keep a post hidden. Authors live in `src/data/authors.json`.

## AdSense
1. Put your publisher id (`ca-pub-...`) in `src/data/site.json` under `adsense.client`, and a slot id under `adsense.slot` once you have one. `ads.txt` fills itself.
2. Use a custom domain (set `SITE` and `BASE=/` in the workflow). AdSense and `ads.txt` work best on your own domain.
3. Replace sample questions with real ones (see Add real content) before applying.
