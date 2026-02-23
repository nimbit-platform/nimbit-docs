---
title: State
slug: /widgets/state
---

# State Widget

![State Widget](/screenshots/widgets/widget-state-preview.png)

## Overview

The State widget displays the current snapshot values of one or more measures as value cards. It supports carousel (swipeable) and stacked (grid) layouts, with horizontal or vertical orientation. It provides a clear, prominent display of current measurement values, ideal for monitoring critical parameters at a glance.

## Use Cases

- **Critical Monitoring** - Display important measurements prominently
- **Multi-Measure Dashboard** - Show several measure values in a compact layout
- **KPI Display** - Present key performance indicators
- **Value Tracking** - Monitor specific sensor readings
- **Status Overview** - Quickly see current values for multiple measures

## Key Features

- Large value display
- Multiple measures support
- Carousel or stacked layout modes
- Horizontal and vertical orientation
- Unit display
- Real-time updates

## Configuration

![State Widget Configuration Form](/screenshots/widgets/widget-state-form.png)

### Basic Settings

| Field        | Required | Description                                                                             |
| ------------ | -------- | --------------------------------------------------------------------------------------- |
| **Title**    | ❌ No    | Display name for the widget                                                             |
| **Thing**    | ❌ No    | Select Thing to monitor (optional, can display multiple measures from different Things) |
| **Measures** | ✅ Yes   | Add measures to display. Each measure requires: measure ID and optional aggregation     |

### Display Options

| Field                | Required | Description                                                             |
| -------------------- | -------- | ----------------------------------------------------------------------- |
| **Carousel mode**    | ❌ No    | Toggle between stacked (default) and carousel display mode              |
| **Orientation**      | ❌ No    | Choose 'vertical' (default) or 'horizontal' layout                      |
| **Compact number**   | ❌ No    | Display large numbers in compact format (e.g., 1.23K). Default: enabled |
| **Transparent**      | ❌ No    | Remove widget background                                                |
| **Border color**     | ❌ No    | Custom border color                                                     |
| **Background Color** | ❌ No    | Custom background color                                                 |
| **Translations**     | ❌ No    | Custom translations for the widget name                                 |

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
