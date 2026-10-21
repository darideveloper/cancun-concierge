# marlee-brock-landing-page Specification

## Purpose

Provides a dedicated, isolated airport transportation booking landing page for Marlee & Brock's event guests, duplicated from the Ella & James landing page template.

## Requirements

### Requirement: Dedicated landing page structure and routing
The system SHALL provide a dedicated landing page at `/marlee-brock-airport-transfers/index.html` supporting Hotel Esencia airport transfers with multi-vehicle selection (Van, SUV, Sprinter) and dynamic pricing.

#### Scenario: User visits Marlee & Brock landing page
- **WHEN** a user visits `/marlee-brock-airport-transfers/index.html`
- **THEN** the header, main body, and footer classes SHALL target `marlee-brock` and `marlee-brock-airport-transfers`
- **AND** vehicle selection cards for Van (1 - 6 passengers), SUV (1 - 4 passengers), and Sprinter (1 - 12 passengers) SHALL be displayed
- **AND** the pricing disclosure note SHALL state "Prices are per vehicle (not per person)."
- **AND** the page SHALL load `code/marlee-brock-airport-transfers.js`

#### Scenario: Landing page style isolation
- **WHEN** the page is loaded
- **THEN** styles and scripts SHALL be scoped to `marlee-brock` and `marlee-brock-airport-transfers` without impacting other client landing pages

### Requirement: Scoped styling and stylesheet integration
The system SHALL define client-specific styles in `css/_marlee-brock-airport-transfers.sass`, imported via `css/styles.sass` and compiled into `css/styles.css`.

#### Scenario: Stylesheet compilation and selectors
- **WHEN** Sass compiles `css/styles.sass`
- **THEN** styles for Marlee & Brock SHALL be scoped under `header.marlee-brock`, `#footer.marlee-brock`, and `.marlee-brock-airport-transfers`
- **AND** no global selectors SHALL be mutated

### Requirement: Stripe payment configuration
The landing page client JavaScript SHALL configure transfer booking submissions with the `marlee-brock` Stripe user identifier.

#### Scenario: Checkout submission
- **WHEN** a user submits the transfer booking form
- **THEN** the request payload sent to the external Stripe API endpoint SHALL specify `user` as `"marlee-brock"`

### Requirement: Brand event logo asset
The landing page SHALL display an event logo referencing `imgs/marlee-brock-logo.png`.

#### Scenario: Logo rendering
- **WHEN** the landing page renders in a browser
- **THEN** the event logo image SHALL point to `../imgs/marlee-brock-logo.png` with alt text "Logo Marlee & Brock"

### Requirement: Multi-vehicle transfer options and pricing
The system SHALL provide selectable vehicle tiers for Van, SUV, and Sprinter with dynamically calculated prices doubling for round-trip services.

#### Scenario: Vehicle selection reveals transfer pricing
- **WHEN** a user selects a vehicle tier
- **THEN** the vehicle options SHALL hide and the transfer direction cards SHALL display with that vehicle's rates
- **AND** a back button SHALL be shown to allow returning to vehicle selection

#### Scenario: One-way and round-trip rates
- **WHEN** viewing transfer direction cards for a chosen vehicle
- **THEN** Van rates SHALL be $180.00 USD for one-way and $360.00 USD for round-trip
- **AND** SUV rates SHALL be $238.00 USD for one-way and $476.00 USD for round-trip
- **AND** Sprinter rates SHALL be $302.00 USD for one-way and $604.00 USD for round-trip

### Requirement: Hotel Esencia destination routing and passenger bounds
The booking form SHALL provide Hotel Esencia routing and constrain passenger options to the selected vehicle capacity.

#### Scenario: Hotel selection options
- **WHEN** the booking form is displayed
- **THEN** the arriving and departing hotel dropdowns SHALL offer "Hotel Esencia" and "Other"
- **AND** selecting "Other" SHALL reveal the custom hotel input with a disclaimer specifying the Riviera Maya area only

#### Scenario: Dynamic passenger count limit
- **WHEN** a user selects a vehicle
- **THEN** the passenger dropdown in the form SHALL allow up to 6 passengers for Van, up to 4 for SUV, and up to 12 for Sprinter

### Requirement: Two-step vehicle and transfer selection
The system SHALL display vehicle options under the transportation heading. When a user selects a vehicle type, the vehicle options SHALL hide themselves and reveal the transfer direction options with the updated prices and a back button displaying the selected vehicle.

#### Scenario: Selecting a vehicle
- **WHEN** a user clicks a vehicle card (Van, SUV, or Sprinter)
- **THEN** the vehicle options section SHALL hide itself
- **AND** the back button and selected vehicle indicator SHALL be displayed
- **AND** the transfer direction cards SHALL be displayed with prices corresponding to the selected vehicle type

#### Scenario: Returning to vehicle options via back button
- **WHEN** a user clicks the back button
- **THEN** the transfer direction options and back button SHALL hide
- **AND** the vehicle options section SHALL be displayed again
- **AND** all active states SHALL be reset

#### Scenario: Selecting a transfer direction
- **WHEN** a user clicks a transfer direction card with a vehicle selected
- **THEN** the selected direction card SHALL receive the active class
- **AND** the booking form SHALL be displayed with fieldsets corresponding to the selected transfer type

### Requirement: Interactive control clickability and hit-testing isolation
The system SHALL ensure that background titles and overlay elements do not intercept mouse clicks or block user interaction with transfer options, back button, and controls.

#### Scenario: Unobstructed click interactions
- **WHEN** a user clicks any vehicle card, direction card, or back button in the transportation section
- **THEN** pointer events SHALL pass through background title layers (`pointer-events: none`)
- **AND** interactive cards and controls SHALL be stacked above background elements
