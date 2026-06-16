## Context

The Dana & Hirshal airport transfers page at `dana-hirshal-airport-transfers/index.html` needs content and visual updates. The page uses a shared CSS architecture: Sass partials in `css/` compiled to `css/styles.css`. The relevant partials are `_dana-hirshal-airport-transfers.sass` (page-specific) and `_header.sass` (shared header with mixin-based mobile breakpoints). JS in `code/dana-hirshal-airport-transfers.js` dynamically sets price values.

## Goals / Non-Goals

**Goals:**
- Update "Los cabos" link to new URL
- Hide the `.regular-price` elements (not needed when both prices match)
- Remove 2 nav links and fix mobile nav height
- Add `<br/>` in H1 and reduce mobile font by 30%
- Rename "Refreshments" → "Bottled waters"

**Non-Goals:**
- No structural/architectural changes to the page
- No changes to other brand landing pages
- No JS logic changes (prices continue to update hidden elements)

## Decisions

### 1. Sass over inline `<style>` for CSS changes
**Decision**: Add CSS rules to `_dana-hirshal-airport-transfers.sass` and `_header.sass`, then recompile `styles.sass`.
**Rationale**: Follows project convention (all styles in Sass partials). The selectors are scoped to `.dana-hirshal-airport-transfers` or `header.dana-hirshal`, so they won't affect other pages. Keeps CSS concerns centralized.

### 2. Mobile nav height via additional `_header.sass` rule
**Decision**: Add a `header.dana-hirshal` override at the 790px breakpoint in `_dana-hirshal-airport-transfers.sass` (rather than modifying the shared mixin in `_header.sass`).
**Rationale**: The `_header.sass` mixin `mobile_2(385px)` serves all regular headers. Changing the mixin to accept per-header overrides would be over-engineering for a one-off. Adding a page-specific override in `_dana-hirshal-airport-transfers.sass` is simpler and scoped.

### 3. Keep `.regular-price` in HTML + CSS `display: none`
**Decision**: Don't remove the HTML elements — hide them with CSS.
**Rationale**: The JS (`dana-hirshal-airport-transfers.js:199`) programmatically sets `regular-price > span` values. Removing the elements would require JS changes. Hiding via CSS avoids touching JS and makes future restoration trivial if prices diverge later.

### 4. H1 `<br/>` in HTML, font override in Sass
**Decision**: Insert `<br/>` directly in the H1 HTML. Add a `@media (max-width: 500px)` font-size override in `_dana-hirshal-airport-transfers.sass`.
**Rationale**: The line break is content — belongs in HTML. The font size is presentation — belongs in Sass.

## Risks / Trade-offs

- **[Low] Mobile nav height estimate**: The 240px override is an estimate. If items wrap or padding differs, the height may need adjustment. Easy to tune in one place.
- **[Low] Hidden `.regular-price` still rendered in DOM**: The JS still sets values on hidden elements. This is harmless but adds ~150 bytes of invisible DOM. Acceptable trade-off for keeping JS unchanged.
- **[None] Other pages unaffected**: All CSS selectors are scoped to `.dana-hirshal-airport-transfers` or `header.dana-hirshal`. HTML changes are in a single file. No risk of bleed.
