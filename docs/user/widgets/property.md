---
title: Property
slug: /widgets/property
---

# Property Widget

![Property Widget](/screenshots/widgets/widget-property-preview.png)

## Overview

The Property widget displays individual Thing property values with their current state. Unlike measure-based widgets, this widget works directly with Thing properties, making it ideal for displaying device metadata, configuration values, and static attributes.

## Use Cases

- **Device Information** - Display firmware version, serial number, or IMEI
- **Configuration Values** - Show current device configuration settings
- **Status Attributes** - Monitor device attributes and metadata
- **Static Properties** - Display Thing properties that don't change frequently
- **Quick Reference** - Access key device information at a glance

## Key Features

- Single property display from Thing properties
- Works with properties, not measures
- Current property state visualization
- Compact widget size
- Clear value presentation
- Supports all Thing property types

## Configuration


### Basic Settings

| Field        | Required | Description                               |
| ------------ | -------- | ----------------------------------------- |
| **Title**    | ❌ No    | Display name for the widget (optional)    |
| **Thing**    | ✅ Yes   | Select the Thing to display property from |
| **Property** | ✅ Yes   | Choose which Thing property to display    |

### Display Options

| Field                | Required | Description             |
| -------------------- | -------- | ----------------------- |
| **Border color**     | ❌ No    | Custom border color     |
| **Background Color** | ❌ No    | Custom background color |

## Best Practices

1. **Property Selection** - Choose properties that provide meaningful device context
2. **Widget Placement** - Position near related measurement widgets for complete device overview
3. **Title Usage** - Use descriptive titles to clearly identify what property is displayed
4. **Grouping** - Group multiple property widgets together to show comprehensive device information
5. **Size** - Keep widget compact for efficient dashboard space usage
6. **Property Types** - Works with all Thing property types (strings, numbers, booleans, etc.)

---

## What's Next?

- [Property List](/docs/widgets/property-list) - Display all properties of a Thing in table format
- [State Widget](/docs/widgets/state) - For displaying measure state values
