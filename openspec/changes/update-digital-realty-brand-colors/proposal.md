# Proposal: Update Brand Colors and Visual Styles for Digital Realty

## Change ID
`update-digital-realty-brand-colors`

## Status
Draft

## Context
The Digital Realty landing page was recently created by duplicating the Rohan Karisma page. We now need to apply the specific brand colors and improve the overall visual appeal to ensure it looks premium and professional.

## Objectives
- Apply the new brand color palette consistently across the landing page.
- Improve the general aesthetics of the page (spacing, typography, component styling).
- Ensure readability and high visual impact.

## Proposed Changes
### Styling
- Define the new brand colors as Sass variables in `css/_digitalrealty-airport-transfers.sass`:
    - `#003B3E` (Deep Teal): Central sections and cards background.
    - `#FFFFFF` (Pure White): Hero section, headings, and text on dark backgrounds.
    - `#00FF85` (Electric Green): Links, highlight accents, and CTA text.
    - `#1A1A1A` (Near Black): Footer and primary navigation buttons.
- Update the hero section to use the Pure White background with appropriate contrast for text.
- Update central section cards to use the Deep Teal background with Pure White/Electric Green text.
- Style the footer with the Near Black background.
- Update buttons and links to use the Electric Green as an accent color.
- Enhance card visuals with better border-radius and subtle shadows.
- Optimize typography (Maven Pro and Urbanist) for better readability.

## Impact
- **Visual identity**: The page will align with the Digital Realty brand.
- **User Experience**: Improved aesthetics and contrast will lead to a better booking experience.
- **Consistency**: Centralized brand variables in Sass make future updates easier.

## Verification Plan
### Automated Tests
- Run `npm run build` (if applicable/configured) to ensure Sass compiles correctly.
- Validate HTML structure for accessibility (WCAG contrast) where possible.

### Manual Verification
- Inspect the landing page at `/digitalrealty-airport-transfers/index.html` on desktop and mobile.
- Verify that hover states on buttons and links use the Electric Green accent.
- Ensure the footer transition from the deep teal sections looks seamless.
