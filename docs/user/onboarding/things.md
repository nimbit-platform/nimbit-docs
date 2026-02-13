---
title: Things
slug: /onboarding/things
---

# Things

## Overview

In the Industrial IoT landscape, connecting and managing your devices efficiently is essential. Each device, or **Thing**, is an individual instance based on a predefined **ThingType**. A Thing inherits specific measures, properties, and behaviors from its ThingType, ensuring consistency and scalability throughout your IoT environment.

This documentation covers how you can create, manage, and effectively organize your Things within IotBreeze.

## Create a Thing

Follow these steps to create a new Thing within your IotBreeze dashboard:

### Navigating to Things

In the sidebar, select **Onboarding → Things**.

![Things List](/screenshots/things/list.png)

Click the **"Create"** button in the top-right corner to open the Thing creation page.

### Thing Creation Form

This form allows you to define the basic details and associations of your Thing:

![Filled Thing Form](/screenshots/things/create-filled.png)

| Field                 | Required | Description |
|-----------------------|----------|-------------|
| **Name**              | ✅ Yes   | Unique identifier used throughout the system (no spaces, special characters except underscore, and must not start with a number). |
| **Thing Alternate Id**| ✅ Yes   | A secondary unique identifier (often device serial or external ID). |
| **Description**       | ❌ No    | Additional context or details about the Thing. |
| **Thing Type**        | ✅ Yes   | Select the appropriate ThingType to inherit measures, properties, and metadata. |
| **Provider**          | ✅ Yes   | Automatically prefilled based on the chosen ThingType. |
| **Parent**            | ❌ No    | Select an optional parent Thing to establish hierarchical relationships. |
| **Organization**      | ✅ Yes   | Special group representing your organization for administrative control. |
| **Group**             | ✅ Yes   | One or more groups used to manage user access and visibility. |
| **Search Tags**       | ❌ No    | Keywords to facilitate easy searching and filtering. |

After completing the form, click **"Save"** at the bottom-right corner.

Your newly created Thing will appear in the list:

![Updated List](/screenshots/things/list-after-create.png)

## Managing Thing Properties & Measures

### Properties

Properties represent metadata or static attributes, such as an IMEI number, manufacturer, or firmware version. Upon creation, each Thing inherits properties from its **ThingType**, pre-populated with default values if defined.

You can set individual values for each property per Thing, enabling granular control.

To manage properties:

1. Open your Thing.
2. Navigate to the **Properties** tab.
3. Click on a property to edit its value or leave the default.

![Properties Overview](/screenshots/things/properties.png)

### Measures

Measures display real-time data points, such as sensor readings, inherited from your ThingType.

![Measures Overview](/screenshots/things/measures.png)

## Groups

Groups control which users have access to your Thing. Here's how to assign your Thing to one or more groups:

1. Navigate to the **Groups** tab of your Thing.
2. Click **"Add to Group"**.
3. Select desired groups and confirm by clicking **"Save"**.

![Select Groups](/screenshots/things/groups-add-select.png)

Your Thing will now appear within the selected groups.

![Groups Assigned](/screenshots/things/groups-add-after.png)

## Users

The **Users** tab enables you to view and manage user access to individual Things. Users inherit access rights from their assigned groups, but you can also assign specific users directly to a Thing for specialized control:

1. Navigate to the **Users** tab within your Thing.
2. Click **"Add User"** to associate additional users.
3. Select the appropriate users from the dropdown and confirm by clicking **"Save"**.

![Users Management](/screenshots/things/users.png)

This ensures precise access management tailored to operational needs.

## What's Next?

- [Manage your ThingTypes](/docs/onboarding/thing-types)
- [Organize Things with Groups](/docs/user-management/groups)
