# Tasks

## 1. Palette Variable Configuration

- [x] 1.1 In `css/_marlee-brock-airport-transfers.sass`, update color variables to the Vintage Romance palette (`$color-primary: #1B365D`, `$color-dark: #1B365D`, `$color-bg: #E4CBB4`, `$color-accent: #ED8A7B`, `$color-secondary: #A0C9E0`, `$color-black: #1B365D`, `$color-white: #ffffff`) and verify variable declarations
- [x] 1.2 In `css/_marlee-brock-airport-transfers.sass`, verify background colors on `body.marlee-brock` and `main.marlee-brock-airport-transfers` use `$color-bg` (`#E4CBB4`)

## 2. Component Styling Updates

- [x] 2.1 Update header and footer rules in `css/_marlee-brock-airport-transfers.sass` to use `$color-dark` (`#1B365D`) background with white text and `$color-accent` (`#ED8A7B`) hover states
- [x] 2.2 Update hero title banner background to `$color-primary` (`#1B365D`) and subtitle text styling in `css/_marlee-brock-airport-transfers.sass`
- [x] 2.3 Update card active borders and active checkbox fills to `$color-accent` (`#ED8A7B`) in `css/_marlee-brock-airport-transfers.sass`
- [x] 2.4 Update primary CTA button (`.btn.cta`) to use `$color-accent` (`#ED8A7B`) background, bold `$color-dark` (`#1B365D`) text and border, inverting on hover to `$color-dark` background with white text
- [x] 2.5 Update FAQ accordion headers and SVG arrow fills in `css/_marlee-brock-airport-transfers.sass` to use `$color-primary` (`#1B365D`) and `$color-accent` (`#ED8A7B`)

## 3. Compilation & Verification

- [x] 3.1 Recompile Sass stylesheets with `sass css/styles.sass css/styles.css` and verify clean compilation without syntax errors
- [x] 3.2 Inspect compiled `css/styles.css` to verify that all new color rules are correctly scoped under `header.marlee-brock`, `#footer.marlee-brock`, and `.marlee-brock-airport-transfers` without affecting global styles or other landing pages
