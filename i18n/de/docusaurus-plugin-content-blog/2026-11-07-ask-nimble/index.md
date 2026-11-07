---
slug: ask-nimble
title: "Ask Nimble: Fragen zu Ihrer Anlage, beantwortet mit Quellen"
description: Bilden Sie Ihre Standorte ab, binden Sie externe Quellen und Dokumente an und fragen Sie IoT Breeze in einfachen Worten nach Ihrer Anlage. Jede Antwort zeigt, woher sie kommt.
authors: [nimbit]
tags: [knowledge, ai, ask-nimble]
---

Ask Nimble beantwortet Fragen zu Ihrer Anlage in einfachen Worten: was in einer Halle steht, welche Pumpen offline sind, wie eine Maschine letzte Woche lief, was im Handbuch steht. Jede Antwort zeigt ihre Quellen.

<!-- truncate -->

## Fragen

Drücken Sie auf jeder Seite Strg+I (⌘+I auf dem Mac) und tippen Sie eine Frage:

- „Was steht in Halle 2?“
- „Welche Things sind offline?“
- „Wie lief Pumpe 7 in den letzten 7 Tagen?“
- „Warum ist Pumpe 7 offline?“
- „Was sagt das Handbuch zum Dichtungsintervall?“

Nimble zeigt die Schritte, die es beim Antworten geht, und listet unter der Antwort die Datensätze, Messwerte und Dokumente, die es verwendet hat. Auf jedem Datensatz in der App fragt **Dazu fragen** nach genau diesem Datensatz. Siehe [Eine Frage zu Ihren Daten stellen](/docs/knowledge/ask).

## Was Nimble weiß

Nimble antwortet aus dem Knowledge Graph, Ihren Live-Messwerten und Ihren Dokumenten. Es findet nur, was der Graph enthält. Die Antworten werden also besser, je mehr Sie ergänzen:

- **Orte.** [Standorte und Gebäude abbilden](/docs/knowledge/map-sites): Standorte, Hallen und Linien, mit Ihren Things darin.
- **Externe Daten.** [Eine externe Datenquelle anbinden](/docs/knowledge/outside-source), etwa Wartungsaufträge aus einem ERP, und mit Ihren Things verknüpfen.
- **Dokumente.** Hängen Sie Handbücher und Zeichnungen an einen Ort oder einen Datensatz.

Jeder sieht nur die Datensätze, die er öffnen darf, in Erkunden wie in Nimbles Antworten.

## Einschalten

Knowledge und Ask Nimble werden pro Tenant eingeschaltet: Ein Tenant-Admin schaltet **Nimble fragen und Knowledge** unter **Administration › Mandanteneinstellungen › Funktionen** ein. Was dafür nötig ist, steht unter [Knowledge und KI](/docs/knowledge), was Nimble liest und wo es aufhört, unter [Wie Ask Nimble antwortet](/docs/knowledge/ask-nimble-answers).
