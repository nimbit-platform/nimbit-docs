import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
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
    voice: translate({ id: "home.door.new.voice", message: "I'm new here" }),
    title: translate({ id: "home.door.new.title", message: "Quickstart" }),
    text: translate({ id: "home.door.new.text", message: "A simulated device, a live dashboard and an alert in about 15 minutes. No hardware needed." }),
    to: "/docs/get-started/quickstart",
    cta: translate({ id: "home.door.new.cta", message: "Start the quickstart" }),
  },
  {
    icon: Wrench,
    voice: translate({ id: "home.door.task.voice", message: "I want to get something done" }),
    title: translate({ id: "home.door.task.title", message: "Docs by task" }),
    text: translate({ id: "home.door.task.text", message: "Connect devices, build dashboards, handle incidents, automate. Each task on one page." }),
    to: "/docs",
    cta: translate({ id: "home.door.task.cta", message: "Browse the docs" }),
  },
  {
    icon: Braces,
    voice: translate({ id: "home.door.api.voice", message: "I need the details" }),
    title: translate({ id: "home.door.api.title", message: "API and reference" }),
    text: translate({ id: "home.door.api.text", message: "Ingest, query and platform APIs, message formats, MQTT topics, status codes." }),
    to: "/docs/api",
    cta: translate({ id: "home.door.api.cta", message: "Open the API docs" }),
  },
];

type Section = { icon: LucideIcon; title: string; question: string; to: string };

const sections: Section[] = [
  { icon: Plug, title: translate({ id: "home.section.connect.title", message: "Connect devices" }), question: translate({ id: "home.section.connect.question", message: "How do I get data in?" }), to: "/docs/connect" },
  { icon: Router, title: translate({ id: "home.section.gateways.title", message: "Gateways and edge" }), question: translate({ id: "home.section.gateways.question", message: "How do I bring in machines?" }), to: "/docs/gateways" },
  { icon: Boxes, title: translate({ id: "home.section.model.title", message: "Model your data" }), question: translate({ id: "home.section.model.question", message: "How do I describe my devices?" }), to: "/docs/model" },
  { icon: LayoutDashboard, title: translate({ id: "home.section.visualize.title", message: "Visualize" }), question: translate({ id: "home.section.visualize.question", message: "How do I see my data?" }), to: "/docs/visualize" },
  { icon: Siren, title: translate({ id: "home.section.watch.title", message: "Watch and respond" }), question: translate({ id: "home.section.watch.question", message: "What needs me right now?" }), to: "/docs/watch" },
  { icon: Workflow, title: translate({ id: "home.section.automate.title", message: "Automate" }), question: translate({ id: "home.section.automate.question", message: "How does it act for me?" }), to: "/docs/automate" },
  { icon: Brain, title: translate({ id: "home.section.knowledge.title", message: "Knowledge and AI" }), question: translate({ id: "home.section.knowledge.question", message: "What can I ask?" }), to: "/docs/knowledge" },
  { icon: ShieldCheck, title: translate({ id: "home.section.administer.title", message: "Administer" }), question: translate({ id: "home.section.administer.question", message: "Who can do what?" }), to: "/docs/administer" },
  { icon: LifeBuoy, title: translate({ id: "home.section.troubleshooting.title", message: "Troubleshooting" }), question: translate({ id: "home.section.troubleshooting.question", message: "Something is wrong." }), to: "/docs/troubleshooting" },
];

type Role = { icon: LucideIcon; title: string; text: string; to: string };

const roles: Role[] = [
  { icon: Gauge, title: translate({ id: "home.role.operator.title", message: "Operator" }), text: translate({ id: "home.role.operator.text", message: "Watch your things, work incidents, ask Nimble." }), to: "/docs/get-started/roles/operator" },
  { icon: Boxes, title: translate({ id: "home.role.builder.title", message: "Solution builder" }), text: translate({ id: "home.role.builder.text", message: "Model devices, connect them, build dashboards and rules." }), to: "/docs/get-started/roles/builder" },
  { icon: Braces, title: translate({ id: "home.role.developer.title", message: "Developer" }), text: translate({ id: "home.role.developer.text", message: "Protocols, payloads, APIs and webhooks." }), to: "/docs/get-started/roles/developer" },
  { icon: Users, title: translate({ id: "home.role.administrator.title", message: "Administrator" }), text: translate({ id: "home.role.administrator.text", message: "Users, access, API keys and tenant settings." }), to: "/docs/get-started/roles/administrator" },
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
      title={translate({ id: "home.meta.title", message: "Documentation" })}
      description={translate({ id: "home.meta.description", message: "Documentation for IoT Breeze: connect devices, see their data, and act on it." })}
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
            <h1 className="text-6xl! text-foreground"><Translate id="home.hero.title">IoT Breeze docs</Translate></h1>
            <p className="text-xl! mt-4 leading-relaxed text-muted-foreground dark:text-foreground">
              <Translate id="home.hero.text">
                Connect your devices, see their data, and act on it. Guides for the people who run IoT Breeze, and references for the people who build on it.
              </Translate>
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                to="/docs/get-started/quickstart"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground! no-underline hover:bg-[var(--ifm-color-primary-dark)] hover:no-underline"
              >
                <Translate id="home.hero.quickstart">Quickstart</Translate>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="https://outlook.office365.com/book/NimBitGmbHErstgesprchIhreDigitaleTransformation@cpars.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--docs-color-border)] bg-[var(--docs-color-background)] px-5 py-2.5 text-sm font-medium text-[var(--docs-color-text)] no-underline hover:bg-[var(--docs-color-background-100)] hover:no-underline"
              >
                <Translate id="home.hero.demo">Book a demo</Translate>
              </a>
            </div>
          </section>

          <section aria-label={translate({ id: "home.doors.label", message: "Where to start" })} className="grid grid-cols-1 gap-5 md:grid-cols-3">
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
            <h2 className="text-2xl font-bold tracking-tight text-foreground"><Translate id="home.sections.title">The docs follow your data</Translate></h2>
            <p className="mt-1 text-muted-foreground">
              <Translate id="home.sections.text">From a device to a decision. Each section answers one question.</Translate>
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
            <h2 className="text-2xl font-bold tracking-tight text-foreground"><Translate id="home.roles.title">Start from your role</Translate></h2>
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
                <h2 className="text-2xl font-bold tracking-tight"><Translate id="home.first.title">Send your first reading</Translate></h2>
                <p className="mt-3 max-w-md leading-relaxed text-[#a1a1aa]">
                  <Translate id="home.first.text">
                    One HTTP request or one MQTT message. Every thing has its own credentials, and the Connection info drawer in IoT Breeze shows the exact host, topic and username.
                  </Translate>
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <Link to="/docs/connect/mqtt" className="inline-flex items-center gap-1 text-[#3dc1d3]! no-underline hover:no-underline">
                    <Translate id="home.first.mqtt">Send data over MQTT</Translate> <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link to="/docs/connect/http" className="inline-flex items-center gap-1 text-[#3dc1d3]! no-underline hover:no-underline">
                    <Translate id="home.first.http">Send data over HTTP</Translate> <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link to="/docs/api" className="inline-flex items-center gap-1 text-[#3dc1d3]! no-underline hover:no-underline">
                    <Translate id="home.first.api">API overview</Translate> <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-1 items-center p-6 lg:p-10">
                <pre className="m-0 w-full overflow-x-auto rounded-xl border border-[#27272a] bg-[#18181b]! p-5 text-xs leading-relaxed text-[#d4d4d8]!">
                  <code className="bg-transparent! p-0! text-inherit! border-0!">{curl}</code>
                </pre>
              </div>
            </div>
          </section>

          <section className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Link to="/docs/changelog" className={card}>
              <span className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <BookOpen className="h-5 w-5 text-primary" />
                <Translate id="home.changelog.title">What changed</Translate>
              </span>
              <span className="mt-1 text-sm text-muted-foreground"><Translate id="home.changelog.text">Release notes for every version, with breaking changes called out.</Translate></span>
            </Link>
            <Link to="/blog" className={card}>
              <span className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <BookOpen className="h-5 w-5 text-primary" />
                <Translate id="home.blog.title">From the blog</Translate>
              </span>
              <span className="mt-1 text-sm text-muted-foreground"><Translate id="home.blog.text">Product updates, worked examples and how we build NimBit.</Translate></span>
            </Link>
          </section>
        </main>
      </div>
    </Layout>
  );
}
