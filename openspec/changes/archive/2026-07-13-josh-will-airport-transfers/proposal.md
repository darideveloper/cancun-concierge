## Why

Create a branded airport transfers page for Josh & Will's wedding, mirroring the existing Dana & Hirshal page pattern. Couples need dedicated pages with their own branding, hero imagery, pricing, and hotel lists so guests can book transfers under the wedding rate.

## What Changes

- New page directory `josh-will-airport-transfers/` with `index.html`
- New JS controller `code/josh-will-airport-transfers.js` (Stripe routing, pricing, form logic)
- New Sass partial `css/_josh-will-airport-transfers.sass`
- Import of the new Sass partial into `css/styles.sass`
- Copy hero image from source and place as `imgs/josh-will-hero.webp`
- Hotels set to **Belmond Maroma** and **The Fairmont Mayakoba**
- Couple name "Josh & Will" used throughout page copy
- Stripe user identifier set to `josh-will`

## Capabilities

### New Capabilities
- `josh-will-landing-page`: Branded landing page at `/josh-will-airport-transfers/` with couple-specific text, hotel venues, header/footer styling, and FAQ copy.
- `josh-will-visual-theme`: Color palette, typography, hero background image, and visual styling for the Josh & Will page.

### Modified Capabilities
- (none — this is a new page, no existing specs change)

## Impact

- **New directory**: `josh-will-airport-transfers/` with `index.html`
- **New JS file**: `code/josh-will-airport-transfers.js` — controls Stripe checkout, price display, form steps
- **New Sass file**: `css/_josh-will-airport-transfers.sass` — all couple-specific styles
- **Modified file**: `css/styles.sass` — add `@import` for the new partial, requires recompilation
- **New image**: `imgs/josh-will-hero.webp` — hero background for parallax section
- **Asset to copy**: `/home/daridev/Desktop/Downloads/hero.webp` → `imgs/josh-will-hero.webp`
- **No changes** to existing pages, global CSS, or shared JS modules
