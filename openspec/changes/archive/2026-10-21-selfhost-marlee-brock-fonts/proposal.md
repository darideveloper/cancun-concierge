# Proposal

## Why

The Marlee & Brock airport transfers page currently uses external Google Fonts (`Montserrat`, `Vast Shadow`, and `Vampiro One`) which were temporary placeholders and do not match the authentic wedding stationery and website typography on `cannonwedding.com`. Self-hosting the wedding's exact font assets (`Agrandir Tight`, `Caslon #540 Italic`, and `Jimmy Script`) establishes brand authenticity, eliminates external network requests to Google Fonts, and ensures fast, reliable local font delivery.

## What Changes

- **Self-host brand font assets**: Copy the authentic font files from downloaded assets into `fonts/`:
  - `fonts/Agrandir-Tight-Medium.woff` (from `f09272f12e61ef1b6512e56af9b09fc9.woff`)
  - `fonts/Caslon-540-Italic.woff` (from `3964f852757a10c50b492dc39c9c7590.woff`)
  - `fonts/Jimmy-Script.woff` (from `187d53cfec4e68fadaabb27d2f4f8a85.woff`)
- **Declare local `@font-face` rules**: In `css/_marlee-brock-airport-transfers.sass`, declare `@font-face` rules for `Agrandir Tight`, `Caslon #540`, and `Jimmy Script` referencing the local font files under `../fonts/`.
- **Update font variables**: Map typography roles in `css/_marlee-brock-airport-transfers.sass` to the self-hosted families:
  - `$font-regular: 'Agrandir Tight', sans-serif`
  - `$font-title: 'Caslon #540', serif`
  - `$font-highlight: 'Jimmy Script', cursive`
- **Apply typography hierarchy**:
  - Main titles and headings use `Caslon #540` / `Jimmy Script` for romantic wedding styling.
  - Body text, buttons, labels, and form controls use `Agrandir Tight` for clean, modern readability.
- **Remove external Google Fonts**: Remove the Google Fonts `<link rel="preconnect">` and `<link href="...Montserrat...">` tags from `marlee-brock-airport-transfers/index.html`.
- **Compile Sass to CSS**: Compile `css/styles.sass` into `css/styles.css` with Dart Sass, ensuring all typography rules remain scoped.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `marlee-brock-visual-theme`: Add requirements for self-hosted typography (`Agrandir Tight`, `Caslon #540`, and `Jimmy Script`), local `@font-face` declarations, and elimination of external font dependencies.

## Impact

- Adds three font files to the `fonts/` directory.
- Updates `css/_marlee-brock-airport-transfers.sass` and regenerates `css/styles.css`.
- Modifies `<head>` of `marlee-brock-airport-transfers/index.html`.
- No impact on any other client landing pages or shared global styles.
