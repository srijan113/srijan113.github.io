# Srijan Pokhrel — Portfolio

Personal portfolio of Srijan Pokhrel (srijan113), backend and DevOps engineer.
A responsive React + Vite website.

| Page     | URL         |
| -------- | ----------- |
| Home     | `/`         |
| Skills   | `/skills`   |
| Projects | `/projects` |

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## How it's responsive

- **900px and wider:** the desktop layout. Every size is written in pixels at 1920px wide
  as `calc(var(--u) * N)`, where `--u` is `100vw / 1920`. The page scales with
  the window and stops growing past about 2300px.
- **600–899px (tablet):** two-column project grid, with the skill cards in a two-column
  masonry layout.
- **Under 600px (phone):** everything stacks in one column, with mobile type sizes.

The breakpoints are in each component's `*.module.css` file.

## Project structure

```
index.html
src/
  main.tsx              entry point (hydrates the pre-rendered HTML)
  entry-server.tsx      server entry used by the pre-render step
  seo.ts                page titles, descriptions, keywords, structured data
  App.tsx               routes + floating dock
  router.tsx            tiny History-API router (no dependency)
  styles/global.css     fonts, colour tokens, the --u scale
  components/           Hero, TopBar, About, Timeline, ProjectGrid, ExploreButton,
                        SkillCard, Contact, Footer, Dock, Layout, icons
scripts/make_cv.py      builds the text-only CV PDF
scripts/prerender.mjs   renders each page to static HTML + sitemap/robots (runs in npm run build)
  pages/                Home, Skills, Projects
  data/
    profile.ts          name, email, phone, GitHub, LinkedIn, CV link  ← edit me
    experience.ts       work history, education, certifications
    projects.ts         project cards
    skills.ts           skill cards, logos and layout
  assets/
    fonts/              Inter, DM Sans, IBM Plex Mono (self-hosted, OFL)
    images/             hero photo, avatar, project screenshots
    skills/             skill logos (PNG at 3x)
```

The icons (dock, arrows) are inline SVGs in `src/components/icons.tsx`.

## Updating content

| What | Where |
| --- | --- |
| Name, tagline, email, phone, GitHub, LinkedIn | `src/data/profile.ts` |
| Projects (title, role, description, link, screenshot) | `src/data/projects.ts` |
| Skill cards | `src/data/skills.ts` |
| Work experience, education, certifications | `src/data/experience.ts` |
| Intro paragraphs | `src/components/About.tsx` |
| Hero photo | `src/assets/images/hero-desktop.jpg` (wide) and `hero-mobile.jpg` (tall) |

The home page shows the first four projects; the Projects page shows all of them.
Project screenshots are 790×460 JPGs in `src/assets/images/`.

## CV

The downloadable CV is `public/Srijan-Pokhrel-CV.pdf`: a one-page, text-only PDF (no images),
so applicant-tracking systems can read it. It's linked from the dock, the intro and the
contact section. To change it, edit the text in `scripts/make_cv.py` and run:

```bash
pip install reportlab
python scripts/make_cv.py public/Srijan-Pokhrel-CV.pdf
```

The hero photo is shown in black and white. For colour, remove the
`filter` line from `.photo` in `src/components/Hero.module.css`.

## SEO

- **Site address:** set automatically by the GitHub Pages workflow (`VITE_SITE_URL`);
  the local fallback is in `src/data/site.ts`. Canonical links, the sitemap, social previews
  and structured data are all built from it.
- **Pre-rendered pages:** `npm run build` builds the site, then renders `/`, `/skills` and
  `/projects` to real HTML (`scripts/prerender.mjs`), so search engines see the full content
  without running JavaScript. It also writes `dist/sitemap.xml` and `dist/robots.txt`.
- **Page titles and descriptions:** `src/seo.ts` (`pages`), plus keywords and the schema.org
  `Person` / `WebSite` / `ProfilePage` structured data.
- **Social preview image:** `public/og-image.jpg` (1200×630).

After deploying:

1. Add the site to [Google Search Console](https://search.google.com/search-console) and
   [Bing Webmaster Tools](https://www.bing.com/webmasters), verify it, and submit
   `https://<your-domain>/sitemap.xml`.
2. Put the site link on your LinkedIn profile (Contact info and Featured), your GitHub
   profile and profile README, and anywhere else you're listed. Links from those profiles
   are what tell Google this site is the official Srijan Pokhrel.
3. Check the structured data with Google's [Rich Results Test](https://search.google.com/test/rich-results).

## Deploying to GitHub Pages (free)

The included workflow (`.github/workflows/deploy.yml`) builds the site and publishes it on
every push to `main`.

1. **Create the repository.** For the best address and SEO, name it **`srijan113.github.io`**,
   so the site lives at `https://srijan113.github.io/`. Any other name (e.g. `portfolio`)
   also works and is served at `https://srijan113.github.io/portfolio/`; the workflow
   detects which one you used.
2. **Push this folder:**
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/srijan113/srijan113.github.io.git
   git push -u origin main
   ```
3. **Turn on Pages:** repository **Settings → Pages → Build and deployment → Source:
   GitHub Actions**.
4. Open the **Actions** tab and wait for "Deploy to GitHub Pages" to finish (about a
   minute). Every later push redeploys automatically.

**Custom domain (optional):** add it under Settings → Pages → Custom domain, then create a
repository variable `CUSTOM_DOMAIN` (Settings → Secrets and variables → Actions → Variables)
with the same value, e.g. `srijanpokhrel.com.np`, and re-run the workflow, so canonical
links and the sitemap use it.

**Build locally like GitHub does:**
```bash
BASE_PATH=/ VITE_SITE_URL=https://srijan113.github.io npm run build
npm run preview
```

GitHub Pages notes:
- Pages are served as folders (`/skills/`), so links and canonical URLs use a trailing slash.
- `dist/404.html` is generated for unknown addresses.
- For a project page (`/portfolio/`), search engines only read `robots.txt` at the domain
  root, so submit the sitemap directly in Google Search Console.

`public/_redirects` is only used if you host on Netlify instead.
