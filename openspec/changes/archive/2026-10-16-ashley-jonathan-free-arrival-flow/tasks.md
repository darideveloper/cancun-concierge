## 1. Free arriving branch

- [x] 1.1 Branch direction-click handler on `current_direction === "arriving"`: set `current_transport_type=""`, `current_price=0`, keep `.cards.vehicle` hidden, show form directly with submit `Book Free Transfer`
- [x] 1.2 Add generic `1-12` passenger fallback in `activete_form()` when `passengers[current_transport_type]` is undefined, with "Maximum twelve passengers" helper text
- [x] 1.3 Verify free submit payload sends `transport_vehicle:""` and `price:0` to `POST .../ashley-jonathan/sale/` and follows the returned `stripe_url` (`?done=true`) confirmation path

## 2. Paid flow guard and state hygiene

- [x] 2.1 Add submit guard blocking departing / round-trip submit when `current_transport_type` is empty (alert, no fetch)
- [x] 2.2 Harden Back-button handler to clear direction, vehicle active classes, `current_transport_type`, and `current_price`, restoring direction cards
- [x] 2.3 Regression-check departing and round-trip flows: vehicle required, correct `transport_vehicle` + price, Stripe redirect intact

## 3. Verification

- [x] 3.1 Manual pass: arriving (no vehicle UI, free confirm + email), departing + vehicle (Stripe), round-trip + vehicle (Stripe), paid submit without vehicle (blocked), Back-from-free reset
- [x] 3.2 Confirm no changes to backend, HTML structure, styles, or other landings
