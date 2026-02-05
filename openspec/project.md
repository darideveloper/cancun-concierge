# Project Context

## Purpose
Cancun Concierge is a Destination Management Company (DMC) website for managing logistics, tours, and transfers in Cancun and Riviera Maya. It serves as a hub for landing pages for specific client groups, airport transfer bookings (via WhatsApp and Stripe), and concierge services.

## Tech Stack
- **Frontend**: HTML5, CSS3, Sass (.sass indented syntax).
- **JavaScript**: Vanilla JavaScript (ES6+), functional and event-driven.
- **Payments**: Mixed approach using WhatsApp direct links for inquiries and a custom Stripe integration via an external Flask API (`services.darideveloper.com`).
- **Typography**: Google Fonts (Maven Pro, Urbanist).
- **Iconography**: Custom inline SVGs using the `<symbol>` and `<use>` pattern for reusability.
- **Animations**: AOS (Animate On Scroll) library (used in specific landing pages).

## Project Conventions

### Code Style
- **HTML**: Semantic HTML5. Use unique IDs for interactive elements to facilitate testing and automation. Use the `<symbol>`/`<use>` pattern for recurring icons.
- **CSS/Sass**: Modular `.sass` files prefixed with underscores (e.g., `_header.sass`) in the `css/` directory. These are compiled into a central `styles.css`. 
- **JS**: Vanilla JS logic organized in the `code/` directory, typically named after the page or feature it serves (e.g., `code/transportation.js`).
- **Classes**: Preference for descriptive, kebab-case class names. While the project is currently Vanilla, any transition to component-based frameworks should prioritize `clsx` for conditional class management.

### Architecture Patterns
- **Multi-Page Application (MPA)**: Simple horizontal structure where each major section is an HTML file or a directory with its own `index.html`.
- **Landing Pages**: Client-specific landing pages are isolated in their own directories (e.g., `digitalrealty-airport-transfers/`) to allow for highly customized designs while sharing global assets.
- **Multi-language**: Hardcoded English (`/en`) and Spanish versions, with a language switcher in the header.

### Testing Strategy
- **Responsive Design**: All pages must be tested for mobile, tablet, and desktop views.
- **Payment Flow**: Verify WhatsApp message formatting and Stripe API responses in the sandbox environment.

### Git Workflow
- **OpenSpec Workflow**: Strictly follow the Stage 1-3 workflow (Proposal -> Implementation -> Archive) as documented in `openspec/AGENTS.md`.
- **Change IDs**: Use verb-led, kebab-case IDs (e.g., `add-new-landing-page`).

## Domain Context
- **DMC**: Destination Management Company focused on Cancun and Los Cabos.
- **Concierge**: High-touch service requiring clear communication (hence the heavy use of WhatsApp).
- **Client Groups**: Often handle large corporate or wedding groups requiring dedicated landing pages.

## Important Constraints
- **Vanilla Implementation**: Maintain the project as a pure Vanilla HTML/JS/Sass project unless a transition to a framework is explicitly requested.
- **External API**: Stripe payments depend on the `darideveloper.com` Flask API.
- **SEO**: Ensure each page has appropriate title tags and meta descriptions for search visibility in the travel sector.

## External Dependencies
- **Google Fonts**: Hosting typography.
- **AOS**: Scroll animations.
- **SweetAlert2**: (Optional/Legacy) For enhanced user feedback dialogs.
- **Stripe API**: External endpoint for payment processing.
