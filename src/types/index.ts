export type VehicleType = 
  | 'saloon'
  | 'compact_suv'
  | 'full_suv'
  | 'pickup'
  | 'van_minibus'
  | 'fleet_commercial';

export type ServiceId = 
  | 'maintenance_wash'
  | 'interior_deep_clean'
  | 'full_detail'
  | 'fleet_cleaning';

export interface ServiceOption {
  id: ServiceId;
  name: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  estimatedDuration: string;
  idealFor: string;
  features: string[];
  recommendedInterval?: string;
  pricingLabel: string; // e.g. "Request a quote"
  isPopular?: boolean;
  image: string;
  badge?: string;
}

export interface ServiceArea {
  name: string;
  zone: string;
  coverageNote: string;
  keyNeighbourhoods: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'process' | 'equipment' | 'fleet';
}

export interface BookingFormData {
  fullName: string;
  phoneOrWhatsApp: string;
  email?: string;
  neighbourhood: string;
  specificAddress: string;
  vehicleType: VehicleType | '';
  serviceRequested: ServiceId | '';
  serviceLabelOverride?: string;
  preferredDate: string;
  preferredTimeSlot: string;
  additionalNotes: string;
  confirmTerms: boolean;
}

export interface ContactInfo {
  // If left empty or undefined, UI adapts cleanly without broken links
  whatsappNumber: string; // e.g. "256700000000" (international format without + or spaces)
  displayWhatsApp: string; // e.g. "+256 700 000 000"
  phone: string;
  displayPhone: string;
  email: string;
  officeDispatchLocation: string;
  operatingHours: {
    weekdays: string;
    saturdays: string;
    sundays: string;
    publicHolidays: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    x?: string;
  };
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  subTagline: string;
  serviceRegionSummary: string;
  contact: ContactInfo;
  features: {
    showPricingSection: boolean; // Set to true when verified prices are supplied
    showTestimonials: boolean;   // Set to true only when genuine customer reviews are supplied
  };
  services: ServiceOption[];
  serviceAreas: ServiceArea[];
  faqs: FAQItem[];
}
