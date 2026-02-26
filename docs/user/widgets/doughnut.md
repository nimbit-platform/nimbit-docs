---
title: Doughnut
slug: /widgets/doughnut
---

# Doughnut Widget

![Doughnut Widget](/screenshots/widgets/widget-doughnut-preview.svg)

## Overview

The Doughnut widget is a ring chart with segments showing proportions of a whole, featuring an empty center. It's used for percentage distributions, visualizing shares and can display additional information in the center area.

## Use Cases

- **Percentage Distribution** - Show how parts make up a whole
- **Resource Allocation** - Display resource distribution
- **Category Breakdown** - Visualize categorical proportions
- **Capacity Utilization** - Show used vs. available capacity
- **Portfolio Visualization** - Display asset or investment distributions

## Key Features

- Ring-shaped segmented display
- Central information area
- Color-coded segments
- Percentage labels
- Interactive legends

## Configuration

### Basic Settings

| Field               | Required | Description                                                      |
| ------------------- | -------- | ---------------------------------------------------------------- |
| **Name**            | ❌ No    | Display name for the widget                                      |
| **Thing**           | ✅ Yes   | Select Thing to display data from                                |
| **Measures**        | ✅ Yes   | Choose measures for segments (each with measure, thingId, color) |
| **Unit of measure** | ✅ Yes   | Unit to display for values                                       |

### Display Options

| Field                | Required | Description                             | Default Value |
| -------------------- | -------- | --------------------------------------- | ------------- |
| **Display mode**     | ✅ Yes   | Pie chart style: 'pie' or 'variablepie' | 'variablepie' |
| **Transparent**      | ❌ No    | Remove widget background                | false         |
| **Border color**     | ❌ No    | Widget border color                     | -             |
| **Background Color** | ❌ No    | Widget background color                 | -             |

## Best Practices

1. **Limited Segments** - Use 3-7 segments for clarity
2. **Color Distinction** - Use clearly distinguishable colors

---

## What's Next?

- [Gauge Widget](/docs/widgets/gauge) - For KPI visualization
