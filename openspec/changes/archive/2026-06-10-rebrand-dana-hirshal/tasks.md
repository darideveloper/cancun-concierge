## 1. Setup & Resource Copying

- [x] 1.1 Copy `code/serena-gabriel-airport-transfers.js` to `code/dana-hirshal-airport-transfers.js`
- [x] 1.2 Copy `css/_serena-gabriel-airport-transfers.sass` to `css/_dana-hirshal-airport-transfers.sass`

## 2. Implement Script Updates

- [x] 2.1 Update `stripe_user` to `"dana-hirshal"` in `code/dana-hirshal-airport-transfers.js`

## 3. Implement Style Updates

- [x] 3.1 Replace selectors and class names (e.g., `.serena-gabriel-airport-transfers` and `serena-gabriel`) with their `dana-hirshal` counterparts in `css/_dana-hirshal-airport-transfers.sass`
- [x] 3.2 Map logo assets in `css/_dana-hirshal-airport-transfers.sass` to current/placeholder files
- [x] 3.3 Add `@import 'dana-hirshal-airport-transfers'` to `css/styles.sass`

## 4. Rebrand HTML Page

- [x] 4.1 Update classes on the `<header>`, `<main>`, and `<footer>` elements in `dana-hirshal-airport-transfers/index.html`
- [x] 4.2 Rebrand all user-facing name occurrences of "Serena & Gabriel" and "Serena & Gabe" to "Dana & Hirshal" in `dana-hirshal-airport-transfers/index.html`
- [x] 4.3 Link the new controller script `../code/dana-hirshal-airport-transfers.js` in `dana-hirshal-airport-transfers/index.html`

## 5. Verification

- [x] 5.1 Compile Sass files to verify no syntax errors
- [x] 5.2 Load the page to verify that the branding elements render correctly with classes applied
- [x] 5.3 Verify that the submit action sends the payload with the `"dana-hirshal"` Stripe user identifier
