# Open product questions

Generated from `TODO(product)` markers in docs/. Answer here or in the page; remove the marker when the page is fixed.


## administer

- [ ] `administer/access.mdx`: The Organization permission exists in the role matrix. What does it control: creating and editing organization-type groups, or something else?
- [ ] `administer/audit-log.mdx`: How long are audit log entries kept?
- [ ] `administer/branding.mdx`: Where do the Cover image and the logos appear (sign-in page, header, emails, reports)?
- [ ] `administer/invite.mdx`: How long is an invitation valid before it shows Expired?
- [ ] `administer/roles.mdx`: The Viewer role keeps crud on Query (QueryConfig). Is that intended now that Viewer dashboards are read-only?

## api

- [ ] `api/authentication.mdx`: nbq takes an API key as bearer only when the deployment sets its directory address (`SECURITY_API_KEYS_DIRECTORY_URL`). Is that on in every cell? Until confirmed, use the explicit exchange below for nbq.
- [ ] `api/authentication.mdx`: Which permission or API key scope do the credential routes need, and is a key token allowed on them?
- [ ] `api/errors-and-limits.mdx`: List the stable `msgCode` values clients may depend on, or say they are not part of the contract.
- [ ] `api/errors-and-limits.mdx`: Do production deployments use the same edge rate limits as the repository's Traefik configuration? What does a rate-limited client receive and does it carry `Retry-After`?
- [ ] `api/index.mdx`: The repository's legacy compose stack still routes `/dip` to the older GoDIP service. Is `/dip` served in production, and should it be documented?
- [ ] `api/index.mdx`: Does every tenant get its own host (primary and additional domains are registered per tenant), or do tenants of a shared cell share one host? Say which hostname an integrator should use.
- [ ] `api/webhooks.mdx`: What is the delay between delivery attempts?
- [ ] `api/webhooks.mdx`: List the fields of `data.ruleEvaluation` that a rule adds to the payload.

## automate

- [ ] `automate/action-types.mdx`: Which placeholder names are available in a rule's Email, Notification and Webhook actions (for example the measure value that met the condition)? The executors render them from the trigger payload, which for a rule fire is `{ data, referenceId }`, but the fields are not documented in the app.
- [ ] `automate/conditions.mdx`: The trend-window design notes say an invalid window call, such as a non-literal argument or an unparsable duration, rejects the whole rule set for the tenant and keeps the previous rules running. Does the Advanced editor's Test or validity check catch this before the rule is saved? If not, the docs should warn.
- [ ] `automate/threshold-alert.mdx`: Where can a user see that a rule evaluation failed or was skipped (condition not met, invalid expression)? The code writes rule evaluation events whose detail depends on enableDetailedRuleEvaluation and logs other errors on the server. Should the docs promise that users can see failed evaluations?
- [ ] `automate/webhook-from-rule.mdx`: Which placeholder names can a Webhook action's URL, headers and body use when a rule fires it? The executor renders the action config with Mustache against the trigger payload, which for a rule is `{ data, referenceId }`, but the payload fields are not documented in the app.

## changelog

- [ ] `changelog/index.mdx`: confirm the version numbering rule, and why 0.12.0 to 0.12.4 have no entries
- [ ] `changelog/unreleased.mdx`: confirm what ships in the next release and its version
- [ ] `changelog/v0-9-1.mdx`: confirm the exact endpoint paths affected so customers can find them

## connect

- [ ] `connect/message-format.mdx`: `time`, `tag_id` and `measure` are reserved names in the data model, but the ingest path does not reject them. Is a measure or tag with one of these names refused, renamed or stored?
- [ ] `connect/mqtt-topics.mdx`: The MQTT ingest drops malformed messages and logs them, without publishing to the error topic. Should devices be told?

## gateways

- [ ] `gateways/how-gateways-work.mdx`: confirm after PRs #1613–#1623 merge
- [ ] `gateways/periscope/verify.mdx`: nbq accepts tokens for other audiences than the platform backend, and a gateway's token is for the backend only. Does `periscope verify` work on a gateway box (`[ocb] gateway = true`)? Expected today: exit 2.

## knowledge

- [ ] `knowledge/ask-nimble-answers.mdx`: which file types and maximum size does document indexing accept? The source page says PDF, Office, text, Markdown, CSV, HTML up to 50 MB; this is not confirmed in the service code.
- [ ] `knowledge/types-and-traits.mdx`: which packs ship by default, if any?

## model

- [ ] `model/clean-up-data.mdx`: Confirm in the running editor that an Expression node keeps the rest of the message when the key is a path such as data.temperature (its Passthrough setting), and which left-sidebar entries and canvas controls exist besides the Simulator. The deployed engine takes the pipeline's output as the whole message that is stored.
- [ ] `model/clean-up-data.mdx`: The earlier docs say a Function node fails after 5 seconds. The ingest service (tsflux) defaults to 250 ms for one whole transformation, including waiting for a free slot, and reads it from the zen eval_timeout setting. What limit applies to production tenants, and what does the sender see?
- [ ] `model/drafts-and-versions.mdx`: The interface Schema tab says "Descriptions and aliases save in place", and the API has an in-place update for them (PATCH /interfaces/{id} with a capabilities list). IoT Breeze never calls it: editing a description or alias of an interface field saves the whole draft instead. Which is intended? If in place is intended, this page and the thing type rule change.
- [ ] `model/drafts-and-versions.mdx`: The thing type Overview card says new fields are added "to the draft for review". The code (Evolution.service.ts calling updateSchema, which publishes) adds them to the published schema. This page follows the code. Confirm.
- [ ] `model/measure-types.mdx`: How are Aliases used when a device sends data or a dashboard binds a field: do telemetry under an alias name resolve to the field, or are they used only for matching during field mapping and interface suggestions?
- [ ] `model/register-thing.mdx`: What does Authentication type offer for the AWS IoT Core and SAP connectors? ThingForm.tsx lists options only for AZURE (SAS Token, X.509 Certificate) and SAP (X.509 Certificate), and falls back to X.509 for any other connector.
- [ ] `model/shipped-interfaces.mdx`: The pack manifest (packs.gen.ts) is version 2, with the interface also named temperature-sensing, while the preshipped interface is v1 from the seed. Does installing the pack create a second, tenant-owned copy of the interface, or reuse the preshipped one?

## troubleshooting

- [ ] `troubleshooting/email-not-arriving.mdx`: What happens when a group recipient has no members, or a user has no email address? Is the run recorded as failed or silently skipped?
- [ ] `troubleshooting/rule-not-firing.mdx`: Where can a user see that a rule evaluation failed or was skipped (condition not met, invalid expression)? The code writes rule evaluation events whose detail depends on enableDetailedRuleEvaluation and logs other errors on the server. Should the docs promise that users can see failed evaluations?

## visualize

- [ ] `visualize/canvas/actions.mdx`: How does an editor create a canvas variable, and where is Set a variable supported?
- [ ] `visualize/canvas/embed-a-canvas.mdx`: The wizard shows Thing only on Multi-asset dashboards for a canvas built on interfaces; confirm what a Smart dashboard does with a canvas on interfaces.
- [ ] `visualize/share.mdx`: Which origins may embed IoT Breeze (frame-ancestors / CSP), and are the embed query parameters displayHeader and widgetId supported for users?

## watch

- [ ] `watch/explore-telemetry.mdx`: Does adding groups to a Tenant query limit who can open it to members of those groups? The code stores the groups on the query, but no access rule for saved queries was found, unlike dashboards.
- [ ] `watch/incident-policy.mdx`: How does someone create an action for an incident automation that does not also run on every event of an event type? The pickers only offer existing actions, and the event type page is the only place found where a Notification channel or Email action can be added. An action on an event type runs on every event of that type.
- [ ] `watch/mail-templates.mdx`: The template form also knows a Tenant context. What is it used for, and can a template choose it?
- [ ] `watch/mail-templates.mdx`: Which variables does each context offer (Event, Invitation, Report)? The list comes from the tenant's context data in the database, not from code.

## Found while translating

- [x] `gateways/*`: token lifetimes read as contradictory. Resolved from the code (nimbit 3eac9e9a2): a gateway's sign-in token lives 5 minutes, its ingest (gateway) token at most 10 minutes, and an MQTT gateway session ends after at most 10 minutes; the pages now say so. how-gateways-work says HTTP and stream tokens last "at most ten minutes", gateway-reference and periscope/configuration say the gateway access token lasts 5 minutes, periscope/outputs says ingest tokens last "at most 10 minutes". Which token lasts how long?
- [ ] `gateways/periscope/*`: is Periscope's own web UI English only? The German docs keep its labels in English.
- [ ] `administer/roles.mdx`: the German app shows role names Administrator, Modellierer, Manager, Viewer. Are role names localized everywhere (matrix, invitations), or do they come untranslated from the backend?

## Edge gateways (checked against nimbit `development` 3eac9e9a2)

- [ ] `gateways/revoke-and-replace.mdx`: Does enrolling with a new onboarding code end the MQTT credential the old box holds, or only a key revoke? The code bumps no credential serial on enrol.
- [ ] `gateways/revoke-and-replace.mdx`: Is the gateway thing's health and traffic history deleted with it when the gateway is removed?
- [ ] `gateways/things-behind-a-gateway.mdx`: What does the UI call the thing type's offline timeout?
- [ ] `gateways/ewon-flexy.mdx`: Is `flexy-sim.mjs` available to customers, and from where?
- [ ] `gateways/ewon-flexy.mdx`: The BASIC program is not in the repository. How is it distributed, which firmware was it tested on, what is the final .bas parameter layout?
- [ ] `gateways/periscope/deploy/requirements.mdx`: Which architectures does the published container image cover? Minimum CPU and RAM? Do the gRPC stream and MQTT connections go through an HTTP proxy? How much clock skew is tolerated?
- [ ] `gateways/periscope/deploy/upgrade.mdx`: Where in IoT Breeze does a tenant admin rotate the tenant key, and who may?
- [ ] `gateways/periscope/deploy/move-to-a-gateway.mdx`: Is there a supported way to keep existing things and history when a service-account box becomes a gateway (namespace = `agent.name`, then assign the things)?
- [ ] `gateways/periscope/deploy/replace-a-box.mdx`: Can a backed-up `gateway_key.pem` be restored on new hardware instead of onboarding with a new code?
- [ ] `connect/mqtt-topics.mdx`: Commands via a gateway (plan D12) are not built; nothing publishes on the gateway cmd topics yet.
