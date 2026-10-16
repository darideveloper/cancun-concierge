# Design

## Context

The Cancun Concierge project is a legacy static HTML5 Multi-Page Application with no framework and no bundler. Styling is authored in Sass (indented `.sass` syntax) and compiled into one shared stylesheet, `css/styles.css`, which every page links. Each client landing page is an isolated module with three files:

1. `ashley-jonathan-airport-transfers/index.html`
2. `css/_ashley-jonathan-airport-transfers.sass`
3. `code/ashley-jonathan-airport-transfers.js`

Because all pages share one compiled stylesheet, a rule authored without a page prefix leaks to every page. `css/_digitalrealty-airport-transfers.sass` contains three such unscoped rules (`.transportation .titles { bottom: 100px }` with `350px`/`400px` media variants, `button.back { display: none }`, and a `.faqs .questions-wrapper .question .title` background override). That leak is the backdrop for several decisions below.

The page shipped replicating `rohan-karisma-airport-transfers`, then was refined by hand. This change records the refinements. See [proposal.md](proposal.md) for motivation.

## Goals / Non-Goals

**Goals:**
- Make the booking wizard read naturally: choose the trip direction first, then the vehicle.
- Show the guest price where the decision is made, without a redundant label or a stale "regular" price.
- Anchor the hero headline to the bottom of the hero image so it reads as a deliberate overlap and can never cover the section below.
- Make the page usable at 320px width, with equal-height option cards and no horizontal scrolling.
- Keep every edit inside the three Ashley & Jonathan files, and author styles only in Sass.

**Non-Goals:**
- Fixing the leaked rules in `css/_digitalrealty-airport-transfers.sass` at the root (that would change other client pages; it was explicitly deferred).
- Editing `css/styles.css` by hand — it is always regenerated.
- Changing the Stripe endpoint, `stripe_user`, payload shape, or the `transport_vehicle` field.
- Replacing or re-cropping the carousel images.

## Decisions

### 1. Two-step order: direction first, vehicle second

**Choice:** Render the transfer-type cards first and the vehicle cards second, swapping their initial `hide` state and their DOM order.

**Rationale:** Prices are keyed by both vehicle and direction (`prices[vehicle][direction]`), but the passenger options and the form fieldsets depend on the *direction* only. Asking for the direction first means the direction is known before the vehicle, so the vehicle cards can present each vehicle's exact price for that direction side by side — which is the comparison the guest actually needs. It also keeps the form's two/three-column layout tied to a value that is already settled.

**Alternatives considered:**
- *Keep vehicle-first and show price ranges on the direction cards.* Rejected: ranges are less honest than an exact figure and add formatting complexity.
- *Show all direction × vehicle combinations on one screen.* Rejected: doubles the option count and departs from the established pattern shared by every other transfer page.

### 2. Vehicle cards remain visible as the selection summary

**Choice:** On vehicle selection the vehicle cards stay on screen above the form, with the chosen card marked `active`. Only the transfer-type cards are hidden once the direction is chosen.

**Rationale:** The original page kept the previous step visible while the form was open. Keeping the vehicle row visible preserves that affordance and gives the guest a persistent record of what they are booking, without adding a new summary component.

**Alternatives considered:** Hiding both card rows for a cleaner form. Rejected: it removes any on-screen confirmation of the choice and leaves only the back arrow.

### 3. Price data simplified to a single guest price

**Choice:** Change `prices` from `{ vehicle: { direction: [regular, guest] } }` to `{ vehicle: { direction: guest } }`, and replace the four `current_price[1]` reads with `current_price`.

**Rationale:** Once the struck-through regular price is removed from the cards, index `0` is dead data. Leaving an unused "regular" number in the source contradicts the removal and invites a future reader to assume it is still rendered. The billed amount is unchanged — it was always index `1`. The rates applied in this change are Deluxe SUV 215.00, Van 155.00, and Sprinter 244.00 USD for the paid directions, with the complimentary arrival at `0`.

**Alternative considered:** Keep the pair and ignore index `0`. Rejected: leaves misleading dead data in the payment path.

### 4. Hero banner lives in normal flow after the gallery

**Choice:** Move `<div class="titles regular-width">` from before `.gallery` to immediately after it, and style it as `position: relative; bottom: auto; height: auto; margin-top: -60px`.

**Rationale:** While the banner was `position: absolute`, it floated over whatever sat beneath it, so it could cover the option cards and the `h2`. Making it an in-flow block placed after the hero means the following section is laid out below it automatically — overlapping the next section becomes impossible by construction rather than by tuning. `margin-top: -60px` gives the intended "riding over the image" look.

Three details are load-bearing:
- **`position: relative`, not `static`.** `.gallery` is `position: relative`, so a statically painted banner would render *underneath* the hero image. Relative positioning keeps it in flow while letting it paint above; the base `.transportation .titles` rule already supplies `z-index: 1`.
- **`bottom: auto` is required, not cosmetic.** `bottom` offsets relatively positioned elements too, and the leaked `.transportation .titles { bottom: 100px }` (with `350px`/`400px` media variants) would otherwise displace the banner at every width. The scoped selector's higher specificity (0,3,0 vs 0,2,0) means the media variants cannot reassert.
- **`margin-top: 0` on the `h1`.** The user-agent default `h1 { margin-top: 0.67em }` added ~27px of invisible space above the banner, so the visible overlap was only ~33px instead of 60px.

**Alternatives considered:**
- *Keep the banner absolute with `align-items: flex-end` plus a translate, and reserve space on the `h2`.* Rejected: needs a magic reserve value and can still cover the `h2` when the heading wraps on small screens.
- *Use flex `order` on `.transportation.transport` to reorder without moving markup.* Rejected: it turns the section into a flex column, changing margin behaviour for the `h2`, cards, and buttons — more blast radius than moving one `div`.

### 5. Leaked global rules are contained, not fixed

**Choice:** Counter the leaks with page-scoped declarations: `display: inline-block` on `.buttons button.back`, and `bottom: auto` on `.transportation .titles`.

**Rationale:** The scope of this change is the Ashley & Jonathan page. Editing `css/_digitalrealty-airport-transfers.sass` would alter another client's page, so the leaks are neutralised locally with higher-specificity selectors. This mirrors the precedent set for `dana-hirshal-airport-transfers`.

**Trade-off:** The leak remains for every other page. It is recorded as a known remaining issue in the proposal rather than silently fixed.

### 6. Equal-height card rows via the grid container

**Choice:** Set `align-items: stretch` on `.cards.transport` rather than on `.card`.

**Rationale:** The base `.transportation .cards` sets `align-items: flex-start`, which lets each card size to its own text. `stretch` is a grid-level property, so it belongs on the grid container; the card's inherited `align-items: center` then vertically centres the checkbox and text block inside the taller box. Because both card rows are `.cards.transport`, one declaration covers both.

Measurement confirmed the contents were already vertically centred before the change — the visible defect was uneven card heights (117px vs 95px in the transport-type row), not off-centre content.

### 7. Mobile width, and the fieldset overflow

**Choice:**
- `@media (max-width: 900px)`: `.cards.transport { width: 95%; max-width: 560px }` (was 50%).
- `@media (max-width: 900px)`: `.wrapper-fieldsets.two-columns/three-columns { width: 100% }` (was 80%).
- `fieldset { padding: 0; min-width: 0 }`.
- Delete the `@media (max-width: 500px)` block.

**Rationale:** Two independent defects produced the broken mobile layout.

1. **Narrow containers.** The 50%/70% card widths and the 80% form width left 48–63px of empty space per side on a phone. Widening them to 95% and 100% is the direct fix, with `max-width: 560px` keeping the single-column cards sane at the top of the 900px range.
2. **A `<fieldset>` that could not fit its column.** The project resets `border` on fieldsets but never `padding`, so the user-agent default `0.35em 0.75em 0.625em` persisted. With `box-sizing: content-box` and `width: 100%`, that padding added ~24px to every fieldset. While the form was 80% wide the overflow was absorbed by the surrounding margin; once the form went full width the same 24px pushed past the viewport and produced a horizontal scrollbar. The `max-width: 500px` block was removed because its two declarations were already unreachable or superseded — the `width: 80%` selector carried higher specificity than the `width: 90%` one, and the card `width: 70%` is replaced by the 95% rule.

**Alternative considered:** Also switching fieldset inputs to `box-sizing: border-box`. Deferred: inputs sit ~2px wider than their label, which is invisible and causes no overflow.

### 8. Mobile card breathing room

**Choice:** Inside the `max-width: 900px` block, give the card rows `gap: 15px`, give each card `padding: 15px` and `margin-bottom: 10px`, and set `margin-top: 0` on the card heading.

**Rationale:** The mobile override previously collapsed the rows to `gap: 0` and each card to `padding: 0`, so stacked cards touched each other with no inner padding. The heading also retained the user-agent `h3 { margin-top: 1em }` (~19px at that size), which pushed the title away from the card's top edge. Both were reported as looking broken on small screens.

**Alternative considered:** Relying on the grid gap alone and leaving the desktop padding untouched. Rejected: the mobile block already overrides the desktop card box, so the spacing values have to be restated there for the stacked layout to read correctly.

## Risks / Trade-offs

- **[Risk: The carousel mixes image aspect ratios]** Slot 1 is `960x480` (2:1) while slots 2–3 are `1400x800` (1.75:1), so the gallery box is sized by the tallest slide and the 2:1 slide is letterboxed. The banner therefore overlaps the hero *box* by exactly 60px but the visible photo by roughly 15px on the first slide and a full 60px on the others. → *Mitigation:* Anchoring to the box keeps the banner position stable across slides, which is the safer property; normalising the slides with `object-fit: cover` was offered and deferred.
- **[Risk: Removed regular prices cannot be shown again without code changes]** → *Mitigation:* The value is a single number in one `prices` object, so reintroducing a discount is a small, local edit.
- **[Risk: Page-scoped leak containment masks a site-wide defect]** → *Mitigation:* Recorded explicitly in the proposal's impact section as a known remaining leak.
- **[Risk: Editing the compiled stylesheet]** → *Mitigation:* Only `css/_ashley-jonathan-airport-transfers.sass` is authored; `css/styles.css` is regenerated with `npx sass css/styles.sass css/styles.css`.
- **[Risk: Regression on desktop while fixing mobile]** → *Mitigation:* The mobile rules are confined to the `max-width: 900px` media query; the only cross-width change is the fieldset reset, which was re-measured at 1280px and 1000px for overflow and column alignment.

## Migration Plan

No data or infrastructure migration. Deployment is a static file change: edit the Sass, recompile, and deploy the three source files plus the regenerated `css/styles.css`. Rollback is a revert of those four files; the previous `css/styles.css` must be restored alongside the sources because they share one compiled artifact.

## Open Questions

- None blocking. Two items were deliberately deferred and are noted above: root-fixing the leaked global rules, and normalising the carousel image aspect ratios so the banner overlap is uniform across slides.
