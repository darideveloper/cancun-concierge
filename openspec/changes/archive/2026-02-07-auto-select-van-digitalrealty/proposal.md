# Auto Select VAN Vehicle by Default

## Background
The current booking form on the Digital Realty Airport Transfers page requires a manual vehicle selection step before users can proceed. We want to streamline this by automatically selecting the "VAN" option, which is the most common choice or preferred default.

## Problem
Requiring users to manually select a vehicle adds friction to the booking process, especially if the majority of users will choose the VAN option anyway.

## Solution
Implement logic to automatically select the "VAN" vehicle option when the page loads. This will:
1.  Skip the initial vehicle selection screen.
2.  Immediately present the user with trip type selection options (Arriving, Departing, Round Trip).
3.  Retain the ability for users to navigate back and change their vehicle selection if needed.

## Risks
- Users who need a different vehicle type (Deluxe or Sprinter) might not realize they can go back to change it.
    - **Mitigation**: Ensure the "Back" button is clearly visible and functional, allowing users to return to the vehicle selection step.
- The `load` event might fire before the relevant elements are fully interactive if `defer` or `async` loading strategies change in the future.
    - **Mitigation**: Use `DOMContentLoaded` or `load` event listener appropriate for script placement (currently at end of body).

## Dependencies
- Existing `code/digitalrealty-airport-transfers.js` structure and class names (`.cards.vehicle`, `data-transport-type="van"`, etc.).
