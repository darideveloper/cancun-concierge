## Why

The hero image on the Josh & Will airport transfers page has a light blue-grey overlay (`rgba(188, 202, 205, 0.18)`) that washes out the image and reduces contrast against the white hero text. This makes the "Josh & Will" title harder to read. A darker overlay will improve text legibility and visual hierarchy.

## What Changes

- Change the `.josh-will-airport-transfers .paralax::before` overlay from its current light tint (`rgba(188, 202, 205, 0.18)`) to a neutral dark tint with 35% opacity
- The overlay remains a `::before` pseudo-element -- no HTML structural changes
- No changes to the hero text styling, positioning, or text-shadow

## Capabilities

### New Capabilities
- `hero-overlay-darkening`: Controls the hero section overlay to ensure sufficient contrast for overlaid text

### Modified Capabilities
- None -- no existing specs are affected

## Impact

- **Single CSS property change** in `css/styles.css` line 4965
- No HTML changes, no JavaScript changes
- No impact on any other page or section (scoped to `.josh-will-airport-transfers`)
