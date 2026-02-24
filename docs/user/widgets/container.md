---
title: Container
slug: /widgets/container
---

# Container Widget

## Overview

The Container widget provides a visual boundary for grouping and organizing other widgets on your dashboard. It acts as a styled frame that can contain nested widgets, allowing you to create visual hierarchy and logical sections in your dashboard layout.

## Use Cases

- **Dashboard Organization** - Group related widgets together
- **Visual Sections** - Create distinct dashboard areas
- **Nested Layouts** - Build complex dashboard structures

## Key Features

- Visual grouping of dashboard widgets
- Customizable background and border colors
- Optional transparent styling
- Lightweight and performant

## Configuration


The Container widget is a standalone widget that primarily serves as a visual grouping element. It has optional styling properties but no complex configuration.

### Display Options

| Field                | Type    | Description                       |
| -------------------- | ------- | --------------------------------- |
| **Transparent**      | Boolean | Remove background (default: true) |
| **Background Color** | String  | Custom background color           |
| **Border color**     | String  | Custom border color               |

## Best Practices

1. **Logical Grouping** - Use containers to group related widgets
2. **Visual Distinction** - Use background and border colors to create visual sections
3. **Transparency** - Use transparent containers for subtle grouping
4. **Nesting** - Containers can be nested for complex layouts
5. **Minimalism** - Don't overuse containers; apply them purposefully

## Usage Examples

### Section Grouping

Use containers to group related monitoring widgets:

```
[Container: Sensor Metrics]
  ├─ Gauge: Temperature
  ├─ Gauge: Humidity
  └─ Gauge: Pressure
```

### Visual Separation

Apply background colors to distinguish dashboard sections:

- **Operations Section** - Light blue background
- **Analytics Section** - Light green background
- **Alerts Section** - Light yellow background

---

## What's Next?

- [Text Widget](/docs/widgets/text) - For text content
- [Dashboards](/docs/dashboards) - Learn about dashboard organization
