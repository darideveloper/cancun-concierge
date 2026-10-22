# Tasks

## 1. Sass Variables & Palette Configuration

- [x] 1.1 In `css/_marlee-brock-airport-transfers.sass`, update color variables to the Cannon Wedding palette (`$color-primary: #042179`, `$color-dark: #193585`, `$color-bg: #eae9da`, `$color-black: #042179`, `$color-white: #ffffff`, `$color-accent: #c2e1ff`) and verify variable declarations
- [x] 1.2 In `css/_marlee-brock-airport-transfers.sass`, set `background-color: $color-bg` on `body.marlee-brock` and `main.marlee-brock-airport-transfers`, and set white card background on `.cards.transport .card` to ensure high contrast against the linen background

## 2. Component Theme Styling & Controls

- [x] 2.1 Update header and footer rules in `css/_marlee-brock-airport-transfers.sass` to use `$color-dark` (`#193585`) with white text, and update CTA button styling with `#193585` background and hover inversion
- [x] 2.2 Update hero titles banner, active checkbox fill, price labels, and form input focus/borders in `css/_marlee-brock-airport-transfers.sass` to utilize `$color-primary` (`#042179`) and `$color-dark` (`#193585`)
- [x] 2.3 Update `.buttons button.back svg` fill to `$color-dark` and `.selected-vehicle-badge span.vehicle-title` to `$color-dark` in `css/_marlee-brock-airport-transfers.sass`

## 3. Compilation & Verification

- [x] 3.1 Recompile Sass stylesheets with `sass css/styles.sass css/styles.css` and verify clean compilation without syntax errors
- [x] 3.2 Inspect compiled `css/styles.css` to verify that all new color rules are correctly scoped under `header.marlee-brock`, `#footer.marlee-brock`, and `.marlee-brock-airport-transfers` without impacting global rules
