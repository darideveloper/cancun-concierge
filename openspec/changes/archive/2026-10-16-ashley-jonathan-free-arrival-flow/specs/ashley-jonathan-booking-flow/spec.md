## ADDED Requirements

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
