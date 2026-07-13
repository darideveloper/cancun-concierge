## ADDED Requirements

### Requirement: Hero overlay darkens background image
The `.josh-will-airport-transfers .paralax` hero section SHALL use a dark overlay on the background image to ensure sufficient contrast for overlaid text.

#### Scenario: Overlay darkens the hero image by 35%
- **WHEN** the hero section renders
- **THEN** the `::before` pseudo-element overlay SHALL use `rgba(0, 0, 0, 0.35)` as its background

#### Scenario: Overlay does not block interactions
- **WHEN** a user interacts with the hero section
- **THEN** the overlay SHALL have `pointer-events: none` so it does not block underlying content

#### Scenario: Overlay covers the full hero area
- **WHEN** the hero section renders
- **THEN** the overlay SHALL use `position: absolute` with `inset: 0` to cover the entire `.paralax` container
