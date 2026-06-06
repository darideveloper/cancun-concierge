## Context

The branding update from "Hilton Tulum Riviera Maya" to "Hotel Edition" is scoped to the entire "Rutva & Deb" landing page.

## Goals / Non-Goals

**Goals:**
- Replace all instances of "Hilton Tulum Riviera Maya" with "Hotel Edition" in `rutva-deb-airport-transfers/index.html`.
- Ensure consistency across H1, FAQs, and form dropdowns.

**Non-Goals:**
- Updating any other landing pages.
- Changing "Cancun Concierge" branding.
- Updating global assets unless they contain this specific hotel name.

## Decisions

- **Direct Search and Replace**: Perform a targeted search and replace for the exact string "Hilton Tulum Riviera Maya" within the `rutva-deb-airport-transfers/` directory.
- **Maintain Other Assets**: Verify if any page-specific JS (`code/rutva-deb-airport-transfers.js`) or CSS contains the old hotel name.

## Risks / Trade-offs

- **[Risk] Partial Updates** → [Mitigation] Use a global search within the specific directory to catch every instance.
- **[Risk] JS Logic Dependency** → [Mitigation] Check if the hotel name string is used in JS for pricing or validation.
