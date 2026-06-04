## Why

Wedding guests of Rutva & Deb need two distinct airport transfer options: a cost-efficient **Shared Shuttle Service** and an upgraded/corrected **Private Service** (which features modified pricing and updated vehicle branding). Integrating these options allows guests to choose their preferred service type during booking, while ensuring accurate pricing and correct details are submitted to Stripe.

## What Changes

- **Direct Service Type Selector**: Replace the original Airport selector dropdown with a direct choice between Shared Shuttle and Private Service on page load.
- **Centering & Sizing**: Render the Service Type choices as centered, enlarged cards to match a premium visual aesthetic.
- **Default Airport Configuration**: Set the default airport to CUN (Cancun International Airport) internally.
- **Shared Shuttle Option**: Add a $52 USD per person one-way shared shuttle service that bypasses the vehicle selector, displaying waiting time details ("30 minutes to 1 hour") and booking constraints ("arrivals Nov 20th and departures Nov 23rd").
- **Updated Private Service Pricing & Vehicle Names**: Update vehicle pricing and rename "Suburban" to "Deluxe SUV" with correct passenger capacity (max 4) and taxes included.
- **Dynamic Pricing Integration**: Calculate the Stripe checkout total dynamically based on passenger count for the shared shuttle service (priced per person).
- **Back-Button Behavior**: Adjust flow back-buttons to support navigation through the new service selector step (without airport selection).

## Capabilities

### New Capabilities
*(None)*

### Modified Capabilities
- `rutva-deb-landing-page`: Requirements will be updated to include Shared Shuttle Service options (with passenger-based pricing), revised Private Transfer vehicle pricing (Van, Sprinter, Deluxe SUV), and direct service selection on page load.

## Impact

- **Affected Files**:
  - `rutva-deb-airport-transfers/index.html` (Removed airport select block, removed hide class on service selector, renamed Suburban).
  - `code/rutva-deb-airport-transfers.js` (Removed airport_select DOM elements, configured default airport to CUN, updated pricing data objects, back button handler, and Stripe dynamic price multiplier).
  - `css/_rutva-deb-airport-transfers.sass` (Centering, scaling, hover states, and responsive styling for the service-type selector cards).
- **External APIs**:
  - `Stripe API` (no structure changes, but line items/amount will reflect either the flat vehicle price or the dynamic passenger multiplied shuttle price).
