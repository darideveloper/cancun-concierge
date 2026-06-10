## Why

The wedding couple (Dana & Hirshal) has changed their venue from Nizuc Resort & Spa to **SLS Playa Mujeres**. All guest-facing content on the airport transfer landing page must reflect the correct hotel name to avoid confusion at pickup/dropoff.

## What Changes

- Update the hero H1 title: replace "Nizuc Resort & Spa" → "SLS Playa Mujeres"
- Update the arriving-hotel `<select>` default option value and label
- Update the departing-hotel `<select>` default option value and label
- Update the FAQ "How do I find Cancun Concierge…" answer text
- Update the FAQ "How do I pay…" answer text

## Capabilities

### New Capabilities
<!-- No new capabilities being introduced -->

### Modified Capabilities
- `dana-hirshal-landing-page`: Hotel venue name in landing page copy and booking form options changes from "Nizuc Resort & Spa" to "SLS Playa Mujeres"

## Impact

- **File**: `dana-hirshal-airport-transfers/index.html` — 5 text locations updated
- **No logic changes**: The JS controller (`code/dana-hirshal-airport-transfers.js`) reads form values generically; only HTML text/values change
- **No CSS changes**: Styling is unaffected
- **No backend changes**: Stripe payload will carry the new hotel string automatically
