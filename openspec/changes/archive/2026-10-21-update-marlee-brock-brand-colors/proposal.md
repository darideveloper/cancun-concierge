# Proposal

## Why

The Marlee & Brock airport transfers landing page currently uses the placeholder sandy-gold theme (`#bca078`) inherited from the Ella & James template. To align the client page with the couple's wedding brand, we need to update the color palette to match the Deep Navy Blue, Warm Linen, and White aesthetic from the official Cannon Wedding website (`cannonwedding.com`) and event logo.

## What Changes

- Update brand color variables in `css/_marlee-brock-airport-transfers.sass`:
  - Primary color (`$color-primary`): Deep Royal Navy (`#042179`).
  - Dark accent (`$color-dark`): Deep Ink Navy (`#193585`, extracted from the event logo).
  - Background surface (`$color-bg`): Warm Linen / Ivory (`#eae9da`).
  - Text color (`$color-black`): Deep Navy (`#042179`) to replace harsh black (`#010101`).
  - White surface & contrast (`$color-white`): `#ffffff`.
  - Accent light tint (`$color-accent`): Soft Sky / Powder Blue (`#c2e1ff`).
- Apply the color theme across all landing page sections:
  - Header and footer backgrounds updated to `$color-dark` (`#193585`).
  - Main body and background styled with Warm Linen (`#eae9da`).
  - Hero title banner ribbons, transport option checkboxes, card prices, and active card states styled with `$color-primary` (`#042179`).
  - CTA submit button styled with `$color-dark` (`#193585`) and hover inversion.
  - Form input borders and focus glow updated to `$color-dark` / `$color-primary`.
  - Back button SVG arrow and selected vehicle badge updated to the brand navy palette.
- Recompile Sass stylesheets into `css/styles.css`.

## Capabilities

### New Capabilities
- `marlee-brock-visual-theme`: Visual styling, color palette, and branded theme for the Marlee & Brock landing page based on the Cannon Wedding reference design.

### Modified Capabilities
<!-- None -->

## Impact

- Modified files:
  - `css/_marlee-brock-airport-transfers.sass`
  - `css/styles.css`
  - `marlee-brock-airport-transfers/index.html` (if body background class or wrapper styling is needed)
- No impact on other client landing pages or shared global styles.
