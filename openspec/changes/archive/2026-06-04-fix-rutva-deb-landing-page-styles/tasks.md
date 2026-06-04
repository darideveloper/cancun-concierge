## 1. Sass Correction

- [x] 1.1 Identify hyphenated variables in `css/_rutva-deb-airport-transfers.sass`
- [x] 1.2 Replace hyphenated variables with underscored versions (e.g., `$color-black` -> `$color_black`)
- [x] 1.3 Sync full Sass logic from `css/_kiana-swaroop-airport-transfers.sass` using `sed`

## 2. Compilation & Verification

- [x] 2.1 Recompile `css/styles.css` using `npx sass`
- [x] 2.2 Verify that `rutva-deb` styles are present in the final CSS file
- [x] 2.3 Use Playwright to confirm background image loads on the live page
- [x] 2.4 Use Playwright to confirm header background color matches reference

## 3. Documentation

- [x] 3.1 Create OpenSpec proposal for retroactive documentation
- [x] 3.2 Update main specs with corrected requirements
