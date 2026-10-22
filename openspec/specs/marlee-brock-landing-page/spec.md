# marlee-brock-landing-page Specification

## Purpose

Provides a dedicated, isolated airport transportation booking landing page for Marlee & Brock's event guests, duplicated from the Ella & James landing page template.

## Requirements

### Requirement: Dedicated landing page structure and routing
The system SHALL provide a dedicated landing page at `/marlee-brock-airport-transfers/index.html` supporting Hotel Esencia airport transfers with multi-vehicle selection (Van, SUV, Sprinter) and dynamic pricing.

#### Scenario: User visits Marlee & Brock landing page
- **WHEN** a user visits `/marlee-brock-airport-transfers/index.html`
- **THEN** the header, main body, and footer classes SHALL target `marlee-brock` and `marlee-brock-airport-transfers`
- **AND** vehicle selection cards for Van (1 - 6 passengers), SUV (1 - 4 passengers), and Sprinter (1 - 12 passengers) SHALL be displayed
- **AND** the pricing disclosure note SHALL state "Prices are per vehicle (not per person)."
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

### Requirement: Multi-vehicle transfer options and pricing
The system SHALL provide selectable vehicle tiers for Van, SUV, and Sprinter with dynamically calculated prices doubling for round-trip services.

#### Scenario: Vehicle selection reveals transfer pricing
- **WHEN** a user selects a vehicle tier
- **THEN** the vehicle options SHALL hide and the transfer direction cards SHALL display with that vehicle's rates
- **AND** a back button SHALL be shown to allow returning to vehicle selection

#### Scenario: One-way and round-trip rates
- **WHEN** viewing transfer direction cards for a chosen vehicle
- **THEN** Van rates SHALL be $180.00 USD for one-way and $360.00 USD for round-trip
- **AND** SUV rates SHALL be $238.00 USD for one-way and $476.00 USD for round-trip
- **AND** Sprinter rates SHALL be $302.00 USD for one-way and $604.00 USD for round-trip

### Requirement: Hotel Esencia destination routing and passenger bounds
The booking form SHALL provide Hotel Esencia routing and constrain passenger options to the selected vehicle capacity.

#### Scenario: Hotel selection options
- **WHEN** the booking form is displayed
- **THEN** the arriving and departing hotel dropdowns SHALL offer "Hotel Esencia" and "Other"
- **AND** selecting "Other" SHALL reveal the custom hotel input with a disclaimer specifying the Riviera Maya area only

#### Scenario: Dynamic passenger count limit
- **WHEN** a user selects a vehicle
- **THEN** the passenger dropdown in the form SHALL allow up to 6 passengers for Van, up to 4 for SUV, and up to 12 for Sprinter

### Requirement: Two-step vehicle and transfer selection
The system SHALL display vehicle options under the transportation heading. When a user selects a vehicle type, the vehicle options SHALL hide themselves and reveal the transfer direction options with the updated prices and a back button displaying the selected vehicle.

#### Scenario: Selecting a vehicle
- **WHEN** a user clicks a vehicle card (Van, SUV, or Sprinter)
- **THEN** the vehicle options section SHALL hide itself
- **AND** the back button and selected vehicle indicator SHALL be displayed
- **AND** the transfer direction cards SHALL be displayed with prices corresponding to the selected vehicle type

#### Scenario: Returning to vehicle options via back button
- **WHEN** a user clicks the back button
- **THEN** the transfer direction options and back button SHALL hide
- **AND** the vehicle options section SHALL be displayed again
- **AND** all active states SHALL be reset

#### Scenario: Selecting a transfer direction
- **WHEN** a user clicks a transfer direction card with a vehicle selected
- **THEN** the selected direction card SHALL receive the active class
- **AND** the booking form SHALL be displayed with fieldsets corresponding to the selected transfer type

### Requirement: Interactive control clickability and hit-testing isolation
The system SHALL ensure that background titles and overlay elements do not intercept mouse clicks or block user interaction with transfer options, back button, and controls.

#### Scenario: Unobstructed click interactions
- **WHEN** a user clicks any vehicle card, direction card, or back button in the transportation section
- **THEN** pointer events SHALL pass through background title layers (`pointer-events: none`)
- **AND** interactive cards and controls SHALL be stacked above background elements

### Requirement: Hero transportation image slider
The landing page SHALL include an interactive, auto-rotating hero image carousel above the booking flow.

#### Scenario: Image slider markup and navigation
- **WHEN** the transportation section renders
- **THEN** a `.gallery` container SHALL display preceding the transportation title banner
- **AND** the gallery SHALL contain next and back navigation buttons (`button.next` and `button.back`)
- **AND** the image container SHALL include transportation gallery images (`transportation-gallery-4.jpg`, `transportation-gallery-1.png`, and `transportation-gallery-2.png`)

#### Scenario: Slider transition and automation
- **WHEN** the page loads
- **THEN** `code/gallery.js` SHALL be loaded and manage slide translation using `move_value = 33.33`
- **AND** images SHALL automatically transition every 3 seconds until manual navigation occurs
- **AND** clicking the next or back button SHALL advance or reverse the displayed slide immediately

### Requirement: Accordion FAQ section
The landing page SHALL provide an interactive FAQ accordion section directly preceding the page footer, matching the Ashley & Jonathan transportation FAQs.

#### Scenario: FAQ markup and questions
- **WHEN** the page renders
- **THEN** a `.faqs` section SHALL be displayed before the footer containing the 5 transportation questions
- **AND** each question article SHALL contain a clickable `.title` bar with an arrow icon and an expandable answer block (`p` or `ul`)

#### Scenario: Accordion toggle interaction
- **WHEN** a user clicks any FAQ question title
- **THEN** the parent `.question` container SHALL toggle the `active` class via `code/faqs.js`
- **AND** the answer text or list SHALL expand into view and the arrow SVG icon SHALL rotate 180 degrees

### Requirement: Header logo branding and event logo transparency
The header and hero branding SHALL use high-contrast assets suited for the Deep Navy and Warm Linen palette.

#### Scenario: White header brand logo
- **WHEN** the header renders on the Marlee & Brock page
- **THEN** the Cancún Concierge logo image SHALL reference `../imgs/logo-white.png` for visibility against `#193585`

#### Scenario: Transparent event logo rendering
- **WHEN** the event logo renders
- **THEN** `imgs/marlee-brock-logo.png` SHALL have an alpha-transparent background to seamlessly overlay the `#eae9da` Warm Linen page background without a visible white bounding box
