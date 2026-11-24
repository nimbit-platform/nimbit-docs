---
slug: periscope
title: "Periscope: from the plant floor to IoT Breeze"
description: Periscope runs next to your machines, discovers OPC UA, Sparkplug B, MQTT, S7, Modbus and HTTP sources, proposes the things that describe them and streams their values.
authors: [nimbit]
tags: [periscope, gateways, edge]
category: "release"
visual: "graph"
visual_caption: "periscope · opc-ua"
doc_title: "Install Periscope and stream your first source"
doc_link: "/docs/gateways/periscope/install"
---

Periscope is our edge agent. It runs on a machine next to your equipment, reads your plant without writing to it, proposes the thing types and things that describe it, and streams their values to IoT Breeze.

<!-- truncate -->

## Why an edge agent

Connecting a machine usually means two jobs: describing it in the platform and getting its values there. Done by hand, the first job takes longest. Every variable becomes a measure, every machine a thing, and someone has to type them all.

Periscope does both jobs over one connection to your plant. It discovers what a source offers, turns that into a model you review, and then streams the values into that model.

## What it reads

One Periscope reads any mix of these sources. Each input is read-only:

- [OPC UA servers](/docs/gateways/periscope/opc-ua)
- [Sparkplug B, MQTT and a unified namespace](/docs/gateways/periscope/sparkplug-and-mqtt)
- [Siemens S7 PLCs](/docs/gateways/periscope/s7)
- [Modbus TCP and RTU devices](/docs/gateways/periscope/modbus)
- [HTTP APIs](/docs/gateways/periscope/http)

## Discover, confirm, stream

1. **Discover.** Each input reads its source and Periscope proposes one thing type per kind of machine, one thing per machine and one measure per variable, with units and ranges where the source has them. The same plant always produces the same proposals.
2. **Confirm.** You review the proposals in Periscope's web UI: rename, merge, and confirm. Nothing is created until you do. Or run it zero-touch, and everything proposed is applied at once.
3. **Stream.** Periscope creates the confirmed thing types and things in IoT Breeze, maps each source address to its measure, and streams the values. On the way, processors can rename, scale, thin out or convert them.

When the plant changes, the next discovery sends the changed items back for review. Periscope never renames or deletes anything silently.

## A gateway you can see

Onboard Periscope with an onboarding code from **Devices › Gateways** and it becomes a gateway in IoT Breeze: it signs in with its own key, may create and update only its own things, and shows its health and traffic on the gateway page. See [How gateways work](/docs/gateways/how-gateways-work).

## Get Periscope

Periscope is available through NimBit support. Write to [info@nimbit.de](mailto:info@nimbit.de). Then follow [Install Periscope and stream your first source](/docs/gateways/periscope/install).
