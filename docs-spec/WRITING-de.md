# German docs: how we translate

The German pages live in `i18n/de/docusaurus-plugin-content-docs/current/`, one file per English page under `docs/`, at the same path. [WRITING.md](./WRITING.md) applies in full. This page adds what is specific to German. The worked example is `get-started/quickstart.mdx`: compare it with the English page before translating your first one.

## Voice

- Address the reader as **Sie**, as IoT Breeze does. Never "du".
- Write German that reads as if it were written in German, not translated: short sentences, active voice, verbs instead of noun chains ("Speichern Sie" rather than "Die Speicherung erfolgt").
- Steps start with the verb: "Öffnen Sie …", "Wählen Sie …", "Geben Sie … ein".
- English "select" (a button, a tab, an option) is **wählen**: "Wählen Sie **Speichern**." Not "klicken", not "selektieren".
- Keep it as short as the English. Don't add explanations the English page doesn't have.

## UI labels: the app's German, exactly

Bold text is a label on screen. Write it exactly as the German IoT Breeze shows it, including the app's own spelling ("Thing Typ erstellen", "Dashboard Name"), even where German grammar would write it differently. Readers look for that exact text.

Look labels up in the app's translations:

```
pnpm i18n:label "Add measure" "Devices › Thing Types"
```

The tool lists every German translation of the English string with its namespace and key. When there are several, take the one from the screen the step is on: `rule:` keys on the rule canvas, `thing-details:` on a thing's page, `shell:` in the menu. If unsure, grep `apps/iot-breeze` for the key to see where it is used. For a string with a placeholder (`Published · v{version}`), grep the German file for the key and fill in the value (`Veröffentlicht · v1`).

When a label has no German translation in the app, keep the English label in bold, and add it to the list in your report: the app has to translate it.

Menu paths use ` › ` between levels, as in English: **Geräte › Thing Typen**.

## Words in running text

In running text (not bold), use correct German, with these terms. They follow the app wherever the app is consistent.

| English | German | Note |
| --- | --- | --- |
| thing / things | das Thing / die Things | Not "Gerät" when the record is meant. A physical device is "Gerät". |
| thing type | der Thing-Typ | Hyphenated in running text. |
| interface | das Interface | |
| measure | der Messwert | The value a thing type declares. "Telemetrie" for the stream of readings. |
| reading | der Messwert | |
| telemetry | die Telemetrie | |
| dashboard / widget / canvas | das Dashboard / das Widget / das Canvas | |
| rule | die Regel | |
| event / event type | das Event / der Event-Typ | The app's menu says "Events" and "Event Typen". |
| incident | der Vorfall | |
| incident policy | die Vorfallsrichtlinie | |
| alarm | der Alarm | |
| notification channel | der Benachrichtigungskanal | |
| mail template | die E-Mail-Vorlage | |
| tenant | der Tenant | |
| organization / group / role / user | die Organisation / die Gruppe / die Rolle / der Benutzer | |
| API key | der API-Schlüssel | |
| credentials | die Zugangsdaten | |
| gateway / edge | das Gateway / die Edge | |
| geofence | der Geofence | |
| report | der Bericht | |
| connector | der Konnektor | |
| topic / payload / broker | das Topic / die Payload / der Broker | |
| onboarding code | der Onboarding-Code | |
| namespace / scope | der Namespace / der Scope | |
| publish (a thing type) | veröffentlichen | |
| draft | der Entwurf | |
| guided tour | die geführte Tour | |
| sign in | anmelden | |
| tenant admin | Tenant-Admin | |
| quickstart | der Quickstart | |

Never translate: IoT Breeze, NimBit, Nimble, Periscope, tsflux, nbq, OCB, Contexus, MQTT, Sparkplug, Modbus, OPC UA, Node-RED, eWON Flexy, InfluxDB line protocol, product and protocol names in general.

Typography: German quotation marks „…“ in prose. Decimal comma in prose ("21,4 °C"), but never change numbers inside code, JSON, URLs or examples the reader copies. A space before units: "15 °C", "10 s". Dashes: " – " (en dash with spaces).

## What stays exactly as it is

- **Code blocks, inline code, payloads, topics, URLs, file names, ids, field names.** Example values the reader types into the app (`Room sensor`, `Meeting room 1`) stay English too, so they match the screenshots and the English page.
- **Links**: the same relative paths as the English page (`../watch/alert-channels.mdx`) and the same anchors. Translate the link text.
- **Imports and components**: `<TourLink id="…" />`, `<AppLink to="…">` (translate the children), `<Screenshot … />`: translate `alt` and `caption`, keep `page`, `id`, `route` and `state` (the screenshot author works from `state`).
- **Frontmatter keys** and the values of `type`, `app`, `sidebar_position`. Translate `title`, `sidebar_label`, `description`. Quote a value that contains ": ".
- `{/* TODO(product): … */}` comments: keep them as they are, in English.

## Headings keep their English anchors

Give every heading the anchor of its English original, so links with `#anchor` work in both languages:

```
## Eine Regel anlegen, die ein Event auslöst {#create-a-rule-that-raises-an-event}
```

The anchor is the English heading's slug: lowercase, spaces to `-`, punctuation dropped (`## 1. Create a thing type` → `#1-create-a-thing-type`). A heading that already has `{#…}` keeps it.

## Admonitions

Translate the title: `:::info What you need` → `:::info Was Sie brauchen`, `:::tip`, `:::warning`, `:::note` keep their type.

## Keeping translations current

Each German page records the English commit it was translated from:

```
translated_from: 2e2ea8c
```

`pnpm i18n:status` lists pages that are missing, still untranslated (copied in with `untranslated: true` before a build, shown with a banner), or outdated because the English page changed after `translated_from`. When you update a translation, set `translated_from` to `git log -1 --format=%h -- docs/<page>`.
