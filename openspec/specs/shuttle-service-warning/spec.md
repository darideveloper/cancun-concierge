# shuttle-service-warning Specification

## Purpose
TBD - created by archiving change create-rutva-deb-landing-page. Update Purpose after archive.

## Requirements

### Requirement: Arrival and Departure Info Paragraphs
The system SHALL display introductory information on the `/rutva-dev-airport-transfers` page to encourage early booking and describe the availability of private transportation.

The first paragraph SHALL be: "To ensure a smooth and seamless arrival and departure experience, we kindly encourage you to reserve your airport transportation between Cancun International Airport and The Riviera Maya EDITION at Kanai as soon as possible."

The second paragraph SHALL be: "For guests arriving or departing on any day, **private transportation service** is available upon request and can be arranged according to each guest’s individual travel schedule."

These paragraphs SHALL be displayed in English and positioned below the main heading. The vertical margin between each text block in the titles section (heading and paragraphs) SHALL be `8px`.

#### Scenario: Info paragraphs visibility on event page
- **WHEN** a user visits the `/rutva-dev-airport-transfers/index.html` page
- **THEN** they SHALL see the arrival and departure info paragraphs displayed below the main heading.

### Requirement: Hero Text Width Limitation
The system SHALL limit the maximum width of the heading (`h1`) and warning paragraphs (`p`) in the titles section of the `/rutva-dev-airport-transfers` page to `1000px` and center them horizontally.

This width limit SHALL apply exclusively to this page.

#### Scenario: Titles section width and alignment
- **WHEN** a user visits the `/rutva-dev-airport-transfers/index.html` page
- **THEN** all text elements (the `h1` and `p` tags) in the titles section SHALL have a maximum width of `1000px` and be horizontally centered.

### Requirement: Uber Pickup Warning Message
The system SHALL display a warning message on the `/rutva-dev-airport-transfers` page to inform users that Uber pickups are not permitted at Cancun Airport arrivals.

The message text SHALL be: "For your convenience, we recommend securing your official transportation in advance. Kindly note that Uber pickups are not permitted at the arrivals area of Cancun International Airport."

The message SHALL be displayed in English, positioned under the other shuttle service warnings in the hero section.

#### Scenario: Uber warning visibility on event page
- **WHEN** a user visits the `/rutva-dev-airport-transfers/index.html` page
- **THEN** they SHALL see the Uber pickup warning message prominently displayed below the other warning messages in the titles section.

### Requirement: Shuttle Service Warning Message
The system SHALL display a warning message on the `/rutva-dev-airport-transfers` page to inform users about the limited availability of the shuttle service.

The message text SHALL be: "Please note that **shared shuttle service** will be available exclusively on the main arrival date, November 20th, and the main departure date, November 23rd."

The message SHALL be displayed in English.

#### Scenario: Warning visibility on event page
- **WHEN** a user visits the `/rutva-dev-airport-transfers/index.html` page
- **THEN** they SHALL see the shuttle service warning message prominently displayed below the main H1 text and intro paragraphs in the titles section.

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
