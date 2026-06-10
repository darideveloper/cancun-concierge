## Why

The dana-hirshal airport transfer pricing is outdated and needs to be updated to reflect current rates. The new prices replace the previous ones across all vehicle types and transfer directions.

## What Changes

- Update one-way (arriving and departing) prices for Van, Suburban, and Sprinter vehicles
- Update round-trip prices for Van, Suburban, and Sprinter vehicles
- The new prices are all-in rates displayed as both the regular and special prices

New pricing:
| Vehicle | One Way | Round Trip |
|---|---|---|
| Van | $127.00 USD | $250.00 USD |
| Suburban | $160.00 USD | $315.00 USD |
| Sprinter | $185.00 USD | $360.00 USD |

## Capabilities

### New Capabilities

_None._

### Modified Capabilities
- `dana-hirshal-landing-page`: Transfer pricing values are changing in the JS price table

## Impact

- `code/dana-hirshal-airport-transfers.js`: The `prices` object must be updated with the new values
- No HTML changes required — prices are rendered dynamically by JavaScript
- No backend or payment integration changes required (prices passed to Stripe API at runtime)
