## MODIFIED Requirements

### Requirement: Rebranded Landing Page for Dana & Hirshal
The system MUST provide a rebranded landing page at `/dana-hirshal-airport-transfers/index.html` displaying event-specific branding ("Dana & Hirshal" / "Dana & Hirshal's wedding") instead of "Serena & Gabriel", and MUST reference the correct hotel venue **SLS Playa Mujeres** (not "Nizuc Resort & Spa") in all guest-facing copy.

#### Scenario: User visits the Dana & Hirshal transfers page
- **WHEN** a user visits the `/dana-hirshal-airport-transfers/index.html` page
- **THEN** the heading elements, prices text, and FAQ answers MUST refer to "Dana & Hirshal" or "Dana & Hirshal's wedding"
- **AND** the page header, main body, and footer classes MUST target "dana-hirshal" or "dana-hirshal-airport-transfers"
- **AND** the hero H1 title MUST read "PLEASE BOOK NOW AND SECURE YOUR TRANSFER FROM CANCUN INTERNATIONAL AIRPORT TO" on the first line and "SLS Playa Mujeres" on the second line, separated by a `<br/>` tag
- **AND** the H1 font size on mobile screens (<= 500px) MUST be 30% smaller than the 900px breakpoint value of 30px, i.e., 21px

#### Scenario: Header nav contains only Home, Services, Los cabos
- **WHEN** a user views the page header navigation
- **THEN** the nav MUST contain exactly three links: "Home", "Services", and "Los cabos" in that order
- **AND** "Transportation" and "Social responsability" links MUST NOT be present

#### Scenario: Los cabos link points to Marco DMC
- **WHEN** a user clicks the "Los cabos" link in the header
- **THEN** the link MUST navigate to `https://marcodmc.com/` (not `https://loscabosconcierge.com/`)

### Requirement: Transfer pricing values
The system SHALL display the following prices (per vehicle, not per person) on the dana-hirshal airport transfers page, dynamically applied based on vehicle and transfer type selection.

Updated price table:

| Vehicle    | One Way (arriving) | One Way (departing) | Round Trip |
|------------|--------------------|---------------------|------------|
| Van        | $127.00 USD        | $127.00 USD         | $250.00 USD |
| Suburban   | $160.00 USD        | $160.00 USD         | $315.00 USD |
| Sprinter   | $185.00 USD        | $185.00 USD         | $360.00 USD |

The "Dana & Hirshal Price" field SHALL display the value listed above. The "Regular price" field SHALL be hidden from view (the `.regular-price` element SHALL have `display: none`).

#### Scenario: Van one-way price displayed
- **WHEN** the user selects the Van vehicle and the Airport → Hotel or Hotel → Airport transfer type
- **THEN** the page SHALL display $127.00 USD as the Dana & Hirshal price
- **AND** the regular price field SHALL be hidden

#### Scenario: Suburban one-way price displayed
- **WHEN** the user selects the Suburban vehicle and the Airport → Hotel or Hotel → Airport transfer type
- **THEN** the page SHALL display $160.00 USD as the Dana & Hirshal price
- **AND** the regular price field SHALL be hidden

#### Scenario: Sprinter one-way price displayed
- **WHEN** the user selects the Sprinter vehicle and the Airport → Hotel or Hotel → Airport transfer type
- **THEN** the page SHALL display $185.00 USD as the Dana & Hirshal price
- **AND** the regular price field SHALL be hidden

#### Scenario: Van round-trip price displayed
- **WHEN** the user selects the Van vehicle and the Round Trip transfer type
- **THEN** the page SHALL display $250.00 USD as the Dana & Hirshal price
- **AND** the regular price field SHALL be hidden

#### Scenario: Suburban round-trip price displayed
- **WHEN** the user selects the Suburban vehicle and the Round Trip transfer type
- **THEN** the page SHALL display $315.00 USD as the Dana & Hirshal price
- **AND** the regular price field SHALL be hidden

#### Scenario: Sprinter round-trip price displayed
- **WHEN** the user selects the Sprinter vehicle and the Round Trip transfer type
- **THEN** the page SHALL display $360.00 USD as the Dana & Hirshal price
- **AND** the regular price field SHALL be hidden

## ADDED Requirements

### Requirement: FAQ text update
The FAQ list item in "WHAT IS INCLUDED WITH CANCUN CONCIERGE'S TRANSPORTATION SERVICE?" SHALL use "Bottled waters" instead of "Refreshments".

#### Scenario: FAQ list item displays "Bottled waters"
- **WHEN** a user reads the FAQ "WHAT IS INCLUDED WITH CANCUN CONCIERGE'S TRANSPORTATION SERVICE?"
- **THEN** the list item for beverages SHALL read "Bottled waters" (not "Refreshments")
