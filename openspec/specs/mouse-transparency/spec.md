# Capability: Mouse Transparency

## Requirements

### Requirement: Mouse Transparency for Titles Section
The system SHALL ensure that the `.transportation .titles` container on the Rutva & Deb event page does not capture mouse events (clicks, hover, scroll).

#### Scenario: Clicks pass through titles
- **WHEN** a user clicks on an area covered by the `.titles` container (but not directly on a child interactive element if any were present)
- **THEN** the click event SHALL be received by the element visually behind the container (e.g., gallery images or buttons).

#### Scenario: Visual remains unaffected
- **WHEN** `pointer-events: none` is applied
- **THEN** the text content (H1, shuttle warning) SHALL remain fully visible and positioned correctly.

### Requirement: Increased Visual Spacing
The system SHALL increase the vertical spacing between the titles section and the following content (the gallery) on the Rutva & Deb event page.

#### Scenario: Spacing avoids visual overlap
- **WHEN** the page is rendered
- **THEN** there SHALL be a clear visual gap between the titles (including the shuttle warning) and the gallery buttons, ensuring they do not visually obscure each other.
- **THEN** the text "TRANSPORTATION OPTIONS" (likely within the section header below the titles) SHALL be fully visible and not covered by the `.titles` container across all screen sizes.
