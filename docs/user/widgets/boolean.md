---
title: Boolean
slug: /widgets/boolean
---

# Boolean Widget

![Boolean Widget](/screenshots/widgets/widget-boolean-preview.png)

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

![Boolean Widget Configuration Form](/screenshots/widgets/widget-boolean-form.png)

### Basic Settings

| Field        | Required | Description                                                                             |
| ------------ | -------- | --------------------------------------------------------------------------------------- |
| **Title**    | ❌ No    | Display name for the widget                                                             |
| **Thing**    | ❌ No    | Select Thing to monitor (optional, can display multiple measures from different Things) |
| **Measures** | ✅ Yes   | Add measures to display. Each measure requires: measure ID                              |

### Display Options

| Field                | Required | Description                                                |
| -------------------- | -------- | ---------------------------------------------------------- |
| **Carousel mode**    | ❌ No    | Toggle between stacked (default) and carousel display mode |
| **Orientation**      | ❌ No    | Choose 'vertical' (default) or 'horizontal' layout         |
| **True**             | ❌ No    | Custom label for true state (supports multiple languages)  |
| **False**            | ❌ No    | Custom label for false state (supports multiple languages) |
| **Color when true**  | ❌ No    | Color for true state (default: #74c63e)                    |
| **Color when false** | ❌ No    | Color for false state (default: #d4ced6)                   |
| **Transparent**      | ❌ No    | Remove widget background                                   |
| **Border color**     | ❌ No    | Custom border color                                        |
| **Background Color** | ❌ No    | Custom background color                                    |

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
