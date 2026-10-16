# ashley-jonathan-booking-flow Specification

## Purpose
Provides the booking submission flow, environment-aware endpoint routing, dynamic button labeling, title sanitization, error resilience, and completion feedback for Ashley & Jonathan airport transfers.
## Requirements
### Requirement: Dynamic API endpoint routing
The system SHALL route booking submissions to the local backend during development and to the production backend in production.

#### Scenario: Local development routing
- **WHEN** the page is accessed via localhost, 127.0.0.1, or local file system
- **THEN** the submission endpoint SHALL be `http://127.0.0.1:8000/ashley-jonathan/sale/`

#### Scenario: Production routing
- **WHEN** the page is accessed from the production domain
- **THEN** the submission endpoint SHALL be `https://omar.apps.darideveloper.com/ashley-jonathan/sale/`

### Requirement: Dynamic CTA button labeling
The system SHALL dynamically update the submit button text based on the selected transfer type.

#### Scenario: Complimentary arrival transfer selected
- **WHEN** the user selects the Complimentary Airport Arrival Transportation transfer type
- **THEN** the submit button text SHALL display "Book Free Transfer"

#### Scenario: Paid transfer selected
- **WHEN** the user selects Hotel - Airport Transfer or Round Trip Transfer
- **THEN** the submit button text SHALL display "Buy now"

### Requirement: Transportation name sanitization
The system SHALL sanitize transport option titles extracted from card headings before sending them in the checkout payload.

#### Scenario: Removing line breaks and extra whitespace
- **WHEN** the user selects the Round Trip Transfer option
- **THEN** the product name key in the payload SHALL be the sanitized single-line text "Round Trip Transfer"

### Requirement: Resilient network and error handling
The system SHALL handle network and server failures gracefully during checkout submission.

#### Scenario: API request failure
- **WHEN** the backend returns an error or the network request fails
- **THEN** an informative alert dialog SHALL notify the user
- **AND** the submit button SHALL be restored from its loading state back to its active label

### Requirement: Universal booking confirmation feedback
The system SHALL provide a universal confirmation notification when redirected after booking completion.

#### Scenario: Redirect with done parameter
- **WHEN** the landing page loads with the `?done=true` query parameter
- **THEN** an alert dialog SHALL display "Reservation confirmed! Check your email for booking details."

### Requirement: Transfer type selected before vehicle
The system SHALL present the transfer type selection as the first step and the vehicle selection as the second step.

#### Scenario: Initial page state
- **WHEN** the landing page loads
- **THEN** the transfer type cards SHALL be visible
- **AND** the vehicle cards, the back button, and the booking form SHALL be hidden

#### Scenario: Transfer type advances to vehicle selection
- **WHEN** the user selects a transfer type
- **THEN** the vehicle cards SHALL become visible
- **AND** the transfer type cards SHALL be hidden
- **AND** the back button SHALL become visible
- **AND** the booking form SHALL remain hidden

#### Scenario: Vehicle selection reveals the form
- **WHEN** the user selects a vehicle after choosing a transfer type
- **THEN** the booking form SHALL become visible
- **AND** the vehicle cards SHALL remain visible as a summary of the current selection
- **AND** the form SHALL activate the fieldsets matching the selected transfer type

#### Scenario: Vehicle selection without a transfer type
- **WHEN** the vehicle click handler runs while no transfer type has been selected
- **THEN** the handler SHALL exit without changing the form, the price, or the visible sections

### Requirement: Guest price per vehicle and transfer type
The system SHALL resolve the guest price from a single value per vehicle and transfer type, and SHALL display that value on the vehicle cards.

#### Scenario: Prices rendered for the chosen transfer type
- **WHEN** the user selects a transfer type
- **THEN** each vehicle card SHALL display the guest price for that vehicle and that transfer type
- **AND** a price of zero SHALL be displayed as "Free"

#### Scenario: Charged amount
- **WHEN** the user submits the form
- **THEN** the checkout payload `price` SHALL equal the guest price resolved for the selected vehicle and transfer type
- **AND** a zero guest price SHALL submit `price` as `0`

### Requirement: Back navigation resets the selection
The back button SHALL return the user to the transfer type step and clear the current selection.

#### Scenario: Returning to the first step
- **WHEN** the user activates the back button
- **THEN** the booking form SHALL be hidden
- **AND** the vehicle cards SHALL be hidden
- **AND** the transfer type cards SHALL be visible
- **AND** the back button SHALL be hidden
- **AND** the `active` state SHALL be cleared from every transfer type and vehicle card
- **AND** the stored transfer type, vehicle, and price SHALL be reset

#### Scenario: Reselecting after going back
- **WHEN** the user selects a different transfer type after returning to the first step
- **THEN** the vehicle prices SHALL be recomputed for the newly selected transfer type
- **AND** no previously selected vehicle SHALL remain marked as `active`

