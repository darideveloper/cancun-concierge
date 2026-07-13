## Context

This change creates a new couple-specific airport transfers page for Josh & Will's wedding, following the established pattern used by Dana & Hirshal and other couples. The project uses vanilla HTML/CSS/JS with a Sass compilation pipeline and no external frameworks. Stripe checkout is handled by a remote API (`services.darideveloper.com/stripe-api/`).

The existing `dana-hirshal-airport-transfers/` page serves as the template — the new page is a copy with couple-specific substitutions.

## Goals / Non-Goals

**Goals:**
- Create a fully functional airport transfers booking page for Josh & Will
- Maintain parity with the Dana & Hirshal page in structure and behavior
- Route Stripe payments under `josh-will` identifier
- Support both Belmond Maroma and The Fairmont Mayakoba as hotel options

**Non-Goals:**
- No changes to global CSS, shared JS modules, or the Stripe backend API
- No new features beyond what the existing page provides
- No changes to the core booking flow or data model

## Decisions

**Decision: Copy-existing approach over shared-template**
Instead of building a generic templating system, each couple gets a standalone page directory, JS file, and Sass partial. This is the existing pattern (11 couple pages already follow it). It avoids coupling between events and allows each page to diverge independently.

**Decision: Same color palette as Dana & Hirshal**
The Josh & Will page uses the same `#4f492f` / `#bccacd` / `#6c6c6c` palette. Using existing brand colors avoids needing a custom design pass. If the couple later provides their own palette, it's a 5-minute Sass variable change.

**Decision: Prices match Dana & Hirshal exactly**
Van $127/$250, Suburban $160/$315, Sprinter $185/$360. Confirmed with the client.

## Risks / Trade-offs

- **Stale pricing after archiving** → No mitigation needed; each couple page is independently maintained
- **Hero.webp filename collision** → The source file is generic (`hero.webp`) but is renamed to `josh-will-hero.webp` on copy, avoiding collision with other couples' images
- **No pricing for departing direction specified** → Current spec assumes departing = same as arriving (mirroring Dana & Hirshal) — if different pricing is needed later, update the JS `prices` object only
