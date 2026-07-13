## 1. HTML: Add Google Fonts links

- [x] 1.1 Remove the Libre Baskerville `<link>` from `josh-will-airport-transfers/index.html` `<head>`
- [x] 1.2 Add Alegreya + Lato `<link>` tag to `josh-will-airport-transfers/index.html` `<head>`, reusing existing preconnects
- [x] 1.3 Bump `?v=1.0.4` → `?v=1.0.5` on the stylesheet `<link>` to bust Cloudflare cache

## 2. CSS: Replace heading font-family to Alegreya

- [x] 2.1 Update `.josh-will-airport-transfers h1..h6` font-family: `"Kinfolk"` → `"Alegreya", serif`
- [x] 2.2 Update `header.josh-will h2, #footer.josh-will h2` font-family: `"Kinfolk"` → `"Alegreya", serif`
- [x] 2.3 Update `.josh-will-airport-transfers .paralax p` font-family: `"Kinfolk"` → `"Alegreya", serif`

## 3. CSS: Replace body font-family to Lato

- [x] 3.1 Update `.josh-will-airport-transfers` base font-family: `"Libre Baskerville"` → `"Lato", sans-serif`
- [x] 3.2 Update `header.josh-will, #footer.josh-will` font-family: `"Libre Baskerville"` → `"Lato", sans-serif`
- [x] 3.3 Update `header.josh-will a, #footer.josh-will a` font-family: `"Libre Baskerville"` → `"Lato", sans-serif`
- [x] 3.4 Update `.josh-will-airport-transfers p, a, span, label` font-family: `"Libre Baskerville"` → `"Lato", sans-serif`
- [x] 3.5 Update `.josh-will-airport-transfers input, select, button` font-family: `"Libre Baskerville"` → `"Lato", sans-serif`

## 4. Verify

- [x] 4.1 Load the page and confirm headings render in Alegreya
- [x] 4.2 Confirm body text renders in Lato
- [x] 4.3 Confirm no other pages are affected
