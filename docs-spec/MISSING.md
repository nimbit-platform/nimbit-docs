# What is still missing

Everything the docs wait on: features that haven't landed, screenshots, files and pages. Go through it when the work behind an entry lands, then remove the entry. Questions only the product team can answer are in [OPEN-QUESTIONS.md](./OPEN-QUESTIONS.md).

## Waiting on features in development

| What | Docs affected | Waiting on | Then |
|---|---|---|---|
| Gateways under **Settings › Onboarding › Gateways** (`/onboarding/gateways`), the gateway detail page (Traffic card, Scope and Events tabs) | All of `gateways/` (21 pages) | PR 1623 (gateway thing, namespaces, scope, credentials). Current builds still have Gateways under Administration, with no detail page. | Capture the 4 gateway screenshots; check menu labels and tab names against the merged UI |

## Screenshots

Captured with `pnpm screenshots` (see `scripts/screenshots/capture.mjs`). Until a shot is captured, the page shows a placeholder naming the route and what the screen must show.

| Shot | Why it is missing |
|---|---|
| `gateways/add-a-gateway/01-onboarding-code` | Needs PR 1623 |
| `gateways/mqtt-gateway/01-mqtt-credential` | Needs PR 1623 |
| `gateways/install/01-gateway-online` | Needs PR 1623 |
| `gateways/fleet-health/01-traffic` | Needs PR 1623 |

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
