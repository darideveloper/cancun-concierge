# Design

## Context

The Ashley & Jonathan landing page (`ashley-jonathan-airport-transfers/index.html`) and controller (`code/ashley-jonathan-airport-transfers.js`) handle vehicle selection and checkout submission. The backend in `ezbookingtours-store` provides the dedicated endpoint `/ashley-jonathan/sale/` where arrival service is free ($0.00) while departure and round-trip services require payment. See `proposal.md` for background motivation.

## Goals / Non-Goals

**Goals:**
- Provide dynamic environment detection so local development and production work without manual code edits.
- Dynamically update submit button CTA ("Book Free Transfer" vs "Buy now") based on whether the selected service is free ($0.00).
- Sanitize extracted transport option names (removing `<br>` breaks and extra whitespace).
- Add error handling on the fetch request to alert the user and restore button state on network/API failure.
- Update the completion redirect message to a universal confirmation message.

**Non-Goals:**
- Modifying backend pricing or checkout session generation (managed within `ezbookingtours-store`).
- Modifying other landing pages or global styling sheets.

## Decisions

- **Decision 1: Runtime hostname detection for API endpoint**
  - *Choice*: Check `window.location.hostname` (`localhost`, `127.0.0.1`) and `window.location.protocol === "file:"`. Use `http://127.0.0.1:8000/ashley-jonathan/sale/` when local; otherwise fallback to `https://omar.apps.darideveloper.com/ashley-jonathan/sale/`.
  - *Alternatives considered*: Build tools or `.env` replacement scripts.
  - *Rationale*: Cancun Concierge is a static multi-page project without a bundler. Runtime host detection is frictionless and reliable across local and deployed environments.

- **Decision 2: Dynamic CTA button labeling**
  - *Choice*: On transport selection and vehicle card change, evaluate the price of the active option. If `current_price[1] === 0`, set button value to `"Book Free Transfer"`; otherwise set to `"Buy now"`.
  - *Alternatives considered*: Multiple submit buttons with hide/show toggles.
  - *Rationale*: A single button avoids layout shifts and maintains consistent DOM referencing.

- **Decision 3: Normalizing transport title strings**
  - *Choice*: Apply `.replace(/\s+/g, ' ').trim()` to `transport_card.querySelector("h3").innerText`.
  - *Alternatives considered*: Adding `data-title` attributes to each HTML card.
  - *Rationale*: Cleans existing `<br>` tags without requiring repetitive markup changes.

- **Decision 4: Universal confirmation alert on redirect**
  - *Choice*: When `?done=true` is present, display `"Reservation confirmed! Check your email for booking details."`.
  - *Alternatives considered*: Differentiating between paid and free return URLs.
  - *Rationale*: Both free and paid transactions finish at `?done=true` and both dispatch email confirmations, making a unified confirmation message accurate and clean.

## Risks / Trade-offs

- **Risk: Network error leaves button disabled** → *Mitigation*: In the `.catch()` block, alert the user and reset `#submit.value` to the appropriate label ("Book Free Transfer" or "Buy now").
- **Risk: Cross-origin restrictions during local development** → *Mitigation*: The `ezbookingtours-store` Django backend already has `CORS_ALLOW_ALL_ORIGINS = True` enabled.
