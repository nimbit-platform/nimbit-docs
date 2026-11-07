import { BookOpen, Rocket, Code, FileText, type LucideIcon } from "lucide-react";

export interface Section {
    id: string;
    label: string;
    icon: LucideIcon;
    to: string;
    description: string;
}

export const SECTIONS: Section[] = [
    {
        id: "get-started",
        label: "Get started",
        icon: Rocket,
        to: "/docs/get-started",
        description: "First device to first dashboard",
    },
    {
        id: "user",
        label: "User Manual",
        icon: BookOpen,
        to: "/docs/user/overview",
        description: "Guides for operators & admins",
    },
    {
        id: "developer",
        label: "Developer Docs",
        icon: Code,
        to: "/docs/developer/intro",
        description: "Architecture, APIs & deployment",
    },
    {
        id: "changelog",
        label: "Changelog",
        icon: FileText,
        to: "/docs/changelog/index",
        description: "Release notes & updates",
    },
];
