# rutva-deb-landing-page Specification

## Purpose
TBD - created by archiving change create-rutva-deb-landing-page. Update Purpose after archive.
## Requirements
### Requirement: Dedicated Landing Page for Rutva & Deb
The system MUST provide a dedicated landing page at `/rutva-deb-airport-transfers/index.html` that displays event-specific branding ("Rutva & Deb") and booking information for transfers to the Hilton Tulum Riviera Maya resort.

#### Scenario: Page displays correct branding
- **WHEN** a user navigates to `/rutva-deb-airport-transfers/`
- **THEN** the page header, main content titles, and paralax section MUST display "Rutva & Deb"
- **THEN** the footer copyright and contact widgets MUST be visible and correctly styled

### Requirement: Client-Specific Pricing and Stripe Integration
The landing page MUST use a dedicated Stripe user ID (`rutva-deb`) for payment processing and apply the negotiated pricing for Cancun (CUN) and Tulum (TQO) airport transfers as defined in the client-specific logic.

#### Scenario: Correct Stripe user is used
- **WHEN** a user submits the booking form on the Rutva & Deb landing page
- **THEN** the system MUST initiate a Stripe session using the `rutva-deb` identifier via the external Stripe API

### Requirement: Pre-selected Destination Hotel
The booking form MUST have "Hilton Tulum Riviera Maya" pre-selected as the destination hotel in both arriving and departing fieldsets to streamline the booking process for wedding guests.

#### Scenario: Hotel is pre-selected on form load
- **WHEN** the user selects a vehicle and transport type to activate the form
- **THEN** the hotel selection dropdowns for both "Arriving" and "Departing" fieldsets MUST have "Hilton Tulum Riviera Maya" selected by default

