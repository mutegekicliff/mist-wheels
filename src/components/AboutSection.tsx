import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Droplets, 
  CheckCircle2 
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual collage / ethos card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=80"
                alt="Careful hand cleaning and wheel detailing on modern vehicle"
                className="w-full h-80 object-cover object-center filter brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md">
                <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
                  Our Mission
                </p>
                <p className="text-xs text-slate-200 leading-relaxed">
                  To elevate automotive vehicle care across Uganda through punctuality, low-moisture cleaning technology, and respect for our clients’ time.
                </p>
              </div>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <Clock className="w-4 h-4 text-sky-400 mb-1.5" />
                <h4 className="font-bold text-white mb-0.5">Time Saved</h4>
                <p className="text-slate-400 text-[11px]">No sitting in traffic or car wash queues.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <Droplets className="w-4 h-4 text-sky-400 mb-1.5" />
                <h4 className="font-bold text-white mb-0.5">Water Stewardship</h4>
                <p className="text-slate-400 text-[11px]">Controlled low-moisture technology.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>About Mist Wheels</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A cleaner, more convenient standard of automotive care in Uganda
            </h2>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                Every car owner in Kampala knows the challenge of maintaining a clean vehicle. Road dust, sudden tropical rainstorms, and daily commuting quickly leave vehicles soiled inside and out. Yet spending hours at roadside washing bays—waiting in line while vehicles are washed with reused rags and harsh water streams—wastes valuable personal and business hours.
              </p>

              <p>
                <strong>Mist Wheels</strong> was established to change this equation. We operate fully equipped mobile detailing units that come directly to your driveway, office parking lot, or corporate depot.
              </p>

              <p>
                By utilising high-temperature steam cleaning and hot-water soil extraction alongside careful two-bucket hand wash methods, we deliver showroom-grade cleanliness without waterlogging your vehicle or turning your private compound into a mud bath.
              </p>
            </div>

            {/* Operating Principles */}
            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Our Operating Principles
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Clean tools only:</strong> Dedicated microfibre mitts and cloths washed between jobs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Compound respect:</strong> Clean, orderly mobile setup that leaves no mess behind.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Punctual dispatch:</strong> Transparent arrival windows confirmed in advance.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Inspection first:</strong> We walk around your vehicle before starting every service.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
