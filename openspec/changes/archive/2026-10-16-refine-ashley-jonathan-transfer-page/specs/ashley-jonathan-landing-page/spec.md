# Spec Delta

## Purpose

Provides a dedicated, isolated booking landing page for guests of Ashley Leigh Getchman and Jonathan Marc Blank's wedding celebration at Maroma, A Belmond Hotel.

## MODIFIED Requirements

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

## ADDED Requirements

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
