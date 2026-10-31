import React from 'react';
import { 
  ClipboardList, 
  MapPin, 
  CalendarCheck2, 
  Sparkles, 
  ArrowRight,
  Clock
} from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      step: '01',
      title: 'Choose a service',
      description: 'Select from our Maintenance Wash, Interior Deep Clean & Extraction, Full Detail, or Fleet Programme according to your vehicle’s condition.',
      icon: ClipboardList,
      highlight: 'Transparent quote request',
    },
    {
      step: '02',
      title: 'Share your location & time',
      description: 'Tell us your neighbourhood in Kampala or Greater Kampala, your vehicle type, and your preferred date and time slot.',
      icon: MapPin,
      highlight: 'Home, office, or compound',
    },
    {
      step: '03',
      title: 'Receive prompt confirmation',
      description: 'Our operations team reviews your booking and confirms your appointment via WhatsApp or telephone before dispatch.',
      icon: CalendarCheck2,
      highlight: 'Clear arrival window',
    },
    {
      step: '04',
      title: 'Have your vehicle cleaned',
      description: 'Our mobile team arrives equipped with low-moisture steam and extraction tools. We detail your car while you carry on with your day.',
      icon: Sparkles,
      highlight: 'Zero compound run-off',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Effortless Mobile Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How mobile car care works with Mist Wheels
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            No queuing at crowded car washes or navigating Kampala traffic. Four straightforward steps bring premium vehicle care right to your parking spot.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-slate-950/80 rounded-2xl p-6 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 group flex flex-col justify-between shadow-lg"
              >
                {/* Step Number & Connector */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono text-slate-700 group-hover:text-sky-400/60 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-sky-500/30 flex items-center justify-center text-sky-400 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-sky-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>{item.highlight}</span>
                </div>

                {/* Connecting arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-700">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-sky-500/20 active:scale-95"
          >
            <span>Ready to book? Start your request</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
