import React from "react";
import { appHref, useAppUrl } from "@site/src/lib/appUrl";

/**
 * A link to a screen in the reader's IoT Breeze, e.g.
 *   <AppLink to="/automation/rule-designer">Open Rule Designer</AppLink>
 * Routes are written without the locale prefix. Routes with parameters (`:id`) can't be linked.
 */
export default function AppLink({ to = "/", children }: { to?: string; children: React.ReactNode }) {
  const base = useAppUrl();
  return (
    <a href={appHref(base, to)} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
