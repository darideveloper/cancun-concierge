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
