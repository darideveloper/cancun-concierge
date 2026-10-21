# Spec Delta

## ADDED Requirements

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
