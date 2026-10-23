# Spec Delta

## ADDED Requirements

### Requirement: Authentic watercolor doodle decorations and header framing
The Marlee & Brock landing page SHALL display authentic transparent watercolor illustration doodles framing the event logo and section headings.

#### Scenario: Logo-flanking watercolor doodles
- **WHEN** the Marlee & Brock landing page header renders
- **THEN** the event logo SHALL be flanked by authentic watercolor doodles (palm trees on left, floral bouquet on right)
- **AND** all decorative doodle elements SHALL be marked with `aria-hidden="true"` and empty alt attributes

#### Scenario: Decorative coral blossom header accents
- **WHEN** the landing page headers render
- **THEN** the Dusty Coral watercolor blossom motif (`marlee-brock-coral-blossom.png`) SHALL be displayed flanking the "OUR SERVICES INCLUDE" and "FAQS" section headings

### Requirement: Service and transport card padding integrity
The landing page cards SHALL provide balanced internal padding across all viewports.

#### Scenario: Service details card top padding
- **WHEN** the "OUR SERVICES INCLUDE" cards render
- **THEN** each card SHALL provide balanced top and bottom padding separating the icon and text from the card borders
