# Spec Delta

## Purpose

Provides a dedicated, isolated airport transportation booking landing page for Marlee & Brock's event guests, duplicated from the Ella & James landing page template.

## ADDED Requirements

### Requirement: Dedicated landing page structure and routing
The system SHALL provide a dedicated landing page at `/marlee-brock-airport-transfers/index.html` duplicated from `/ella-james-airport-transfers/index.html` with all references, classes, and content updated for Marlee & Brock.

#### Scenario: User visits Marlee & Brock landing page
- **WHEN** a user visits `/marlee-brock-airport-transfers/index.html`
- **THEN** the header, main body, and footer classes SHALL target `marlee-brock` and `marlee-brock-airport-transfers`
- **AND** the transfer pricing cards SHALL display "Marlee & Brock Price:"
- **AND** the page SHALL load `code/marlee-brock-airport-transfers.js`

#### Scenario: Landing page style isolation
- **WHEN** the page is loaded
- **THEN** styles and scripts SHALL be scoped to `marlee-brock` and `marlee-brock-airport-transfers` without impacting other client landing pages

### Requirement: Scoped styling and stylesheet integration
The system SHALL define client-specific styles in `css/_marlee-brock-airport-transfers.sass`, imported via `css/styles.sass` and compiled into `css/styles.css`.

#### Scenario: Stylesheet compilation and selectors
- **WHEN** Sass compiles `css/styles.sass`
- **THEN** styles for Marlee & Brock SHALL be scoped under `header.marlee-brock`, `#footer.marlee-brock`, and `.marlee-brock-airport-transfers`
- **AND** no global selectors SHALL be mutated

### Requirement: Stripe payment configuration
The landing page client JavaScript SHALL configure transfer booking submissions with the `marlee-brock` Stripe user identifier.

#### Scenario: Checkout submission
- **WHEN** a user submits the transfer booking form
- **THEN** the request payload sent to the external Stripe API endpoint SHALL specify `user` as `"marlee-brock"`

### Requirement: Brand event logo asset
The landing page SHALL display an event logo referencing `imgs/marlee-brock-logo.png`.

#### Scenario: Logo rendering
- **WHEN** the landing page renders in a browser
- **THEN** the event logo image SHALL point to `../imgs/marlee-brock-logo.png` with alt text "Logo Marlee & Brock"
