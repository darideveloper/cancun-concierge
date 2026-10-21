# Design

## Context

See `proposal.md` for motivation. The Cancun Concierge website is a static HTML5 multi-page application using Sass (`.sass` indented syntax) compiled to `css/styles.css`. Each client landing page defines isolated styles in a partial (`css/_marlee-brock-airport-transfers.sass`) scoped under unique client classes. Currently, the Marlee & Brock page uses placeholder gold variables inherited from the Ella & James template.

## Goals / Non-Goals

**Goals:**
- Replace placeholder colors with the Cannon Wedding palette:
  - Primary color: `#042179` (Deep Royal Navy).
  - Dark accent: `#193585` (Deep Ink Navy, extracted from event logo).
  - Background surface: `#eae9da` (Warm Linen / Ivory).
  - Text color: `#042179` (replaces default black).
  - White surface: `#ffffff`.
  - Accent light: `#c2e1ff` (Soft Sky Blue).
- Apply colors across header, footer, hero title ribbons, cards, checkboxes, buttons, and form inputs.
- Ensure all styling remains strictly scoped without leaking into global or other client stylesheets.

**Non-Goals:**
- Updating fonts or importing new web font files (handled in a subsequent change).
- Modifying vehicle pricing, passenger counts, or booking logic.
- Altering any other client landing pages.

## Decisions

### Decision 1: Dual Navy Color Architecture
- **Rationale**:
  - `#042179` is the dominant text, heading, and vector color on `cannonwedding.com`.
  - `#193585` is the ink shade extracted directly from [`imgs/marlee-brock-logo.png`](file:///home/mehedi/Code/fiverr/dari/cancun-concierge/imgs/marlee-brock-logo.png).
  - Using `#193585` for `$color-dark` (header/footer and CTA buttons) ensures 100% color consistency with the brand logo, while using `#042179` for `$color-primary` and text ensures exact fidelity with the wedding website.
- **Alternatives considered**: Using a single flat navy everywhere - rejected because having subtle depth between headers/CTAs and titles enhances visual hierarchy.

### Decision 2: Warm Linen Page Background
- **Rationale**: The Cannon Wedding website has an off-white linen/envelope backdrop (`#eae9da`). Styling the main container with this warm tone softens the page and creates elegant contrast against crisp white cards (`#ffffff`).
- **Implementation**: Set `background-color: $color-bg` on `main.marlee-brock-airport-transfers` and `body.marlee-brock`.

### Decision 3: Cohesive Interactive & Form States
- **Rationale**: Active checkboxes, CTA hover inversions, focus glows, and the back button should feel unified under the navy theme:
  - Checkbox active fill: `rgba($color-primary, 0.8)`.
  - CTA button: `#193585` background with white text, inverting on hover.
  - Back arrow SVG: `fill: $color-dark`.
  - Form inputs: border and focus box-shadow tinted with `$color-dark`.

## Risks / Trade-offs

- **[Risk]** Logo PNG background blending.
  - **Mitigation**: Verify that `imgs/marlee-brock-logo.png` renders cleanly against the linen background.
- **[Risk]** Sass compilation desynchronization.
  - **Mitigation**: Compile `css/styles.sass` with Sass and verify compiled selectors in `css/styles.css`.
