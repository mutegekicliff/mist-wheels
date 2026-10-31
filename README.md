# Mist Wheels — Mobile Vehicle Cleaning & Detailing

A modern, mobile-first website for **Mist Wheels**, a mobile vehicle-cleaning and detailing service operating across Kampala and Greater Kampala, Uganda.

## 🚀 Key Features

- **Mobile-First & PWA-Ready**: Crafted for effortless booking on smartphones, tablets, and desktops.
- **Direct WhatsApp Booking Engine**: Validates customer details and prepares structured, pre-filled WhatsApp messages for instant dispatch.
- **Brand Identity**: Features an editable SVG monogram mark combining an aerodynamic alloy wheel with interlocking 'M' & 'W' initials and a subtle mist wave.
- **Centralized Configuration**: All contact numbers, service areas, taglines, operating hours, and business flags reside in a single file (`src/config/siteConfig.ts`).
- **Strict Copy & Claims Compliance**:
  - Clear British English copy throughout.
  - No invented testimonials, artificial review counts, fake pricing, or unsubstantiated sanitisation/germ claims.
  - Transparent "Request a quote" model with explicit notice that all bookings are subject to schedule and location confirmation.
- **Interactive Service Area Directory**: Search tool for Kampala suburbs (Nakasero, Kololo, Naguru, Bugolobi, Ntinda, Kira, Namugongo, Muyenga, Munyonyo, Lubowa, etc.).
- **Fleet & Business Solutions**: Dedicated corporate section for scheduled fleet upkeep, office parking complexes, and commercial fleets.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 (Deep slate navy `#0B132B` / `#090E1A` base, white space, and mist cyan `#38BDF8` accent)
- **Icons**: Lucide React

---

## ⚙️ Configuration Guide

All business details, contact information, and editable content are kept strictly separate from layout components in:

```
src/config/siteConfig.ts
```

### 1. Connecting Your Official WhatsApp Number
Open `src/config/siteConfig.ts` and update the `contact` block:

```typescript
contact: {
  // Enter number in international format without '+' or spaces (e.g. Uganda 256...)
  whatsappNumber: '256770000000', 
  displayWhatsApp: '+256 770 000 000',
  phone: '+256 770 000 000',
  email: 'info@mistwheels.ug',
  ...
}
```
*Note: If `whatsappNumber` is left blank, the website gracefully shows a setup notice and allows users to copy their booking details to the clipboard rather than opening a broken link.*

### 2. Updating Tagline & Copy
```typescript
brandName: 'Mist Wheels',
tagline: 'Expert car care, wherever you park',
```

### 3. Adding Confirmed Prices or Genuine Reviews Later
When verified pricing tariffs and genuine customer testimonials become available, simply toggle the feature flags in `siteConfig.ts`:

```typescript
features: {
  showPricingSection: true, // Shows tariff tables once set
  showTestimonials: true,   // Shows real customer reviews once collected
}
```

---

## 💻 Development & Build

### Running Locally
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```
