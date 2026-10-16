## Context

`code/ashley-jonathan-airport-transfers.js` currently implements `direction click → show vehicles → vehicle click → activete_form() → submit → fetch(stripe_api)`. Arriving prices are scalar `0.00` (`prices.*.arriving`), so arriving is logically free, yet the code still demands a vehicle click: `activete_form()` reads `passengers[current_transport_type]` (crashes on `""`).

The backend (`ezbookingtours-store/ashley_jonathan/views.py SaleView.post`) already handles the target workflow: `is_free_arrival` on `price == 0` or the `Airport - Hotel Transfer` product name saves `sale_done=True` with `transport_vehicule=""`, sends confirmation emails, and returns `{"stripe_url": "<landing>?done=true", "free": true}` without calling `STRIPE_FLASK_API`. Verified by live probes: missing/`""` vehicle → `200` on this endpoint (unlike `rohan-karisma`/`digitalrealty` which `500`). The `?done=true` alert handler already exists in the frontend. Constraint: static MPA, no bundler, Sass/JS edited directly; scope is Ashley & Jonathan only.

## Goals / Non-Goals

**Goals:**

- Arriving flow with no vehicle UI, `""` vehicle default, `price 0`, confirmation via existing `?done=true` redirect.
- Paid departing / round-trip flow unchanged except an explicit vehicle-required guard.
- No `passengers[""]` crash; generic `1-12` range for free flow.

**Non-Goals:**

- Backend changes, new endpoints, or model migrations.
- Changes to `rohan-karisma`, `digitalrealty`, legacy pages, HTML structure, or styling.
- New confirmation screens beyond the existing `?done=true` alert.

## Decisions

- **Branch on `current_direction === "arriving"` in the direction-click handler, not on price.** Rationale: direction is set before price/vehicle state and matches the backend's product-name detector (`airport - hotel`); price-derived branching would break if prices change. Alternative (branch on `current_price === 0`) rejected — `current_price` is only populated after a vehicle click, which is exactly the step being skipped.
- **Keep a single `sale/` POST for both flows.** Rationale: backend already forks internally (free saves + emails immediately; paid forwards to Stripe Flask API). A separate free endpoint would duplicate save/email logic. Alternative (frontend-only `?done=true` redirect with no POST) rejected — reservation would never persist.
- **Generic `1-12` passenger list via a fallback in `activete_form()`.** Rationale: minimal change — one default when `passengers[current_transport_type]` is undefined; preserves vehicle-specific ranges for paid flows. Alternative (hardcode per-direction ranges) rejected as unnecessary coupling.
- **Explicit `current_price = 0` on arriving select.** Rationale: guarantees the payload sends `price: 0` (scalar, matching the file's price model).
- **Submit guard `if (!current_transport_type && current_direction !== "arriving")` with alert + early return.** Rationale: cheapest enforcement at the single choke point; covers devtools-unhidden submits. Alternative (disable button state machine) rejected as more UI state to maintain.

## Risks / Trade-offs

- [Risk] User picks departing + vehicle, then Back, then arriving — stale vehicle/price state leaks into the free payload → Mitigation: Back handler and arriving-branch both explicitly clear `current_transport_type`, `current_price`, and active card classes.
- [Risk] Backend free-detector depends on product-name strings (`airport - hotel`) — a future title edit silently flips free bookings to paid → Mitigation: frontend also guarantees `price: 0`, and `price == 0` independently triggers the free branch.
- [Risk] `digitalrealty`-style `response.json()` without `ok` check would mis-handle errors — not applicable here; Ashley already checks `response.ok` and `data.stripe_url`, which the free response provides.
