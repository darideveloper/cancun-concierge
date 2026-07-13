## ADDED Requirements

### Requirement: Rebranded landing page for Josh & Will
The system SHALL provide a landing page at `/josh-will-airport-transfers/index.html` displaying "Josh & Will" branding instead of generic or other couple branding, referencing hotel venues **Belmond Maroma** and **The Fairmont Mayakoba**. The header logo SHALL use `logo-white.png`.

#### Scenario: User visits Josh & Will transfers page
- **WHEN** a user visits `/josh-will-airport-transfers/index.html`
- **THEN** heading elements, prices text, and FAQ answers SHALL refer to "Josh & Will"
- **AND** the page header, main body, and footer classes SHALL target `josh-will` / `josh-will-airport-transfers`
- **AND** the hero H1 SHALL read "PLEASE BOOK NOW AND SECURE YOUR TRANSFER FROM CANCUN INTERNATIONAL AIRPORT TO <br/> Belmond Maroma or The Fairmont Mayakoba"

#### Scenario: Header displays white logo
- **WHEN** the page header renders
- **THEN** the logo image SHALL use `../imgs/logo-white.png` with alt text "Cancún Concierge Logo"

#### Scenario: Hotel options in form
- **WHEN** a user opens the arriving or departing hotel select
- **THEN** the dropdown SHALL contain exactly three options: "Belmond Maroma", "The Fairmont Mayakoba", and "Other"
- **AND** selecting "Other" SHALL reveal a custom hotel text input

#### Scenario: Hotel area helper text
- **WHEN** a user views the hotel select section
- **THEN** the helper text SHALL read "Transfer rates apply to hotels located in Riviera Maya / Mayakoba area only"

#### Scenario: Header nav structure
- **WHEN** a user views the page header navigation
- **THEN** the nav SHALL contain exactly three links: "Home", "Services", and "Los cabos" in that order

#### Scenario: Los cabos link
- **WHEN** a user clicks "Los cabos"
- **THEN** the link SHALL navigate to `https://marcodmc.com/`

### Requirement: Transfer pricing values
The page SHALL display prices matching the Dana & Hirshal rate structure.

| Vehicle | One Way | Round Trip |
|---------|---------|------------|
| Van | $127.00 USD | $250.00 USD |
| Suburban | $160.00 USD | $315.00 USD |
| Sprinter | $185.00 USD | $360.00 USD |

#### Scenario: Van one-way price
- **WHEN** user selects Van + Airport→Hotel or Hotel→Airport
- **THEN** the price SHALL display $127.00 USD
- **AND** regular price SHALL be hidden

#### Scenario: Sprinter one-way price
- **WHEN** user selects Sprinter + one-way transfer
- **THEN** the price SHALL display $185.00 USD

#### Scenario: Round trip prices
- **WHEN** user selects round trip
- **THEN** Van SHALL show $250.00, Suburban $315.00, Sprinter $360.00

### Requirement: Rebranded Stripe routing and script controller
The page SHALL load `code/josh-will-airport-transfers.js` which routes Stripe checkout using the `josh-will` identifier.

#### Scenario: Form submits with correct user
- **WHEN** a user submits the booking form
- **THEN** the JavaScript payload sent to the Stripe API SHALL have `user` set to `"josh-will"`

### Requirement: Event style customization and imports
The stylesheet system SHALL compile styling rules for `josh-will` and `josh-will-airport-transfers` selectors via `css/styles.sass`.

#### Scenario: Compiled styles apply
- **WHEN** styles are compiled from `css/styles.sass`
- **THEN** rules in `css/_josh-will-airport-transfers.sass` SHALL be included in the output
- **AND** elements with class `josh-will` / `josh-will-airport-transfers` SHALL receive the defined properties

### Requirement: FAQ text includes "Bottled waters"
The FAQ "WHAT IS INCLUDED WITH CANCUN CONCIERGE'S TRANSPORTATION SERVICE?" SHALL list "Bottled waters" (not "Refreshments").

#### Scenario: FAQ list item
- **WHEN** a user reads the FAQ about included services
- **THEN** the beverage list item SHALL read "Bottled waters"
