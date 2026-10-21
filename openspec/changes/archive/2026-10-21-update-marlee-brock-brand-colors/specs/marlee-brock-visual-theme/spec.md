# Spec Delta

## Purpose

Defines the brand color palette and visual styling for the Marlee & Brock airport transfers landing page, aligning with the Cannon Wedding website and logo.

## ADDED Requirements

### Requirement: Cannon Wedding brand color palette
The landing page SHALL implement the Cannon Wedding color palette using Deep Royal Navy (`#042179`) as the primary brand color, Deep Ink Navy (`#193585`) for header, footer, and CTA elements, Warm Linen / Ivory (`#eae9da`) for page background, and Deep Navy (`#042179`) for body text.

#### Scenario: Header and footer branded styling
- **WHEN** the header or footer renders on the Marlee & Brock landing page
- **THEN** `header.marlee-brock` and `#footer.marlee-brock` SHALL have a background-color of `#193585`
- **AND** navigation links and social icons SHALL render in white or contrasting ink tones with hover transitions

#### Scenario: Hero title banner styling
- **WHEN** the transportation titles banner renders
- **THEN** the headline and subtitle blocks SHALL use a background-color of `#042179` with white text

#### Scenario: Page body background
- **WHEN** the Marlee & Brock landing page renders
- **THEN** the main background SHALL display Warm Linen (`#eae9da`)

#### Scenario: Option card and active selection colors
- **WHEN** transport or vehicle cards render
- **THEN** card price labels SHALL display in `#042179`
- **AND** card checkbox borders SHALL display in `#042179`
- **AND** active selected card checkboxes SHALL have their inner fill in `#042179`

### Requirement: CTA button and interactive control colors
The primary action buttons, back navigation button, and form controls SHALL adhere to the navy brand palette.

#### Scenario: Buy Now CTA button styling
- **WHEN** the Buy Now submit button renders in its default state
- **THEN** its background-color SHALL be `#193585` with white text and matching border
- **AND** on hover it SHALL invert to white background with `#193585` text and border

#### Scenario: Back button and selected vehicle badge
- **WHEN** the vehicle selection flow reveals the back button and vehicle badge
- **THEN** the back button SVG icon fill SHALL be `#193585`
- **AND** the vehicle title highlight in the badge SHALL display in `#193585`

#### Scenario: Form input focus glow and borders
- **WHEN** form text inputs and select elements receive focus or hover while enabled
- **THEN** they SHALL display a subtle focus box-shadow tinted with `#193585`

### Requirement: Scoped stylesheet integration and compilation
All Marlee & Brock brand color rules SHALL be defined within `css/_marlee-brock-airport-transfers.sass` and compiled into `css/styles.css` without modifying global rules.

#### Scenario: Compilation and namespace isolation
- **WHEN** Sass compiles `css/styles.sass`
- **THEN** styles SHALL compile cleanly into `css/styles.css`
- **AND** all color overrides SHALL remain strictly scoped to `header.marlee-brock`, `#footer.marlee-brock`, and `.marlee-brock-airport-transfers`
