## Context

The static landing page located at `/rutva-dev-airport-transfers/index.html` currently contains two links in its header navigation: "Social responsability" and "Los cabos". These links are not relevant for the guests booking airport transfers for this specific event. Removing them reduces the item count from 5 to 3.

## Goals / Non-Goals

**Goals:**
- Remove the "Social responsability" link from the header navigation bar in `/rutva-dev-airport-transfers/index.html`.
- Remove the "Los cabos" link from the header navigation bar in `/rutva-dev-airport-transfers/index.html`.
- Adjust the expanded mobile navigation menu height on the Rutva & Dev page from the default `385px` to `240px`.

**Non-Goals:**
- Do not modify other landing pages or templates.
- Do not change styling or behavior of navigation links in the shared stylesheet.

## Decisions

### Link Removal in static HTML
The landing page is static HTML. We will directly remove the `<li>` items corresponding to these links from the `<nav>` block inside the `<header>` element of the file:
```html
<li><a href="../en/social" class="title">Social responsability</a></li>
<li><a href="https://loscabosconcierge.com/" class="title" target="_blank">Los cabos</a></li>
```

### Mobile Navigation Menu Height Override
Because the parent stylesheet `css/_header.sass` sets the mobile menu height globally to `385px` for 5 links, we will add a specific override in `css/_rutva-dev-airport-transfers.sass` to target `header.rutva-dev` on screens under `790px` width:
```sass
header.rutva-dev
    @media screen and (max-width: 790px)
        .content nav:not(.collapsed)
            height: 240px
```
This ensures the mobile menu collapses and expands cleanly to fit exactly the 3 remaining items (Home, Services, Transportation).

## Risks / Trade-offs

*(None)*
