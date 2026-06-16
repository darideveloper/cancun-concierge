## ADDED Requirements

### Requirement: Regular price element hidden
The `.regular-price` paragraph and its contents SHALL be hidden on the dana-hirshal-airport-transfers page.

#### Scenario: Regular price is not visible
- **WHEN** a user views any transport option card on the dana-hirshal-airport-transfers page
- **THEN** the `.regular-price` element SHALL NOT be visible on the page

### Requirement: Reduced mobile nav height for 3 links
The header navigation expanded height on mobile (<= 790px) SHALL be reduced to fit exactly 3 nav links instead of the default 5.

#### Scenario: Mobile nav height fits 3 links
- **WHEN** a user views the page on a device with screen width <= 790px
- **THEN** the expanded header nav SHALL have a height appropriate for 3 links (approx 220–250px, not the default 385px)

### Requirement: Reduced H1 mobile font
The H1 title font size SHALL be reduced by 30% on mobile screens relative to the 900px breakpoint value.

#### Scenario: H1 is smaller on mobile
- **WHEN** a user views the page on a device with screen width <= 500px
- **THEN** the `.transportation .titles h1.small` font size SHALL be 21px (30% reduction from 30px at 900px breakpoint)
