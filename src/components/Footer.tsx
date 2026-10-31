import React from 'react';
import { Logo } from './Logo';
import { siteConfig } from '../config/siteConfig';
import { generateEnquiryWhatsAppUrl } from '../utils/whatsapp';
import { 
  MapPin, 
  Clock, 
  MessageCircle, 
  Mail, 
  CalendarCheck,
  ChevronRight,
  Settings
} from 'lucide-react';

interface FooterProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenConfigHelp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenConfigHelp }) => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppFooterClick = (e: React.MouseEvent) => {
    const { url, hasDirectNumber } = generateEnquiryWhatsAppUrl('Footer CTA');
    if (!hasDirectNumber && !siteConfig.contact.whatsappNumber) {
      e.preventDefault();
      onOpenConfigHelp();
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      
      {/* Pre-Footer Action Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 border-b border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Ready for showroom-grade car care wherever you park?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              Tell us your neighbourhood in Kampala and preferred time slot. We take care of the rest.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleWhatsAppFooterClick}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-950/40 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Book via WhatsApp</span>
            </button>
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-lg shadow-sky-500/20 transition-colors"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Submit Booking Request</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Mist Wheels delivers high-temperature steam cleaning, hot extraction, and mobile hand detailing to vehicle owners and fleet managers across Kampala and Greater Kampala.
            </p>

            <div className="pt-2 text-slate-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.officeDispatchLocation}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>Weekdays: {siteConfig.contact.operatingHours.weekdays} &bull; Sat: {siteConfig.contact.operatingHours.saturdays}</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              {siteConfig.services.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onOpenBooking(srv.id)}
                    className="hover:text-sky-300 transition-colors text-left flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-sky-400 transition-colors" />
                    <span>{srv.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage Suburbs */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Launch Suburbs
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Nakasero, Kololo & Naguru</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Bugolobi, Mbuya & Bukoto</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Ntinda, Kiwatule & Naalya</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Kira & Namugongo</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Muyenga, Munyonyo & Buziga</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Lubowa & Entebbe Corridor</span>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Configuration */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact & Support
            </h4>
            
            <div className="space-y-2.5">
              {siteConfig.contact.whatsappNumber ? (
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{siteConfig.contact.displayWhatsApp}</span>
                </a>
              ) : (
                <button
                  onClick={onOpenConfigHelp}
                  className="flex items-center gap-2 text-sky-400 hover:text-sky-300 text-left"
                  title="Configure WhatsApp Line"
                >
                  <Settings className="w-4 h-4 flex-shrink-0" />
                  <span>Configure WhatsApp Number</span>
                </button>
              )}

              {siteConfig.contact.email ? (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Mail className="w-4 h-4" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              ) : null}

              <button
                onClick={() => onOpenBooking()}
                className="w-full mt-2 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-left flex items-center justify-between"
              >
                <span>Online Booking Desk</span>
                <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Legal & Compliance Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            &copy; {currentYear} {siteConfig.brandName}. All rights reserved. Registered mobile car care service in Uganda.
          </p>
          <div className="flex items-center gap-4">
            <span>Bookings subject to confirmation</span>
            <span>&bull;</span>
            <button
              onClick={onOpenConfigHelp}
              className="text-slate-400 hover:text-sky-400 flex items-center gap-1"
            >
              <Settings className="w-3 h-3" />
              <span>Owner Settings</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
