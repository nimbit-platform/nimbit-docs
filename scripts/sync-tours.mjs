#!/usr/bin/env node
/**
 * Reads IoT Breeze's guided tours and guides from the app source and writes src/data/tours.json:
 * [{ id, title, route, guide?, guideTitle? }]. TourLink and the guided tours page use it.
 *
 *   node scripts/sync-tours.mjs [--repo ../nimbit]
 *
 * Bundles apps/iot-breeze/components/GuidedTours/{tours,guides} with the app's esbuild, so it needs
 * `pnpm install` in the nimbit repo. Re-run when tours are added or renamed.
 */
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const args = process.argv.slice(2);
const repo = path.resolve(args.includes("--repo") ? args[args.indexOf("--repo") + 1] : path.join(ROOT, "../nimbit"));
const app = path.join(repo, "apps/iot-breeze");
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "tours-"));
const entry = path.join(dir, "entry.ts");

// Titles are i18n helpers; their English fallback is the defaultValue.
fs.writeFileSync(
  entry,
  `import { TOURS } from '${app}/components/GuidedTours/tours';
import { GUIDES } from '${app}/components/GuidedTours/guides';
const title = (t: any): string => typeof t === 'string' ? t : t?.defaultValue ?? t?.fallback ?? '';
const guides = new Map(GUIDES.map((g: any) => [g.id, title(g.title)]));
const out = TOURS.map((t: any) => ({
  id: t.id,
  title: title(t.title),
  route: t.steps?.[0]?.route ?? '/',
  ...(t.chapter?.guide ? { guide: t.chapter.guide, guideTitle: guides.get(t.chapter.guide) } : {}),
}));
process.stdout.write(JSON.stringify(out, null, 2) + '\\n');
`,
);

const esbuild = createRequire(path.join(repo, "package.json")).resolve("esbuild/bin/esbuild");
const bundle = path.join(dir, "out.cjs");
execFileSync(
  esbuild,
  [entry, "--bundle", "--platform=node", "--format=cjs", `--tsconfig=${path.join(app, "tsconfig.json")}`,
    "--loader:.svg=text", "--loader:.png=empty", "--loader:.css=empty", "--log-level=error", `--outfile=${bundle}`],
  { cwd: app, stdio: "inherit" },
);
const json = execFileSync(process.execPath, [bundle], { cwd: app }).toString();
const target = path.join(ROOT, "src/data/tours.json");
fs.writeFileSync(target, json);
fs.rmSync(dir, { recursive: true, force: true });
console.log(`Wrote ${JSON.parse(json).length} tours to ${path.relative(ROOT, target)}`);
