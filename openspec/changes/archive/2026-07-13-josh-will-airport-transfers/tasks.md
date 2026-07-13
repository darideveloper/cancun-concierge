## 1. Hero Image

- [x] 1.1 Copy hero image from `/home/daridev/Desktop/Downloads/hero.webp` to `imgs/josh-will-hero.webp`
- [x] 1.2 Verify `imgs/josh-will-hero.webp` exists and is valid

## 2. Page Directory & HTML

- [x] 2.1 Create directory `josh-will-airport-transfers/`
- [x] 2.2 Copy `dana-hirshal-airport-transfers/index.html` into the new directory as `index.html`
- [x] 2.3 Replace all "Dana & Hirshal" text with "Josh & Will" in the HTML
- [x] 2.4 Change header/footer CSS class from `dana-hirshal` to `josh-will`
- [x] 2.5 Change main CSS class from `dana-hirshal-airport-transfers` to `josh-will-airport-transfers`
- [x] 2.6 Update script src from `../code/dana-hirshal-airport-transfers.js` to `../code/josh-will-airport-transfers.js`
- [x] 2.7 Update H1 to: "PLEASE BOOK NOW AND SECURE YOUR TRANSFER FROM CANCUN INTERNATIONAL AIRPORT TO <br/> Belmond Maroma or The Fairmont Mayakoba"
- [x] 2.8 Replace hotel `<option>` values from "SLS Playa Mujeres" / "Other Hotel Playa Mujeres area" to "Belmond Maroma" / "The Fairmont Mayakoba" / "Other" (3 options)
- [x] 2.9 Update hotel helper text from "Transfer rates apply to hotels located in Playa Mujeres area only" to "Transfer rates apply to hotels located in Riviera Maya / Mayakoba area only"

## 3. JavaScript Controller

- [x] 3.1 Copy `code/dana-hirshal-airport-transfers.js` to `code/josh-will-airport-transfers.js`
- [x] 3.2 Change `stripe_user` from `"dana-hirshal"` to `"josh-will"`
- [x] 3.3 Update `prices` object to match Dana & Hirshal values (Van $127/$250, Suburban $160/$315, Sprinter $185/$360)

## 4. Sass Partial

- [x] 4.1 Copy `css/_dana-hirshal-airport-transfers.sass` to `css/_josh-will-airport-transfers.sass`
- [x] 4.2 Replace all `dana-hirshal` class references with `josh-will` in the Sass file
- [x] 4.3 Update `.paralax` background-image URL from `dana-hirshal-hero.webp` to `josh-will-hero.webp`

## 5. Styles Import & Compilation

- [x] 5.1 Add `@import 'josh-will-airport-transfers'` to `css/styles.sass`
- [x] 5.2 Recompile `css/styles.sass` to `css/styles.css` with: `sass css/styles.sass css/styles.css`
- [x] 5.3 Verify no Sass compilation errors
