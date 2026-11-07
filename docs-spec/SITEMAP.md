# Docs sitemap

Every page of the new site: file, type, title, and where its facts come from today.
Sources are the pages under `docs/user/` and `docs/get-started/` that were written from
the IoT Breeze code; they are raw material, not structure. When a source and the code
disagree, the code wins. `docs/user/` is deleted once every section is rebuilt.

Order within a section = sidebar order (`sidebar_position` 1, 2, 3 … in the order listed).

## get-started/ — sidebar "Get started"

| File | Type | Title | Sources |
| --- | --- | --- | --- |
| index.mdx | landing | Welcome to IoT Breeze | get-started/index, get-started/tour |
| quickstart.mdx | tutorial | Quickstart: from a simulated device to an alert | get-started/first-device, onboarding/simulate-device, automation/rule-designer (example) |
| real-hardware.mdx | tutorial | Connect a real device | get-started/first-device (MQTT/HTTP tabs), onboarding/connections |
| key-concepts.mdx | concept | Key concepts | all `index.mdx` of docs/user/*, get-started/index (terms table) |
| roles/operator.mdx | landing | For operators | — (curated links) |
| roles/builder.mdx | landing | For solution builders | — |
| roles/developer.mdx | landing | For developers | — |
| roles/administrator.mdx | landing | For administrators | — |

## connect/ — "Connect devices": How do I get data in?

| File | Type | Title | Sources |
| --- | --- | --- | --- |
| index.mdx | landing | Connect devices | onboarding/index |
| how-devices-connect.mdx | concept | How devices connect | onboarding/connections |
| mqtt.mdx | how-to | Send data over MQTT | onboarding/connections |
| http.mdx | how-to | Send data over HTTP | onboarding/connections |
| line-protocol.mdx | how-to | Write InfluxDB line protocol | onboarding/connections |
| gateways.mdx | how-to | Connect devices through a gateway | administration/gateways |
| simulate.mdx | how-to | Simulate a device | onboarding/simulate-device |
| credentials.mdx | how-to | Create and rotate device credentials | onboarding/connections |
| message-format.mdx | reference | Message format | onboarding/connections |
| mqtt-topics.mdx | reference | MQTT topics and client ID | onboarding/connections |
| ingest-endpoints.mdx | reference | Ingest endpoints and status codes | onboarding/connections |

## model/ — "Model your data": How do I describe my devices?

| File | Type | Title | Sources |
| --- | --- | --- | --- |
| index.mdx | landing | Model your data | onboarding/index |
| things-and-types.mdx | concept | Thing types, things and interfaces | onboarding/thing-types, things, interfaces |
| drafts-and-versions.mdx | concept | Drafts, publishing and versions | onboarding/thing-types, interfaces |
| create-thing-type.mdx | how-to | Create a thing type | onboarding/thing-types |
| register-thing.mdx | how-to | Register a thing | onboarding/things |
| reuse-interface.mdx | how-to | Reuse an interface across thing types | onboarding/interfaces |
| clean-up-data.mdx | how-to | Clean up incoming data | onboarding/transformation-pipeline |
| measure-types.mdx | reference | Measure and property types | onboarding/thing-types |
| shipped-interfaces.mdx | reference | Shipped interfaces | onboarding/interfaces |

## visualize/ — "Visualize": How do I see my data?

| File | Type | Title | Sources |
| --- | --- | --- | --- |
| index.mdx | landing | Visualize | dashboards/index |
| dashboards.mdx | concept | Dashboards, smart dashboards and time | dashboards/index, smart-dashboards, time-range-and-filters, hierarchy |
| thing-dashboard.mdx | how-to | Build a dashboard for one thing | dashboards/create-and-edit |
| smart-dashboard.mdx | how-to | Build one dashboard for every thing of a kind | dashboards/smart-dashboards |
| home.mdx | how-to | Put a dashboard on Home | dashboards/create-and-edit |
| share.mdx | how-to | Share or embed a dashboard | dashboards/create-and-edit |
| canvas.mdx | how-to | Draw a floor plan with live values | dashboards/canvas/* |
| map.mdx | how-to | Show things on a map | monitoring/map |
| widgets.mdx | reference | Widget gallery | dashboards/widgets/* (one H2 per group, one H3 per widget) |

## watch/ — "Watch and respond": What is happening, and what needs me?

| File | Type | Title | Sources |
| --- | --- | --- | --- |
| index.mdx | landing | Watch and respond | monitoring/index |
| events-incidents-notifications.mdx | concept | Events, incidents and notifications | docs-spec/examples (exists, copy and check) |
| thing-health.mdx | how-to | Check a thing's health | monitoring/things, thing-page |
| explore-telemetry.mdx | how-to | Explore telemetry over time | monitoring/telemetry-explorer |
| work-an-incident.mdx | how-to | Work an incident | monitoring/incidents |
| incident-policy.mdx | how-to | Set up an incident policy | monitoring/incident-configuration |
| alert-channels.mdx | how-to | Send alerts to Teams, Slack or a webhook | docs-spec/examples (exists, copy and check) |
| geofence.mdx | how-to | Draw a geofence | monitoring/map |
| event-types.mdx | reference | Event types | monitoring/event-types, events |
| incident-fields.mdx | reference | Incident states and fields | monitoring/incidents, incident-configuration |
| channel-types.mdx | reference | Channel types | monitoring/notification-channels |
| mail-templates.mdx | reference | Mail templates and placeholders | monitoring/mail-templates |

## automate/ — "Automate": How do I make the platform act for me?

| File | Type | Title | Sources |
| --- | --- | --- | --- |
| index.mdx | landing | Automate | automation/index |
| rules-actions-reports.mdx | concept | Rules, actions and reports | automation/index, rule-designer, actions |
| threshold-alert.mdx | how-to | Alert when a value crosses a limit | automation/rule-designer (worked example) |
| device-command.mdx | how-to | Send a command to a device | automation/actions |
| webhook-from-rule.mdx | how-to | Call another system from a rule | automation/rule-designer, actions (verify which action types a rule offers) |
| weekly-report.mdx | how-to | Email a weekly PDF report | automation/reports |
| conditions.mdx | reference | Rule conditions and functions | automation/rule-designer |
| action-types.mdx | reference | Action types | automation/actions, rule-designer |
| report-settings.mdx | reference | Report settings | automation/reports |
| node-red.mdx | reference | Node-RED (legacy) | automation/node-red |

## knowledge/ — "Knowledge and AI": How do my things relate, and what can I ask?

| File | Type | Title | Sources |
| --- | --- | --- | --- |
| index.mdx | landing | Knowledge and AI | knowledge/index |
| knowledge-graph.mdx | concept | The knowledge graph | knowledge/index, explore, data-model |
| ask-nimble-answers.mdx | concept | How Ask Nimble answers | knowledge/ask-nimble |
| map-sites.mdx | how-to | Map your sites and buildings | knowledge/explore |
| ask.mdx | how-to | Ask a question about your data | knowledge/ask-nimble |
| outside-source.mdx | how-to | Bring in an outside data source | knowledge/sources |
| data-health.mdx | how-to | Fix data-health findings | knowledge/data-health |
| ai-model.mdx | how-to | Choose the AI model | knowledge/ai-models |
| types-and-traits.mdx | reference | Types and traits | knowledge/data-model |
| connector-types.mdx | reference | Connector types | knowledge/sources |

## administer/ — "Administer": Who can do what?

| File | Type | Title | Sources |
| --- | --- | --- | --- |
| index.mdx | landing | Administer | administration/index |
| access.mdx | concept | Users, groups and roles | administration/users, groups, roles |
| invite.mdx | how-to | Invite a colleague | administration/users |
| team-access.mdx | how-to | Give a team access to its things | administration/groups, onboarding/things |
| api-key.mdx | how-to | Create an API key | administration/api-keys |
| branding.mdx | how-to | Brand your tenant | administration/tenant-settings (Theme) |
| files.mdx | how-to | Store and share files | administration/files |
| delete-data.mdx | how-to | Delete data | administration/tenant-data-and-connections, onboarding/things |
| roles.mdx | reference | Roles and permissions | administration/roles |
| tenant-settings.mdx | reference | Tenant settings | administration/tenant-settings, tenant-data-and-connections |
| audit-log.mdx | reference | Audit log | administration/audit-log |

## troubleshooting/ — "Troubleshooting"

| File | Type | Title | Sources |
| --- | --- | --- | --- |
| index.mdx | landing | Troubleshooting | — |
| no-signal.mdx | how-to | A device shows no signal | connect pages |
| empty-dashboard.mdx | how-to | A dashboard is empty | visualize pages |
| rule-not-firing.mdx | how-to | A rule doesn't fire | automate pages |
| email-not-arriving.mdx | how-to | An alert email never arrives | watch, automate pages |
| glossary.mdx | reference | Glossary | key-concepts |

## api/ — sidebar "API"

| File | Type | Title | Sources |
| --- | --- | --- | --- |
| index.mdx | landing | API overview | developer/intro |
| authentication.mdx | reference | Authentication | developer/intro, administration/api-keys, onboarding/connections |
| webhooks.mdx | reference | Webhook payloads | monitoring/notification-channels, automation/actions (HMAC, payload) |
| errors-and-limits.mdx | reference | Errors and limits | onboarding/connections (status codes), API specs in openapi/ |
| reference/dip.mdx, nbq.mdx, ocb.mdx | reference | Ingest API (DIP) / Query API (NBQ) / Platform API (OCB) | generated from openapi/ |
