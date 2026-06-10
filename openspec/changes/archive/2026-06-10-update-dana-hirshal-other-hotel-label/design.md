## Context

The `dana-hirshal-airport-transfers/index.html` page serves airport transfer bookings for a client whose primary hotel is **SLS Playa Mujeres**, located in the Playa Mujeres area north of Cancun. The fallback hotel dropdown option and its companion disclaimer currently reference "Cancun Hotel Zone" and "Playa del Carmen", neither of which match the actual service geography. This is a pure copy correction — no logic, styling, or data flow changes are involved.

## Goals / Non-Goals

**Goals:**
- Correct the `<option>` label text for the "Other" hotel selection to read "Other Hotel Playa Mujeres area"
- Correct the disclaimer `<p>` text to read "Transfer rates apply to hotels located in Playa Mujeres area only"
- Apply changes consistently to both the **Arriving** and **Departing** fieldsets

**Non-Goals:**
- Modifying the `value="Other"` attribute (must remain unchanged to preserve JS behavior)
- Updating any other client pages (serena-gabriel, ella-james, sunnyjoy-brett)
- Changing CSS, JS, or any other file in the dana-hirshal directory

## Decisions

**Direct HTML edit, no abstraction needed**
Since this is a single-file, two-location text-only change, no templating, component extraction, or build step is required. The edit is made directly in `dana-hirshal-airport-transfers/index.html`.

*Alternative considered*: Centralizing hotel labels in a JS config object — rejected as over-engineering for a one-time label fix.

## Risks / Trade-offs

- **Risk**: Copying the wrong text inadvertently → **Mitigation**: Both fieldsets (arriving + departing) must be updated; a quick grep after the change confirms no old text remains in this file.
- **Risk**: Other pages remain with outdated copy → **Mitigation**: This is intentional and documented in the proposal. Other pages have different primary hotels and their own context.
