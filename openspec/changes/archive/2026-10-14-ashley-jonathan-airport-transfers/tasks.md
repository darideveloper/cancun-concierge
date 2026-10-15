# Tasks

## 1. Landing Page Replication and Markup

- [x] 1.1 Create `ashley-jonathan-airport-transfers/index.html` by replicating `rohan-karisma-airport-transfers/index.html` and verify the file exists
- [x] 1.2 Update root classes in `index.html` to `header.ashley-jonathan`, `<main class="ashley-jonathan-airport-transfers">`, and `#footer.ashley-jonathan`
- [x] 1.3 Add Google Fonts stylesheet link in `<head>` requesting `Tangerine`, `Cormorant Garamond`, `Cormorant SC`, and `Inter`
- [x] 1.4 Update copy, H1 banner ("PLEASE BOOK NOW AND SECURE YOUR TRANSFER FROM CANCUN INTERNATIONAL AIRPORT TO MAROMA, A BELMOND HOTEL"), hotel options ("Maroma, A Belmond Hotel"), pricing labels ("Ashley & Jonathan Price:"), and FAQ content
- [x] 1.5 Update hero presentation to feature `../imgs/ashley-jonathan/logo.png`, preserve fleet vehicle photos in gallery slider, and update script link to `../code/ashley-jonathan-airport-transfers.js`

## 2. JavaScript Controller Setup

- [x] 2.1 Create `code/ashley-jonathan-airport-transfers.js` by replicating `code/rohan-karisma-airport-transfers.js`
- [x] 2.2 Configure `stripe_user = "ashley-jonathan"` and `stripe_api = "https://services.darideveloper.com/stripe-api/"` in `code/ashley-jonathan-airport-transfers.js`
- [x] 2.3 Verify vehicle selection cards, direction tabs, price calculation, and form validation interactively in the DOM

## 3. Sass Module and Stylesheet Isolation

- [x] 3.1 Create `css/_ashley-jonathan-airport-transfers.sass` by replicating `css/_rohan-karisma-airport-transfers.sass`
- [x] 3.2 Namespace all styling rules strictly under `.ashley-jonathan-airport-transfers`, `header.ashley-jonathan`, and `#footer.ashley-jonathan`
- [x] 3.3 Apply BlankBeach color palette (Jungle Green `#2a3a24`, Deep Teal `#3d4f35`, Ivory base `#F4EFE3` matching logo background, Warm Sand `#e4d6bc`, Soft Clay `#8a6a4a`, Coffee `#4b2e1c`) and typography variables
- [x] 3.4 Append `@import 'ashley-jonathan-airport-transfers'` to `css/styles.sass`
- [x] 3.5 Compile Sass via `npx sass css/styles.sass css/styles.css` and verify clean build with zero syntax errors
- [x] 3.6 Style FAQ section accordion headers and answer details with Cormorant Garamond typography (`1.25rem`, `line-height: 1.8`, `#4b2e1c`)

## 4. Visual Verification and Non-Regression Testing

- [x] 4.1 Launch local server / browser view and verify `/ashley-jonathan-airport-transfers/index.html` visual styling, responsive layouts, and font rendering
- [x] 4.2 Verify git diff shows no alterations to any other client pages (`rohan-karisma`, `josh-will`, `dana-hirshal`) or core pages
