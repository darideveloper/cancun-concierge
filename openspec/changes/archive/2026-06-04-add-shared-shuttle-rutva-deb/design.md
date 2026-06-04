## Context

The landing page `rutva-deb-airport-transfers` originally had a direct flow: Airport selection -> Vehicle Selection (Van, Sprinter, Suburban) -> Transfer Type -> Form -> Stripe checkout.
The airport selector has been removed, and the landing page now defaults to CUN (Cancun International Airport) and displays the Service Selector immediately.
We support two service types:
1. **Shared Shuttle Service**:
   - Price: $52 USD/person one-way, $104 USD/person round trip (tax included).
   - Availability: Main arrivals Nov 20th and departures Nov 23rd at CUN.
   - UI Notice: Waiting time at airport from 30 minutes to 1 hour.
   - Flow: Bypasses vehicle choice.
2. **Private Service**:
   - Van (maximum 6 passengers): $158 USD one-way, $316 USD round trip.
   - Sprinter (maximum 12 passengers): $234 USD one-way, $468 USD round trip.
   - Deluxe SUV (maximum 4 passengers): $219 USD one-way, $438 USD round trip (replacing the Suburban option).

To achieve this seamlessly without modifying global stylesheets or other landing pages, we introduced a new step in the JS wizard/routing workflow.

## Goals / Non-Goals

**Goals:**
- Provide a clear, centered, and enlarged card-based UI choice between Shared Shuttle and Private Service on page load.
- Set CUN as the default airport internally.
- Route Shared Shuttle users past vehicle selection directly to Transfer Type selection.
- Update Private Service options: rename "Suburban" to "Deluxe SUV" and adjust pricing.
- Implement dynamic price calculations (per-person pricing for Shared Shuttle vs. flat-rate per-vehicle pricing for Private).
- Maintain robust back-button navigation throughout the updated booking funnel.

**Non-Goals:**
- Modifying other pages in the codebase.
- Altering the external Stripe API backend structures.

## Decisions

### 1. User Interface: Card-based Service Selector
- **Choice**: Display the Service Type choices as centered, enlarged cards with border transitions and hover animations, omitting the Airport select dropdown.
- **Rationale**: Elevates page aesthetics, centers attention on the main service choices, and streamlines the booking funnel by removing unnecessary form inputs.

### 2. JS Architecture: Pseudo-Vehicle for Shuttle
- **Choice**: Map "Shared Shuttle" as an internal vehicle type in the `prices` and `passengers` objects (e.g. `prices[airport_name]["Shared Shuttle"]`).
- **Rationale**: This lets us reuse the existing price lookup and dropdown limit population routines with minimal refactoring.

### 3. Stripe Checkout Pricing Adjustment
- **Choice**: Apply passenger multiplier dynamically during Stripe payload generation for Shared Shuttle.
- **Rationale**: Keeps the private transfer pricing logic pure (flat rate per vehicle) while dynamically billing the correct per-person rate for shuttles.

## Risks / Trade-offs

- **Risk**: Guests select the Shared Shuttle for dates other than the main arrivals (Nov 20th) and main departures (Nov 23rd).
  - *Mitigation*: Explicit note displayed in the service selection card and form layout.
- **Risk**: Overwriting shared global CSS.
  - *Mitigation*: Limit stylesheet edits to the scoped file `css/_rutva-deb-airport-transfers.sass` and page-specific elements under `main.rutva-deb`.
