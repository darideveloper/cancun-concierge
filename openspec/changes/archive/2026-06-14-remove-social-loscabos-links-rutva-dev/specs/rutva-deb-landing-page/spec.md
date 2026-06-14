## MODIFIED Requirements

### Requirement: Dedicated Landing Page for Rutva & Dev
The system MUST provide a dedicated landing page at `/rutva-dev-airport-transfers/index.html` that displays event-specific branding ("Rutva & Dev") and booking information for transfers to the Hilton Tulum Riviera Maya resort. All styles and assets SHALL be correctly loaded and aligned with the project's base theme. The page header navigation SHALL NOT contain links to "Social responsability" or "Los cabos".

#### Scenario: Page displays correct branding and styles
- **WHEN** a user navigates to `/rutva-dev-airport-transfers/`
- **THEN** the page header, main content titles, and paralax section MUST display "Rutva & Dev"
- **THEN** the header background color MUST match the reference (`rgb(48, 89, 65)`)
- **THEN** the paralax section MUST correctly load the background image
- **THEN** the footer copyright and contact widgets MUST be visible and correctly styled
- **THEN** the header navigation MUST NOT display the "Social responsability" and "Los cabos" links
- **THEN** the mobile navigation menu height MUST be adjusted to `240px` when expanded on screens with a width of `790px` or less
