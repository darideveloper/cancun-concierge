# Design

## Context

See `proposal.md` for motivation. The Marlee & Brock landing page uses a multi-vehicle setup (`Van`, `SUV`, `Sprinter`) with prices ($180, $238, $302 one-way; doubled for round-trip) and passenger limits (6, 4, 12). Previously, selecting a vehicle hid vehicle cards without an active vehicle indicator, and an absolute `.titles` overlay blocked clicks to the back button.

## Goals / Non-Goals

**Goals:**
- Present a clean drill-down flow: vehicle options visible initially; selecting a vehicle hides the vehicle cards and reveals the transfer direction cards with prices for that vehicle.
- Display a working back button `←` and a selected vehicle badge (`Selected Vehicle: [Vehicle Name & Capacity]`) alongside each other.
- Allow users to click the back button at any time to return to the vehicle options and clear active selections.
- Fix click hit-testing by adding `pointer-events: none` to `.transportation .titles` and setting proper stacking (`position: relative; z-index: 2`) on controls.

**Non-Goals:**
- Altering the pricing matrix or passenger limits ($180/$360 Van, $238/$476 SUV, $302/$604 Sprinter).
- Modifying backend Stripe API integration.
- Changing layouts of unrelated client pages.

## Decisions

### Decision 1: Step-by-Step Drill Down with Working Back Button and Badge
- **Rationale**: Hiding the vehicle options upon selection keeps the screen uncluttered and focused on transfer options. Providing the `Selected Vehicle: [Vehicle Name & Capacity]` badge directly next to the back button eliminates ambiguity, and the working back button gives immediate access to choose a different vehicle.

### Decision 2: Reactive State Management on Vehicle & Direction Selection
- **Rationale**:
  1. When a vehicle is clicked: vehicle prices populate the transfer cards, the selected vehicle badge updates, the vehicles container hides, and transfer cards + back button reveal.
  2. When the back button is clicked: transfer cards, back button, and form hide, vehicle options unhide, and state resets.
  3. When a transfer direction is clicked: the form reveals with appropriate fieldsets, passenger limits, and price.

### Decision 3: Hit-Testing Isolation for Titles Overlay
- **Rationale**: An unscoped global CSS rule sets `.transportation .titles { bottom: 100px; height: calc(100vw / 1.8); z-index: 1 }`, causing `.titles` to physically cover interactive sections.
- **Implementation**:
  - In `css/_marlee-brock-airport-transfers.sass`:
    ```sass
    .transportation .titles
        pointer-events: none
        a, button, input
            pointer-events: auto
    .cards.transport, .buttons
        position: relative
        z-index: 2
    ```
  - This guarantees clicks reach vehicle cards, direction cards, and the back button without interference.

## Risks / Trade-offs

- **[Risk]** Unhandled SVG click target in back button.
  → **Mitigation**: Add `pointer-events: none` on the `<svg>` within `button.back` so click events always target the button element.
