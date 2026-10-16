# ashley-jonathan-landing-page Specification

## Purpose
Provides a dedicated, isolated booking landing page for guests of Ashley Leigh Getchman and Jonathan Marc Blank's wedding celebration at Maroma, A Belmond Hotel.
## Requirements
### Requirement: Landing page routing and structure
The system SHALL provide a dedicated landing page at `/ashley-jonathan-airport-transfers/index.html` replicated from `/rohan-karisma-airport-transfers/index.html` with all references updated to Ashley & Jonathan and Maroma, A Belmond Hotel.

#### Scenario: User visits Ashley & Jonathan transfers page
- **WHEN** a user visits `/ashley-jonathan-airport-transfers/index.html`
- **THEN** headings and FAQ content SHALL reference "Ashley & Jonathan"
- **AND** the page header, main body, and footer classes SHALL target `ashley-jonathan` and `ashley-jonathan-airport-transfers`
- **AND** the hero H1 SHALL state "PLEASE BOOK NOW AND SECURE YOUR TRANSFER FROM CANCUN INTERNATIONAL AIRPORT TO MAROMA, A BELMOND HOTEL"

#### Scenario: Page isolation from other client pages
- **WHEN** the page is loaded
- **THEN** styles and scripts SHALL be scoped strictly to `ashley-jonathan` and `ashley-jonathan-airport-transfers` without impacting any other client landing page

### Requirement: Hotel selection options
The arrival and departure hotel select dropdowns SHALL provide "Maroma, A Belmond Hotel" and "Other" options.

#### Scenario: Hotel selection
- **WHEN** a user views the arrival or departure hotel dropdown
- **THEN** "Maroma, A Belmond Hotel" SHALL be available as a selectable destination
- **AND** choosing "Other" SHALL reveal the custom hotel input field

### Requirement: Pricing card display and options
The page SHALL display vehicle options for Deluxe SUV, Van, and Sprinter, each showing only the vehicle name, its passenger capacity, and the guest price for the selected transfer type.

#### Scenario: Vehicle card content
- **WHEN** a user views a vehicle card after selecting a transfer type
- **THEN** the card SHALL display the vehicle name and capacity heading (for example "Deluxe SUV (1-4 passengers)") and the guest price
- **AND** the card SHALL NOT display an "Ashley & Jonathan Price:" label
- **AND** the card SHALL NOT display a regular or struck-through price

#### Scenario: Vehicle options available
- **WHEN** a user views transportation options
- **THEN** Deluxe SUV (1-4 passengers), Van (1-6 passengers), and Sprinter (7-12 passengers) SHALL be selectable

### Requirement: Stripe payment configuration
The landing page SHALL load `code/ashley-jonathan-airport-transfers.js` configured with Stripe user identifier `ashley-jonathan` and the production Stripe API endpoint.

#### Scenario: Form checkout submission
- **WHEN** a user completes booking information and clicks the checkout button
- **THEN** the request payload sent to `https://services.darideveloper.com/stripe-api/` SHALL have `user` set to `"ashley-jonathan"`

### Requirement: Event service details and FAQs
The service details and FAQ answers SHALL provide specific information for Ashley & Jonathan's wedding at Maroma, A Belmond Hotel.

#### Scenario: Airport greet staff FAQ
- **WHEN** a user reads the airport meeting instructions FAQ
- **THEN** the text SHALL describe staff holding a sign with Ashley & Jonathan's wedding logo escorting guests to vehicles bound for Maroma, A Belmond Hotel

### Requirement: Hero logo and fleet gallery assets
The landing page SHALL feature the couple's dedicated high-resolution wedding logo in the hero section and retain the transportation fleet vehicle photos in the gallery slider.

#### Scenario: Hero event logo rendering
- **WHEN** the landing page hero section renders
- **THEN** `.logo-event` SHALL display `../imgs/ashley-jonathan/logo.png`

#### Scenario: Fleet vehicle images preservation
- **WHEN** the transportation gallery renders
- **THEN** `.gallery .imgs` SHALL contain the fleet vehicle photos (`transportation-gallery-4.jpg`, `transportation-gallery-1.png`, `transportation-gallery-2.png`) showcasing available vehicles rather than generic hotel or destination photography

### Requirement: Transfer type option labels
The transfer type cards SHALL present the three available trip directions with guest-facing labels.

#### Scenario: Available transfer types
- **WHEN** a user views the transfer type cards
- **THEN** the options SHALL be labelled "Complimentary Airport Arrival Transportation", "Hotel - Airport Transfer", and "Round Trip Transfer"
- **AND** the labels SHALL be rendered as single-line headings without embedded HTML line breaks

#### Scenario: Complimentary arrival transfer is free
- **WHEN** a user views the Complimentary Airport Arrival Transportation option
- **THEN** its associated price SHALL be displayed as "Free"

### Requirement: Guest price rates
The landing page SHALL display the agreed guest rate for the selected vehicle and transfer type.

#### Scenario: Paid direction rates
- **WHEN** the user selects Hotel - Airport Transfer or Round Trip Transfer
- **THEN** the Deluxe SUV rate SHALL display 215.00 USD
- **AND** the Van rate SHALL display 155.00 USD
- **AND** the Sprinter rate SHALL display 244.00 USD

#### Scenario: Complimentary arrival rate
- **WHEN** the user selects Complimentary Airport Arrival Transportation
- **THEN** every vehicle rate SHALL display "Free"

