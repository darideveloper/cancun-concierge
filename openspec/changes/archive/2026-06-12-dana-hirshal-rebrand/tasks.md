## 1. Hero Image

- [x] 1.1 In `css/styles.css`, update `.dana-hirshal-airport-transfers .paralax` to use `url("../imgs/dana-hirshal-hero.webp")` as `background-image`
- [x] 1.2 Add `.dana-hirshal-airport-transfers .paralax::before` rule with `position: absolute; inset: 0; background: rgba(188, 202, 205, 0.18); content: ""; pointer-events: none` to create the tint overlay
- [x] 1.3 Ensure `.dana-hirshal-airport-transfers .paralax` has `position: relative` and `overflow: hidden` to contain the `::before` overlay

## 2. Text Color

- [x] 2.1 Update the root `.dana-hirshal-airport-transfers { color: ... }` value from `#50493f` → `#6c6c6c`
- [x] 2.2 Update `h1–h6` color rule from `#50493f` → `#6c6c6c`
- [x] 2.3 Update `p, a, span, label, input, select, button` color rule from `#50493f` → `#6c6c6c`
- [x] 2.4 Update `.transportation .titles h1, .transportation .titles p` text color from `#50493f` → `#6c6c6c`

## 3. Background / Surface Color

- [x] 3.1 Update `.transportation .titles h1, .transportation .titles p` `background-color` from `#efeeec` → `#bccacd`
- [x] 3.2 Update `.cards.transport .card .text p.price` color from `#efeeec` → `#bccacd`
- [x] 3.3 Ensure the main background-color of `.dana-hirshal-airport-transfers` remains white

## 4. Highlight / Accent Color

- [x] 4.1 Update `.buy-form .wrapper-fieldsets .btn.cta` and `.buy-form .btn.cta` `background-color` from `#50493f` → `#4f492f`
- [x] 4.2 Update `.buy-form .btn.cta` `border` color from `#50493f` → `#4f492f`
- [x] 4.3 Update `.buy-form .btn.cta:hover` text `color` from `#50493f` → `#4f492f`
- [x] 4.4 Update `.buttons button.back svg` `fill` from `#50493f` → `#4f492f`
- [x] 4.5 Update `.faqs .questions-wrapper .question .title` `background-color` from `#50493f` → `#6c6c6c`
- [x] 4.6 Update `.cards.transport .card .text h3, .card .text p.price` `color` from `rgba(80, 73, 63, 0.8)` → `rgba(79, 73, 47, 0.8)`
- [x] 4.7 Update `.cards.transport .card .text h3 span, .card .text p.price span` `color` from `#50493f` → `#4f492f`
- [x] 4.8 Update `.cards.transport .card .checkbox` `border` from `rgba(80, 73, 63, 0.8)` → `rgba(79, 73, 47, 0.8)`
- [x] 4.9 Update `.cards.transport .card:hover .checkbox .inside` `background-color` from `rgba(80, 73, 63, 0.6)` → `rgba(79, 73, 47, 0.6)`
- [x] 4.10 Update `.cards.transport .card.active .checkbox .inside` `background-color` from `rgba(80, 73, 63, 0.8)` → `rgba(79, 73, 47, 0.8)`

## 5. Form Input Styles

- [x] 5.1 Update `fieldset label input, fieldset label select` `border` from `1px solid #4F6A9E` → `1px solid #4f492f`
- [x] 5.2 Update `fieldset label input:focus:not(:disabled), input:hover:not(:disabled)` and select equivalents `box-shadow` from `0px 0px 8px 0px #4F6A9E` → `0px 0px 8px 0px #4f492f`

## 6. Cleanup

- [x] 6.1 Remove `border: 1px solid red !important` from `.dana-hirshal-airport-transfers h2 + p`

## 7. Verify

- [x] 7.1 Open `http://0.0.0.0:8001/dana-hirshal-airport-transfers/` and confirm the new hero image displays correctly
- [x] 7.2 Confirm tint overlay is visible on the hero (subtle coastal wash)
- [x] 7.3 Confirm text is `#6c6c6c` grey throughout the page
- [x] 7.4 Confirm CTA buttons, FAQ titles use `#4f492f` olive
- [x] 7.5 Confirm form input borders and glow are olive, not blue
- [x] 7.6 Confirm no red border appears under any h2
- [x] 7.7 Visually check other client pages (e.g., serena-gabriel, kiana-swaroop) are unaffected
