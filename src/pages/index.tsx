import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import { usePluginData } from "@docusaurus/useGlobalData";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ArrowRight, Search } from "lucide-react";
import AuthBackground from "@site/src/components/AuthBackground";
import BlogVisual from "@site/src/components/BlogVisual";
import { categoryLabel, formatDate } from "@site/src/lib/blog";

type FeedPost = {
  date: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  visual: string;
  question: string;
  answer: string;
};
type FeedChange = { version: string; file: string; kind: "feat" | "impr" | "fix"; text: string };
type Feed = { posts: FeedPost[]; changes: FeedChange[]; latest: { version: string; date: string; file: string } | null };

const eyebrow = "font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--docs-color-text-100)]";
const h2 = "m-0 text-[32px]! font-semibold! leading-[1.05]! tracking-[-0.03em] lg:text-[44px]!";
const plainLink = "text-[var(--ifm-font-color-base)]! no-underline hover:no-underline";

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <span className={eyebrow}>
      <span className="text-[var(--nb-tag)]">[ {n} ]</span> · {children}
    </span>
  );
}

/** Opens the navbar's DocSearch dialog. */
function openSearch() {
  (document.querySelector(".DocSearch-Button") as HTMLButtonElement | null)?.click();
}

const popular = [
  { label: translate({ id: "home.popular.widgets", message: "Widget gallery" }), to: "/docs/visualize/widgets" },
  { label: translate({ id: "home.popular.topics", message: "MQTT topics" }), to: "/docs/connect/mqtt-topics" },
  { label: translate({ id: "home.popular.apiKey", message: "API key" }), to: "/docs/administer/api-key" },
  { label: translate({ id: "home.popular.geofence", message: "Geofence" }), to: "/docs/watch/geofence" },
];

const protocols = [
  { label: "MQTT", to: "/docs/connect/mqtt" },
  { label: "HTTP", to: "/docs/connect/http" },
  { label: translate({ id: "home.protocol.lineProtocol", message: "Line protocol" }), to: "/docs/connect/line-protocol" },
  { label: "OPC UA", to: "/docs/gateways/periscope/opc-ua" },
  { label: "Sparkplug B", to: "/docs/gateways/periscope/sparkplug-and-mqtt" },
  { label: "Modbus", to: "/docs/gateways/periscope/modbus" },
  { label: "Siemens S7", to: "/docs/gateways/periscope/s7" },
  { label: "Node-RED", to: "/docs/automate/node-red" },
  { label: translate({ id: "home.protocol.simulator", message: "Device simulator" }), to: "/docs/connect/simulate" },
];

const paths = [
  {
    title: translate({ id: "home.path.operate.title", message: "Operate" }),
    text: translate({ id: "home.path.operate.text", message: "Watch your things, work incidents and events, ask Nimble." }),
    cta: translate({ id: "home.path.operate.cta", message: "For operators" }),
    to: "/docs/get-started/roles/operator",
  },
  {
    title: translate({ id: "home.path.build.title", message: "Build" }),
    text: translate({ id: "home.path.build.text", message: "Model devices, connect them, build dashboards and rules." }),
    cta: translate({ id: "home.path.build.cta", message: "For solution builders" }),
    to: "/docs/get-started/roles/builder",
  },
  {
    title: translate({ id: "home.path.develop.title", message: "Develop" }),
    text: translate({ id: "home.path.develop.text", message: "Protocols, payloads, the ingest, query and platform APIs, webhooks." }),
    cta: translate({ id: "home.path.develop.cta", message: "For developers" }),
    to: "/docs/get-started/roles/developer",
  },
  {
    title: translate({ id: "home.path.administer.title", message: "Administer" }),
    text: translate({ id: "home.path.administer.text", message: "Users, groups and roles, API keys, tenant settings." }),
    cta: translate({ id: "home.path.administer.cta", message: "For administrators" }),
    to: "/docs/get-started/roles/administrator",
  },
];

const steps = [
  { tag: translate({ id: "home.step.model", message: "Model" }), title: translate({ id: "home.step.type", message: "Create a thing type" }), text: translate({ id: "home.step.type.text", message: "Describe the values a room sensor sends." }) },
  { tag: translate({ id: "home.step.model", message: "Model" }), title: translate({ id: "home.step.thing", message: "Create a thing" }), text: translate({ id: "home.step.thing.text", message: "Register one sensor of that type." }) },
  { tag: translate({ id: "home.step.connect", message: "Connect" }), title: translate({ id: "home.step.simulate", message: "Simulate the device" }), text: translate({ id: "home.step.simulate.text", message: "Send readings without any hardware." }) },
  { tag: translate({ id: "home.step.visualize", message: "Visualize" }), title: translate({ id: "home.step.dashboard", message: "Build a dashboard" }), text: "" },
];

const areas: { title: string; to: string; links: { label: string; to: string }[] }[] = [
  {
    title: translate({ id: "home.section.connect.title", message: "Connect devices" }),
    to: "/docs/connect",
    links: [
      { label: translate({ id: "home.area.mqtt", message: "Send data over MQTT" }), to: "/docs/connect/mqtt" },
      { label: translate({ id: "home.area.http", message: "Send data over HTTP" }), to: "/docs/connect/http" },
      { label: translate({ id: "home.area.credentials", message: "Device credentials" }), to: "/docs/connect/credentials" },
      { label: translate({ id: "home.area.format", message: "Message format" }), to: "/docs/connect/message-format" },
    ],
  },
  {
    title: translate({ id: "home.section.gateways.title", message: "Gateways and edge" }),
    to: "/docs/gateways",
    links: [
      { label: translate({ id: "home.area.howGateways", message: "How gateways work" }), to: "/docs/gateways/how-gateways-work" },
      { label: translate({ id: "home.area.addGateway", message: "Add a gateway" }), to: "/docs/gateways/add-a-gateway" },
      { label: translate({ id: "home.area.periscope", message: "Install Periscope" }), to: "/docs/gateways/periscope/install" },
      { label: translate({ id: "home.area.fleet", message: "Fleet health" }), to: "/docs/gateways/fleet-health" },
    ],
  },
  {
    title: translate({ id: "home.section.model.title", message: "Model your data" }),
    to: "/docs/model",
    links: [
      { label: translate({ id: "home.area.thingType", message: "Create a thing type" }), to: "/docs/model/create-thing-type" },
      { label: translate({ id: "home.area.register", message: "Register a thing" }), to: "/docs/model/register-thing" },
      { label: translate({ id: "home.area.interface", message: "Reuse an interface" }), to: "/docs/model/reuse-interface" },
      { label: translate({ id: "home.area.versions", message: "Drafts and versions" }), to: "/docs/model/drafts-and-versions" },
    ],
  },
  {
    title: translate({ id: "home.section.visualize.title", message: "Visualize" }),
    to: "/docs/visualize",
    links: [
      { label: translate({ id: "home.area.widgets", message: "Widget gallery" }), to: "/docs/visualize/widgets" },
      { label: translate({ id: "home.area.smart", message: "Smart dashboards" }), to: "/docs/visualize/smart-dashboard" },
      { label: translate({ id: "home.area.map", message: "Things on a map" }), to: "/docs/visualize/map" },
      { label: translate({ id: "home.area.share", message: "Share or embed" }), to: "/docs/visualize/share" },
    ],
  },
  {
    title: translate({ id: "home.section.watch.title", message: "Watch and respond" }),
    to: "/docs/watch",
    links: [
      { label: translate({ id: "home.area.incident", message: "Work an incident" }), to: "/docs/watch/work-an-incident" },
      { label: translate({ id: "home.area.policy", message: "Incident policy" }), to: "/docs/watch/incident-policy" },
      { label: translate({ id: "home.area.alerts", message: "Alerts to Teams or Slack" }), to: "/docs/watch/alert-channels" },
      { label: translate({ id: "home.area.health", message: "Thing health" }), to: "/docs/watch/thing-health" },
    ],
  },
  {
    title: translate({ id: "home.section.automate.title", message: "Automate" }),
    to: "/docs/automate",
    links: [
      { label: translate({ id: "home.area.threshold", message: "Alert on a threshold" }), to: "/docs/automate/threshold-alert" },
      { label: translate({ id: "home.area.webhook", message: "Call a webhook" }), to: "/docs/automate/webhook-from-rule" },
      { label: translate({ id: "home.area.report", message: "Weekly report" }), to: "/docs/automate/weekly-report" },
      { label: "Node-RED", to: "/docs/automate/node-red" },
    ],
  },
  {
    title: translate({ id: "home.section.knowledge.title", message: "Knowledge and AI" }),
    to: "/docs/knowledge",
    links: [
      { label: translate({ id: "home.area.ask", message: "Ask a question" }), to: "/docs/knowledge/ask" },
      { label: translate({ id: "home.area.sites", message: "Map your sites" }), to: "/docs/knowledge/map-sites" },
      { label: translate({ id: "home.area.outside", message: "Outside data sources" }), to: "/docs/knowledge/outside-source" },
      { label: translate({ id: "home.area.graph", message: "The knowledge graph" }), to: "/docs/knowledge/knowledge-graph" },
    ],
  },
  {
    title: translate({ id: "home.section.administer.title", message: "Administer" }),
    to: "/docs/administer",
    links: [
      { label: translate({ id: "home.area.invite", message: "Invite a colleague" }), to: "/docs/administer/invite" },
      { label: translate({ id: "home.area.roles", message: "Roles and permissions" }), to: "/docs/administer/roles" },
      { label: translate({ id: "home.area.apiKey", message: "Create an API key" }), to: "/docs/administer/api-key" },
      { label: translate({ id: "home.area.tenant", message: "Tenant settings" }), to: "/docs/administer/tenant-settings" },
    ],
  },
  {
    title: translate({ id: "home.section.troubleshooting.title", message: "Troubleshooting" }),
    to: "/docs/troubleshooting",
    links: [
      { label: translate({ id: "home.area.noSignal", message: "No signal from a device" }), to: "/docs/troubleshooting/no-signal" },
      { label: translate({ id: "home.area.empty", message: "Empty dashboard" }), to: "/docs/troubleshooting/empty-dashboard" },
      { label: translate({ id: "home.area.rule", message: "Rule not firing" }), to: "/docs/troubleshooting/rule-not-firing" },
      { label: translate({ id: "home.area.glossary", message: "Glossary" }), to: "/docs/troubleshooting/glossary" },
    ],
  },
];

const curl = (
  <>
    <span className="text-[var(--docs-color-text-100)]">$</span> curl -X POST "&lt;structured-url&gt;" \{"\n"}
    {"  "}-H <span className="text-[var(--nb-chart2)]">"Authorization: Bearer &lt;token&gt;"</span> \{"\n"}
    {"  "}-H <span className="text-[var(--nb-chart2)]">"Content-Type: application/json"</span> \{"\n"}
    {"  "}-d <span className="text-[var(--nb-chart2)]">'{"{"}"id": "&lt;deviceId&gt;", "thingType": "room_sensor",{"\n"}
    {"       "}"data": {"{"}"temperature": 22.5{"}}"}'</span>
    {"\n\n"}
    <span className="text-[var(--ifm-color-primary)]">200</span> <span className="text-[var(--docs-color-text-100)]">·</span> {'{"message": "success", "processed": 1, …}'}
  </>
);

function Hero({ feed }: { feed: Feed }) {
  const { i18n } = useDocusaurusContext();
  return (
    <div className="relative isolate overflow-hidden border-0 border-b border-solid border-[var(--docs-color-border)]">
      {/* The IoT Breeze sign-in backgrounds, so the docs open like the app does. */}
      <AuthBackground />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--ifm-background-color)]" />
      <section className="relative z-10 mx-auto flex max-w-[1360px] flex-col gap-10 px-6 pb-16 pt-12 lg:px-10 lg:pb-[72px] lg:pt-14">
        <div className="flex flex-wrap justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--docs-color-text-100)]">
          <span>[ 00 ] · <Translate id="home.meta.docs">Documentation</Translate> · NimBit / IoT Breeze</span>
          {feed.latest && (
            <Link to={`/docs/changelog/${feed.latest.file}`} className="flex items-center gap-2.5 text-[var(--docs-color-text-100)]! no-underline hover:text-[var(--ifm-color-primary)]! hover:no-underline">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--nb-chart)]" />
              Release {feed.latest.version} · {formatDate(feed.latest.date)} · {i18n.locales.map((l) => l.toUpperCase()).join(" / ")}
            </Link>
          )}
        </div>

        <div className="flex flex-wrap items-end gap-14">
          <div className="flex min-w-0 flex-[999_1_620px] flex-col gap-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ifm-color-primary)]">
              <span className="text-[var(--nb-tag)]">──</span> <Translate id="home.hero.eyebrow">Guides, references, release notes</Translate>
            </span>
            <h1 className="m-0 text-[52px]! font-semibold! leading-[0.95]! tracking-[-0.04em] [text-wrap:balance] lg:text-[92px]!">
              <Translate id="home.hero.title.start">Learn it once.</Translate>{" "}
              <span className="text-[var(--ifm-color-primary)]">
                <Translate id="home.hero.title.accent">Run it everywhere.</Translate>
              </span>
            </h1>
            <p className="m-0 max-w-[44ch] text-xl leading-[30px] text-[var(--docs-color-muted)]">
              <Translate id="home.hero.text">
                Connect your devices, see their data, and act on it. Guides for the people who run IoT Breeze, and references for the people who build on it.
              </Translate>
            </p>
            <button
              type="button"
              onClick={openSearch}
              className="flex h-14 w-full max-w-[640px] cursor-text items-center gap-3 rounded-[10px] border border-solid border-[var(--nb-dash)] bg-[var(--docs-color-background)] px-4 text-left text-[17px] text-[var(--docs-color-text-100)] hover:border-[var(--ifm-color-primary)]"
            >
              <Search className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="min-w-0 flex-1 truncate">
                <Translate id="home.search">Search guides, widgets, API endpoints…</Translate>
              </span>
              <kbd className="hidden rounded border border-solid border-[var(--docs-color-border)] bg-transparent px-1.5 py-0.5 font-mono text-[11px] text-[var(--docs-color-text-100)] shadow-none sm:inline">
                Ctrl K
              </kbd>
            </button>
            <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-[var(--docs-color-text-100)]">
              <span className="uppercase">
                <Translate id="home.popular">Popular</Translate>
              </span>
              {popular.map((p) => (
                <Link key={p.to} to={p.to} className="text-[var(--ifm-color-primary)]!">
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-0 flex-[1_1_420px] overflow-hidden rounded-[14px] border border-solid border-[var(--docs-color-border)] bg-[var(--docs-color-code-background)] shadow-[0_20px_40px_-24px_rgba(13,15,18,0.25)]">
            <div className="flex items-center justify-between border-0 border-b border-solid border-[var(--docs-color-border)] px-4 py-3">
              <span className="nb-eyebrow">
                <Translate id="home.code.title">First reading · Ingest API</Translate>
              </span>
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-[var(--nb-dash)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--nb-dash)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--nb-dash)]" />
              </span>
            </div>
            <pre className="m-0 whitespace-pre-wrap rounded-none bg-transparent! p-[18px] font-mono text-[12.5px] leading-[21px] text-[var(--ifm-font-color-base)]!">{curl}</pre>
            <Link
              to="/docs/connect/http"
              className="flex justify-between border-0 border-t border-solid border-[var(--docs-color-border)] px-4 py-3 text-[13px] text-[var(--ifm-color-primary)]! no-underline hover:no-underline"
            >
              <Translate id="home.code.cta">Send your first reading</Translate>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="relative z-10 border-0 border-t border-solid border-[var(--docs-color-border)] bg-[var(--nb-sunk)]">
        <div className="mx-auto flex max-w-[1360px] flex-wrap gap-x-8 gap-y-3 px-6 py-[18px] font-mono text-sm lg:px-10">
          {protocols.map((p, i) => (
            <Link key={p.to} to={p.to} className="text-[var(--docs-color-text-100)]! no-underline hover:text-[var(--ifm-color-primary)]! hover:no-underline">
              {p.label}
              {i < protocols.length - 1 && <span className="ml-8 text-[var(--nb-chart)]">◆</span>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Spark() {
  return (
    <svg viewBox="0 0 200 40" className="h-9 w-full" aria-hidden="true">
      <polyline points="0,32 25,26 50,28 75,18 100,22 125,10 150,16 175,6 200,12" fill="none" stroke="var(--nb-chart)" strokeWidth="2" />
    </svg>
  );
}

export default function Home(): React.JSX.Element {
  const feed = usePluginData("home-feed") as Feed;
  return (
    <Layout
      title={translate({ id: "home.meta.title", message: "Documentation" })}
      description={translate({ id: "home.meta.description", message: "Documentation for IoT Breeze: connect devices, see their data, and act on it." })}
    >
      <div style={{ "--ifm-link-hover-decoration": "none" } as React.CSSProperties}>
        <Hero feed={feed} />

        <main className="mx-auto max-w-[1360px] px-6 lg:px-10">
          {/* [ 01 ] Start here */}
          <section className="flex flex-wrap gap-x-20 gap-y-8 pb-[72px] pt-20 lg:pt-24">
            <div className="flex flex-[1_1_300px] flex-col gap-3.5">
              <SectionLabel n="01">
                <Translate id="home.start.label">Start here</Translate>
              </SectionLabel>
              <h2 className={h2}>
                <Translate id="home.start.title">Pick the path that fits your job.</Translate>
              </h2>
            </div>
            <div className="flex min-w-0 flex-[2_1_600px] flex-col border-0 border-t border-dashed border-[var(--nb-dash)]">
              {paths.map((p, i) => (
                <Link
                  key={p.to}
                  to={p.to}
                  className={`group grid grid-cols-[48px_minmax(0,1fr)] items-center gap-6 border-0 border-b border-dashed border-[var(--nb-dash)] py-7 sm:grid-cols-[64px_minmax(0,1fr)_auto] ${plainLink}`}
                >
                  <span className="font-mono text-[28px] font-medium text-[var(--ifm-color-primary)]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex flex-col gap-1.5">
                    <span className="text-[26px] font-semibold tracking-[-0.02em] group-hover:underline">{p.title}</span>
                    <span className="text-[15px] leading-[22px] text-[var(--docs-color-muted)]">{p.text}</span>
                  </span>
                  <span className="nb-eyebrow hidden sm:inline">{p.cta} →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* [ 02 ] Quickstart */}
          <section className="flex flex-col gap-7 pb-24">
            <div className="flex flex-wrap items-end justify-between gap-4 border-0 border-b border-dashed border-[var(--nb-dash)] pb-5">
              <div className="flex flex-col gap-2.5">
                <SectionLabel n="02">Quickstart</SectionLabel>
                <h2 className="m-0 text-[26px]! font-semibold! tracking-[-0.02em]">
                  <Translate id="home.quick.title">From an empty tenant to a live dashboard.</Translate>
                </h2>
              </div>
              <Link
                to="/docs/get-started/quickstart"
                className="inline-flex h-9 items-center gap-2 rounded-md bg-[var(--nb-inv-bg)] px-3.5 text-[13px] font-medium text-[var(--nb-inv-fg)]! no-underline hover:no-underline hover:opacity-90"
              >
                <Translate id="home.quick.cta">Start the quickstart</Translate>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <ol className="m-0 grid list-none grid-cols-1 gap-3 p-0! sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => {
                const live = i === steps.length - 1;
                return (
                  <li
                    key={s.title}
                    className={`m-0 flex flex-col gap-3 rounded-[10px] border border-solid bg-[var(--docs-color-background)] p-[18px] ${
                      live ? "border-[var(--nb-chart)]" : "border-[var(--docs-color-border)]"
                    }`}
                  >
                    <span className="nb-eyebrow flex justify-between">
                      <span>
                        <Translate id="home.step.label" values={{ n: String(i + 1).padStart(2, "0") }}>
                          {"Step {n}"}
                        </Translate>
                      </span>
                      {live ? (
                        <span className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--nb-chart)]" />
                          Live
                        </span>
                      ) : (
                        <span>{s.tag}</span>
                      )}
                    </span>
                    <span className="text-[17px] font-semibold">{s.title}</span>
                    {live ? <Spark /> : <span className="text-sm leading-5 text-[var(--docs-color-muted)]">{s.text}</span>}
                  </li>
                );
              })}
            </ol>
          </section>

          {/* [ 03 ] By area */}
          <section className="flex flex-wrap gap-x-20 gap-y-8 pb-24">
            <div className="flex flex-[1_1_300px] flex-col gap-3.5">
              <SectionLabel n="03">
                <Translate id="home.areas.label">By area</Translate>
              </SectionLabel>
              <h2 className={h2}>
                <Translate id="home.sections.title">The docs follow your data.</Translate>
              </h2>
              <p className="m-0 max-w-[36ch] text-[15px] leading-[22px] text-[var(--docs-color-muted)]">
                <Translate id="home.sections.text">From a device to a decision. Each section answers one question.</Translate>
              </p>
            </div>
            <div className="grid min-w-0 flex-[2_1_600px] grid-cols-1 overflow-hidden rounded-[10px] border border-solid border-[var(--docs-color-border)] bg-[var(--docs-color-border)] [gap:1px] sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((a) => (
                <div key={a.to} className="flex flex-col gap-2 bg-[var(--docs-color-background)] p-[18px]">
                  <Link to={a.to} className="nb-eyebrow mb-1 text-[var(--docs-color-text-100)]! no-underline hover:text-[var(--ifm-color-primary)]!">
                    {a.title}
                  </Link>
                  {a.links.map((l) => (
                    <Link key={l.to} to={l.to} className="text-sm">
                      {l.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* [ 04 ] Blog and [ 05 ] Changelog */}
          <section className="flex flex-wrap gap-12 pb-24">
            <div className="flex min-w-0 flex-[2_1_620px] flex-col gap-5">
              <div className="flex items-end justify-between gap-4 border-0 border-b border-dashed border-[var(--nb-dash)] pb-4">
                <div className="flex flex-col gap-2.5">
                  <SectionLabel n="04">
                    <Translate id="home.blog.label">From the blog</Translate>
                  </SectionLabel>
                  <h2 className="m-0 text-[26px]! font-semibold! tracking-[-0.02em]">
                    <Translate id="blog.hero.title.start">Notes from the</Translate>{" "}
                    <Translate id="blog.hero.title.accent">platform team.</Translate>
                  </h2>
                </div>
                <Link to="/blog" className="nb-eyebrow text-[var(--ifm-color-primary)]!">
                  <Translate id="home.blog.all">All posts</Translate> →
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {feed.posts.map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className={`nb-card flex flex-col gap-2.5 ${plainLink}`}>
                    <span className="relative block h-[110px] overflow-hidden rounded-[10px] border border-solid border-[var(--docs-color-border)]">
                      <BlogVisual kind={p.visual} question={p.question} answer={p.answer} />
                    </span>
                    <span className="nb-eyebrow">
                      <span className="text-[var(--nb-tag)]">{categoryLabel(p.category)}</span> · {formatDate(p.date)}
                    </span>
                    <span className="nb-card-title text-base font-semibold leading-snug">{p.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-5">
              <div className="flex items-end justify-between gap-4 border-0 border-b border-dashed border-[var(--nb-dash)] pb-4">
                <div className="flex flex-col gap-2.5">
                  <SectionLabel n="05">Changelog</SectionLabel>
                  <h2 className="m-0 text-[26px]! font-semibold! tracking-[-0.02em]">
                    <Translate id="home.changelog.title">What shipped.</Translate>
                  </h2>
                </div>
                <Link to="/docs/changelog" className="nb-eyebrow text-[var(--ifm-color-primary)]!">
                  <Translate id="home.changelog.all">All</Translate> →
                </Link>
              </div>
              <ul className="m-0 flex list-none flex-col gap-3.5 rounded-[10px] border border-solid border-[var(--docs-color-border)] bg-[var(--docs-color-background)] p-[18px] font-mono text-xs leading-[18px]">
                {feed.changes.map((c, i) => (
                  <li key={i} className="m-0 grid grid-cols-[48px_44px_minmax(0,1fr)] gap-2">
                    <Link to={`/docs/changelog/${c.file}`} className="text-[var(--docs-color-text-100)]!">
                      {c.version}
                    </Link>
                    <span className={c.kind === "fix" ? "text-[var(--nb-tag)]" : "text-[var(--ifm-color-primary)]"}>{c.kind.toUpperCase()}</span>
                    <span className="text-[var(--ifm-font-color-base)]">{c.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
