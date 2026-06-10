## MODIFIED Requirements

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
