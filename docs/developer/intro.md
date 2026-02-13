---
title: "API Introduction"
sidebar_position: 1
---

# NimBit API Overview

NimBit exposes three core APIs that together cover the full lifecycle of IoT data — from ingestion through storage and querying to device and application management.

| API | Purpose | Base path |
|-----|---------|-----------|
| **DIP** | Data Ingestion Pipeline | `/api/v1/` |
| **NBQ** | Query Engine | `/api/v1` |
| **OCB** | Application Backend | `/rest/v1/` |

## Authentication

All API requests require a **Bearer token**. Include it in the `Authorization` header:

```
Authorization: Bearer <your-token>
```

Tokens can be generated via the OCB API or through the NimBit dashboard.

---

## DIP — Data Ingestion Pipeline

The DIP API is the entry point for all device data flowing into NimBit. It accepts IoT messages — single or batched — and automatically handles **schema evolution**, **validation**, and **data enhancement** so you never have to manage table schemas manually.

**Key capabilities:**

- **Async ingestion** — Send messages and receive a batch ID for tracking. Processing happens in the background with automatic retries.
- **Sync ingestion** — Send messages and wait for a confirmation that processing is complete.
- **Schema evolution** — New fields in your payload are automatically detected and added to the schema. No migrations needed.
- **Validation & enhancement** — Incoming data is validated against the known schema and enriched before storage.

**Endpoints:**

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/message/async-structured` | Asynchronously process one or more IoT messages |
| POST | `/api/v1/message/structured` | Synchronously process one or more IoT messages |
| POST | `/api/v1/{tenant}/{thingtype}/device/{id}/telemetry` | Send telemetry for a specific device |

---

## NBQ — Query Engine

NBQ is a highly optimized query engine purpose-built for IoT time-series data. It provides fast reads across large datasets and includes built-in support for geospatial queries, device snapshots, metering, and smart analytics.

**Key capabilities:**

- **Time-series queries** — Read device snapshots (latest values), historical data, and aggregate across multiple devices.
- **Geospatial** — Query device positions, movement paths, and reverse-geocode coordinates to addresses.
- **Heartbeat monitoring** — Check device liveness and count connected devices.
- **Smart Insights** — Access auto-generated correlation and quantile profiles for your measurements.
- **Metering** — Inspect data volume per measurement or tenant (data point counts, disk usage).
- **Tags** — Look up device metadata and tags by device ID or tag ID.
- **Background jobs** — Track long-running query or analytics jobs.

**Endpoint groups:**

| Group | Prefix | Description |
|-------|--------|-------------|
| Timeseries | `/timeseries` | Snapshots and historical device data |
| Geo | `/geo` | Device positions, paths, and reverse geocoding |
| Heartbeat | `/heartbeat` | Device liveness and connectivity |
| Tags | `/tags` | Device metadata and tag lookups |
| Smart Insights | `/smartinsights` | Correlation and quantile analysis |
| Metering | `/metering` | Data volume and storage metrics |
| Jobs | `/jobs` | Background job status and management |

---

## OCB — Application Backend

The OCB API is the management layer of NimBit. It covers everything from device configuration and user management to dashboards, event rules, and notifications.

**Key capabilities:**

- **Device management** — Create and configure Thing Types (device templates) and Things (device instances), including images and metadata.
- **User & access control** — Manage users, roles, groups, invitations, and API clients. Supports fine-grained permission models.
- **Tenant administration** — Configure tenant settings, branding (logo, favicon, cover image), and rotate API keys.
- **Dashboards** — Create, duplicate, and manage dashboard configurations.
- **Events & subscriptions** — Define event types, track events by correlation ID, and manage notification subscriptions.
- **Resource hierarchy** — Organize devices and resources into tree structures with drag-and-drop reordering.
- **Reporting** — Configure and generate PDF reports.
- **Destinations** — Set up data forwarding and export destinations.
- **Labels & search** — Tag resources with labels and perform full-text and custom searches.
- **Mail templates** — Manage email templates, blocks, and scenario-based assignments.
- **Device authentication** — Generate device keys and tokens (supports both NimBit-native and Azure authentication).

**Endpoint groups:**

| Group | Prefix | Description |
|-------|--------|-------------|
| Tenant | `/rest/v1/account/Tenant` | Tenant settings, branding, and keys |
| Things | `/rest/v1/config/Things` | Device instances |
| Thing Types | `/rest/v1/config/ThingType` | Device templates and schemas |
| Users | `/rest/v1/account/User` | User management and passwords |
| Roles & Groups | `/rest/v1/auth/Roles`, `/rest/v1/auth/Groups` | Access control |
| Dashboards | `/rest/v1/config/DashboardConfig` | Dashboard management |
| Events | `/rest/v1/config/Event`, `/rest/v1/config/EventType` | Event tracking |
| Subscriptions | `/rest/v1/config/Subscription` | Notification subscriptions |
| Reports | `/rest/v1/config/Report` | Report configuration and PDF generation |
| Destinations | `/rest/v1/config/Destination` | Data export targets |
| Device Auth | `/rest/v1/auth/thing-authentication` | Device keys and tokens |

---

## Next steps

Explore the full endpoint reference for each API:

- [DIP API Reference →](/docs/developer/api/dip)
- [NBQ API Reference →](/docs/developer/api/nbq)
- [OCB API Reference →](/docs/developer/api/ocb)
