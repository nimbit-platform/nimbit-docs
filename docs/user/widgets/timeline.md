---
title: Timeline
slug: /widgets/timeline
sidebar_position: 38
---

# Timeline Widget

## Overview

The Timeline widget displays a horizontal or vertical line with events marked in chronological order. It's perfect for displaying project plans, showing historical developments, and visualizing milestones and deadlines.

## Use Cases

- **Project Planning** - Display project milestones and deadlines
- **Historical Events** - Show chronological sequence of events
- **Maintenance Schedules** - Visualize maintenance activities over time
- **Event Tracking** - Monitor when events occurred
- **Process Timelines** - Show workflow or process stages

## Key Features

- Chronological event display
- Time-based positioning
- Event markers and labels
- Horizontal or vertical orientation
- Zoom and pan capabilities
- Event filtering

## Configuration

### Basic Settings

| Field         | Required | Description                         |
| ------------- | -------- | ----------------------------------- |
| **Title**     | No       | Display name for the widget         |
| **Asset**     | ✅ Yes   | Select Thing to display data from (not required for ThingType dashboards)  |
| **Time Window** | ✅ Yes | Time range (from/to) for data display |
| **Conditions** | ✅ Yes  | Define timeline conditions. Each condition requires: measures (array), aggregation, name, condition (Range/Value), data (from/to for range, specific value for value), and color |

### Chart Settings

| Field         | Required | Description                         |
| ------------- | -------- | ----------------------------------- |
| **Gap Fill**   | No      | Handle missing data (NONE, TIME, LOCF) |
| **Bucket Type** | ✅ Yes | Choose 'dynamic' or 'fixed' time bucket aggregation |
| **Bucket Size/Density** | ✅ Yes | Aggregation interval (depends on bucket type) |

### Display Options

| Field         | Required | Description                         |
| ------------- | -------- | ----------------------------------- |
| **Merge Consecutive Points** | No | Combine consecutive matching conditions |
| **Zoomable**   | No      | Enable zoom functionality (default: true) |
| **Display Mode** | No    | Choose chart, table, or split view |
| **Transparent** | No     | Remove widget background |
| **Border Color** | No    | Custom border color |
| **Background Color** | No | Custom background color |

## Best Practices

1. **Appropriate Time Scale** - Match scale to event frequency
2. **Clear Labeling** - Label significant events clearly
3. **Color Coding** - Use colors to categorize event types
4. **Limited Events** - Don't overcrowd with too many events
5. **Milestones** - Highlight critical milestones

---

## What's Next?

- [Heatmap Widget](/docs/widgets/heatmap) - For pattern visualization
- [Events Widget](/docs/widgets/events) - For event management
