# Spec Delta

## MODIFIED Requirements

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

## ADDED Requirements

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
