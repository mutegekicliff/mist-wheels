import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  MapPin, 
  Search, 
  CheckCircle2, 
  Navigation, 
  Info,
  CalendarCheck
} from 'lucide-react';

interface ServiceAreaProps {
  onSelectNeighbourhood: (neighbourhood: string) => void;
}

export const ServiceArea: React.FC<ServiceAreaProps> = ({ onSelectNeighbourhood }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const allAreas = siteConfig.serviceAreas.flatMap(zone => 
    zone.keyNeighbourhoods.map(neighbourhood => ({
      neighbourhood,
      zoneName: zone.name,
      zoneId: zone.zone,
    }))
  );

  const filteredAreas = searchQuery.trim() === ''
    ? []
    : allAreas.filter(item => 
        item.neighbourhood.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <section id="service-area" className="py-16 sm:py-24 bg-slate-900/40 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Operational Launch Perimeter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Serving Kampala & Greater Kampala
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Our mobile detailing units operate across residential suburbs, corporate complexes, and commercial car parks throughout the greater metropolitan region.
          </p>
        </div>

        {/* Interactive Search Tool */}
        <div className="max-w-xl mx-auto mb-14">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your neighbourhood (e.g. Kololo, Kira, Muyenga, Naguru)..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all shadow-inner"
            />
          </div>

          {/* Search Result Feedback */}
          {searchQuery.trim() !== '' && (
            <div className="mt-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 shadow-xl animate-in fade-in">
              {filteredAreas.length > 0 ? (
                <div>
                  <p className="text-xs font-semibold text-emerald-400 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Yes! We provide mobile detailing in:</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {filteredAreas.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => onSelectNeighbourhood(item.neighbourhood)}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-sky-500 hover:text-slate-950 text-xs font-medium text-slate-200 border border-slate-800 transition-colors flex items-center gap-1"
                      >
                        <MapPin className="w-3 h-3 text-sky-400" />
                        <span>{item.neighbourhood}</span>
                        <span className="text-[10px] opacity-75">({item.zoneId})</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-400 flex items-center justify-between">
                  <span>No exact match found in our primary list, but we regularly service nearby areas.</span>
                  <button
                    onClick={() => onSelectNeighbourhood(searchQuery.trim())}
                    className="text-sky-400 hover:text-sky-300 font-semibold underline ml-2 whitespace-nowrap"
                  >
                    Request quote for "{searchQuery}"
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.serviceAreas.map((zone, idx) => (
            <div
              key={idx}
              className="bg-slate-950 rounded-2xl p-6 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold font-mono text-sky-400 uppercase tracking-wider px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                    {zone.zone}
                  </span>
                  <Navigation className="w-4 h-4 text-slate-600" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {zone.name}
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  {zone.coverageNote}
                </p>

                {/* Suburbs Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {zone.keyNeighbourhoods.map((neighbourhood, i) => (
                    <button
                      key={i}
                      onClick={() => onSelectNeighbourhood(neighbourhood)}
                      className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800/80 text-[11px] text-slate-300 hover:text-sky-300 transition-colors"
                      title={`Book mobile wash in ${neighbourhood}`}
                    >
                      {neighbourhood}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-900 flex items-center justify-between text-xs">
                <span className="text-slate-500">Regular mobile slots</span>
                <button
                  onClick={() => onSelectNeighbourhood(zone.keyNeighbourhoods[0])}
                  className="text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Book in {zone.zone}</span>
                </button>
              </div>
            </div>
          ))}

          {/* Greater Metropolitan & Custom Dispatch Card */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 rounded-2xl p-6 border border-sky-500/30 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400 mb-2">
                <Info className="w-4 h-4" />
                <span>Extended Coverage & Events</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Outside Greater Kampala?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                We accommodate scheduled mobile visits to Entebbe, Mukono, Wakiso town, and estate clusters by advance appointment or multi-vehicle booking.
              </p>
            </div>

            <button
              onClick={() => onSelectNeighbourhood('Greater Metropolitan / Custom')}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-white transition-colors"
            >
              Enquire for Custom Location
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
