# marlee-brock-visual-theme Specification

## Purpose

Defines the brand color palette and visual styling for the Marlee & Brock airport transfers landing page, aligning with the Cannon Wedding website and logo.

## Requirements

### Requirement: Cannon Wedding brand color palette
The landing page SHALL implement the Vintage Romance color palette using Deep Navy (`#1B365D`) for key structural elements and typography, Kraft Beige (`#E4CBB4`) for the main page background, Dusty Coral (`#ED8A7B`) for primary highlights and accents, and Soft Sky Blue (`#A0C9E0`) for secondary accents.

#### Scenario: Header and footer branded styling
- **WHEN** the header or footer renders on the Marlee & Brock landing page
- **THEN** `header.marlee-brock` and `#footer.marlee-brock` SHALL have a background-color of `#1B365D`
- **AND** navigation links and social icons SHALL render in white with Dusty Coral (`#ED8A7B`) hover transitions

#### Scenario: Hero title banner styling
- **WHEN** the transportation titles banner renders
- **THEN** the headline and subtitle blocks SHALL use a background-color of `#1B365D` with white and Soft Sky Blue text

#### Scenario: Page body background
- **WHEN** the Marlee & Brock landing page renders
- **THEN** the main body canvas and container background SHALL display Kraft Beige (`#E4CBB4`)

#### Scenario: Option card and active selection colors
- **WHEN** transport or vehicle cards render
- **THEN** card price labels SHALL display in `#1B365D`
- **AND** card checkbox borders SHALL display in `#1B365D`
- **AND** active selected card checkboxes SHALL have their inner fill in Dusty Coral (`#ED8A7B`) with matching `#ED8A7B` card borders

### Requirement: CTA button and interactive control colors
The primary action buttons, back navigation button, and form controls SHALL adhere to the Vintage Romance palette with Dusty Coral and Deep Navy accents.

#### Scenario: Buy Now CTA button styling
- **WHEN** the Buy Now submit button renders in its default state
- **THEN** its background-color SHALL be Dusty Coral (`#ED8A7B`) with bold Deep Navy (`#1B365D`) text and matching border
- **AND** on hover it SHALL invert to Deep Navy (`#1B365D`) background with white text and `#1B365D` border

#### Scenario: Back button and selected vehicle badge
- **WHEN** the vehicle selection flow reveals the back button and vehicle badge
- **THEN** the back button SVG icon fill SHALL be `#1B365D`
- **AND** the vehicle title highlight in the badge SHALL display in `#1B365D`

#### Scenario: Form input focus glow and borders
- **WHEN** form text inputs and select elements receive focus or hover while enabled
- **THEN** they SHALL display a subtle focus box-shadow tinted with `#1B365D` or `#ED8A7B`

### Requirement: Scoped stylesheet integration and compilation
All Marlee & Brock brand color rules SHALL be defined within `css/_marlee-brock-airport-transfers.sass` and compiled into `css/styles.css` without modifying global rules.

#### Scenario: Compilation and namespace isolation
- **WHEN** Sass compiles `css/styles.sass`
- **THEN** styles SHALL compile cleanly into `css/styles.css`
- **AND** all color overrides SHALL remain strictly scoped to `header.marlee-brock`, `#footer.marlee-brock`, and `.marlee-brock-airport-transfers`

### Requirement: Self-hosted Cannon Wedding brand typography
The Marlee & Brock landing page SHALL utilize self-hosted web fonts replicating the authentic typography of the Cannon Wedding website without external font service dependencies.

#### Scenario: Self-hosted font family declarations
- **WHEN** the stylesheet is loaded for the Marlee & Brock page
- **THEN** local `@font-face` rules SHALL declare `Agrandir Tight`, `Caslon #540`, and `Jimmy Script` referencing local `.woff` files in the `fonts/` directory

#### Scenario: Typography role assignment
- **WHEN** typography styles are applied in `css/_marlee-brock-airport-transfers.sass`
- **THEN** `$font-regular` SHALL be set to `'Agrandir Tight', sans-serif`
- **AND** `$font-title` SHALL be set to `'Caslon #540', serif`
- **AND** `$font-highlight` SHALL be set to `'Jimmy Script', cursive`

#### Scenario: Elimination of third-party font requests
- **WHEN** the landing page HTML renders
- **THEN** no external requests to `fonts.googleapis.com` or `fonts.gstatic.com` SHALL be made

### Requirement: Decorative watercolor doodle styling and non-intrusive layering
The stylesheet SHALL define scoped visual presentation, dimensions, responsive scaling, and pointer-events rules for decorative watercolor illustrations.

#### Scenario: Clickability and pointer-events isolation
- **WHEN** a user interacts with any section containing decorative watercolor doodles
- **THEN** all decorative doodles SHALL have `pointer-events: none` and `user-select: none`
- **AND** interactive cards, form controls, and buttons SHALL remain fully clickable and unobstructed

#### Scenario: Logo doodles responsive scaling
- **WHEN** the page is viewed on tablet (<= 900px) or mobile (<= 500px)
- **THEN** logo doodles SHALL scale fluidly without causing horizontal overflow

#### Scenario: Card padding and text alignment
- **WHEN** transport cards render
- **THEN** card titles SHALL have `margin: 0` to align symmetrically with selection checkboxes
- **AND** cards on mobile viewports SHALL retain adequate internal padding
