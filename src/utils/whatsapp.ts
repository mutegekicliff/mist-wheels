import { BookingFormData, ServiceId, VehicleType } from '../types';
import { siteConfig } from '../config/siteConfig';

export const vehicleTypeLabels: Record<VehicleType, string> = {
  saloon: 'Saloon / Hatchback',
  compact_suv: 'Compact SUV / Crossover',
  full_suv: 'Full-size SUV / 4x4',
  pickup: 'Double-Cabin Pickup',
  van_minibus: 'Executive Van / Minibus',
  fleet_commercial: 'Commercial Fleet / Multi-vehicle',
};

export const serviceLabels: Record<ServiceId, string> = {
  maintenance_wash: 'Maintenance Wash',
  interior_deep_clean: 'Interior Deep Clean & Extraction',
  full_detail: 'Full Vehicle Detail',
  fleet_cleaning: 'Scheduled Fleet & Business Cleaning',
};

export function formatBookingMessage(data: BookingFormData): string {
  const vehicleLabel = data.vehicleType ? vehicleTypeLabels[data.vehicleType as VehicleType] : 'Not specified';
  const serviceLabel = data.serviceRequested ? serviceLabels[data.serviceRequested as ServiceId] : 'Not specified';

  const lines = [
    `*NEW BOOKING REQUEST — MIST WHEELS*`,
    `----------------------------------------`,
    `*Customer:* ${data.fullName.trim()}`,
    `*Contact Number:* ${data.phoneOrWhatsApp.trim()}`,
    data.email ? `*Email:* ${data.email.trim()}` : null,
    `*Neighbourhood / Area:* ${data.neighbourhood.trim()}`,
    data.specificAddress ? `*Address / Landmark:* ${data.specificAddress.trim()}` : null,
    `*Vehicle Type:* ${vehicleLabel}`,
    `*Service Requested:* ${data.serviceLabelOverride || serviceLabel}`,
    `*Preferred Date:* ${data.preferredDate}`,
    `*Preferred Time:* ${data.preferredTimeSlot}`,
    data.additionalNotes ? `*Special Notes:* ${data.additionalNotes.trim()}` : `*Special Notes:* None`,
    `----------------------------------------`,
    `_Sent via mistwheels.ug website. Booking requests are subject to schedule confirmation._`
  ];

  return lines.filter(Boolean).join('\n');
}

export function generateWhatsAppUrl(message: string, overrideNumber?: string): { url: string; hasDirectNumber: boolean } {
  const number = (overrideNumber || siteConfig.contact.whatsappNumber || '').replace(/[^0-9]/g, '');
  
  if (number && number.length >= 7) {
    return {
      url: `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      hasDirectNumber: true,
    };
  }

  // Fallback link: opens WhatsApp with text ready to choose a contact or self-send
  return {
    url: `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`,
    hasDirectNumber: false,
  };
}

export function generateEnquiryWhatsAppUrl(enquiryType: string = 'General Enquiry'): { url: string; hasDirectNumber: boolean } {
  const message = `*Hello Mist Wheels!*\n\nI would like to enquire about your mobile vehicle-cleaning and detailing services in Kampala (${enquiryType}). Please provide further information.`;
  return generateWhatsAppUrl(message);
}
