import React from 'react';
import { 
  Building2, 
  Truck, 
  Calendar, 
  Receipt, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  Users
} from 'lucide-react';

interface FleetServicesProps {
  onOpenFleetQuote: () => void;
}

export const FleetServices: React.FC<FleetServicesProps> = ({ onOpenFleetQuote }) => {
  const fleetBenefits = [
    {
      title: 'Zero Driver Downtime',
      description: 'Your personnel no longer lose productive working hours sitting in washing bay queues or burning company fuel in traffic.',
      icon: Users,
    },
    {
      title: 'Scheduled On-Site Service',
      description: 'We deploy directly to your office parking yard, warehouse compound, or fleet depot before working hours, on weekends, or during turnaround shifts.',
      icon: Calendar,
    },
    {
      title: 'Consolidated Monthly Invoicing',
      description: 'Streamline your accounts with scheduled service contracts, clear per-vehicle activity records, and simple monthly billing.',
      icon: Receipt,
    },
    {
      title: 'Standardised Vehicle Checklists',
      description: 'Every vehicle in your motor pool receives consistent care adhering to structured exterior and interior maintenance standards.',
      icon: ShieldCheck,
    },
  ];

  const suitableFor = [
    'Corporate Executive Motor Pools',
    'NGO & Diplomatic Mission Vehicles',
    'Tour, Safari & Travel Operators',
    'Commercial Vans & Logistics Fleets',
    'Office Park & Commercial Property Compounds',
    'Car Hire & Dealership Fleets',
  ];

  return (
    <section id="fleet-services" className="py-16 sm:py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial & Fleet Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Keep your entire company fleet immaculate without the logistical headache
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-3xl">
              Mist Wheels provides reliable, scheduled mobile fleet cleaning programmes for businesses, organisations, and corporate facilities across Kampala. We bring our mobile wash units directly to your depot or office car park.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <button
              onClick={onOpenFleetQuote}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-xl shadow-sky-500/20 active:scale-95"
            >
              <span>Request Fleet Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {fleetBenefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Suitable Fleets Callout & Custom Programme Box */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Truck className="w-5 h-5 text-sky-400" />
                <span>Tailored Fleet Cleaning Contracts</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you operate five executive saloons or a fleet of thirty field 4x4s, we design a customised cleaning schedule that fits your operational routines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {suitableFor.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider text-sky-400">
                Corporate Fleet Assessment
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Send us your vehicle count and preferred servicing window. Our fleet coordinator will prepare a tailored proposal within 24 hours.
              </p>
              <button
                onClick={onOpenFleetQuote}
                className="w-full py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Scheduled Service Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
