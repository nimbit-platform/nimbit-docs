import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { cn } from "@site/src/lib/utils";
import {
    BookOpen,
    Code,
    FileJson,
    Monitor,
    Workflow,
    BarChart3,
    ArrowRight,
} from "lucide-react";
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
                {/* Grid background */}
                <div
                    className={cn(
                        "absolute inset-0 h-full w-full",
                        "[background-size:60px_60px]",
                        "[background-image:linear-gradient(to_right,#cdcdcf_1px,transparent_1px),linear-gradient(to_bottom,#cdcdcf_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#737373_1px,transparent_1px),linear-gradient(to_bottom,#737373_1px,transparent_1px)]",
                    )}
                />
                <div className="pointer-events-none absolute inset-0 h-full w-full bg-[var(--docs-color-background)] [mask-image:radial-gradient(circle_at_50%_center,transparent_10%,black)] dark:[mask-image:radial-gradient(circle_at_50%_center,transparent_10%,black)]" />

                {/* Content */}
                <main className="relative mx-auto max-w-300 px-6 pb-20">
                    {/* Hero */}
                    <section className="mx-auto max-w-2xl pt-16 pb-12 text-center">
                        <h1 className="text-7xl! text-foreground">
                            NimBit Documentation
                        </h1>
                        <p className="text-2xl! mt-4 leading-relaxed text-muted-foreground dark:text-foreground">
                            Build and manage your IoT solutions with NimBit.
                            Explore guides, API references, and resources for
                            operators, developers, and administrators.
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

                    {/* Cards — 2 top, 1 centered below */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <FeatureCard card={cards[0]} />
                        <FeatureCard card={cards[1]} />
                    </div>
                    <div className="mt-6 mx-auto max-w-[calc(50%-0.75rem)] max-lg:max-w-full">
                        <FeatureCard card={cards[2]} />
                    </div>

                    {/* API Showcase */}
                    <section className="mt-16 overflow-hidden rounded-2xl bg-[#0a0a0a] text-white">
                        <div className="flex flex-col lg:flex-row">
                            {/* Left — text */}
                            <div className="flex-1 p-8 lg:p-12">
                                <h2 className="text-3xl font-bold tracking-tight">
                                    REST API Reference
                                </h2>
                                <p className="mt-3 text-[#a1a1aa] leading-relaxed max-w-md">
                                    Simple, well-documented REST APIs to integrate
                                    your IoT devices and data pipelines. Built for
                                    developers who value clarity.
                                </p>
                                <Link
                                    to="/docs/developer/api/dev-api-intro"
                                    className="mt-5 inline-flex items-center gap-1.5 text-[#3dc1d3] font-medium no-underline hover:no-underline hover:text-[#60d1e1] transition-colors"
                                >
                                    Get started with NimBit APIs
                                    <ArrowRight className="h-4 w-4" />
                                </Link>

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
                                                <span className="font-semibold text-sm">
                                                    {ep.title}
                                                </span>
                                            </div>
                                            <p className="mt-0.5 text-sm text-[#71717a]">
                                                {ep.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right — mock API card */}
                            <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
                                <div className="w-full max-w-sm rounded-xl border border-[#27272a] bg-[#18181b] shadow-2xl overflow-hidden">
                                    {/* Auth */}
                                    <div className="border-b border-[#27272a] px-5 py-3">
                                        <div className="text-xs font-medium text-[#a1a1aa]">
                                            Auth
                                        </div>
                                        <div className="mt-1.5 flex items-center gap-2 text-sm">
                                            <span className="text-[#d4d4d8]">
                                                Authorization:
                                            </span>
                                            <span className="rounded bg-[#27272a] px-2 py-0.5 text-xs text-[#71717a]">
                                                Bearer ••••••••
                                            </span>
                                        </div>
                                    </div>
                                    {/* Parameters */}
                                    <div className="border-b border-[#27272a] px-5 py-3">
                                        <div className="text-xs font-medium text-[#a1a1aa]">
                                            Parameters
                                        </div>
                                        <div className="mt-1.5 text-sm text-[#d4d4d8]">
                                            tenantId<span className="text-[#ef4444]">*</span>
                                        </div>
                                    </div>
                                    {/* Body */}
                                    <div className="px-5 py-3">
                                        <div className="text-xs font-medium text-[#a1a1aa]">
                                            Body
                                        </div>
                                        <pre className="mt-2 overflow-x-auto rounded-lg bg-[#0a0a0a] p-3 text-xs leading-relaxed">
                                            <code>
                                                <span className="text-[#71717a]">
                                                    {"1  "}
                                                </span>
                                                {"{\n"}
                                                <span className="text-[#71717a]">
                                                    {"2    "}
                                                </span>
                                                <span className="text-[#7dd3fc]">
                                                    {'"name"'}
                                                </span>
                                                {": "}
                                                <span className="text-[#86efac]">
                                                    {'"Temperature Sensor"'}
                                                </span>
                                                {",\n"}
                                                <span className="text-[#71717a]">
                                                    {"3    "}
                                                </span>
                                                <span className="text-[#7dd3fc]">
                                                    {'"type"'}
                                                </span>
                                                {": "}
                                                <span className="text-[#86efac]">
                                                    {'"mqtt"'}
                                                </span>
                                                {",\n"}
                                                <span className="text-[#71717a]">
                                                    {"4    "}
                                                </span>
                                                <span className="text-[#7dd3fc]">
                                                    {'"interval"'}
                                                </span>
                                                {": "}
                                                <span className="text-[#fde68a]">
                                                    {"30"}
                                                </span>
                                                {"\n"}
                                                <span className="text-[#71717a]">
                                                    {"5  "}
                                                </span>
                                                {"}"}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    );
}
