# Proposal

## Why

Wedding guests attending Ashley Leigh Getchman and Jonathan Marc Blank's wedding celebration at Maroma, A Belmond Hotel (December 11, 2026) need a dedicated, private airport transfer booking page with branding, colors, and typography that match their celebration website (BlankBeach.com). The page replicates the proven `/rohan-karisma-airport-transfers` structure while isolating all styles and logic from the rest of the Cancun Concierge site.

## What Changes

- Replicate `/rohan-karisma-airport-transfers/index.html` to a new isolated landing page at `/ashley-jonathan-airport-transfers/index.html`.
- Replicate `css/_rohan-karisma-airport-transfers.sass` to `css/_ashley-jonathan-airport-transfers.sass`, completely namespaced under `.ashley-jonathan-airport-transfers`, `header.ashley-jonathan`, and `#footer.ashley-jonathan`.
- Replicate `code/rohan-karisma-airport-transfers.js` to `code/ashley-jonathan-airport-transfers.js`, configuring Stripe identifier `stripe_user = "ashley-jonathan"` and endpoint `https://services.darideveloper.com/stripe-api/`.
- Import `ashley-jonathan-airport-transfers` in `css/styles.sass` and compile via Sass compiler (`npx sass css/styles.sass css/styles.css`).
- Apply the BlankBeach visual identity:
  - Color palette: Jungle green (`#2a3a24`), Deep teal (`#3d4f35`), Ivory base (`#F4EFE3` matching logo background), Warm sand (`#e4d6bc`), Soft clay (`#8a6a4a`), and Coffee (`#4b2e1c`).
  - Google Fonts: `'Tangerine'` (script for couple name & highlights), `'Cormorant Garamond'` (serif for headings, subtitles, notices, and FAQ details), `'Cormorant SC'` (small caps for eyebrows & tracking), and `'Inter'` (scoped to form inputs and controls).
  - Assets: High-resolution wedding logo (`imgs/ashley-jonathan/logo.png`) as hero visual; fleet car images preserved in transportation gallery slider (`transportation-gallery-4.jpg`, `transportation-gallery-1.png`, `transportation-gallery-2.png`).
- Tailor copy, venue destination (`Maroma, A Belmond Hotel`), hotel dropdowns, service details, and FAQs for Ashley & Jonathan's wedding, styling FAQ answer details in elegant Cormorant Garamond serif (`1.25rem`, `line-height: 1.8`, `#4b2e1c`).

## Capabilities

### New Capabilities
- `ashley-jonathan-landing-page`: Dedicated airport transfer booking page for Ashley & Jonathan's wedding guests at Maroma, A Belmond Hotel, including custom booking flow, pricing cards, hotel options, and Stripe checkout integration.
- `ashley-jonathan-visual-theme`: BlankBeach-inspired theme styling (Jungle Green, Ivory, Coffee, Warm Sand, Soft Clay) and custom typography (Tangerine, Cormorant Garamond, Cormorant SC, Inter) applied in an isolated Sass module.

### Modified Capabilities
None.

## Impact

- **New files**:
  - `ashley-jonathan-airport-transfers/index.html`
  - `css/_ashley-jonathan-airport-transfers.sass`
  - `code/ashley-jonathan-airport-transfers.js`
- **Modified files**:
  - `css/styles.sass` (added `@import 'ashley-jonathan-airport-transfers'`)
  - `css/styles.css` (compiled output)
- **External systems**:
  - Google Fonts API (`Tangerine`, `Cormorant Garamond`, `Cormorant SC`, `Inter`)
  - Cancun Concierge Stripe API endpoint (`services.darideveloper.com/stripe-api/`) with user `ashley-jonathan`
- **Isolation guarantee**: All CSS selectors are namespaced under `.ashley-jonathan-airport-transfers`, `header.ashley-jonathan`, and `#footer.ashley-jonathan`. No other client or global pages are altered or impacted.
