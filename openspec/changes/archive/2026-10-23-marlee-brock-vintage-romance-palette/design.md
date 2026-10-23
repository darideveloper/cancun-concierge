# Design

## Context

See `proposal.md` for background and motivation. The Marlee & Brock landing page currently uses Deep Royal Navy (`#042179`), Deep Ink Navy (`#193585`), and Warm Linen (`#eae9da`). This design shifts the page to the **Vintage Romance** aesthetic, introducing organic Kraft Beige (`#E4CBB4`), Dusty Coral (`#ED8A7B`), Deep Navy (`#1B365D`), and Soft Sky Blue (`#A0C9E0`).

## Goals / Non-Goals

**Goals:**
- Implement the Vintage Romance palette in `css/_marlee-brock-airport-transfers.sass`.
- Ensure high contrast and WCAG AA accessibility across all text and interactive controls.
- Maintain crisp card presentation with white card backgrounds atop the Kraft Beige canvas.
- Maintain strict CSS scoping to ensure zero side-effects on other landing pages.

**Non-Goals:**
- Modifying typography or font definitions (retains self-hosted `Agrandir Tight`, `Caslon #540`, and `Jimmy Script`).
- Modifying HTML structure or JavaScript booking logic.

## Decisions

### 1. Palette Variable Configuration
- **Decision:** Map variables in `css/_marlee-brock-airport-transfers.sass`:
  - `$color-primary: #1B365D` (Deep Navy)
  - `$color-dark: #1B365D` (Deep Navy)
  - `$color-bg: #E4CBB4` (Kraft Beige)
  - `$color-accent: #ED8A7B` (Dusty Coral)
  - `$color-secondary: #A0C9E0` (Soft Sky Blue)
  - `$color-black: #1B365D`
  - `$color-white: #ffffff`
- **Rationale:** Centralizing colors in Sass variables allows consistent inheritance across header, hero, cards, forms, and footer.

### 2. High-Contrast CTA Button Styling
- **Decision:** Primary CTA button (`.btn.cta`) uses a Dusty Coral (`#ED8A7B`) background with bold Deep Navy (`#1B365D`) text and border, inverting on hover to Deep Navy background with white text.
- **Rationale:** White text on Dusty Coral has a low contrast ratio (~2.4:1), failing WCAG guidelines. Deep Navy text on Dusty Coral achieves ~4.4:1, ensuring legibility and a refined editorial look.

### 3. Active Vehicle Card State & Accents
- **Decision:** Cards use white backgrounds for contrast against Kraft Beige. Active cards receive a 2px border in Dusty Coral (`#ED8A7B`) and the active radio checkbox fill uses `#ED8A7B`.
- **Rationale:** Draws immediate visual focus to the selected vehicle while complementing the warm kraft background.

## Risks / Trade-offs

- **[Risk] Contrast on warm Kraft Beige canvas** → **Mitigation:** Retain pure white card bodies (`#ffffff`) for transportation options and vehicle details, keeping text in Deep Navy (`#1B365D`) for a 10.4:1 contrast ratio.
- **[Risk] Style leakage to global elements** → **Mitigation:** Ensure all color rules are strictly scoped within `header.marlee-brock`, `#footer.marlee-brock`, and `.marlee-brock-airport-transfers`.
