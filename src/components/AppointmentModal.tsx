import React, { useState, useEffect } from 'react';
import { CLINIC_LOCATIONS, DOCTORS, SERVICES } from '../data/clinicData';
import { X, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, Phone, User, Mail, Download } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLocation?: string;
  initialService?: string;
  initialDoctor?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialLocation,
  initialService,
  initialDoctor
}) => {
  const [location, setLocation] = useState<string>('ft-lauderdale');
  const [service, setService] = useState<string>('dental-implants');
  const [doctor, setDoctor] = useState<string>('first-available');
  const [date, setDate] = useState<string>('');
  const [timeWindow, setTimeWindow] = useState<string>('morning');

  // Contact fields
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [insuranceStatus, setInsuranceStatus] = useState<string>('ppo');
  const [notes, setNotes] = useState<string>('');

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialLocation) setLocation(initialLocation);
    if (initialService) setService(initialService);
    if (initialDoctor) setDoctor(initialDoctor);

    // Default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split('T')[0]);
  }, [initialLocation, initialService, initialDoctor, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!email.trim() || !email.includes('@')) errors.email = 'Please provide a valid email';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) errors.phone = 'Please enter a 10-digit phone number';
    if (!date) errors.date = 'Please pick a preferred date';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift confirmation
    setTimeout(() => {
      const code = 'FSD-' + Math.floor(1000 + Math.random() * 9000);
      setBookingRef(code);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const selectedLocObj = CLINIC_LOCATIONS.find(l => l.id === location) || CLINIC_LOCATIONS[0];
  const selectedServiceObj = SERVICES.find(s => s.id === service);

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Florida Smiles Dental//Appointment//EN
BEGIN:VEVENT
UID:${bookingRef}@floridasmilesdental.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${date.replace(/-/g, '')}T140000Z
DTEND:${date.replace(/-/g, '')}T150000Z
SUMMARY:Dental Visit - Florida Smiles Dental (${selectedLocObj.city})
DESCRIPTION:Consultation: ${selectedServiceObj?.title || 'Comprehensive Dental Care'} at ${selectedLocObj.fullAddress}. Phone: ${selectedLocObj.phone}
LOCATION:${selectedLocObj.fullAddress}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `florida-smiles-visit-${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Direct Scheduling</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-display mt-0.5">
              Request Your Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Confirmation Screen */
          <div className="py-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-2xl font-bold text-slate-900 font-display">
              Consultation Request Received
            </h4>

            <div className="inline-block my-4 px-4 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-900">
              Reference: {bookingRef}
            </div>

            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-slate-900">{fullName}</strong>. Our clinical concierge at the{' '}
              <strong className="text-slate-900">{selectedLocObj.name}</strong> will contact you at{' '}
              <strong className="text-slate-900">{phone}</strong> within 2 business hours to finalize your exact appointment slot.
            </p>

            <div className="bg-slate-50 rounded-xl p-4 text-left border border-slate-200/80 max-w-md mx-auto text-xs text-slate-700 space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="font-semibold">{selectedLocObj.fullAddress}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold">{selectedServiceObj?.title || 'Comprehensive Dentistry'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Preferred Date & Time:</span>
                <span className="font-semibold">{date} ({timeWindow})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Office Telephone:</span>
                <a href={`tel:${selectedLocObj.phoneRaw}`} className="font-semibold text-sky-800">
                  {selectedLocObj.phone}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleDownloadCalendar}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-600" />
                <span>Save to Calendar (.ics)</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Location & Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  1. Select Practice Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900 cursor-pointer"
                >
                  {CLINIC_LOCATIONS.map(loc => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name} ({loc.city})
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-slate-500 mt-1">
                  {selectedLocObj.address}, {selectedLocObj.suite}
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  2. Select Treatment Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900 cursor-pointer"
                >
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-slate-500 mt-1">
                  Includes 3D CBCT or digital intraoral scan
                </p>
              </div>
            </div>

            {/* Step 2: Preferred Doctor & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  Preferred Doctor
                </label>
                <select
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900 cursor-pointer"
                >
                  <option value="first-available">First Available Specialist</option>
                  {DOCTORS.map(d => (
                    <option key={d.id} value={d.name}>
                      {d.name} ({d.specialty})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900 cursor-pointer"
                />
                {formErrors.date && <p className="text-[11px] text-rose-600 mt-1">{formErrors.date}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  Preferred Time Window
                </label>
                <select
                  value={timeWindow}
                  onChange={(e) => setTimeWindow(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900 cursor-pointer"
                >
                  <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
                  <option value="afternoon">Early Afternoon (12:00 PM – 3:30 PM)</option>
                  <option value="late-afternoon">Late Afternoon (3:30 PM – 6:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Step 3: Patient Information */}
            <div className="border-t border-slate-200 pt-4">
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                3. Your Patient Contact Information
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Eleanor Vance"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                  />
                  {formErrors.fullName && <p className="text-[11px] text-rose-600 mt-1">{formErrors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-1">Direct Phone Number (for SMS & confirmation) *</label>
                  <input
                    type="tel"
                    placeholder="(954) 555-0192"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                  />
                  {formErrors.phone && <p className="text-[11px] text-rose-600 mt-1">{formErrors.phone}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-1">Email Address *</label>
                  <input
                    type="email"
                    placeholder="eleanor@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                  />
                  {formErrors.email && <p className="text-[11px] text-rose-600 mt-1">{formErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-1">Insurance & Payment Preference</label>
                  <select
                    value={insuranceStatus}
                    onChange={(e) => setInsuranceStatus(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900 cursor-pointer"
                  >
                    <option value="ppo">I have PPO Dental Insurance</option>
                    <option value="savings-plan">Interested in Florida Smiles Savings Plan</option>
                    <option value="financing">Interested in 0% APR Financing (CareCredit / Sunbit)</option>
                    <option value="self-pay">Self-Pay / Credit Card</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-600 mb-1">Any specific symptoms, questions, or requests? (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Sensitive lower molar, interested in replacing a missing tooth, dental anxiety sedation options..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            {/* Honest Disclosure & Trust */}
            <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0" />
              <span>
                Your privacy is protected. Submitting this request places a provisional hold; our concierge will call you directly to verify health details and secure your slot.
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 rounded-lg shadow-md transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>{isSubmitting ? 'Submitting Request...' : 'Confirm Appointment Request'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
