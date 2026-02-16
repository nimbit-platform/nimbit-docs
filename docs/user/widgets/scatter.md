---
title: Scatter
slug: /widgets/scatter
sidebar_position: 31
---

# Scatter Widget

## Overview

The Scatter widget displays points in a coordinate system where X and Y axes represent different variables. It's perfect for identifying correlations between variables, detecting outliers, and uncovering trends and patterns in data.

## Use Cases

- **Correlation Analysis** - Identify relationships between two variables
- **Outlier Detection** - Spot anomalous data points
- **Pattern Recognition** - Discover clusters and trends
- **Quality Control** - Plot measurements against specifications
- **Multi-Variable Analysis** - Analyze relationships between metrics

## Key Features

- X-Y coordinate plotting
- Multiple data series
- Trend line support
- Zoom and pan capabilities
- Point labeling
- Color-coded series

## Configuration

### Basic Settings

| Field         | Required | Description                         |
| ------------- | -------- | ----------------------------------- |
| **Title**     | No       | Display name for the widget         |
| **Asset**     | ✅ Yes   | Select Thing to display data from (not required for ThingType dashboards)  |
| **Time Window** | ✅ Yes | Time range (from/to) for data display |
| **Measures**  | ✅ Yes   | Add measures to display as scatter points. Each measure requires: measure ID, aggregation, and color |

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
| **Zoomable**   | No      | Enable zoom functionality (default: true) |
| **Show Table** | No      | Display data in table format |
| **Display Mode** | No    | Choose chart, table, or split view |
| **Transparent** | No     | Remove widget background |
| **Border Color** | No    | Custom border color |
| **Background Color** | No | Custom background color |

## Best Practices

1. **Variable Selection** - Choose variables with potential relationships
2. **Scale Appropriately** - Set axis ranges to highlight patterns
3. **Multiple Series** - Use colors to distinguish data series
4. **Outlier Analysis** - Investigate outliers for insights
5. **Regular Updates** - Refresh data to track changing correlations

---

## What's Next?

- [Line Widget](/docs/widgets/line) - For trend over time
- [Heatmap Widget](/docs/widgets/heatmap) - For pattern visualization
