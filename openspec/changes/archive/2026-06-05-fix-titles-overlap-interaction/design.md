## Context

The `.transportation .titles` section on the Rutva & Deb page is absolutely positioned and has a large height (`55.55vw`). This results in the container covering a significant portion of the page, including interactive elements like the gallery navigation buttons. Because it has a higher `z-index` (or is later in the DOM with absolute positioning), it captures mouse events, preventing users from clicking the elements beneath it.

## Goals / Non-Goals

**Goals:**
- Fix the issue where buttons under the titles section are unclickable.
- Maintain the visual layout and visibility of the titles.

**Non-Goals:**
- Do not change the position or size of the titles container.
- Do not modify global transportation styles (scope to Rutva & Deb page only).

## Decisions

### 1. CSS Pointer-Events
Apply `pointer-events: none` to the `.titles` container within the `main.rutva-deb` context.

**Rationale:** This is the standard CSS solution for making an element "transparent" to mouse events while keeping it visually present. All mouse interactions will bypass the container and its children, reaching the layers below.

### 2. Visual Spacing and Layout Stability
To ensure the titles section does not overlap interactive elements and maintains layout stability across all devices, the following styles are applied within the `main.rutva-deb` context:
- `height: auto`: Allows the container to fit its content.
- `padding: 50px 0`: Provides visual breathing room.
- `position: initial !important`: Reverts from absolute positioning to standard document flow to prevent overlap issues.
- `background: $color-primary !important`: Ensures visual consistency.
- `width: 100% !important` / `max-width: 100% !important`: Ensures full-width coverage in the new flow.

**Rationale:** While the initial goal was to avoid changing positioning, moving to `position: initial` proved to be the most robust way to ensure that the titles container never blocks elements beneath it, regardless of screen size, without requiring complex z-index management.

## Risks / Trade-offs

- **[Risk]** If links or buttons are added *inside* the titles section in the future, they will not be clickable due to `pointer-events: none`. → **Mitigation**: If interactive elements are needed inside, `pointer-events: auto` would need to be applied specifically to those child elements.
- **[Trade-off]** Using `!important` and `position: initial` deviates from the global transportation styles more significantly than originally planned, but provides a guaranteed fix for the overlap issue.

## Verification Strategy

We will use **Playwright CLI** to automate the verification of the fix across three main device categories:
- **Desktop**: Ensure full visibility of titles and accessibility of underlying controls.
- **Tablet**: Verify the layout remains clean and the "TRANSPORTATION OPTIONS" text is not obscured.
- **Mobile**: Confirm that the increased margin provides sufficient space and that interaction remains smooth.

Screenshots will be captured at each breakpoint for visual audit.
