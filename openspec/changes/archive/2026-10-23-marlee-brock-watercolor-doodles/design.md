# Design

## Context

The Marlee & Brock airport transfers page (`marlee-brock-airport-transfers/index.html`) features the Vintage Romance color palette and self-hosted fonts. To reflect the artisanal wedding stationery aesthetic, authentic transparent watercolor doodle illustrations were scraped and cataloged in scratch storage.

## Goals / Non-Goals

**Goals:**
- Stage authentic transparent watercolor assets (`marlee-brock-palm-trees.png`, `marlee-brock-wedding-bouquet.png`, `marlee-brock-coral-blossom.png`).
- Flank the event logo with palm trees and bouquet doodles in a balanced, responsive header container.
- Accent section headings ("OUR SERVICES INCLUDE" and "FAQS") with clean Dusty Coral blossoms.
- Fix broken top padding and vertical text alignment on both service feature cards and vehicle/transfer cards.
- Ensure all decorative doodles are non-blocking (`pointer-events: none`, `user-select: none`, `aria-hidden="true"`).

**Non-Goals:**
- Heavy horizontal dividers or awkward animal illustrations between sections.
- Modifying Stripe booking calculations or global shared styles.

## Decisions

### 1. Logo-Flanking Doodles
- **Choice:** Place `marlee-brock-palm-trees.png` to the left and `marlee-brock-wedding-bouquet.png` to the right of `.logo-event` inside a flex `.logo-container`.
- **Rationale:** Frames the couple's monogram logo with authentic wedding motifs while maintaining clean responsive proportions.

### 2. Blossom Header Accents
- **Choice:** Use `.title-with-doodle` with the Dusty Coral blossom motif flanking "OUR SERVICES INCLUDE" and "FAQS" titles.

### 3. Card Padding and Vertical Alignment
- **Choice:** 
  - Add `padding: 35px 20px 30px` to `.transportation.details .cards .card`, constrain SVG to 60px, and center titles.
  - Reset `h3` margin to 0 on `.cards.transport .card` to eliminate the browser default `1em` top margin that pushed titles down.
  - Set mobile card padding to `16px 20px` with `gap: 15px` instead of `padding: 0`.

## Risks / Trade-offs

- **[Risk]** Logo doodles causing mobile horizontal overflow.
  - **Mitigation:** Proportional percentage `max-width` bounds (`16%` on tablet, `18%` on mobile) and flex shrinking.
- **[Risk]** Decorative layers blocking taps or clicks.
  - **Mitigation:** Apply `pointer-events: none` directly to images and wrappers.
