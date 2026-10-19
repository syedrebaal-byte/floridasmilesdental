import React from 'react';
import { Calendar, Phone, ArrowUpRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { heroClinicImg } from '../assets/images';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenAssessment }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80">
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-gradient-to-bl from-sky-50/70 via-slate-50/50 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Clinical Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Zero-Pill Quiet Editorial Metadata */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 uppercase tracking-widest mb-4">
              <span>Fort Lauderdale</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Lighthouse Point</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>South Florida</span>
            </div>

            {/* Display Headline with Balance & Anti-Orphan Measure */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-slate-900 leading-[1.12] mb-6 font-display" style={{ textWrap: 'balance' }}>
              Exceptional Dental Precision. <br className="hidden sm:inline" />
              Restorative Artistry.
            </h1>

            {/* Natural Patient-Centric Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              Florida Smiles Dental unites cosmetic smile design, computer-guided dental implants, and multidisciplinary specialist care under one roof. Led by Dr. Peter Scerbo, our team delivers transformative results with uncompromised comfort.
            </p>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>Request Appointment</span>
              </button>

              <button
                type="button"
                onClick={onOpenAssessment}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Interactive Smile Quiz</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Verified Trust Markers - Unboxed Text */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-700" />
                <span>Board-Certified Specialists on Staff</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-700" />
                <span>2 Coastal Broward County Offices</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900">Most PPO Insurances</span>
                <span>& 0% APR Financing</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 aspect-[4/3] lg:aspect-[5/4] group">
              <img
                src={heroClinicImg}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/hero_clinic_interior.jpg';
                }}
                alt="Florida Smiles Dental state-of-the-art coastal clinic in Fort Lauderdale with panoramic views and modern clinical suite"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating Verified Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-slate-900 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-900">
                    Fort Lauderdale & Lighthouse Point
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Advanced 3D CBCT Imaging & Same-Day Care
                  </div>
                </div>
                <a
                  href="tel:9545236525"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-sky-900 hover:bg-sky-100 text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Office</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Highlights Strip Below Hero Split */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight tabular-nums font-display">
              2 Locations
            </span>
            <span className="text-xs text-slate-600 mt-1 font-medium">
              Fort Lauderdale & Lighthouse Point, FL
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight tabular-nums font-display">
              11 Specialists
            </span>
            <span className="text-xs text-slate-600 mt-1 font-medium">
              Periodontists, Surgeons & Cosmetic Dentists
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight tabular-nums font-display">
              100% Digital
            </span>
            <span className="text-xs text-slate-600 mt-1 font-medium">
              3D CBCT Scans, No Putty Molds & Laser Tech
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight tabular-nums font-display">
              Mon – Fri 8–6
            </span>
            <span className="text-xs text-slate-600 mt-1 font-medium">
              Same-day emergency dental appointments
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
