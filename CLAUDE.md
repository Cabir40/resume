# resume — Cabir Celik portfolio site

Markdown-driven Eleventy (11ty) site, built and deployed to GitHub Pages by
GitHub Actions on every push to `main` (`.github/workflows/build.yml`).

- Design system source of truth: [DESIGN.md](DESIGN.md) — "Editorial /
  Clinical-Journal" direction (parchment background, garnet accent,
  Fraunces / Spectral / JetBrains Mono).
- Content source of truth: `../resume.md` (outside this repo) — translate
  copy from there, don't rewrite it, when adding net-new sections.
- PDFs (certificates, papers) are intentionally **not** committed here — link
  out to the live profiles/blog instead to keep the repo light.

## Authoring workflow — markdown only

**The entire site is generated from `.md` files under `content/`.** To add,
edit, or remove content, touch only those files, then commit and push to
`main` — GitHub Actions builds the site with Eleventy and deploys it. No
local build, no template edits, no HTML/CSS changes for routine content
changes.

```
content/
├── home/
│   ├── about.md            — hero/bio copy (front matter: name, title, location, badges, profiles)
│   ├── contact.md          — contact section copy
│   ├── experience/*.md     — one file per role   (front matter: role, org, location, dates)
│   ├── education/*.md      — one file per degree (front matter: degree, institution, location, dates[, thesis])
│   ├── publications/*.md   — one file per pub    (front matter: title, venue, link, tag)
│   └── projects/*.md       — one file per project (front matter: title, stack, demo, link)
└── project-demos/*.md      — one file per deep-dive demo page (rich front matter: title,
                              subtitle, volume, issue, pullquote, pullquoteCite, media[], links[])
```

Rules that make this work (don't break them when touching templates):

- **Add a file → a new entry/page appears. Delete a file → it disappears.**
  Nothing else needs to change. Verified by adding/removing a throwaway file
  in `content/home/experience/` and rebuilding.
- Filenames in `home/**` collection directories are prefixed `NN-` to control
  display order (`01-…`, `02-…`); the prefix is stripped from the slug.
  `project-demos/*.md` filenames (no prefix) become the page slug directly,
  e.g. `healthcare-rag-llm-system.md` → `/project-demos/healthcare-rag-llm-system/`.
- Setting `demo: <slug>` in a `home/projects/*.md` file's front matter links
  that project card to its matching `/project-demos/<slug>/` page (only if a
  matching file exists in `content/project-demos/`).
- The markdown body of each file becomes the rendered prose (bullet
  achievements for experience, abstracts for education/thesis, write-ups for
  project demos) — front matter holds the structured fields.

## How it's wired (only relevant when changing templates/loaders, not content)

- `src/_lib/contentLoader.js` — shared `loadMarkdownFile`/`loadMarkdownDir`
  helpers (front matter via `gray-matter`, rendering via `markdown-it`).
  Lives outside `_data/` on purpose so Eleventy doesn't treat it as global data.
- `src/_data/me.js` — aggregates all six "Me" sections into one object.
- `src/_data/projectDemos.js` — loads every `content/project-demos/*.md` file;
  `src/project-demo-detail.njk` paginates over it (`size: 1`) with a computed
  `permalink: "/project-demos/{{ demo.slug }}/"` to generate one page per file.
- `src/_layouts/base.njk` — shared shell (header/nav/theme-toggle/footer).
- `src/css/style.css` — Editorial/Clinical-Journal tokens + components (see DESIGN.md).

## Local dev

```
npx @11ty/eleventy --serve
```

## One-time manual step (Cabir, not Claude)

GitHub repo → **Settings → Pages → Source** must be switched from "Deploy
from a branch" to **"GitHub Actions"** for the new workflow to publish.
