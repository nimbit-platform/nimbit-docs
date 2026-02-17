---
title: Bar
slug: /widgets/bar
---

# Bar Widget

## Overview

The Bar widget displays data using horizontal or vertical bars whose length or height represents values. It's ideal for comparing categories, displaying rankings, and visualizing discrete data with clear visual differences.

## Use Cases

- **Category Comparison** - Compare values across different categories
- **Rankings** - Display ranked data visually
- **Period Comparison** - Compare metrics across time periods
- **Multi-Device Comparison** - Compare measurements from multiple Things
- **Performance Metrics** - Visualize performance across categories

## Key Features

- Horizontal or vertical orientation
- Multiple bar modes (grouped, stacked)
- Y-axis customization
- Zoom capabilities
- Time-based grouping
- Export to PDF, Excel, CSV

## Configuration

### Basic Settings

| Field         | Required | Description                                                                                |
| ------------- | -------- | ------------------------------------------------------------------------------------------ |
| **Title**     | ❌ No    | Display name for the widget                                                                |
| **Thing**     | ✅ Yes   | Select Thing to display data from (not required for ThingType dashboards)                  |
| **Mode**      | ✅ Yes   | Choose 'clustered' or 'stacked' bar display                                                |
| **Timeframe** | ✅ Yes   | Time range (from/to) for data display                                                      |
| **Measures**  | ✅ Yes   | Add measures to display as bars. Each measure requires: measure ID, aggregation, and color |

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

| Field                | Required | Description                                                     |
| -------------------- | -------- | --------------------------------------------------------------- |
| **Zoom allowed**     | ❌ No    | Enable zoom functionality (default: true)                       |
| **Show Table**       | ❌ No    | Display data in table format below the chart                    |
| **Display mode**     | ❌ No    | Choose chart, table, or split view                              |
| **Override**         | ❌ No    | Use widget-specific time settings instead of dashboard defaults |
| **Transparent**      | ❌ No    | Remove widget background                                        |
| **Border color**     | ❌ No    | Custom border color                                             |
| **Background Color** | ❌ No    | Custom background color                                         |

## Best Practices

1. **Limited Categories** - Use for 3-10 categories for clarity
2. **Consistent Colors** - Use meaningful color coding
3. **Axis Labels** - Always label axes clearly
4. **Appropriate Grouping** - Choose grouping that highlights comparisons
5. **Stacking** - Use stacked bars for part-to-whole relationships

---

## What's Next?

- [Line Widget](/docs/widgets/line) - For trend visualization
- [Combination Widget](/docs/widgets/combination) - For mixed chart types
