import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Braces,
  Brain,
  Gauge,
  LayoutDashboard,
  LifeBuoy,
  Plug,
  Router,
  Rocket,
  ShieldCheck,
  Siren,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import AuthBackground from "@site/src/components/AuthBackground";

type Door = { icon: LucideIcon; voice: string; title: string; text: string; to: string; cta: string };

const doors: Door[] = [
  {
    icon: Rocket,
    voice: "I'm new here",
    title: "Quickstart",
    text: "A simulated device, a live dashboard and an alert in about 15 minutes. No hardware needed.",
    to: "/docs/get-started/quickstart",
    cta: "Start the quickstart",
  },
  {
    icon: Wrench,
    voice: "I want to get something done",
    title: "Docs by task",
    text: "Connect devices, build dashboards, handle incidents, automate. Each task on one page.",
    to: "/docs",
    cta: "Browse the docs",
  },
  {
    icon: Braces,
    voice: "I need the details",
    title: "API and reference",
    text: "Ingest, query and platform APIs, message formats, MQTT topics, status codes.",
    to: "/docs/api",
    cta: "Open the API docs",
  },
];

type Section = { icon: LucideIcon; title: string; question: string; to: string };

const sections: Section[] = [
  { icon: Plug, title: "Connect devices", question: "How do I get data in?", to: "/docs/connect" },
  { icon: Router, title: "Gateways and edge", question: "How do I bring in machines?", to: "/docs/gateways" },
  { icon: Boxes, title: "Model your data", question: "How do I describe my devices?", to: "/docs/model" },
  { icon: LayoutDashboard, title: "Visualize", question: "How do I see my data?", to: "/docs/visualize" },
  { icon: Siren, title: "Watch and respond", question: "What needs me right now?", to: "/docs/watch" },
  { icon: Workflow, title: "Automate", question: "How does it act for me?", to: "/docs/automate" },
  { icon: Brain, title: "Knowledge and AI", question: "What can I ask?", to: "/docs/knowledge" },
  { icon: ShieldCheck, title: "Administer", question: "Who can do what?", to: "/docs/administer" },
  { icon: LifeBuoy, title: "Troubleshooting", question: "Something is wrong.", to: "/docs/troubleshooting" },
];

type Role = { icon: LucideIcon; title: string; text: string; to: string };

const roles: Role[] = [
  { icon: Gauge, title: "Operator", text: "Watch your things, work incidents, ask Nimble.", to: "/docs/get-started/roles/operator" },
  { icon: Boxes, title: "Solution builder", text: "Model devices, connect them, build dashboards and rules.", to: "/docs/get-started/roles/builder" },
  { icon: Braces, title: "Developer", text: "Protocols, payloads, APIs and webhooks.", to: "/docs/get-started/roles/developer" },
  { icon: Users, title: "Administrator", text: "Users, access, API keys and tenant settings.", to: "/docs/get-started/roles/administrator" },
];

const curl = `curl -X POST "<ingest-url>/api/v1/message/structured" \\
  -u "<username>:<password>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "thingType": "room_sensor",
    "id": "<deviceId>",
    "data": { "temperature": 22.5 }
  }'`;

const card =
  "group flex h-full flex-col rounded-xl border border-[var(--docs-color-border)] bg-[var(--docs-color-background)] p-6 no-underline transition-colors hover:border-[var(--ifm-color-primary)] hover:no-underline";

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Documentation"
      description="Documentation for IoT Breeze: connect devices, see their data, and act on it."
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ "--ifm-link-hover-decoration": "none" } as React.CSSProperties}
      >
        <div className="relative isolate">
          {/* The IoT Breeze sign-in backgrounds, so the docs open like the app does. */}
          <AuthBackground />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--ifm-background-color)]" />
          <div className="relative z-10 mx-auto max-w-300 px-6 pb-12">
          <section className="mx-auto max-w-2xl pb-10 pt-20 text-center">
            <h1 className="text-6xl! text-foreground">IoT Breeze docs</h1>
            <p className="text-xl! mt-4 leading-relaxed text-muted-foreground dark:text-foreground">
              Connect your devices, see their data, and act on it. Guides for the people who run
              IoT Breeze, and references for the people who build on it.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                to="/docs/get-started/quickstart"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground! no-underline hover:bg-[var(--ifm-color-primary-dark)] hover:no-underline"
              >
                Quickstart
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="https://outlook.office365.com/book/NimBitGmbHErstgesprchIhreDigitaleTransformation@cpars.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--docs-color-border)] bg-[var(--docs-color-background)] px-5 py-2.5 text-sm font-medium text-[var(--docs-color-text)] no-underline hover:bg-[var(--docs-color-background-100)] hover:no-underline"
              >
                Book a demo
              </a>
            </div>
          </section>

          <section aria-label="Where to start" className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {doors.map(({ icon: Icon, voice, title, text, to, cta }) => (
              <Link key={title} to={to} className={card}>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{voice}</span>
                <span className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="mt-3 text-lg font-semibold text-foreground">{title}</span>
                <span className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">{text}</span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </section>
          </div>
        </div>

        <main className="relative z-10 mx-auto max-w-300 px-6 pb-24">
          <section className="mt-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">The docs follow your data</h2>
            <p className="mt-1 text-muted-foreground">
              From a device to a decision. Each section answers one question.
            </p>
            <ol className="mt-6 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {sections.map(({ icon: Icon, title, question, to }, i) => (
                <li key={title}>
                  <Link to={to} className={`${card} p-4!`}>
                    <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                      <Icon className="h-4 w-4 text-primary" />
                      {title}
                    </span>
                    <span className="mt-1 text-sm text-muted-foreground">{question}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Start from your role</h2>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {roles.map(({ icon: Icon, title, text, to }) => (
                <Link key={title} to={to} className={`${card} p-4!`}>
                  <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Icon className="h-4 w-4 text-primary" />
                    {title}
                  </span>
                  <span className="mt-1 text-sm text-muted-foreground">{text}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16 overflow-hidden rounded-2xl border border-[var(--docs-color-border)] bg-[#0a0a0a] text-white">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 lg:p-10">
                <h2 className="text-2xl font-bold tracking-tight">Send your first reading</h2>
                <p className="mt-3 max-w-md leading-relaxed text-[#a1a1aa]">
                  One HTTP request or one MQTT message. Every thing has its own credentials, and the
                  Connection info drawer in IoT Breeze shows the exact host, topic and username.
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <Link to="/docs/connect/mqtt" className="inline-flex items-center gap-1 text-[#3dc1d3] no-underline hover:no-underline">
                    Send data over MQTT <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link to="/docs/connect/http" className="inline-flex items-center gap-1 text-[#3dc1d3] no-underline hover:no-underline">
                    Send data over HTTP <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link to="/docs/api" className="inline-flex items-center gap-1 text-[#3dc1d3] no-underline hover:no-underline">
                    API overview <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-1 items-center p-6 lg:p-10">
                <pre className="m-0 w-full overflow-x-auto rounded-xl border border-[#27272a] bg-[#18181b] p-5 text-xs leading-relaxed text-[#d4d4d8]">
                  <code>{curl}</code>
                </pre>
              </div>
            </div>
          </section>

          <section className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Link to="/docs/changelog" className={card}>
              <span className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <BookOpen className="h-5 w-5 text-primary" />
                What changed
              </span>
              <span className="mt-1 text-sm text-muted-foreground">Release notes for every version, with breaking changes called out.</span>
            </Link>
            <Link to="/blog" className={card}>
              <span className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <BookOpen className="h-5 w-5 text-primary" />
                From the blog
              </span>
              <span className="mt-1 text-sm text-muted-foreground">Product updates, worked examples and how we build NimBit.</span>
            </Link>
          </section>
        </main>
      </div>
    </Layout>
  );
}
