import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { generateEnquiryWhatsAppUrl } from '../utils/whatsapp';

interface WhatsAppStickyPillProps {
  onOpenConfigHelp: () => void;
}

export const WhatsAppStickyPill: React.FC<WhatsAppStickyPillProps> = ({ onOpenConfigHelp }) => {
  const handleClick = (e: React.MouseEvent) => {
    const { url, hasDirectNumber } = generateEnquiryWhatsAppUrl('Floating Sticky Button');
    if (!hasDirectNumber && !siteConfig.contact.whatsappNumber) {
      e.preventDefault();
      onOpenConfigHelp();
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside aria-label="Floating Contact" className="fixed bottom-5 right-5 z-40">
      <button
        onClick={handleClick}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-2xl shadow-emerald-950/80 border border-emerald-400/30 transition-all duration-300 hover:scale-105 active:scale-95"
        title="Chat with Mist Wheels on WhatsApp"
        aria-label="Book or chat on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-transparent group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">WhatsApp Booking</span>
        <span className="sm:hidden">WhatsApp</span>
      </button>
    </aside>
  );
};
