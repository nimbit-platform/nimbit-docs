---
title: Property State
slug: /widgets/property-state
sidebar_position: 12
---

# Property State Widget

## Overview

The Property State widget displays individual Thing property values with their current state. Unlike measure-based widgets, this widget works directly with Thing properties, making it ideal for displaying device metadata, configuration values, and static attributes.

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

| Field        | Required | Description                             |
| ------------ | -------- | --------------------------------------- |
| **Title**    | No       | Display name for the widget (optional)  |
| **Thing**    | Yes      | Select the Thing to display property from |
| **Property** | Yes      | Choose which Thing property to display  |

### Display Options

- **Background Color** - Customize widget background color
- **Border Color** - Set widget border color
- **Transparent Background** - Remove widget background for clean display

## Schema Information

**Widget Type:** `propertyState`

**Required Configuration:**
- `name` - Widget display name (optional in UI, but part of schema)
- `config.id` - Unique identifier for the configuration
- `config.property` - Property name to display
- `config.thingId` - ID of the Thing containing the property

**Note:** This widget uses Thing properties directly, not measurement data. Properties are defined at the Thing level and represent metadata or configuration attributes.

## Best Practices

1. **Property Selection** - Choose properties that provide meaningful device context
2. **Widget Placement** - Position near related measurement widgets for complete device overview
3. **Title Usage** - Use descriptive titles to clearly identify what property is displayed
4. **Grouping** - Group multiple property widgets together to show comprehensive device information
5. **Size** - Keep widget compact for efficient dashboard space usage
6. **Property Types** - Works with all Thing property types (strings, numbers, booleans, etc.)

---

## What's Next?

- [Property State Table](/docs/widgets/property-state-table) - Display all properties of a Thing in table format
- [State Widget](/docs/widgets/state) - For displaying measure state values
