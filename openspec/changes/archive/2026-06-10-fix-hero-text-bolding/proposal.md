## Why

Currently, the warning paragraphs under the hero section are styled entirely as bold (`font-weight: bold`), which prevents the nested `<strong>` text elements ("private transportation service" and "shared shuttle service") from standing out visually. We need to set the general text weight to normal while keeping only the specific inline elements in bold.

## What Changes

- Modify the styling for `.shuttle-warning` paragraphs on the `rutva-dev` landing page so they render with a regular font-weight instead of bold.
- The `<h1>` text remains bold by default.
- The `<strong>` elements inside the paragraphs will stand out as bold text.

## Capabilities

### New Capabilities
*(None)*

### Modified Capabilities
- `shuttle-service-warning`: Update the styling and layout requirements to specify that the warning paragraph text should be styled as normal weight, while keeping the inline bold formatting for the key terms.

## Impact

- **Affected Files**:
  - [/develop/vanilla/cancun-concierge/css/_rutva-dev-airport-transfers.sass](file:///develop/vanilla/cancun-concierge/css/_rutva-dev-airport-transfers.sass): Modify `.shuttle-warning` styles to set `font-weight: normal` (or remove `font-weight: bold`).
  - [/develop/vanilla/cancun-concierge/css/styles.css](file:///develop/vanilla/cancun-concierge/css/styles.css): Compiled CSS stylesheet.
