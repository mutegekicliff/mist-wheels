import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { ServiceOption } from '../types';
import { 
  Sparkles, 
  Clock, 
  Check, 
  Info,
  CalendarCheck
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceOption | null>(null);

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mobile Service Menu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tailored vehicle detailing for every need
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            From routine exterior maintenance to deep interior steam extraction and scheduled commercial fleet cleaning, we bring meticulous automotive care straight to your premises.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className={`relative bg-slate-900/90 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl ${
                service.isPopular
                  ? 'border-sky-500/60 shadow-sky-950/30 ring-1 ring-sky-500/30'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Badge if present */}
              {service.badge && (
                <div className="absolute top-3 right-3 z-20">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    service.isPopular 
                      ? 'bg-sky-500 text-slate-950 shadow-md'
                      : 'bg-slate-800 text-slate-200 border border-slate-700'
                  }`}>
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Service Visual Image */}
              <div className="relative h-44 overflow-hidden bg-slate-950">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                {/* Duration Tag */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-xs text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>{service.estimatedDuration}</span>
                </div>
              </div>

              {/* Service Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-sky-400/90 font-medium mt-1 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Feature Checklist (first 4 items) */}
                  <div className="space-y-2 mb-5">
                    {service.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-sky-400 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <button
                        onClick={() => setSelectedServiceForModal(service)}
                        className="text-[11px] text-sky-400 hover:text-sky-300 font-medium inline-flex items-center gap-1 pt-1"
                      >
                        <Info className="w-3 h-3" />
                        <span>+{service.features.length - 4} more inclusions...</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Footer & Action */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Pricing</span>
                    <span className="font-semibold text-slate-200">
                      {service.pricingLabel}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.id)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                      service.isPopular
                        ? 'bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md shadow-sky-500/20'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>{service.pricingLabel}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Transparency Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-center max-w-2xl mx-auto text-xs text-slate-400">
          <p>
            <strong className="text-slate-300">Quote-based service:</strong> Vehicle detailing prices depend on vehicle class (Saloon, SUV, Minibus, Commercial) and the baseline interior condition. All quotes are confirmed before dispatch with no hidden call-out fees.
          </p>
        </div>

      </div>

      {/* Detail Modal for Full Inclusions */}
      {selectedServiceForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {selectedServiceForModal.name}
                </h3>
                <p className="text-xs text-sky-400 mt-0.5">
                  {selectedServiceForModal.tagline}
                </p>
              </div>
              <button
                onClick={() => setSelectedServiceForModal(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                &times;
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedServiceForModal.detailedDescription}
            </p>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                All Included Inclusions:
              </h4>
              <ul className="space-y-2 max-h-56 overflow-y-auto pr-2">
                {selectedServiceForModal.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-sky-400 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-800 flex gap-3">
              <button
                onClick={() => {
                  const id = selectedServiceForModal.id;
                  setSelectedServiceForModal(null);
                  onSelectService(id);
                }}
                className="flex-1 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Book this Service</span>
              </button>
              <button
                onClick={() => setSelectedServiceForModal(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
