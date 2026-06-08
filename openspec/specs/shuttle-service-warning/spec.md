# shuttle-service-warning Specification

## Purpose
TBD - created by archiving change create-rutva-deb-landing-page. Update Purpose after archive.

## Requirements

### Requirement: Uber Pickup Warning Message
The system SHALL display a warning message on the `/rutva-dev-airport-transfers` page to inform users that Uber pickups are not permitted at Cancun Airport arrivals.

The message text SHALL be: "Uber pickups are not permitted at Cancun Airport arrivals."

The message SHALL be displayed in English, positioned under the other shuttle service warnings in the hero section.

#### Scenario: Uber warning visibility on event page
- **WHEN** a user visits the `/rutva-dev-airport-transfers/index.html` page
- **THEN** they SHALL see the Uber pickup warning message prominently displayed below the other warning messages in the titles section.

### Requirement: Shuttle Service Warning Message
The system SHALL display a warning message on the `/rutva-dev-airport-transfers` page to inform users about the limited availability of the shuttle service.

The message text SHALL be: "Please note: Shuttle service will be offered ONLY on the main arrival dates (Nov 20) and main departure dates (Nov 23)."

The message SHALL be displayed in English.

#### Scenario: Warning visibility on event page
- **WHEN** a user visits the `/rutva-dev-airport-transfers/index.html` page
- **THEN** they SHALL see the shuttle service warning message prominently displayed below the main H1 text in the titles section.

### Requirement: Warning Styling
The warning message SHALL be styled to be easily readable and draw attention to the specific shuttle dates.

#### Scenario: Warning styling consistency
- **WHEN** the warning message is rendered on the event page
- **THEN** it SHALL be styled to be prominent, potentially using a color or background that contrasts with the surrounding text to ensure it is not missed.

### Requirement: Hero H1 Font Size Reduction
The system SHALL reduce the font size of the hero H1 (`h1.small`) on the `/rutva-dev-airport-transfers` page by 20%.

#### Scenario: Reduced font size visibility
- **WHEN** a user visits the `/rutva-dev-airport-transfers/index.html` page
- **THEN** the main instruction H1 SHALL appear 20% smaller than the default `h1.small` size.
