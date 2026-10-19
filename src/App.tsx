/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { TechnologySection } from './components/TechnologySection';
import { SpecialistsSection } from './components/SpecialistsSection';
import { LocationsSection } from './components/LocationsSection';
import { FinancingSection } from './components/FinancingSection';
import { EmergencySection } from './components/EmergencySection';
import { ReviewsAndFaqSection } from './components/ReviewsAndFaqSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { SmileAssessmentModal } from './components/SmileAssessmentModal';
import { Phone, Calendar, AlertCircle } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingLocation, setBookingLocation] = useState<string | undefined>(undefined);
  const [bookingService, setBookingService] = useState<string | undefined>(undefined);
  const [bookingDoctor, setBookingDoctor] = useState<string | undefined>(undefined);

  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  const handleOpenBooking = (location?: string, service?: string, doctor?: string) => {
    setBookingLocation(location);
    setBookingService(service);
    setBookingDoctor(doctor);
    setIsBookingOpen(true);
  };

  const handleAssessmentComplete = (data: { goal: string; priority: string; location: string }) => {
    // Map assessment goal to service id
    let mappedService = 'dental-implants';
    if (data.goal === 'veneers') mappedService = 'cosmetic-veneers';
    if (data.goal === 'invisalign') mappedService = 'invisalign-aligners';
    if (data.goal === 'tmj') mappedService = 'facial-aesthetics';
    if (data.goal === 'general') mappedService = 'periodontal-laser';

    handleOpenBooking(data.location, mappedService);
  };

  const handleScrollToEmergency = () => {
    const el = document.getElementById('emergency');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenBooking(undefined, 'emergency-dentistry');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenBooking={(loc, srv) => handleOpenBooking(loc, srv)}
        onOpenEmergency={handleScrollToEmergency}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* Services & Specialized Care */}
        <ServicesSection
          onSelectServiceForBooking={(serviceId) => handleOpenBooking(undefined, serviceId)}
        />

        {/* Interactive 3D Model & Precision Dental CAD/CAM */}
        <TechnologySection />

        {/* Meet the Doctors & Multidisciplinary Specialists */}
        <SpecialistsSection
          onSelectDoctorForBooking={(doctorName) => handleOpenBooking(undefined, undefined, doctorName)}
        />

        {/* Two Convenient Practices (Fort Lauderdale & Lighthouse Point) */}
        <LocationsSection
          onSelectLocationForBooking={(locId) => handleOpenBooking(locId)}
        />

        {/* Financing & Payment Calculator */}
        <FinancingSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Emergency Dental Care */}
        <EmergencySection
          onOpenBooking={(loc, srv) => handleOpenBooking(loc, srv)}
        />

        {/* Testimonials & FAQs */}
        <ReviewsAndFaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick-Action Bar (stays within 15% mobile viewport cap) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-lg flex items-center justify-between gap-2">
        <a
          href="tel:9545236525"
          className="flex-1 py-2 px-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg text-center flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-sky-700" />
          <span>Call Office</span>
        </a>
        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 py-2 px-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg text-center flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-sky-400" />
          <span>Book Visit</span>
        </button>
      </div>

      {/* Modals */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialLocation={bookingLocation}
        initialService={bookingService}
        initialDoctor={bookingDoctor}
      />

      <SmileAssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        onComplete={handleAssessmentComplete}
      />
    </div>
  );
}
