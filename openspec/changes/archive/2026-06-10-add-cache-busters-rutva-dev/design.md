## Context

Cloudflare serves cached versions of CSS (`styles.css`) and Javascript (`rutva-dev-airport-transfers.js`) for the `/rutva-dev-airport-transfers/` page, which means layout styles (such as normal font weight for the shuttle-warning) and logic updates (dynamic date pre-population and locking) are not immediately shown to end users even after being successfully uploaded to the web server via FTP.

## Goals / Non-Goals

**Goals:**
- Implement query-parameter based cache busting for CSS and JS assets referenced in `/rutva-dev-airport-transfers/index.html`.
- Ensure all future asset updates bypass cache immediately upon deployment.

**Non-Goals:**
- Changes to the core functionality of the calendar date-locking JS or sass files.
- Configuring Cloudflare API rules or automated purges (which are outside of codebase control).

## Decisions

### Decision 1: Query-string Versioning vs File-hash Renaming
- **Choice**: Use query-string versioning (e.g., `styles.css?v=1.0.1` and `rutva-dev-airport-transfers.js?v=1.0.1`).
- **Rationale**: Since this is a simple static HTML/JS/CSS site without a build bundler (like webpack or vite) that automatically generates hashes, query-string versioning is lightweight, simple to update manually, and doesn't require modifying file names on disk or within the FTP upload commands.
- **Alternatives considered**: File-hash renaming (e.g. `styles.abc123.css`). This was rejected because it complicates manual FTP uploading and file management on the server.

### Decision 2: Specific version vs timestamp versioning
- **Choice**: Use a version number (e.g. `?v=1.0.1`) that can be incremented when files are changed.
- **Rationale**: Simple to maintain and track in version control.

## Risks / Trade-offs

- **Risk**: Forgetting to update the version parameter in `index.html` during future asset updates.
- **Mitigation**: Add a comment in `index.html` next to the stylesheet and script imports reminding developers to increment/update the version query string when editing the referenced files.
