# ashley-jonathan-visual-theme Specification

## Purpose
Defines the BlankBeach-inspired visual identity, color scheme, typography, and styling rules for the Ashley & Jonathan airport transfers landing page.
## Requirements
### Requirement: BlankBeach color palette
The page SHALL implement the extracted BlankBeach color palette using Jungle Green (`#2a3a24`) as primary dark, Deep Teal (`#3d4f35`) for interactive states, Ivory (`#F4EFE3`) for base background and light text (matching the logo background for seamless visual blending), Warm Sand (`#e4d6bc`) for cards and borders, Soft Clay (`#8a6a4a`) for accents, and Coffee (`#4b2e1c`) / Ink (`#6b5a44`) for text.

#### Scenario: Background and surface colors
- **WHEN** the page and sections render
- **THEN** `body.ashley-jonathan` and `.ashley-jonathan-airport-transfers` SHALL use background color `#F4EFE3`
- **AND** transport title banners SHALL use Jungle Green (`#2a3a24`) background with Ivory (`#F4EFE3`) text

#### Scenario: CTA button styling
- **WHEN** a CTA button renders
- **THEN** its background-color SHALL be Jungle Green (`#2a3a24`) with Ivory (`#F4EFE3`) text
- **AND** on hover it SHALL invert to Soft Clay (`#8a6a4a`) or Ivory background with Jungle Green text

### Requirement: BlankBeach typography
The landing page SHALL load and apply Google Fonts matching the reference site: 'Tangerine' for script highlights and couple names, 'Cormorant Garamond' for editorial serif headings, subtitles, info notices, and FAQ details, 'Cormorant SC' for small caps eyebrows and tracking, and 'Inter' strictly scoped to interactive form inputs and controls.

#### Scenario: Fonts imported in head
- **WHEN** `/ashley-jonathan-airport-transfers/index.html` loads
- **THEN** it SHALL include a Google Fonts stylesheet link requesting Cormorant Garamond, Tangerine, Cormorant SC, and Inter

#### Scenario: Couple title typography
- **WHEN** couple name headers render
- **THEN** they SHALL use font-family 'Tangerine', cursive

#### Scenario: Headings and section titles
- **WHEN** section titles and titles banner render
- **THEN** they SHALL use font-family 'Cormorant Garamond', serif or 'Cormorant SC', serif

#### Scenario: Editorial body copy and FAQ details typography
- **WHEN** section subtitles (`h2 + p`), `.info` notices, or FAQ question answers (`.faqs p`, `.faqs ul li`) render
- **THEN** they SHALL use font-family 'Cormorant Garamond', serif at `1.25rem` (20px), `line-height: 1.8`, `letter-spacing: 0.015em`, and color Coffee (`#4b2e1c`)
- **AND** interactive form inputs, selects, and fieldset labels SHALL use font-family 'Inter', sans-serif

### Requirement: FAQ accordion styling
The FAQ section SHALL display themed accordion headers with Ivory text and chevrons, expanding to reveal Cormorant Garamond answer copy.

#### Scenario: FAQ accordion interactive styling
- **WHEN** FAQ questions render
- **THEN** the question title bar SHALL have background-color `#2a3a24` with Ivory (`#F4EFE3`) text and matching Ivory SVG chevron
- **AND** on hover the title bar SHALL transition with subtle opacity change
- **AND** when active, answer paragraphs and bullet points SHALL display with generous line height and coffee text

### Requirement: Header and footer branded styling
The header and footer elements with class `ashley-jonathan` SHALL be styled with the jungle green background (`#2a3a24`) and ivory text (`#F4EFE3`).

#### Scenario: Header navigation colors
- **WHEN** the header navigation renders
- **THEN** nav links SHALL display in Ivory (`#F4EFE3`)
- **AND** on hover they SHALL transition to translucent ivory

#### Scenario: Footer styling
- **WHEN** `#footer.ashley-jonathan` renders
- **THEN** its background-color SHALL be `#2a3a24` with text in Ivory (`#F4EFE3`)

### Requirement: Scoped Sass compilation
The stylesheet partial `css/_ashley-jonathan-airport-transfers.sass` SHALL be imported in `css/styles.sass` and compiled into `css/styles.css` with all selectors strictly scoped.

#### Scenario: Sass build includes client styles
- **WHEN** `css/styles.sass` is compiled to `css/styles.css`
- **THEN** rules scoped to `header.ashley-jonathan`, `#footer.ashley-jonathan`, and `.ashley-jonathan-airport-transfers` SHALL be present in the compiled CSS
- **AND** no rules for other client pages or global defaults SHALL be overwritten

### Requirement: Hero title banner placement
The hero headline banner SHALL sit on the bottom edge of the hero gallery, overlapping upward, and SHALL never cover the content of the following section.

#### Scenario: Banner anchored to the hero bottom
- **WHEN** the landing page renders at any viewport width
- **THEN** the `.titles` banner SHALL be positioned in normal document flow immediately after `.gallery`
- **AND** its top edge SHALL sit 60px above the bottom edge of the hero gallery

#### Scenario: Banner never covers the next section
- **WHEN** the headline wraps to more lines at any viewport width
- **THEN** the banner SHALL NOT overlap the following `TRANSPORTATION OPTIONS` heading or the option cards

#### Scenario: Banner paints above the hero image
- **WHEN** the banner overlaps the hero gallery
- **THEN** the banner SHALL render above the gallery imagery

### Requirement: Equal-height option card rows
Transport-type card rows and vehicle card rows SHALL render with uniform card heights and vertically centred contents.

#### Scenario: Cards in a row share a height
- **WHEN** the cards of a row have different content lengths
- **THEN** every card in that row SHALL render at the height of the tallest card

#### Scenario: Card contents are vertically centred
- **WHEN** a card is taller than its own content
- **THEN** the checkbox and the text block SHALL be vertically centred within the card

### Requirement: Responsive margins without horizontal overflow
The transfer page SHALL use the available width on small screens without producing horizontal page overflow.

#### Scenario: Card widths on small screens
- **WHEN** the viewport is 900px or narrower
- **THEN** the option card rows SHALL span approximately the full available width, capped at 560px

#### Scenario: Card spacing on small screens
- **WHEN** the viewport is 900px or narrower
- **THEN** the stacked option cards SHALL be separated by a 15px gap
- **AND** each card SHALL carry 15px of internal padding and a 10px bottom margin

#### Scenario: Card heading top margin on small screens
- **WHEN** the viewport is 900px or narrower
- **THEN** the option card heading SHALL have its top margin removed so the title sits flush with the card's top padding

#### Scenario: Booking form widths on small screens
- **WHEN** the viewport is 900px or narrower
- **THEN** the booking form fieldset grid SHALL span the full width of the form

#### Scenario: No horizontal scrollbar
- **WHEN** the page is rendered at 320px, 360px, or 420px wide
- **THEN** the document scroll width SHALL NOT exceed the viewport width

### Requirement: Scoped override of leaked global rules
The Ashley & Jonathan stylesheet SHALL contain page-scoped overrides so globally leaked rules cannot hide or displace this page's elements.

#### Scenario: Back button remains visible
- **WHEN** a global `button.back { display: none }` rule is present in the compiled stylesheet
- **THEN** the scoped `.ashley-jonathan-airport-transfers .buttons button.back` rule SHALL set `display: inline-block`
- **AND** the back button SHALL occupy a non-zero, clickable box

#### Scenario: Hero banner bottom is not inherited from a global rule
- **WHEN** a global `.transportation .titles { bottom: 100px }` rule is present in the compiled stylesheet
- **THEN** the scoped `.ashley-jonathan-airport-transfers .transportation .titles` rule SHALL set `bottom: auto`
- **AND** the banner position SHALL NOT depend on the section's total height

### Requirement: Booking form fieldset reset
The booking form fieldsets SHALL reset the user-agent default box padding so they fit their grid column.

#### Scenario: Fieldset fits its column
- **WHEN** the booking form renders at any viewport width
- **THEN** each `fieldset` SHALL have zero padding and a `min-width` of 0
- **AND** no fieldset SHALL be wider than its grid column

