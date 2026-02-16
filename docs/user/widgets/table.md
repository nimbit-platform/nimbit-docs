---
title: Table
slug: /widgets/table
sidebar_position: 11
---

# Table Widget

## Overview

The Table widget provides a standard tabular view for displaying data in rows and columns with sorting and filtering capabilities. It offers a straightforward way to view time-series data or multiple measurements in a structured format.

## Use Cases

- **Data Review** - View raw or processed sensor data
- **Historical Analysis** - Browse historical measurements
- **Multi-Measure Display** - Show multiple measurements side-by-side
- **Time-Series Tables** - Display data chronologically
- **Quick Reference** - Access specific data points quickly

## Key Features

- Row and column sorting
- Data filtering capabilities
- Time-based data display
- Multiple column support
- Export functionality (PDF, Excel, CSV)
- Pagination for large datasets

## Configuration

### Basic Settings

| Field         | Required | Description                           |
| ------------- | -------- | ------------------------------------- |
| **Title**     | ✅ Yes   | Display name for the widget           |
| **Assets**    | ✅ Yes   | Select Things to display data from    |
| **Telemetry** | ✅ Yes   | Choose measures to display as columns |

### Widget Schema (WidgetTableSchema)

The Table widget requires the following configuration:

| Field            | Required | Type                     | Description                                |
| ---------------- | -------- | ------------------------ | ------------------------------------------ |
| **type**         | ✅ Yes   | 'table'                  | Widget type identifier                     |
| **name**         | ✅ Yes   | string                   | Display name for the widget                |
| **window**       | ✅ Yes   | WidgetWindow             | Time window (can be absolute or relative)  |
| **useRaw**       | ✅ Yes   | boolean                  | Whether to use raw data or aggregated data |
| **tableConfig**  | ✅ Yes   | any                      | Table configuration settings (columns, sorting, pagination, etc.) |
| **config**       | ✅ Yes   | Array of measure configs | Array of telemetry measures to display     |
| **gapFill**      | No       | GapFill                  | Handle missing data (NONE, TIME, LOCF)     |

Each measure in the configuration requires:
- **id** - Unique identifier
- **measure** - Telemetry measure name
- **thingId** - Associated Thing ID (optional if using ThingType dashboard)
- **aggregation** - Aggregation method (AVG, SUM, MIN, MAX, COUNT)
- **alias** - Display name for the measure column
- **dataType** - Data type of the characteristic

### Data Settings

- **Time Window** - Configure absolute or relative time range for data retrieval
- **Use Raw Data** - Toggle between raw time-series data and aggregated values
- **Aggregation** - Select aggregation method when not using raw data (AVG, SUM, MIN, MAX, COUNT)
- **Gap Fill** - Choose how to handle missing values (NONE, TIME, LOCF)

### Display Options

- **Show Toolbar** - Display widget action toolbar
- **Transparent Background** - Remove widget background
- **Override Dashboard Settings** - Use widget-specific time settings instead of dashboard defaults

## Best Practices

1. **Column Selection** - Include only necessary columns for clarity
2. **Time Range** - Use appropriate time windows to avoid overwhelming data
3. **Sorting** - Set default sorting to show most relevant data first
4. **Export Regular** -ly - Use export for offline analysis
5. **Pagination** - Enable for datasets with many rows

---

## What's Next?

- [Pivot Table Widget](/docs/widgets/pivot-table) - For multi-dimensional analysis
- [Property State Table](/docs/widgets/property-state-table) - For property displays
