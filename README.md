# Mist Wheels — Mobile Vehicle Cleaning & Detailing

A clean, polished, mobile-first **HTML5** website for **Mist Wheels**, a mobile vehicle-cleaning and detailing service operating across Kampala and Greater Kampala, Uganda.

Built purely with **HTML5, CSS3, and Vanilla JavaScript** — zero build tools, zero npm packages, and zero server dependencies required.

Designed in an executive **Automotive Light Theme** featuring authentic vehicle steam-cleaning, interior extraction, and commercial mobile equipment photography extracted from the supplied equipment catalogue.

---

## 📁 File Structure

```text
Mist Wheels/
├── index.html           # Home page (Hero, Services summary, How it works, Kampala areas)
├── services.html        # Detailed Services catalogue (Maintenance Wash, Interior Steam, Full Detail)
├── fleet.html           # Scheduled Fleet & Business cleaning contracts with equipment showcase
├── about.html           # Ethos, mobile convenience, low-moisture technology, and quality standards
├── faqs.html            # Frequently Asked Questions (space, power, drying time, rain, payments)
├── contact.html         # Interactive booking form with full validation and WhatsApp dispatch
├── assets/
│   ├── css/
│   │   └── style.css    # Clean, mobile-first Light Theme CSS3 (pure white surfaces, slate, mist-blue)
│   ├── js/
│   │   ├── config.js    # Single central configuration file for phone, copy, zones & settings
│   │   └── main.js      # Vanilla JS: mobile menu, validation, WhatsApp routing, accordions
│   └── images/
│       ├── logo.svg     # High-contrast light theme logo (charcoal & mist-blue wordmark + alloy mark)
│       ├── logo-dark.svg# Inverted white logo for dark anchoring footer
│       ├── favicon.svg  # Crisp SVG browser favicon
│       └── showcase/    # Real vehicle steam cleaning & detailing equipment photography
│           ├── hero-steam-wash.jpg           # Mobile steam wash in action on sports car
│           ├── detailing-action.jpg          # Vehicle steam detailing in studio bay
│           ├── van-fleet-setup.jpg           # Self-contained van slider setup for corporate fleets
│           ├── fleet-van-slider.jpg          # Commercial van slide-out drawer mechanism
│           ├── interior-extraction-machine.jpg # Commercial steam & soil extraction unit
│           ├── wheel-rim-steam.jpg           # High-pressure steam cleaning alloy wheel & rim
│           ├── heavy-duty-steam-cleaner.jpg  # Industrial mobile steam generator
│           └── compact-steam-extractor.jpg   # Compact upholstery extraction machine
└── README.md            # Documentation & configuration guide
```

---

## 🚀 How to Run

Because this is a standard HTML5 website, you can view it immediately without installing any tools:

1. **Directly in your browser**: Double-click [`index.html`](file:///Users/mutegekicliffagaba/Desktop/Websites%20&%20Apps/Mist%20Wheels/index.html) or open it with any web browser (Chrome, Safari, Firefox, Edge).
2. **Local HTTP server** (optional):
   ```bash
   # Using Python (standard on macOS)
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000/`.
3. **Web Hosting**: Upload all files directly to any static host (cPanel, Apache, Nginx, GitHub Pages, Netlify, Cloudflare Pages, Firebase Hosting).

---

## 🎨 Theme & Real Photography

- **Light Theme**: Built around pure white (`#ffffff`) surfaces, subtle slate canvases (`#f8fafc`), crisp borders (`#e2e8f0`), deep charcoal headings (`#0f172a`), rich mist-blue accents (`#0284c7`), and WhatsApp emerald (`#16a34a`).
- **Real Equipment Photography**: Includes genuine mobile steam-cleaning and extraction photography from the Fortador catalogue, accurately showcasing the thermal vapour process without making unverified dealer or sanitisation claims.
- **Dual-Mode Logos**: Primary light theme header logo (`logo.svg`) and executive dark footer logo (`logo-dark.svg`).

---

## ⚙️ Configuration Guide

All contact details, phone numbers, draft taglines, and Kampala coverage zones are kept in one clearly commented file:

```
assets/js/config.js
```

### 1. Setting Your Official WhatsApp Number
Open `assets/js/config.js` and set your active WhatsApp number in international format without `+` or spaces (Uganda code: `256`):

```javascript
contact: {
  whatsappNumber: "256770000000",
  displayWhatsApp: "+256 770 000 000",
  phone: "+256 770 000 000",
  email: "info@mistwheels.ug",
  ...
}
```

*Note: If `whatsappNumber` is left blank, the website gracefully provides a copyable message with a settings helper so visitors never encounter broken links.*

### 2. Changing the Draft Tagline
```javascript
tagline: "Expert car care, wherever you park",
```

### 3. Adding More Kampala Suburbs
Simply add strings to the `serviceZones` array in `assets/js/config.js`. They automatically appear in the interactive suburb search tool and booking forms.

---

## 🔒 Compliance & Integrity
- **British English**: Consistent spelling throughout (*programme, honour, colour, specialised, neighbourhood*).
- **No Invented Claims**: Uses honest *"Request a quote"* pricing. No fictitious reviews, partner certifications, or environmental statistics.
- **Accurate Technology Descriptions**: Describes thermal vapour and soil extraction without unverified sanitisation claims or unauthorised manufacturer branding.
- **Booking Transparency**: Explicit notice across all forms that bookings are subject to schedule and location confirmation.
