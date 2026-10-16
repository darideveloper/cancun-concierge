## Why

Since the Ashley & Jonathan transfer page shipped, it has been refined through hands-on iteration, and the shipped page no longer matches the recorded specs. The wizard asked for the **vehicle before the trip type** (so prices could not be shown until the final step), the cards carried a redundant "Ashley & Jonathan Price:" label plus a crossed-out regular price that no longer reflects the real rate, the hero headline floated over the section below it, and the mobile layout overflowed horizontally while wasting screen width on both the cards and the booking form. This change records the refinements already applied so the specs, design record, and task history describe the page that actually exists.

## What Changes

- **BREAKING (spec-level)**: Reverse the booking selection order. The transportation type is now chosen **first** (Complimentary Airport Arrival Transportation, Hotel - Airport Transfer, Round Trip Transfer) and the vehicle **second**; vehicle prices are filled in once the direction is known.
- Simplify the price data model from `[regular, guest]` pairs to a single guest price per vehicle/direction; all `current_price[1]` reads become `current_price`. The agreed guest rates for the paid directions are Deluxe SUV **215.00 USD**, Van **155.00 USD**, and Sprinter **244.00 USD**, with the Complimentary Airport Arrival transfer remaining `0` and rendering as "Free".
- Rename the transfer-type options to "Complimentary Airport Arrival Transportation", "Hotel - Airport Transfer", and "Round Trip Transfer".
- Slim the vehicle cards to vehicle + capacity + price only: remove the "Ashley & Jonathan Price:" label and the struck-through regular price row.
- Re-anchor the hero H1 banner to the bottom edge of the hero gallery with a 60 px upward overlap, guaranteed never to cover the next section's content.
- Expose the back button on mobile/web by overriding a globally leaked `button.back { display: none }` rule, scoped to this page only.
- Make card rows equal height with vertically centred contents (transport-type and vehicle rows alike).
- Give the stacked mobile cards breathing room: a 15px gap between cards, 15px of internal padding, a 10px bottom margin, and no top margin on the card heading.
- Fix mobile layout: widen the card rows and the booking form, and stop the `<fieldset>` from overflowing its grid column.
- Recompile `css/styles.css` from the Sass source (the compiled file is never hand-edited).

## Capabilities

### New Capabilities
- *(none — every change refines the existing Ashley & Jonathan capabilities)*

### Modified Capabilities
- `ashley-jonathan-booking-flow`: the selection order becomes type → vehicle, price lookup uses a single guest price, and the CTA-labeling and name-sanitization scenarios reference the renamed transfer types.
- `ashley-jonathan-landing-page`: pricing card display drops the "Ashley & Jonathan Price:" label and the regular price, and adds the transfer-type option labels.
- `ashley-jonathan-visual-theme`: adds the hero banner placement and overlap treatment, responsive layout rules (equal-height card rows, mobile margins), and the page-scoped override that restores the back button.

## Impact

| File | Change |
|---|---|
| `ashley-jonathan-airport-transfers/index.html` | Hero banner moved after the gallery; selection sections reordered; transfer-type labels renamed; vehicle cards reduced to heading + price |
| `code/ashley-jonathan-airport-transfers.js` | Two-step selection handlers, `current_direction` state, `formatPrice()` helper, scalar `prices`, CTA labeling, back-button reset |
| `css/_ashley-jonathan-airport-transfers.sass` | Hero banner in-flow with `-60px` overlap, back-button override, equal-height card rows, mobile widths, `<fieldset>` reset |
| `css/styles.css` | Regenerated via `npx sass css/styles.sass css/styles.css` |

- **External systems**: unchanged. The Stripe endpoint, `stripe_user`, payload shape, and `transport_vehicle` field are untouched; only the numeric price passed as `price` changes value.
- **Isolation guarantee**: all edits remain scoped to `.ashley-jonathan-airport-transfers`, `header.ashley-jonathan`, and `#footer.ashley-jonathan`. No other client landing page is modified.
- **Known remaining leak**: the unscoped rules in `css/_digitalrealty-airport-transfers.sass` (`button.back`, `.transportation .titles`, `.faqs .questions-wrapper .question .title`) still apply site-wide; this change only contains them for this page, deliberately, per the earlier decision to avoid touching another client's partial.
