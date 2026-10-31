import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { siteConfig } from '../config/siteConfig';
import { generateEnquiryWhatsAppUrl } from '../utils/whatsapp';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Clock, 
  MapPin, 
  PhoneCall, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenConfigHelp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenConfigHelp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Steam Care', href: '#steam-technology' },
    { label: 'Fleet & Business', href: '#fleet-services' },
    { label: 'Coverage Area', href: '#service-area' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    const { url, hasDirectNumber } = generateEnquiryWhatsAppUrl('Navbar Header');
    if (!hasDirectNumber && !siteConfig.contact.whatsappNumber) {
      e.preventDefault();
      onOpenConfigHelp();
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Top Notification Bar for Kampala Mobile Service */}
      <div className="bg-slate-900 border-b border-slate-800/80 text-xs text-slate-300 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sky-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Mobile Detailing across Kampala & Greater Kampala</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Mon – Sat: {siteConfig.contact.operatingHours.weekdays}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Low-Moisture Steam & Paint-Safe Hand Care</span>
            </span>
            {siteConfig.contact.phone ? (
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="hover:text-sky-300 transition-colors flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3" />
                <span>{siteConfig.contact.displayPhone}</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3'
            : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-900 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-0.5"
            aria-label="Mist Wheels Home"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Quick Action */}
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/40 text-emerald-400 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-emerald-950/40"
              title="Chat with Mist Wheels on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400 text-transparent" />
              <span>WhatsApp</span>
            </button>

            {/* Direct Booking CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-sm font-semibold transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30"
            >
              <span>Book Service</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-md bg-sky-500 text-slate-950 text-xs font-bold"
            >
              Book
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-3">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-sky-400 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
              <button
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick(e);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-colors shadow-md shadow-sky-500/20"
              >
                <span>Request Booking Now</span>
              </button>

              <div className="mt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Mobile Dispatch across Greater Kampala</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
