---
title: Custom Chart
slug: /widgets/custom-chart
sidebar_position: 40
---

# Custom Chart Widget

## Overview

The Custom Chart widget allows you to create custom visualizations with user-defined chart configurations and data representations. It provides advanced flexibility for specialized visualization needs that aren't covered by standard widget types.

## Use Cases

- **Specialized Visualizations** - Create unique chart types
- **Custom Data Representation** - Display data in non-standard ways
- **Advanced Analytics** - Build complex analytical visualizations
- **Custom Dashboards** - Tailor visualizations to specific requirements
- **Prototype New Visualizations** - Test new visualization concepts

## Key Features

- Flexible configuration
- Custom chart type support
- Advanced data manipulation
- Multiple data source support
- Customizable styling
- Preview mode for development

:::warning Advanced Feature
This widget is intended for advanced users with specific visualization needs. Standard widgets should be used whenever possible for consistency and maintainability.
:::

## Configuration

### Basic Settings

| Field         | Required | Description                         |
| ------------- | -------- | ----------------------------------- |
| **Title**     | No       | Display name for the widget         |
| **Time Window** | ✅ Yes | Time range (from/to) for data display |
| **Transform Function** | ✅ Yes | JavaScript function to transform data |
| **Data Source** | ✅ Yes | Data source identifier (e.g., 'plotly', 'echarts') |
| **Measures**  | ✅ Yes   | Add measures to include. Each measure requires: measure ID, Thing ID, and aggregation |

### Chart Settings

| Field         | Required | Description                         |
| ------------- | -------- | ----------------------------------- |
| **Gap Fill**   | No      | Handle missing data (NONE, TIME, LOCF) |
| **Bucket Type** | ✅ Yes | Choose 'dynamic' or 'fixed' time bucket aggregation |
| **Bucket Size/Density** | ✅ Yes | Aggregation interval (depends on bucket type) |

### Display Options

| Field         | Required | Description                         |
| ------------- | -------- | ----------------------------------- |
| **Transparent** | No     | Remove widget background            |
| **Border Color** | No    | Custom border color                 |
| **Background Color** | No | Custom background color           |

## Best Practices

1. **Use Standard Widgets First** - Only use custom charts when necessary
2. **Documentation** - Document custom configurations thoroughly
3. **Testing** - Test thoroughly with various data scenarios
4. **Maintainability** - Keep configurations simple and maintainable
5. **Backup Configurations** - Save custom configurations externally

## Technical Considerations

- **Performance** - Custom charts may have performance implications
- **Browser Compatibility** - Test across browsers
- **Data Volume** - Consider data volume impact
- **Update Frequency** - Balance customization with update needs
- **Support** - Custom charts may require specialized support

---

## What's Next?

- [Canvas Widget](/docs/widgets/canvas) - For free-form drawing
- [iFrame Widget](/docs/widgets/iframe) - For embedded visualizations
