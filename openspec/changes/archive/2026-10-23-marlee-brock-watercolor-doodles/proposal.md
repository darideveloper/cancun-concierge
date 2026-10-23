# Proposal

## Why

The Marlee & Brock airport transfers landing page recently adopted the authentic Cannon Wedding "Vintage Romance" palette and self-hosted fonts. However, the page needed delicate visual flourishes and motifs from the couple's original wedding stationery (`cannonwedding.com`), balanced logo presentation, and polished card padding to deliver a luxury booking experience across desktop and mobile screens.

## What Changes

- Stage authentic scraped transparent watercolor assets in `imgs/`:
  - `marlee-brock-palm-trees.png` (Watercolor palm trees motif)
  - `marlee-brock-wedding-bouquet.png` (Watercolor floral bridal bouquet)
  - `marlee-brock-coral-blossom.png` (Dusty Coral watercolor flower motif, cleaned of stray artifacts)
- Update `marlee-brock-airport-transfers/index.html`:
  - Wrap the event logo in a `.logo-container` flanked by authentic watercolor doodles (palm trees on left, bridal bouquet on right).
  - Accent section headings ("OUR SERVICES INCLUDE" and "FAQS") with the Dusty Coral blossom motif (`.title-with-doodle`).
- Update `css/_marlee-brock-airport-transfers.sass`:
  - Style `.logo-container` and `.logo-doodle` with fluid responsive scaling, centered alignment, and `pointer-events: none`.
  - Fix broken top padding on `.transportation.details .cards .card` (`padding: 35px 20px 30px`, centered 60px SVG and `h3`).
  - Fix top padding and title misalignment on `.cards.transport .card` (`h3` margin reset to 0, `align-items: center`, balanced padding).
  - Fix mobile card padding (`padding: 16px 20px` replacing `padding: 0`).
- Compile Sass into `css/styles.css`.

## Capabilities

### Modified Capabilities
- `marlee-brock-landing-page`: Adds authentic watercolor illustrations flanking the logo and section headings, and updates card structures.
- `marlee-brock-visual-theme`: Defines styling, non-intrusive layering (`pointer-events: none`), responsive logo doodles, and balanced card padding.

## Impact

- **Affected files:**
  - `imgs/` (new watercolor PNG assets)
  - `marlee-brock-airport-transfers/index.html`
  - `css/_marlee-brock-airport-transfers.sass`
  - `css/styles.css`
- **Dependencies / Systems:** No external runtime dependencies; purely static HTML/CSS enhancement.
