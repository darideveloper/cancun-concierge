## Why

The `.titles.regular-width` heading in the dana-hirshal-airport-transfers page has margin/padding that overlaps with the gallery navigation buttons (next/back slide), blocking click events on those buttons.

## What Changes

- Add `pointer-events: none;` to the `.titles.regular-width` element in `dana-hirshal-airport-transfers/index.html` so clicks pass through to the gallery buttons underneath

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

(none)

## Impact

- `dana-hirshal-airport-transfers/index.html` — add inline style or class-based `pointer-events: none` to `.titles.regular-width`
