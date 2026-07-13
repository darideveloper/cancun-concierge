## Context

The Josh & Will airport transfers page has a hero section with a full-width background image and overlaid text. Currently, a `::before` pseudo-element applies a light blue-grey overlay (`rgba(188, 202, 205, 0.18)`) which washes out the image and reduces text contrast. The existing `::before` pattern provides the right structure -- only the color needs to change.

## Goals / Non-Goals

**Goals:**
- Darken the hero image overlay to 35% opacity black to improve text readability
- Keep the change minimal -- single CSS property value
- Preserve the existing `::before` pseudo-element approach (no HTML changes)

**Non-Goals:**
- No changes to hero text, positioning, font-size, or text-shadow
- No changes to other pages or sections
- No new CSS selectors, HTML elements, or JavaScript
- No changes to the background image itself

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Overlay color | `rgba(0, 0, 0, 0.35)` | Neutral black overlay at 35% provides consistent darkening across any hero image. Matches the requested 35% darkening. |
| Implementation approach | Modify existing `::before` | No HTML changes needed. Follows existing pattern. Single line change. |
| Alternative considered | `brightness(0.65)` filter | Would affect the text child too unless restructured. More complex. |
| Alternative considered | Separate `<div>` overlay | Requires HTML change, redundant since `::before` already exists. |

## Risks / Trade-offs

- **Risk**: 35% might look too dark on screens with lower brightness settings → **Mitigation**: The hero image is a photo with bright sky/sand, so 35% neutral black is appropriate. If needed, the value is trivially adjustable.
- **Trade-off**: Replacing the light tint with a dark tint changes the visual mood of the hero from airy/light to dramatic/grounded. This is intentional for readability.
- **No migration risk**: Single CSS change, instantly reversible by reverting the value.
