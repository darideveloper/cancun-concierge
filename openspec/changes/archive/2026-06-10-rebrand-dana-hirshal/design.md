## Context

The landing page [dana-hirshal-airport-transfers](file:///develop/vanilla/cancun-concierge/dana-hirshal-airport-transfers) was copied from [serena-gabriel-airport-transfers](file:///develop/vanilla/cancun-concierge/serena-gabriel-airport-transfers). It requires rebranding to separate its configuration, script logic, styling, and payment routing.

## Goals / Non-Goals

**Goals:**
- Update all visible name references (Serena & Gabriel/Gabe) on the Dana & Hirshal page to "Dana & Hirshal".
- Separate page-specific styles by creating a dedicated Sass file `css/_dana-hirshal-airport-transfers.sass` and referencing it.
- Separate page-specific logic by creating a dedicated JavaScript controller `code/dana-hirshal-airport-transfers.js` with the correct Stripe identification.
- Ensure the page remains fully functional.

**Non-Goals:**
- Updating the venue/destination hotel (keep referencing "Nizuc Resort & Spa" for now).
- Modifying pricing schedules (keep existing prices as placeholders for now).
- Implementing new logo image files (the stylesheet will map to placeholders/current assets until files are provided).

## Decisions

### Decision 1: Isolate resources by creating dedicated files
- **Choice**: Duplicate/copy the original script and stylesheet files to `code/dana-hirshal-airport-transfers.js` and `css/_dana-hirshal-airport-transfers.sass` instead of sharing files or writing conditional code.
- **Rationale**: Isolating styles and scripts prevents regressions on the original Serena & Gabriel page and makes future modifications (like custom price lists or hotel changes) simple and isolated to Dana & Hirshal.

### Decision 2: Maintain existing prices and hotel as placeholders
- **Choice**: Leave Nizuc Resort & Spa and default pricing unchanged.
- **Rationale**: The user indicated these details are not finalized. Keeping existing configurations preserves landing page functionality until final details are ready.

## Risks / Trade-offs

- **[Risk]** The Stripe backend might not recognize the `dana-hirshal` identifier, causing the checkout redirects to fail when submitting the form.
  - **[Mitigation]** The page will construct and send the correct `dana-hirshal` payload; the backend API must register this user token before production deployment.
- **[Risk]** Broken logo images due to missing files.
  - **[Mitigation]** The Sass code will map background images to existing paths as placeholders until custom logo assets are created.
