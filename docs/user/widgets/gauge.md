---
title: Gauge
slug: /widgets/gauge
sidebar_position: 35
---

# Gauge Widget

## Overview

The Gauge widget features a semi-circular scale with a pointer, similar to a tachometer. It's ideal for displaying KPIs and performance indicators, comparing target values with current values, and creating status dashboards.

## Use Cases

- **KPI Monitoring** - Display key performance indicators
- **Target Tracking** - Show progress towards targets
- **Performance Metrics** - Visualize performance levels
- **Capacity Indicators** - Show utilization levels
- **Alert Visualization** - Display values with threshold zones

## Key Features

- Semi-circular gauge display
- Threshold color zones
- Current value pointer
- Min/max value indicators
- Target value markers
- Compact number formatting

## Configuration

### Basic Settings

| Field         | Required | Description                       |
| ------------- | -------- | --------------------------------- |
| **Title**     | No       | Display name for the widget       |
| **Asset**     | ✅ Yes   | Select Thing to display data from (not required for ThingType dashboards) |
| **Measure**   | ✅ Yes   | Choose measure to display         |
| **Shape**     | ✅ Yes   | Choose 'arc' (semi-circular) or 'linear' (horizontal bar) display |

### Gauge Settings

| Field         | Required | Description                       |
| ------------- | -------- | --------------------------------- |
| **Min Value** | ✅ Yes   | Minimum gauge value |
| **Max Value** | ✅ Yes   | Maximum gauge value (must be greater than min) |
| **Thresholds** | ✅ Yes  | Define color zones with name, min value, max value, and color. Each threshold must be within the gauge min/max range |
| **Compact Number** | No   | Display large numbers in compact format (e.g., 1.23K) |

### Display Options

| Field         | Required | Description                       |
| ------------- | -------- | --------------------------------- |
| **Transparent** | No     | Remove widget background |
| **Border Color** | No    | Custom border color |
| **Background Color** | No | Custom background color |

## Best Practices

1. **Meaningful Ranges** -Set min/max values that make sense for the metric
2. **Threshold Zones** - Use 3-4 color zones (good, warning, critical)
3. **Target Indicators** - Mark target values clearly
4. **Compact Display** - Keep gauges reasonably sized
5. **Dashboard Grouping** - Group related gauges together

---

## What's Next?

- [State Widget](/docs/widgets/state) - For simple value display
- [Doughnut Widget](/docs/widgets/doughnut) - For proportional display
