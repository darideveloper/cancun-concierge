# Spec Delta

## Purpose

Defines the BlankBeach-inspired visual identity, color scheme, typography, and styling rules for the Ashley & Jonathan airport transfers landing page.

## ADDED Requirements

### Requirement: Hero title banner placement
The hero headline banner SHALL sit on the bottom edge of the hero gallery, overlapping upward, and SHALL never cover the content of the following section.

#### Scenario: Banner anchored to the hero bottom
- **WHEN** the landing page renders at any viewport width
- **THEN** the `.titles` banner SHALL be positioned in normal document flow immediately after `.gallery`
- **AND** its top edge SHALL sit 60px above the bottom edge of the hero gallery

#### Scenario: Banner never covers the next section
- **WHEN** the headline wraps to more lines at any viewport width
- **THEN** the banner SHALL NOT overlap the following `TRANSPORTATION OPTIONS` heading or the option cards

#### Scenario: Banner paints above the hero image
- **WHEN** the banner overlaps the hero gallery
- **THEN** the banner SHALL render above the gallery imagery

### Requirement: Equal-height option card rows
Transport-type card rows and vehicle card rows SHALL render with uniform card heights and vertically centred contents.

#### Scenario: Cards in a row share a height
- **WHEN** the cards of a row have different content lengths
- **THEN** every card in that row SHALL render at the height of the tallest card

#### Scenario: Card contents are vertically centred
- **WHEN** a card is taller than its own content
- **THEN** the checkbox and the text block SHALL be vertically centred within the card

### Requirement: Responsive margins without horizontal overflow
The transfer page SHALL use the available width on small screens without producing horizontal page overflow.

#### Scenario: Card widths on small screens
- **WHEN** the viewport is 900px or narrower
- **THEN** the option card rows SHALL span approximately the full available width, capped at 560px

#### Scenario: Card spacing on small screens
- **WHEN** the viewport is 900px or narrower
- **THEN** the stacked option cards SHALL be separated by a 15px gap
- **AND** each card SHALL carry 15px of internal padding and a 10px bottom margin

#### Scenario: Card heading top margin on small screens
- **WHEN** the viewport is 900px or narrower
- **THEN** the option card heading SHALL have its top margin removed so the title sits flush with the card's top padding

#### Scenario: Booking form widths on small screens
- **WHEN** the viewport is 900px or narrower
- **THEN** the booking form fieldset grid SHALL span the full width of the form

#### Scenario: No horizontal scrollbar
- **WHEN** the page is rendered at 320px, 360px, or 420px wide
- **THEN** the document scroll width SHALL NOT exceed the viewport width

### Requirement: Scoped override of leaked global rules
The Ashley & Jonathan stylesheet SHALL contain page-scoped overrides so globally leaked rules cannot hide or displace this page's elements.

#### Scenario: Back button remains visible
- **WHEN** a global `button.back { display: none }` rule is present in the compiled stylesheet
- **THEN** the scoped `.ashley-jonathan-airport-transfers .buttons button.back` rule SHALL set `display: inline-block`
- **AND** the back button SHALL occupy a non-zero, clickable box

#### Scenario: Hero banner bottom is not inherited from a global rule
- **WHEN** a global `.transportation .titles { bottom: 100px }` rule is present in the compiled stylesheet
- **THEN** the scoped `.ashley-jonathan-airport-transfers .transportation .titles` rule SHALL set `bottom: auto`
- **AND** the banner position SHALL NOT depend on the section's total height

### Requirement: Booking form fieldset reset
The booking form fieldsets SHALL reset the user-agent default box padding so they fit their grid column.

#### Scenario: Fieldset fits its column
- **WHEN** the booking form renders at any viewport width
- **THEN** each `fieldset` SHALL have zero padding and a `min-width` of 0
- **AND** no fieldset SHALL be wider than its grid column
