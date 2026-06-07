## MODIFIED Requirements

### Requirement: Pre-selected Destination Hotel
The booking form MUST provide two hotel options in both arriving and departing fieldsets: **Hotel Edition** (pre-selected) and **Other** (free-text input). No other hotel options SHALL be listed.

#### Scenario: Only Hotel Edition and Other are available in hotel dropdown
- **WHEN** the booking form is displayed
- **THEN** the arriving and departing hotel selection dropdowns MUST contain only "Hotel Edition" (selected by default) and "Other" as options
- **THEN** "Conrad Tulum Riviera Maya" MUST NOT appear as an option in either dropdown
