# Tasks

## 1. Font Asset Placement

- [x] 1.1 Copy `f09272f12e61ef1b6512e56af9b09fc9.woff` from `scratch/cannonwedding/_assets/fonts/` to `fonts/Agrandir-Tight-Medium.woff` and verify file size (~31 KB) and permissions
- [x] 1.2 Copy `3964f852757a10c50b492dc39c9c7590.woff` from `scratch/cannonwedding/_assets/fonts/` to `fonts/Caslon-540-Italic.woff` and verify file size (~37 KB) and permissions
- [x] 1.3 Copy `187d53cfec4e68fadaabb27d2f4f8a85.woff` from `scratch/cannonwedding/_assets/fonts/` to `fonts/Jimmy-Script.woff` and verify file size (~60 KB) and permissions

## 2. Sass Typography Integration

- [x] 2.1 In `css/_marlee-brock-airport-transfers.sass`, declare `@font-face` rules for `Agrandir Tight`, `Caslon #540`, and `Jimmy Script` using relative URLs (`../fonts/<font-file>`)
- [x] 2.2 In `css/_marlee-brock-airport-transfers.sass`, update font variables to use the self-hosted families: `$font-regular: 'Agrandir Tight', sans-serif`, `$font-title: 'Caslon #540', serif`, and `$font-highlight: 'Jimmy Script', cursive`

## 3. HTML Cleanup

- [x] 3.1 Remove external Google Fonts `<link rel="preconnect">` and `<link href="...family=Montserrat...">` tags from `marlee-brock-airport-transfers/index.html` `<head>`

## 4. Compilation & Verification

- [x] 4.1 Recompile Sass with `sass css/styles.sass css/styles.css` and verify clean build without syntax errors
- [x] 4.2 Inspect `css/styles.css` to verify `@font-face` rules and font-family declarations are correctly generated and properly scoped without affecting global styles or other landing pages
