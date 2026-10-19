import React, { useState } from 'react';
import { CLINIC_LOCATIONS, OfficeLocation } from '../data/clinicData';
import { MapPin, Phone, Clock, Car, ExternalLink, Calendar, CheckCircle2, Shield } from 'lucide-react';

interface LocationsSectionProps {
  onSelectLocationForBooking: (locationId: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSelectLocationForBooking }) => {
  const [selectedLocationId, setSelectedLocationId] = useState<string>('ft-lauderdale');

  const activeLocation = CLINIC_LOCATIONS.find(loc => loc.id === selectedLocationId) || CLINIC_LOCATIONS[0];

  return (
    <section id="locations" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 uppercase tracking-widest mb-3">
            <span>Two Convenient Practices</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Broward County, Florida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Visit Us in Fort Lauderdale or Lighthouse Point
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Both of our boutique coastal offices are custom-designed for calm, unhurried care. Choose the office closest to your home or work in South Florida.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex items-center gap-3 p-1.5 bg-slate-100 rounded-xl max-w-md mb-8 border border-slate-200/80">
          {CLINIC_LOCATIONS.map(loc => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocationId(loc.id)}
              className={`flex-1 py-2.5 px-4 text-xs font-semibold rounded-lg transition-all text-center cursor-pointer ${
                selectedLocationId === loc.id
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {loc.city} Office
            </button>
          ))}
        </div>

        {/* Location Details Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Col: Contact & Logistics */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                    {activeLocation.name}
                  </span>
                  <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                    Open Mon – Fri 8am – 6pm
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 font-display">
                  {activeLocation.fullAddress}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${activeLocation.phoneRaw}`}
                      className="text-lg font-bold text-slate-900 hover:text-sky-700 transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-sky-600" />
                      <span>{activeLocation.phone}</span>
                    </a>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Office Hours
                    </span>
                    <div className="text-sm font-medium text-slate-800 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span>{activeLocation.hours}</span>
                    </div>
                  </div>

                  <div className="space-y-1 sm:col-span-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Parking & Accessibility
                    </span>
                    <div className="text-xs text-slate-600 flex items-center gap-2">
                      <Car className="w-4 h-4 text-slate-500" />
                      <span>{activeLocation.parking}</span>
                    </div>
                  </div>
                </div>

                {/* Office Highlights */}
                <div className="pt-6 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                    Location Features & Clinical Suites
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeLocation.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 mt-6 border-t border-slate-200 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onSelectLocationForBooking(activeLocation.id)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-sky-400" />
                  <span>Book at {activeLocation.city}</span>
                </button>

                <a
                  href={`tel:${activeLocation.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-xl border border-slate-300/80 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Call {activeLocation.phone}</span>
                </a>

                <a
                  href={activeLocation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium text-sky-700 hover:text-sky-900 underline underline-offset-4"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Col: Interactive Visual Map Preview */}
            <div className="lg:col-span-5 bg-slate-200/70 p-6 flex flex-col justify-between relative min-h-[300px]">
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-5 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1">
                  <MapPin className="w-4 h-4 text-sky-700" />
                  <span>{activeLocation.name}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {activeLocation.fullAddress}
                </p>
                <div className="mt-3 text-[11px] text-slate-500">
                  Serving Fort Lauderdale, Las Olas, Lighthouse Point, Pompano Beach, Deerfield Beach, and Boca Raton.
                </div>
              </div>

              {/* Map Illustration Graphic */}
              <div className="my-auto py-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-200/90 mb-3 text-sky-700">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {activeLocation.city}, Florida
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Latitude 26.12° N · Coastal Broward County
                </div>
              </div>

              <div className="text-center">
                <a
                  href={activeLocation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 px-4 py-2 rounded-lg border border-slate-200 shadow-xs"
                >
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
