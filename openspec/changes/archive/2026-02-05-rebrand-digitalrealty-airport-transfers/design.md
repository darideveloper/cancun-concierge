# Design: Rebrand Digital Realty Airport Transfers

## Overview
The goal is to decouple the `digitalrealty-airport-transfers` page from the `rohan-karisma` branding and assets. This involves text replacement and asset redirection.

## Branding Updates
The following replacements will be made in `digitalrealty-airport-transfers/index.html`:
- "Rohan & Karisma" -> "Digital Realty"
- "Karisma & Rohan" -> "Digital Realty"
- "Logo Rohan Karisma" -> "Logo Digital Realty"
- Classes: `rohan-karisma` -> `digitalrealty`, `rohan-karisma-airport-transfers` -> `digitalrealty-airport-transfers`

## Asset Structure
### CSS
A new Sass file `_digitalrealty-airport-transfers.sass` will be created. Initially, it can be empty or contain basic overrides if needed. It must be imported in `styles.sass` to be compiled into `styles.css`.

### JavaScript
A new `digitalrealty-airport-transfers.js` will be created. 
Key updates in the JS file:
- `stripe_user`: Update if a different Stripe account is needed (currently defaulting to same as Rohan & Karisma structure but with descriptive naming).
- Price table: Currently duplicated from Rohan & Karisma, ready for future adjustments.

## File References
`index.html` will be updated to point to the new JS file:
- `<script src="../code/rohan-karisma-airport-transfers.js"></script>` -> `<script src="../code/digitalrealty-airport-transfers.js"></script>`
