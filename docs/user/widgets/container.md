---
title: Container
slug: /widgets/container
---

# Container Widget

![Container Widget](/screenshots/widgets/widget-container-preview.png)

## Overview

The Container widget provides a visual boundary for grouping and organizing other widgets on your dashboard. It acts as a styled frame that can contain nested widgets, allowing you to create visual hierarchy and logical sections in your dashboard layout.

## Use Cases

- **Dashboard Organization** - Group related widgets together
- **Visual Sections** - Create distinct dashboard areas
- **Nested Layouts** - Build complex dashboard structures
- **Themed Groups** - Apply styling to widget groups
- **Responsive Design** - Control widget arrangement

## Key Features

- Visual grouping of dashboard widgets
- Customizable background and border colors
- Optional transparent styling
- Nested container support
- Minimal configuration required
- Lightweight and performant

## Configuration

![Container Widget Configuration Form](/screenshots/widgets/widget-container-form.png)

The Container widget is a standalone widget that primarily serves as a visual grouping element. It has optional styling properties but no complex configuration.

### Basic Settings

| Field       | Required | Description                            |
| ----------- | -------- | -------------------------------------- |
| **Variant** | ❌ No    | Container type (`page` or `container`) |

### Display Options

| Field                | Type    | Description                       |
| -------------------- | ------- | --------------------------------- |
| **Transparent**      | Boolean | Remove background (default: true) |
| **Background Color** | String  | Custom background color           |
| **Border color**     | String  | Custom border color               |

### Variant Types

- **container** - Standard container styling (default)
- **page** - Page-level container styling

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

### Page Containers

Use the `page` variant for top-level dashboard organization when building multi-section dashboards.

### Nested Structure

Build complex layouts with nested containers:

```
[Container: Main Dashboard]
  ├─ [Container: Metrics] (blue background)
  │   ├─ Widget: Counter
  │   └─ Widget: Chart
  └─ [Container: Controls] (transparent)
      ├─ Widget: Action Buttons
      └─ Widget: Settings
```

---

## What's Next?

- [Text Widget](/docs/widgets/text) - For text content
- [Dashboards](/docs/dashboards) - Learn about dashboard organization
