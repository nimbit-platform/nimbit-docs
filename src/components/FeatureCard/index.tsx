import React from "react";

import Link from "@docusaurus/Link";
import { cn } from "@site/src/lib/utils";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@site/src/components/ui/card";
import type { LucideIcon } from "lucide-react";

export interface FeatureCardItem {
    icon: LucideIcon;
    iconColor: string;
    iconBg: string;
    title: string;
    description: string;
    to: string;
    features: Array<{
        icon: LucideIcon;
        label: string;
    }>;
}

export const FeatureCard = ({ card }: { card: FeatureCardItem }) => {
    const Icon = card.icon;
    return (
        <Link
            to={card.to}
            className="no-underline text-inherit hover:no-underline"
        >
            <Card className="h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer bg-background!">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div
                            className={cn(
                                "flex h-10 w-10 items-center justify-center rounded-lg",
                                card.iconBg,
                            )}
                        >
                            <Icon className={cn("h-5 w-5", card.iconColor)} />
                        </div>
                        <CardTitle className="text-xl font-bold">
                            {card.title}
                        </CardTitle>
                    </div>
                    <CardDescription className="mt-2 text-lg! leading-relaxed">
                        {card.description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-2">
                        {card.features.map((feature) => {
                            const FIcon = feature.icon;
                            return (
                                <div
                                    key={feature.label}
                                    className="flex items-center gap-2 text-lg! text-foreground"
                                >
                                    <FIcon className="h-4 w-4 text-primary" />
                                    <span>{feature.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};
