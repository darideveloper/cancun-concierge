## Context

The rutva-deb-airport-transfers page currently lists 3 hotel options in both arriving/departing dropdowns: "Hotel Edition" (selected), "Conrad Tulum Riviera Maya", and "Other" (free-text). The Conrad option is unused — the wedding group only stays at Hotel Edition.

## Goals / Non-Goals

**Goals:**
- Remove "Conrad Tulum Riviera Maya" from both hotel `<select>` dropdowns
- Keep "Hotel Edition" as the pre-selected default and "Other" as the only alternative

**Non-Goals:**
- No changes to styles, JS pricing, Stripe integration, or other page functionality
- No changes to other event pages (kiana-swaroop, ella-james, etc.)

## Decisions

- **Simple removal over conditional logic**: Rather than dynamically hiding/showing options via JS, just delete the `<option>` elements. Simpler, zero runtime cost, no JS changes needed.

## Risks / Trade-offs

- None. This is a trivial DOM removal with no downstream dependencies.
