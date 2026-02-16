---
title: Line
slug: /widgets/line
sidebar_position: 32
---

# Line Widget

## Overview

The Line widget displays connected data points as a line, perfect for showing time series data, trends over periods, and visualizing continuous data development. It's one of the most commonly used widgets for temporal data.

## Use Cases

- **Time Series** - Display measurements over time
- **Trend Analysis** - Identify trends and patterns
- **Multiple Measurements** - Compare multiple measures simultaneously
- **Historical Data** - Review historical trends
- **Real-Time Monitoring** - Track live data streams

## Key Features

- Smooth line rendering
- Multiple line series
- Area fill option
- Zoom and pan
- Time-based X-axis
- Interactive legends

## Configuration

### Basic Settings

| Field         | Required | Description                         |
| ------------- | -------- | ----------------------------------- |
| **Title**     | No       | Display name for the widget         |
| **Asset**     | ✅ Yes   | Select Thing to display data from (not required for ThingType dashboards)  |
| **Mode**      | ✅ Yes   | Choose 'line' or 'area' display mode |
| **Time Window** | ✅ Yes | Time range (from/to) for data display |
| **Measures**  | ✅ Yes   | Add measures to display as lines. Each measure requires: measure ID, aggregation, line type, and color |

### Chart Settings

| Field         | Required | Description                         |
| ------------- | -------- | ----------------------------------- |
| **Y-Axis Min** | No      | Minimum value for Y-axis |
| **Y-Axis Max** | No      | Maximum value for Y-axis |
| **Gap Fill**   | No      | Handle missing data (NONE, TIME, LOCF) |
| **Bucket Type** | ✅ Yes | Choose 'dynamic' or 'fixed' time bucket aggregation |
| **Bucket Size/Density** | ✅ Yes | Aggregation interval (depends on bucket type) |
| **Thresholds** | No      | Define threshold lines with colors and values |

### Display Options

| Field         | Required | Description                         |
| ------------- | -------- | ----------------------------------- |
| **Show Markers** | No    | Display data point markers on the line |
| **Zoomable**   | No      | Enable zoom functionality (default: true) |
| **Show Table** | No      | Display data in table format |
| **Display Mode** | No    | Choose chart, table, or split view |
| **Transparent** | No     | Remove widget background |
| **Border Color** | No    | Custom border color |
| **Background Color** | No | Custom background color |

## Best Practices

1. **Appropriate Time Windows** - Match time range to data frequency
2. **Multiple Lines** - Limit to 3-5 lines for readability
3. **Color Distinction** - Use distinct colors for each line
4. **Axis Scaling** - Set appropriate Y-axis ranges
5. **Gap Filling** - Choose appropriate method for missing data

---

## What's Next?

- [Bar Widget](/docs/widgets/bar) - For categorical comparisons
- [Combination Widget](/docs/widgets/combination) - For mixed visualizations
