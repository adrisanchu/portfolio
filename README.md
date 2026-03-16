# Portfolio

Personal portfolio for **Adrián Sánchez Rodríguez** — engineer, project manager, and data analyst. Built to be fast, accessible, and SEO-optimized, targeting recruiters in tech, energy, and project management.

Live at [adriansanchez.pages.dev](https://adriansanchez.pages.dev).

## Stack

- **[Astro 6](https://astro.build)** — static site generator, zero JS by default
- **[Tailwind CSS v4](https://tailwindcss.com)** — utility-first styling via Vite plugin
- **[Cloudflare Pages](https://pages.cloudflare.com)** — hosting and deployment
- **TypeScript** — strict mode throughout

## Project Structure

```
src/
├── components/       # Reusable Astro components (Header, Footer, ProjectCard…)
├── content/
│   ├── experience/   # Work history (.md files, ordered by filename)
│   ├── projects/     # Case studies (.md files)
│   └── education/    # Academic background (.md files)
├── layouts/          # Layout.astro (base), ProjectLayout.astro
├── pages/            # File-based routing
│   ├── index.astro
│   ├── about.astro
│   ├── experience.astro
│   ├── skills.astro
│   ├── education.astro
│   ├── contact.astro
│   └── projects/
│       ├── index.astro
│       └── [slug].astro
├── styles/
│   └── global.css    # Design tokens, fonts, animations
└── consts.ts         # Site-wide constants (title, URLs, email)
```

## Commands

| Command            | Action                                              |
| :----------------- | :-------------------------------------------------- |
| `npm install`      | Install dependencies                                |
| `npm run dev`      | Start local dev server at `localhost:4321`          |
| `npm run build`    | Build production site to `./dist/`                  |
| `npm run preview`  | Build and preview via Wrangler (simulates CF Pages) |
| `npm run deploy`   | Build and deploy to Cloudflare Pages                |
| `npm run astro`    | Run Astro CLI commands (`astro check`, etc.)        |

## Content

Content is written as Markdown files under `src/content/`. The three collections are:

- **`projects/`** — case studies with sanitized outcomes (most source work is confidential)
- **`experience/`** — chronological work history; filename prefix controls order
- **`education/`** — academic institutions and degrees

## Design

- Typography-first, editorial feel — Atkinson (self-hosted) for body, Palatino for display headings
- Dark mode by default; light mode via `prefers-color-scheme` + manual toggle
- No external font requests, no JS bundles, no stock illustrations
- Target: Lighthouse 100/100/100/100

## Requirements

- Node >= 22.12.0
