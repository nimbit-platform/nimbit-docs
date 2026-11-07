# What is still missing

Everything the docs wait on: features that haven't landed, screenshots, files and pages. Go through it when the work behind an entry lands, then remove the entry. Questions only the product team can answer are in [OPEN-QUESTIONS.md](./OPEN-QUESTIONS.md).

## Waiting on features in development

| What | Docs affected | Waiting on | Then |
|---|---|---|---|
| Gateways under **Settings › Onboarding › Gateways** (`/onboarding/gateways`), the gateway detail page (Traffic card, Scope and Events tabs) | All of `gateways/` (21 pages) | PR 1623 (gateway thing, namespaces, scope, credentials). Current builds still have Gateways under Administration, with no detail page. | Capture the 4 gateway screenshots; check menu labels and tab names against the merged UI |

## Screenshots

All 88 are listed by page in [SCREENSHOTS.md](./SCREENSHOTS.md) (`pnpm screenshots:list` regenerates it). None are captured yet: they get a pass of their own against a server where everything has landed.

Notes for that pass, from a trial run on a local stack:

- Sign in and open pages through the host that serves `/auth/login` (Traefik), not Breeze's own port.
- The capture script sets IoT Breeze's color mode cookie (`userSettings`, `t=l|d`) so maps and charts render in the right theme.
- 69 shots need a record id in `scripts/screenshots/shots.json` (`params`), and most need `steps` to open the dialog or tab their state describes. The widget gallery shots want one demo dashboard holding all 42 widgets, captured with `clips` per widget.
- Create the records the pages name (quickstart: thing type Room sensor, rule Room too warm, and so on) in a demo tenant before capturing.

## Downloads

| What | Docs affected | Waiting on |
|---|---|---|
| eWON Flexy BASIC program and parameter file | `downloads.mdx`, `gateways/mqtt-gateway.mdx` | The ready-made scripts. Then add them to `static/downloads/` and write the Flexy how-to (install, parameters, verify). |
| Packs | `downloads.mdx` | Which packs are offered and their files |
| Periscope | `downloads.mdx`, `gateways/periscope/*` | The license model. Until then: via NimBit support. |

## API reference

| What | Waiting on |
|---|---|
| tsflux OpenAPI spec (`openapi/tsflux/.openapi.yaml`) is stale | Export from a running tsflux (`/tsflux/swagger/doc.json`) |
| OCB OpenAPI spec (`openapi/ocb/.openapi.yaml`) is stale | Export from a running OCB (`/api/v2`) |

## Docs work not started

- German translation of all pages
- Blog restructure
