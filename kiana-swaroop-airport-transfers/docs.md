# Index Page Features - Kiana & Swaroop Transportation Booking

The `index.html` page is a specialized transportation booking landing page for **Kiana & Swaroop's wedding**, managed by **Cancún Concierge**. 

## 1. Transportation Booking Engine (Interactive Workflow)
The page features a multi-step booking process that dynamically shows/hides sections based on user selections:
*   **Airport Selection:** Choose between Cancun Airport (CUN) and Tulum Airport (TQO).
*   **Vehicle Selection:** Interactive cards to choose between:
    *   **Van** (1 - 6 passengers)
    *   **Sprinter** (1 - 12 passengers)
    *   **Suburban** (1 - 4 passengers)
*   **Transfer Type:** Interactive selection for:
    *   **One Way (Arrival):** Airport to Hotel.
    *   **One Way (Departure):** Hotel to Airport.
    *   **Round Trip:** Full service.
*   **Dynamic Pricing:** Real-time price updates (managed via JavaScript) displayed within the selection cards.

## 2. Comprehensive Booking Form
Once the transportation type is selected, a detailed form appears to collect:
*   **General Information:** Name, Last name, Email, and exact number of passengers.
*   **Arrival Logistics:** Date, time, airline, flight number, and specific hotel (Hilton or Conrad Tulum).
*   **Departure Logistics:** Date, time, airline, flight number, and hotel pickup location.
*   **Payment Integration:** A "Buy Now" call-to-action that likely redirects to a payment gateway.

## 3. Visual & Interactive Elements
*   **Image Gallery:** A responsive carousel/slideshow showing transportation vehicles with manual navigation (Next/Back).
*   **Hero Parallax:** A "Kiana & Swaroop" header section with a parallax scrolling effect.
*   **FAQ Accordion:** An interactive "Frequently Asked Questions" section where users can click to reveal answers regarding flight delays, meeting points, and payments.
*   **Scroll-to-Top:** A dedicated "TOP" button in the footer for easy navigation.

## 4. Information & Service Highlights
*   **Inclusions List:** Visual grid highlighting included services (Private transfers, Welcome greeters, Refreshments, Travel Insurance, Gratuities, and Federal taxes).
*   **Real-time Flight Monitoring:** Explicit mentions in the FAQ that flights are monitored for delays.
*   **WhatsApp Support:** Direct link and phone number for emergency flight cancellations or changes.

## 5. Navigation & Global UI
*   **Responsive Header:** A logo and navigation menu (Home, Services, Transportation, Social Responsibility) that collapses into a "hamburger" menu on mobile.
*   **Social & Contact Footer:** Quick links to Facebook, Instagram, email, and phone contact, along with the "Mexican Caribbean" mission statement.
*   **Branding:** Specialized styling (using "Libre Baskerville" and "Quicksand" fonts) tailored for the wedding event.

## Technical Implementation
The page relies on four external JavaScript modules:
1.  `header.js`: Handles the sticky header and mobile menu.
2.  `gallery.js`: Manages the image carousel.
3.  `faqs.js`: Controls the accordion behavior of the FAQ section.
4.  `kiana-swaroop-airport-transfers.js`: Orchestrates the core booking logic, pricing, and form validation.
