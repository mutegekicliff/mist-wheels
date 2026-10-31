import { SiteConfig } from '../types';

/**
 * =========================================================================
 * MIST WHEELS - CENTRAL CONFIGURATION FILE
 * =========================================================================
 * Update this single file to change contact details, WhatsApp routing,
 * brand taglines, service options, coverage zones, FAQs, and feature flags.
 *
 * NOTE ON CONTACT DETAILS:
 * If whatsappNumber or email is left as an empty string (""), the website
 * gracefully shows a setup prompt or allows visitors to copy the formatted
 * booking request without showing broken links or dummy phone numbers.
 */

export const siteConfig: SiteConfig = {
  brandName: 'Mist Wheels',
  
  // Tagline (Draft copy, easily updated)
  tagline: 'Expert car care, wherever you park',
  subTagline: 'Professional mobile vehicle cleaning, interior steam cleaning and detailing brought directly to your home, workplace, or fleet premises across Kampala and Greater Kampala.',
  
  serviceRegionSummary: 'Serving Kampala & Greater Kampala',

  contact: {
    // IMPORTANT: Enter your active WhatsApp phone number in international format
    // without plus signs, dashes or spaces (e.g. "256770000000").
    // Leave as "" until your official WhatsApp Business line is ready.
    whatsappNumber: '', 
    displayWhatsApp: 'WhatsApp Line (Pending Setup)',
    
    // Official telephone line for regular voice calls (leave "" if pending)
    phone: '',
    displayPhone: 'Enquiries via Booking Form',
    
    // Official customer support and fleet quotation email
    email: '',
    
    // Operational base / Mobile dispatch hub
    officeDispatchLocation: 'Mobile Dispatch Unit, Kampala, Uganda',
    
    operatingHours: {
      weekdays: '07:30 – 18:00',
      saturdays: '08:00 – 18:00',
      sundays: '08:30 – 16:30 (Advance bookings only)',
      publicHolidays: 'Subject to advance confirmation',
    },
    
    // Social media links (leave empty if not yet active)
    socialLinks: {
      facebook: '',
      instagram: '',
      linkedin: '',
      x: '',
    },
  },

  features: {
    // Set to true once verified fixed price tariffs are approved
    showPricingSection: false, 
    // Set to true only once genuine, verified customer reviews are supplied
    showTestimonials: false,
  },

  services: [
    {
      id: 'maintenance_wash',
      name: 'Maintenance Wash',
      tagline: 'Careful mobile exterior wash & light cabin refresh',
      shortDescription: 'Designed for vehicles needing a regular, swirl-free exterior clean, glass clearing, wheel degreasing, and light interior tidy-up at your parking spot.',
      detailedDescription: 'Our mobile maintenance wash uses controlled water and steam methods to gently lift road dust, red Kampala soil, and traffic grime from your paintwork. Every wash employs grit-guard wash media and clean microfibre drying to prevent paint marring.',
      estimatedDuration: '45 – 75 minutes',
      idealFor: 'Weekly or fortnightly upkeep for everyday commuter cars and private saloons.',
      features: [
        'Gentle pre-rinse to lift loose sand and Kampala red dust',
        'pH-neutral hand shampoo wash with clean microfibre mitts',
        'Wheel face, tyre face, and rim degrease & rinse',
        'Streak-free exterior window and mirror cleaning',
        'Door jamb and boot sill wipe-down',
        'Cabin floor vacuuming & dashboard dust removal',
        'Satin tyre dressing application',
      ],
      recommendedInterval: 'Fortnightly',
      pricingLabel: 'Request a quote',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'interior_deep_clean',
      name: 'Interior Deep Clean & Extraction',
      tagline: 'High-temperature steam cleaning & hot extraction',
      shortDescription: 'Comprehensive cabin restoration targeting embedded dust, ground-in mud, upholstery stains, air vent grime, and lingering interior odours.',
      detailedDescription: 'Using specialised mobile steam equipment and hot-water soil extraction, we penetrate deep into seat fabrics, carpets, floor mats, and seat seams. The low-moisture steam process lifts trapped dirt and neutralises stubborn odours while leaving upholstery ready to dry quickly.',
      estimatedDuration: '2 – 3.5 hours',
      idealFor: 'Family vehicles, school-run cars, pre-sale preparations, and vehicles with fabric or leather upholstery needing restoration.',
      features: [
        'Deep carpet, boot lining, and seat vacuuming',
        'High-temperature steam treatment for air vents, cupholders, and crevices',
        'Hot-water shampoo extraction on fabric seats & carpet floor mats',
        'Leather upholstery gentle cleansing & conditioning nourishment',
        'Headliner spot cleaning & pillar trim wipe-down',
        'Interior glass clarity treatment (removes oily films and smudges)',
        'Odour-neutralising cabin vapour refresh',
      ],
      recommendedInterval: 'Every 3 to 6 months',
      pricingLabel: 'Request a quote',
      badge: 'Popular Choice',
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'full_detail',
      name: 'Full Vehicle Detail',
      tagline: 'The complete exterior revival & deep interior programme',
      shortDescription: 'Our most thorough mobile treatment combining complete exterior rejuvenation with full interior steam restoration.',
      detailedDescription: 'A meticulous bumper-to-bumper programme that restores paint clarity, cleans wheel arches and badges, revives exterior black plastics, and pairs it with our full interior steam and extraction treatment.',
      estimatedDuration: '3.5 – 5 hours',
      idealFor: 'Luxury saloons, executive 4x4s, new vehicle delivery preparation, or returning an off-road SUV to showroom condition.',
      features: [
        'Everything included in the Maintenance Wash & Interior Deep Clean',
        'Targeted bug, tar, and stubborn road film removal',
        'Deep wheel barrel and brake dust removal',
        'Exterior plastic trim revival and UV protection',
        'Hand-applied protective paint sealant for gloss and water beading',
        'Detailed engine bay perimeter tidy-up and steam wipe',
        'Exhaust tip brightening & chrome polish',
      ],
      recommendedInterval: 'Twice a year',
      pricingLabel: 'Request a quote',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'fleet_cleaning',
      name: 'Scheduled Fleet & Business Cleaning',
      tagline: 'Tailored mobile cleaning programmes for company vehicles',
      shortDescription: 'Flexible mobile cleaning contracts for corporate motor pools, NGOs, delivery fleets, tour operators, and executive parking facilities.',
      detailedDescription: 'Mist Wheels deploys directly to your premises, compound, or staff car park with self-contained equipment. We clean your vehicles during off-peak hours, weekends, or scheduled turnaround windows without taking your staff away from their duties.',
      estimatedDuration: 'Customised by fleet size',
      idealFor: 'Companies, organisations, embassies, delivery fleets, and office complexes in Kampala.',
      features: [
        'On-site cleaning at your corporate yard, depot, or office compound',
        'Flexible schedules: early morning, evening, or weekend service windows',
        'Standardised quality checklists for each vehicle in the fleet',
        'Consolidated monthly billing and detailed service activity logs',
        'Reduced downtime: no fuel or staff hours wasted driving to car washes',
        'Eco-conscious water stewardship with minimal yard run-off',
      ],
      recommendedInterval: 'Weekly, fortnightly, or monthly contracts',
      pricingLabel: 'Request corporate quote',
      badge: 'Corporate',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
    },
  ],

  serviceAreas: [
    {
      name: 'Central Kampala & Hills',
      zone: 'Zone 1',
      coverageNote: 'Standard mobile dispatch with routine daily availability',
      keyNeighbourhoods: [
        'Nakasero',
        'Kololo',
        'Naguru',
        'Bugolobi',
        'Mbuya',
        'Kamwokya',
        'Old Kampala',
      ],
    },
    {
      name: 'East & North-East Suburbs',
      zone: 'Zone 2',
      coverageNote: 'Direct home and office bookings available daily',
      keyNeighbourhoods: [
        'Ntinda',
        'Kiwatule',
        'Naalya',
        'Kira',
        'Namugongo',
        'Kyanja',
        'Kulambiro',
        'Bukoto',
      ],
    },
    {
      name: 'South & Lake Crescent',
      zone: 'Zone 3',
      coverageNote: 'Residential compounds and gated estates serviced regularly',
      keyNeighbourhoods: [
        'Muyenga',
        'Munyonyo',
        'Buziga',
        'Ggaba',
        'Makindye',
        'Kansanga',
        'Bunga',
      ],
    },
    {
      name: 'Entebbe Road & Southern Suburbs',
      zone: 'Zone 4',
      coverageNote: 'Scheduled slots and corporate compound visits',
      keyNeighbourhoods: [
        'Lubowa',
        'Lweza',
        'Seguku',
        'Kajjansi',
        'Akright City',
        'Entebbe (by advance appointment)',
      ],
    },
    {
      name: 'West & North Suburbs',
      zone: 'Zone 5',
      coverageNote: 'Residential and commercial visits arranged by appointment',
      keyNeighbourhoods: [
        'Rubaga',
        'Mengó',
        'Kasubi',
        'Kawempe',
        'Nansana (central)',
        'Gayaza Road corridor',
      ],
    },
  ],

  faqs: [
    {
      id: 'how-mobile-works',
      question: 'Do I need to supply water or electricity at my location?',
      answer: 'Our mobile units arrive equipped with independent equipment, commercial hoses, and self-contained power options. If an outdoor power socket or standard tap is accessible on your premises, it helps streamline the process, but we can operate self-sufficiently in most residential driveways, corporate compounds, and secure car parks.',
      category: 'equipment',
    },
    {
      id: 'parking-space-required',
      question: 'How much parking space is required for the service?',
      answer: 'We only require enough space to open the vehicle doors comfortably and park our service unit alongside or behind your vehicle. A standard driveway, garage apron, office parking bay, or secure compound is ideal.',
      category: 'process',
    },
    {
      id: 'steam-cleaning-benefits',
      question: 'What makes steam cleaning different from traditional bucket washes?',
      answer: 'Traditional washes frequently rely on high water volumes that cause pooling, run-off, and dirty mud under your car. Mobile steam cleaning uses high-temperature, low-moisture vapour that gently breaks down baked-on grime, grease, and dust from delicate paint, vents, and fabric fibres without waterlogging your vehicle or muddying your compound.',
      category: 'equipment',
    },
    {
      id: 'drying-time',
      question: 'How long do fabric seats take to dry after interior steam extraction?',
      answer: 'Because our extraction equipment uses high temperature and powerful vacuum recovery rather than heavy drenching, fabric seats typically dry within 1 to 2.5 hours under normal Kampala ambient temperatures.',
      category: 'process',
    },
    {
      id: 'booking-confirmation',
      question: 'Is my online booking request confirmed immediately?',
      answer: 'All booking submissions sent through our website or WhatsApp are subject to schedule and location confirmation. Our team reviews your preferred date, time slot, and neighbourhood, then confirms your booking details directly with you via WhatsApp or phone before dispatch.',
      category: 'booking',
    },
    {
      id: 'rain-policy',
      question: 'What happens if it rains in Kampala at my appointment time?',
      answer: 'If you have a covered garage, car porch, or basement parking, we can proceed as normal regardless of the weather. For uncovered open parking, we will stay in touch and reschedule your appointment to the next convenient dry slot at no extra charge.',
      category: 'process',
    },
    {
      id: 'fleet-services',
      question: 'How do corporate and fleet cleaning arrangements work?',
      answer: 'For companies, embassies, NGOs, and fleet operators, we conduct a brief needs assessment to determine vehicle numbers, required cleaning frequencies, and preferred time windows (e.g., Saturday mornings or after-hours). We then provide a structured service proposal with dedicated scheduling and consolidated monthly reporting.',
      category: 'fleet',
    },
    {
      id: 'payment-methods',
      question: 'How do I pay for the cleaning service?',
      answer: 'Payment is made after completion and inspection of your vehicle. We accept mobile money (MTN Mobile Money & Airtel Money) as well as direct electronic bank transfers and cash upon service delivery. Corporate fleet accounts have access to structured invoicing terms.',
      category: 'booking',
    },
  ],
};
