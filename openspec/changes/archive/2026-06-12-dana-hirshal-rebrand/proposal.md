## Why

The `dana-hirshal-airport-transfers` page currently uses a placeholder logo image as its hero background and inherits a warm brown/cream palette that doesn't match the client's venue (SLS Playa Mujeres). The new hero image — an aerial painterly shot of the resort's beachfront — is available, and the client palette needs to shift to a coastal teal-and-olive scheme that better reflects the destination.

## What Changes

- Replace the `.paralax` hero background from `dana-hirshal-logo.webp` → `dana-hirshal-hero.webp`
- Update the primary text color from `#50493f` (warm dark brown) → `#6c6c6c` (neutral grey)
- Update the header, footer, and surface backgrounds from `#efeeec` (warm cream) → `#bccacd` (muted coastal teal)
- Keep the main page background color white (`#ffffff`) as before
- Update the highlight/CTA/accent color from `#50493f` → `#4f492f` (warm dark olive)
- Update the FAQ header background color from `#50493f` → `#6c6c6c` (neutral grey)
- Replace all `rgba(80,73,63,x)` alpha variants with `rgba(79,73,47,x)` (matching the new olive highlight)
- Update form input borders from `#4F6A9E` (steel blue) → `#4f492f` (olive, consistent with new accent)
- Add a subtle `#bccacd` tint overlay on the `.paralax` via `::before` pseudo-element to bridge the hero image with the page palette
- Remove leftover debug border (`border: 1px solid red !important`) from `.dana-hirshal-airport-transfers h2 + p`

## Capabilities

### New Capabilities
- `dana-hirshal-visual-theme`: Page-scoped CSS theme for the dana-hirshal-airport-transfers page, defining the hero image, color palette, and form/UI element styling

### Modified Capabilities
- *(none — this is a new scoped theme, not modifying existing shared capabilities)*

## Impact

- **File**: `css/styles.css` — only the `.dana-hirshal-airport-transfers` scoped CSS block (lines ~4602–4830) is affected; no shared styles touched
- **Asset**: `imgs/dana-hirshal-hero.webp` — already exists in the repo, no new files needed
- **Zero risk to other pages** — all selectors are namespaced under `.dana-hirshal-airport-transfers`
