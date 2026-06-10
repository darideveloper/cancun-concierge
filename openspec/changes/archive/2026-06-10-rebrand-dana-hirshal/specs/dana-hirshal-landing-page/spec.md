## ADDED Requirements

### Requirement: Rebranded Landing Page for Dana & Hirshal
The system MUST provide a rebranded landing page at `/dana-hirshal-airport-transfers/index.html` displaying event-specific branding ("Dana & Hirshal" / "Dana & Hirshal's wedding") instead of "Serena & Gabriel".

#### Scenario: User visits the Dana & Hirshal transfers page
- **WHEN** a user visits the `/dana-hirshal-airport-transfers/index.html` page
- **THEN** the heading elements, prices text, and FAQ answers MUST refer to "Dana & Hirshal" or "Dana & Hirshal's wedding"
- **AND** the page header, main body, and footer classes MUST target "dana-hirshal" or "dana-hirshal-airport-transfers"

### Requirement: Rebranded Stripe Routing and Script Controller
The landing page MUST load a dedicated JavaScript controller `code/dana-hirshal-airport-transfers.js` which routes Stripe checkout sessions using the `dana-hirshal` identifier.

#### Scenario: Submitting the booking form triggers Stripe session with correct user
- **WHEN** a user submits the booking form on the `/dana-hirshal-airport-transfers/index.html` page
- **THEN** the system MUST execute `code/dana-hirshal-airport-transfers.js`
- **AND** the payload sent to the Stripe API MUST have `user` set to "dana-hirshal"

### Requirement: Event Style Customization and Imports
The stylesheet system MUST compile styling rules for the `dana-hirshal` and `dana-hirshal-airport-transfers` selectors, imported via `css/styles.sass`.

#### Scenario: Compiled styles apply to the page layout
- **WHEN** the styles are compiled from `css/styles.sass`
- **THEN** the rules in `css/_dana-hirshal-airport-transfers.sass` MUST be included in the output stylesheet
- **AND** elements with the class `dana-hirshal` or `dana-hirshal-airport-transfers` MUST receive the defined properties
