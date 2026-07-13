## ADDED Requirements

### Requirement: Price label updated on direction cards

The system SHALL display "Price:" instead of "Josh & Will Price:" on all three transfer direction cards.

#### Scenario: Arriving card shows updated label
- **WHEN** the arriving card is displayed
- **THEN** the price label reads "Price:" instead of "Josh & Will Price:"

#### Scenario: Departing card shows updated label
- **WHEN** the departing card is displayed
- **THEN** the price label reads "Price:" instead of "Josh & Will Price:"

#### Scenario: Round trip card shows updated label
- **WHEN** the round trip card is displayed
- **THEN** the price label reads "Price:" instead of "Josh & Will Price:"

### Requirement: Regular price line removed from direction cards

The system SHALL NOT display the regular price line on any direction card.

#### Scenario: Arriving card has no regular price
- **WHEN** the arriving card is rendered
- **THEN** the element with class `regular-price` is absent from the card

#### Scenario: Departing card has no regular price
- **WHEN** the departing card is rendered
- **THEN** the element with class `regular-price` is absent from the card

#### Scenario: Round trip card has no regular price
- **WHEN** the round trip card is rendered
- **THEN** the element with class `regular-price` is absent from the card

### Requirement: Prices updated per vehicle type

The system SHALL display correct prices for each vehicle type and direction combination.

#### Scenario: Van one-way shows correct price
- **WHEN** Van is selected and arriving or departing card is active
- **THEN** the price field shows $155.00 USD

#### Scenario: Van round trip shows correct price
- **WHEN** Van is selected and round trip card is active
- **THEN** the price field shows $310.00 USD

#### Scenario: Suburban one-way shows correct price
- **WHEN** Suburban is selected and arriving or departing card is active
- **THEN** the price field shows $210.00 USD

#### Scenario: Suburban round trip shows correct price
- **WHEN** Suburban is selected and round trip card is active
- **THEN** the price field shows $420.00 USD

#### Scenario: Sprinter one-way shows correct price
- **WHEN** Sprinter is selected and arriving or departing card is active
- **THEN** the price field shows $235.00 USD

#### Scenario: Sprinter round trip shows correct price
- **WHEN** Sprinter is selected and round trip card is active
- **THEN** the price field shows $470.00 USD
