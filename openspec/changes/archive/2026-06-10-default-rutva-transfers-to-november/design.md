## Context

The landing page `rutva-dev-airport-transfers` is designed for the Rutva & Dev wedding/event happening in November 2026. The inputs `#arriving-date` and `#departing-date` are standard native HTML5 date inputs, which default to the current month when clicked.

The system needs to distinguish behaviors:
- For private service: the date selection is editable but defaults to `2026-11-20` (arrival) and `2026-11-23` (departure).
- For group service (shared shuttle): the dates are fixed to the same defaults and cannot be modified.

## Goals / Non-Goals

**Goals:**
- Default the date picker view for `#arriving-date` and `#departing-date` to November 2026 by pre-populating them with `2026-11-20` and `2026-11-23` respectively.
- For private transfers, allow the user to select any date (remove min/max constraints if any exist).
- For shared shuttle transfers, make the dates read-only and lock them so they cannot be edited.
- Apply a visually disabled style to the inputs for shared shuttle transfers using the existing Sass `.disabled` class to maintain design consistency.
- Block all mouse and keyboard interactions on locked inputs.
- Keep the implementation clean and DRY (Don't Repeat Yourself).

**Non-Goals:**
- Modify any other client landing page (e.g., `ella-james-airport-transfers`).
- Add external calendar libraries (like Flatpickr) which would increase the footprint of a simple static page.

## Decisions

### Decision 1: Apply DRY to Date Field Configurations via JavaScript
- **Approach:** Define a helper function `configureDateInput(input, defaultValue, isLocked)` in `code/rutva-dev-airport-transfers.js` to manage both fields:
  ```javascript
  function configureDateInput(input, defaultValue, isLocked) {
    if (!input) return;
    input.value = defaultValue;
    if (isLocked) {
      input.readOnly = true;
      input.classList.add("disabled");
      input.style.pointerEvents = "none";
      input.setAttribute("tabindex", "-1");
    } else {
      input.readOnly = false;
      input.classList.remove("disabled");
      input.style.pointerEvents = "auto";
      input.removeAttribute("tabindex");
    }
  }
  ```
- **Rationale:** 
  - Centralizes the logic to enable/disable, style, and secure the date fields.
  - Ensures changes are identical between arriving and departing inputs without code duplication.
  - Simple, lightweight, and fully self-contained.

### Decision 2: Use Native Date Field Features with Pointer and Focus Lockout for Group Transfers
- **Approach:** When shared shuttle is selected:
  1. Set `readOnly = true`.
  2. Set `pointer-events: none` via inline style to block clicks (which opens calendar pickers).
  3. Set `tabindex="-1"` to prevent keyboard navigation.
  4. Add the `.disabled` class to apply the Sass stylesheet's opacity rule (`opacity: 0.3`) and cursor rule (`cursor: not-allowed`).
  5. Add input event listeners that reset values back to the default if a user somehow alters the field value.
- **Rationale:** 
  - Setting `readOnly = true` keeps the input enabled so that the form serialization (`input:not([disabled])`) still picks up the correct value and sends it to Stripe.
  - Styling and interaction lockouts make the input completely unchangeable in practice across all desktop and mobile browsers.

## Risks / Trade-offs

- **[Risk] Date values are bypassed via devtools or browser extensions**
  - *Mitigation*: We attach change/input event listeners to the date inputs that immediately reset their values back to the default when `current_service_type === "shared"`.
- **[Risk] Form submission includes date inputs even if the user only selected arriving or departing**
  - *Mitigation*: The form logic already disables fields in inactive fieldsets (e.g. `fieldset.departing input` is disabled when departing is not selected). Since we do not change the `disabled` property, disabled fields remain disabled and are not collected by the form selector.
