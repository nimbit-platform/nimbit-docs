---
title: Scatter
slug: /widgets/scatter
---

# Scatter Widget

![Scatter Widget](/screenshots/widgets/widget-scatter-preview.svg)

## Overview

The Scatter widget displays points in a coordinate system where X and Y axes represent different variables. It's perfect for identifying correlations between variables, detecting outliers and uncovering trends and patterns in data.

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

| Field         | Required | Description                                                                                         |
| ------------- | -------- | --------------------------------------------------------------------------------------------------- |
| **Title**     | ❌ No    | Display name for the widget                                                                         |
| **Thing**     | ✅ Yes   | Select Thing to display data from (not required for ThingType dashboards)                           |
| **Timeframe** | ✅ Yes   | Time range (from/to) for data display                                                               |
| **Measures**  | ✅ Yes   | Add measures to display as scatter points. Each measure requires: measure ID, aggregation and color |

### Chart Settings

| Field                             | Required | Description                                         |
| --------------------------------- | -------- | --------------------------------------------------- |
| **Y-Axis Min**                    | ❌ No    | Minimum value for Y-axis                            |
| **Y-Axis Max**                    | ❌ No    | Maximum value for Y-axis                            |
| **Gapfill**                       | ❌ No    | Handle missing data (NONE, TIME, LOCF)              |
| **Bucket type**                   | ✅ Yes   | Choose 'dynamic' or 'fixed' time bucket aggregation |
| **Bucketsize** / **Data density** | ✅ Yes   | Aggregation interval (depends on bucket type)       |
| **Thresholds**                    | ❌ No    | Define threshold lines with colors and values       |

### Display Options

| Field                  | Required | Description                                                     |
| ---------------------- | -------- | --------------------------------------------------------------- |
| **Show chart markers** | ❌ No    | Display data point markers                                      |
| **Zoom allowed**       | ❌ No    | Enable zoom functionality (default: true)                       |
| **Show Table**         | ❌ No    | Display data in table format below the chart                    |
| **Display mode**       | ❌ No    | Choose chart, table, or split view                              |
| **Override**           | ❌ No    | Use widget-specific time settings instead of dashboard defaults |
| **Transparent**        | ❌ No    | Remove widget background                                        |
| **Border color**       | ❌ No    | Custom border color                                             |
| **Background Color**   | ❌ No    | Custom background color                                         |

## Best Practices

1. **Variable Selection** - Choose variables with potential relationships
2. **Scale Appropriately** - Set axis ranges to highlight patterns
3. **Multiple Series** - Use colors to distinguish data series
4. **Outlier Analysis** - Investigate outliers for insights

---

## What's Next?

- [Line Widget](/docs/widgets/line) - For trend over time
- [Heatmap Widget](/docs/widgets/heatmap) - For pattern visualization
