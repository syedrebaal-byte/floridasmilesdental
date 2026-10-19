import React, { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X, Calendar, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (preferredLocation?: string, preferredService?: string) => void;
  onOpenEmergency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenEmergency }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Clinical Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <a
              href="tel:9545236525"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Call Fort Lauderdale office"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Fort Lauderdale:</span>
              <span className="font-semibold text-white tracking-wide">(954) 523-6525</span>
            </a>
            <span className="hidden md:inline text-slate-600">·</span>
            <a
              href="tel:9549432466"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
              title="Call Lighthouse Point office"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Lighthouse Point:</span>
              <span className="font-semibold text-white tracking-wide">(954) 943-2466</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>Mon – Fri: 8:00 AM – 6:00 PM</span>
            </span>
            <button
              onClick={onOpenEmergency}
              className="text-amber-300 hover:text-amber-200 font-medium underline underline-offset-2 transition-colors cursor-pointer"
            >
              Emergency Care
            </button>
          </div>
        </div>
      </div>

      {/* Primary Top Bar Contract */}
      {/* Zone 1: Brand title | Zone 2: 4-5 nav links | Zone 3: 1 primary action */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Wordmark */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-600 transition-transform group-hover:scale-125" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 font-display">
                Florida Smiles Dental
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                Fort Lauderdale & Lighthouse Point
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Services & Treatments
            </a>
            <a href="#specialists" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Meet Our Doctors
            </a>
            <a href="#interactive-model" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Technology & 3D
            </a>
            <a href="#locations" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Locations & Hours
            </a>
            <a href="#financing" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Insurance & Financing
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-sky-400" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4 text-base font-medium text-slate-800">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>Services & Treatments</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#specialists"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>Meet Our Doctors</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#interactive-model"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>Technology & 3D CAD/CAM</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#locations"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>Locations & Hours</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#financing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>Insurance & Financing</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#emergency"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between text-amber-700 font-semibold"
              >
                <span>Emergency Dental Care</span>
                <ChevronRight className="w-4 h-4 text-amber-600" />
              </a>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 px-4 text-sm font-semibold text-white bg-slate-900 rounded-lg text-center shadow cursor-pointer"
                >
                  Book Your Visit
                </button>
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <a
                    href="tel:9545236525"
                    className="p-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50"
                  >
                    Call Ft. Lauderdale
                  </a>
                  <a
                    href="tel:9549432466"
                    className="p-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50"
                  >
                    Call Lighthouse Pt.
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
