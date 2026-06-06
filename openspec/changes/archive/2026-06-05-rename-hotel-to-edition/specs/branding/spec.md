## MODIFIED Requirements

### Requirement: Update all hotel name references to "Hotel Edition"
The Rutva & Deb landing page SHALL reflect the "Hotel Edition" brand instead of "Hilton Tulum Riviera Maya" in all visible text elements and form options.

#### Scenario: Heading and content
- **WHEN** a user visits the `/rutva-deb-airport-transfers/` landing page
- **THEN** the main heading (H1) SHOULD read "...to Hotel Edition"
- **AND** any other mentions of "Hilton Tulum Riviera Maya" in the page content SHOULD be replaced.

#### Scenario: Form dropdown selection
- **WHEN** a user views the hotel selection dropdowns in the form
- **THEN** the options for "Hilton Tulum Riviera Maya" MUST be replaced with "Hotel Edition" in both text and value attributes.

#### Scenario: FAQs and details
- **WHEN** a user reads the FAQs or service details
- **THEN** all instances of "Hilton Tulum Riviera Maya" MUST be replaced with "Hotel Edition".

#### Scenario: Preserve Cancun Concierge branding
- **WHEN** a user views the logo or footer
- **THEN** the text "Cancun Concierge" MUST remain unchanged.

