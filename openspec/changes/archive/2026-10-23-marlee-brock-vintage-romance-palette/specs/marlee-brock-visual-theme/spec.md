# Spec Delta

## MODIFIED Requirements

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
