import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { generateEnquiryWhatsAppUrl } from '../utils/whatsapp';
import { 
  MessageCircle, 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  Droplets, 
  ArrowRight, 
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenConfigHelp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenConfigHelp }) => {
  const handleWhatsAppHeroClick = (e: React.MouseEvent) => {
    const { url, hasDirectNumber } = generateEnquiryWhatsAppUrl('Hero Booking');
    if (!hasDirectNumber && !siteConfig.contact.whatsappNumber) {
      e.preventDefault();
      onOpenConfigHelp();
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background glow & subtle automotive geometric grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-[-100px] w-[350px] h-[350px] bg-teal-500/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Action Area */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Launch Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-sky-300 text-xs font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Mobile Vehicle Detailing &bull; Kampala & Greater Kampala</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Expert car care,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-sky-200">
                wherever you park.
              </span>
            </h1>

            {/* Explanatory Paragraph - Mobile service, comes to you */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Mist Wheels brings professional mobile exterior cleaning, deep interior steam cleaning, and hot-water soil extraction directly to your home, workplace, or compound. Skip the queue and traffic—we care for your car while you focus on your day.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={handleWhatsAppHeroClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/60 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Book on WhatsApp</span>
              </button>

              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-base transition-all duration-200 shadow-xl shadow-sky-500/20 active:scale-[0.98]"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Schedule Online</span>
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium text-sm transition-all duration-200 hover:text-white"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </a>
            </div>

            {/* Trust & Operational Proof Checklist */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Home & office dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Low-moisture steam vapour</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Clean compound, no mud pool</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Card with Real Vehicle Detailing Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/90 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=80"
                  alt="Precision automotive detailing and steam cleaning on modern vehicle"
                  className="w-full h-80 sm:h-96 object-cover object-center filter brightness-95"
                  loading="eager"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Overlaid Service Highlights */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/90 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold tracking-wider uppercase text-sky-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Mobile Detailing Spec
                    </span>
                    <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                      Kampala Direct
                    </span>
                  </div>

                  <p className="text-sm font-medium text-slate-200">
                    High-temperature interior extraction & swirl-free exterior care delivered to your driveway.
                  </p>

                  <div className="mt-3 flex items-center gap-3 text-xs text-slate-400 border-t border-slate-800/80 pt-2">
                    <span className="flex items-center gap-1 text-slate-300">
                      <Droplets className="w-3.5 h-3.5 text-sky-400" />
                      Water-efficient
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                      Safe on leather & paint
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Dispatch Status Pill */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-slate-900 border border-slate-700/80 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-sky-400" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-slate-400 font-medium">Launch Service Area</p>
                  <p className="text-xs font-bold text-white">Kampala & Suburbs</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
