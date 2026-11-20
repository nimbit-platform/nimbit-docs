# How we write the NimBit docs

This is the contract for every page under `docs/`. It is checked in so humans and agents
write to the same standard. The site structure it serves is described in the plan doc
"Nimbit docs: content plan and onboarding path", section *Site structure v2*.

## Who reads this

| Reader | Wants | Typical first page |
| --- | --- | --- |
| Operator | Watch things, react to problems, ask questions | Work an incident |
| Solution builder | Model devices, connect them, build dashboards and rules | Quickstart |
| Developer | Exact protocols, payloads, API contracts | Send data over MQTT, API overview |
| Administrator | Users, access, tenant settings | Invite a colleague |

Never assume the reader has read another page first, except in a tutorial sequence.

## Page types

Every page has `type:` in its frontmatter. One page, one job, one type.

| Type | Job | Title style | Never contains |
| --- | --- | --- | --- |
| `tutorial` | Teach a newcomer by doing, one guaranteed path | Outcome: "Get your first device online" | Options and alternatives |
| `how-to` | Get one task done for someone who knows the basics | Verb phrase: "Send alerts to Microsoft Teams" | Background beyond one sentence |
| `concept` | Explain how something works and when to use what | Noun phrase: "Events, incidents and notifications" | Click-by-click steps |
| `reference` | Be complete and exact, for looking up | Noun phrase: "MQTT topics and client ID" | Narrative, opinions |
| `landing` | Section front page or role path: orient and route | Section name | Anything not also on a linked page |

### Frontmatter

```yaml
---
title: Send alerts to Microsoft Teams          # the H1; don't repeat it as "# …" in the body
sidebar_label: Alerts to Teams, Slack or webhook # optional, only if the title is too long for the sidebar
description: Post warnings and errors from your things into a Teams channel.  # ≤ 160 chars, one sentence, used in search and link cards
type: how-to
app:
  routes: ["/manage/notification-channels"]   # IoT Breeze routes this page helps with (help drawer)
  tour: find-your-way-alerts                     # only if a guided tour exists for exactly this
---
```

No `id:` (the file name is the id and the URL). No `slug:`. File names are short kebab-case
nouns: `mqtt.mdx`, `work-an-incident.mdx`.

### Templates

**tutorial**

```
<one paragraph: what you'll have at the end, how long it takes>

:::info What you need
<bullets>
:::

## 1. <Step as an action>
<instructions>. <What you see now.>
<Screenshot …/>

## 2. …

## What you built
<2–3 sentences>

## Next
<2–4 links>
```

**how-to**

```
<one sentence: the outcome. Optional second sentence linking the concept page.>

## Before you start
- <role or permission needed>
- <anything that must exist first, linked>

## Steps                        (or several task-named H2s if the job has distinct parts)
1. Open **Menu › Path** and select **Button**.
2. …

## Check that it worked
<what the reader sees when it worked>

## If it doesn't work
- **<Symptom>**: <cause and fix>.
(2–4 items, only real ones)

## Related
- [<Concept>](…) · [<Reference>](…)
```

**concept**

```
<summary paragraph: what it is and why it exists, in plain words>

```mermaid
<one diagram: flow, parts, or states>
```

## <The parts>            (table or short sections)
## How they work together
## Choosing between …     (a "You want… / Use…" table when there are options)
## Limits                 (only real limits)
## Related
```

**reference**

```
<one sentence: what this lists>

## <Group>
| Field / Option / Code | Type / Values | Meaning |
…
```
Complete. If something can't be confirmed from code, leave it out and add a `{/* TODO(product): … */}`.

**landing (section index)**

```
<2–3 sentences: what this section is for, the question it answers>

```mermaid
<optional: the section's one picture>
```

## Understand
- [<Concept title>](./x.mdx): <one line>

## Do
- [<How-to title>](./y.mdx): <one line>

## Look up
- [<Reference title>](./z.mdx): <one line>
```

## Writing rules

- Second person, present tense, active voice, short sentences. Say what to do; say why only when the reader needs it to choose.
- UI labels in **bold**, exactly as the English UI shows them. Menu paths as **Settings › Onboarding › Thing Types** only where the reader must navigate there.
- Reader words in headings and titles, not internal names. "Clean up incoming data", not "Transformation pipeline". Mention the UI name in the text.
- Code must run as pasted except for placeholders in angle brackets inside backticks: `<tenantId>`. Use `<Tabs>` for protocols or languages; `groupId` so choices persist.
- At most two admonitions per page. Use `:::tip`, `:::info`, `:::warning`; `:::danger` only for data loss.
- About 1,200 words maximum. Longer means two pages.
- No marketing words: seamless, powerful, easily, simply, just, robust, leverage, unlock, effortless.
- No filler intros ("In this guide we will…"). Start with the outcome.
- Numbers, limits and defaults only when confirmed in code. Unknowns: leave out, add `{/* TODO(product): question */}`.
- American spelling, as the UI uses: "organization", "color". "IoT Breeze" for the app, "NimBit" for the company and platform. Ingestion is tsflux, the query engine is nbq, the platform backend is OCB.
- MDX 3: no HTML comments; use `{/* */}`. Escape `<` and `{` in prose, or use backticks.
- Links: relative file links (`../watch/work-an-incident.mdx`). Every link must resolve; the build fails on broken links.

## Screenshots and diagrams

- Diagrams: Mermaid code blocks (they follow light/dark). Keep them to ≤ 8 nodes.
- Screenshots: `<Screenshot page="<section>/<file>" id="01-name" route="/route/:id" state="what must be on screen" alt="what it shows" />`
  imported from `@site/src/components/Screenshot`. Only where the reader needs to recognise a screen: typically 1–3 per how-to, 0–1 per concept, 0 in reference except the widget gallery.

## Gold standard

See `docs-spec/examples/` for one concept and one how-to written to this contract.
