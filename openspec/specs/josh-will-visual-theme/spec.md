## ADDED Requirements

### Requirement: Hero background image
The josh-will-airport-transfers page SHALL display `imgs/josh-will-hero.webp` as the `.paralax` section background image, covering the full section width.

#### Scenario: Hero image is displayed
- **WHEN** a user visits the josh-will-airport-transfers page
- **THEN** the parallax hero section SHALL show `josh-will-hero.webp` as its background

### Requirement: Hero parallax couple names
The `.paralax` container SHALL display "Josh & Will" centered over the hero image with font-size 4rem on desktop, scaling down responsively.

#### Scenario: Desktop view displays styled names
- **WHEN** the user visits the page on desktop
- **THEN** the text "Josh & Will" SHALL be displayed centered inside `.paralax` at 4rem font size

#### Scenario: Mobile responsive scaling
- **WHEN** screen width <= 900px
- **THEN** the names text font-size SHALL scale to 2.2rem
- **AND** at <= 500px SHALL scale to 1.6rem

### Requirement: Hero tint overlay
The `.paralax` section SHALL have a semi-transparent `#bccacd` overlay via `::before` to bridge the hero image with the page palette.

#### Scenario: Tint overlay is present
- **WHEN** the hero section renders
- **THEN** a `::before` pseudo-element with `background: rgba(188, 202, 205, 0.18)` SHALL cover the full hero area

### Requirement: Page color palette
All text on the josh-will-airport-transfers page SHALL use `#6c6c6c`. Surface backgrounds (titles section, cards) SHALL use `#bccacd`. Interactive elements SHALL use `#4f492f`.

#### Scenario: Text color
- **WHEN** any heading, paragraph, label, input, or select renders
- **THEN** its color SHALL be `#6c6c6c`

#### Scenario: Titles section background
- **WHEN** the transport titles section renders
- **THEN** its background-color SHALL be `#bccacd`

#### Scenario: CTA button accent
- **WHEN** a CTA button renders
- **THEN** its background-color SHALL be `#4f492f`

#### Scenario: CTA button hover
- **WHEN** a user hovers a CTA button
- **THEN** the button SHALL invert: border `#4f492f`, text `#4f492f`, background white

### Requirement: FAQ question title background
FAQ question title backgrounds SHALL use `#6c6c6c`.

#### Scenario: FAQ background
- **WHEN** a FAQ question title renders
- **THEN** its background-color SHALL be `#6c6c6c`

### Requirement: Form input borders and focus glow
Form inputs and selects SHALL use `#4f492f` for borders and focus box-shadow.

#### Scenario: Input border
- **WHEN** a form input or select renders
- **THEN** its border SHALL be `1px solid #4f492f`

#### Scenario: Input focus glow
- **WHEN** a form input or select receives focus
- **THEN** it SHALL display `box-shadow: 0px 0px 8px 0px #4f492f`

### Requirement: Header and footer styling
Header and footer SHALL use class `josh-will` with background `#bccacd` and text color `#6c6c6c`. Nav links SHALL be white, turning to semi-transparent black on hover.

#### Scenario: Header and footer colors
- **WHEN** the page renders
- **THEN** `header.josh-will` and `#footer.josh-will` SHALL have `background-color: #bccacd`

#### Scenario: Mobile nav height
- **WHEN** screen width <= 790px
- **THEN** the expanded header nav SHALL fit 3 links (height ~240px)

### Requirement: Regular price element hidden
The `.regular-price` paragraph SHALL be hidden on the josh-will-airport-transfers page.

#### Scenario: Regular price not visible
- **WHEN** a user views any transport option card
- **THEN** the `.regular-price` element SHALL NOT be visible

### Requirement: Reduced H1 mobile font
H1 font size at <= 500px SHALL be 21px (30% reduction from 900px breakpoint).

#### Scenario: Mobile H1 size
- **WHEN** screen width <= 500px
- **THEN** `.transportation .titles h1.small` font-size SHALL be 21px
