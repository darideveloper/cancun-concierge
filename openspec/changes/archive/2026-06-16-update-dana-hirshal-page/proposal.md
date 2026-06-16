## Why

The Dana & Hirshal airport transfers page needs several content and styling updates: the "Los cabos" header link should point to a new URL, crossed-out "regular prices" should be hidden (prices are the same for this event), two unnecessary nav links must be removed, the H1 needs a line break for readability with smaller mobile font, "Refreshments" should read "Bottled waters" across all FAQs, and the booking form fieldsets overflow on mobile due to insufficient width.

## What Changes

1. **Header link "Los cabos"**: Change `href` from `https://loscabosconcierge.com/` to `https://marcodmc.com/`
2. **Hide crossed-out prices**: Remove `.regular-price` elements from transport card display (prices are identical for this event)
3. **Remove nav links**: Delete "Transportation" and "Social responsability" `<li>` from the header nav; adjust mobile nav height to fit remaining 3 links
4. **H1 line break + mobile font**: Insert `<br/>` before "SLS Playa Mujeres"; reduce font size by 30% on mobile screens
5. **"Refreshments" → "Bottled waters"**: Change text in the FAQ list item
6. **Fix mobile form fieldset overflow**: On screens <= 900px, set `.wrapper-fieldsets.three-columns` to `width: 100%` and fieldsets to `width: calc(100% - 24px)` to prevent input overflow

## Capabilities

### New Capabilities
None.

### Modified Capabilities
- `dana-hirshal-landing-page`: Header nav link URLs/items, H1 content and mobile sizing, crossed-out price visibility, FAQ text string
- `dana-hirshal-visual-theme`: CSS display rule for `.regular-price` elements; mobile header nav height; responsive H1 font-size override; mobile form wrapper/fieldset width fix

## Impact

- **File modified**: `dana-hirshal-airport-transfers/index.html` (HTML content + inline `<style>` block)
- **Sass file modified**: `css/_dana-hirshal-airport-transfers.sass` (add `display: none` for regular-price, add mobile H1 font-size override)
- **Sass file modified**: `css/_dana-hirshal-airport-transfers.sass` (override mobile nav height for `header.dana-hirshal` at `@media (max-width: 790px)`; fix mobile form fieldset widths at `@media (max-width: 900px)`)
- **Recompile**: `css/styles.sass` must be recompiled to `css/styles.css`
- **Cache bust**: Increment `?v=` query param on stylesheet link
- No other pages affected — all changes are scoped to the `.dana-hirshal` / `.dana-hirshal-airport-transfers` selectors or to this HTML file only
