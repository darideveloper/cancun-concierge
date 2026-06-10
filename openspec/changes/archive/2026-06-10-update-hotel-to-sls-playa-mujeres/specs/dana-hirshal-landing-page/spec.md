## MODIFIED Requirements

### Requirement: Rebranded Landing Page for Dana & Hirshal
The system MUST provide a rebranded landing page at `/dana-hirshal-airport-transfers/index.html` displaying event-specific branding ("Dana & Hirshal" / "Dana & Hirshal's wedding") instead of "Serena & Gabriel", and MUST reference the correct hotel venue **SLS Playa Mujeres** (not "Nizuc Resort & Spa") in all guest-facing copy.

#### Scenario: User visits the Dana & Hirshal transfers page
- **WHEN** a user visits the `/dana-hirshal-airport-transfers/index.html` page
- **THEN** the heading elements, prices text, and FAQ answers MUST refer to "Dana & Hirshal" or "Dana & Hirshal's wedding"
- **AND** the page header, main body, and footer classes MUST target "dana-hirshal" or "dana-hirshal-airport-transfers"
- **AND** the hero H1 title MUST read "PLEASE BOOK NOW AND SECURE YOUR TRANSFER FROM CANCUN INTERNATIONAL AIRPORT TO SLS Playa Mujeres"

#### Scenario: Hotel select options display correct venue
- **WHEN** a user opens the arriving or departing hotel dropdown in the booking form
- **THEN** the first option MUST display "SLS Playa Mujeres" with value "SLS Playa Mujeres"
- **AND** no option SHALL contain the text "Nizuc Resort & Spa"

#### Scenario: FAQ answer references correct venue
- **WHEN** a user reads the FAQ "HOW DO I FIND CANCUN CONCIERGE ONCE I'M READY TO LEAVE THE AIRPORT?"
- **THEN** the answer text MUST reference "SLS Playa Mujeres resort" as the destination

#### Scenario: Payment FAQ references correct venue
- **WHEN** a user reads the FAQ "HOW DO I PAY FOR MY TRANSPORTATION?"
- **THEN** the answer text MUST reference "SLS Playa Mujeres resort" as the destination
