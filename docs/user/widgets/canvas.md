---
title: Canvas
slug: /widgets/canvas
sidebar_position: 54
---

# Canvas Widget

## Overview

The Canvas widget displays a visual canvas that can be used to create custom diagrams, flowcharts, or visual representations of your IoT infrastructure. It references a Canvas object that contains the visual elements and layout.

## Use Cases

- **Custom Diagrams** - Draw process flows or system diagrams
- **Annotations** - Add notes and highlights to dashboards
- **Visual Design** - Create custom graphics
- **Planning Sketches** - Rough out ideas visually
- **Explanatory Graphics** - Illustrate concepts

## Key Features

- Display custom canvas layouts
- Reference Canvas objects by ID
- Interactive canvas editor integration
- Thing Type association
- Customizable background and border
- Grid background for alignment

## Configuration

The Canvas widget requires a reference to an existing Canvas object. The canvas must be created separately and associated with a Thing Type.

### Basic Settings

| Field        | Required | Description                                    |
| ------------ | -------- | ---------------------------------------------- |
| **Canvas**   | ✅ Yes   | Select a Canvas object to display              |

The Canvas selector shows canvases that match the dashboard's Thing Type and have type `ThingType`.

### Display Options

| Field                | Type    | Description                              |
| -------------------- | ------- | ---------------------------------------- |
| **Transparent**      | Boolean | Remove background (default: false)       |
| **Background Color** | String  | Custom background color                  |
| **Border Color**     | String  | Custom border color                      |

### Canvas Configuration

The referenced Canvas object contains:

- **Canvas ID** - Unique identifier for the canvas
- **Name** - Display name of the canvas
- **Thing Type ID** - Associated Thing Type
- **Type** - Dashboard type (typically `ThingType`)
- **Visual Elements** - Canvas content (shapes, text, connections)

## Best Practices

1. **Canvas Creation** - Create and configure canvases before adding the widget
2. **Thing Type Matching** - Ensure canvas Thing Type matches the dashboard
3. **Visual Clarity** - Design clear, understandable canvas layouts
4. **Performance** - Keep canvas complexity reasonable for dashboard performance
5. **Background Styling** - Use the lines background for visual guidance

## Canvas Features

### Visual Canvas Editor

The widget integrates with the Canvas Editor component, providing:

- **Interactive Elements** - Clickable and interactive visual elements
- **Thing Integration** - Link canvas elements to Thing data
- **Real-time Updates** - Canvas reflects current Thing states
- **Lines Background** - Grid lines for visual reference (shown when dashboard is unlocked)

### Canvas Display

The canvas is displayed with:

- **Responsive Sizing** - Adapts to widget dimensions
- **Locked/Unlocked Modes** - Different behaviors based on dashboard lock state
- **Query Link Actions** - Navigation to detailed Thing views

## Use Case Examples

### Infrastructure Diagram

Create a visual representation of your IoT infrastructure:

- Network topology showing device connections
- Physical layout of sensors and actuators
- Data flow between components

### Process Visualization

Visualize operational processes:

- Manufacturing process steps
- Data pipeline flows
- System state machines

### Monitoring Layout

Build custom monitoring displays:

- Equipment status visualization
- Facility maps with sensor locations
- Custom dashboard overlays

---

## What's Next?

- [Image Overlay Widget](/docs/widgets/image-overlay) - For interactive overlays
- [Container Widget](/docs/widgets/container) - For organizing dashboard layouts
