# Proposal: Rebrand Digital Realty Airport Transfers

## Why
The `digitalrealty-airport-transfers` page was duplicated from a wedding landing page. It needs to be rebranded to "Digital Realty" to reflect the new client and provide a clean slate for further customization with dedicated assets.

## What Changes
- Updated all visible branding text in `index.html`.
- Renamed layout classes for specific styling.
- Created dedicated CSS and JS files for independent logic and design.

## Architectural Reasoning
Following the project's convention for landing pages:
1.  **CSS**: Each landing page has its own Sass module imported into the main `styles.sass`. This keeps the styles centralized but modular.
2.  **JS**: Each landing page has a dedicated JS file in the `code/` directory to handle specific logic (prices, booking details).
3.  **HTML**: The page is kept as a static HTML file within its own directory.
