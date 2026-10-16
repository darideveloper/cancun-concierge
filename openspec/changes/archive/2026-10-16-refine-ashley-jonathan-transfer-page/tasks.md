# Tasks

## 1. Booking Flow Reorder (type before vehicle)

- [x] 1.1 In `ashley-jonathan-airport-transfers/index.html`, move the transfer-type section (`section.cards.transport.translate`) above the vehicle section (`section.cards.transport.vehicle`)
- [x] 1.2 Remove `hide` from the transfer-type section so it is visible on load, and add `hide` to the vehicle section so it starts hidden
- [x] 1.3 Move the back-button section (`section.buttons`) to sit after the vehicle section, keeping its initial `hide` class
- [x] 1.4 In `code/ashley-jonathan-airport-transfers.js`, add `let current_direction = ""` alongside the existing selection state
- [x] 1.5 Add a `formatPrice(value)` helper that renders `0` as `"Free"` and any other value as `"<value> USD"` with two decimals
- [x] 1.6 Rewrite the transfer-type card click handler to store `current_direction` and `transport_name`, fill every vehicle card's price from `prices[vehicle][current_direction]`, reveal the vehicle section and back button, and hide the transfer-type section
- [x] 1.7 In the transfer-type click handler, clear any previously selected vehicle (`.active` class plus the stored vehicle and price) so re-selecting a direction starts clean
- [x] 1.8 Rewrite the vehicle card click handler to guard on `if (!current_direction) return`, store the vehicle in `current_transport_type`, resolve `current_price = prices[vehicle][current_direction]`, and call `activete_form(current_direction.split(" "))`
- [x] 1.9 In the vehicle click handler, set the submit label to `"Book Free Transfer"` when `current_price === 0` and `"Buy now"` otherwise, and hide only the transfer-type section so the vehicle cards remain visible as the selection summary
- [x] 1.10 Rewrite the back-button handler to hide the form, the vehicle section, and the back button; reveal the transfer-type section; clear `.active` from every card; and reset `current_direction`, `current_transport_type`, and `current_price`
- [x] 1.11 Verify in a browser that the sequence runs direction → vehicle → form, that the back button returns to the first step, and that re-selecting a direction recomputes prices without a stale `active` card

## 2. Pricing Data and Card Content

- [x] 2.1 In `code/ashley-jonathan-airport-transfers.js`, simplify `prices` from `[regular, guest]` pairs to a single guest price per vehicle and direction
- [x] 2.2 Replace all four `current_price[1]` reads with `current_price` (vehicle handler label, Stripe payload `price`, and the error-path label)
- [x] 2.3 Set the guest rates to Deluxe SUV 215.00, Van 155.00, and Sprinter 244.00 USD for both paid directions, keeping the Complimentary Airport Arrival transfer at 0
- [x] 2.4 Verify each rate renders on its matching vehicle card and that a zero rate renders as "Free"
- [x] 2.5 Confirm the submitted payload `price` equals the guest price for the selected vehicle and direction, and that the free direction submits `0`
- [x] 2.6 In `index.html`, remove the `regular-price` paragraph from each of the three vehicle cards
- [x] 2.7 In `index.html`, reduce each vehicle card's price paragraph to a bare `<p class="price"><span></span></p>`, removing the "Ashley & Jonathan Price:" label
- [x] 2.8 In `css/_ashley-jonathan-airport-transfers.sass`, delete the now-unused `p.regular-price` rule and its `span` strikethrough
- [x] 2.9 Rename the transfer-type headings to "Complimentary Airport Arrival Transportation", "Hotel - Airport Transfer", and "Round Trip Transfer", removing the `<br>` from the round-trip heading
- [x] 2.10 Verify each vehicle card renders only the vehicle name, capacity, and price, with zero `.regular-price` elements in the DOM
- [x] 2.11 Verify the Stripe payload product key uses the sanitized direction title (for example "Round Trip Transfer") and still includes `transport_vehicle`

## 3. Hero Title Banner Placement

- [x] 3.1 In `index.html`, move `<div class="titles regular-width">` from before `.gallery` to immediately after it, above the `TRANSPORTATION OPTIONS` heading
- [x] 3.2 In the Sass, replace the absolute positioning block for `.transportation .titles` with `position: relative`, `bottom: auto`, `height: auto`, and `margin-top: -60px`
- [x] 3.3 In the Sass, set `margin-top: 0` on `.transportation .titles h1, .transportation .titles p` to remove the user-agent heading margin that shrank the visible overlap
- [x] 3.4 Verify the banner's top edge sits 60px above the hero gallery's bottom edge at 1280px, 900px, and 420px
- [x] 3.5 Verify the banner never overlaps the `TRANSPORTATION OPTIONS` heading or the option cards at any tested width
- [x] 3.6 Verify the banner renders above the hero image (paint order) despite overlapping it

## 4. Containing Leaked Global Rules

- [x] 4.1 Add `display: inline-block` to `.buttons button.back` in the Ashley & Jonathan Sass to override the globally leaked `button.back { display: none }`
- [x] 4.2 Confirm `bottom: auto` on `.transportation .titles` overrides the leaked `bottom: 100px` rule and its `350px`/`400px` media variants at all widths
- [x] 4.3 Enumerate the matching CSS rules per element to confirm the scoped declarations win, and record that the unscoped rules in `css/_digitalrealty-airport-transfers.sass` remain present for other pages
- [x] 4.4 Verify the back button renders as a non-zero clickable box and that a real click returns to the first step

## 5. Responsive Layout and Mobile Fixes

- [x] 5.1 In the `max-width: 900px` block, add `gap: 15px` to the option card rows and `padding: 15px` plus `margin-bottom: 10px` to each card so stacked cards have breathing room
- [x] 5.2 In the `max-width: 900px` block, set `margin-top: 0` on the option card heading so the card title sits flush against the card's top padding
- [x] 5.3 Set `align-items: stretch` on `.cards.transport` so every card in a row matches the tallest card
- [x] 5.4 Verify the transport-type row renders equal-height cards with vertically centred contents, and that the vehicle row is unaffected
- [x] 5.5 Set the mobile card rule to `width: 95%` with `max-width: 560px`, replacing the previous `width: 50%`
- [x] 5.6 Set the mobile booking form fieldset grid to `width: 100%`, replacing the previous `width: 80%`
- [x] 5.7 Add `padding: 0` and `min-width: 0` to the booking form `fieldset` to reset the user-agent default padding that made the fieldset wider than its grid column
- [x] 5.8 Delete the `@media (max-width: 500px)` block whose card `width: 70%` and form `width: 90%` declarations were superseded or unreachable
- [x] 5.9 Verify at 320px, 360px, and 420px that the document scroll width never exceeds the viewport width
- [x] 5.10 Verify the fieldset width equals the form width at every tested mobile width
- [x] 5.11 Verify desktop is unchanged: 1280px renders a 960px three-column form with no fieldset overflow

## 6. Build and Non-Regression Verification

- [x] 6.1 Recompile with `npx sass css/styles.sass css/styles.css` and confirm a clean build with no syntax errors
- [x] 6.2 Confirm the `css/styles.css` diff contains only `.ashley-jonathan-airport-transfers`- and `.ashley-jonathan`-scoped rules
- [x] 6.3 Verify `git status` lists only the four Ashley & Jonathan files, with no other client landing page modified
- [x] 6.4 Run the full booking flow end to end in a browser: direction → vehicle → form → submit, asserting the fieldset columns, the passenger options, and the CTA label
- [x] 6.5 Confirm no page errors are raised during the booking flow
