---
title: Tenant Settings
slug: /tenant-configuration/overview
---

# Tenant Settings

Manage your tenant's appearance, technical configurations, and system statistics. The settings are split into three main tabs: **General**, **SMTP Settings**, and **Statistics**.

---

## General

The **General** tab is divided into three sections: **General**, **Images**, and **Theme Settings**. You can save your changes or reset all tenant settings to their defaults using the buttons in the top-right corner.

![General Settings Tabs](/screenshots/tenant/general1.png)

---

### General

This section provides basic information and editable configuration fields:

| Field           | Editable | Description |
|-----------------|----------|-------------|
| **Name**        | ❌ No    | System-generated tenant name (uneditable). |
| **ID**          | ❌ No    | Unique identifier for the tenant (uneditable). |
| **Custom Name** | ✅ Yes   | A custom label that appears in the UI. |
| **Timezone**    | ✅ Yes   | Select the default timezone for your tenant. |
| **Language**    | ✅ Yes   | Choose the language for your environment. |

---

### Images

You can upload brand-specific visuals to personalize your tenant's UI:

![Image Upload Section](/screenshots/tenant/general2.png)

- **Favicon** – Small icon shown in the browser tab.
- **Logo** – Displayed in the header and login screen.
- **Cover Image** – Used as a background on the login screen.

All uploaded images will be reset when the tenant settings are restored to default.

---

### Theme Settings

Customize your tenant’s design to reflect your brand identity:

- **Dark Mode Toggle** – Switch between light (default) and dark appearance.
- **Primary Color + Shades** – Control the main color theme across the UI.
- **Secondary Color + Shades** – Apply secondary accents throughout the interface.

This allows deep customization of the entire interface.

---

## SMTP Settings

Configure outgoing email settings for your tenant. If not yet active, you must **enable SMTP** before configuration.

![Initial SMTP Disabled State](/screenshots/tenant/smtp1.png)

Once enabled, enter the SMTP configuration details:

![SMTP Configuration Fields](/screenshots/tenant/smtp2.png)

| Field        | Required | Description |
|--------------|----------|-------------|
| **SMTP Host**| ✅ Yes   | The mail server hostname (e.g., `smtp.example.com`). |
| **Port**     | ✅ Yes   | Port for communication (`25`, `465`, or `587`). |
| **From**     | ✅ Yes   | Default sender address used in all emails. |
| **Username** | ✅ Yes   | SMTP username. |
| **Password** | ✅ Yes   | SMTP password. |
| **Secure**   | ✅ Yes   | Choose between `Yes`, `No`, or `Depends`. Affects TLS usage. Note: "Secure" refers to protocol encryption, not whether data is protected overall. |

After saving your configuration, use the **Test Email** function to validate the connection and credentials.

> 🛠️ **Important**: The test button becomes active only **after saving** your configuration.

### Save or Reset

- **Save**: Applies all changes across tabs.
- **Reset to Default**: Resets **all tenant settings**, including SMTP config, uploaded images, and theme preferences.

---

## Statistics

The **Statistics** tab shows your tenant’s data usage and growth over time.

![Statistics Overview](/screenshots/tenant/statistics.png)

### Current Overview

- **Row Count** – The total number of stored records.
- **Storage Usage** – Amount of database space used.

### Last 30 Days Table

A tabular history shows daily values for:

- Number of records (rows)
- Storage size in megabytes

> 📉 **Tip**: You may see **storage decrease** while **row count increases**. This is due to our **automatic database compression**, which reduces size without deleting any data.

---

## What’s Next?

- [Manage Users](/docs/user-management/users)
- [Configure Groups](/docs/user-management/groups)
