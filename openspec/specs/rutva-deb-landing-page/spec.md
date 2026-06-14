# rutva-deb-landing-page Specification

## Purpose
TBD - created by archiving change create-rutva-deb-landing-page. Update Purpose after archive.
## Requirements
### Requirement: Dedicated Landing Page for Rutva & Dev
The system MUST provide a dedicated landing page at `/rutva-dev-airport-transfers/index.html` that displays event-specific branding ("Rutva & Dev") and booking information for transfers to the Hilton Tulum Riviera Maya resort. All styles and assets SHALL be correctly loaded and aligned with the project's base theme. The page header navigation SHALL NOT contain links to "Social responsability" or "Los cabos".

#### Scenario: Page displays correct branding and styles
- **WHEN** a user navigates to `/rutva-dev-airport-transfers/`
- **THEN** the page header, main content titles, and paralax section MUST display "Rutva & Dev"
- **THEN** the header background color MUST match the reference (`rgb(48, 89, 65)`)
- **THEN** the paralax section MUST correctly load the background image
- **THEN** the footer copyright and contact widgets MUST be visible and correctly styled
- **THEN** the header navigation MUST NOT display the "Social responsability" and "Los cabos" links
- **THEN** the mobile navigation menu height MUST be adjusted to `240px` when expanded on screens with a width of `790px` or less

### Requirement: Client-Specific Pricing and Stripe Integration
The landing page MUST apply client-specific pricing and Stripe configurations. It MUST support two service types:
1. **Shared Shuttle Service**:
   - Offered only for CUN airport arrivals on Nov 20th and departures on Nov 23rd.
   - Price: $52 USD per person, one-way transfer (tax included). Round trip is $104 USD per person.
   - Displayed waiting time at airport: "30 minutes to 1 hour".
   - Bypasses vehicle selection.
2. **Private Service**:
   - Van (maximum 6 passengers): $158 USD one-way, $316 USD round trip (tax included).
   - Sprinter (maximum 12 passengers): $234 USD one-way, $468 USD round trip (tax included).
   - Deluxe SUV (maximum 4 passengers): $219 USD one-way, $438 USD round trip (tax included).

The Stripe integration MUST process payments for these services under the `rutva-dev` identifier and dynamically calculate the correct checkout total (multiplying the price per person for the Shared Shuttle by the number of passengers).

The page MUST show the Service selector directly on page load and default to CUN (Cancun International Airport) internally.

#### Scenario: Shared Shuttle selects correct price and details
- **WHEN** the user navigates to the page (defaulting to CUN), selects "Shared Shuttle Service", and chooses transfer type "Arrival" for 3 passengers
- **THEN** the system MUST set the line item price to $52 USD per person and calculate a checkout amount of $156 USD
- **THEN** the Stripe transaction payload MUST include "Shared Shuttle - Airport - Hotel Transfer (Shared Shuttle)" and reflect 3 passengers

#### Scenario: Private Deluxe SUV selects correct price and details
- **WHEN** the user navigates to the page (defaulting to CUN), selects "Private Service", vehicle "Deluxe SUV", and chooses transfer type "Arrival"
- **THEN** the system MUST set the line item price to $219 USD (regardless of passenger count)
- **THEN** the Stripe transaction payload MUST include "Private Transfer - Airport - Hotel Transfer (Deluxe SUV)"

### Requirement: Pre-selected Destination Hotel
The booking form MUST provide two hotel options in both arriving and departing fieldsets: **Hotel Edition** (pre-selected) and **Other** (free-text input). No other hotel options SHALL be listed.

#### Scenario: Only Hotel Edition and Other are available in hotel dropdown
- **WHEN** the booking form is displayed
- **THEN** the arriving and departing hotel selection dropdowns MUST contain only "Hotel Edition" (selected by default) and "Other" as options
- **THEN** "Conrad Tulum Riviera Maya" MUST NOT appear as an option in either dropdown

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

