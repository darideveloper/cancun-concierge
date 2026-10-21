# Proposal

## Why

In the Marlee & Brock airport transfers booking page, selecting a vehicle previously lacked an active vehicle indicator and the back button was unresponsive due to an absolute-positioned `.transportation .titles` overlay from global styles intercepting pointer clicks. Implementing a clean drill-down flow—where selecting a vehicle hides the vehicle cards and reveals the transfer direction cards alongside a working back button and selected vehicle badge—provides clear visual confirmation, clean layout progression, and reliable back navigation.

## What Changes

- Hide vehicle cards (`Van`, `SUV`, `Sprinter`) upon selection and reveal transfer direction cards (`Airport - Hotel Transfer`, `Hotel - Airport Transfer`, `Round Trip Transfer`) with dynamic prices for the chosen vehicle.
- Display a working back button `←` and selected vehicle indicator (`Selected Vehicle: [Vehicle Name & Capacity]`) above the transfer cards, allowing users to return to vehicle options at any time.
- Dynamically update passenger capacity dropdown options and helper text in the booking form based on the selected vehicle.
- Fix `.transportation .titles` hit-testing obstruction by adding `pointer-events: none` in `css/_marlee-brock-airport-transfers.sass` and positioning interactive controls with appropriate stacking (`position: relative; z-index: 2`).
- Recompile Sass into `css/styles.css`.

## Capabilities

### New Capabilities
<!-- None -->

### Modified Capabilities
- `marlee-brock-landing-page`: Update vehicle selection interaction to hide vehicles upon selection, reveal transfer direction cards with dynamic pricing, provide a working back button with selected vehicle badge, and resolve overlay hit-testing obstruction.

## Impact

- `marlee-brock-airport-transfers/index.html`: Layout structure for vehicle options, back button section with selected vehicle badge, and transfer options.
- `code/marlee-brock-airport-transfers.js`: Vehicle and direction selection event logic, back button reset, and dynamic pricing reactivity.
- `css/_marlee-brock-airport-transfers.sass` & `css/styles.css`: Pointer-events and stacking fixes for `.titles`, buttons, and transfer controls.
