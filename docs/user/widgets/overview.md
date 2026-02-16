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
- [Table](/docs/widgets/table) - Structured data display
- [Property State](/docs/widgets/property-state) - Individual property monitoring
- [Property State Table](/docs/widgets/property-state-table) - Multiple property overview
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
- [Image Overlay](/docs/widgets/image-overlay) - Data on images
- [Canvas](/docs/widgets/canvas) - Free-form drawing

### Layout & Navigation Widgets

Organize dashboard content with structural and informational elements.

- [Container](/docs/widgets/container) - Widget grouping
- [Title](/docs/widgets/title) - Section headers
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

Each widget type has its own configuration options including:

- **Title** - Display name for the widget
- **Data Source** - Selection of Things and measures/properties
- **Visualization Settings** - Chart types, colors, and display options
- **Time Settings** - Time windows and refresh intervals
- **Advanced Options** - Widget-specific customization

Detailed configuration options are documented in each widget's individual page.

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
