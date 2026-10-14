# Tasks

## 1. Controller Updates

- [x] 1.1 Implement runtime environment detection for API routing in `code/ashley-jonathan-airport-transfers.js` and verify local (`http://127.0.0.1:8000/ashley-jonathan/sale/`) vs production endpoint selection.
- [x] 1.2 Implement dynamic CTA button text updating in `code/ashley-jonathan-airport-transfers.js` based on selected service price and verify toggling between "Book Free Transfer" and "Buy now".
- [x] 1.3 Implement transport title sanitization in `code/ashley-jonathan-airport-transfers.js` to strip line breaks and extra whitespace, and verify clean payload formatting (e.g. "Round Trip Transfer").
- [x] 1.4 Add `.catch()` network error handling to the fetch call in `code/ashley-jonathan-airport-transfers.js` and verify failure alerts and button state restoration.
- [x] 1.5 Update the redirect handler in `code/ashley-jonathan-airport-transfers.js` to show universal confirmation alert on `?done=true` and verify message text.

## 2. Integration and Verification

- [x] 2.1 Test complimentary arrival booking flow with local Django backend and verify database record creation with `sale_done=True` and redirect to `?done=true`.
- [x] 2.2 Test paid departure and round trip booking flows with local Django backend and verify Stripe checkout session generation.
