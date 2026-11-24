# What is still missing

Everything the docs wait on: features that haven't landed, screenshots, files and pages. Go through it when the work behind an entry lands, then remove the entry. Questions only the product team can answer are in [OPEN-QUESTIONS.md](./OPEN-QUESTIONS.md).

## Waiting on features in development

| What | Docs affected | Waiting on | Then |
|---|---|---|---|
| Gateways under **Devices › Gateways** (`/devices/gateways`), the gateway detail page (Traffic card, Scope and Events tabs) | All of `gateways/` (21 pages) | The IoT Breeze route move (CU-1247yh20874). PR 1623 has landed: current builds have **Devices › Gateways** and the detail page, still at `/onboarding/gateways`. | Capture the 4 gateway screenshots; check menu labels and tab names against the merged UI |

## Screenshots

All 88 are listed by page in [SCREENSHOTS.md](./SCREENSHOTS.md) (`pnpm screenshots:list` regenerates it). None are captured yet: they get a pass of their own against a server where everything has landed.

Notes for that pass, from a trial run on a local stack:

- Sign in and open pages through the host that serves `/auth/login` (Traefik), not Breeze's own port.
- The capture script sets IoT Breeze's color mode cookie (`userSettings`, `t=l|d`) so maps and charts render in the right theme.
- 69 shots need a record id in `scripts/screenshots/shots.json` (`params`), and most need `steps` to open the dialog or tab their state describes. The widget gallery shots want one demo dashboard holding all 42 widgets, captured with `clips` per widget.
- Create the records the pages name (quickstart: thing type Room sensor, rule Room too warm, and so on) in a demo tenant before capturing.

## IoT Breeze's German: labels to fix in the app

Found while translating the docs. The German docs follow the app's labels exactly, so each fix in the app means a small docs change too (search the German pages for the label).

**No German translation** (the German docs show the English label):

| Label | Where |
|---|---|
| Search tags | Event type properties |
| Rule alarms per thing, Connectivity outages, Geofence dwell | Shipped incident policy names (`ocb-contracts`) |
| Number (custom field type) | Incident fields: only `enum` and `text` have keys |
| Shape, Series, Chart definition, Image source, Search labels | Widget setup (Gauge, Custom chart, Image, File list) |
| On until | Workspace settings › Features, Ask Nimble and Knowledge |
| Method, Headers | Webhook action |
| X.509 Certificate | Thing credentials |
| Read the platform and the other API key scope labels | API key scopes |
| Overview, Logs, Snapshot, Metrics, Mapping, Config, proposals screen | Periscope's own web UI (English only?) |
| Pipeline editor labels (Request, Response, Expression, Decision Table, …) | GoRules editor in Clean up data |

**Inconsistent or wrong German:**

- Events: "Event Typen", "Ereignistypen", "Ereignis" and "Events" are all used. Pick one.
- Measure: "Telemetrie" (`common:measure`), "Messwert" (canvas), "Telemetrien" for Measures. A measure is a "Messwert"; "Telemetrie" is the stream.
- Acknowledged: `common:acknowledged` is "Anerkannt", elsewhere "Quittieren", "Nicht quittiert".
- Thing type: "Thing Typ", "Thing-Typ" and "Thing Typen" mixed; correct German is "Thing-Typ".
- "Alternative Thing -ID" has a stray space.
- `lastNUnit`: "Letze" instead of "Letzte" (dashboard time ranges).
- Knowledge level tab Things is "Dinge" (`contexus:tabThings`), everywhere else "Things".
- Username: "Nutzername" (things) vs "Benutzername" elsewhere.
- Tenant vs "Mandant" (Mandanteneinstellungen) and a few "du" strings where the app otherwise says "Sie".
- Thing type measure form says "Mindestwert" / "Maximaler Wert", thresholds say "Minimalwert" / "Maximalwert".

**English app strings with typos:** "Embedd" (dashboard More menu), "Colour by" (map; the app is otherwise American English), "Subscriptions will not be send as Email" (reports).

## Downloads

| What | Docs affected | Waiting on |
|---|---|---|
| eWON Flexy BASIC program and parameter file | `downloads.mdx`, `gateways/mqtt-gateway.mdx` | The ready-made scripts. Then add them to `static/downloads/` and write the Flexy how-to (install, parameters, verify). |
| Packs | `downloads.mdx` | Which packs are offered and their files |
| Periscope | `downloads.mdx`, `gateways/periscope/*` | The license model. Until then: via NimBit support. |

## API reference

| What | Waiting on |
|---|---|

## Docs work not started

- German translation of all pages
- Blog restructure
