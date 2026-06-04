## MODIFIED Requirements

### Requirement: Dedicated Landing Page for Rutva & Deb
The system MUST provide a dedicated landing page at `/rutva-deb-airport-transfers/index.html` that displays event-specific branding ("Rutva & Deb") and booking information for transfers to the Hilton Tulum Riviera Maya resort. All styles and assets SHALL be correctly loaded and aligned with the project's base theme.

#### Scenario: Page displays correct branding and styles
- **WHEN** a user navigates to `/rutva-deb-airport-transfers/`
- **THEN** the page header, main content titles, and paralax section MUST display "Rutva & Deb"
- **THEN** the header background color MUST match the reference (`rgb(48, 89, 65)`)
- **THEN** the paralax section MUST correctly load the background image

### Requirement: Client-Specific Pricing and Stripe Integration
The landing page MUST use a dedicated Stripe user ID (`rutva-deb`) for payment processing and apply the negotiated pricing for Cancun (CUN) and Tulum (TQO) airport transfers as defined in the client-specific logic.

#### Scenario: Correct Stripe user is used
- **WHEN** a user submits the booking form on the Rutva & Deb landing page
- **THEN** the system MUST initiate a Stripe session using the `rutva-deb` identifier via the external Stripe API
