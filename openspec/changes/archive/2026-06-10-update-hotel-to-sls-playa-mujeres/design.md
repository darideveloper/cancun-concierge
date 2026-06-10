## Context

The Dana & Hirshal airport transfer landing page was originally rebranded from "Serena & Gabriel" in a prior change. The hotel venue referenced throughout the page was "Nizuc Resort & Spa". The couple's event venue has changed to **SLS Playa Mujeres**, requiring a pure content update across five text locations in a single HTML file.

The page architecture separates concerns cleanly:
- `dana-hirshal-airport-transfers/index.html` — all user-visible HTML copy and form option values
- `code/dana-hirshal-airport-transfers.js` — form capture and Stripe routing (reads values generically)
- `css/_dana-hirshal-airport-transfers.sass` — page-specific styles

## Goals / Non-Goals

**Goals:**
- Replace every occurrence of "Nizuc Resort & Spa" with "SLS Playa Mujeres" in `index.html`
- Ensure the updated hotel name propagates correctly to the Stripe payload via form `<option>` values

**Non-Goals:**
- Changing transportation pricing or any business logic
- Modifying the JS controller, CSS, or any other page/file
- Adding new form fields or UI elements

## Decisions

### Text-only edit in `index.html`
Since all hotel references are plain text or `<option>` values in the HTML, no logic changes are needed. The JS reads the `<select>` value at submission time, so updating the `value` attribute on the `<option>` element is sufficient to update the Stripe payload as well.

**Alternatives considered**: Injecting the hotel name via JS config — rejected as over-engineering for a static content update.

## Risks / Trade-offs

- **[Risk] Option value change affects Stripe payload** → Mitigation: The new `value="SLS Playa Mujeres"` accurately names the venue; no mapping/lookup table exists that would break.
- **[Risk] Missed occurrence** → Mitigation: Full-text grep on "Nizuc" after changes confirms zero remaining references.
