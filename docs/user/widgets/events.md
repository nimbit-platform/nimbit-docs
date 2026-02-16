---
title: Events
slug: /widgets/events
sidebar_position: 50
---

# Events Widget

## Overview

The Events widget displays and manages events from your Things with timestamps and details. It provides a centralized view of system events, alerts, state changes, and other significant occurrences for monitoring and troubleshooting.

## Use Cases

- **Event Monitoring** - Track system events in real-time
- **Alert Management** - View and manage active alerts
- **Audit Trail** - Review historical event logs
- **Troubleshooting** - Investigate issues through event history
- **State Changes** - Monitor when device states change

## Key Features

- Chronological event listing
- Event filtering and searching
- Event type categorization
- Timestamp display
- Event details and descriptions
- Export capabilities

## Configuration

### Basic Settings

| Field           | Required | Description                          |
| --------------- | -------- | ------------------------------------ |
| **Name**        | ❌ No    | Display name for the widget          |
| **Event Types** | ✅ Yes   | Filter specific event types to show  |

### Display Options

| Field                       | Required | Description                  |
| --------------------------- | -------- | ---------------------------- |
| **Transparent Background**  | ❌ No    | Remove widget background     |
| **Background Color**        | ❌ No    | Custom background color      |
| **Border Color**            | ❌ No    | Custom border color          |

### Schema Details

**Widget Type:** `events`

**Config Properties:**
- `id` (required) - Widget configuration identifier
- `eventTypes` (required) - Array of event type IDs to display

**Optional Properties:**
- `name` - Widget display name
- `transparent` - Enable transparent background
- `bgColor` - Background color
- `borderColor` - Border color

### Event Type Filtering

The widget automatically filters system events based on dashboard type:
- **General Dashboards** - Shows all event types including system events
- **Thing/ThingType Dashboards** - Excludes system-initiated events (`initiator!=SYSTEM`)

## Best Practices

1. **Event Filtering** - Filter to relevant event types
2. **Time Windows** - Use appropriate time ranges
3. **Regular Review** - Review events regularly for patterns
4. **Alert Response** - Establish procedures for critical events
5. **Event Archiving** - Archive old events for performance

---

## What's Next?

- [Timeline Widget](/docs/widgets/timeline) - For chronological visualization
- [Action Widget](/docs/widgets/action) - For executing actions
