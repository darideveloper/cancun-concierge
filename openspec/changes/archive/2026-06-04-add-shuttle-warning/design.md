## Context

The target page is `/rutva-deb-airport-transfers/index.html`. This page has a specific event-themed design defined in `css/_rutva-deb-airport-transfers.sass`. The titles section in the transportation area has a primary color background (`$color-primary: #305941`) and specific font styling.

## Goals / Non-Goals

**Goals:**
- Add the shuttle service warning specifically to the Rutva & Deb event page.
- Ensure the warning is highly visible within the titles section.
- Match the event's styling (colors, fonts).

**Non-Goals:**
- Do not modify any other event pages or the main homepages.
- Do not change the existing H1 content.

## Decisions

### 1. HTML Structure
Add a `<p>` element with class `shuttle-warning` inside the `.titles.regular-width` div, immediately following the `h1.small`.

**Location:** `rutva-deb-airport-transfers/index.html`

### 2. Styling Approach
Style `.shuttle-warning` within the `main.rutva-deb` block in `css/_rutva-deb-airport-transfers.sass`.
- Use `$color-white` for text to contrast with `$color-primary` background.
- Set `font-weight: bold`.
- Add `margin-top: 15px`.
- Add a border or distinct background if needed for more emphasis, but matching the `h1` style (white text on primary background) is the primary choice.

Reduce `h1.small` font size by 20%:
- Base size: 40px -> 32px.
- Mobile size: 30px -> 24px.

**Rationale:** This ensures the warning inherits the event's theme while being clearly visible below the main instruction.

## Risks / Trade-offs

- **[Risk]** The titles section might become too crowded on mobile. → **Mitigation**: Use a slightly smaller font size for the warning than the H1.
