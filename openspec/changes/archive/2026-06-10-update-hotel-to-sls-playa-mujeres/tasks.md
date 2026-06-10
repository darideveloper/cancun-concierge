## 1. Content Updates in index.html

- [x] 1.1 Replace hero H1 title: "Nizuc Resort & Spa" → "SLS Playa Mujeres" (line ~89)
- [x] 1.2 Replace arriving-hotel `<option>` value and label: "Nizuc Resort & Spa" → "SLS Playa Mujeres" (line ~268)
- [x] 1.3 Replace departing-hotel `<option>` value and label: "Nizuc Resort & Spa" → "SLS Playa Mujeres" (line ~299)
- [x] 1.4 Update FAQ "How do I find Cancun Concierge…" answer text: replace "Nizuc Resort & Spa resort" → "SLS Playa Mujeres resort" (line ~402)
- [x] 1.5 Update FAQ "How do I pay…" answer text: replace "Nizuc Resort & Spa resort" → "SLS Playa Mujeres resort" (line ~416)

## 2. Verification

- [x] 2.1 Grep for "Nizuc" in `dana-hirshal-airport-transfers/index.html` — confirm zero results
- [x] 2.2 Load the page in a browser and verify: hero title shows "SLS Playa Mujeres", both hotel dropdowns show "SLS Playa Mujeres" as first option, and FAQ answers reference the new name
- [x] 2.3 Verify no other files in the project reference the old hotel name in relation to Dana & Hirshal's page
