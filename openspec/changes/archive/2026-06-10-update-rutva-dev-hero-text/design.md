## Context

The request is to update the static warning/instruction texts inside the titles section of the `/rutva-dev-airport-transfers/index.html` page.

## Goals / Non-Goals

**Goals:**
- Update the heading text (`h1.small`) to: "PLEASE BOOK NOW TO SECURE YOUR AIRPORT TRANSFER BETWEEN CANCUN INTERNATIONAL AIRPORT AND THE EDITION HOTEL"
- Replace the existing shuttle warnings under `.titles` with the new 4 paragraphs of text.
- Ensure that the styling (margins, typography, and classes) remains consistent with the existing layout design.

**Non-Goals:**
- Modifying the dynamic price calculation logic in `code/rutva-dev-airport-transfers.js`.
- Modifying the checkout/Stripe booking integration.

## Decisions

### Decision: Update Static HTML Structure
We will modify the `.titles.regular-width` element in `/rutva-dev-airport-transfers/index.html` directly.
- The `<h1>` text will be updated.
- The three existing `<p class="shuttle-warning">` tags will be replaced with four `<p class="shuttle-warning">` tags containing the new content.
- Inline formatting (like `**private transportation service**` and `**shared shuttle service**`) will be converted to standard HTML tags (`<strong>`).

### Decision: Reuse Existing CSS Styles
The CSS stylesheet (`css/_rutva-dev-airport-transfers.sass`) already defines classes for `.shuttle-warning`. We will reuse the same class name (`shuttle-warning`) for all four new paragraphs so they automatically inherit the correct color, text alignment, and spacing.

### Decision: Limit Width of Texts
We will add `max-width: 1000px`, `margin-left: auto`, and `margin-right: auto` to the `.transportation .titles h1, .transportation .titles p` selector inside `css/_rutva-dev-airport-transfers.sass`. This scopes the styling exclusively to the `rutva-dev` landing page and centers the texts properly.

### Decision: Reduce Vertical Margin
The vertical margin between hero texts is defined by the `margin-top` on `.shuttle-warning`. We will reduce this from `15px` to `8px` and add `margin-bottom: 8px` to the titles section `h1` and `p` selectors to tighten up the layout space.

## Risks / Trade-offs

- **[Risk]** Text layout shifts or overflows.
  - *Mitigation*: The text is styled as centered blocks with responsive fonts, which should adapt well. We will verify the final page layout visually.
