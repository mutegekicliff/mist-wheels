import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { generateEnquiryWhatsAppUrl } from '../utils/whatsapp';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageCircle, 
  Search
} from 'lucide-react';

interface FAQSectionProps {
  onOpenConfigHelp: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConfigHelp }) => {
  const [openId, setOpenId] = useState<string | null>('how-mobile-works');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [faqSearch, setFaqSearch] = useState('');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleWhatsAppEnquiry = (e: React.MouseEvent) => {
    const { url, hasDirectNumber } = generateEnquiryWhatsAppUrl('FAQ Question');
    if (!hasDirectNumber && !siteConfig.contact.whatsappNumber) {
      e.preventDefault();
      onOpenConfigHelp();
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const filteredFaqs = siteConfig.faqs.filter(faq => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-slate-900/40 border-y border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Everything you need to know about our mobile service
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Clear, honest answers regarding our mobile setup, arrival policies, and vehicle care.
          </p>
        </div>

        {/* Filter Pills & Search */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'booking', label: 'Bookings & Payments' },
              { id: 'process', label: 'Process & Space' },
              { id: 'equipment', label: 'Steam Technology' },
              { id: 'fleet', label: 'Fleet & Corporate' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === tab.id
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Search className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-950 rounded-2xl border border-slate-800 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white group-hover:text-sky-300">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-sky-400 border-sky-500/30' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-900 animate-in fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center text-sm text-slate-400 bg-slate-950 rounded-xl border border-slate-800">
              No questions found matching your filter.
            </div>
          )}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Have a specific question about your location or car?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Chat directly with our team on WhatsApp for prompt clarification.
            </p>
          </div>

          <button
            onClick={handleWhatsAppEnquiry}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-emerald-950/40"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
