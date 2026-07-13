## Context

The Josh & Will airport transfers page (`josh-will-airport-transfers/index.html`) is a branded sub-page with its own color palette and typography. Currently it applies:

- **Headings**: "Kinfolk" (local `@font-face`, Bold only) — used via `.josh-will-airport-transfers h1-h6` and `header.josh-will h2`
- **Body**: "Libre Baskerville" (Google Fonts) — used via `.josh-will-airport-transfers` base, `header.josh-will`, `#footer.josh-will`
- **Global base**: "Urbanist" (body), "Maven Pro" (headings) — overridden by the above

Both fonts are replaced. The existing pattern of class-scoped font overrides is sound and reused.

## Goals / Non-Goals

**Goals:**
- Alegreya (Google Fonts) as the heading/display font for the josh-will page
- Lato (Google Fonts) as the body/text font for the josh-will page
- Scoped exclusively to the `.josh-will-airport-transfers` class and `header.josh-will` / `#footer.josh-will`
- Clean fallback stacks for when fonts haven't loaded

**Non-Goals:**
- Changing fonts on any other page
- Changing font sizes, weights, or other typographic properties
- Removing "Kinfolk" `@font-face` (still used by rohan-karisma — out of scope)

## Decisions

### 1. Font loading: Google Fonts CDN via `<link>` (same as existing pattern)

Loaded via `<link>` in the HTML `<head>` — identical to how "Libre Baskerville" is already loaded. The existing preconnects (`fonts.googleapis.com`, `fonts.gstatic.com`) are reused.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
```

**Weights selected:**
- Alegreya: 400 (regular titles), 700 (bold/emphasis titles)
- Lato: 400 (body text), 700 (bold body text)

No italic or extra weights needed — keeps payload small.

### 2. CSS application strategy: override existing class-scoped rules

Replace font-family values in the existing selectors — no new selectors needed.

| Current | → | New |
|---|---|---|
| `.josh-will-airport-transfers { font-family: "Libre Baskerville" }` | → | `"Lato"` |
| `.josh-will-airport-transfers h1..h6 { font-family: "Kinfolk" }` | → | `"Alegreya"` |
| `header.josh-will, #footer.josh-will { font-family: "Libre Baskerville" }` | → | `"Lato"` |
| `header.josh-will h2, #footer.josh-will h2 { font-family: "Kinfolk" }` | → | `"Alegreya"` |
| `header.josh-will a, #footer.josh-will a { font-family: "Libre Baskerville" }` | → | `"Lato"` |
| `.josh-will-airport-transfers p, a, span, label { font-family: "Libre Baskerville" }` | → | `"Lato"` |
| `.josh-will-airport-transfers input, select, button { font-family: "Libre Baskerville" }` | → | `"Lato"` |
| `.josh-will-airport-transfers .paralax p { font-family: "Kinfolk" }` | → | `"Alegreya"` |

Fallback stacks:
- Alegreya → serif
- Lato → sans-serif

### 3. Removal of old font references

The Libre Baskerville `<link>` at `josh-will-airport-transfers/index.html:14` is declared only on this page and is no longer used after the swap — it must be removed to avoid a wasted HTTP request.

The `@font-face { font-family: "Kinfolk" }` at `styles.css:4885` is shared with rohan-karisma, so it stays in the CSS bundle. Out of scope.

### 4. Scoping strategy

No CSS changes outside of:
- `header.josh-will, #footer.josh-will:` block (lines 4889-4935)
- `.josh-will-airport-transfers` block (lines 4937-5218)

## Risks / Trade-offs

- **[Font swap / FOUT]** Google Fonts are loaded asynchronously. The `display=swap` param ensures text remains visible during load, but causes a flash from fallback to web font. Acceptable and standard.
- **[Google Fonts availability]** If Google Fonts CDN is unreachable, fallbacks (serif / sans-serif) render. No page breakage.
- **[Scope leakage]** Existing global `h1-h6 { font-family: "Maven Pro" }` rule has lower specificity than `.josh-will-airport-transfers h1`, so no leakage risk.
- **[Kinfolk may still be loaded]** The `@font-face` remains in the CSS bundle if any other page references it (rohan-karisma does). No wasted bytes if tree-shaken — but this is a single CSS file, so Kinfolk stays in the bundle regardless. Acceptable.
