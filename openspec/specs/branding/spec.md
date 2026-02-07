# branding Specification

## Purpose
TBD - created by archiving change rebrand-digitalrealty-airport-transfers. Update Purpose after archive.
## Requirements
### Requirement: Update all user-visible branding text to "Digital Realty"
The landing page SHALL reflect the "Digital Realty" brand instead of the "Rohan & Karisma" brand in all visible text elements.
#### Scenario: Page title and heading
- Given the `digitalrealty-airport-transfers/index.html` page
- When a user visits the page
- Then the `<title>` should contain "Digital Realty" instead of "Transportation"
- And the text "Rohan & Karisma Price:" should be replaced by "Digital Realty Price:"
- And the text "Karisma & Rohan's wedding" should be replaced by "Digital Realty's event"

### Requirement: Update branding classes and attributes
HTML classes and attributes SHALL be renamed to follow the "Digital Realty" identifier for consistent styling and scripting.
#### Scenario: Renaming classes for customization
- Given the `digitalrealty-airport-transfers/index.html` page
- When the page is rendered
- Then the `header` class `rohan-karisma` should be changed to `digitalrealty`
- And the `main` class `rohan-karisma-airport-transfers` should be changed to `digitalrealty-airport-transfers`
- And the `footer` class `rohan-karisma` should be changed to `digitalrealty`

### Requirement: Apply Digital Realty Color Palette
The landing page MUST update its Sass variables and application in `css/_digitalrealty-airport-transfers.sass` to match the brand identity.

#### Scenario: Deep Teal Backgrounds
- **Given** the user is viewing the Digital Realty landing page.
- **When** looking at the central sections (transportation, about) or the transport cards.
- **Then** the background color MUST be `#003B3E`.

#### Scenario: Pure White Highlights and Text
- **Given** a text element is placed over a Deep Teal background.
- **Then** the color MUST be `#FFFFFF`.
- **And** the hero section background MUST be `#FFFFFF`.

#### Scenario: Electric Green Accents
- **Given** a link, the active checkbox in a transport card, or a hover state on a button.
- **Then** the accent color MUST be `#00FF85`.

#### Scenario: Near Black Structural Elements
- **Given** the footer or the primary navigation buttons.
- **Then** the background color MUST be `#1A1A1A`.

### Requirement: Enhance UI Component Styles
The landing page MUST improve the visual appearance of components for a more premium feel.

#### Scenario: Transport Card Refinement
- **Given** a transport card element.
- **Then** it MUST have a `border-radius` of at least `12px`.
- **And** it MUST have a subtle transition effect on hover (opacity or transform).

#### Scenario: CTA Button Visibility
- **Given** the "Reserve" or "Buy" button.
- **When** the user hovers over the button.
- **Then** the background MUST change to Electric Green (`#00FF85`) and text to Near Black (`#1A1A1A`).

