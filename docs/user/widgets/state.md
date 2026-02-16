---
title: State
slug: /widgets/state
sidebar_position: 20
---

# State Widget

## Overview

The State widget displays the current state of a measure with visual indicators. It provides a clear, prominent display of a single measurement's current value, ideal for monitoring critical parameters at a glance.

## Use Cases

- **Critical Monitoring** - Display important measurements prominently
- **Status Display** - Show current operational states
- **Value Tracking** - Monitor specific sensor readings
- **KPI Display** - Present key performance indicators
- **Alert Indication** - Visual cues for threshold violations

## Key Features

- Large value display
- Color-coded states
- Threshold indicators
- Unit display
- Real-time updates
- Compact widget size

## Configuration

### Basic Settings

| Field         | Required | Description                 |
| ------------- | -------- | --------------------------- |
| **Title**     | No       | Display name for the widget |
| **Asset**     | No       | Select Thing to monitor (optional, can display multiple measures from different Things) |
| **Measures**  | ✅ Yes   | Add measures to display. Each measure requires: measure ID and optional aggregation |

### Display Options

| Field         | Required | Description                 |
| ------------- | -------- | --------------------------- |
| **Mode**      | No       | Choose 'stacked' (default) or 'carousel' display mode |
| **Orientation** | No     | Choose 'vertical' (default) or 'horizontal' layout |
| **Compact Number** | No  | Display large numbers in compact format (e.g., 1.23K). Default: true |
| **Transparent** | No     | Remove widget background |
| **Border Color** | No    | Custom border color |
| **Background Color** | No | Custom background color |
| **Translations** | No    | Custom translations for the widget name |

## Best Practices

1. **Critical Values** - Use for most important measurements
2. **Threshold Configuration** - Set meaningful color thresholds
3. **Widget Placement** - Position prominently on dashboard
4. **Multiple States** - Use multiple widgets for related measurements
5. **Clear Titles** - Use descriptive names for quick identification

---

## What's Next?

- [Status Widget](/docs/widgets/status) - For status indicators
- [Gauge Widget](/docs/widgets/gauge) - For KPI visualization
