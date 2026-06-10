## ADDED Requirements

### Requirement: Rebranded Landing Page for Dana & Hirshal
The system MUST provide a rebranded landing page at `/dana-hirshal-airport-transfers/index.html` displaying event-specific branding ("Dana & Hirshal" / "Dana & Hirshal's wedding") instead of "Serena & Gabriel", and MUST reference the correct hotel venue **SLS Playa Mujeres** (not "Nizuc Resort & Spa") in all guest-facing copy.

#### Scenario: User visits the Dana & Hirshal transfers page
- **WHEN** a user visits the `/dana-hirshal-airport-transfers/index.html` page
- **THEN** the heading elements, prices text, and FAQ answers MUST refer to "Dana & Hirshal" or "Dana & Hirshal's wedding"
- **AND** the page header, main body, and footer classes MUST target "dana-hirshal" or "dana-hirshal-airport-transfers"
- **AND** the hero H1 title MUST read "PLEASE BOOK NOW AND SECURE YOUR TRANSFER FROM CANCUN INTERNATIONAL AIRPORT TO SLS Playa Mujeres"

#### Scenario: Hotel select options display correct venue
- **WHEN** a user opens the arriving or departing hotel dropdown in the booking form
- **THEN** the first option MUST display "SLS Playa Mujeres" with value "SLS Playa Mujeres"
- **AND** no option SHALL contain the text "Nizuc Resort & Spa"

#### Scenario: FAQ answer references correct venue
- **WHEN** a user reads the FAQ "HOW DO I FIND CANCUN CONCIERGE ONCE I'M READY TO LEAVE THE AIRPORT?"
- **THEN** the answer text MUST reference "SLS Playa Mujeres resort" as the destination

#### Scenario: Payment FAQ references correct venue
- **WHEN** a user reads the FAQ "HOW DO I PAY FOR MY TRANSPORTATION?"
- **THEN** the answer text MUST reference "SLS Playa Mujeres resort" as the destination


### Requirement: Rebranded Stripe Routing and Script Controller
The landing page MUST load a dedicated JavaScript controller `code/dana-hirshal-airport-transfers.js` which routes Stripe checkout sessions using the `dana-hirshal` identifier.

#### Scenario: Submitting the booking form triggers Stripe session with correct user
- **WHEN** a user submits the booking form on the `/dana-hirshal-airport-transfers/index.html` page
- **THEN** the system MUST execute `code/dana-hirshal-airport-transfers.js`
- **AND** the payload sent to the Stripe API MUST have `user` set to "dana-hirshal"

### Requirement: Event Style Customization and Imports
The stylesheet system MUST compile styling rules for the `dana-hirshal` and `dana-hirshal-airport-transfers` selectors, imported via `css/styles.sass`.

#### Scenario: Compiled styles apply to the page layout
- **WHEN** the styles are compiled from `css/styles.sass`
- **THEN** the rules in `css/_dana-hirshal-airport-transfers.sass` MUST be included in the output stylesheet
- **AND** elements with the class `dana-hirshal` or `dana-hirshal-airport-transfers` MUST receive the defined properties


### Requirement: Transfer pricing values
The system SHALL display the following prices (per vehicle, not per person) on the dana-hirshal airport transfers page, dynamically applied based on vehicle and transfer type selection.

Updated price table:

| Vehicle    | One Way (arriving) | One Way (departing) | Round Trip |
|------------|--------------------|---------------------|------------|
| Van        | $127.00 USD        | $127.00 USD         | $250.00 USD |
| Suburban   | $160.00 USD        | $160.00 USD         | $315.00 USD |
| Sprinter   | $185.00 USD        | $185.00 USD         | $360.00 USD |

Both the "Regular price" and "Dana & Hirshal Price" fields SHALL display the same value as listed above.

#### Scenario: Van one-way price displayed
- **WHEN** the user selects the Van vehicle and the Airport → Hotel or Hotel → Airport transfer type
- **THEN** the page SHALL display $127.00 USD as both the regular price and the Dana & Hirshal price

#### Scenario: Suburban one-way price displayed
- **WHEN** the user selects the Suburban vehicle and the Airport → Hotel or Hotel → Airport transfer type
- **THEN** the page SHALL display $160.00 USD as both the regular price and the Dana & Hirshal price

#### Scenario: Sprinter one-way price displayed
- **WHEN** the user selects the Sprinter vehicle and the Airport → Hotel or Hotel → Airport transfer type
- **THEN** the page SHALL display $185.00 USD as both the regular price and the Dana & Hirshal price

#### Scenario: Van round-trip price displayed
- **WHEN** the user selects the Van vehicle and the Round Trip transfer type
- **THEN** the page SHALL display $250.00 USD as both the regular price and the Dana & Hirshal price

#### Scenario: Suburban round-trip price displayed
- **WHEN** the user selects the Suburban vehicle and the Round Trip transfer type
- **THEN** the page SHALL display $315.00 USD as both the regular price and the Dana & Hirshal price

#### Scenario: Sprinter round-trip price displayed
- **WHEN** the user selects the Sprinter vehicle and the Round Trip transfer type
- **THEN** the page SHALL display $360.00 USD as both the regular price and the Dana & Hirshal price

#### Scenario: Stripe charge matches displayed price
- **WHEN** the user submits the booking form for any vehicle and transfer type
- **THEN** the Stripe payment amount SHALL match the "Dana & Hirshal Price" displayed on the page
