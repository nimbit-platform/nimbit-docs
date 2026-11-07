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
        label: "Get started",
        icon: Rocket,
        to: "/docs/get-started",
        description: "Quickstart and paths by role",
        paths: ["get-started"],
    },
    {
        id: "docs",
        label: "Docs",
        icon: BookOpen,
        to: "/docs",
        description: "Connect, model, visualize, automate",
        paths: ["", "connect", "model", "visualize", "watch", "automate", "knowledge", "administer", "troubleshooting"],
    },
    {
        id: "api",
        label: "API",
        icon: Braces,
        to: "/docs/api",
        description: "Ingest, query and platform APIs",
        paths: ["api"],
    },
    {
        id: "changelog",
        label: "Changelog",
        icon: FileText,
        to: "/docs/changelog",
        description: "Release notes",
        paths: ["changelog"],
    },
];
