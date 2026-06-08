## Why

The wedding airport transfers landing page currently uses the name "Deb" instead of the correct spelling "Dev" in the URL, asset filenames, stylesheets, and all visible text. Additionally, a new warning needs to be displayed in the hero section to inform guests that Uber pickups are not permitted at Cancun Airport arrivals.

## What Changes

- **Renaming of Route & Assets**: Rename the landing page directory, CSS stylesheet, JS script, and logo image from `rutva-deb` to `rutva-dev` to fix the husband's name spelling in the page URL and code.
- **Branding Corrections**: Replace all visible text occurrences of "Deb" with "Dev" (e.g., "Rutva & Deb's wedding" becomes "Rutva & Dev's wedding").
- **CSS Selector Refactoring**: Update all stylesheet selectors from `rutva-deb` to `rutva-dev` to maintain theme application.
- **New Warning Message**: Add the text "Uber pickups are not permitted at Cancun Airport arrivals." in the hero titles block under the existing shuttle service warnings.

## Capabilities

### New Capabilities
None.

### Modified Capabilities
- `rutva-deb-landing-page`: Rename target route and branding to `rutva-dev-landing-page`, changing all assets and page texts to reflect "Dev".
- `shuttle-service-warning`: Add a new Uber pickup warning requirement to the hero block of the landing page.

## Impact

- **Folders & Files Renamed**:
  - `rutva-deb-airport-transfers/` $\rightarrow$ `rutva-dev-airport-transfers/`
  - `css/_rutva-deb-airport-transfers.sass` $\rightarrow$ `css/_rutva-dev-airport-transfers.sass`
  - `code/rutva-deb-airport-transfers.js` $\rightarrow$ `code/rutva-dev-airport-transfers.js`
  - `imgs/rutva-deb-logo.webp` $\rightarrow$ `imgs/rutva-dev-logo.webp`
- **Updated Stylesheet Imports**: `css/styles.sass` will import the new Sass partial, compiling into `css/styles.css`.
- **Branding Update**: All HTML texts, headings, and code attributes in the landing page will be updated.
