## Context

The Josh & Will airport transfer page (`/josh-will-airport-transfers/`) is built as a standalone static HTML page with Sass-compiled CSS and vanilla JS. Its visual theme is defined entirely in `css/_josh-will-airport-transfers.sass`, a partial imported into `css/styles.sass`. All color values, typography, and layout rules for this page live in that single file. The header logo is referenced directly in the HTML.

The previous palette (teal/grey: `#bccacd`/`#6c6c6c`/`#4f492f`) didn't match Josh & Will's wedding brand. The warm cream (`#fbe7c1`) — intended as a text color for use on dark backgrounds — was applied globally, including over white page backgrounds where it was illegible.

## Goals / Non-Goals

**Goals:**
- Replace the color palette with a sage green + warm cream + dark forest scheme
- Ensure all text on white backgrounds meets readability contrast
- Swap the header logo to white for contrast on the new sage green header
- Bring the TOP button into the new palette
- Clean up translucent `rgba()` wrappers for consistent solid-color rendering

**Non-Goals:**
- No structural HTML changes (only one `src` attribute change)
- No JavaScript logic changes
- No new dependencies or build tooling
- No changes to other client pages

## Decisions

### Decision: Replace color variables in-place vs. add new variables
**Chosen**: Overwrite existing `$color-dark`, `$color-primary`, `$color-black`, `$color-d` with new values; add `$color-text` for the dark-beige readability color.
**Rationale**: The old colors are completely replaced, not augmented. Keeping the same variable names avoids refactoring every selector. Adding `$color-text` keeps the readability color distinct from `$color-black` (which remains as the warm cream for dark-background use).

### Decision: Dark beige `#c9ad85` as readability color
**Chosen**: `#c9ad85` — a darkened version of `$color-black` (#fbe7c1) that preserves the warm beige hue while providing sufficient contrast on white.
**Rationale**: Keeps visual harmony with the warm cream palette while meeting ~4.5:1 contrast ratio on white. Alternative was using `$color-dark` (#4f5545) directly, but that's a green tone that breaks the warm color family.

### Decision: Solid colors instead of `rgba()` wrappers
**Chosen**: Removed all `rgba($color-dark, 0.8)` and similar translucency wrappers, replacing with solid `$color-dark` or `$color-primary`.
**Rationale**: Translucency caused inconsistent rendering across browsers and backgrounds. With the new palette's deliberate contrast ratios, opacity is unnecessary.

### Decision: Split `input, select, button` from `p, a, span, label`
**Chosen**: Form controls now use `$color-dark` (#4f5545) while text elements use `$color-black` (#fbe7c1).
**Rationale**: Form controls need higher contrast for usability, and their dark background (e.g., CTA buttons on cream) needs matching text. The previous combined selector was a blunt instrument.

## Risks / Trade-offs

- **Color accuracy**: `$color-black` renamed semantically but kept as warm cream. Developers unfamiliar with this naming may be confused. → Mitigation: Inline comments already show computed hex values.
- **Loss of translucency**: Previous `rgba()` values created subtle depth effects on cards. Solid colors are flatter. → Trade-off accepted for consistency and readability.
- **Logo file format**: `logo-white.png` is a PNG while `logo-grey.webp` was WebP. Slightly larger file size. → Acceptable for a single logo asset.
