# Cache Busting Specification

## ADDED Requirements

### Requirement: Static Asset Cache Busting
The system SHALL append version query parameters to stylesheet (CSS) and main logic script (JS) references in event-specific landing pages to ensure Cloudflare and browsers load the latest versions of the files immediately after deployment.

#### Scenario: Stylesheet loads with version parameter
- **WHEN** the user requests the `/rutva-dev-airport-transfers/` page
- **THEN** the HTML MUST link the stylesheet using a version query parameter (e.g. `../css/styles.css?v=1.0.1`)

#### Scenario: Script loads with version parameter
- **WHEN** the user requests the `/rutva-dev-airport-transfers/` page
- **THEN** the HTML MUST load the main script using a version query parameter (e.g. `../code/rutva-dev-airport-transfers.js?v=1.0.1`)
