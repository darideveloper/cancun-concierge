## Why

The Josh & Will airport transfers page currently uses "Kinfolk" (a rustic serif) for headings and "Libre Baskerville" for body text. These don't align with the modern, clean brand identity the client wants. Switching to Alegreya (titles) and Lato (body) gives a more refined, readable, and contemporary typography system.

## What Changes

- Replace heading font "Kinfolk" → "Alegreya" (Google Font)
- Replace body font "Libre Baskerville" → "Lato" (Google Font)
- Add Alegreya + Lato Google Fonts `@import` / `<link>` to the page
- Update all `.josh-will-airport-transfers` and `header.josh-will` / `#footer.josh-will` CSS font-family declarations
- Scoped exclusively to `josh-will-airport-transfers/index.html` — no other pages affected

## Capabilities

### New Capabilities
- `josh-will-typography`: Font selection, loading, and application rules for the Josh & Will branded page — covers heading font (Alegreya) and body font (Lato), with fallback stacks

### Modified Capabilities
None — no existing specs to modify.

## Impact

- **HTML**: Add two Google Fonts `<link>` tags in `<head>` of `josh-will-airport-transfers/index.html`
- **CSS**: Update ~8 `font-family` declarations in `styles.css` under `.josh-will-airport-transfers`, `header.josh-will`, and `#footer.josh-will` selectors
- **Removed**: Libre Baskerville Google Fonts `<link>` from `josh-will-airport-transfers/index.html` (wasted HTTP request — no longer used on this page)
- **No JS changes**, no API changes, no dependency additions
