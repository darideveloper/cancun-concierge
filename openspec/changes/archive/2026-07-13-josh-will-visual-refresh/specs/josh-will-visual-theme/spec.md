## MODIFIED Requirements

### Requirement: Page color palette

All text on the josh-will-airport-transfers page SHALL use `#fbe7c1` (warm cream) on dark backgrounds and `#c9ad85` (dark beige) on white backgrounds. Surface backgrounds (titles section, cards) SHALL use `#6a725b` (sage green). Interactive elements SHALL use `#4f5545` (dark forest).

#### Scenario: Text color on dark backgrounds

- **WHEN** any heading, paragraph, label, input, or select renders over a colored background
- **THEN** its default color SHALL be `#fbe7c1`

#### Scenario: Text color on white backgrounds

- **WHEN** any `h2` heading or `.info` text renders over the white page background
- **THEN** its color SHALL be `#c9ad85`

#### Scenario: Titles section background

- **WHEN** the transport titles section renders
- **THEN** its background-color SHALL be `#6a725b`

#### Scenario: CTA button accent

- **WHEN** a CTA button renders
- **THEN** its background-color SHALL be `#4f5545`

#### Scenario: CTA button hover

- **WHEN** a user hovers a CTA button
- **THEN** the button SHALL invert: border `#4f5545`, text `#4f5545`, background white

### Requirement: FAQ question title background

FAQ question title backgrounds SHALL use `#6a725b`.

#### Scenario: FAQ background

- **WHEN** a FAQ question title renders
- **THEN** its background-color SHALL be `#6a725b`

### Requirement: Form input borders and focus glow

Form inputs and selects SHALL use `#4f5545` for borders and focus box-shadow.

#### Scenario: Input border

- **WHEN** a form input or select renders
- **THEN** its border SHALL be `1px solid #4f5545`

#### Scenario: Input focus glow

- **WHEN** a form input or select receives focus
- **THEN** it SHALL display `box-shadow: 0px 0px 8px 0px #4f5545`

### Requirement: Header and footer styling

Header and footer SHALL use class `josh-will` with background `#6a725b` and text color `#fbe7c1`. Nav links SHALL be white, turning to translucent white on hover.

#### Scenario: Header and footer colors

- **WHEN** the page renders
- **THEN** `header.josh-will` and `#footer.josh-will` SHALL have `background-color: #6a725b`

#### Scenario: Nav link hover

- **WHEN** a user hovers over a header nav link
- **THEN** the link color SHALL become `rgba(255, 255, 255, 0.6)`

## ADDED Requirements

### Requirement: Card text and checkbox colors use solid values

Card text, price text, checkbox borders, and hover/active fills SHALL use solid color values instead of translucent `rgba()` wrappers for consistent rendering.

#### Scenario: Card h3 and price use solid dark

- **WHEN** `.cards.transport .card .text h3` or `.cards.transport .card .text p.price` renders
- **THEN** its color SHALL be `#4f5545` with full opacity

#### Scenario: Checkbox border uses solid dark

- **WHEN** a checkbox in a transport card renders
- **THEN** its border SHALL be `2px solid #4f5545`

#### Scenario: Checkbox hover fill uses sage green

- **WHEN** a user hovers over a transport card
- **THEN** the checkbox inside fill SHALL be `#6a725b`

#### Scenario: Active checkbox fill uses solid dark

- **WHEN** a transport card is active
- **THEN** the checkbox inside fill SHALL be `#4f5545`
