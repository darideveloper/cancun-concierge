# Design

## Context

See `proposal.md` for background and motivation. The Marlee & Brock landing page currently relies on Google Fonts loaded via `<link>` tags in HTML. The authentic font binaries used on `cannonwedding.com` are stored in `scratch/cannonwedding/_assets/fonts/`:
- `f09272f12e61ef1b6512e56af9b09fc9.woff` — Agrandir Tight (Weight 500 Medium)
- `3964f852757a10c50b492dc39c9c7590.woff` — Caslon #540 (Weight 400 Italic)
- `187d53cfec4e68fadaabb27d2f4f8a85.woff` — Jimmy Script (Weight 300 Regular)

## Goals / Non-Goals

**Goals:**
- Self-host the 3 authentic WOFF font files in the project `fonts/` directory with clean, human-readable names.
- Declare `@font-face` rules in `css/_marlee-brock-airport-transfers.sass` using relative paths (`../fonts/<filename>`).
- Map the Marlee & Brock Sass variables to `'Agrandir Tight', sans-serif`, `'Caslon #540', serif`, and `'Jimmy Script', cursive`.
- Remove Google Fonts `<link>` tags from `marlee-brock-airport-transfers/index.html`.
- Compile cleanly into `css/styles.css` without global style bleed.

**Non-Goals:**
- Modifying fonts, typography, or assets for other client pages.
- Converting font formats (WOFF provides universal modern browser support).

## Decisions

### 1. Descriptive Font Filenames
- **Decision:** Copy `f09272f12e61ef1b6512e56af9b09fc9.woff` → `fonts/Agrandir-Tight-Medium.woff`, `3964f852757a10c50b492dc39c9c7590.woff` → `fonts/Caslon-540-Italic.woff`, and `187d53cfec4e68fadaabb27d2f4f8a85.woff` → `fonts/Jimmy-Script.woff`.
- **Rationale:** Clear naming matches the pattern used by existing fonts in `fonts/` (e.g., `Kinfolk-Bold.otf`, `RobotoCondensed-Regular.ttf`) and makes maintenance simple.

### 2. Relative Asset URLs in Sass
- **Decision:** Use `url('../fonts/<filename>.woff') format('woff')` in `@font-face` declarations.
- **Rationale:** `css/styles.css` is generated in `css/`, so relative asset references must traverse up one level to reach `fonts/`.

### 3. Font Family Role Mapping
- **Decision:**
  - `$font-regular: 'Agrandir Tight', sans-serif` — Used for body copy, form fields, buttons, labels, and badges.
  - `$font-title: 'Caslon #540', serif` — Used for headings (`h2`, FAQ questions, card titles).
  - `$font-highlight: 'Jimmy Script', cursive` — Used for hero heading / signature accents.
- **Rationale:** Mirrors the typographic hierarchy observed on `cannonwedding.com` where Caslon italic and Jimmy script create romantic wedding accents while Agrandir tight handles structured information.

## Risks / Trade-offs

- **[Risk] Relative URL path errors from CSS** → **Mitigation:** Use `../fonts/` format matching existing client `@font-face` implementations (e.g., `_josh-will-airport-transfers.sass`).
- **[Risk] Style leakage to other pages** → **Mitigation:** Ensure typography variables are strictly scoped within `header.marlee-brock`, `#footer.marlee-brock`, and `.marlee-brock-airport-transfers`.
