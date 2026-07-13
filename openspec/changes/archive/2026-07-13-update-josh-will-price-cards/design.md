## Context

The Josh & Will airport transfer page has 3 price cards (arriving, departing, round trip) each showing two price lines: "Regular price:" and "Josh & Will Price:" with placeholder `0 USD`. Prices are stored in a JS `prices` object keyed by vehicle type × transport direction. Three changes needed: rebrand the price label, remove the regular price line, and update all rates.

## Goals / Non-Goals

**Goals:**
- Replace "Josh & Will Price:" → "Price:" in all 3 direction cards
- Remove the `.regular-price` element from all 3 direction cards
- Update JS price object with new rates per vehicle type

**Non-Goals:**
- No structural or layout changes to the cards beyond the removals
- No CSS changes
- No backend/API changes — prices remain hardcoded in JS

## Decisions

1. **HTML text change in index.html** — update the label directly in the 3 card templates and delete the `<p class="regular-price">` block from each.
2. **Prices stored as `[regular, josh-will]` pairs** — both values will be set to the new uniform price. The regular price element is removed from the UI, but the array format stays intact to avoid JS refactoring.
3. **Regular price element removed from HTML + JS** — Since only "Price:" remains per card, the regular-price DOM node and the JS code that queries `.regular-price > span` are removed together. Removing one without the other causes a TypeError.

## Risks / Trade-offs

- [Coverage] The `prices` object still has a `[regular, josh-will]` pair even though regular isn't shown. → Acceptable; refactoring the data structure has no visible benefit. The JS only accesses index `[1]` now since the regular query was removed.
- [Stale data] Hardcoded prices require a code deploy to change. → Acceptable for this static site.
