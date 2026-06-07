## Context

The `rutva-deb-airport-transfers/index.html` page has two text elements in the hero `.titles` section that need updating: the `h1.small` heading and the `p.shuttle-warning` paragraph. Both are static text nodes — no dynamic rendering, no JS dependency.

## Goals / Non-Goals

**Goals:**
- Replace H1 text with the exact new copy provided by the client
- Replace shuttle-warning text with the exact two-paragraph copy provided by the client

**Non-Goals:**
- No CSS/SASS changes
- No JS changes
- No structural HTML changes (no new elements, classes, or wrappers)
- No spec changes (this is copy editing, not a functional requirement change)

## Decisions

- **Direct string replacement**: The simplest approach — locate the target text in the HTML file and replace it in place. No templating, no variables, no i18n. Rationale: this is a static site, the text is hardcoded, and there is no benefit to abstraction for two static strings.
- **No spec file needed**: Per the proposal, there are no new capabilities or modified requirements; this is a pure copy edit. Creating a spec would add ceremony without value.

## Risks / Trade-offs

- **Stale copy after replacement**: If the client requests further edits, the old values won't exist to search for. *Mitigation*: the new copy is meaningful and complete; future edits will reference the new text.
