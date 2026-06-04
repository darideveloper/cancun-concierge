## Why

The newly created `rutva-deb-airport-transfers` page had broken styles, alignment issues, and missing images due to incorrect Sass variable naming and logic discrepancies. This change retroactively documents the fixes applied to restore visual parity with the original reference page.

## What Changes

- **Sass Fixes**: Standardized variable naming in `css/_rutva-deb-airport-transfers.sass` from hyphens to underscores (e.g., `$color-black` to `$color_black`) to align with `_base.sass`.
- **Branding Sync**: Updated typography and color variables to match the "Kiana & Swaroop" reference exactly as requested.
- **CSS Compilation**: Rebuilt `css/styles.css` using `sass` to ensure all page-specific styles are correctly included in the final bundle.
- **Logic Verification**: Verified the fixes using Playwright to ensure the computed styles (background images and colors) match the original page.

## Capabilities

### New Capabilities

- None

### Modified Capabilities

- `rutva-deb-landing-page`: Updated requirements to ensure visual consistency and correct asset loading.

## Impact

- **Global Styles**: Updated `css/styles.css` with the corrected `rutva-deb` styles.
- **Branding**: Restored the "Rutva & Deb" landing page to its intended state.
