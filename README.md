# Cancun Concierge — Client Website (Vanilla JS)

Client website for Cancun Concierge DMC with multiple pages, bilingual content (English/Spanish) and online payments. Includes the deprecated main landing site plus ~18 per-event booking sub-pages still in production (airport transfers, weddings, celebrations and tour carts).

## Tech Stack

- **HTML5 / CSS / Sass** — static multi-page site, no framework or bundler
- **Vanilla JavaScript (ES6+)** — page logic in `code/`
- **Stripe** — payments via external Flask API
- **AOS** — scroll animations (tour/activity pages)
- **SweetAlert2** — success dialogs (Digital Realty page)

## Features

- Main site (deprecated): home, services, transportation, social responsibility and English mirror (`/en/`)
- ~18 booking sub-pages, one per event/client, each with its own booking form:
  - Airport transfers: dana-hirshal, digitalrealty, ella-james, frini-chen, jessica-maxwell (multi-airport CUN/TQO), josh-will, kiana-swaroop, monica-vivek, rohan-karisma, rutva-dev (shared shuttle + private), serena-gabriel, sunnyjoy-brett, sphere-rocket
  - Tour/activity carts: riviera-getaway, service-master-restore, the-honey-pot, plumbing/waterworks-customers-activities
- Vehicle selection with per-event price tables and passenger rules
- Stripe checkout with per-event Stripe account IDs
- FAQ accordions, auto-sliding galleries and WhatsApp booking links
- Multi-language support (Spanish at root, English under `/en/`)

## Setup

```sh
# Open in browser or serve statically, e.g.
python -m http.server 8080
```

---

## Contact

Developed by [Dari Developer](https://darideveloper.com)

- 🌐 [darideveloper.com](https://darideveloper.com)
- 💬 [WhatsApp](https://api.whatsapp.com/send?phone=5214493402622)
- 📂 [View project in portfolio](https://darideveloper.com/portafolio/cancunconcierge)

---

# Cancun Concierge — Sitio web del cliente (Vanilla JS)

Sitio web del cliente para Cancun Concierge DMC con múltiples páginas, contenido bilingüe (inglés/español) y pagos en línea. Incluye la landing principal (deprecada) y ~18 subpáginas de reserva por evento aún en producción (traslados aeroportuarios, bodas, celebraciones y carritos de tours).

## Tech Stack

- **HTML5 / CSS / Sass** — sitio estático multi-página, sin framework ni bundler
- **JavaScript vanilla (ES6+)** — lógica de páginas en `code/`
- **Stripe** — pagos mediante API Flask externa
- **AOS** — animaciones de scroll (páginas de tours/actividades)
- **SweetAlert2** — diálogos de éxito (página de Digital Realty)

## Features

- Sitio principal (deprecado): inicio, servicios, transportación, responsabilidad social y espejo en inglés (`/en/`)
- ~18 subpáginas de reserva, una por evento/cliente, cada una con su formulario:
  - Traslados aeroportuarios: dana-hirshal, digitalrealty, ella-james, frini-chen, jessica-maxwell (multi-aeropuerto CUN/TQO), josh-will, kiana-swaroop, monica-vivek, rohan-karisma, rutva-dev (shuttle compartido + privado), serena-gabriel, sunnyjoy-brett, sphere-rocket
  - Carritos de tours/actividades: riviera-getaway, service-master-restore, the-honey-pot, plumbing/waterworks-customers-activities
- Selección de vehículo con tablas de precios y reglas de pasajeros por evento
- Checkout de Stripe con IDs de cuenta por evento
- Acordeones de FAQ, galerías con auto-slide y enlaces de reserva por WhatsApp
- Soporte multi-idioma (español en la raíz, inglés en `/en/`)

## Setup

```sh
# Abrir en el navegador o servir estáticamente, p.ej.
python -m http.server 8080
```

---

## Contacto

Desarrollado por [Dari Developer](https://darideveloper.com)

- 🌐 [darideveloper.com](https://darideveloper.com)
- 💬 [WhatsApp](https://api.whatsapp.com/send?phone=5214493402622)
- 📂 [Ver proyecto en el portafolio](https://darideveloper.com/portafolio/cancunconcierge)
