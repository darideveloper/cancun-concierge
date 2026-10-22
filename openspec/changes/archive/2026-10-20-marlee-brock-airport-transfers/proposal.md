# Proposal

## Why

Cancun Concierge needs a dedicated airport transportation booking landing page for Marlee & Brock's event guests. Duplicating the established `ella-james-airport-transfers` page provides a proven base structure, isolated styles, and checkout flow for upcoming customizations.

## What Changes

- Create a new client landing page directory `marlee-brock-airport-transfers/` containing `index.html` duplicated from `ella-james-airport-transfers/index.html`.
- Create client JavaScript `code/marlee-brock-airport-transfers.js` duplicated from `code/ella-james-airport-transfers.js` with `stripe_user` set to `"marlee-brock"`.
- Create Sass partial `css/_marlee-brock-airport-transfers.sass` duplicated from `css/_ella-james-airport-transfers.sass` with styles scoped under `.marlee-brock-airport-transfers` and `header.marlee-brock, #footer.marlee-brock`.
- Register `@import 'marlee-brock-airport-transfers'` in `css/styles.sass` and compile `css/styles.css`.
- Provide `imgs/marlee-brock-logo.png` (duplicated from `imgs/ella-james-logo.png` as initial placeholder).
- Update HTML elements, classes, logo references, script references, and pricing labels in `marlee-brock-airport-transfers/index.html` to reference Marlee & Brock.

## Capabilities

### New Capabilities
- `marlee-brock-landing-page`: Dedicated client landing page, scoped styles, and booking flow for Marlee & Brock duplicated from the Ella & James landing page.

### Modified Capabilities
<!-- None -->

## Impact

- New files:
  - `marlee-brock-airport-transfers/index.html`
  - `code/marlee-brock-airport-transfers.js`
  - `css/_marlee-brock-airport-transfers.sass`
  - `imgs/marlee-brock-logo.png`
- Modified files:
  - `css/styles.sass`
  - `css/styles.css`
- Isolated styles and scripts with zero impact on existing client landing pages or global styling.
