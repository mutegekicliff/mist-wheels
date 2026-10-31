import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  Settings, 
  MessageCircle, 
  Check, 
  Copy, 
  Save, 
  Code
} from 'lucide-react';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveTemporaryNumber: (num: string) => void;
  currentActiveNumber: string;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  onSaveTemporaryNumber,
  currentActiveNumber,
}) => {
  const [testNumber, setTestNumber] = useState(currentActiveNumber || siteConfig.contact.whatsappNumber || '');
  const [savedNotice, setSavedNotice] = useState(false);
  const [copiedPath, setCopiedPath] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveTemporaryNumber(testNumber.trim());
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1200);
  };

  const configPath = 'src/config/siteConfig.ts';

  const copyConfigPath = () => {
    navigator.clipboard.writeText(configPath);
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 sm:p-7 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Mist Wheels Settings & Contact</h3>
              <p className="text-xs text-slate-400">Configure WhatsApp & business variables</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 text-xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Live Test WhatsApp Number */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Test / Set Active WhatsApp Number</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Enter your WhatsApp number (in international format with Uganda code, e.g. <strong className="text-white">256770123456</strong>) to test direct WhatsApp booking submissions in your browser:
          </p>

          <form onSubmit={handleSave} className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={testNumber}
              onChange={(e) => setTestNumber(e.target.value)}
              placeholder="e.g. 256770000000"
              className="flex-1 px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white font-mono placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Apply for Session</span>
            </button>
          </form>

          {savedNotice && (
            <p className="text-xs text-emerald-400 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Session number applied! WhatsApp buttons will now route to this number.</span>
            </p>
          )}
        </div>

        {/* Permanent Configuration Info */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-sky-400" />
              <span>Central Configuration File</span>
            </h4>
            <button
              onClick={copyConfigPath}
              className="text-xs text-sky-400 hover:underline flex items-center gap-1"
            >
              {copiedPath ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied path</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy file path</span>
                </>
              )}
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
            {configPath}
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            All business details are centralized in <code className="text-sky-300">src/config/siteConfig.ts</code>:
          </p>

          <ul className="text-xs text-slate-400 space-y-1.5 pl-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span><strong>whatsappNumber:</strong> Official WhatsApp Business line</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span><strong>tagline:</strong> Draft tagline &bull; <em>"Expert car care, wherever you park"</em></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span><strong>serviceAreas:</strong> Kampala & Greater Kampala neighbourhood list</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span><strong>features.showPricingSection:</strong> Enable once confirmed tariffs are set</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span><strong>features.showTestimonials:</strong> Enable only when real client reviews are added</span>
            </li>
          </ul>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
