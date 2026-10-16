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
- **WHEN** the user selects a departing or round-trip transfer type
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
- **AND** a free arriving booking with no vehicle SHALL submit `price` as `0` with an empty vehicle value

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

### Requirement: Free arrival skips vehicle selection
The system SHALL bypass the vehicle cards step when the user selects the arriving direction, and submit the booking with an empty vehicle value.

#### Scenario: Arriving direction selected
- **WHEN** the user clicks the card with `data-transport-type="arriving"` (Airport - Hotel Transfer)
- **THEN** the `.cards.vehicle` section SHALL remain hidden
- **AND** `current_transport_type` SHALL be set to `""` with `current_price` set to `0`
- **AND** the booking form SHALL be shown directly without requiring a vehicle click

#### Scenario: Free arrival payload defaults
- **WHEN** the user submits the arriving form
- **THEN** the payload `description.transport_vehicle` SHALL be `""`
- **AND** the product `price` SHALL be `0`
- **AND** the request SHALL be sent to the existing `POST .../ashley-jonathan/sale/` endpoint, which returns the `?done=true` confirmation redirect without creating a Stripe session

### Requirement: Generic passenger range for free arrivals
The system SHALL offer passengers `1-12` in the free arriving form since no vehicle constrains capacity.

#### Scenario: Arriving form passenger options
- **WHEN** the arriving form is activated without a vehicle
- **THEN** the `#passengers` select SHALL list options `1` through `12`
- **AND** the helper text SHALL reflect the generic maximum (e.g. "Maximum twelve passengers")

### Requirement: Paid flows require a vehicle
The system SHALL require an explicit vehicle selection before submitting departing or round-trip bookings.

#### Scenario: Paid submit without vehicle
- **WHEN** the user submits with `current_direction` of `departing` or `arriving departing` and `current_transport_type` is empty
- **THEN** the submit SHALL be blocked
- **AND** the user SHALL be notified to select a vehicle (e.g. alert)
- **AND** no network request SHALL be sent

#### Scenario: Paid submit with vehicle
- **WHEN** the user submits a departing or round-trip booking with a vehicle selected
- **THEN** the payload SHALL include the selected `transport_vehicle` and the corresponding `price`
- **AND** the existing Stripe checkout redirect flow SHALL apply

### Requirement: Back button resets free-flow state
The system SHALL reset direction, vehicle, and price state when Back is pressed from the free arriving form.

#### Scenario: Back from arriving form
- **WHEN** the user clicks Back while the arriving form is visible
- **THEN** the form SHALL be hidden
- **AND** the direction cards SHALL be shown again
- **AND** `current_direction`, `current_transport_type` SHALL be cleared and `current_price` reset

