import React, { useState } from 'react';
import { SERVICES, Service } from '../data/clinicData';
import { ArrowRight, CheckCircle2, Sparkles, Clock, ShieldCheck, X, Calendar } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'Cosmetic', label: 'Cosmetic & Makeovers' },
    { id: 'Restorative', label: 'Dental Implants & Restorative' },
    { id: 'Orthodontics', label: 'Clear Aligners' },
    { id: 'Surgical & Specialty', label: 'Surgical & Emergency' },
    { id: 'Preventive', label: 'Periodontics & Prevention' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 uppercase tracking-widest mb-3">
            <span>Specialized Care</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Multidisciplinary Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Comprehensive Dentistry, Perfected Under One Roof
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            From routine preventive checkups to complex full-arch implant rehabilitations and bespoke smile design, Florida Smiles Dental brings together dedicated specialists so you rarely have to be referred elsewhere.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Visual Spotlight (Two Marquee Services with Generated Images) */}
        {activeCategory === 'all' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Spotlight 1: Dental Implants */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col md:flex-row">
              <div className="md:w-1/2 relative min-h-[240px]">
                <img
                  src="/src/assets/images/dental_tech_implants_1792424265029.jpg"
                  alt="Modern 3D digital dental scanner and implant restoration display"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
                    Advanced Restorative
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Dental Implants & All-on-X
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Permanent tooth replacement using 3D CBCT guided surgery and biocompatible medical zirconia crowns.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(SERVICES.find(s => s.id === 'dental-implants') || null)}
                    className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Clinical Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onSelectServiceForBooking('dental-implants')}
                    className="px-3.5 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg cursor-pointer"
                  >
                    Consultation
                  </button>
                </div>
              </div>
            </div>

            {/* Spotlight 2: Porcelain Veneers & Cosmetic Dentistry */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col md:flex-row">
              <div className="md:w-1/2 relative min-h-[240px]">
                <img
                  src="/src/assets/images/cosmetic_smile_portrait_1792424262890.jpg"
                  alt="Confident woman with radiant healthy smile"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
                    Aesthetic Smile Design
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Porcelain Veneers & Makeovers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Hand-layered ceramic veneers engineered to match your natural facial symmetry and light translucency.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(SERVICES.find(s => s.id === 'cosmetic-veneers') || null)}
                    className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Clinical Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onSelectServiceForBooking('cosmetic-veneers')}
                    className="px-3.5 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg cursor-pointer"
                  >
                    Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-3">
                  <span className="font-medium text-sky-700">{service.category}</span>
                  <span className="text-slate-400">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{service.duration}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-900 transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Highlights list */}
                <div className="space-y-2 mb-6">
                  {service.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-4 transition-colors cursor-pointer"
                >
                  Learn More
                </button>
                <button
                  type="button"
                  onClick={() => onSelectServiceForBooking(service.id)}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  Book Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clinical Protocol Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider">
                  {selectedService.category} Dentistry
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1 font-display">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6 text-sm text-slate-600 leading-relaxed">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Clinical Overview & Technology
                </h4>
                <p>{selectedService.fullDesc}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Key Patient Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-semibold text-slate-900 block mb-1">Expected Appointment Time:</span>
                  <span className="text-slate-600">{selectedService.duration}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block mb-1">Recovery & Downtime:</span>
                  <span className="text-slate-600">{selectedService.recovery}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Ideal Candidate Profile
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.idealFor.map((c, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-md">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const sId = selectedService.id;
                  setSelectedService(null);
                  onSelectServiceForBooking(sId);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>Schedule Consultation for This Service</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
