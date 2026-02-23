---
title: Line
slug: /widgets/line
---

# Line Widget

![Line Widget](/screenshots/widgets/widget-line-preview.png)

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

![Line Widget Configuration Form](/screenshots/widgets/widget-line-form.png)

### Basic Settings

| Field         | Required | Description                                                                                         |
| ------------- | -------- | --------------------------------------------------------------------------------------------------- |
| **Title**     | ❌ No    | Display name for the widget                                                                         |
| **Thing**     | ✅ Yes   | Select Thing to display data from (not required for Thing Type dashboards)                          |
| **Mode**      | ✅ Yes   | Choose 'Line' or 'Area' display mode                                                                |
| **Timeframe** | ✅ Yes   | Time range (from/to) for data display                                                               |
| **Measures**  | ✅ Yes   | Add measures to display as lines. Each measure requires: measure, aggregation, line type, and color |

### Chart Settings

| Field                             | Required | Description                                         |
| --------------------------------- | -------- | --------------------------------------------------- |
| **Y-Axis Min**                    | ❌ No    | Minimum value for Y-axis                            |
| **Y-Axis Max**                    | ❌ No    | Maximum value for Y-axis                            |
| **Gapfill**                       | ❌ No    | Handle missing data (NONE, TIME, LOCF)              |
| **Bucket type**                   | ✅ Yes   | Choose 'Dynamic' or 'Fixed' time bucket aggregation |
| **Bucketsize** / **Data density** | ✅ Yes   | Aggregation interval (depends on bucket type)       |
| **Thresholds**                    | ❌ No    | Define threshold lines with colors and values       |

### Display Options

| Field                  | Required | Description                                                     |
| ---------------------- | -------- | --------------------------------------------------------------- |
| **Show chart markers** | ❌ No    | Display data point markers on the line                          |
| **Zoom allowed**       | ❌ No    | Enable zoom functionality (default: true)                       |
| **Show Table**         | ❌ No    | Display data in table format below the chart                    |
| **Display mode**       | ❌ No    | Choose chart, table, or split view                              |
| **Override**           | ❌ No    | Use widget-specific time settings instead of dashboard defaults |
| **Transparent**        | ❌ No    | Remove widget background                                        |
| **Border color**       | ❌ No    | Custom border color                                             |
| **Background Color**   | ❌ No    | Custom background color                                         |

## Best Practices

1. **Appropriate Timeframes** - Match time range to data frequency
2. **Multiple Lines** - Limit to 3-5 lines for readability
3. **Color Distinction** - Use distinct colors for each line
4. **Axis Scaling** - Set appropriate Y-axis ranges
5. **Gap Filling** - Choose appropriate method for missing data

---

## What's Next?

- [Bar Widget](/docs/widgets/bar) - For categorical comparisons
- [Combination Widget](/docs/widgets/combination) - For mixed visualizations
