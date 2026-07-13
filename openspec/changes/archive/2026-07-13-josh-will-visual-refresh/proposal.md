## Why

The Josh & Will airport transfer page used a muted teal/grey color palette (`#bccacd` surfaces, `#6c6c6c` text, `#4f492f` accents) that didn't align with the warm, earthy wedding brand. Text readability suffered — light cream text (`#fbe7c1`) on white backgrounds was nearly invisible. The grey header logo also lacked contrast against the updated sage green header. These changes bring the page in line with Josh & Will's visual identity while fixing accessibility issues.

## What Changes

- **Color palette overhaul**: Replaced all four base color variables (`$color-dark`, `$color-primary`, `$color-black`, `$color-d`) with a sage green + warm cream + dark forest scheme
- **Header logo**: Swapped `logo-grey.webp` → `logo-white.png` for contrast on the sage green header background
- **Text readability on white backgrounds**: Added `$color-text: #c9ad85` (dark beige) and applied it to all `h2` headings, `.info` text, and `.transportation.details .card h3` service names that sit on white page backgrounds
- **TOP button color**: Matched the "TOP" link text and its arrow SVG icon to `$color-text` so it harmonizes with the new palette
- **UI opacity cleanup**: Removed translucent `rgba()` wrappers on card text colors, checkbox borders, and hover fills, replacing with solid colors
- **Hero overlay**: Changed from teal tint (`rgba(188,202,205,0.18)`) to dark overlay (`rgba(0,0,0,0.35)`) for text readability
- **Hero text-shadow**: Changed from dark grey to black for cleaner appearance
- **FAQ title background**: Changed from dark grey (`#6c6c6c`) to sage green (`#6a725b`) matching the palette
- **Header nav link hover**: Changed from translucent dark grey to translucent white
- **Input/select/button color**: Split from general text styling to use `$color-dark` instead of `$color-black`

## Capabilities

### New Capabilities
- `text-readability`: Dark beige text color (`$color-text: #c9ad85`) for headings and body text rendered over white page backgrounds to ensure WCAG-compliant contrast ratios
- `top-button-theme`: "TOP" scroll-to-top button's text and arrow SVG icon styled with `$color-text` to match the updated palette

### Modified Capabilities
- `josh-will-visual-theme`: Color palette changed from teal/grey (`#bccacd`/`#6c6c6c`/`#4f492f`) to sage/cream/forest (`#6a725b`/`#fbe7c1`/`#4f5545`). Hero overlay changed from teal tint to dark overlay. FAQ title backgrounds changed from dark grey to sage green. All translucent `rgba()` color values on card elements, checkboxes, and hover states replaced with solid equivalents.
- `josh-will-landing-page`: Header logo source changed from `imgs/logo-grey.webp` to `imgs/logo-white.png`
- `hero-overlay-darkening`: Already matches current implementation — no change needed

## Impact

- `css/_josh-will-airport-transfers.sass`: All color variable values replaced; new `$color-text` variable added; new rules for `h2`, `.info`, `.transportation.details .card h3`, `#footer.josh-will .wrapper-btn .btn.footer` and its `svg`; `p, a, span, label` split from `input, select, button`; opacity wrappers removed from card/checkbox/hover selectors
- `css/styles.css`: Compiled output mirroring all Sass changes
- `josh-will-airport-transfers/index.html`: Header logo `src` attribute updated from `logo-grey.webp` to `logo-white.png`
- No API, dependency, or system-level changes
