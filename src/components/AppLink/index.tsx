import React from "react";
import { useAppHref } from "@site/src/lib/appUrl";

/**
 * A link to a screen in the reader's IoT Breeze, e.g.
 *   <AppLink to="/automation/rule-designer">Open Rule Designer</AppLink>
 * Routes are written without the locale prefix. Routes with parameters (`:id`) can't be linked.
 */
export default function AppLink({ to = "/", children }: { to?: string; children: React.ReactNode }) {
  const href = useAppHref();
  return (
    <a href={href(to)} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
