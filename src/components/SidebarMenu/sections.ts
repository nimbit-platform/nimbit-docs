import { translate } from "@docusaurus/Translate";
import { BookOpen, Braces, FileText, Rocket, type LucideIcon } from "lucide-react";

export interface Section {
    id: string;
    label: string;
    icon: LucideIcon;
    to: string;
    description: string;
    /** First path segments after /docs/ that belong to this section. */
    paths: string[];
}

export const SECTIONS: Section[] = [
    {
        id: "get-started",
        label: translate({ id: "sections.get-started.label", message: "Get started" }),
        icon: Rocket,
        to: "/docs/get-started",
        description: translate({ id: "sections.get-started.description", message: "Quickstart and paths by role" }),
        paths: ["get-started"],
    },
    {
        id: "docs",
        label: translate({ id: "sections.docs.label", message: "Docs" }),
        icon: BookOpen,
        to: "/docs",
        description: translate({ id: "sections.docs.description", message: "Connect, model, visualize, automate" }),
        paths: ["", "connect", "gateways", "model", "visualize", "watch", "automate", "knowledge", "administer", "troubleshooting"],
    },
    {
        id: "api",
        label: translate({ id: "sections.api.label", message: "API" }),
        icon: Braces,
        to: "/docs/api",
        description: translate({ id: "sections.api.description", message: "Ingest, query and platform APIs" }),
        paths: ["api"],
    },
    {
        id: "changelog",
        label: translate({ id: "sections.changelog.label", message: "Changelog" }),
        icon: FileText,
        to: "/docs/changelog",
        description: translate({ id: "sections.changelog.description", message: "Release notes" }),
        paths: ["changelog"],
    },
];
