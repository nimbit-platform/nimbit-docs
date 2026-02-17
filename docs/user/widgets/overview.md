---
title: Widgets Overview
slug: /widgets
sidebar_position: 1
---

# Widgets Overview

Widgets are the building blocks of dashboards in IotBreeze, providing various ways to visualize, interact with, and monitor your IoT data. Each widget type is designed for specific use cases and data presentation needs.

## Widget Categories

### Data Display Widgets

These widgets focus on presenting data in tabular or structured formats, ideal for detailed data analysis and property monitoring.

- [Pivot Table](/docs/widgets/pivot-table) - Multi-dimensional data analysis
- [Property](/docs/widgets/property) - Individual property monitoring
- [Property List](/docs/widgets/property-list) - Multiple property overview
- [Snapshot](/docs/widgets/snapshot) - Point-in-time data capture
- [File List](/docs/widgets/file-list) - File management and display

### Status & State Widgets

Monitor the current state and status of your Things with visual indicators and comparison tools.

- [State](/docs/widgets/state) - Current state display
- [Status](/docs/widgets/status) - Status indicators
- [Aggregated State](/docs/widgets/aggregated-state) - Aggregated state information
- [Compare](/docs/widgets/compare) - Value comparison
- [Boolean](/docs/widgets/boolean) - Boolean value display
- [Counter](/docs/widgets/counter) - Numerical counters

### Chart Widgets

Visualize time-series data, trends, and patterns with various chart types.

- [Bar](/docs/widgets/bar) - Bar charts for comparisons
- [Scatter](/docs/widgets/scatter) - Scatter plots for correlations
- [Line](/docs/widgets/line) - Line charts for trends
- [Combination](/docs/widgets/combination) - Combined chart types
- [Doughnut](/docs/widgets/doughnut) - Proportional data display
- [Gauge](/docs/widgets/gauge) - KPI and performance metrics
- [Heatmap](/docs/widgets/heatmap) - Pattern identification
- [Timeline](/docs/widgets/timeline) - Chronological events
- [Fill Level](/docs/widgets/fill-level) - Capacity visualization
- [Custom Chart](/docs/widgets/custom-chart) - Custom visualizations

### Interactive Widgets

Execute actions and monitor events directly from your dashboard.

- [Events](/docs/widgets/events) - Event monitoring and management
- [Action](/docs/widgets/action) - Thing action execution

### Visual & Media Widgets

Enhance dashboards with images, overlays, and custom drawings.

- [Image](/docs/widgets/image) - Static image display
- [Canvas](/docs/widgets/canvas) - Free-form drawing

### Layout & Navigation Widgets

Organize dashboard content with structural and informational elements.

- [Container](/docs/widgets/container) - Widget grouping
- [Text](/docs/widgets/text) - Text and labels

### External Content Widgets

Integrate external content and geographic visualizations.

- [Map](/docs/widgets/map) - Geographic visualization
- [Thing List Map](/docs/widgets/thing-list-map) - Multi-thing mapping
- [iFrame](/docs/widgets/iframe) - External content embedding

---

## Adding Widgets to Dashboards

To add a widget to your dashboard:

1. Enable editing mode by clicking the lock button
2. Click the **"+"** button in the toolbar
3. Select the desired widget type from the dialog
4. Configure the widget properties
5. Position and resize the widget as needed

For detailed information on dashboard editing, see [Dashboards](/docs/dashboards).

---

## Widget Configuration

Each widget type has its own configuration options. Detailed configuration options are documented in each widget's individual page.

### Common Fields

Many widgets share these display options, though not all widgets include every field. See each widget's page for its exact configuration.

| Field                | Required | Description                                                     |
| -------------------- | -------- | --------------------------------------------------------------- |
| **Transparent**      | ❌ No    | Remove the widget background for a clean look                   |
| **Background Color** | ❌ No    | Custom background color for the widget                          |
| **Border color**     | ❌ No    | Custom border color for the widget                              |
| **Compact number**   | ❌ No    | Display large numbers in compact format (e.g., 1.23K)           |
| **Override**         | ❌ No    | Use widget-specific time settings instead of dashboard defaults |

### Widget-Specific Fields

Beyond the common fields, widgets may include:

- **Title** - Display name for the widget
- **Thing** - Selection of Things to display data from
- **Measures / Properties** - Data source configuration
- **Timeframe** - Time range for data display (timeseries widgets)
- **Aggregation** - Data aggregation method
- **Visualization Settings** - Chart types, colors, and display options

---

## Best Practices

### Widget Selection

- Choose widgets that best represent your data type
- Use chart widgets for trends and patterns
- Use state widgets for current values and status
- Combine multiple widgets for comprehensive views

### Dashboard Organization

- Group related widgets in containers
- Use titles to create clear sections
- Maintain consistent widget sizes for visual harmony
- Place most important widgets in prominent positions

### Performance Considerations

- Limit the number of widgets per dashboard (recommended: 10-15)
- Use appropriate time windows to reduce data loading
- Consider widget refresh rates for real-time data
- Test dashboard performance on target devices

---

## What's Next?

Explore individual widget documentation for detailed configuration options and use cases, or return to [Dashboards](/docs/dashboards) to learn more about dashboard management.
