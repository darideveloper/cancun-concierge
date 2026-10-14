# Design

## Context

The Cancun Concierge project is a legacy static HTML5 Multi-Page Application (MPA) without frontend frameworks or build bundlers. Styling is managed using Sass (indented `.sass` syntax) compiled into a unified stylesheet `css/styles.css`.

Each client landing page operates as an autonomous, isolated module with:
1. A dedicated folder (e.g., `ashley-jonathan-airport-transfers/index.html`).
2. A dedicated Sass partial (e.g., `css/_ashley-jonathan-airport-transfers.sass`).
3. A dedicated procedural JavaScript script (e.g., `code/ashley-jonathan-airport-transfers.js`).

See [proposal.md](file:///home/mehedi/Code/fiverr/dari/cancun-concierge/openspec/changes/ashley-jonathan-airport-transfers/proposal.md) for background and motivation.

## Goals / Non-Goals

**Goals:**
- Faithfully replicate `/rohan-karisma-airport-transfers` structure, booking workflows, and vehicles into `/ashley-jonathan-airport-transfers`.
- Apply the BlankBeach visual identity (colors, typography, images) extracted from `blankbeach.com`.
- Guarantee strict stylesheet and script isolation so no other client landing pages or core site pages are affected.
- Configure Stripe payments to route with `stripe_user = "ashley-jonathan"` to `https://services.darideveloper.com/stripe-api/`.

**Non-Goals:**
- Refactoring the project architecture or converting procedural vanilla JS into modern ES modules.
- Modifying shared common Sass partials (`_base.sass`, `_header.sass`, `_footer.sass`, `_transportation.sass`).
- Editing compiled CSS files (`css/styles.css`) directly.

## Decisions

### 1. CSS Namespacing Strategy
- **Choice**: Enforce strict class scoping:
  - Header: `header.ashley-jonathan`
  - Footer: `#footer.ashley-jonathan`
  - Main container: `.ashley-jonathan-airport-transfers`
- **Rationale**: In a single unified `styles.css` file compiled from Sass, unscoped rules would override styles on other pages. Scoping guarantees 100% isolation.
- **Alternatives considered**: Inline styles or separate CSS files. Rejected because the project uses a single compiled `styles.css` linked across all pages.

### 2. Procedural JS Duplication
- **Choice**: Duplicate `code/rohan-karisma-airport-transfers.js` into `code/ashley-jonathan-airport-transfers.js` and update constants (`stripe_user`, API endpoints, pricing labels).
- **Rationale**: Follows the existing architectural pattern established across all client landing pages (`dana-hirshal`, `josh-will`, `rutva-dev`). Avoids regression risks in other pages.
- **Alternatives considered**: Extracting a shared configurable transfer script. Rejected to avoid touching other client pages in this legacy codebase.

### 3. BlankBeach Typography and Palette Integration
- **Choice**:
  - Google Fonts: `'Tangerine'` (script for couple names and accents), `'Cormorant Garamond'` (serif for headings, subtitles, info notices, and FAQ details at `1.25rem` / line-height `1.8`), `'Cormorant SC'` (small caps with tracking for section titles and eyebrows), and `'Inter'` (clean sans scoped to form input fields).
  - Palette: Jungle Green (`#2a3a24`), Deep Teal (`#3d4f35`), Ivory base background (`#F4EFE3`), Warm Sand (`#e4d6bc`), Soft Clay (`#8a6a4a`), and Coffee (`#4b2e1c`).
- **Rationale**: Extracted from `blankbeach.com` and adjusted during implementation: `#F4EFE3` perfectly matches the uploaded couple logo asset background, and Cormorant Garamond provides luxury editorial typography for all textual details and FAQ answers while reserving Inter for form UI elements.

### 4. Hero and Vehicle Gallery Visual Presentation
- **Choice**: Feature the couple's dedicated high-resolution wedding logo (`../imgs/ashley-jonathan/logo.png`) as the `.logo-event` visual, and strictly preserve the proven Cancun Concierge vehicle fleet photography (`transportation-gallery-4.jpg`, `transportation-gallery-1.png`, `transportation-gallery-2.png`) in the vehicle gallery slider.
- **Rationale**: Replaces `rohan-karisma-logo.webp` with the authentic wedding brand visual while ensuring guests clearly see the actual vehicles (Deluxe SUV, Van, Sprinter) they are booking rather than destination imagery.

## Risks / Trade-offs

- **[Risk: Style Bleed into Global Elements]** → *Mitigation*: All CSS selectors in `_ashley-jonathan-airport-transfers.sass` are strictly nested under `.ashley-jonathan-airport-transfers` or `.ashley-jonathan`.
- **[Risk: Direct Edit to Compiled CSS]** → *Mitigation*: Only write changes to `css/_ashley-jonathan-airport-transfers.sass` and compile via `npx sass css/styles.sass css/styles.css`.
- **[Risk: Incorrect Stripe API routing]** → *Mitigation*: Configure `stripe_user = "ashley-jonathan"` and endpoint `https://services.darideveloper.com/stripe-api/` in `code/ashley-jonathan-airport-transfers.js`.
