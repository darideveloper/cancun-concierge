## Why

The `.transportation .titles` section on the Rutva & Deb event page is an absolutely positioned container with a large height (55.55vw). This container visually overlaps other interactive elements like the gallery buttons, blocking mouse interactions and making them unclickable in certain areas. Disabling mouse events on this container while keeping it visible will solve the usability issue.

## What Changes

- Set `pointer-events: none` on the `.transportation .titles` container specifically for the Rutva & Deb event page.
- Transition the `.titles` section from `position: absolute` to `position: initial !important` to ensure it remains within the document flow and does not overlap other sections.
- Apply `height: auto` and `padding: 50px 0` to provide proper visual spacing and fit.
- Ensure all text within the section (H1, shuttle warning) remains visible and uses the correct theme colors (white text on primary background).
- Validate the fix using Playwright CLI to ensure "TRANSPORTATION OPTIONS" is fully visible and clickable across multiple screen sizes (Mobile, Tablet, Desktop).


## Capabilities

### New Capabilities
- `mouse-transparency`: Allows elements visually behind the titles section to receive mouse events (clicks, hover).

### Modified Capabilities
<!-- Existing capabilities whose REQUIREMENTS are changing (not just implementation).
     Only list here if spec-level behavior changes. Each needs a delta spec file.
     Use existing spec names from openspec/specs/. Leave empty if no requirement changes. -->

## Impact

- `css/_rutva-deb-airport-transfers.sass`: Styling updated to include `pointer-events: none`.
- `css/styles.css`: Compiled CSS updated for immediate effect.
