import React from 'react';
import { AlertCircle, Phone, Clock, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';

interface EmergencySectionProps {
  onOpenBooking: (preferredLocation?: string, preferredService?: string) => void;
}

export const EmergencySection: React.FC<EmergencySectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="emergency" className="py-20 bg-amber-50/40 border-b border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-amber-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-md mb-4">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Urgent Dental Care & Same-Day Relief</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display mb-4">
                In Severe Dental Pain? <br className="hidden sm:inline" />
                We Guarantee Same-Day Attention.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Dental pain and traumatic tooth injuries cannot wait. Florida Smiles Dental reserves dedicated emergency appointments every weekday in both Fort Lauderdale and Lighthouse Point to diagnose the cause, numb acute discomfort, and stabilize your tooth immediately.
              </p>

              {/* Triage Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/50 text-xs">
                  <span className="font-bold text-slate-900 block mb-1">Knocked-Out or Displaced Tooth</span>
                  <span className="text-slate-600">Re-implantation is most successful within 60 minutes. Keep the tooth moist in whole milk or saliva and call us immediately.</span>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/50 text-xs">
                  <span className="font-bold text-slate-900 block mb-1">Severe Throbbing Infection</span>
                  <span className="text-slate-600">Presents as acute nerve ache or facial swelling. Our endodontists provide profound anesthesia and targeted drainage.</span>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/50 text-xs">
                  <span className="font-bold text-slate-900 block mb-1">Broken Crown or Loose Restoration</span>
                  <span className="text-slate-600">Avoid chewing on the exposed sensitive tooth. We clean, recement, or provide immediate aesthetic temporization.</span>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/50 text-xs">
                  <span className="font-bold text-slate-900 block mb-1">Oral Trauma or Laceration</span>
                  <span className="text-slate-600">Dr. Joel Rosenfeld, Oral & Maxillofacial Surgeon, handles soft tissue trauma and jaw trauma with surgical precision.</span>
                </div>
              </div>

              {/* Immediate Call Direct Lines */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:9545236525"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-amber-800 hover:bg-amber-900 rounded-xl shadow transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-200" />
                  <span>Call Fort Lauderdale: (954) 523-6525</span>
                </a>

                <a
                  href="tel:9549432466"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-slate-800 bg-amber-100/80 hover:bg-amber-200 rounded-xl transition-colors border border-amber-300"
                >
                  <Phone className="w-4 h-4 text-amber-800" />
                  <span>Call Lighthouse Point: (954) 943-2466</span>
                </a>
              </div>
            </div>

            {/* Right Card: Priority Emergency Booking Form trigger */}
            <div className="lg:col-span-4 bg-slate-900 text-white rounded-xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Immediate Triage Request</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">
                  Request Immediate Triage Slot
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  If lines are busy or you prefer a priority digital callback within 15 minutes during clinic hours, submit a same-day emergency request right now.
                </p>

                <div className="space-y-2 text-xs text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>No wait times for acute trauma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Same-day pain relief guaranteed</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking(undefined, 'emergency-dentistry')}
                className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg text-center transition-colors shadow cursor-pointer"
              >
                Request Same-Day Emergency Slot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
