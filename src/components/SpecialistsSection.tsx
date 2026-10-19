import React, { useState } from 'react';
import { DOCTORS, Doctor } from '../data/clinicData';
import { MapPin, Award, CheckCircle2, Calendar, Phone } from 'lucide-react';

interface SpecialistsSectionProps {
  onSelectDoctorForBooking: (doctorName: string) => void;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({ onSelectDoctorForBooking }) => {
  const [filter, setFilter] = useState<string>('all');

  const specialties = [
    { id: 'all', label: 'All Specialists (11)' },
    { id: 'Cosmetic & General', label: 'Cosmetic & General' },
    { id: 'Implant & Periodontics', label: 'Implants & Periodontics' },
    { id: 'Oral Surgery', label: 'Oral Surgery' },
    { id: 'Endodontics', label: 'Endodontics' },
    { id: 'Aesthetics', label: 'Facial Aesthetics' }
  ];

  const filteredDoctors = filter === 'all'
    ? DOCTORS
    : DOCTORS.filter(d => d.specialty === filter);

  return (
    <section id="specialists" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Story Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 uppercase tracking-widest mb-3">
              <span>Multidisciplinary Medical Team</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Fort Lauderdale & Lighthouse Point</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Meet Our Board-Certified Specialists & Doctors
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed max-w-2xl">
              Florida Smiles Dental is proud to unite experienced cosmetic dentists, board-certified periodontists, maxillofacial surgeons, and microscopic endodontists. You benefit from collaborative diagnostics without outside referrals.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs flex items-center gap-3">
              <Award className="w-8 h-8 text-sky-700 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-slate-900">Fellowship & Board Trained</div>
                <div className="text-slate-500">American Academy of Cosmetic Dentistry & AAP</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Banner: Clinical Consultation */}
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-12 grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 h-[280px] lg:h-full relative">
            <img
              src="/src/assets/images/doctor_patient_care_1792424264073.jpg"
              alt="Florida Smiles Dental clinician reviewing digital treatment plan with patient"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
              Collaborative Patient-Centered Practice
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">
              Your Smile Care Team, Led by Dr. Peter Scerbo
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              "We believe dentistry should feel reassuring, transparent, and artfully tailored. Whether you visit us in Fort Lauderdale or Lighthouse Point, our specialists examine every detail of your facial structure, bite mechanics, and oral health together to craft your ideal long-term treatment plan."
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Zero Outside Travel for Complex Cases</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Modern Sedation & Pain-Free Protocols</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specialty Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {specialties.map(spec => (
            <button
              key={spec.id}
              onClick={() => setFilter(spec.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === spec.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {spec.label}
            </button>
          ))}
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map(doctor => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl p-6 border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-sky-800">{doctor.specialty}</span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{doctor.locations.join(', ')}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">
                  {doctor.name}
                </h3>
                <div className="text-xs text-sky-900 font-medium mb-3">
                  {doctor.title} · {doctor.credentials}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {doctor.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Accepting New Patients</span>
                <button
                  type="button"
                  onClick={() => onSelectDoctorForBooking(doctor.name)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-sky-600" />
                  <span>Book with {doctor.name.split(' ')[1] || doctor.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
