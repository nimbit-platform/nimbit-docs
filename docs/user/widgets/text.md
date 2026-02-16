---
title: Text
slug: /widgets/text
sidebar_position: 57
---

# Text Widget

## Overview

The Text widget displays formatted text content including descriptions, instructions, notes, and documentation directly in your dashboard. It supports rich text formatting and markdown.

## Use Cases

- **Instructions** - Provide usage instructions
- **Documentation** - Add inline documentation
- **Descriptions** - Describe dashboard purpose or content
- **Notes** - Add important notes or reminders
- **Explanations** - Explain data or widgets

## Key Features

- Rich text formatting
- Markdown support
- HTML rendering
- Dynamic content from Things
- Text styling options
- Links and references

## Configuration

The Text widget is a standalone widget that doesn't require measures or properties. It displays static or dynamic text content.

### Basic Settings

| Field            | Required | Description                            |
| ---------------- | -------- | -------------------------------------- |
| **Content**      | ✅ Yes   | Rich text content in JSON format       |
| **HTML Content** | ✅ Yes   | HTML representation of the content     |
| **Title**        | ❌ No    | Optional display name for the widget   |

### Formatting Options

| Field            | Type                             | Description                  |
| ---------------- | -------------------------------- | ---------------------------- |
| **Font Size**    | Number                           | Text size in pixels          |
| **Font Weight**  | `regular`, `medium`, or `bold`   | Text weight                  |
| **Text Align**   | `left`, `center`, or `right`     | Text alignment               |
| **Color**        | String (color value)             | Custom text color            |

### Display Options

- **Transparent Background** - Remove widget background using the `transparent` style property
- **Background Color** - Set custom background color
- **Border Color** - Set custom border color

## Best Practices

1. **Clear Writing** - Use concise, clear language
2. **Formatting** - Apply formatting for readability
3. **Link Usage** - Link to relevant documentation
4. **Content Length** - Keep text appropriately sized
5. **Mobile Friendly** - Test text display on mobile

## Content Types

### Plain Text

- Simple unformatted text
- Quick notes and labels
- Best for short content

### Markdown

- Formatted text with markdown syntax
- Headers, lists, emphasis
- Code blocks and quotes
- Best for documentation

### HTML

- Full HTML rendering
- Custom styling
- Embedded content
- Best for advanced formatting

## Example Content

### Dashboard Instructions

```markdown
## How to Use This Dashboard

1. Select a device from the dropdown
2. View real-time metrics in the gauges
3. Check event history in the timeline
4. Use action buttons for control
```

### Alert Notice

```markdown
⚠️ **Important**: This dashboard monitors critical
infrastructure. Contact support immediately if alerts appear.
```

---

## What's Next?

- [Title Widget](/docs/widgets/title) - For headings
- [Container Widget](/docs/widgets/container) - For organizing content
