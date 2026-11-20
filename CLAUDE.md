# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NimBit Documentation Portal — a Docusaurus 3.9.2 static documentation site for the NimBit/IoTBreeze IoT platform. Content is organized into three audience-specific sections: User Manual (business users), Developer Docs (software developers), and Changelog. The site supports English and German (i18n) and links to the API references each IoT Breeze service serves itself.

## Commands

| Command | Purpose |
|---------|---------|
| `pnpm start` | Dev server at localhost:3000 |
| `pnpm build` | Production build into `build/` |
| `pnpm serve` | Serve production build locally |
| `pnpm clear` | Clear Docusaurus cache (useful when builds behave unexpectedly) |
| `pnpm typecheck` | Run TypeScript type checking (`tsc`) |
| `pnpm write-translations` | Generate i18n translation files |

**Note:** The project uses **pnpm** (9.15.3) as its package manager, not yarn or npm, despite the README referencing yarn. The `.npmrc` enforces engine-strict mode.

## Architecture

### Content Structure

Documentation lives in `docs/` with three top-level sections, each mapped to an auto-generated sidebar in `sidebars.ts`:

- `docs/user/` — User Manual (business-facing): onboarding, monitoring, dashboards, automation, ETL pipelines, config, tenant setup, user management, files, reporting
- `docs/developer/` — Developer Docs: API references, deployment guides, technical docs
- `docs/changelog/` — Release notes

Sidebar ordering and metadata are controlled by `_category_.json` files in each directory. The `generate_categories.js` script can auto-generate these.

### API Documentation

The docs hold no OpenAPI specs. Each service serves its own Scalar reference on the host the reader opens IoT Breeze on (`/tsflux/swagger`, `/nbq/docs`, `/ocb/api/v2`, `/ocb/api/v1`). `docs/api/reference.mdx` links to them through `src/components/ApiReferenceLinks`, built on the reader's app address (`src/lib/appUrl.ts`), so the reference always matches their installation.

### IoT Breeze help panel

IoT Breeze shows these docs in its help panel. Two things serve it, and both are a contract with the app:
- `plugins/app-routes.js` writes `app-routes.json` at each locale's root from every page's `app.routes` (and `app.tour`) front matter. Keep `app.routes` accurate when a page covers an app screen. When several pages cover one route, the app opens the first; set `app.primary: true` (or a list of routes) on the page it should open.
- `pnpm check:app --repo <nimbit> --ref origin/development` checks `app.routes`, `app.primary` and `app.tour` against the app's screens and tours. A scheduled session runs it with the rest of `docs-spec/docs-sync.md` on weekday evenings.
- `?embed=1` (`src/lib/embed.ts`, `src/theme/Root.tsx`, `html[data-embed]` in `custom.css`) hides the site chrome and posts `{ type: "nimbit-docs:page", permalink, title, locale }` to the app on every page.

### Source Code (`src/`)

- `src/pages/` — Custom pages: `index.tsx` (homepage with card navigation to User Manual, Developer Docs, API Docs), `ai.tsx` (AI section landing)
- `src/components/` — Reusable React components: `HomepageFeatures/` (feature cards), `ProcessFlow.js` (user workflow visualization)
- `src/css/custom.css` — Global theme styling (primary color: `#3dc1d3`), navbar/sidebar icons, dark mode adjustments
- `src/types/images.d.ts` — TypeScript module declarations for image imports

### AI-readable output

`plugins/llms.js` writes, per locale, a Markdown copy of every page (`<page>.md`), `llms.txt` (index) and `llms-full.txt` (all pages). The page actions (`src/theme/DocItem/Footer`) link the copy, copy it, and open it in Claude or ChatGPT. Algolia Ask AI turns on when the build has `ALGOLIA_ASSISTANT_ID`.

### Internationalization

- Default locale: English; secondary: German (`de`)
- German translations in `i18n/de/` covering navbar, footer, and documentation content
- Locale switcher in the navbar

### Deployment

CI/CD is handled via Bitbucket Pipelines (`bitbucket-pipelines.yml`) with two branch-based targets:

| Branch | Trigger | Target |
|--------|---------|--------|
| `development` | push | Deploys to `cparsinnovationlab.bitbucket.io/nimbit` (Bitbucket Pages, staging) |
| `master` | push | Deploys to production FTP webserver via `lftp` — this is the public release |

- The `development` pipeline clones the Bitbucket Pages repo and copies the static build into `nimbit/`
- The `master` pipeline uploads the `build/` directory to the FTP server using the repository variables `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`, and `FTP_REMOTE_PATH`
- A push to `master` constitutes a **production release**
- Search powered by Algolia (configured in `docusaurus.config.ts`)

## Key Configuration Files

- `docusaurus.config.ts` — Main site config: plugins, themes, navbar, footer, Algolia search, i18n, CSP headers
- `sidebars.ts` — All three sidebars use `autogenerated` type from directory structure
- `webpack.config.js` — Custom plugin disabling devtool (source maps) for security
- `babel.config.js` — Uses `@docusaurus/core` preset

## Conventions

- File naming: kebab-case for docs, PascalCase for React components
- Documentation files use `.mdx` for pages needing React components, `.md` for pure markdown
- Static assets (images, icons) go in `static/img/` and `static/website/`
- Dark mode icon support uses CSS `filter: invert()` on sidebar/navbar icons
- `onBrokenLinks: "throw"` is enabled — broken internal links will fail the build
