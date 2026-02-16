---
title: Snapshot
slug: /widgets/snapshot
sidebar_position: 14
---

# Snapshot Widget

## Overview

The Snapshot widget captures and displays a point-in-time view of selected data. It provides a frozen snapshot of measurements or states, useful for comparing current values against historical benchmarks or recording specific moments.

## Use Cases

- **Baseline Comparison** - Compare current values against historical snapshots
- **Milestone Recording** - Capture key moments in operational data
- **Before/After Analysis** - Document changes over time
- **Reference Points** - Maintain fixed reference values
- **Performance Benchmarks** - Store performance snapshots for comparison

## Key Features

- Point-in-time data capture
- Multiple measurement support
- Timestamp display
- Snapshot comparison capabilities
- Frozen data reference

## Configuration

### Basic Settings

| Field     | Required | Type   | Description                        |
| --------- | -------- | ------ | ---------------------------------- |
| **Title** | ✅ Yes   | string | Display name for the widget        |
| **Asset** | ✅ Yes   | string | Select Thing to capture data from  |

### Widget Schema (WidgetSnapshotTableSchema)

The Snapshot widget uses a simplified configuration structure:

| Field      | Required | Type                    | Description                              |
| ---------- | -------- | ----------------------- | ---------------------------------------- |
| **type**   | ✅ Yes   | 'snapshot'              | Widget type identifier                   |
| **name**   | ✅ Yes   | string                  | Display name for the widget              |
| **config** | ✅ Yes   | Array of config items   | Configuration array with Thing ID        |

Each config item requires:
- **id** - Unique identifier for the configuration item
- **thingId** - The ID of the Thing to snapshot (required unless using a ThingType dashboard)

Note: The Snapshot widget displays the current/latest state of the selected Thing's telemetry data. For ThingType dashboards, the thingId is automatically inferred from the dashboard context.

### Display Options

- **Show Toolbar** - Display widget action toolbar
- **Transparent Background** - Remove widget background

## Best Practices

1. **Meaningful Snapshots** - Capture data at significant moments
2. **Clear Labeling** - Use descriptive titles with dates/events
3. **Comparison Widgets** - Pair with current data widgets for comparison
4. **Documentation** - Document why specific snapshots were taken
5. **Regular Updates** - Update snapshots at regular intervals for trending

---

## What's Next?

- [Compare Widget](/docs/widgets/compare) - For value comparison
- [Table Widget](/docs/widgets/table) - For time-series data
