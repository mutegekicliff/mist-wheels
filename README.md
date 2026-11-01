# Mist Wheels — Mobile Waterless Car Wash

A clean, polished, mobile-first **HTML5** website for **Mist Wheels**, Uganda's premier mobile waterless vehicle-cleaning service operating across Kampala and Greater Kampala.

Built purely with **HTML5, CSS3, and Vanilla JavaScript** — zero build tools, zero npm packages, and zero server dependencies required.

---

## 💡 Core Value Proposition & Selling Points

1. **100% Waterless Car Washing**: Advanced polymer encapsulation technology lifts road dust, traffic film, and grime safely away from paintwork without scratching and without a single drop of running water poured on the car.
2. **The Washing Bay That Comes To You**: Customers never waste time sitting in traffic or queuing at traditional washing bays. Our technicians wheel the service directly to wherever the vehicle is parked.
3. **No Plumbing & No Water Needed**: We require zero water connections, zero hosepipes, and zero taps from customer premises.
4. **Zero Drainage & Zero Compound Mess**: Completely dry ground operation. No soapy mud pools, muddy run-off, or stained paving tiles. Safe and 100% permitted in apartment basements, corporate parking structures, and paved residential driveways.
5. **No Fixed Structures**: No permanent concrete bays or ramps. The entire operation is carried on an agile, self-contained mobile trolley wheeled directly between parked cars.

---

## 📁 File Structure

```text
Mist Wheels/
├── index.html           # Home page (Hero, Advantages, Services summary, Traditional Bay comparison table, Kampala coverage)
├── services.html        # Detailed Waterless Services catalogue (Exterior Clean, Interior Deep Care, Full Revival)
├── fleet.html           # Scheduled Corporate & Fleet waterless contracts with equipment showcase
├── about.html           # Ethos, the waterless revolution, mobile trolley innovation, and standards
├── faqs.html            # FAQs (How waterless works, paint safety, zero plumbing/drainage, basement suitability)
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
│       └── showcase/    # Real vehicle cleaning & mobile equipment photography
│           ├── mobile-trolley-system.jpg       # Agile mobile trolley unit on wheels
│           ├── portable-trolley-kit.jpg        # Self-contained mobile car care kit
│           ├── hero-steam-wash.jpg             # Waterless exterior cleaning in action
│           ├── detailing-action.jpg            # Paint revival and vehicle care
│           ├── van-fleet-setup.jpg             # Mobile van dispatch setup for corporate fleets
│           ├── interior-extraction-machine.jpg # Commercial interior soil extraction unit
│           └── wheel-rim-steam.jpg             # Precision wheel & rim waterless degrease
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
3. **Web Hosting**: Upload all files directly to any static host (GitHub Pages, Netlify, Cloudflare Pages, cPanel, Firebase Hosting).

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

### 2. Changing the Draft Tagline
```javascript
tagline: "Mobile Waterless Car Wash — The washing bay that comes to you",
```

### 3. Adding More Kampala Suburbs
Simply add strings to the `serviceZones` array in `assets/js/config.js`. They automatically appear in the interactive suburb search tool and booking forms.

---

## 🔒 Compliance & Integrity
- **British English**: Consistent spelling throughout (*programme, honour, colour, specialised, neighbourhood, tyre, odour*).
- **No Invented Claims**: Uses honest *"Request a quote"* pricing. No fictitious reviews, partner certifications, or environmental statistics.
- **Accurate Technology Descriptions**: Explains waterless polymer encapsulation without medical sterilisation claims or unauthorised manufacturer branding.
- **Booking Transparency**: Explicit notice across all forms that bookings are subject to schedule and location confirmation.
