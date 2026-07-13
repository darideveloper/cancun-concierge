## Context

The FAQ section on the josh-will-airport-transfers page contains 5 questions with paragraph answers. These `p` elements inherit `$color-black: #fbe7c1` from the base `.josh-will-airport-transfers p` rule, making them invisible on the white page background.

The Sass file already has a `.faqs` section with `.questions-wrapper .question .title` styling. The answer paragraphs have no dedicated rule.

## Goals / Non-Goals

**Goals:**
- Apply `$color-text: #c9ad85` to FAQ answer paragraphs for readability
- Keep FAQ title styling unchanged (already correct: `$color-primary` bg, white text)

**Non-Goals:**
- No changes to FAQ title backgrounds, question text, or layout
- No HTML changes

## Decisions

### Decision: Target `.faqs .questions-wrapper .question p` vs. broader selector
**Chosen**: `.faqs .questions-wrapper .question p` — targets only FAQ answer paragraphs, not the question title h3 or other page paragraphs.
**Rationale**: FAQ titles already have white text on sage green background. Broadening the selector could accidentally override intended styles on the titles.

## Risks / Trade-offs

None. This is a single CSS property addition with no side effects.
