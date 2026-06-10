## ADDED Requirements

*(None)*

## MODIFIED Requirements

### Requirement: Warning Styling
The warning message paragraphs (`.shuttle-warning`) SHALL be styled to be easily readable using a normal font weight instead of bold. Only key nested inline phrases (specifically wrapped in `<strong>` tags) SHALL be rendered in bold.

#### Scenario: Warning styling consistency
- **WHEN** the warning messages are rendered on the event page
- **THEN** they SHALL use a normal font weight for the body text, and a bold font weight ONLY for nested inline `<strong>` elements.
