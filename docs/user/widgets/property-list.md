---
title: Property List
slug: /widgets/property-list
---

# Property List Widget

![Property List Widget](/screenshots/widgets/widget-property-list-preview.png)

## Overview

The Property List widget displays all properties of a selected Thing in a table format. Unlike measure-based table widgets, this widget automatically shows all Thing properties without requiring individual property selection, making it ideal for comprehensive device information displays.

## Use Cases

- **Complete Device Overview** - Display all properties of a Thing in one widget
- **Configuration Dashboard** - Show all device configuration settings at once
- **Asset Information Panel** - Present comprehensive device metadata
- **Thing Type Dashboards** - Automatically display properties for any Thing of a type
- **Device Documentation** - Create complete property reference views

## Key Features

- Automatic display of all Thing properties
- No manual property selection needed
- Tabular organization with property names and values
- Works with Thing properties, not measures
- Supports Thing Type dashboards (shows properties for current Thing)
- Compact table format

## Configuration

![Property List Widget Configuration Form](/screenshots/widgets/widget-property-list-form.png)

### Basic Settings

| Field     | Required | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| **Thing** | ✅ Yes\* | Select the Thing to display all properties from |

**Note:** On Thing Type dashboards, Thing selection is automatic and not required in the configuration form.

## Schema Information

**Widget Type:** `propertyStateTable`

**Required Configuration:**

- `name` - Widget display name
- `config.id` - Unique identifier for the configuration
- `config.thingId` - ID of the Thing to display properties from

**Special Behavior:**

- On Thing Type dashboards, `thingId` can be empty - the widget automatically displays properties for the currently viewed Thing
- All properties of the selected Thing are displayed automatically - no manual property selection needed

## Best Practices

1. **Thing Type Dashboards** - Ideal for Thing Type dashboards where it automatically adapts to any Thing
2. **Complete Property View** - Best used when you want to show all properties without filtering
3. **Widget Size** - Size widget appropriately to accommodate all properties with scrolling if needed
4. **Complementary Usage** - Combine with Property widget when you need both complete overview and specific property highlights
5. **Property Count** - Works well for Things with any number of properties (table scrolls as needed)
6. **Documentation** - Excellent for creating device documentation or info panels

---

## What's Next?

- [Property](/docs/widgets/property) - Display a single specific property
