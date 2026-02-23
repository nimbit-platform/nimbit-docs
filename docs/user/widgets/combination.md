---
title: Combination
slug: /widgets/combination
---

# Combination Widget

![Combination Widget](/screenshots/widgets/widget-combination-preview.png)

## Overview

The Combination widget combines different chart types (e.g., bars + line) with different Y-axes in a single visualization. It's ideal for displaying different metrics with varying scales simultaneously and visualizing complex relationships.

## Use Cases

- **Multi-Scale Metrics** - Display metrics with different scales together
- **Correlation Visualization** - Show relationships between different measurements
- **Performance Dashboards** - Combine volume and rate metrics
- **Complex Analysis** - Multiple visualization types in one view
- **Comparative Analysis** - Compare different data types simultaneously

## Key Features

- Multiple chart types in one widget
- Dual Y-axes
- Bar and line combinations
- Independent scaling
- Color-coded series
- Legend management

## Configuration

![Combination Widget Configuration Form](/screenshots/widgets/widget-combination-form.png)

### Basic Settings

| Field         | Required | Description                                                                                                                      |
| ------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Title**     | ❌ No    | Display name for the widget                                                                                                      |
| **Thing**     | ✅ Yes   | Select Thing to display data from (not required for ThingType dashboards)                                                        |
| **Timeframe** | ✅ Yes   | Time range (from/to) for data display                                                                                            |
| **Measures**  | ✅ Yes   | Add measures to display. Each measure requires: measure ID, aggregation, chart type (line/bar), line type (for lines), and color |

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
| **Show chart markers** | ❌ No    | Display data point markers on lines                             |
| **Zoom allowed**       | ❌ No    | Enable zoom functionality (default: true)                       |
| **Show Table**         | ❌ No    | Display data in table format below the chart                    |
| **Display mode**       | ❌ No    | Choose chart, table, or split view                              |
| **Override**           | ❌ No    | Use widget-specific time settings instead of dashboard defaults |
| **Transparent**        | ❌ No    | Remove widget background                                        |
| **Border color**       | ❌ No    | Custom border color                                             |
| **Background Color**   | ❌ No    | Custom background color                                         |

## Best Practices

1. **Logical Grouping** - Combine related metrics only
2. **Clear Legends** - Ensure legends clearly identify series and axes
3. **Axis Labels** - Label both Y-axes with units
4. **Color Coding** - Use consistent colors for related data
5. **Limit Complexity** - Don't combine too many series (max 4-5)

---

## What's Next?

- [Bar Widget](/docs/widgets/bar) - For bar charts only
- [Line Widget](/docs/widgets/line) - For line charts only
