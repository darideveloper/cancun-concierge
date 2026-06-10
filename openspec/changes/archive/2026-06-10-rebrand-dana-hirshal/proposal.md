## Why

A new dedicated airport transfers landing page is required for the "Dana & Hirshal" wedding. This page was duplicated from the "Serena & Gabriel" transfers page and must be rebranded with the new names, a dedicated Stripe transaction user, and distinct styling classes to ensure customer bookings are isolated and properly routed.

## What Changes

- Rebrand user-visible text in [index.html](file:///develop/vanilla/cancun-concierge/dana-hirshal-airport-transfers/index.html) to reflect "Dana & Hirshal" instead of "Serena & Gabriel/Gabe".
- Create a dedicated JavaScript controller `code/dana-hirshal-airport-transfers.js` with the correct Stripe user identifier `dana-hirshal`.
- Link the new JavaScript controller in the HTML file instead of the original script.
- Create a dedicated stylesheet `css/_dana-hirshal-airport-transfers.sass` targeting `dana-hirshal` selectors and classes, and import it in [styles.sass](file:///develop/vanilla/cancun-concierge/css/styles.sass).
- Set up logo placeholders in the Sass stylesheet for future logo uploads.
- Retain Nizuc Resort & Spa as the hotel and use current pricing structures as placeholders until final details are provided.

## Capabilities

### New Capabilities
- `dana-hirshal-landing-page`: Specification defining the behavior, branding requirements, and Stripe routing configurations for the Dana & Hirshal page.

### Modified Capabilities
<!-- No modified capabilities -->

## Impact

- [index.html](file:///develop/vanilla/cancun-concierge/dana-hirshal-airport-transfers/index.html): HTML page modified to update branding, classes, and script references.
- `code/dana-hirshal-airport-transfers.js`: New script file created for payment payload construction and dynamic calculations.
- `css/_dana-hirshal-airport-transfers.sass`: New styling rules applied for page custom header/footer classes.
- [styles.sass](file:///develop/vanilla/cancun-concierge/css/styles.sass): Updated to compile the new stylesheet.
