import React, { useState } from 'react';
import { CLINIC_LOCATIONS } from '../data/clinicData';
import { Phone, MapPin, Clock, ShieldCheck, Heart, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'accessibility' | null>(null);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <span className="text-xl font-bold tracking-tight text-white font-display">
              Florida Smiles Dental
            </span>
            <p className="text-xs text-slate-400 mt-3 leading-relaxed max-w-sm">
              Comprehensive cosmetic, implant, periodontal, and general dentistry delivered by an elite multidisciplinary team of board-certified specialists in South Florida.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Dedicated to Clinical Excellence & Patient Comfort</span>
            </div>
          </div>

          {/* Fort Lauderdale Location */}
          <div className="lg:col-span-4">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Fort Lauderdale Office
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="text-slate-300">
                255 SE 14th St Suite 200<br />
                Fort Lauderdale, FL 33316
              </p>
              <div className="pt-1">
                <a
                  href="tel:9545236525"
                  className="font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>(954) 523-6525</span>
                </a>
              </div>
              <p className="text-[11px] text-slate-500">
                Mon – Fri: 8:00 AM – 6:00 PM · Closed Sat & Sun
              </p>
            </div>
          </div>

          {/* Lighthouse Point Location */}
          <div className="lg:col-span-4">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Lighthouse Point Office
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="text-slate-300">
                2211 NE 36th St #201<br />
                Lighthouse Point, FL 33064
              </p>
              <div className="pt-1">
                <a
                  href="tel:9549432466"
                  className="font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>(954) 943-2466</span>
                </a>
              </div>
              <p className="text-[11px] text-slate-500">
                Mon – Fri: 8:00 AM – 6:00 PM · Closed Sat & Sun
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Medical Disclaimer & Quiet Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Florida Smiles Dental. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy & HIPAA
            </button>
            <span>·</span>
            <button
              onClick={() => setLegalModal('accessibility')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Accessibility Statement
            </button>
          </div>
        </div>

        <div className="mt-4 text-[11px] text-slate-600 leading-relaxed text-center sm:text-left">
          Medical Disclaimer: The clinical information presented on this website is for general informational and educational purposes only and does not constitute formal medical or dental diagnosis. An in-person clinical examination and diagnostic 3D radiographs by a licensed Florida dentist are required prior to any treatment plan formulation.
        </div>
      </div>

      {/* Privacy / Accessibility Policy Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-800 text-xs leading-relaxed">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h4 className="text-base font-bold text-slate-900 font-display">
                {legalModal === 'privacy' ? 'Privacy Policy & HIPAA Compliance' : 'Website Accessibility Statement'}
              </h4>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {legalModal === 'privacy' ? (
              <div className="space-y-3 text-slate-600">
                <p>
                  Florida Smiles Dental complies with all Health Insurance Portability and Accountability Act (HIPAA) privacy standards. Any personal health data submitted through appointment request inquiries is encrypted and transmitted securely.
                </p>
                <p>
                  We do not sell, rent, or distribute patient contact details to third-party marketers. Your medical records remain strictly confidential and accessible only to your treating clinical providers.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-slate-600">
                <p>
                  Florida Smiles Dental is committed to digital accessibility and conforming to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
                </p>
                <p>
                  We continually enhance our digital experience for screen readers, keyboard-only navigation, and high-contrast accessibility. If you experience difficulty accessing any part of our website, please call us directly at (954) 523-6525 for immediate concierge assistance.
                </p>
              </div>
            )}

            <div className="mt-6 pt-3 border-t border-slate-100 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
