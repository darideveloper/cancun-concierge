## Context

The `rutva-deb-airport-transfers` page was created by duplicating the `kiana-swaroop-airport-transfers` page. However, the duplicated Sass file contained hyphenated variables (e.g., `$color-black`) which are not defined in the project's `_base.sass` (which uses underscores, e.g., `$color_black`). This caused the Sass compilation to fail for the new page, resulting in missing styles and broken layouts.

## Goals / Non-Goals

**Goals:**
- Fix the Sass variable naming in `css/_rutva-deb-airport-transfers.sass`.
- Restore visual parity between the Rutva Deb page and the Kiana Swaroop reference.
- Ensure the background image and colors are correctly applied and rendered.

**Non-Goals:**
- Redesigning the landing page layout.
- Modifying the underlying logic in `code/rutva-deb-airport-transfers.js` (unless styling related).

## Decisions

### 1. Synchronize Sass Variables
- **Decision**: Rename all page-specific variables to use underscores.
- **Rationale**: The project's core configuration in `_base.sass` uses underscores. Consistency is required for successful compilation and inheritance.

### 2. Full Logic Mirroring
- **Decision**: Perform a clean duplication of the Sass logic from the reference page.
- **Rationale**: To ensure the pages are identical in functionality and styling, a direct `sed` replacement of the reference file was the most reliable path to clear alignment issues.

## Risks / Trade-offs

- **[Risk] Manual Compilation** → [Mitigation] Triggered `npx sass` manually to verify the build before proceeding.
- **[Risk] Variable Mismatch** → [Mitigation] Verified computed styles in the browser using Playwright to confirm the fix.
