## Why

The Stripe user account identifier on the Rutva & Dev wedding landing page is currently misconfigured to use `"rohan-karisma-test"`. To ensure payments are routed to the correct Stripe account associated with the Rutva & Dev event, the identifier needs to be updated to `"rutva-dev"`.

## What Changes

- **Stripe Configuration**: Update the `stripe_user` constant in `code/rutva-dev-airport-transfers.js` from `"rohan-karisma-test"` to `"rutva-dev"`.

## Capabilities

### New Capabilities
<!-- None -->

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**: `code/rutva-dev-airport-transfers.js`.
- **API integration**: Stripe webhook/checkout requests sent from this page will now use the `"rutva-dev"` user identifier.
