---
slug: rest-api-v1
title: "Introducing the NimBit REST API"
authors: [nimbit]
tags: [api, developer, release]
---

The NimBit REST API is now available, giving developers full programmatic access to the IoT platform. Manage devices, configure pipelines, and query telemetry data — all through simple, well-documented endpoints.

<!-- truncate -->

## Key Highlights

### Device Management

Register, update, and monitor your IoT devices via the API:

```bash
curl -X GET https://api.nimbit.de/v1/devices \
  -H "Authorization: Bearer <token>"
```

### Data Pipelines

Create and manage data ingestion pipelines programmatically:

```json
{
  "name": "Temperature Sensor Pipeline",
  "type": "mqtt",
  "interval": 30,
  "destination": "timeseries-db"
}
```

### Authentication

The API uses Bearer token authentication. Tokens can be generated from the NimBit dashboard under **Settings > API Keys**.

## Getting Started

Head over to the [API Documentation](/docs/developer/api/dev-api-intro) for the full reference, including request/response models and code examples.
