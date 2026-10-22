# Design

## Context

See `proposal.md` for motivation. The Cancun Concierge site is a static HTML5 multi-page application using Sass (`.sass` indented syntax) compiled to `css/styles.css` and vanilla ES6+ JavaScript. Each client landing page is hosted in its own directory (e.g., `client-name-airport-transfers/`) with isolated Sass partials and dedicated client scripts.

## Goals / Non-Goals

**Goals:**
- Faithfully replicate `ella-james-airport-transfers` structure, form logic, and visual layout for `marlee-brock-airport-transfers`.
- Strictly namespace all CSS rules under `.marlee-brock-airport-transfers`, `header.marlee-brock`, and `#footer.marlee-brock` to maintain complete style isolation.
- Configure client JavaScript with `stripe_user = "marlee-brock"`.
- Set up initial logo placeholder at `imgs/marlee-brock-logo.png`.

**Non-Goals:**
- Altering transfer pricing, form fields, or FAQ copy beyond duplicating the template (future tasks will address customizations).
- Modifying existing landing pages or shared global styles.

## Decisions

- **Slug and Naming Convention**: Use `marlee-brock-airport-transfers` for directory and file names.
  - *Rationale*: Follows established patterns (`dana-hirshal`, `ella-james`, `josh-will`, `ashley-jonathan`).
  - *Alternatives considered*: `marlee-and-brock-airport-transfers` (deviates from repository conventions).
- **Sass Partial Isolation**: Create `css/_marlee-brock-airport-transfers.sass` imported into `css/styles.sass`.
  - *Rationale*: Conforms to `AGENTS.md` requiring all styling in Sass files and recompiled with the Sass CLI.
  - *Alternatives considered*: Inlining CSS or editing `css/styles.css` directly (strictly prohibited).
- **Asset Placeholder**: Copy `imgs/ella-james-logo.png` to `imgs/marlee-brock-logo.png`.
  - *Rationale*: Ensures no 404 image errors while awaiting client-provided assets in subsequent tasks.

## Risks / Trade-offs

- **[Risk]** Uncompiled or desynchronized CSS.
  - **Mitigation**: Run `sass css/styles.sass css/styles.css` and verify output selectors after creating the partial.
- **[Risk]** Unscoped styling leakage.
  - **Mitigation**: Verify all rules in `css/_marlee-brock-airport-transfers.sass` are nested under `marlee-brock` selectors.
