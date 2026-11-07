---
slug: dashboards-and-widgets
title: "Dashboards: pick a widget by the question it answers"
description: A new widget picker, dashboards that work for every thing of a kind, values colored by thresholds, and dashboards on Home.
authors: [nimbit]
tags: [dashboards, widgets]
---

Dashboards in IoT Breeze have a new widget picker, a new widget setup, more widgets, and dashboards you build once for every thing of a kind.

<!-- truncate -->

## Start from the question

**Add widget** now groups the widgets by the question they answer:

| Question | Widgets |
| --- | --- |
| What does it read right now? | Snapshot, Gauge, Fill level, Compare |
| Is it running, open, on? | Stat, Boolean, Property, Property List, Aggregated State |
| How did it change? | Chart, Timeline, Heatmap, Doughnut, Pivot table, Custom |
| What is it doing, and what can I do? | Status, Action, Canvas |
| What happened, and what fired? | Events, Incidents, Event statistics |

The setup shows a live preview while you configure the widget, and **Help** explains each setting. Every widget is described in the [widget gallery](/docs/visualize/widgets).

## Color a value by thresholds

Value widgets can color a value by thresholds. In the widget setup, set color zones for value ranges, and the value takes the color of the zone it is in.

## One dashboard for every thing of a kind

A Smart dashboard is built for interfaces, not for one thing. It works for every thing whose type implements them, including things you add later. Pick a thing at the top, and every widget follows it. A widget can also be pinned to one thing, for a fixed reference such as the outdoor temperature. See [Build one dashboard for every thing of a kind](/docs/visualize/smart-dashboard).

## Your dashboard on Home

A dashboard that needs no thing, such as tenant figures or pinned widgets, can go on Home: for everyone, or just for you. Tenant dashboards such as Getting started, Tenant health and Tenant metrics can be added from **Administration › Tenant Settings › Packs**. See [Put a dashboard on Home](/docs/visualize/home).

## Try it

The [quickstart](/docs/get-started/quickstart) builds a dashboard with a live chart in a few minutes, from a simulated device.
