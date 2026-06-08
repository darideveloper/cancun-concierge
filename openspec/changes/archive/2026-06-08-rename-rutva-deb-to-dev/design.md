## Context

The landing page for Rutva & Dev's wedding transfers is currently named after the misspelled name "Deb" in both directory path (`rutva-deb-airport-transfers/`), stylesheet (`css/_rutva-deb-airport-transfers.sass`), script (`code/rutva-deb-airport-transfers.js`), and logo (`imgs/rutva-deb-logo.webp`). Additionally, guests need to be warned that Uber pickups are not permitted at Cancun Airport arrivals.

## Goals / Non-Goals

**Goals:**
- Correct the spelling of the name to "Dev" in all URLs, asset filenames, stylesheets, scripts, and page content.
- Add the Uber pickup warning in the hero section below the existing shuttle service warnings.
- Keep Git history of moved/renamed files intact.

**Non-Goals:**
- Changing pricing configurations or payment flows.
- Redesigning the page layout or styling theme.
- Affecting other wedding transfer pages.

## Decisions

### 1. Git Renaming of Assets and Folders
We will rename the page folder and all related assets using `git mv` to preserve commit history:
- `rutva-deb-airport-transfers/` $\rightarrow$ `rutva-dev-airport-transfers/`
- `css/_rutva-deb-airport-transfers.sass` $\rightarrow$ `css/_rutva-dev-airport-transfers.sass`
- `code/rutva-deb-airport-transfers.js` $\rightarrow$ `code/rutva-dev-airport-transfers.js`
- `imgs/rutva-deb-logo.webp` $\rightarrow$ `imgs/rutva-dev-logo.webp`

### 2. Sass Selector Updates and Compilation
- All SASS rule blocks targeting `.rutva-deb` (e.g. `main.rutva-deb`, `header.rutva-deb`, etc.) in the partial will be updated to `.rutva-dev`.
- Update the import in `css/styles.sass` to `@import 'rutva-dev-airport-transfers'`.
- Compile stylesheets by running `npx sass css/styles.sass css/styles.css`.

### 3. HTML Content Edits
- Replace all visible instances of "Rutva & Deb" with "Rutva & Dev" (including page headings, paragraph texts, and HTML comments).
- Update the class on `<header>`, `<main>`, and `<footer>` tags from `rutva-deb` to `rutva-dev`.
- Point the `<script>` tag to the renamed file `../code/rutva-dev-airport-transfers.js`.
- Insert `<p class="shuttle-warning">Uber pickups are not permitted at Cancun Airport arrivals.</p>` in the `.titles` container of the hero block.

## Risks / Trade-offs

- **[Risk]** Broken styles if selectors are not fully updated or compiled $\rightarrow$ **Mitigation**: Verify that all instances of `.rutva-deb` in the Sass file are replaced with `.rutva-dev`, update the import in `css/styles.sass`, and run `npx sass` compilation.
- **[Risk]** Missing assets / 404s $\rightarrow$ **Mitigation**: Update all HTML file links, CSS background image URL, and script tag source to target `rutva-dev` paths.
