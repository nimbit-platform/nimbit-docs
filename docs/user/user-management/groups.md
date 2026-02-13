---
title: Groups
slug: /user-management/groups
---

# Groups & Permissions

## Overview

Groups in IotBreeze provide a structured way to manage user access and device visibility. By assigning users, things, and thing types to groups, administrators can control which devices and features are accessible to them.

Groups are **hierarchical**, meaning permissions can be inherited from parent groups, ensuring a scalable and organized access management system.

This guide explains how to create and manage groups, assign users, things, and thing types, and understand the hierarchy structure.

---

## Creating a Group

### Navigating to Groups

To create a new group:

1. Go to **Administration → Groups** in the sidebar.
2. You will see the **Group Hierarchy** list on the left side of the screen.
3. Click the **"+" button** at the top of the list to add a new group.

![Groups Overview](/screenshots/groups/overview.png)

### Group Creation Form

When creating a new group, you need to define its key attributes.

![Create Group Form](/screenshots/groups/create.png)

| Field          | Required | Description |
|---------------|----------|-------------|
| **Name**      | ✅ Yes   | A unique name for the group (no spaces, no special characters except underscore). |
| **Group Type** | ✅ Yes   | Select either **Default** or **Organization**. |
| **Parent Group** | ✅ Yes   | Choose an existing group as the parent (cannot be left empty). |
| **Search Tags** | ❌ No   | Keywords to help with filtering and searching. |
| **Description**  | ❌ No   | Additional information about the group's purpose. |

Once all required fields are filled, the group is created and appears in the group hierarchy list.

---

## Viewing & Managing the Group Hierarchy

### Group Hierarchy List

On the left side of the **Groups** page, you can see the **Group Hierarchy**. This provides an overview of all groups and their relationships.

### Graphical Hierarchy View

To see a more **detailed visual representation** of a selected group's hierarchy:

1. Select a group from the list.
2. Click **"View Hierarchy"** on the right-hand side.

This will open a **graphical representation** of the group's position in the hierarchy, including its parent and child groups.

![Group Hierarchy View](/screenshots/groups/hierarchy-view.png)

---

## Editing a Group

To modify a group's details:

1. Navigate to **Administration → Groups**.
2. Select a group from the list.
3. Click **"Edit"** on the right side of the group details panel.

### Editable Fields

| Field          | Editable | Description |
|---------------|----------|-------------|
| **Name**      | ✅ Yes   | Modify the group’s name. |
| **Group Type** | ✅ Yes   | Change between **Default** and **Organization**. |
| **Parent Group** | ✅ Yes   | Select a new parent group. |
| **Search Tags** | ✅ Yes   | Update keywords for filtering and searching. |
| **Description**  | ✅ Yes   | Edit the group's description. |

After making changes, click **"Save"** to update the group.

---

## Managing Group Members, Things & ThingTypes

### Adding Users to a Group

1. Navigate to **Administration → Groups**.
2. Select a group from the list.
3. Open the **Users** tab and click **"Add User"**.

![Group Users Tab](/screenshots/groups/users.png)

4. Select a user from the dropdown list.

The user is immediately added to the group with **default permissions**.

### Adding Things to a Group

1. Navigate to **Administration → Groups**.
2. Select a group from the list.
3. Open the **Things** tab and click **"Add Thing"**.

![Add Things](/screenshots/groups/things.png)

4. Select a thing from the dropdown list.

The thing is immediately added to the group, making it visible and manageable by users in the group.

### Adding ThingTypes to a Group

1. Navigate to **Administration → Groups**.
2. Select a group from the list.
3. Open the **ThingTypes** tab and click **"Add ThingType"**.

![Add ThingTypes](/screenshots/groups/thing-types.png)

4. Select a ThingType from the dropdown list.

Once added, the ThingType becomes available for use within the group, allowing users to create and manage things based on that type.

---

## Removing Users, Things, or ThingTypes

To remove an assigned user, thing, or thing type:

1. Navigate to the **Users, Things, or ThingTypes** tab within the group.
2. Click the **trashcan icon** next to the user, thing, or ThingType.

This immediately removes the entity from the group, revoking access.

---

## Understanding Default Permissions

When a **user is added** to a group via the **Users** tab, they are assigned a default set of permissions. These permissions define what actions they can perform within the group.

### Default Permissions

- **Read** (Mandatory) – Grants viewing rights.
- **Update** – Allows editing existing records.
- **Execute** – Enables performing actions (e.g., triggering workflows).

These permissions ensure users can interact with the group's assigned things and ThingTypes effectively.

---

## Managing Permissions

Permissions define what group members can do within IotBreeze. Each group member can have their permissions adjusted individually.

### Changing Individual User Permissions

To modify a user’s permissions:

1. Open the group's **Users** tab.
2. In the **Permissions Table**, adjust the checkboxes for:
   - **Read**
   - **Update**
   - **Execute**

Changes take effect immediately, allowing fine-grained control over each user’s capabilities.

### Changing Group-Wide Permissions

To adjust the default permissions that new users receive when being added to a group:

1. Open the group's **Set default permissions** form.
2. Set the permissions for **Update, Execute**.
3. Hit Save.

![Manage Group Permissions](/screenshots/groups/default-permissions.png)


---

## Deleting a Group

To delete a group:

1. Go to **Administration → Groups**.
2. Click the **trashcan icon** next to the group.
3. Confirm the deletion.

⚠️ **Warning**: Deleting a group removes all its assigned permissions and user access.

---

## What’s Next?

- [Manage Users](/docs/user-management/users)
- [Manage Things](/docs/onboarding/things)
- [Manage ThingTypes](/docs/onboarding/thing-types)
