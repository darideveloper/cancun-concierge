## Why

The Rutva & Deb wedding group only needs transfers to/from Hotel Edition. The "Conrad Tulum Riviera Maya" option is unused and adds unnecessary visual noise to the booking form.

## What Changes

- Remove "Conrad Tulum Riviera Maya" from the arriving and departing hotel `<select>` dropdowns on the rutva-deb-airport-transfers page
- Keep "Hotel Edition" (pre-selected) and "Other" as the only two options

## Capabilities

### New Capabilities
- *(none)*

### Modified Capabilities
- `rutva-deb-landing-page`: Hotel options narrowed to Hotel Edition (selected) and Other only

## Impact

- `rutva-deb-airport-transfers/index.html` — remove 2 `<option>` elements (lines 302 and 335)
