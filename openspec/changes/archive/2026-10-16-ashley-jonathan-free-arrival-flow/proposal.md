## Why

Arriving transfers on the Ashley & Jonathan landing are free (`price 0`), but the frontend still forces a vehicle choice before showing the form and routes every submit through the same paid-vehicle path. The backend (`ashley_jonathan/views.py SaleView`) already bypasses Stripe for free arrivals and accepts `transport_vehicle: ""`, so the mismatch lives entirely in `code/ashley-jonathan-airport-transfers.js` (plus a latent `passengers[""]` crash in `activete_form()`).

## What Changes

- Arriving (`Airport - Hotel Transfer`) flow skips the vehicle cards section entirely and goes straight to the form.
- Free arriving submissions send `transport_vehicle: ""` and `price: 0` to the existing `POST .../ashley-jonathan/sale/` endpoint; backend returns the `?done=true` confirmation redirect with no Stripe session (no backend change).
- Generic passenger range `1-12` for the free flow (vehicle-specific ranges no longer apply).
- Submit button keeps `Book Free Transfer` for arriving; paid flows keep `Buy now`.
- Departing / Round Trip flows keep the current vehicle-first behavior, plus an explicit guard blocking submit without a vehicle selection.
- Back button from a free form resets to the direction cards and clears vehicle/price state.

## Capabilities

### New Capabilities

- None — no brand-new spec area; this is a behavior change inside the existing booking flow.

### Modified Capabilities

- `ashley-jonathan-booking-flow`: arriving skips vehicle selection with `""` default; generic passengers for free flow; paid submit requires a vehicle; confirmation via existing `?done=true` redirect for both flows.

## Impact

- Frontend only: `code/ashley-jonathan-airport-transfers.js` (direction-click handler, `activete_form()` passenger fallback, submit guard, back-button reset).
- No change to `ashley-jonathan-airport-transfers/index.html` structure expected; no backend change (`ezbookingtours-store/ashley_jonathan/` already supports `price 0` + `""` vehicle).
- Scope limited to Ashley & Jonathan landing; `rohan-karisma`, `digitalrealty`, and 8 legacy pages untouched.
