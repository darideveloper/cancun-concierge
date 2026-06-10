## Context

The `.titles.regular-width` div on the dana-hirshal-airport-transfers page contains the main heading. Its margin/padding area overlaps with the gallery slide buttons (`.gallery .next` and `.gallery .back`), intercepting click events and making those buttons partially unclickable.

## Goals / Non-Goals

**Goals:**
- Disable pointer events on `.titles.regular-width` so clicks pass through to gallery buttons beneath

**Non-Goals:**
- Changing layout, margin, or padding of the titles
- Affecting other pages

## Decisions

- **Inline `pointer-events: none` on the element** — simplest change, one attribute added directly in the HTML, no CSS pipeline changes needed. A CSS class approach would be more scalable if this affected many pages, but this is a single-element fix.
- **Target only `.titles.regular-width`** — not the children (the `<h1>` text should remain clickable contextually, but since the heading itself doesn't need click interaction, disabling on the container is sufficient).

## Risks / Trade-offs

- [Low] If `.titles.regular-width` ever needs clickable children in the future, `pointer-events: none` on the parent with explicit `pointer-events: auto` on children would be needed. Not applicable now.
