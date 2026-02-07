## ADDED Requirements

### Requirement: Auto-select VAN as default vehicle
The system MUST automatically select the "VAN" vehicle option when the page loads, streamlining the booking process by skipping the initial vehicle selection step unless the user chooses to go back.

#### Scenario: Auto-select VAN on load
Given the user loads the Digital Realty Airport Transfers page
When the page finishes loading
Then the "VAN" vehicle option should be automatically selected
And the vehicle selection screen should be hidden
And the trip type selection screen should be visible
And the "Back" button should be visible

#### Scenario: Navigate back to vehicle selection
Given the user is on step 2 (trip type selection) after auto-selection
When the user clicks the "Back" button
Then the vehicle selection screen should become visible
And the trip type selection screen should become hidden
And the "Back" button should become hidden
