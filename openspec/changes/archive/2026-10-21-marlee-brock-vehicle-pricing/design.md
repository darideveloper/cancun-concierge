# Design

## Context

See `proposal.md` for motivation. The Marlee & Brock airport transfers page was duplicated from `ella-james-airport-transfers`, which had single-vehicle ($68/$136) hardcoded pricing for Hyatt Zilara Cancun. The event is hosted at Hotel Esencia in Xpu-Ha / Riviera Maya and requires three vehicle tiers (Van, SUV, Sprinter) with doubled pricing for round-trip services.

## Goals / Non-Goals

**Goals:**
- Implement the 2-step card selection UX (Vehicle -> Direction & Pricing -> Form) matching Cancun Concierge standards (`josh-will`, `dana-hirshal`).
- Configure vehicle tiers and rates:
  - Van (1 - 6 passengers): $180.00 one-way / $360.00 round-trip
  - SUV (1 - 4 passengers): $238.00 one-way / $476.00 round-trip
  - Sprinter (1 - 12 passengers): $302.00 one-way / $604.00 round-trip
- Provide a Back button (`button.back`) allowing users to switch vehicle tier.
- Update hotel options to Hotel Esencia with Riviera Maya disclaimer.
- Update pricing info note to `"Prices are per vehicle (not per person). "` and remove single-van luggage text.
- Dynamically adjust passenger count options in the booking form based on the selected vehicle.

**Non-Goals:**
- Modifying other client pages or global styling outside Marlee & Brock.
- Changing Stripe backend credentials or payment endpoints.

## Decisions

- **Multi-step card flow**: Use `.cards.vehicle` and `.cards.translate` with `.buttons.back`.
  - *Rationale*: Established standard across `josh-will`, `dana-hirshal`, `ashley-jonathan`.
  - *Alternatives considered*: Showing a 9-card grid (all combinations) - rejected due to cluttered mobile UX.
- **Passenger selection constraints**: Dynamically update `#passengers` select element with exact vehicle passenger bounds (1-6 for Van, 1-4 for SUV, 1-12 for Sprinter).
  - *Rationale*: Prevents booking more passengers than a vehicle can accommodate.
- **Sass styling for Back button**: Add `.buttons button.back` rule nested in `_marlee-brock-airport-transfers.sass`.
  - *Rationale*: Preserves namespace isolation and ensures the back arrow renders correctly without global leakage.

## Risks / Trade-offs

- **[Risk]** Form validation before vehicle or direction is selected.
  - **Mitigation**: Form remains hidden until both vehicle and transfer direction are chosen.
- **[Risk]** Unsynced compiled CSS.
  - **Mitigation**: Recompile `css/styles.sass` with Sass and verify output.
