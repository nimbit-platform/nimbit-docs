---
title: Heatmap
slug: /widgets/heatmap
---

# Heatmap Widget

![Heatmap Widget](/screenshots/widgets/widget-heatmap-preview.png)

## Overview

The Heatmap widget displays a matrix of color-coded cells where color intensity represents values. It's excellent for identifying patterns in large datasets, displaying correlation matrices, and visualizing geographic or temporal distributions.

## Use Cases

- **Pattern Recognition** - Identify patterns in time-series data
- **Temporal Analysis** - Visualize data across time periods
- **Correlation Matrices** - Show relationships between variables
- **Usage Patterns** - Display usage over time (hourly, daily, weekly)
- **Anomaly Detection** - Spot unusual patterns in data

## Key Features

- Color intensity mapping
- Time-based clustering
- Customizable color scales
- Hourly, daily, weekly, monthly views
- Interactive cell details
- Aggregation options

## Configuration

![Heatmap Widget Configuration Form](/screenshots/widgets/widget-heatmap-form.png)

### Basic Settings

| Field           | Required | Description                                                               |
| --------------- | -------- | ------------------------------------------------------------------------- |
| **Title**       | ❌ No    | Display name for the widget                                               |
| **Thing**       | ✅ Yes   | Select Thing to display data from (not required for ThingType dashboards) |
| **Measure**     | ✅ Yes   | Choose measure to visualize                                               |
| **Aggregation** | ✅ Yes   | Data aggregation method (AVG, MIN, MAX, SUM)                              |
| **Color**       | ✅ Yes   | Color for the heatmap scale                                               |

### Heatmap Settings

| Field               | Required | Description                                             |
| ------------------- | -------- | ------------------------------------------------------- |
| **Unit**            | ✅ Yes   | Time granularity (hour, day, week, month, year)         |
| **Amount**          | ✅ Yes   | Number of units to display (max 100)                    |
| **Clustering mode** | ✅ Yes   | Y-axis clustering mode (byHour, byDay, byWeek, byMonth) |
| **Min**             | ❌ No    | Minimum value for color scale                           |
| **Max**             | ❌ No    | Maximum value for color scale                           |
| **Gapfill**         | ❌ No    | Handle missing data (NONE, TIME, LOCF)                  |

### Display Options

| Field                | Required | Description              |
| -------------------- | -------- | ------------------------ |
| **Transparent**      | ❌ No    | Remove widget background |
| **Border color**     | ❌ No    | Custom border color      |
| **Background Color** | ❌ No    | Custom background color  |

## Best Practices

1. **Appropriate Granularity** - Choose time unit matching data frequency
2. **Color Scales** - Use intuitive color gradients (cool to hot)
3. **Pattern Analysis** - Look for recurring patterns
4. **Aggregation Choice** - Select aggregation matching analysis goals
5. **Sufficient Data** - Ensure enough data points for meaningful patterns

---

## What's Next?

- [Timeline Widget](/docs/widgets/timeline) - For chronological events
- [Line Widget](/docs/widgets/line) - For trend analysis
