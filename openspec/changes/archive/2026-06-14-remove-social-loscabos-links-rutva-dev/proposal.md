## Why

The event-specific landing page for Rutva & Dev contains header links ("Social responsability" and "Los cabos") that are irrelevant to their specific booking details. Removing these links simplifies the header menu and ensures users focus only on their event's airport transfer booking. Additionally, the mobile menu height needs to be adjusted from the default `385px` to `240px` to match the reduced number of items (3 instead of 5) and avoid empty space at the bottom of the open navigation menu.

## What Changes

- Remove the "Social responsability" link from the header navigation menu on the Rutva & Dev page.
- Remove the "Los cabos" link from the header navigation menu on the Rutva & Dev page.
- Adjust the expanded mobile navigation menu height for the Rutva & Dev header to `240px` on screens below `790px`.

## Capabilities

### New Capabilities

*(None)*

### Modified Capabilities

- `rutva-deb-landing-page`: Remove header links for "Social responsability" and "Los cabos" on the Rutva & Dev page, and adjust mobile menu height to fit the remaining links.

## Impact

- **Affected Files**:
  - `/develop/vanilla/cancun-concierge/rutva-dev-airport-transfers/index.html`
  - `/develop/vanilla/cancun-concierge/css/_rutva-dev-airport-transfers.sass`
- **Dependencies/APIs**: Requires rebuilding/compiling CSS from SASS.
