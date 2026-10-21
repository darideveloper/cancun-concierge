# Tasks

## 1. CSS Hit-Testing Isolation & Styles

- [x] 1.1 In `css/_marlee-brock-airport-transfers.sass`, add `pointer-events: none` to `.transportation .titles` (allowing nested interactive elements `pointer-events: auto`) and set `position: relative; z-index: 2` on `.cards.transport` and `.buttons` to prevent any overlay click blocking. Verify by inspecting computed styles.
- [x] 1.2 Compile Sass with `sass css/styles.sass css/styles.css` and verify the compilation completes without errors and updates `css/styles.css`.

## 2. JavaScript Vehicle Selection & Back Button Flow

- [x] 2.1 Update vehicle selection logic in `code/marlee-brock-airport-transfers.js`: hide `.cards.vehicle` on selection, display `.cards.translate` and `.buttons` with the back button and selected vehicle badge.
- [x] 2.2 Implement back button click handler: hide transfer cards, back button, and form, reveal vehicle options, and reset active selection state.
- [x] 2.3 Update direction card selection logic to activate the direction card, display the booking form, and construct the correct `transport_name` and Stripe submission payload (`${current_transport_type} - ${direction}`).

## 3. HTML Structure & Verification

- [x] 3.1 Refine `marlee-brock-airport-transfers/index.html` layout to include `.buttons` section with the back button and `.selected-vehicle-badge` directly above the transfer direction cards.
- [x] 3.2 Perform end-to-end verification of the booking flow: verify vehicle selection hides cars and shows directions with working back button, direction selection opens the form, and back navigation restores vehicle choices.
