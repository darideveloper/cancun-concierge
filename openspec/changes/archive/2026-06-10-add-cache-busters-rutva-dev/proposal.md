## Why

Cloudflare aggressively caches assets (CSS and JS files) for the site. When updates are made to the stylesheet (`css/styles.css`) or the airport transfers page script (`code/rutva-dev-airport-transfers.js`), users and browsers in production continue to load older cached versions of these assets, resulting in styling issues (e.g. bolded shuttle warning instead of normal font weight) and missing functional updates (e.g. calendar date locking and pre-population).

## What Changes

- Add query-string cache-busters (e.g., `?v=<version>`) to the CSS stylesheet link and JavaScript script imports within `/rutva-dev-airport-transfers/index.html`.
- Establish a convention to update these cache-busting version strings whenever future changes are deployed to these assets.

## Capabilities

### New Capabilities

*None*

### Modified Capabilities

*None*

## Impact

- `/rutva-dev-airport-transfers/index.html`: Will be modified to append cache-busting query strings to stylesheet and script link tags.
- Future workflows: Deployments of CSS or JS modifications must update the version query parameter in the HTML file references.
