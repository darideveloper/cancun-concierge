## Context

The `dana-hirshal-airport-transfers` page is a standalone client booking page within the Cancún Concierge project. All per-client styles are scoped under a class matching the page slug (e.g., `.dana-hirshal-airport-transfers`) within a single shared `css/styles.css` file. The current scoped block uses a warm brown/cream palette and a wrong hero image (the event logo instead of the venue photo).

The new hero (`dana-hirshal-hero.webp`) is a painterly aerial view of SLS Playa Mujeres — teal ocean, sandy whites, lush palm greens. The proposed palette was deliberately extracted from this image, making the page feel cohesive and premium.

## Goals / Non-Goals

**Goals:**
- Swap the hero background image to `dana-hirshal-hero.webp`
- Apply the three-color client palette: `#bccacd` (header/footer/contrast), `#6c6c6c` (text), `#4f492f` (highlight)
- Add a subtle `::before` tint overlay on `.paralax` to blend the image with the new palette
- Clean up the leftover debug red border on `h2 + p`
- Ensure no visual regression on any other page

**Non-Goals:**
- Changing shared/global CSS rules
- Modifying the HTML structure of the page
- Touching any other client page's styles
- Changing typography or layout

## Decisions

### 1. Scoped CSS only — no new files
All changes live inside the `.dana-hirshal-airport-transfers { }` block in `css/styles.css`. No new stylesheet is created. This matches the established pattern for all other client pages in the project.

*Alternative considered*: A separate per-client stylesheet. Rejected — adds complexity and deviates from existing conventions.

### 2. Paralax tint via `::before` pseudo-element
Instead of a plain `background-image` swap, a `::before` pseudo-element with `background: rgba(188, 202, 205, 0.18)` and `position: absolute; inset: 0` is added to `.dana-hirshal-airport-transfers .paralax`. This creates a soft coastal wash that ties the vivid hero image to the muted `#bccacd` page palette without obscuring the image.

*Alternative considered*: No overlay (plain swap). Rejected — the hero image is vibrant and somewhat disconnected from the soft body palette without the bridge.

### 3. Highlight color `#4f492f` replaces both text-primary and CTA roles
The current `#50493f` served double duty as both body text and accent/CTA color. In the new scheme, text is lightened to `#6c6c6c` and the darker `#4f492f` is reserved exclusively for interactive/highlight elements (buttons, checkbox fills, SVG icons), while FAQ headers use the neutral grey `#6c6c6c`. This creates clearer visual hierarchy.

### 4. Input borders → `#4f492f` (olive) instead of teal
Form input borders switch from the unrelated steel blue `#4F6A9E` to `#4f492f` to maintain single-accent consistency. A teal variant was considered but would introduce a fourth color into the palette.

## Risks / Trade-offs

- **`::before` on `.paralax` requires `position: relative`** → The base `.paralax` rule at line 64 already uses `position: fixed` for parallax; the scoped override must set `position: relative` and `overflow: hidden` to contain the pseudo-element. This is a known pattern used on other client pages.
- **`rgba` alpha variants** → The current `rgba(80,73,63,x)` values must be updated to `rgba(79,73,47,x)` to match `#4f492f`. These appear in checkbox border, hover, and active states — all localized and low risk.
- **Debug border removal** → The `border: 1px solid red !important` on `h2 + p` is dead debug code with no functional role. Removing it is safe.
