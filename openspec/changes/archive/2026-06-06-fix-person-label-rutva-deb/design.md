## Context

The rutva-deb-airport-transfers booking page displays shared shuttle prices with the suffix `USD / person`. The forward slash is informal; this replaces it with `per person` for cleaner presentation.

## Goals / Non-Goals

**Goals:**
- Replace `"/ person"` with `" per person"` in the price label

**Non-Goals:**
- No changes to pricing logic, HTML structure, CSS, or other pages

## Decisions

- **Simple string replacement**: The string appears once in `code/rutva-deb-airport-transfers.js:214`. A direct find-and-replace is the safest and most minimal approach.
- **No i18n or constants needed**: Single occurrence, single language — no abstraction warranted.

## Risks / Trade-offs

- [Low] The replacement is straightforward; no impact on any other functionality.
