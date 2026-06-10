## 1. Update Prices in JavaScript

- [x] 1.1 Open `code/dana-hirshal-airport-transfers.js` and locate the `prices` object
- [x] 1.2 Update Van prices: set `arriving` to `[127.00, 127.00]`, `departing` to `[127.00, 127.00]`, `arriving departing` to `[250.00, 250.00]`
- [x] 1.3 Update Suburban prices: set `arriving` to `[160.00, 160.00]`, `departing` to `[160.00, 160.00]`, `arriving departing` to `[315.00, 315.00]`
- [x] 1.4 Update Sprinter prices: set `arriving` to `[185.00, 185.00]`, `departing` to `[185.00, 185.00]`, `arriving departing` to `[360.00, 360.00]`

## 2. Verify

- [x] 2.1 Open the dana-hirshal-airport-transfers page in a browser and select each vehicle type + transfer direction combination to confirm the correct prices render in both the "Regular price" and "Dana & Hirshal Price" fields
- [x] 2.2 Confirm the amount submitted to the Stripe API matches the new "Dana & Hirshal Price" for each vehicle and transfer type (check `current_price[1]` is passed correctly on form submit)
