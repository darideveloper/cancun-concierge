## Context

The project is a multi-page application (MPA) built with vanilla HTML5, JavaScript (ES6+), and Sass. Landing pages for specific client groups (like weddings or corporate events) are created as standalone directories with their own `index.html`. These pages share global assets but require isolated logic for branding, pricing, and payment processing via a custom Stripe integration.

## Goals / Non-Goals

**Goals:**
- Provide a dedicated, branded booking experience for the Rutva & Deb wedding group.
- Isolate client-specific logic (Stripe ID, pricing) to avoid regressions on other landing pages.
- Integrate with the existing Sass compilation workflow to maintain a single central stylesheet.
- Reuse established patterns and structural components from previous successful landing pages.

**Non-Goals:**
- Refactoring the entire site into a component-based framework (e.g., React/Vue).
- Implementing a dynamic backend to manage landing pages via a CMS.
- Modifying global styles in `_base.sass` or `_header.sass`.

## Decisions

### 1. Directory-Based Page Isolation
- **Decision**: Create a dedicated directory `/rutva-deb-airport-transfers/`.
- **Rationale**: Follows the existing architectural pattern for group-specific landing pages. It allows for clean URLs and keeps client-specific HTML separate from the main site structure.
- **Alternative**: Creating a single dynamic HTML file that loads content based on URL parameters. *Rationale for Rejection*: The project is currently a pure MPA; introducing dynamic client-side rendering for routing would increase complexity unnecessarily.

### 2. Isolated JavaScript Logic
- **Decision**: Create `code/rutva-deb-airport-transfers.js`.
- **Rationale**: By duplicating and modifying the logic file, we ensure that changes to the Rutva & Deb event (e.g., special pricing) cannot accidentally affect other events.
- **Alternative**: A single `booking.js` with a configuration object for all clients. *Rationale for Rejection*: While cleaner for code reuse, it creates a single point of failure and makes the file grow with every new client.

### 3. Sass Partial for Branding
- **Decision**: Use a new partial `css/_rutva-deb-airport-transfers.sass` and import it in `styles.sass`.
- **Rationale**: Ensures that custom branding (colors, paralax backgrounds) is scoped to the specific classes used on the new page, while still being part of the minified `styles.css` build.

## Risks / Trade-offs

- **[Risk] Code Duplication** → [Mitigation] The project relies on duplication for rapid deployment of landing pages. Shared utilities (like the header toggle or gallery logic) are already separated into `header.js` and `gallery.js` to minimize redundancy.
- **[Risk] Stylesheet Growth** → [Mitigation] Page-specific partials are kept minimal, focusing only on branding overrides (colors, fonts, backgrounds).
