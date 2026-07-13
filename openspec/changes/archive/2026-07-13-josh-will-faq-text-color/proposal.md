## Why

FAQ answer paragraphs (text inside `.faqs .questions-wrapper .question p`) inherit `$color-black: #fbe7c1` (warm cream), making them unreadable on the white page background — same issue as the h2 headings and service cards fixed in the previous visual refresh.

## What Changes

- Apply `$color-text: #c9ad85` (dark beige) to FAQ answer text (both single `<p>` and multiple `<p>` elements) within `.faqs .questions-wrapper .question`

## Capabilities

### New Capabilities
- `faq-text-color`: FAQ answer paragraphs on the josh-will-airport-transfers page SHALL use `#c9ad85` for readable contrast on white backgrounds

### Modified Capabilities
- `text-readability`: Extend the dark-beige readability rule from h2/info/service-cards to also cover FAQ answer paragraphs

## Impact

- `css/_josh-will-airport-transfers.sass`: Add `.faqs .questions-wrapper .question p` rule with `color: $color-text`
- `css/styles.css`: Compiled mirror
- No HTML or JS changes needed
