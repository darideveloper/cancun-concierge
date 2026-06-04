## Why

A new client group, Rutva & Deb, requires a dedicated landing page for airport transfer bookings to Hilton Tulum Riviera Maya. This follows the project's established pattern of providing isolated, branded landing pages for corporate or wedding groups to ensure a personalized booking experience.

## What Changes

- **New Page**: Created a dedicated directory `rutva-deb-airport-transfers/` with an `index.html` tailored for the Rutva & Deb event.
- **Client Logic**: Created `code/rutva-deb-airport-transfers.js` to manage client-specific Stripe user ID (`rutva-deb`) and pricing/validation logic.
- **Styling**: Created `css/_rutva-deb-airport-transfers.sass` to isolate styles for the new page and branding.
- **Global Integration**: Modified `css/styles.sass` to import the new stylesheet into the central `styles.css`.
- **Assets**: Added `imgs/rutva-deb-logo.webp` as a placeholder logo for the new landing page.

## Capabilities

### New Capabilities

- `rutva-deb-landing-page`: Provides a localized booking interface for the Rutva & Deb wedding group, including custom pricing for Cancun and Tulum airports to the Hilton Tulum Riviera Maya resort.

### Modified Capabilities

- None

## Impact

- **Assets**: New HTML, JS, and SASS files in the `rutva-deb-airport-transfers/`, `code/`, and `css/` directories respectively.
- **Global Styles**: The main `styles.css` will grow slightly to include the new landing page styles.
- **Stripe**: Configured to use a new `stripe_user` identifier for this specific event.
