## Context

The Stripe user account identifier on the Rutva & Dev wedding landing page is currently misconfigured to use `"rohan-karisma-test"`. To ensure payments are routed to the correct Stripe account associated with the Rutva & Dev event, the identifier needs to be updated to `"rutva-dev"`.

## Goals / Non-Goals

**Goals:**
- Update the Stripe user identifier on the Rutva & Dev landing page to `"rutva-dev"`.
- Ensure the updated identifier is sent to the Stripe proxy API during checkout.

**Non-Goals:**
- Modifying other pages in the codebase.
- Altering the external Stripe API backend structures.

## Decisions

### 1. Update `stripe_user` constant
- **Choice**: Modify `code/rutva-dev-airport-transfers.js` to change `const stripe_user = "rohan-karisma-test"` to `const stripe_user = "rutva-dev"`.
- **Rationale**: This is the single, isolated place where the Stripe user identifier is configured for the Rutva & Dev landing page.

## Risks / Trade-offs

- **[Risk]** Broken payments if `"rutva-dev"` is not configured on the backend proxy server (`services.darideveloper.com`).
  - *Mitigation*: The backend proxy configuration is external, but setting `"rutva-dev"` is required by the specification.
