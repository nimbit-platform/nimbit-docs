import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { cn } from "@site/src/lib/utils";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Boxes,
  Brain,
  CheckCircle2,
  Code,
  Database,
  FileJson,
  MapPin,
  Monitor,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@site/src/components/ui/card";
import { Button } from "@site/src/components/ui/button";
import { FeatureCard } from "@site/src/components/FeatureCard";
import type { FeatureCardItem } from "@site/src/components/FeatureCard";

const cards: FeatureCardItem[] = [
  {
    icon: BookOpen,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
    title: "User Manual",
    description:
      "Step-by-step instructions for end-users to navigate and utilize NimBit's IoT platform. Perfect for operators, administrators and business users.",
    to: "/docs/user/overview",
    features: [
      { icon: Monitor, label: "Dashboards & Monitoring" },
      { icon: Workflow, label: "Automation & Pipelines" },
      { icon: BarChart3, label: "Reporting & Analytics" },
    ],
  },
  {
    icon: Code,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
    title: "Developer Documentation",
    description:
      "A comprehensive guide detailing software architecture, API usage, deployment and code examples for building on the NimBit platform.",
    to: "/docs/developer/dev-overview",
    features: [
      { icon: Code, label: "Architecture & Guides" },
      { icon: FileJson, label: "Integration Examples" },
      { icon: Workflow, label: "Deployment & CI/CD" },
    ],
  },
  {
    icon: FileJson,
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/10",
    title: "API Documentation",
    description:
      "Learn how to integrate with NimBit's REST APIs. Explore endpoints, authentication, and data models for the IoT platform.",
    to: "/docs/developer/api/dev-api-intro",
    features: [
      { icon: FileJson, label: "REST API Reference" },
      { icon: Code, label: "Request & Response Models" },
      { icon: Monitor, label: "Authentication & Tokens" },
    ],
  },
];

type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: FeatureItem[] = [
  {
    title: "Intuitive Dashboards",
    description:
      "Create customized, real-time dashboards to monitor your devices and visualize data that matters most to your business. Drag-and-drop widgets make it easy to design information-rich displays without coding.",
    icon: Monitor,
  },
  {
    title: "Device Twin Management",
    description:
      "Manage your entire IoT fleet with our comprehensive Things and ThingTypes system. Define device templates once and deploy consistently across your organization with proper data modeling and validation.",
    icon: Boxes,
  },
  {
    title: "Geofencing & Tracking",
    description:
      "Track asset locations in real-time and set up geofencing to trigger alerts or actions when devices enter or exit defined areas. Perfect for fleet management, asset tracking, and location-based services.",
    icon: MapPin,
  },
  {
    title: "Advanced Reporting",
    description:
      "Generate detailed reports on device performance, usage patterns, and system health. Schedule automated reports to keep stakeholders informed with the metrics that matter most.",
    icon: BarChart3,
  },
  {
    title: "Automation Pipelines",
    description:
      "Build sophisticated automation workflows without coding. Connect devices, triggers, and actions to create powerful IoT applications that respond intelligently to real-world events.",
    icon: Workflow,
  },
  {
    title: "ETL Pipelines",
    description:
      "Transform and process your IoT data with powerful Extract, Transform, Load (ETL) pipelines. Easily ingest data from multiple sources, standardize formats, perform calculations, and route the enriched data to your preferred storage solutions or analytics platforms.",
    icon: Database,
  },
  {
    title: "AI Features",
    description:
      "Leverage artificial intelligence to extract meaningful insights from your IoT data. Our built-in AI capabilities enable anomaly detection, predictive maintenance, pattern recognition, and smart decision-making to optimize operations and prevent costly downtime.",
    icon: Brain,
  },
];

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="NimBit Documentation"
      description="Find all guides and resources for NimBit"
    >
      <div
        className="relative min-h-screen w-full overflow-hidden"
        style={
          {
            "--ifm-link-hover-decoration": "none",
            "--ifm-link-hover-color": "inherit",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[background-size:60px_60px]",
            "[background-image:linear-gradient(to_right,#cdcdcf_1px,transparent_1px),linear-gradient(to_bottom,#cdcdcf_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#737373_1px,transparent_1px),linear-gradient(to_bottom,#737373_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-[var(--docs-color-background)] [mask-image:radial-gradient(circle_at_50%_center,transparent_10%,black)] dark:[mask-image:radial-gradient(circle_at_50%_center,transparent_10%,black)]" />

        <main className="relative mx-auto max-w-300 px-6 pb-20">
          <section className="mx-auto max-w-2xl pb-12 pt-16 text-center">
            <h1 className="text-7xl! text-foreground">NimBit Documentation</h1>
            <p className="text-2xl! mt-4 leading-relaxed text-muted-foreground dark:text-foreground">
              Build and manage your IoT solutions with NimBit. Explore guides,
              API references, and resources for operators, developers, and
              administrators.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                to="/docs/user/overview"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white! no-underline transition-colors hover:bg-[var(--ifm-color-primary-dark)] hover:text-white hover:no-underline"
              >
                Get Started
              </Link>
              <a
                href="https://outlook.office365.com/book/NimBitGmbHErstgesprchIhreDigitaleTransformation@cpars.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--docs-color-border)] bg-[var(--docs-color-background)] px-5 py-2.5 text-sm font-medium text-[var(--docs-color-text)] no-underline transition-colors hover:bg-[var(--docs-color-background-100)] hover:no-underline"
              >
                Book a Demo
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>

          <section className="mt-14">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <FeatureCard card={cards[0]} />
              <FeatureCard card={cards[1]} />
            </div>
            <div className="mx-auto mt-6 max-w-[calc(50%-0.75rem)] max-lg:max-w-full">
              <FeatureCard card={cards[2]} />
            </div>
          </section>

          <section className="mt-16 overflow-hidden rounded-2xl bg-[#0a0a0a] text-white">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 lg:p-12">
                <h2 className="text-3xl font-bold tracking-tight">
                  REST API Reference
                </h2>
                <p className="mt-3 max-w-md leading-relaxed text-[#a1a1aa]">
                  Simple, well-documented REST APIs to integrate your IoT
                  devices and data pipelines. Built for developers who value
                  clarity.
                </p>
                <Button
                  variant="link"
                  className="mt-5 h-auto p-0 text-[#3dc1d3] no-underline hover:text-[#60d1e1] hover:no-underline"
                >
                  <Link to="/docs/developer/api/dev-api-intro">
                    Get started with NimBit APIs
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      method: "GET",
                      title: "List devices",
                      desc: "Retrieve all registered IoT devices",
                    },
                    {
                      method: "POST",
                      title: "Create pipeline",
                      desc: "Set up a new data ingestion pipeline",
                    },
                    {
                      method: "GET",
                      title: "Query telemetry",
                      desc: "Fetch time-series data from sensors",
                    },
                  ].map((ep) => (
                    <div key={ep.title}>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-[#1a1a2e] px-1.5 py-0.5 font-mono text-xs text-[#3dc1d3]">
                          {ep.method}
                        </span>
                        <span className="text-sm font-semibold">
                          {ep.title}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm text-[#71717a]">{ep.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center p-6 lg:p-12">
                <div className="w-full max-w-sm overflow-hidden rounded-xl border border-[#27272a] bg-[#18181b] shadow-2xl">
                  <div className="border-b border-[#27272a] px-5 py-3">
                    <div className="text-xs font-medium text-[#a1a1aa]">
                      Auth
                    </div>
                    <div className="mt-1.5 flex items-center gap-2 text-sm">
                      <span className="text-[#d4d4d8]">Authorization:</span>
                      <span className="rounded bg-[#27272a] px-2 py-0.5 text-xs text-[#71717a]">
                        Bearer ••••••••
                      </span>
                    </div>
                  </div>
                  <div className="border-b border-[#27272a] px-5 py-3">
                    <div className="text-xs font-medium text-[#a1a1aa]">
                      Parameters
                    </div>
                    <div className="mt-1.5 text-sm text-[#d4d4d8]">
                      tenantId
                      <span className="text-[#ef4444]">*</span>
                    </div>
                  </div>
                  <div className="px-5 py-3">
                    <div className="text-xs font-medium text-[#a1a1aa]">
                      Body
                    </div>
                    <pre className="mt-2 overflow-x-auto rounded-lg bg-[#0a0a0a] p-3 text-xs leading-relaxed">
                      <code>
                        <span className="text-[#71717a]">{"1  "}</span>
                        {"{\n"}
                        <span className="text-[#71717a]">{"2    "}</span>
                        <span className="text-[#7dd3fc]">{'"name"'}</span>
                        {": "}
                        <span className="text-[#86efac]">
                          {'"Temperature Sensor"'}
                        </span>
                        {",\n"}
                        <span className="text-[#71717a]">{"3    "}</span>
                        <span className="text-[#7dd3fc]">{'"type"'}</span>
                        {": "}
                        <span className="text-[#86efac]">{'"mqtt"'}</span>
                        {",\n"}
                        <span className="text-[#71717a]">{"4    "}</span>
                        <span className="text-[#7dd3fc]">{'"interval"'}</span>
                        {": "}
                        <span className="text-[#fde68a]">{"30"}</span>
                        {"\n"}
                        <span className="text-[#71717a]">{"5  "}</span>
                        {"}"}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Powerful Features at Your Fingertips
              </h2>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={feature.title}
                    className="h-full border border-border/80 bg-card/95 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <CardHeader>
                      <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg font-semibold">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        Built for scalable IoT operations
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="mt-16">
            <Card className="border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
              <CardContent className="flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    Are you ready? Let&apos;s get started.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Start with the user guide and set up your first IoT workflow
                    in minutes.
                  </p>
                </div>
                <Link to="/docs/user/getting-started/overview">
                  <Button size="lg" className="no-underline hover:no-underline">
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </Layout>
  );
}
