# Proposal

## Why

The landing page for Ashley & Jonathan's wedding airport transfers must connect to the dedicated backend service (`/ashley-jonathan/sale/`) in `ezbookingtours-store`. In this event, the arrival service is 100% complimentary for all guests across all vehicles and dates, whereas departure and round-trip transfers require Stripe payment. The frontend needs to route submissions to the appropriate API endpoint in both local development and production environments, provide clear user feedback (such as contextual CTA button labels for free versus paid options), handle API failures gracefully, sanitize transport type titles, and display universal booking confirmation alerts upon completion.

## What Changes

- **Dynamic API Endpoint Routing**: Auto-detect whether the landing page is running locally (`localhost`, `127.0.0.1`, or `file:`) or in production, routing payloads to `http://127.0.0.1:8000/ashley-jonathan/sale/` or `https://omar.apps.darideveloper.com/ashley-jonathan/sale/` respectively.
- **Dynamic CTA Button Text**: Update the form submit button label based on selected transfer type—displaying "Book Free Transfer" for complimentary arrival transfers ($0.00) and "Buy now" for paid departure or round-trip transfers.
- **Transportation Name Sanitization**: Sanitize card headings (removing `<br>` breaks and extra whitespace) so clean titles like `"Round Trip Transfer"` are sent to the backend.
- **Network Error Handling**: Add `.catch()` failure handling to the fetch request to notify users if an error occurs and restore the submit button from its loading state.
- **Universal Confirmation Message**: Update the `?done=true` redirect message from "Payment saved..." to a universal confirmation message ("Reservation confirmed! Check your email for booking details.") accurate for both complimentary and paid bookings.

## Capabilities

### New Capabilities
- `ashley-jonathan-booking-flow`: Manages the end-to-end booking submission flow, environment-aware endpoint routing, dynamic button labeling, title sanitization, error resilience, and completion feedback for Ashley & Jonathan airport transfers.

### Modified Capabilities
*(None)*

## Impact

- Frontend controller: `code/ashley-jonathan-airport-transfers.js`.
- Frontend markup: `ashley-jonathan-airport-transfers/index.html`.
- Backend dependency: `ezbookingtours-store` (`/ashley-jonathan/sale/` API).
