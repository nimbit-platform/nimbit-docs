# Docs sync: keep the docs in step with the platform

A scheduled Claude session runs this on weekday evenings. It compares what merged into nimbit
`development` since the last sync with what the docs say, and puts the fixes on a branch for review.
Edit this file to change what the job does; the scheduled task only points here.

## State

`docs-spec/docs-sync.json` names the docs branch to start from and the last nimbit `development` commit
the docs were checked against:

```json
{ "base": "<docs branch>", "nimbit": "<commit>", "checked": "<YYYY-MM-DD>" }
```

`base` is the branch that holds the current docs. Set it to `development` once the docs rebuild is merged
there. The job reads this file from `development` first and falls back to `claude/bold-keller-1g3i6v`
while `development` doesn't have it.

## Steps

1. **Get both repos.** `nimbit-platform/nimbit-docs` and `nimbit-platform/nimbit` (branch `development`,
   history back to the commit in `docs-sync.json`). In the docs, start from the newest `docs-sync/*` branch
   not yet merged into `base` if there is one (so a run before the last is reviewed builds on it), else
   from `base`; read `docs-sync.json` there. Run `pnpm install` in the docs.
2. **Nothing new?** If nimbit `development` is still at the recorded commit, stop: no branch, no message.
3. **Mechanical checks.**
   - `pnpm check:app --repo <nimbit> --ref origin/development`: every `app.routes`, `app.primary` and
     `app.tour` against the app.
   - `node scripts/sync-tours.mjs --repo <nimbit>` (needs `pnpm install` in nimbit; skip with a note if it
     fails), then `git diff src/data/tours.json`.
4. **Read the changes.** `git log --no-merges <recorded>..origin/development` in nimbit, and the diffs of
   what users or integrators see:
   - `apps/iot-breeze/app/**` (screens), `apps/iot-breeze/public/locales/{en,de}/*.json` (labels the docs
     quote), `apps/iot-breeze/components/GuidedTours/**`;
   - `apps/tsflux/docs/**`, `apps/nbq/**/openapi*`, `apps/ocb/**` API changes (endpoints, limits, status codes);
   - `apps/periscope/**` config and CLI flags, `docs/edge-gateways-plan.md`, `docs/nats-auth.md`
     (gateways, MQTT topics, credentials, limits);
   - release notes or changelog entries.
   Skip refactors, tests and internal code that changes nothing a reader does or sees.
5. **Fix the docs** for each change that makes a page wrong or incomplete, English first:
   - follow `CLAUDE.md` and the voice of the pages around it; quote app labels exactly as in
     `public/locales/en/*.json`;
   - new screen → `app.routes` on the page that covers it (and `app.primary` if it shares a route);
   - a feature with no page yet → don't write one; list it in the report;
   - then the German page for every English page changed, from `public/locales/de` labels, Sie-form, and
     `translated_from` set to the English commit (`node scripts/i18n/status.mjs` must show nothing
     outdated).
6. **Verify.** `pnpm check:app …` passes, `pnpm build` passes (both locales, `onBrokenLinks: throw`).
7. **Record.** Set `docs-sync.json` to the nimbit commit you checked and today's date.
8. **Push** to a new branch `docs-sync/<YYYY-MM-DD>` from `base`. Never push to `master` (it deploys
   production), `development` or `base` itself, and don't open a pull request.
9. **Report** in the session's final message, short:
   - nimbit range checked (`<from>..<to>`, n commits);
   - pages changed, one line each with the nimbit commit that caused it;
   - things that need a person: features with no page, behaviour you couldn't confirm from the code,
     check failures you couldn't fix;
   - the branch name, or "no changes needed".

## Limits

- Change only what a merged commit made wrong. No restyling, no rewording of pages the range didn't touch.
- Facts come from the nimbit code and its docs at the checked commit, never from memory. When the code
  is unclear, leave the page and list the question in the report.
- Plans (`*-plan.md`) describe intent: document only what the code at the checked commit does.
