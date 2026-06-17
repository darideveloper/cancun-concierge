## Context

A `button.back { display: none }` rule in `_digitalrealty-airport-transfers.sass` sits at root indentation (not scoped). Since all partials are `@import`ed into `styles.sass` → `styles.css`, the rule applies globally — hiding the back button on the dana-hirshal page.

The dana-hirshal page has a scoped rule `.dana-hirshal-airport-transfers .buttons button.back` that sets `background`, `border`, and `cursor`, but **does not** set `display`. The global `display: none` wins by cascade.

## Goals / Non-Goals

**Goals:**
- Make the back button visible and functional on the dana-hirshal-airport-transfers page

**Non-Goals:**
- No JS changes — event handlers and step logic already work
- No HTML changes — button markup is already present
- No changes to other pages or the Digital Realty file itself
- No `!important`

## Decisions

1. **Override at the page level only** — add `display: block` to the existing scoped `.dana-hirshal-airport-transfers .buttons button.back` rule. This is the minimal fix: one property in one file.

2. **No `!important`** — `.dana-hirshal-airport-transfers .buttons button.back` has higher specificity than `button.back`, so explicit `display: block` overrides the global `display: none` naturally.

## Risks / Trade-offs

- **Partial fix** — other pages remain affected, but that's intentional per scope.
- **Rebuild needed** — if `styles.css` isn't regenerated, the fix won't take effect.
