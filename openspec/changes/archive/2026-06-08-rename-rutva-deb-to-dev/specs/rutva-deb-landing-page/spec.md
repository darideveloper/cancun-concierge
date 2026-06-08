## MODIFIED Requirements

### Requirement: Dedicated Landing Page for Rutva & Deb
The system MUST provide a dedicated landing page at `/rutva-dev-airport-transfers/index.html` that displays event-specific branding ("Rutva & Dev") and booking information for transfers to the Hilton Tulum Riviera Maya resort. All styles and assets SHALL be correctly loaded and aligned with the project's base theme.

#### Scenario: Page displays correct branding and styles
- **WHEN** a user navigates to `/rutva-dev-airport-transfers/`
- **THEN** the page header, main content titles, and paralax section MUST display "Rutva & Dev"
- **THEN** the header background color MUST match the reference (`rgb(48, 89, 65)`)
- **THEN** the paralax section MUST correctly load the background image
- **THEN** the footer copyright and contact widgets MUST be visible and correctly styled

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
