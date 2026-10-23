# Proposal

## Why

The current Marlee & Brock airport transfers page uses a stark, high-contrast navy and linen palette. Introducing the **Vintage Romance** color palette (Kraft Beige `#E4CBB4`, Dusty Coral `#ED8A7B`, Deep Navy `#1B365D`, and Soft Sky Blue `#A0C9E0`) softens the aesthetic, evoking an organic watercolor wedding stationery look while preserving WCAG accessibility and brand hierarchy.

## What Changes

- **Update Color Variables**: Reconfigure Sass variables in `css/_marlee-brock-airport-transfers.sass`:
  - Canvas background: Kraft Beige (`#E4CBB4`)
  - Primary text and key structures: Deep Navy (`#1B365D`)
  - Accent / CTA buttons and highlights: Dusty Coral (`#ED8A7B`)
  - Secondary accents, badges, and card borders: Soft Sky Blue (`#A0C9E0`)
  - Clean card surface: White (`#ffffff`)
- **Revise Component Colors**:
  - Header and footer: Deep Navy background (`#1B365D`) with white links and Dusty Coral (`#ED8A7B`) hover states.
  - Page body canvas: Kraft Beige (`#E4CBB4`) on `body.marlee-brock` and `main.marlee-brock-airport-transfers`.
  - Hero banner: Deep Navy (`#1B365D`) background with white and Soft Sky Blue titles.
  - Vehicle cards: Crisp white backgrounds with subtle Navy/Sky borders, transitioning to Dusty Coral active borders and checkbox fills.
  - Primary CTA button: Dusty Coral (`#ED8A7B`) background with Deep Navy (`#1B365D`) bold text, inverting on hover.
  - FAQ accordion: Deep Navy question bars with white text, Dusty Coral expand arrows, and Deep Navy answer text.
- **Stylesheet Compilation**: Compile `css/styles.sass` into `css/styles.css` ensuring complete namespace isolation.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `marlee-brock-visual-theme`: Updates the brand color palette requirements and CTA/control styling scenarios from Deep Royal Navy & Linen to the Vintage Romance palette (Kraft Beige `#E4CBB4`, Dusty Coral `#ED8A7B`, Deep Navy `#1B365D`, Soft Sky Blue `#A0C9E0`).

## Impact

- Modifies `css/_marlee-brock-airport-transfers.sass` and regenerates `css/styles.css`.
- Preserves existing layout, JavaScript logic, and self-hosted fonts (`Agrandir Tight`, `Caslon #540`, `Jimmy Script`).
- Zero impact on any other client landing pages or shared global styles.
