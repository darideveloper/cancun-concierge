## 1. Landing Page HTML Updates

- [x] 1.1 Verify and ensure there are no static min/max constraints on `#arriving-date` and `#departing-date` inputs in `/rutva-dev-airport-transfers/index.html` to allow unrestricted date selection for private transfers.

## 2. JavaScript Implementation (DRY Calendar Logic)

- [x] 2.1 Define the DRY helper function `configureDateInput(input, defaultValue, isLocked)` in `/code/rutva-dev-airport-transfers.js` to handle setting values, toggling `readonly`, `.disabled` class, `pointer-events`, and `tabindex`.
- [x] 2.2 Update `activete_form` in `/code/rutva-dev-airport-transfers.js` to call `configureDateInput` for `#arriving-date` (defaulting to `2026-11-20`) and `#departing-date` (defaulting to `2026-11-23`), passing whether the current service is `"shared"`.
- [x] 2.3 Add `input` / `change` event listeners to `#arriving-date` and `#departing-date` that immediately reset their values back to the default event dates if a mutation occurs while `current_service_type === "shared"`.

## 3. Verification

- [x] 3.1 Verify that selecting "Private Service" defaults the inputs to November 20th and 23rd, but keeps them fully editable to allow selecting any date.
- [x] 3.2 Verify that selecting "Shared Shuttle Service" defaults the inputs to November 20th and 23rd, locks them visually (greyed out/disabled styles), prevents clicking/opening the native datepicker, and prevents keyboard focus.
- [x] 3.3 Verify that switching between "Shared Shuttle Service" and "Private Service" toggles the lock/unlock states correctly.
- [x] 3.4 Verify that form submission works correctly for both service types, and that no other client landing pages are affected.
