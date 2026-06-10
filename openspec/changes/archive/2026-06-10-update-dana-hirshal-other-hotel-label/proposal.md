## Why

The "Other hotel in Cancun Hotel Zone" label and its accompanying disclaimer text do not accurately reflect the service area for Dana Hirshal's transfer page, whose primary hotel (SLS Playa Mujeres) is in the Playa Mujeres area — not the broader Cancun Hotel Zone. Aligning the copy with the correct geographic area improves clarity for customers and sets accurate expectations about transfer pricing.

## What Changes

- The `<option>` text for the fallback hotel selection in the **Arriving** and **Departing** fieldsets changes from `"Other hotel in Cancun Hotel Zone"` to `"Other Hotel Playa Mujeres area"`.
- The informational `<p>` text inside `.hotel-other-wrapper` changes from `"Transfer rates apply to hotels located in Playa del Carmen area only"` to `"Transfer rates apply to hotels located in Playa Mujeres area only"`.
- Changes are scoped exclusively to `dana-hirshal-airport-transfers/index.html`.

## Capabilities

### New Capabilities
<!-- None — this is a copy/text update only -->

### Modified Capabilities
<!-- No spec-level behavior changes; this is purely a UI label update with no logic impact -->

## Impact

- **File affected**: `dana-hirshal-airport-transfers/index.html`
- **No JS changes** required — the `value="Other"` attribute is unchanged, so all existing event listeners continue to work without modification.
- **No CSS changes** required.
- **No other client pages** are affected.
