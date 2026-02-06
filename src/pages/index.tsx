import React from "react";
import Layout from "@theme/Layout";
import { cn } from "@site/src/lib/utils";
import {
    BookOpen,
    Code,
    FileJson,
    Monitor,
    Workflow,
    BarChart3,
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
                    </section>

                    {/* Cards — 2 top, 1 centered below */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <FeatureCard card={cards[0]} />
                        <FeatureCard card={cards[1]} />
                    </div>
                    <div className="mt-6 mx-auto max-w-[calc(50%-0.75rem)] max-lg:max-w-full">
                        <FeatureCard card={cards[2]} />
                    </div>
                </main>
            </div>
        </Layout>
    );
}
