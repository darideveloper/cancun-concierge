## Context

The dana-hirshal airport transfers page uses a JavaScript `prices` object to define transfer costs for three vehicle types (Van, Sprinter, Suburban) and three transfer directions (arriving, departing, round trip). Each entry stores `[regularPrice, specialPrice]`. The prices are applied dynamically when the user selects a vehicle and transfer type, rendering them into `.regular-price > span` and `.price > span` elements on the page.

The current prices are outdated. The new prices provided by the client are flat rates — there is no longer a separate regular/discounted split; the quoted price is the all-in price for each combination.

## Goals / Non-Goals

**Goals:**
- Update the `prices` object in `code/dana-hirshal-airport-transfers.js` with the new values
- Ensure both `[0]` (regular) and `[1]` (special) price slots reflect the new rates (they will match since no discount is specified)

**Non-Goals:**
- Changing the HTML structure or UI layout
- Modifying the Stripe payment integration logic
- Updating other airport-transfer pages (e.g., ella-james, monica-vivek, etc.)

## Decisions

**Single file edit only**: The entire change is contained in `code/dana-hirshal-airport-transfers.js`. No other files need modification because prices are rendered dynamically.

**Same value for regular and special price**: The client provided one price per vehicle/direction. Since no discounted/regular split was specified, both array positions `[0]` and `[1]` will be set to the same value. This is the safest interpretation — the page will show the same price in both the "Regular price" and "Dana & Hirshal Price" fields. If a separate higher market-rate anchor is required for the "Regular price" field in the future, the array structure already supports it.

## Risks / Trade-offs

- **Stripe payment amount mismatch**: The price passed to Stripe is `current_price[1]` (the special price slot). Setting both positions to the same value ensures the Stripe charge matches what is displayed. → No risk.
- **Round-trip consistency**: Round-trip prices are not exactly 2× one-way. They are discrete values provided by the client and are set directly. → No calculation logic needed.

## Open Questions

- **Dual-price display intent**: The original design showed two distinct prices per card — a higher "Regular price" and a lower "Dana & Hirshal Price" — giving a visual discount anchor. The client provided only one price per combination. This design assumes both fields show the same value. If the client wants "Regular price" to reflect a different (higher) market rate, the `prices` array must receive two distinct values per entry and this document must be updated before implementation.
