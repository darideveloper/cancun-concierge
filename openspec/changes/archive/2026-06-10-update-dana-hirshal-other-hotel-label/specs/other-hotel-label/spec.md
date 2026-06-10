## ADDED Requirements

### Requirement: Accurate hotel zone label for dana-hirshal fallback option
The `dana-hirshal-airport-transfers/index.html` page's hotel `<select>` dropdowns SHALL display "Other Hotel Playa Mujeres area" as the label for the fallback `<option value="Other">` entry in both the Arriving and Departing fieldsets.

#### Scenario: Arriving fieldset shows correct option text
- **WHEN** a user views the Arriving fieldset hotel dropdown
- **THEN** the fallback option reads "Other Hotel Playa Mujeres area" (not "Other hotel in Cancun Hotel Zone")

#### Scenario: Departing fieldset shows correct option text
- **WHEN** a user views the Departing fieldset hotel dropdown
- **THEN** the fallback option reads "Other Hotel Playa Mujeres area" (not "Other hotel in Cancun Hotel Zone")

### Requirement: Accurate disclaimer text when "Other" hotel is selected
The companion `<p>` inside `.hotel-other-wrapper` SHALL read "Transfer rates apply to hotels located in Playa Mujeres area only" in both the Arriving and Departing fieldsets of `dana-hirshal-airport-transfers/index.html`.

#### Scenario: Arriving fieldset disclaimer is accurate
- **WHEN** a user selects "Other Hotel Playa Mujeres area" in the Arriving fieldset
- **THEN** the revealed disclaimer reads "Transfer rates apply to hotels located in Playa Mujeres area only"

#### Scenario: Departing fieldset disclaimer is accurate
- **WHEN** a user selects "Other Hotel Playa Mujeres area" in the Departing fieldset
- **THEN** the revealed disclaimer reads "Transfer rates apply to hotels located in Playa Mujeres area only"

### Requirement: Option value attribute is unchanged
The `value` attribute of the fallback option SHALL remain `"Other"` so that existing JavaScript event listeners continue to function without modification.

#### Scenario: JS "Other" detection still works after text change
- **WHEN** a user selects the "Other Hotel Playa Mujeres area" option
- **THEN** the free-text hotel input is revealed and enabled (same behavior as before the change)
