---
title: Image
slug: /widgets/image
sidebar_position: 52
---

# Image Widget

## Overview

The Image widget displays static or dynamic images in your dashboard, supporting various image sources including URLs, Thing attributes, and uploaded files. Use it to show product images, diagrams, logos, or visual references.

## Use Cases

- **Visual References** - Display blueprints, diagrams, or schematics
- **Product Display** - Show product images or thumbnails
- **Branding** - Add logos and corporate imagery
- **Documentation** - Include visual guides or instructions
- **Static Content** - Display any relevant imagery

## Key Features

- Multiple image sources
- Dynamic image loading from Things
- Image scaling and positioning
- Link support (clickable images)
- Image caching
- Fallback image support

## Configuration

The Image widget is a standalone widget that doesn't require measures or properties. It displays static images from uploaded files or external URLs.

### Basic Settings

| Field          | Required | Description                                      |
| -------------- | -------- | ------------------------------------------------ |
| **Type**       | ✅ Yes   | Image type: `image` or `3d`                      |
| **Object Fit** | ✅ Yes   | How the image fits: `contain` or `cover`         |
| **File Type**  | ✅ Yes   | Source type: `ocb` (uploaded) or `external` (URL)|

### Image Source Options

Choose one of the following:

**OCB File (Uploaded)**
- **File Type**: Set to `ocb`
- **File ID**: ID of the uploaded file in the system

**External URL**
- **File Type**: Set to `external`
- **URL**: Direct URL to the image file

### Display Settings

| Field          | Description                                      |
| -------------- | ------------------------------------------------ |
| **Object Fit** | `contain` - Fit image within bounds, preserve aspect ratio |
|                | `cover` - Fill entire area, may crop image       |

### Display Options

- **Transparent Background** - Remove widget background using the `transparent` style property
- **Background Color** - Set custom background color
- **Border Color** - Set custom border color

## Best Practices

1. **Image Optimization** - Use appropriately sized images
2. **Alt Text** - Always provide accessibility descriptions
3. **Fallback Images** - Configure fallback for failed loads
4. **Image Format** - Use web-optimized formats (WebP, PNG, JPG)
5. **Loading Performance** - Consider image caching strategies

---

## What's Next?

- [Image Overlay Widget](/docs/widgets/image-overlay) - For interactive image overlays
- [Canvas Widget](/docs/widgets/canvas) - For custom graphics
