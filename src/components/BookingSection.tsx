import React, { useState, useEffect } from 'react';
import { BookingFormData, ServiceId, VehicleType } from '../types';
import { siteConfig } from '../config/siteConfig';
import { 
  formatBookingMessage, 
  generateWhatsAppUrl, 
  vehicleTypeLabels 
} from '../utils/whatsapp';
import { 
  CalendarCheck, 
  MessageCircle, 
  Copy, 
  Check, 
  AlertCircle, 
  Car, 
  Sparkles, 
  ShieldAlert,
  CheckCircle2,
  Settings
} from 'lucide-react';

interface BookingSectionProps {
  initialServiceId?: string;
  initialNeighbourhood?: string;
  onOpenConfigHelp: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialServiceId = '',
  initialNeighbourhood = '',
  onOpenConfigHelp,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneOrWhatsApp: '',
    email: '',
    neighbourhood: '',
    specificAddress: '',
    vehicleType: '',
    serviceRequested: '',
    preferredDate: '',
    preferredTimeSlot: 'Morning (08:00 – 11:00)',
    additionalNotes: '',
    confirmTerms: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [preparedMessage, setPreparedMessage] = useState('');
  const [whatsAppUrl, setWhatsAppUrl] = useState('');
  const [hasConfiguredNumber, setHasConfiguredNumber] = useState(false);

  // Sync external pre-selections
  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({
        ...prev,
        serviceRequested: initialServiceId as ServiceId,
      }));
    }
  }, [initialServiceId]);

  useEffect(() => {
    if (initialNeighbourhood) {
      setFormData(prev => ({
        ...prev,
        neighbourhood: initialNeighbourhood,
      }));
    }
  }, [initialNeighbourhood]);

  // Set minimum date to today
  const todayDateString = new Date().toISOString().split('T')[0];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.phoneOrWhatsApp.trim() || formData.phoneOrWhatsApp.trim().length < 7) {
      errs.phoneOrWhatsApp = 'Please provide a valid telephone or WhatsApp contact number.';
    }

    if (!formData.neighbourhood.trim()) {
      errs.neighbourhood = 'Please select or type your neighbourhood or area in Kampala.';
    }

    if (!formData.vehicleType) {
      errs.vehicleType = 'Please select your vehicle category.';
    }

    if (!formData.serviceRequested) {
      errs.serviceRequested = 'Please choose the required cleaning service.';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred service date.';
    }

    if (!formData.confirmTerms) {
      errs.confirmTerms = 'Please confirm that you acknowledge bookings are subject to confirmation.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const message = formatBookingMessage(formData);
    const { url, hasDirectNumber } = generateWhatsAppUrl(message);

    setPreparedMessage(message);
    setWhatsAppUrl(url);
    setHasConfiguredNumber(hasDirectNumber);
    setIsSuccessModalOpen(true);

    // If direct number is configured, automatically open WhatsApp
    if (hasDirectNumber) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(preparedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="book" className="py-16 sm:py-24 bg-slate-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-3">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Mobile Booking & Quote Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Book your mobile vehicle detail
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Fill in your vehicle and location details below. Your submission will prepare a complete booking request for prompt confirmation via WhatsApp.
          </p>
        </div>

        {/* Notice of Confirmation */}
        <div className="mb-8 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
          <p>
            <strong className="text-white">Notice:</strong> All booking requests are subject to schedule and location confirmation by the Mist Wheels operations team prior to dispatch.
          </p>
        </div>

        {/* Booking Form Card */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            
            {/* Step 1: Contact Details */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-sky-500 text-slate-950 text-xs font-black flex items-center justify-center">1</span>
                <span>Your Contact Details</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. David Mukasa"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-sky-500'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phoneOrWhatsApp" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Phone / WhatsApp Number <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneOrWhatsApp"
                    value={formData.phoneOrWhatsApp}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneOrWhatsApp: e.target.value });
                      if (errors.phoneOrWhatsApp) setErrors({ ...errors, phoneOrWhatsApp: '' });
                    }}
                    placeholder="e.g. 0772 123 456 or +256 7..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.phoneOrWhatsApp ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-sky-500'
                    }`}
                  />
                  {errors.phoneOrWhatsApp && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phoneOrWhatsApp}</span>
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address <span className="text-slate-500 font-normal">(Optional for booking receipts & fleet quotes)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Location / Neighbourhood in Kampala */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-sky-500 text-slate-950 text-xs font-black flex items-center justify-center">2</span>
                <span>Location in Kampala & Greater Kampala</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="neighbourhood" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Neighbourhood / Suburb <span className="text-rose-400">*</span>
                  </label>
                  <input
                    list="kampala-areas"
                    id="neighbourhood"
                    value={formData.neighbourhood}
                    onChange={(e) => {
                      setFormData({ ...formData, neighbourhood: e.target.value });
                      if (errors.neighbourhood) setErrors({ ...errors, neighbourhood: '' });
                    }}
                    placeholder="Select or type (e.g. Kololo, Kira, Nakasero)"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.neighbourhood ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-sky-500'
                    }`}
                  />
                  <datalist id="kampala-areas">
                    <option value="Kololo" />
                    <option value="Nakasero" />
                    <option value="Naguru" />
                    <option value="Bugolobi" />
                    <option value="Muyenga" />
                    <option value="Ntinda" />
                    <option value="Kiwatule" />
                    <option value="Naalya" />
                    <option value="Kira" />
                    <option value="Namugongo" />
                    <option value="Munyonyo" />
                    <option value="Buziga" />
                    <option value="Lubowa" />
                    <option value="Lweza" />
                    <option value="Seguku" />
                    <option value="Bukoto" />
                    <option value="Kamwokya" />
                    <option value="Ggaba" />
                    <option value="Kansanga" />
                    <option value="Entebbe Corridor" />
                  </datalist>
                  {errors.neighbourhood && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.neighbourhood}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="specificAddress" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Specific Address / Landmark <span className="text-slate-500 font-normal">(Helpful for dispatch)</span>
                  </label>
                  <input
                    type="text"
                    id="specificAddress"
                    value={formData.specificAddress}
                    onChange={(e) => setFormData({ ...formData, specificAddress: e.target.value })}
                    placeholder="e.g. Plot 14, Near Acacia Mall / Black Gate"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Vehicle Type & Service Selection */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-sky-500 text-slate-950 text-xs font-black flex items-center justify-center">3</span>
                <span>Vehicle & Service Required</span>
              </h3>

              {/* Vehicle Type Visual Radio Cards */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-slate-200 mb-2">
                  Select Vehicle Category <span className="text-rose-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {(Object.keys(vehicleTypeLabels) as VehicleType[]).map((typeKey) => {
                    const isSelected = formData.vehicleType === typeKey;
                    return (
                      <button
                        type="button"
                        key={typeKey}
                        onClick={() => {
                          setFormData({ ...formData, vehicleType: typeKey });
                          if (errors.vehicleType) setErrors({ ...errors, vehicleType: '' });
                        }}
                        className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-sky-500/15 border-sky-400 text-white shadow-md shadow-sky-950/40 ring-1 ring-sky-400'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Car className={`w-4 h-4 ${isSelected ? 'text-sky-400' : 'text-slate-500'}`} />
                          {isSelected && <Check className="w-3.5 h-3.5 text-sky-400" />}
                        </div>
                        <span className="text-xs font-semibold">{vehicleTypeLabels[typeKey]}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.vehicleType && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.vehicleType}</span>
                  </p>
                )}
              </div>

              {/* Service Selection Radio Cards */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2">
                  Choose Service <span className="text-rose-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {siteConfig.services.map((srv) => {
                    const isSelected = formData.serviceRequested === srv.id;
                    return (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => {
                          setFormData({ ...formData, serviceRequested: srv.id });
                          if (errors.serviceRequested) setErrors({ ...errors, serviceRequested: '' });
                        }}
                        className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'bg-sky-500/15 border-sky-400 text-white shadow-md shadow-sky-950/40 ring-1 ring-sky-400'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'border-sky-400 bg-sky-500' : 'border-slate-600'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 text-slate-950 stroke-[3]" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-white">{srv.name}</span>
                            <span className="text-[11px] text-sky-400 font-medium">{srv.estimatedDuration}</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1 line-clamp-2">{srv.shortDescription}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {errors.serviceRequested && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.serviceRequested}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Step 4: Schedule & Preferences */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-sky-500 text-slate-950 text-xs font-black flex items-center justify-center">4</span>
                <span>Preferred Date & Schedule</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Preferred Date <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    min={todayDateString}
                    value={formData.preferredDate}
                    onChange={(e) => {
                      setFormData({ ...formData, preferredDate: e.target.value });
                      if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white focus:outline-none transition-colors ${
                      errors.preferredDate ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 focus:border-sky-500'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.preferredDate}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTimeSlot" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Preferred Time Slot <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="preferredTimeSlot"
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                  >
                    <option value="Morning (08:00 – 11:00)">Morning (08:00 – 11:00)</option>
                    <option value="Midday (11:00 – 14:00)">Midday (11:00 – 14:00)</option>
                    <option value="Afternoon (14:00 – 17:00)">Afternoon (14:00 – 17:00)</option>
                    <option value="Flexible / Anytime on this date">Flexible / Anytime on this date</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="additionalNotes" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Additional Instructions or Specific Requests <span className="text-slate-500 font-normal">(e.g. child seat extraction, water tap location, security gate instructions)</span>
                </label>
                <textarea
                  id="additionalNotes"
                  rows={3}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Share any special instructions about your car or parking area..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
            </div>

            {/* Terms confirmation checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.confirmTerms}
                  onChange={(e) => {
                    setFormData({ ...formData, confirmTerms: e.target.checked });
                    if (errors.confirmTerms) setErrors({ ...errors, confirmTerms: '' });
                  }}
                  className="mt-1 w-4 h-4 rounded bg-slate-950 border-slate-700 text-sky-500 focus:ring-sky-400"
                />
                <span className="text-xs text-slate-300 leading-relaxed">
                  I understand that this request is subject to schedule and location confirmation by the Mist Wheels team prior to dispatch.
                </span>
              </label>
              {errors.confirmTerms && (
                <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.confirmTerms}</span>
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Prepares your WhatsApp booking message instantly</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-xl shadow-emerald-950/40 active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>Send Request on WhatsApp</span>
                </button>
              </div>
            </div>

          </form>
        </div>

      </div>

      {/* Booking Submission Feedback / Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-7 space-y-5 shadow-2xl relative">
            
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Booking Request Prepared</h3>
                  <p className="text-xs text-slate-400">Ready to transmit to Mist Wheels</p>
                </div>
              </div>

              <button
                onClick={() => setIsSuccessModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 text-xl font-bold"
              >
                &times;
              </button>
            </div>

            {/* Config Notice if Phone Not Configured */}
            {!hasConfiguredNumber && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 space-y-2">
                <div className="flex items-center gap-2 font-semibold">
                  <Settings className="w-4 h-4 text-amber-400" />
                  <span>WhatsApp Number Setup Notice</span>
                </div>
                <p className="text-[11px] text-amber-300 leading-relaxed">
                  The official Mist Wheels WhatsApp number has not yet been specified in <code className="bg-amber-950/80 px-1 py-0.5 rounded text-amber-200 font-mono">src/config/siteConfig.ts</code>. You can copy the prepared message below or update the phone number in settings.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccessModalOpen(false);
                    onOpenConfigHelp();
                  }}
                  className="text-xs text-amber-400 hover:underline font-bold inline-flex items-center gap-1"
                >
                  <span>Configure Phone Number Now &rarr;</span>
                </button>
              </div>
            )}

            {/* Prepared Message Box */}
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                <span className="font-semibold uppercase tracking-wider text-slate-300">Message Content</span>
                <span className="text-[11px] text-slate-500">British English</span>
              </div>
              <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono whitespace-pre-wrap max-h-48 overflow-y-auto selection:bg-sky-500">
                {preparedMessage}
              </pre>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Open in WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Message</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-slate-400 text-center">
              Our operations dispatch will review your slot and reply with final confirmation.
            </p>

          </div>
        </div>
      )}

    </section>
  );
};
