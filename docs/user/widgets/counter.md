---
title: Counter
slug: /widgets/counter
sidebar_position: 25
---

# Counter Widget

## Overview

The Counter widget shows numerical counters with increment/decrement capabilities. It's ideal for tracking accumulating values, event counts, or any metrics that change incrementally over time.

## Use Cases

- **Event Counting** - Track number of events or occurrences
- **Production Counting** - Monitor production quantities
- **Visit Counters** - Count entries or visits
- **Cycle Counters** - Track operational cycles
- **Accumulation Metrics** - Display cumulative values

## Key Features

- Large number display
- Increment/decrement tracking
- Total and running counters
- Reset capabilities
- Compact number formatting

## Configuration

### Basic Settings

| Field        | Required | Description                     |
| ------------ | -------- | ------------------------------- |
| **Resource** | ✅ Yes   | Type of resource to count       |

### Resource Types

The Counter widget can count different resource types:

| Resource Type | Description                    |
| ------------- | ------------------------------ |
| **Thing**     | Count total number of Things   |
| **ThingType** | Count total number of ThingTypes |
| **Group**     | Count total number of Groups   |
| **User**      | Count total number of Users    |

### Display Options

| Field                       | Required | Description                  |
| --------------------------- | -------- | ---------------------------- |
| **Transparent Background**  | ❌ No    | Remove widget background     |
| **Background Color**        | ❌ No    | Custom background color      |
| **Border Color**            | ❌ No    | Custom border color          |

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

1. **Clear Purpose** - Indicate what is being counted
2. **Reset Intervals** - Define when counters should reset (daily, monthly)
3. **Threshold Alerts** - Set alerts for count thresholds
4. **Multiple Counters** - Use multiple widgets for related counts
5. **Historical Tracking** - Maintain counter history for trend analysis

---

## What's Next?

- [State Widget](/docs/widgets/state) - For current value display
- [Table Widget](/docs/widgets/table) - For historical count data
