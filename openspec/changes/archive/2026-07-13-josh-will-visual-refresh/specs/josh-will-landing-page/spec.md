## MODIFIED Requirements

### Requirement: Rebranded landing page for Josh & Will

The system SHALL provide a landing page at `/josh-will-airport-transfers/index.html` displaying "Josh & Will" branding instead of generic or other couple branding, referencing hotel venues **Belmond Maroma** and **The Fairmont Mayakoba**. The header logo SHALL use `logo-white.png`.

#### Scenario: User visits Josh & Will transfers page

- **WHEN** a user visits `/josh-will-airport-transfers/index.html`
- **THEN** heading elements, prices text, and FAQ answers SHALL refer to "Josh & Will"
- **AND** the page header, main body, and footer classes SHALL target `josh-will` / `josh-will-airport-transfers`
- **AND** the hero H1 SHALL read "PLEASE BOOK NOW AND SECURE YOUR TRANSFER FROM CANCUN INTERNATIONAL AIRPORT TO <br/> Belmond Maroma or The Fairmont Mayakoba"

#### Scenario: Header displays white logo

- **WHEN** the page header renders
- **THEN** the logo image SHALL use `../imgs/logo-white.png` with alt text "Cancún Concierge Logo"
