import React from 'react';
import { 
  CloudFog, 
  Droplets, 
  Sparkles, 
  ShieldCheck, 
  Wind, 
  CheckCircle2 
} from 'lucide-react';

export const SteamTechnology: React.FC = () => {
  const benefits = [
    {
      title: 'Low-Moisture Vapour',
      description: 'High-temperature steam loosens road grime, grease, and dried mud using minimal moisture, preventing waterlogging of vehicle carpets and door panels.',
      icon: CloudFog,
    },
    {
      title: 'Compound-Friendly Operation',
      description: 'Unlike conventional high-volume hose washing, mobile steam drastically reduces water run-off, leaving your driveway or office parking bay clean and puddle-free.',
      icon: Droplets,
    },
    {
      title: 'Crevice & Air Vent Access',
      description: 'Specialised steam lances penetrate deep into dashboard air vents, seat runners, cupholders, and narrow seams where red Kampala dust accumulates.',
      icon: Wind,
    },
    {
      title: 'Fabric & Leather Safety',
      description: 'Gentle on vehicle electronics and delicate upholstery. Paired with hot-water extraction, seats and carpets dry quickly under ambient temperatures.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="steam-technology" className="py-16 sm:py-24 bg-slate-900/40 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-3">
            <CloudFog className="w-3.5 h-3.5" />
            <span>Mobile Detailing Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why mobile steam cleaning is superior for your vehicle
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Kampala’s mixture of red murram dust, sudden tropical rains, and stop-start city driving demands deeper, more careful cleaning than conventional bucket washes can offer. Our mobile steam process safely cleans without scratching paint or flooding your compound.
          </p>
        </div>

        {/* 2-Column Feature Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Grid: 4 Core Advantages */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-950 p-6 rounded-2xl border border-slate-800/90 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-1.5 text-[11px] text-sky-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Specialised mobile equipment</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Visual Comparison Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl" />
              
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>The Mobile Steam Difference</span>
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="font-semibold text-sky-300 mb-1">
                    Conventional Washing Bay
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Heavy water consumption, high likelihood of muddy run-off, reused dirty sponges that cause swirl marks, and several hours lost waiting in a queue.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-sky-950/30 border border-sky-500/30">
                  <div className="font-semibold text-sky-300 mb-1">
                    Mist Wheels Mobile Steam Detail
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Carried out at your location while you work or rest. Controlled low-moisture vapour lifts road film without paint marring, and seat extraction lifts dirt directly into recovery tanks.
                  </p>
                </div>
              </div>

              <div className="mt-5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400">
                <p>
                  <strong className="text-slate-300">Safe on electronics:</strong> Thermal vapour is applied at calibrated distances, making it safe for delicate switches, touchscreen consoles, and air conditioning vents.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
