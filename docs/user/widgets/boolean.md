---
title: Boolean
slug: /widgets/boolean
sidebar_position: 24
---

# Boolean Widget

## Overview

The Boolean widget displays boolean values with clear on/off or true/false indicators. It provides immediate visual feedback for binary states, making it perfect for switches, alarms, and digital inputs.

## Use Cases

- **Digital Inputs** - Display sensor on/off states
- **Alarm Status** - Show active/inactive alarms
- **Switch States** - Monitor switch positions
- **Binary Conditions** - Display true/false conditions
- **Mode Indicators** - Show enabled/disabled modes

## Key Features

- Clear binary state display
- Customizable on/off labels
- Color-coded indicators
- Icon support
- Real-time updates

## Configuration

### Basic Settings

| Field         | Required | Description                 |
| ------------- | -------- | --------------------------- |
| **Title**     | No       | Display name for the widget |
| **Asset**     | No       | Select Thing to monitor (optional, can display multiple measures from different Things) |
| **Measures**  | ✅ Yes   | Add measures to display. Each measure requires: measure ID |

### Display Options

| Field         | Required | Description                 |
| ------------- | -------- | --------------------------- |
| **Mode**      | No       | Choose 'stacked' (default) or 'carousel' display mode |
| **Orientation** | No     | Choose 'vertical' (default) or 'horizontal' layout |
| **True Label** | No      | Custom label for true state (supports multiple languages) |
| **False Label** | No     | Custom label for false state (supports multiple languages) |
| **True Color** | No      | Color for true state (default: #74c63e) |
| **False Color** | No     | Color for false state (default: #d4ced6) |
| **Transparent** | No     | Remove widget background |
| **Border Color** | No    | Custom border color |
| **Background Color** | No | Custom background color |

## Best Practices

1. **Clear Labels** - Use intuitive labels (On/Off, Yes/No, Active/Inactive)
2. **Color Standards** - Use consistent colors across dashboard
3. **Grouping** - Group related boolean widgets together
4. **Alarm Integration** - Use for critical binary alerts
5. **Size Consistency** - Maintain uniform widget sizes for visual alignment

---

## What's Next?

- [Status Widget](/docs/widgets/status) - For multi-state displays
- [State Widget](/docs/widgets/state) - For numeric values
