## Why

The back button in the dana-hirshal-airport-transfers form is invisible because a global CSS rule in `_digitalrealty-airport-transfers.sass` sets `button.back { display: none }` at root scope. Users who select a wrong option in a form step cannot go back.

## What Changes

- Add `display: block` to the scoped `button.back` rule in `_dana-hirshal-airport-transfers.sass` to override the global leak
- Rebuild `styles.css` from Sass sources

## Capabilities

### New Capabilities
- *(none — pure bug fix)*

### Modified Capabilities
- *(none — no spec-level behavior changes)*

## Impact

| File | Change |
|---|---|
| `css/_dana-hirshal-airport-transfers.sass` | Add `display: block` to `.dana-hirshal-airport-transfers .buttons button.back` |
| `css/styles.css` | Regenerated from Sass sources |
