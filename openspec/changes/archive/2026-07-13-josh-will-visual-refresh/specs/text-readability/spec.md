## ADDED Requirements

### Requirement: Dark beige text on white page backgrounds

Headings, info text, and service card names that render over white page backgrounds SHALL use `#c9ad85` (dark beige) instead of `#fbe7c1` (warm cream) to ensure readable contrast.

#### Scenario: h2 headings use dark beige

- **WHEN** any `h2` element renders within `.josh-will-airport-transfers`
- **THEN** its color SHALL be `#c9ad85`

#### Scenario: Info text uses dark beige

- **WHEN** the `.info` element with text "Price is per vehicle (not per person)." renders
- **THEN** its color SHALL be `#c9ad85`

#### Scenario: Service card names use dark beige

- **WHEN** an `h3` element within `.transportation.details .card` renders
- **THEN** its color SHALL be `#c9ad85`
