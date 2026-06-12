## ADDED Requirements

### Requirement: Hero Parallax Names Rendering
The landing page `/dana-hirshal-airport-transfers/index.html` MUST display the names "Dana & Hirshal" centered over the hero parallax image. The text MUST be styled using custom fonts, sizes, letter-spacing, and text-shadow, and MUST scale down responsively on mobile screens.

#### Scenario: Desktop view displays styled names
- **WHEN** the user visits the `/dana-hirshal-airport-transfers/index.html` page on a desktop device
- **THEN** the text "Dana & Hirshal" MUST be displayed inside the `.paralax` container
- **AND** the text MUST be centered with a font size of 4rem

#### Scenario: Mobile view displays responsive names
- **WHEN** the user visits the page on a device with screen width <= 900px
- **THEN** the names text font size MUST scale down to 2.2rem
- **AND** on devices with screen width <= 500px, the names text font size MUST scale down to 1.6rem
