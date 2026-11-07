/**
 * Scalar styled with the site's tokens (theme: "none" in ./Scalar.tsx, so nothing here fights a preset).
 * Light #f6f7f8 / #fff / #eef0f2, borders #d1d6db, dashed #b3b9c0, text #0d0f12 / #444b53, link #197a87.
 * Dark #0d0f12 / #15191e, borders #2c3238, link #3dc1d3.
 */
export const customCss = /* css */ `
.light-mode, .dark-mode, .scalar-app {
  --scalar-font: "Inter Variable", Inter, system-ui, sans-serif;
  --scalar-font-code: "Fira Code Variable", "Fira Code", ui-monospace, monospace;
  --scalar-radius: 4px;
  --scalar-radius-lg: 6px;
  --scalar-radius-xl: 8px;
  --scalar-custom-header-height: var(--ifm-navbar-height, 60px);
}

/* Scalar nests .dark-mode on code blocks; in light mode those stay light, like the design. */
.light-mode,
.light-mode .dark-mode {
  --scalar-color-1: #0d0f12;
  --scalar-color-2: #444b53;
  --scalar-color-3: #5d646d;
  --scalar-color-accent: #197a87;
  --scalar-background-1: #f6f7f8;
  --scalar-background-2: #ffffff;
  --scalar-background-3: #eef0f2;
  --scalar-background-accent: #e6f4f6;
  --scalar-border-color: #d1d6db;
  --scalar-link-color: #197a87;
  --scalar-link-color-hover: #0f5a65;
  --scalar-button-1: #197a87;
  --scalar-button-1-hover: #0f5a65;
  --scalar-button-1-color: #ffffff;
  --scalar-color-green: #1f7a1f;
  --scalar-color-red: #b3261e;
  --scalar-color-yellow: #8a6a00;
  --scalar-color-orange: #b45309;
  --scalar-color-blue: #197a87;
  --scalar-color-purple: #6d4aa8;
  --scalar-sidebar-background-1: #ffffff;
  --scalar-sidebar-color-1: #0d0f12;
  --scalar-sidebar-color-2: #444b53;
  --scalar-sidebar-color-active: #197a87;
  --scalar-sidebar-border-color: #d1d6db;
  --scalar-sidebar-item-hover-background: #eef0f2;
  --scalar-sidebar-item-active-background: #e6f4f6;
  --scalar-sidebar-search-background: #f6f7f8;
  --scalar-sidebar-search-border-color: #d1d6db;
  --scalar-sidebar-search-color: #444b53;
}

.dark-mode {
  --scalar-color-1: #f2f4f6;
  --scalar-color-2: #aab1b9;
  --scalar-color-3: #7d858e;
  --scalar-color-accent: #3dc1d3;
  --scalar-background-1: #0d0f12;
  --scalar-background-2: #15191e;
  --scalar-background-3: #1c2127;
  --scalar-background-accent: #12303a;
  --scalar-border-color: #2c3238;
  --scalar-link-color: #3dc1d3;
  --scalar-link-color-hover: #7fdbe8;
  --scalar-button-1: #3dc1d3;
  --scalar-button-1-hover: #7fdbe8;
  --scalar-button-1-color: #0d0f12;
  --scalar-color-green: #57c957;
  --scalar-color-red: #ff7b72;
  --scalar-color-yellow: #f5c638;
  --scalar-color-orange: #f0a04b;
  --scalar-color-blue: #3dc1d3;
  --scalar-color-purple: #b79cf0;
  --scalar-sidebar-background-1: #0d0f12;
  --scalar-sidebar-color-1: #f2f4f6;
  --scalar-sidebar-color-2: #aab1b9;
  --scalar-sidebar-color-active: #3dc1d3;
  --scalar-sidebar-border-color: #2c3238;
  --scalar-sidebar-item-hover-background: #1c2127;
  --scalar-sidebar-item-active-background: #12303a;
  --scalar-sidebar-search-background: #15191e;
  --scalar-sidebar-search-border-color: #2c3238;
  --scalar-sidebar-search-color: #aab1b9;
}

/* ---- Chrome we do not want ---- */
.scalar-app a[href*="scalar.com"],
.scalar-app button.bg-sidebar-b-search:has(svg):not(:first-child) { display: none !important; }

/* ---- Typography: mono uppercase eyebrows ---- */
.scalar-app .section-header-label--rule,
.scalar-app .parameter-list-title--tree,
.scalar-app .request-body-title,
.scalar-app .callbacks-list-title,
.scalar-app .endpoints-card .scalar-card-header,
.scalar-app .scalar-card-header-title {
  font-family: var(--scalar-font-code);
  font-size: 11px !important;
  font-weight: 500 !important;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--scalar-color-2);
}
.scalar-app h1.section-header-label { font-size: 2rem; letter-spacing: -0.02em; font-weight: 650; }
.scalar-app h2.section-header-label { font-size: 1.5rem; letter-spacing: -0.015em; }

/* ---- Cards: surface, hairline border, small radius ---- */
.scalar-app .scalar-card {
  border-radius: 6px;
  background: var(--scalar-background-2);
  box-shadow: none;
}
.scalar-app .scalar-card-header { background: var(--scalar-background-2); }

/* ---- Parameters: dashed separators ---- */
.scalar-app .parameter-item,
.scalar-app .parameter-list-items > li,
.scalar-app .property { border-top: 1px dashed #b3b9c0 !important; }
.dark-mode .scalar-app .parameter-item,
.dark-mode .scalar-app .parameter-list-items > li,
.dark-mode .scalar-app .property { border-top-color: #444b53 !important; }
.scalar-app .parameter-item:first-child { border-top: 0 !important; }
.scalar-app .property-required { font-family: var(--scalar-font-code); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--scalar-color-red); }

/* ---- Method pills: POST green etc. ---- */
.scalar-app .sidebar-heading-type,
.scalar-app .endpoints .http-method,
.scalar-app .scalar-card .http-method {
  font-family: var(--scalar-font-code);
  font-weight: 600;
  letter-spacing: 0.04em;
}
.light-mode .scalar-app .sidebar-heading-type,
.light-mode .scalar-app .http-method { color: var(--scalar-color-green); }

/* ---- Tighter vertical rhythm ---- */
.scalar-app .section-container { padding-block: 28px !important; }
.scalar-app .introduction-section { padding-top: 20px !important; }
.scalar-app .section { min-height: 0 !important; }
.scalar-app .section-columns { gap: 32px; }
`;
