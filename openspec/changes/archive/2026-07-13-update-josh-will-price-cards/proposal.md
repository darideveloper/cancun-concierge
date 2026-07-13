## Why

The Josh & Will wedding transfer page shows outdated prices and clutters each card with two price lines ("Regular price" + "Josh & Will Price"). The page should show a single clean price per option. The "Josh & Will" branding on the price label is also misleading — this is the standard transfer booking page.

## What Changes

- Change "Josh & Will Price:" text to "Price:" in all three direction cards (arriving, departing, round trip)
- Remove the `.regular-price` line from all three direction cards — only "Price: $Y" remains per card
- Update prices in JS to new rates: Van $155/$310, Suburban $210/$420, Sprinter $235/$470

## Capabilities

### New Capabilities

None — this is a content and data update to the existing transfer booking flow.

### Modified Capabilities

None — no spec-level behavior changes; only UI copy and price values are updated.

## Impact

- `josh-will-airport-transfers/index.html` — price label text update (3 occurrences) + remove regular-price element (3 occurrences)
- `code/josh-will-airport-transfers.js` — price values updated in the `prices` object; removed `.regular-price > span` query lines that referenced removed DOM elements
