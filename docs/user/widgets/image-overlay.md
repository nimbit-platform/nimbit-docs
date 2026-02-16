---
title: Image Overlay
slug: /widgets/image-overlay
sidebar_position: 53
---

# Image Overlay Widget

## Overview

The Image Overlay widget displays interactive overlays on images with clickable hotspots, data points, and real-time status indicators. It's perfect for facility layouts, equipment diagrams, and infrastructure monitoring.

## Use Cases

- **Facility Monitoring** - Show sensor locations on floor plans
- **Equipment Status** - Display component states on equipment diagrams
- **Infrastructure Mapping** - Monitor distributed systems on maps
- **Process Visualization** - Overlay data on process diagrams
- **Interactive Schematics** - Create clickable technical diagrams

## Key Features

- Interactive hotspots
- Real-time data overlays
- Click actions on overlay elements
- Status color coding
- Multiple overlay layers
- Dynamic positioning

## Configuration

### Basic Settings

| Field        | Required | Description                                      |
| ------------ | -------- | ------------------------------------------------ |
| **Name**     | No       | Display name for the widget                      |
| **File Type** | Yes     | Image source: 'ocb' (uploaded) or 'external' (URL) |
| **Zoom**     | Yes      | Zoom level for the image (10-20)                 |

### Image Source

| Field        | Required | Description                              | Condition           |
| ------------ | -------- | ---------------------------------------- | ------------------- |
| **File ID**  | No       | ID of uploaded file                      | When fileType='ocb' |
| **URL**      | No       | External image URL                       | When fileType='external' |
| **File Data** | No      | Uploaded file data                       | For new uploads     |

### Overlay Measures

Each measure overlay requires:

| Field         | Required | Description                                      |
| ------------- | -------- | ------------------------------------------------ |
| **Measure**   | Yes      | Measure name to display                          |
| **Thing ID**  | Yes      | Associated Thing ID                              |
| **Color**     | Yes      | Color for the overlay marker                     |
| **Size**      | Yes      | Size of the overlay marker (60-110)              |
| **Position**  | Yes      | X/Y coordinates for marker placement on image    |

## Best Practices

1. **Clear Hotspots** - Make interactive areas obvious
2. **Color Consistency** - Use consistent status colors
3. **Image Resolution** - Use high-quality background images
4. **Tooltip Information** - Provide helpful hover information
5. **Mobile Optimization** - Test on different screen sizes

## Advanced Features

- **Multi-Layer Overlays** - Stack multiple data layers
- **Conditional Display** - Show/hide based on conditions
- **Real-Time Updates** - Update overlay data live
- **Custom Icons** - Use custom overlay markers

---

## What's Next?

- [Image Widget](/docs/widgets/image) - For simple image display
- [Map Widget](/docs/widgets/map) - For geographic mapping
- [Canvas Widget](/docs/widgets/canvas) - For custom drawings
