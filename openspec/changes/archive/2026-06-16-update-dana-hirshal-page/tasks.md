## 1. Sass — Hide crossed-out prices

- [x] 1.1 Add `display: none` to `.regular-price` rule in `css/_dana-hirshal-airport-transfers.sass` (around line 165, inside `.cards.transport .card .text`)

## 2. Sass — Mobile nav height

- [x] 2.1 Add a `header.dana-hirshal` override at `@media (max-width: 790px)` in `css/_dana-hirshal-airport-transfers.sass` to set `nav` height to 240px (entered from 385px default for 5 links → 3 links)

## 3. Sass — Mobile H1 font reduction

- [x] 3.1 Add `@media (max-width: 500px)` rule in `css/_dana-hirshal-airport-transfers.sass` setting `.transportation .titles h1.small` font-size to 21px (30% reduction from the 30px at 900px breakpoint)

## 4. HTML — Header nav link updates

- [x] 4.1 Change "Los cabos" `<a>` href from `https://loscabosconcierge.com/` to `https://marcodmc.com/`
- [x] 4.2 Remove the "Transportation" `<li>` from the nav
- [x] 4.3 Remove the "Social responsability" `<li>` from the nav

## 5. HTML — H1 content update

- [x] 5.1 Insert `<br/>` before "SLS Playa Mujeres" in the H1 text

## 6. HTML — Text replacement

- [x] 6.1 Change "Refreshments" to "Bottled waters" in the FAQ list item (line 391)

## 7. Build — Recompile Sass

- [x] 7.1 Run `npx sass css/styles.sass css/styles.css` to compile the updated Sass to CSS
- [x] 7.2 Increment the `?v=` version parameter in the stylesheet `<link>` tag (e.g., `v=1.0.2` → `v=1.0.3`)

## 8. Verify

- [x] 8.1 Open `dana-hirshal-airport-transfers/index.html` in a browser and confirm all 5 changes render correctly
- [x] 8.2 Test on mobile viewport (<= 500px) to verify H1 font size and nav height
- [x] 8.3 Confirm no other pages are affected by checking the header on `index.html` and `en/index.html`
