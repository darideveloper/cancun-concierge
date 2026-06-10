## Why

The current warning and instruction texts in the titles section of the Rutva & Dev airport transfers page need to be updated to provide clearer, more professional, and up-to-date information regarding the hotel name ("The Riviera Maya EDITION at Kanai") and shuttle services.

## What Changes

The landing page (`/rutva-dev-airport-transfers/index.html`) will be updated to display the following new title/warning texts in the hero titles section:
- **Main Heading (`<h1>`)**: "PLEASE BOOK NOW TO SECURE YOUR AIRPORT TRANSFER BETWEEN CANCUN INTERNATIONAL AIRPORT AND THE EDITION HOTEL"
- **Paragraph 1**: "To ensure a smooth and seamless arrival and departure experience, we kindly encourage you to reserve your airport transportation between Cancun International Airport and The Riviera Maya EDITION at Kanai as soon as possible."
- **Paragraph 2**: "For guests arriving or departing on any day, **private transportation service** is available upon request and can be arranged according to each guest’s individual travel schedule."
- **Paragraph 3**: "Please note that **shared shuttle service** will be available exclusively on the main arrival date, November 20th, and the main departure date, November 23rd."
- **Paragraph 4**: "For your convenience, we recommend securing your official transportation in advance. Kindly note that Uber pickups are not permitted at the arrivals area of Cancun International Airport."
- **Layout Styling**: Set a `max-width` of `1000px`, center alignment, and reduced vertical margins (both `margin-top` and `margin-bottom` set to `8px`) for all text elements (the `h1` and `p` tags) in the titles section of this page only.

## Capabilities

### New Capabilities
*(None)*

### Modified Capabilities
- `shuttle-service-warning`: Modify the warning and instruction requirements to replace the old shuttle and Uber warnings with the new four detailed paragraphs.

## Impact

- **Affected Files**:
  - [/develop/vanilla/cancun-concierge/rutva-dev-airport-transfers/index.html](file:///develop/vanilla/cancun-concierge/rutva-dev-airport-transfers/index.html): Updates the heading and warning paragraphs inside `.titles.regular-width`.
  - [/develop/vanilla/cancun-concierge/css/_rutva-dev-airport-transfers.sass](file:///develop/vanilla/cancun-concierge/css/_rutva-dev-airport-transfers.sass): Adds width limitations, auto centering margins, bottom margins to the titles text selector, and reduces top margin of `.shuttle-warning` paragraphs to `8px`.
  - [/develop/vanilla/cancun-concierge/css/styles.css](file:///develop/vanilla/cancun-concierge/css/styles.css): Compiled CSS stylesheet output.
