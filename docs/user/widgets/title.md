---
title: Title
slug: /widgets/title
sidebar_position: 56
---

# Title Widget

## Overview

The Title widget displays heading text to label and organize dashboard sections. Use it to create clear visual hierarchy and improve dashboard navigation and readability.

## Use Cases

- **Section Headers** - Label dashboard sections
- **Dashboard Titles** - Provide main dashboard headings
- **Category Labels** - Organize widget groups
- **Visual Hierarchy** - Structure dashboard content
- **Navigation Aids** - Help users find information

## Key Features

- Multiple heading levels (H1-H6)
- Text formatting options
- Alignment controls
- Icon support
- Custom styling
- Responsive sizing

## Configuration

The Title widget is a standalone widget that doesn't require measures or properties. It displays heading text to organize and label dashboard sections.

### Basic Settings

| Field              | Required | Description                        |
| ------------------ | -------- | ---------------------------------- |
| **Title**          | ✅ Yes   | The heading text to display        |
| **Font Size**      | ✅ Yes   | Text size in pixels                |
| **Font Weight**    | ✅ Yes   | `regular`, `medium`, or `bold`     |
| **Text Align**     | ✅ Yes   | `left`, `center`, or `right`       |
| **Vertical Align** | ✅ Yes   | `top`, `center`, or `bottom`       |
| **Transparent**    | ✅ Yes   | Boolean to set transparent background |

### Optional Settings

| Field           | Type                 | Description                  |
| --------------- | -------------------- | ---------------------------- |
| **Color**       | String (color value) | Custom text color            |
| **Translation** | Description object   | Multi-language translations  |

### Display Options

- **Transparent Background** - Set via the `transparent` property (boolean)
- **Background Color** - Set custom background color (via styles)
- **Border Color** - Set custom border color (via styles)

## Best Practices

1. **Heading Hierarchy** - Use appropriate heading levels
2. **Consistent Sizing** - Maintain size consistency per level
3. **Clear Labels** - Use descriptive, concise text
4. **Visual Balance** - Don't overwhelm with large headings
5. **Accessibility** - Follow heading level conventions

## Styling Recommendations

### Dashboard Main Title

- **Level**: H1
- **Alignment**: Center or left
- **Weight**: Bold

### Section Headers

- **Level**: H2 or H3
- **Alignment**: Left
- **Weight**: Bold

### Subsections

- **Level**: H4 or H5
- **Alignment**: Left
- **Weight**: Normal or bold

---

## What's Next?

- [Text Widget](/docs/widgets/text) - For body text and descriptions
- [Container Widget](/docs/widgets/container) - For grouping sections
