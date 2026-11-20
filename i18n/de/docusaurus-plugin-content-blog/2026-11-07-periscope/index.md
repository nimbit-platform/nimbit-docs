---
slug: periscope
title: "Periscope: von der Anlage nach IoT Breeze"
description: Periscope läuft neben Ihren Maschinen, erkennt OPC-UA-, Sparkplug-B-, MQTT-, S7-, Modbus- und HTTP-Quellen, schlägt die passenden Things vor und streamt ihre Werte.
authors: [nimbit]
tags: [periscope, gateways, edge]
category: "release"
visual: "graph"
visual_caption: "periscope · opc-ua"
doc_title: "Periscope installieren und die erste Quelle streamen"
doc_link: "/docs/gateways/periscope/install"
---

Periscope ist unser Edge-Agent. Er läuft auf einem Rechner neben Ihren Anlagen, liest Ihre Anlage, ohne in sie zu schreiben, schlägt die Thing-Typen und Things vor, die sie beschreiben, und streamt ihre Werte nach IoT Breeze.

<!-- truncate -->

## Warum ein Edge-Agent

Eine Maschine anzubinden heißt meist zweierlei: sie in der Plattform beschreiben und ihre Werte dorthin bringen. Von Hand dauert das Erste am längsten. Jede Variable wird ein Messwert, jede Maschine ein Thing, und jemand muss alles eintippen.

Periscope erledigt beides über eine Verbindung zu Ihrer Anlage. Er erkennt, was eine Quelle anbietet, macht daraus ein Modell, das Sie prüfen, und streamt dann die Werte in dieses Modell.

## Was er liest

Ein Periscope liest beliebige Kombinationen dieser Quellen. Jeder Eingang ist schreibgeschützt:

- [OPC-UA-Server](/docs/gateways/periscope/opc-ua)
- [Sparkplug B, MQTT und einen Unified Namespace](/docs/gateways/periscope/sparkplug-and-mqtt)
- [Siemens-S7-SPSen](/docs/gateways/periscope/s7)
- [Modbus-TCP- und -RTU-Geräte](/docs/gateways/periscope/modbus)
- [HTTP-APIs](/docs/gateways/periscope/http)

## Erkennen, bestätigen, streamen

1. **Erkennen.** Jeder Eingang liest seine Quelle, und Periscope schlägt einen Thing-Typ je Maschinenart, ein Thing je Maschine und einen Messwert je Variable vor, mit Einheiten und Bereichen, wo die Quelle sie kennt. Dieselbe Anlage ergibt immer dieselben Vorschläge.
2. **Bestätigen.** Sie prüfen die Vorschläge in der Weboberfläche von Periscope: umbenennen, zusammenführen, bestätigen. Angelegt wird erst, wenn Sie bestätigen. Oder Sie betreiben ihn im Zero-Touch-Modus, dann wird alles Vorgeschlagene sofort angewendet.
3. **Streamen.** Periscope legt die bestätigten Thing-Typen und Things in IoT Breeze an, ordnet jede Quelladresse ihrem Messwert zu und streamt die Werte. Unterwegs können Prozessoren sie umbenennen, skalieren, ausdünnen oder umrechnen.

Ändert sich die Anlage, schickt die nächste Erkennung die geänderten Einträge zurück zur Prüfung. Periscope benennt nie still etwas um und löscht nie still etwas.

## Ein Gateway, das Sie sehen

Verbinden Sie Periscope mit einem Onboarding-Code aus **Einstellungen › Onboarding › Gateways**, wird er in IoT Breeze zum Gateway: Er meldet sich mit einem eigenen Schlüssel an, darf nur seine eigenen Things anlegen und ändern und zeigt seinen Zustand und Datenverkehr auf der Gateway-Seite. Siehe [Wie Gateways funktionieren](/docs/gateways/how-gateways-work).

## Periscope bekommen

Periscope erhalten Sie über den NimBit-Support. Schreiben Sie an [info@nimbit.de](mailto:info@nimbit.de). Folgen Sie dann [Periscope installieren und die erste Quelle streamen](/docs/gateways/periscope/install).
