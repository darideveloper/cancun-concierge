## Why

To inform clients about specific shuttle service availability dates (Nov 20 for arrivals, Nov 23 for departures) specifically for the Rutva & Deb event to ensure clear communication and manage expectations for their airport transfers.

## What Changes

- Add a warning message in English specifically to the `/rutva-deb-airport-transfers` page.
- The message will be placed directly under the main H1 heading in the transportation section titles.
- Message content: "Please note: Shuttle service will be offered ONLY on the main arrival dates (Nov 20) and main departure dates (Nov 23)."
- Reduce the hero H1 font size by 20% on this specific page.

## Capabilities

### New Capabilities
- `shuttle-service-warning`: Displays a prominent warning message regarding shuttle service availability in the hero/title section of the specific event page.

### Modified Capabilities
<!-- Existing capabilities whose REQUIREMENTS are changing (not just implementation).
     Only list here if spec-level behavior changes. Each needs a delta spec file.
     Use existing spec names from openspec/specs/. Leave empty if no requirement changes. -->

## Impact

- `rutva-deb-airport-transfers/index.html`: Titles section updated with the warning message.
- `css/styles.css`: May require minor styling adjustments for the new warning text placement on event pages.
