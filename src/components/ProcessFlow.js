import React from "react";
import styles from "./ProcessFlow.module.css";

const steps = [
  {
    title: "Home",
    items: [
      { text: "Übersicht", link: "/docs/user/home" },
    ],
  },
  {
    title: "Onboarding",
    items: [
      { text: "Einführung in die Plattform", link: "/docs/user/onboarding/introduction" },
      { text: "Thing-Typen verstehen", link: "/docs/user/onboarding/thing-typen" },
      { text: "Erstellen eines Things", link: "/docs/user/onboarding/thing" },
    ],
  },
  {
    title: "Monitoring",
    items: [
      { text: "Übersicht der Systemüberwachung", link: "/docs/user/monitoring" },
      { text: "Thing-Details anzeigen", link: "/docs/user/monitoring/thing-page" },
      { text: "Telemetrie-Daten analysieren", link: "/docs/user/monitoring/telemetry-explorer" },
    ],
  },
  {
    title: "Dashboards",
    items: [
      { text: "Individuelle Dashboards erstellen", link: "/docs/user/dashboards/overview" },
    ],
  },
  {
    title: "Verwaltung",
    items: [
      { text: "Benutzerverwaltung", link: "/docs/user/verwaltung/benutzer" },
      { text: "Gruppenmanagement", link: "/docs/user/verwaltung/gruppen" },
    ],
  },
  {
    title: "Automatisierung",
    items: [
      { text: "Regel-Designer nutzen", link: "/docs/user/automatisierung/rule-designer" },
      { text: "Workflows für Events erstellen", link: "/docs/user/automatisierung/workflows" },
    ],
  },
  {
    title: "ETL Pipeline",
    items: [
      { text: "Übersicht der Datenpipelines", link: "/docs/user/etl-pipeline/overview" },
      { text: "ETL-Prozesse konfigurieren", link: "/docs/user/etl-pipeline/config" },
    ],
  },
  {
    title: "Tenant-Einstellungen",
    items: [
      { text: "White Label Konfiguration", link: "/docs/user/tenant-einstellungen/overview" },
      { text: "Branding und Anpassungen", link: "/docs/user/tenant-einstellungen/branding" },
    ],
  },
  {
    title: "Dateien",
    items: [
      { text: "Dokumentenverwaltung", link: "/docs/user/dateien/overview" },
      { text: "Dateiuploads & Zugriffsrechte", link: "/docs/user/dateien/permissions" },
    ],
  },
  {
    title: "Konfig-Verwalten",
    items: [
      { text: "Event Types konfigurieren", link: "/docs/user/konfig-verwalten/event-types" },
      { text: "Events verwalten", link: "/docs/user/konfig-verwalten/events" },
    ],
  },
  {
    title: "Reporting",
    items: [
      { text: "Berichte erstellen & exportieren", link: "/docs/user/reporting/overview" },
      { text: "Datenanalyse durchführen", link: "/docs/user/reporting/analytics" },
    ],
  },
];

export default function ProcessFlow() {
  return (
    <div className={styles.container}>
      <div className={styles.processHeader}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <h3>{step.title}</h3>
          </div>
        ))}
      </div>

      <div className={styles.processGrid}>
        {steps.map((step, index) => (
          <div key={index} className={styles.column}>
            {step.items.map((item, idx) => (
              <a key={idx} href={item.link} className={styles.item} title={item.tooltip || item.text}>
                {item.text}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <a href="/docs/user/glossar" className={styles.footerItem}>Glossar für Identitäts- und Zugriffsverwaltung</a>
        <a href="/docs/user/faq" className={styles.footerItem}>Häufig gestellte Fragen</a>
      </div>
    </div>
  );
}
