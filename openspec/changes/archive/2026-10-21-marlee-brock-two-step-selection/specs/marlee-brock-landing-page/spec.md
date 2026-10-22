# Spec Delta

## ADDED Requirements

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
