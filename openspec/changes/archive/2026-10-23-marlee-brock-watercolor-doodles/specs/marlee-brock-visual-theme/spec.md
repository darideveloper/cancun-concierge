# Spec Delta

## ADDED Requirements

### Requirement: Decorative watercolor doodle styling and non-intrusive layering
The stylesheet SHALL define scoped visual presentation, dimensions, responsive scaling, and pointer-events rules for decorative watercolor illustrations.

#### Scenario: Clickability and pointer-events isolation
- **WHEN** a user interacts with any section containing decorative watercolor doodles
- **THEN** all decorative doodles SHALL have `pointer-events: none` and `user-select: none`
- **AND** interactive cards, form controls, and buttons SHALL remain fully clickable and unobstructed

#### Scenario: Logo doodles responsive scaling
- **WHEN** the page is viewed on tablet (<= 900px) or mobile (<= 500px)
- **THEN** logo doodles SHALL scale fluidly without causing horizontal overflow

#### Scenario: Card padding and text alignment
- **WHEN** transport cards render
- **THEN** card titles SHALL have `margin: 0` to align symmetrically with selection checkboxes
- **AND** cards on mobile viewports SHALL retain adequate internal padding
