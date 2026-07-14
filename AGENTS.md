# Cancun Concierge — Agent Instructions

## Tech Stack
- **Static HTML5 MPA** — no framework, no bundler, no Node backend
- **Sass** (indented `.sass` syntax) → compiled to `css/styles.css`
- **Vanilla JS (ES6+)** in `code/`
- **Stripe payments** via external Flask API (`services.darideveloper.com/stripe-api/`)

## Critical Rules for AI Agents

### Styles MUST be edited in Sass files, never in compiled CSS
- Source files: `css/*.sass` (partials prefixed with `_`)
- The `css/styles.css` and `css/dist/styles.css` are **auto-generated** — do not edit them
- Runs Sass locally with `sass css/styles.sass css/styles.css`

### Project Conventions
- **Multi-language:** Spanish at root (`/`), English under `/en/` — manual static copies
- **Client landing pages:** Each in its own `client-name-airport-transfers/` folder, with its own Sass partial, JS file, and branded styles namespaced under a unique class (e.g., `.josh-will-airport-transfers`)
- **CSS:** kebab-case classes, Sass variables `$color_a`–`$color_d` (dark, white, gold #C8B568, blue #4F6A9E)
- **JS:** kebab-case filenames, procedural style (no classes/modules)
- **Icons:** Inline SVG `<symbol>` definitions, used via `<use xlink:href="#svg-id">`
- **No database** — all data is hardcoded in HTML/JS
- **No build step** — open `index.html` directly or via Live Server
