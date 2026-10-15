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
- **WHEN** the user selects the Airport - Hotel Transfer (arriving)
- **THEN** the submit button text SHALL display "Book Free Transfer"

#### Scenario: Paid transfer selected
- **WHEN** the user selects Hotel - Airport Transfer (departing) or Round Trip Transfer
- **THEN** the submit button text SHALL display "Buy now"

### Requirement: Transportation name sanitization
The system SHALL sanitize transport option titles extracted from card headings before sending them in the checkout payload.

#### Scenario: Removing line breaks and extra whitespace
- **WHEN** the user selects Round Trip Transfer containing HTML line breaks
- **THEN** the product name key in the payload SHALL be formatted as clean text "Round Trip Transfer"

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
