## ADDED Requirements

### Requirement: Page loads Alegreya and Lato from Google Fonts

The page `<head>` SHALL include `<link>` tags loading Alegreya (weights 400, 700) and Lato (weights 400, 700) from Google Fonts with `display=swap`, reusing existing preconnect links.

#### Scenario: Font links present in HTML head
- **WHEN** the page HTML is served
- **THEN** the `<head>` contains a `<link>` with `href` matching `fonts.googleapis.com/css2?family=Alegreya:wght@400;700`
- **AND** the `<head>` contains a `<link>` with `href` matching `fonts.googleapis.com/css2?family=Lato:wght@400;700`

### Requirement: Headings use Alegreya

All `<h1>` through `<h6>` elements inside `.josh-will-airport-transfers`, `header.josh-will`, and `#footer.josh-will` SHALL render with `font-family: "Alegreya", serif`.

#### Scenario: Heading renders in Alegreya
- **WHEN** any `<h1>`–`<h6>` element is inside `.josh-will-airport-transfers`
- **THEN** its computed `font-family` includes `"Alegreya"`

### Requirement: Body text uses Lato

All `<p>`, `<a>`, `<span>`, `<label>`, `<input>`, `<select>`, `<button>`, and general text inside `.josh-will-airport-transfers`, `header.josh-will`, and `#footer.josh-will` SHALL render with `font-family: "Lato", sans-serif`.

#### Scenario: Body text renders in Lato
- **WHEN** a `<p>` element is inside `.josh-will-airport-transfers`
- **THEN** its computed `font-family` includes `"Lato"`

#### Scenario: Form inputs render in Lato
- **WHEN** an `<input>` or `<select>` element is inside `.josh-will-airport-transfers`
- **THEN** its computed `font-family` includes `"Lato"`

### Requirement: Hero parallax text uses Alegreya

The hero text `.josh-will-airport-transfers .paralax p` SHALL render with `font-family: "Alegreya", serif`.

#### Scenario: Hero text renders in Alegreya
- **WHEN** the `.paralax p` element is rendered
- **THEN** its computed `font-family` includes `"Alegreya"`

### Requirement: Font change is scoped to Josh & Will page

No other pages SHALL have their font-family changed by this implementation.

#### Scenario: Other pages unaffected
- **WHEN** viewing any page other than `josh-will-airport-transfers/index.html`
- **THEN** the `font-family` SHALL remain unchanged from current values
