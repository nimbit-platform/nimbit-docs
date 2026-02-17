---
title: Counter
slug: /widgets/counter
---

# Counter Widget

## Overview

The Counter widget displays the total count of a platform resource type — Things, ThingTypes, Groups, or Users. It provides a prominent numerical display with an icon representing the selected resource, giving a quick overview of how many resources exist in the system.

## Use Cases

- **Fleet Size** - Show total number of connected Things
- **Type Overview** - Display how many ThingTypes are defined
- **Organization** - Count total Groups in the system
- **User Management** - Display total number of Users
- **Dashboard KPIs** - Provide high-level resource counts on overview dashboards

## Key Features

- Large number display with resource icon
- Select from four resource types (Thing, ThingType, Group, User)
- Responsive layout
- Real-time count updates

## Configuration

### Basic Settings

| Field        | Required | Description               |
| ------------ | -------- | ------------------------- |
| **Resource** | ✅ Yes   | Type of resource to count |

### Resource Types

The Counter widget can count different resource types:

| Resource Type | Description                      |
| ------------- | -------------------------------- |
| **Thing**     | Count total number of Things     |
| **ThingType** | Count total number of ThingTypes |
| **Group**     | Count total number of Groups     |
| **User**      | Count total number of Users      |

### Display Options

| Field                      | Required | Description              |
| -------------------------- | -------- | ------------------------ |
| **Transparent Background** | ❌ No    | Remove widget background |
| **Background Color**       | ❌ No    | Custom background color  |
| **Border color**           | ❌ No    | Custom border color      |

### Schema Details

**Widget Type:** `counter`

**Config Properties:**

- `id` (required) - Widget configuration identifier
- `resource` (required) - Resource type to count: `'Thing'` | `'ThingType'` | `'Group'` | `'User'`

**Optional Properties:**

- `transparent` - Enable transparent background
- `bgColor` - Background color
- `borderColor` - Border color

## Best Practices

1. **Clear Purpose** - Use descriptive widget titles to indicate what resource is being counted
2. **Multiple Counters** - Use several Counter widgets side-by-side for a resource overview dashboard
3. **Dashboard Context** - Place counters at the top of dashboards for quick KPI visibility
4. **Compact Numbers** - Enable compact formatting for large resource counts

---

## What's Next?

- [State Widget](/docs/widgets/state) - For current value display
