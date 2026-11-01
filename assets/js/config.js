/**
 * ==============================================================================
 * MIST WHEELS — CENTRAL CONFIGURATION FILE
 * ==============================================================================
 * 
 * CORE SELLING POINT: 100% Mobile Waterless Car Washing
 * "You don't go to the washing bay—the washing bay comes to you."
 * No plumbing, no water, no drainage, no fixed structures.
 * Just a compact, self-contained mobile trolley wheeled directly to wherever you park.
 */

const MIST_CONFIG = {
  // Brand Identity
  brandName: "Mist Wheels",
  tagline: "Mobile Waterless Car Wash — The washing bay that comes to you",
  subTagline: "No water. No plumbing. No drainage. No permanent structures. Just a compact, self-contained mobile trolley wheeled directly to your parking bay across Kampala and Greater Kampala.",
  
  // Launch Region Summary
  launchServiceArea: "Kampala & Greater Kampala",

  // Core Value Pillars
  pillars: {
    mobileConvenience: "You don't go to the washing bay—the bay comes to you.",
    noPlumbing: "Zero water hookup, plumbing, or drainage needed.",
    noStructure: "No fixed washing bay, muddy driveway run-off, or permanent structures.",
    trolleySystem: "Compact, agile mobile trolley wheeled directly to your parking spot."
  },

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
      note: "Daily mobile trolley dispatch for homes, offices & basement parking",
      neighbourhoods: ["Nakasero", "Kololo", "Naguru", "Bugolobi", "Mbuya", "Kamwokya", "Old Kampala"]
    },
    {
      id: "northeast",
      name: "East & North-East Suburbs",
      tag: "Zone 2",
      note: "Direct residential driveway and office compound trolley service",
      neighbourhoods: ["Ntinda", "Kiwatule", "Naalya", "Kira", "Namugongo", "Kyanja", "Kulambiro", "Bukoto"]
    },
    {
      id: "south",
      name: "South & Lake Crescent",
      tag: "Zone 3",
      note: "Residential compounds & gated estates with zero water run-off",
      neighbourhoods: ["Muyenga", "Munyonyo", "Buziga", "Ggaba", "Makindye", "Kansanga", "Bunga"]
    },
    {
      id: "entebbe-corridor",
      name: "Entebbe Road & Southern Suburbs",
      tag: "Zone 4",
      note: "Scheduled mobile slots and corporate fleet compound visits",
      neighbourhoods: ["Lubowa", "Lweza", "Seguku", "Kajjansi", "Akright City", "Entebbe (by advance appointment)"]
    },
    {
      id: "west-north",
      name: "West & North Suburbs",
      tag: "Zone 5",
      note: "Residential and commercial waterless visits arranged by appointment",
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

  // Services Catalog — 100% Mobile Waterless Focus
  services: [
    {
      id: "waterless_maintenance_wash",
      name: "Waterless Exterior Clean",
      tagline: "Scratch-safe waterless wash & light cabin refresh",
      duration: "40 – 60 mins",
      pricingLabel: "Request a quote",
      description: "Our signature mobile service. Using advanced waterless polymer encapsulation, we lift Kampala dust, traffic film, and grime without running water, plumbing, or driveway puddles.",
      inclusions: [
        "Advanced waterless polymer spray pre-soak to safely encapsulate dust particles",
        "Multi-stage scratch-safe microfibre lift with clean dedicated cloths",
        "High-gloss protective polymer finish with UV and rain-repellent barrier",
        "Waterless wheel face and alloy rim degreasing",
        "Streak-free crystal clear window and exterior mirror clearing",
        "Door jamb and boot sill wipe-down (zero water leaks inside cabin)",
        "Cabin floor vacuuming & dashboard dust removal",
        "Deep black satin tyre dressing"
      ],
      image: "assets/images/showcase/wheel-rim-steam.jpg"
    },
    {
      id: "waterless_interior_deep_clean",
      name: "Waterless Interior Deep Care",
      tagline: "Deep fabric soil extraction & cabin sanitisation refresh",
      duration: "2 – 3 hours",
      badge: "Popular Choice",
      pricingLabel: "Request a quote",
      description: "Intensive cabin revival targeting ground-in Kampala red dust, seat stains, cupholder grime, and air vent odours using self-contained mobile extraction on our trolley system.",
      inclusions: [
        "Deep carpet, seat fabric, and boot lining high-suction vacuuming",
        "Spot soil extraction for stubborn stains on seats and floor mats",
        "Crevice, cupholder, and dashboard detailed brush and wipe",
        "Air-conditioning vent deep clearance and odour neutralisation",
        "Leather upholstery gentle cleansing & conditioning nourishment",
        "Headliner spot clearing & interior pillar trim wipe-down",
        "Streak-free interior glass and windscreen clarity treatment",
        "Zero damp lingering smell: fast drying under normal ambient air"
      ],
      image: "assets/images/showcase/interior-extraction-machine.jpg"
    },
    {
      id: "full_waterless_detail",
      name: "Full Waterless Vehicle Revival",
      tagline: "Complete waterless exterior gloss + deep interior care",
      duration: "3 – 4.5 hours",
      pricingLabel: "Request a quote",
      description: "Our complete bumper-to-bumper waterless programme. Restores deep paint gloss, removes tar and road grime, seals paintwork, and delivers full interior fabric extraction—all from a single mobile trolley.",
      inclusions: [
        "Everything included in Waterless Exterior Clean & Interior Deep Care",
        "Targeted road tar, bug splatter, and tree sap chemical softening & removal",
        "Hand-applied protective paint sealant for high gloss and water beading",
        "Deep wheel face, rim barrel, and brake dust waterless clearing",
        "Exterior rubber and unpainted black plastic trim UV rejuvenation",
        "Exhaust tip metal brightening & chrome polish",
        "Detailed door shut, boot gutter, and bonnet edge wipe-down"
      ],
      image: "assets/images/showcase/detailing-action.jpg"
    },
    {
      id: "waterless_fleet_cleaning",
      name: "Scheduled Waterless Fleet Cleaning",
      tagline: "Zero-drainage mobile contracts for corporate pools & offices",
      duration: "Customised by fleet size",
      badge: "Corporate",
      pricingLabel: "Request corporate quote",
      description: "The ideal cleaning solution for corporate office compounds, NGO yards, delivery vans, and basement parking where washing bays, plumbing, or wastewater drainage are strictly forbidden.",
      inclusions: [
        "On-site service wheeled directly to vehicles in corporate yards or basement bays",
        "100% waterless operation: zero mud pools, soapy run-off, or slippery tarmac",
        "No plumbing or water taps required from your premises",
        "Zero employee downtime: drivers and staff never waste hours queuing at washing bays",
        "Flexible service windows: before office hours, during workdays, or over weekends",
        "Standardised per-vehicle quality checklists and monthly consolidated billing"
      ],
      image: "assets/images/showcase/mobile-trolley-system.jpg"
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
