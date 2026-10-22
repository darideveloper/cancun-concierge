# Proposal

## Why

Marlee & Brock's event takes place at Hotel Esencia, requiring bespoke multi-vehicle options (Van, SUV, Sprinter) with event-specific pricing and destination hotel routing instead of single-van Cancun Hotel Zone defaults.

## What Changes

- Add multi-vehicle selection cards for Van (1 - 6 passengers), SUV (1 - 4 passengers), and Sprinter (1 - 12 passengers).
- Implement interactive step flow: selecting a vehicle displays transfer direction options with dynamically updated rates and a back button to switch vehicles.
- Update transfer pricing:
  - Van: $180.00 USD one-way ($360.00 USD round-trip)
  - SUV: $238.00 USD one-way ($476.00 USD round-trip)
  - Sprinter: $302.00 USD one-way ($604.00 USD round-trip)
- Update pricing info note to `"Prices are per vehicle (not per person). "` and remove the single-van luggage text.
- Update hotel dropdown options to `"Hotel Esencia"` and `"Other"`, with the custom hotel disclaimer updated to `"Riviera Maya area only"`.
- Dynamically update passenger select options in the form to match the chosen vehicle's capacity.
- Add back button styling in `css/_marlee-brock-airport-transfers.sass` and recompile `css/styles.css`.

## Capabilities

### New Capabilities
<!-- None -->

### Modified Capabilities
- `marlee-brock-landing-page`: Update transfer options to multi-vehicle selection (Van, SUV, Sprinter), configure event pricing with doubled round-trip rates, update hotel destination to Hotel Esencia with Riviera Maya disclaimer, and update vehicle disclosure note.

## Impact

- Files modified:
  - `marlee-brock-airport-transfers/index.html`
  - `code/marlee-brock-airport-transfers.js`
  - `css/_marlee-brock-airport-transfers.sass`
  - `css/styles.css`
- Scoped strictly to the Marlee & Brock landing page with zero impact on other client landing pages.
