/**
 * ==============================================================================
 * MIST WHEELS — CENTRAL CONFIGURATION FILE
 * ==============================================================================
 * 
 * Edit this single file to update contact numbers, WhatsApp routing, brand copy,
 * service areas, operating hours, and feature toggles.
 * 
 * NOTE REGARDING CONTACT DETAILS:
 * If whatsappNumber or email is left as an empty string (""), the website
 * gracefully provides a copyable booking request and configuration guide
 * without displaying broken links or fake dummy numbers.
 */

const MIST_CONFIG = {
  // Brand Identity
  brandName: "Mist Wheels",
  tagline: "Expert car care, wherever you park", // Draft tagline (easily changed)
  subTagline: "Mobile exterior washes, interior steam cleaning & extraction, and scheduled fleet detailing brought directly to your home, office, or compound across Kampala and Greater Kampala.",
  
  // Launch Region Summary
  launchServiceArea: "Kampala & Greater Kampala",

  // Contact Information
  contact: {
    // Enter the official WhatsApp business phone number in international format
    // without '+' or spaces (e.g. "256770000000" for Uganda).
    // Leave as "" until your official WhatsApp number is confirmed.
    whatsappNumber: "", 
    displayWhatsApp: "WhatsApp Dispatch Line (Pending Setup)",

    // Official telephone line for regular voice calls (leave "" if pending)
    phone: "",
    displayPhone: "Enquiries via Booking Form",

    // Official email address for enquiries & fleet quotes
    email: "",

    // Operational Dispatch Location
    dispatchLocation: "Mobile Dispatch Unit, Kampala, Uganda",

    // Operating Hours
    hours: {
      weekdays: "07:30 – 18:00",
      saturdays: "08:00 – 18:00",
      sundays: "08:30 – 16:30 (Advance bookings only)",
      holidays: "Subject to prior confirmation"
    },

    // Social Media Links (leave "" if inactive)
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
      x: ""
    }
  },

  // Service Areas in Kampala & Greater Kampala
  serviceZones: [
    {
      id: "central",
      name: "Central Kampala & Hills",
      tag: "Zone 1",
      note: "Daily mobile dispatch for homes & executive offices",
      neighbourhoods: ["Nakasero", "Kololo", "Naguru", "Bugolobi", "Mbuya", "Kamwokya", "Old Kampala"]
    },
    {
      id: "northeast",
      name: "East & North-East Suburbs",
      tag: "Zone 2",
      note: "Direct residential and office compound service",
      neighbourhoods: ["Ntinda", "Kiwatule", "Naalya", "Kira", "Namugongo", "Kyanja", "Kulambiro", "Bukoto"]
    },
    {
      id: "south",
      name: "South & Lake Crescent",
      tag: "Zone 3",
      note: "Residential compounds & gated estates",
      neighbourhoods: ["Muyenga", "Munyonyo", "Buziga", "Ggaba", "Makindye", "Kansanga", "Bunga"]
    },
    {
      id: "entebbe-corridor",
      name: "Entebbe Road & Southern Suburbs",
      tag: "Zone 4",
      note: "Scheduled slots and corporate compound visits",
      neighbourhoods: ["Lubowa", "Lweza", "Seguku", "Kajjansi", "Akright City", "Entebbe (by advance appointment)"]
    },
    {
      id: "west-north",
      name: "West & North Suburbs",
      tag: "Zone 5",
      note: "Residential and commercial visits arranged by appointment",
      neighbourhoods: ["Rubaga", "Mengó", "Kasubi", "Kawempe", "Nansana (central)", "Gayaza Road corridor"]
    }
  ],

  // Vehicle Categories
  vehicleTypes: [
    { id: "saloon", label: "Saloon / Hatchback" },
    { id: "compact_suv", label: "Compact SUV / Crossover" },
    { id: "full_suv", label: "Full-size SUV / 4x4" },
    { id: "pickup", label: "Double-Cabin Pickup" },
    { id: "van_minibus", label: "Executive Van / Minibus" },
    { id: "fleet_commercial", label: "Commercial Fleet / Multi-vehicle" }
  ],

  // Services Catalog
  services: [
    {
      id: "maintenance_wash",
      name: "Maintenance Wash",
      tagline: "Careful mobile exterior wash & light cabin refresh",
      duration: "45 – 75 mins",
      pricingLabel: "Request a quote",
      description: "Designed for vehicles needing a regular swirl-free exterior wash, glass clearing, wheel degreasing, and light interior tidy-up right where you park.",
      inclusions: [
        "Gentle pre-rinse to lift loose sand and Kampala red dust",
        "pH-neutral hand shampoo wash with clean microfibre mitts",
        "Wheel face, tyre face, and rim degrease & rinse",
        "Streak-free exterior window and mirror cleaning",
        "Door jamb and boot sill wipe-down",
        "Cabin floor vacuuming & dashboard dust removal",
        "Satin tyre dressing application"
      ],
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "interior_deep_clean",
      name: "Interior Deep Clean & Extraction",
      tagline: "High-temperature steam cleaning & hot extraction",
      duration: "2 – 3.5 hours",
      badge: "Popular Choice",
      pricingLabel: "Request a quote",
      description: "Comprehensive cabin restoration targeting embedded red dust, ground-in mud, upholstery stains, air vent grime, and lingering interior odours.",
      inclusions: [
        "Deep carpet, boot lining, and seat vacuuming",
        "High-temperature steam treatment for air vents, cupholders, and crevices",
        "Hot-water shampoo extraction on fabric seats & carpet floor mats",
        "Leather upholstery gentle cleansing & conditioning nourishment",
        "Headliner spot cleaning & pillar trim wipe-down",
        "Interior glass clarity treatment (removes oily films and smudges)",
        "Odour-neutralising cabin vapour refresh"
      ],
      image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "full_detail",
      name: "Full Vehicle Detail",
      tagline: "Complete exterior revival & deep interior programme",
      duration: "3.5 – 5 hours",
      pricingLabel: "Request a quote",
      description: "Our most thorough bumper-to-bumper mobile treatment combining full exterior rejuvenation and paint sealant with complete interior steam extraction.",
      inclusions: [
        "Everything included in Maintenance Wash & Interior Deep Clean",
        "Targeted bug, tar, and road grime removal",
        "Deep wheel barrel and brake dust removal",
        "Exterior plastic trim revival and UV protection",
        "Hand-applied protective paint sealant for gloss & water beading",
        "Detailed engine bay perimeter tidy-up and steam wipe",
        "Exhaust tip brightening & chrome polish"
      ],
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fleet_cleaning",
      name: "Scheduled Fleet Cleaning",
      tagline: "Tailored mobile cleaning programmes for company vehicles",
      duration: "Customised by fleet size",
      badge: "Corporate",
      pricingLabel: "Request corporate quote",
      description: "Structured on-site mobile cleaning contracts for corporate pools, NGOs, delivery fleets, and tour operators across Kampala.",
      inclusions: [
        "On-site service at your corporate yard, depot, or office compound",
        "Flexible service windows: early morning, evening, or weekend shifts",
        "Standardised quality checklists for each vehicle in the fleet",
        "Consolidated monthly invoicing and clear service activity logs",
        "Zero employee downtime: staff do not leave the office to wash cars",
        "Controlled low-moisture technology with minimal yard run-off"
      ],
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Feature Flags
  features: {
    showPricingTable: false, // Set to true once verified fixed price tariffs are approved
    showTestimonials: false  // Set to true only once genuine, verified customer reviews are supplied
  },

  // Mandatory Booking Notice
  bookingDisclaimer: "Notice: All booking requests submitted online or via WhatsApp are subject to schedule and location confirmation prior to dispatch."
};

// Expose globally for HTML5 scripts
if (typeof window !== "undefined") {
  window.MIST_CONFIG = MIST_CONFIG;
}
