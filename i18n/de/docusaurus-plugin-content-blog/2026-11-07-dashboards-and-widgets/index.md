---
slug: dashboards-and-widgets
title: "Dashboards: Widgets nach der Frage wählen, die sie beantworten"
description: Eine neue Widget-Auswahl, Dashboards für alle Things einer Art, Werte mit Farbzonen und Dashboards auf Home.
authors: [nimbit]
tags: [dashboards, widgets]
category: "release"
visual: "chart"
visual_caption: "room-sensor · temperature"
doc_title: "Widget-Galerie"
doc_link: "/docs/visualize/widgets"
---

Dashboards in IoT Breeze haben eine neue Widget-Auswahl, eine neue Widget-Einrichtung, mehr Widgets und Dashboards, die Sie einmal für alle Things einer Art bauen.

<!-- truncate -->

## Bei der Frage anfangen

**Widget hinzufügen** gruppiert die Widgets jetzt nach der Frage, die sie beantworten:

| Frage | Widgets |
| --- | --- |
| Was liest es gerade? | Momentaufnahme, Gauge, Füllstand, Vergleichen |
| Läuft es, ist es offen, an? | Messwert, Boolean, Eigenschaft, Liste der Eigenschaften, Aggregierter Zustand |
| Wie hat es sich verändert? | Diagramm, Zeitachse, Heatmap, Donut, Pivot-Tabelle, Benutzerdefiniert |
| Was tut es, und was kann ich tun? | Status, Aktion, Canvas |
| Was ist passiert, und was hat ausgelöst? | Events, Vorfälle, Event-Statistiken |

Die Einrichtung zeigt eine Live-Vorschau, während Sie das Widget einstellen, und **Hilfe** erklärt jede Einstellung. Jedes Widget ist in der [Widget-Galerie](/docs/visualize/widgets) beschrieben.

## Werte nach Schwellwerten einfärben

Wert-Widgets können einen Wert nach Schwellwerten einfärben. Legen Sie in der Widget-Einrichtung Farbzonen für Wertebereiche fest, und der Wert nimmt die Farbe der Zone an, in der er liegt.

## Ein Dashboard für alle Things einer Art

Ein Smart-Dashboard bauen Sie für Interfaces, nicht für ein einzelnes Thing. Es funktioniert für jedes Thing, dessen Typ sie implementiert, auch für Things, die Sie später anlegen. Wählen Sie oben ein Thing, und jedes Widget folgt. Ein Widget lässt sich auch an ein Thing anheften, für einen festen Bezug wie die Außentemperatur. Siehe [Ein Dashboard für alle Things einer Art bauen](/docs/visualize/smart-dashboard).

## Ihr Dashboard auf Home

Ein Dashboard, das kein Thing braucht, etwa mit Tenant-Kennzahlen oder angehefteten Widgets, kann auf Home: für alle oder nur für Sie. Tenant-Dashboards wie Getting started, Tenant health und Tenant metrics fügen Sie unter **Administration › Mandanteneinstellungen › Pakete** hinzu. Siehe [Ein Dashboard auf Home zeigen](/docs/visualize/home).

## Ausprobieren

Der [Quickstart](/docs/get-started/quickstart) baut in wenigen Minuten ein Dashboard mit einem Live-Diagramm, aus einem simulierten Gerät.
