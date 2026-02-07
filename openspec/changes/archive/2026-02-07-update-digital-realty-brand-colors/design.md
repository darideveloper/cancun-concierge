# Design: Digital Realty Brand Aesthetics

## Overview
This document outlines the visual structure and color mapping for the Digital Realty landing page.

## Color Palette Mapping
The requested colors are mapped to functional UI elements as follows:

| Color Name | Hex Code | Role | UI Elements |
| :--- | :--- | :--- | :--- |
| **Deep Teal** | `#003B3E` | Secondary/Container | Section backgrounds, Card backgrounds, Sidebar overlays |
| **Pure White** | `#FFFFFF` | Primary/Contrast | Hero background, Headings, Subheadings, Body text on TL |
| **Electric Green** | `#00FF85` | Accent/Action | CTA button background (hover), Link colors, Status icons, Highlights |
| **Near Black** | `#1A1A1A` | Dark/Foundation | Footer background, Main Nav buttons, Dark text elements |

## Component Enhancements

### 1. Hero Section
- **Background**: Pure White (`#FFFFFF`).
- **Text**: Near Black (`#1A1A1A`) for high contrast against the white background.
- **Accents**: Subtle Electric Green (`#00FF85`) borders or underlines.

### 2. Transport Cards
- **Background**: Deep Teal (`#003B3E`).
- **Text**: Pure White (`#FFFFFF`).
- **Highlight (Active State)**: Electric Green (`#00FF85`) for the selection indicator (checkbox) and price accents.
- **Improved Visuals**:
    - Increase `border-radius` to `12px`.
    - Add a subtle outer glow when active using `rgba(#00FF85, 0.2)`.

### 3. CTA Buttons
- **Standard**: Near Black background with White text.
- **Hover**: Electric Green background with Near Black text for high visibility.

### 4. Footer
- **Background**: Near Black (`#1A1A1A`).
- **Text/Icons**: Pure White with Electric Green hover states for social links.

## Typography
- **Headings**: Use `Urbanist` (as per project conventions) with bold weights.
- **Body**: Use `Maven Pro` for optimal readability at small sizes.
- **Contrast**: Ensure all text on Deep Teal backgrounds meets at least AA accessibility standards (Pure White on Teal is highly readable).
