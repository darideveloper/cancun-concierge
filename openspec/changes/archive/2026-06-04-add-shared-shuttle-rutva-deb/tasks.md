## 1. HTML Layout Modifications

- [x] 1.1 Rename Suburban vehicle options to "Deluxe SUV" in the HTML, modifying labels, descriptions, and data attributes in `rutva-deb-airport-transfers/index.html`
- [x] 1.2 Insert the Service Type selector section HTML (Shared Shuttle vs. Private Service) directly below the Airport selection block in `rutva-deb-airport-transfers/index.html`

## 2. JavaScript Routing and Pricing Implementation

- [x] 2.1 Update the `prices` configuration object in `code/rutva-deb-airport-transfers.js` with new Private prices ($158 Van, $234 Sprinter, $219 Deluxe SUV) and add Shared Shuttle pricing ($52 per person)
- [x] 2.2 Update the `passengers` capacity configurations (Deluxe SUV: 4 max, Shared Shuttle: 10 max)
- [x] 2.3 Add global state variables `current_service_type` and `selected_transfer_type`
- [x] 2.4 Bind click event listeners to the new Service Type cards, enabling state tracking and visibility routing
- [x] 2.5 Modify the Airport change listener to display the Service Type selector instead of the Vehicle selector
- [x] 2.6 Modify the Vehicle card click listeners to update properties for Deluxe SUV and private pricing
- [x] 2.7 Modify the Transfer Type card click listeners to record transfer selection, display prices, and activate fields
- [x] 2.8 Implement a change listener on the `#passengers` dropdown to recalculate total prices dynamically if `current_service_type === "shared"`
- [x] 2.9 Update the Stripe form submit handler to multiply pricing by passenger count for Shared Shuttle, and construct descriptive product names (e.g. "Shared Shuttle - Airport - Hotel Transfer")
- [x] 2.10 Revise the Back Button logic to handle nested state transitions back to the Service Type and Airport selectors

## 3. Verification & Validation

- [x] 3.1 Verify Private Deluxe SUV booking and check price resolution in Stripe payload ($219 one-way)
- [x] 3.2 Verify Shared Shuttle booking flow with multiple passengers and check that correct multiplied total goes to Stripe ($52 * N)
- [x] 3.3 Ensure other pages or styling properties in the project remain completely unaffected
