import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Services } from './components/Services';
import { SteamTechnology } from './components/SteamTechnology';
import { FleetServices } from './components/FleetServices';
import { ServiceArea } from './components/ServiceArea';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { WhatsAppStickyPill } from './components/WhatsAppStickyPill';
import { ConfigModal } from './components/ConfigModal';
import { siteConfig } from './config/siteConfig';

export const App: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState<string>('');
  const [isConfigHelpOpen, setIsConfigHelpOpen] = useState<boolean>(false);
  const [activeSessionNumber, setActiveSessionNumber] = useState<string>(() => {
    return localStorage.getItem('mw_session_whatsapp') || siteConfig.contact.whatsappNumber || '';
  });

  // Keep siteConfig up to date if user overrides in current session
  useEffect(() => {
    if (activeSessionNumber) {
      siteConfig.contact.whatsappNumber = activeSessionNumber;
      siteConfig.contact.displayWhatsApp = `+${activeSessionNumber}`;
    }
  }, [activeSessionNumber]);

  const handleSaveTemporaryNumber = (num: string) => {
    setActiveSessionNumber(num);
    localStorage.setItem('mw_session_whatsapp', num);
    siteConfig.contact.whatsappNumber = num;
    siteConfig.contact.displayWhatsApp = num ? `+${num}` : 'WhatsApp Line (Pending Setup)';
  };

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectNeighbourhood = (neighbourhood: string) => {
    setSelectedNeighbourhood(neighbourhood);
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-slate-950">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-sky-500 focus:text-slate-950 focus:font-bold focus:shadow-xl"
      >
        Skip to main content
      </a>

      {/* Main Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenConfigHelp={() => setIsConfigHelpOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenConfigHelp={() => setIsConfigHelpOpen(true)}
        />

        {/* 2. How It Works Section */}
        <HowItWorks
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 3. Services Section */}
        <Services
          onSelectService={handleOpenBooking}
        />

        {/* 4. Steam Technology & Educational Care Section */}
        <SteamTechnology />

        {/* 5. Fleet and Business Services */}
        <FleetServices
          onOpenFleetQuote={() => handleOpenBooking('fleet_cleaning')}
        />

        {/* 6. Kampala & Greater Kampala Service Area */}
        <ServiceArea
          onSelectNeighbourhood={handleSelectNeighbourhood}
        />

        {/* 7. About Mist Wheels */}
        <AboutSection />

        {/* 8. Frequently Asked Questions */}
        <FAQSection
          onOpenConfigHelp={() => setIsConfigHelpOpen(true)}
        />

        {/* 9. Contact & Book Form */}
        <BookingSection
          initialServiceId={selectedServiceId}
          initialNeighbourhood={selectedNeighbourhood}
          onOpenConfigHelp={() => setIsConfigHelpOpen(true)}
        />
      </main>

      {/* Floating Sticky Mobile WhatsApp Button */}
      <WhatsAppStickyPill
        onOpenConfigHelp={() => setIsConfigHelpOpen(true)}
      />

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenConfigHelp={() => setIsConfigHelpOpen(true)}
      />

      {/* Owner Configuration & Contact Setting Assistant */}
      <ConfigModal
        isOpen={isConfigHelpOpen}
        onClose={() => setIsConfigHelpOpen(false)}
        onSaveTemporaryNumber={handleSaveTemporaryNumber}
        currentActiveNumber={activeSessionNumber}
      />
    </div>
  );
};
