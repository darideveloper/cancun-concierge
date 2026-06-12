## Context

The `dana-hirshal-airport-transfers` page does not display the couple's names on the hero section. Other pages in the application render the couple's names centered over the parallax hero image. The goal is to implement this capability on the Dana & Hirshal page.

## Goals / Non-Goals

**Goals:**
- Add "Dana & Hirshal" text inside the parallax container in `/dana-hirshal-airport-transfers/index.html`.
- Center the text over the hero image using absolute positioning in `/css/_dana-hirshal-airport-transfers.sass`.
- Provide responsive text scaling on tablet and mobile viewports.
- Compile the updated styling into `/css/styles.css`.

**Non-Goals:**
- Changes to the page layout or checkout logic.
- Adding transitions or animations to the hero text.

## Decisions

### 1. Static HTML Text Injection vs JS Injection
- **Decision:** Place the `<p>` element directly inside the `.paralax` div in `/dana-hirshal-airport-transfers/index.html`.
- **Rationale:** Static placement is simpler, faster, and matches the architectural pattern of other wedding pages (e.g. `kiana-swaroop` and `rutva-dev`).

### 2. Centering and Styling
- **Decision:** Position the names using `position: absolute`, `top: 50%`, `left: 50%`, and `transform: translate(-50%, -50%)` inside the `.paralax` rules in `/css/_dana-hirshal-airport-transfers.sass`.
- **Rationale:** This ensures the text remains centered regardless of the container's height/width changes and viewport sizes.

## Risks / Trade-offs

- **Risk:** Readability of white text against a light-colored background image.
- **Mitigation:** Apply a subtle dark shadow (`text-shadow: 2px 2px 2px rgba($color-black, 0.6)`) to maintain high legibility.
