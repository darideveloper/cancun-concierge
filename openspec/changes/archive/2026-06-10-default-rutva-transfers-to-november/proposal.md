## Why

The Rutva & Dev airport transfers are specifically scheduled for an event in November 2026 (arrivals on Nov 20th, departures on Nov 23rd). Currently, when the user opens the date inputs, the native calendar picker defaults to the current month, which creates friction. 

Additionally, the behavior needs to differ based on the selected service type:
1. **Private Service**: Must start focused on the event dates (November 20th for arrival, November 23rd for departure) but allow the client to edit and select any other date.
2. **Shared Shuttle (Group Transport)**: Must use the same event dates, but they must be fixed/locked so they cannot be edited or changed by the client.

## What Changes

- **Landing Page Date Logic (`/code/rutva-dev-airport-transfers.js`)**:
  - Dynamically configure the arriving date (`#arriving-date`) and departing date (`#departing-date`) inputs depending on the selected service type (`current_service_type`).
  - Pre-populate default values (`2026-11-20` for arrival, `2026-11-23` for departure) so the date pickers automatically start focused on November 2026.
  - For **Private Service**: Keep the date fields fully editable so any date can be selected.
  - For **Shared Shuttle (Group Service)**: Make the date fields read-only and uneditable. Apply a locked appearance (`.disabled` class for visual styling, `pointer-events: none` to block clicks, and `tabindex="-1"` to block keyboard focus).
  - Add input event listeners to serve as guardrails, resetting values back to the event dates if mutation is attempted.
  - Apply the **DRY (Don't Repeat Yourself)** principle by creating a centralized date configuration utility function to configure both date inputs, reducing code duplication.

- **Landing Page HTML (`/rutva-dev-airport-transfers/index.html`)**:
  - Remove any static `min` / `max` constraints if present to allow any date selection for private transfers.

## Capabilities

### New Capabilities

*(None)*

### Modified Capabilities

- `rutva-deb-landing-page`: Dynamically configure date inputs based on service type selection, supporting editable default dates for private transfers and read-only fixed dates for group transfers.

## Impact

- **Affected Files**:
  - `rutva-dev-airport-transfers/index.html` (HTML inputs)
  - `code/rutva-dev-airport-transfers.js` (JavaScript form initialization and event handlers)
- **External APIs**: None.
- **Dependencies**: None.
