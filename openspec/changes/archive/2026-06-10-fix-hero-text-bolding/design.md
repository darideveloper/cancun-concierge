## Context

The current stylesheet defines `.shuttle-warning` paragraphs under `.transportation .titles` with `font-weight: bold`. This prevents inline `<strong>` tags from standing out since the surrounding text is already bold.

## Goals / Non-Goals

**Goals:**
- Adjust warning texts to render at regular weight.
- Enable inline bold formatting via `<strong>` tags to render in bold.

**Non-Goals:**
- Changing the HTML markup.
- Modifying heading (`h1`) font styles.

## Decisions

### Decision: Update Sass Class Font Weight
We will change `.transportation .titles .shuttle-warning` styling in `css/_rutva-dev-airport-transfers.sass` from `font-weight: bold` to `font-weight: normal` (or remove `font-weight: bold` if normal is the inherited default weight).

Since the paragraphs in HTML are written as:
- `<p class="shuttle-warning">... <strong>private transportation service</strong> ...</p>`
this SASS update will ensure the main text uses the default font weight of `Quicksand` while the `<strong>` element uses the bold weight of `Quicksand`.

## Risks / Trade-offs

- **[Risk]** The text may feel too thin or less readable if `font-weight: normal` is not thick enough.
  - *Mitigation*: Quicksand regular weight is very legible. We will verify the font weights visually.
