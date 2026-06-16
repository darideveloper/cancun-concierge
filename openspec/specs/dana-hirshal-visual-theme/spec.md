# dana-hirshal-visual-theme Specification

## Purpose
TBD - created by archiving change dana-hirshal-rebrand. Update Purpose after archive.
## Requirements
### Requirement: Hero background image
The dana-hirshal-airport-transfers page SHALL display `imgs/dana-hirshal-hero.webp` as the `.paralax` section background image.

#### Scenario: Hero image is displayed
- **WHEN** a user visits the dana-hirshal-airport-transfers page
- **THEN** the parallax hero section SHALL show `dana-hirshal-hero.webp` as its background, covering the full section width

#### Scenario: Previous logo image is not used
- **WHEN** a user visits the dana-hirshal-airport-transfers page
- **THEN** `dana-hirshal-logo.webp` SHALL NOT appear as the hero background

### Requirement: Hero tint overlay
The `.paralax` section SHALL have a semi-transparent `#bccacd` overlay (via `::before`) to bridge the hero image with the page palette.

#### Scenario: Tint overlay is present
- **WHEN** the hero section renders
- **THEN** a `::before` pseudo-element with `background: rgba(188, 202, 205, 0.18)` SHALL be positioned absolutely over the full hero area

### Requirement: Page text color
All text elements on the dana-hirshal-airport-transfers page (headings, body, labels, inputs, selects, buttons) SHALL use `#6c6c6c` as the base text color.

#### Scenario: Heading color
- **WHEN** any h1–h6 is rendered on the page
- **THEN** its color SHALL be `#6c6c6c`

#### Scenario: Body and form text color
- **WHEN** paragraphs, labels, inputs, or selects are rendered
- **THEN** their color SHALL be `#6c6c6c`

### Requirement: Page background / surface color
The main page background SHALL be white (`#ffffff`). Surface backgrounds (titles section, transport card price labels) on the dana-hirshal-airport-transfers page SHALL use `#bccacd`.

#### Scenario: Titles section background
- WHEN the transport titles section renders
- THEN its background-color SHALL be `#bccacd`

### Requirement: Highlight / accent color
Interactive elements (CTA buttons, checkbox fills, SVG icon fills) SHALL use `#4f492f` as the accent/highlight color.

#### Scenario: CTA button background
- **WHEN** a CTA button is in its default state
- **THEN** its background-color SHALL be `#4f492f`

#### Scenario: CTA button hover state
- **WHEN** a user hovers a CTA button
- **THEN** the button color SHALL invert: border `#4f492f`, text `#4f492f`, background `white`

### Requirement: FAQ question title background
FAQ question title backgrounds SHALL use `#6c6c6c` (neutral grey).

#### Scenario: FAQ question title background
- **WHEN** a FAQ question title is rendered
- **THEN** its background-color SHALL be `#6c6c6c`

#### Scenario: Checkbox active fill
- **WHEN** a transport option card is in active (selected) state
- **THEN** the checkbox inner fill SHALL be `rgba(79, 73, 47, 0.8)`

### Requirement: Form input borders and focus glow
Form inputs and selects on the dana-hirshal-airport-transfers page SHALL use `#4f492f` for borders and focus box-shadow.

#### Scenario: Input border
- **WHEN** a form input or select is rendered
- **THEN** its border SHALL be `1px solid #4f492f`

#### Scenario: Input focus glow
- **WHEN** a form input or select receives focus or hover (while not disabled)
- **THEN** it SHALL display `box-shadow: 0px 0px 8px 0px #4f492f`

### Requirement: Debug border removed
The debug `border: 1px solid red !important` on `.dana-hirshal-airport-transfers h2 + p` SHALL be removed.

#### Scenario: No red border on subheadings
- **WHEN** a paragraph follows an h2 on the page
- **THEN** no red border SHALL be visible on that paragraph

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

