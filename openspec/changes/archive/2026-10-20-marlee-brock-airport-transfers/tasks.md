# Tasks

## 1. Assets and Directory Setup

- [x] 1.1 Copy placeholder logo `imgs/ella-james-logo.png` to `imgs/marlee-brock-logo.png` and verify the file exists on disk
- [x] 1.2 Create `marlee-brock-airport-transfers/` directory and duplicate `ella-james-airport-transfers/index.html` into `marlee-brock-airport-transfers/index.html`, verifying file creation

## 2. Stylesheet and Script Scaffolding

- [x] 2.1 Duplicate `css/_ella-james-airport-transfers.sass` to `css/_marlee-brock-airport-transfers.sass`, rename root selectors to `header.marlee-brock, #footer.marlee-brock` and `.marlee-brock-airport-transfers`, and verify class names
- [x] 2.2 Register `@import 'marlee-brock-airport-transfers'` in `css/styles.sass`, compile with `sass css/styles.sass css/styles.css`, and verify compiled selectors in `css/styles.css`
- [x] 2.3 Duplicate `code/ella-james-airport-transfers.js` to `code/marlee-brock-airport-transfers.js`, update `stripe_user = "marlee-brock"`, and verify variable definition

## 3. HTML Markup and Namespace Updates

- [x] 3.1 Update `header`, `main`, and `footer` class attributes in `marlee-brock-airport-transfers/index.html` to `marlee-brock` and `marlee-brock-airport-transfers`, verifying they match the Sass partial
- [x] 3.2 Update logo image src to `../imgs/marlee-brock-logo.png` with alt text `"Logo Marlee & Brock"` in `marlee-brock-airport-transfers/index.html`, verifying HTML attributes
- [x] 3.3 Update transport pricing cards in `marlee-brock-airport-transfers/index.html` to display `"Marlee & Brock Price:"`, verifying text in all three cards
- [x] 3.4 Update script tag in `marlee-brock-airport-transfers/index.html` to load `../code/marlee-brock-airport-transfers.js`, verifying script reference

## 4. End-to-End Verification

- [x] 4.1 Run Sass compilation and verify that styles compile cleanly and no global rules are affected
