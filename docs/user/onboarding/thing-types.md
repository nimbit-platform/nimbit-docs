---
title: ThingType
slug: /onboarding/thing-types
---

# ThingType

In the world of Industrial IoT, it's not enough to just connect machines — you need to understand them, manage them, and extract value from their data. That’s where **ThingTypes** come into play.

A **ThingType** is the digital blueprint — the structural and semantic definition — of a class of physical devices in your IotBreeze environment. Think of it as the **Digital Twin definition**: it bridges the gap between your real-world equipment (like pumps, meters, or sensors) and their digital representations in IotBreeze. Every "thing" (device) you onboard is instantiated from a ThingType, inheriting its defined **measures**, **properties**, and **behavioral metadata**.

This approach ensures consistency, reusability, and clear separation of concerns across your digital infrastructure. Whether you're managing hundreds of similar devices or building a complex automation pipeline, ThingTypes give you the foundation for scalable and insightful digital operations.

---

## Step 1: Navigate to Thing Types

In the sidebar, go to **Onboarding → Thing Types**.

![ThingType List](/screenshots/thing-types/list.png)

Click the **"Create"** button in the top-right corner to open the ThingType creation form.

---

## Step 2: Fill Out the Form

You’ll now see a form for defining your ThingType. Start by entering a unique **Name** (used internally) and a **Display Name** (used in the UI). Optionally, you can add a description, search tags, and select another ThingType to extend from.

![Filled ThingType Form](/screenshots/thing-types/create-filled.png)

| Field             | Required | Description |
|------------------|----------|-------------|
| **Name**         | ✅ Yes   | A unique system identifier (no spaces, no special characters except underscore, do not start with a number). |
| **Display Name** | ✅ Yes   | A readable label shown throughout the UI. |
| **Provider**     | ✅ Yes   | Default is Nimbit. Depending on your tenant's configuration you might have additional providers to choose from. |
| **Extends**      | ❌ No    | Inherit structure and capabilities from another ThingType. |
| **Description**  | ❌ No    | Additional context for this ThingType. |
| **Search Tags**  | ❌ No    | Keywords to support searching and filtering. |

---

## Step 3: Save the ThingType

Once you’ve filled in all the necessary fields, click the **"Save"** button in the bottom-right corner.

![ThingType Saved](/screenshots/thing-types/create.png)

After saving, your new ThingType appears in the list view:

![Updated List](/screenshots/thing-types/list-after-create.png)

---

## Step 4: Add Measures

Measures represent **dynamic data points**, typically sensor values or readings from the thing. You can define multiple measures per ThingType.

> ⚠️ Make sure the data types of your measures match the actual values sent by the devices. Incorrect types may lead to the data being unable to be used in dashboards or other unwanted behaviour!

### Add a Measure

1. Open your ThingType and go to the **Measures** tab.
2. If no measures exist yet, you'll see:

   ![Empty Measures](/screenshots/thing-types/measures-empty.png)

3. Click **"Add Measure"** and fill in the form. When everything is correct, hit save on the bottom-right corner:

   ![Create Measure](/screenshots/thing-types/measure-create.png)

| Field             | Required | Description |
|------------------|----------|-------------|
| **Name**         | ✅ Yes   | System name (unique key). Do not start with a number or underscore, No uppercase letters, No special characters except underscore |
| **Display Name** | ✅ Yes   | Shown in the UI. |
| **Type**         | ✅ Yes   | One of `numeric`, `string`, `boolean`. |
| **Description**  | ❌ No    | Context or usage info. |

---

### Type-Specific Fields

#### Numeric

- **Unit of Measure** – e.g., °C, %, kWh
- **Decimals** – Precision of values (e.g., 2 → 12.34)
- **Min/Max Value** – Valid range limits
- **Ignore Outliers** – If `true`, values outside min/max are dropped from storage
- **Offset** – Applied before storing
- **Factor** – Multiply incoming value (useful for conversions)

#### String

- **Unit of Measure** – Optional string label
- **Min Length / Max Length**

#### Boolean

- **Unit of Measure** – Optional label (e.g., ON/OFF)

## Step 5: Add Properties

Properties describe **static or metadata attributes** of a thing (e.g., serial number, device mode, or firmware version). Like measures, multiple properties can be defined per ThingType.

### Add a Property

1. Open the **Properties** tab.
2. If none exist:

   ![Empty Properties](/screenshots/thing-types/properties-empty.png)

3. Click **"Add Property"** and fill out the form:

   ![Create Property](/screenshots/thing-types/property-create.png)

| Field                  | Required | Description |
|------------------------|----------|-------------|
| **Name**               | ✅ Yes   | System name (unique key). Do not start with a number or underscore, No uppercase letters, No special characters except underscore |
| **Display Name**       | ✅ Yes   | UI label. |
| **Initial Value**      | ❌ No    | Default value assigned on thing creation. |
| **Description**        | ❌ No    | Additional context. |
| **Private**            | ❌ No    | If true, property is hidden in dashboards but still usable for filtering and logic. |
| **Timeseries Relevant**| ❌ No    | If true, this property is included in all timeseries messages. |
| **Has Precedence**     | ❌ No    | (Only shown when *Timeseries Relevant* is true) – UI value overwrites device-sent value if true. |

---

### Apply or Discard
ThingTypes have a **single shared draft**. That means all changes to **properties and measures** are part of the same draft. You can add as many properties and measures as needed, but they will **not be active** until you click **"Apply"**.

- **Apply**: Saves all draft changes to the ThingType and makes them visible to Things.
- **Discard**: Deletes all current draft changes. 

> ⚠️ New properties and measures will not be available in Things until the Draft is applied!

![Property Applied](/screenshots/thing-types/property-create-applied.png)

---

## What’s Next?

- [Create a Thing](../../things/create)

---
