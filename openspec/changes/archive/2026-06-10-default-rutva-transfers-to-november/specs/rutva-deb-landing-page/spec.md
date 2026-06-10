## ADDED Requirements

### Requirement: Dynamic Calendar Configuration by Service Type
The system MUST dynamically configure the arriving date (`#arriving-date`) and departing date (`#departing-date`) inputs on the Rutva & Dev landing page based on the selected service type. 

1. **Pre-population**: The system MUST pre-populate `#arriving-date` with `2026-11-20` and `#departing-date` with `2026-11-23` to default the calendar viewports to the event dates.
2. **Private Service**: The system MUST keep the date inputs fully editable, allowing the client to modify them to any other date.
3. **Shared Shuttle (Group Service)**: The system MUST lock the date inputs to prevent modifications. The inputs MUST be set to `readonly`, be keyboard-unfocusable (`tabindex="-1"`), have pointer interactions disabled (`pointer-events: none`), and receive the `.disabled` class for visual styling.
4. **Guardrails**: The system MUST enforce a change guardrail for the Shared Shuttle service, reverting the inputs back to the default event dates if a mutation attempt occurs.
5. **Restoration**: The system MUST restore standard editability and default styling to the date inputs when the client switches from Shared Shuttle to Private Service.

#### Scenario: Private service defaults dates and allows editing
- **WHEN** the user selects "Private Service" and opens the booking form
- **THEN** the arriving date input MUST default to `2026-11-20` and the departing date input MUST default to `2026-11-23`
- **THEN** both inputs MUST be editable and allow the user to select any date

#### Scenario: Shared Shuttle locks dates to event dates
- **WHEN** the user selects "Shared Shuttle Service" and opens the booking form
- **THEN** the arriving date input MUST be set to `2026-11-20` and the departing date input MUST be set to `2026-11-23`
- **THEN** both inputs MUST be read-only, styled with the `.disabled` class, and block all mouse click and keyboard focus interactions

#### Scenario: Switching service types toggles date lock states
- **WHEN** the user switches the service selection from "Shared Shuttle Service" to "Private Service"
- **THEN** the date inputs MUST transition from read-only locked states to standard editable states
