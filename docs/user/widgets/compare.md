---
title: Compare
slug: /widgets/compare
sidebar_position: 23
---

# Compare Widget

## Overview

The Compare widget allows you to compare values across different time periods or Things side-by-side. It's ideal for identifying changes, trends, and differences between measurements or time ranges.

## Use Cases

- **Period Comparison** - Compare values across time periods (day vs. day, month vs. month)
- **Device Comparison** - Compare measurements between different Things
- **Baseline Analysis** - Compare current values against historical baselines
- **Performance Metrics** - Compare KPIs across time or devices
- **Trend Identification** - Identify improving or declining trends

## Key Features

- Side-by-side value comparison
- Multiple comparison sources
- Percentage change calculation
- Visual difference indicators
- Time period selection

## Configuration

### Basic Settings

| Field         | Required | Description                         |
| ------------- | -------- | ----------------------------------- |
| **Title**     | No       | Display name for the widget         |
| **Asset**     | ✅ Yes   | Select Thing to display data from (not required for ThingType dashboards)  |
| **Measure**   | ✅ Yes   | Choose measure to compare           |
| **Time Window** | ✅ Yes | Time range (from/to) for data display |

### Display Options

| Field         | Required | Description                         |
| ------------- | -------- | ----------------------------------- |
| **Compact Number** | No  | Display numbers in compact format   |
| **Transparent** | No     | Remove widget background            |
| **Border Color** | No    | Custom border color                 |
| **Background Color** | No | Custom background color           |

## Best Practices

1. **Like-for-Like** - Compare similar measurements for meaningful insights
2. **Consistent Time Periods** - Use equal time periods for fair comparison
3. **Context** - Provide context for what is being compared
4. **Change Indicators** - Use visual cues for significant changes
5. **Regular Reviews** - Update comparison periods regularly

---

## What's Next?

- [Bar Widget](/docs/widgets/bar) - For visual comparisons
- [Aggregated State](/docs/widgets/aggregated-state) - For aggregated data
