import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, CheckCircle2, ChevronLeft, Calendar } from 'lucide-react';

interface SmileAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (data: { goal: string; priority: string; location: string }) => void;
}

export const SmileAssessmentModal: React.FC<SmileAssessmentModalProps> = ({ isOpen, onClose, onComplete }) => {
  const [step, setStep] = useState<number>(1);
  const [goal, setGoal] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [location, setLocation] = useState<string>('ft-lauderdale');

  if (!isOpen) return null;

  const goals = [
    {
      id: 'implants',
      title: 'Dental Implants & Tooth Replacement',
      desc: 'Replace missing teeth or stabilize loose dentures with 3D guided titanium/zirconia.'
    },
    {
      id: 'veneers',
      title: 'Porcelain Veneers & Aesthetic Makeover',
      desc: 'Correct discoloration, chips, gaps, or worn enamel with custom porcelain.'
    },
    {
      id: 'invisalign',
      title: 'Discreet Clear Aligners (Invisalign®)',
      desc: 'Straighten crowded or spaced teeth comfortably without metal braces.'
    },
    {
      id: 'tmj',
      title: 'TMJ Pain, Jaw Clenching & Facial Aesthetics',
      desc: 'Alleviate facial tension and enhance smile framing with therapeutic injectables.'
    },
    {
      id: 'general',
      title: 'Comprehensive Preventive Checkup & Cleanings',
      desc: 'Annual periodontal evaluation, gentle ultrasonic cleaning, and digital scans.'
    }
  ];

  const priorities = [
    { id: 'aesthetics', label: 'Artistic Natural Aesthetics & Facial Harmony' },
    { id: 'comfort', label: 'Maximum Comfort & Gentle Sedation Options' },
    { id: 'speed', label: 'Rapid Treatment Timeline & Minimal Visits' },
    { id: 'financing', label: 'Flexible Monthly Payments & 0% APR Financing' }
  ];

  const handleFinish = () => {
    onComplete({ goal, priority, location });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Smile Assessment & Treatment Match
              </h3>
              <p className="text-xs text-slate-500">Step {step} of 3</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Goal */}
        {step === 1 && (
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2 font-display">
              What is your primary smile or dental goal?
            </h4>
            <p className="text-xs text-slate-500 mb-4">
              Select the option that best reflects what you want to achieve.
            </p>

            <div className="space-y-2.5 mb-6">
              {goals.map(g => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setGoal(g.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    goal === g.id
                      ? 'border-slate-900 bg-sky-50/40 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">{g.title}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{g.desc}</div>
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                disabled={!goal}
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 rounded-lg cursor-pointer"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Priority */}
        {step === 2 && (
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2 font-display">
              What matters most to you during care?
            </h4>
            <p className="text-xs text-slate-500 mb-4">
              This helps our clinical coordinators customize your appointment.
            </p>

            <div className="space-y-2.5 mb-6">
              {priorities.map(p => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPriority(p.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    priority === p.id
                      ? 'border-slate-900 bg-sky-50/40 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <span className="text-xs font-semibold text-slate-800">{p.label}</span>
                  {priority === p.id && <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                disabled={!priority}
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 rounded-lg cursor-pointer"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Office & Summary */}
        {step === 3 && (
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2 font-display">
              Which office is most convenient for you?
            </h4>
            <p className="text-xs text-slate-500 mb-4">
              Both locations are open Mon–Fri 8am–6pm with validated parking.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setLocation('ft-lauderdale')}
                className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                  location === 'ft-lauderdale'
                    ? 'border-slate-900 bg-sky-50/40 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="text-xs font-bold text-slate-900">Fort Lauderdale</div>
                <div className="text-[11px] text-slate-500 mt-1">255 SE 14th St Suite 200</div>
                <div className="text-[11px] text-sky-800 font-semibold mt-1">(954) 523-6525</div>
              </button>

              <button
                type="button"
                onClick={() => setLocation('lighthouse-point')}
                className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                  location === 'lighthouse-point'
                    ? 'border-slate-900 bg-sky-50/40 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="text-xs font-bold text-slate-900">Lighthouse Point</div>
                <div className="text-[11px] text-slate-500 mt-1">2211 NE 36th St #201</div>
                <div className="text-[11px] text-sky-800 font-semibold mt-1">(954) 943-2466</div>
              </button>
            </div>

            {/* Personalized Recommendation Preview */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-6 text-xs text-slate-700">
              <span className="font-bold text-slate-900 block mb-1">Your Personalized Treatment Pathway:</span>
              <p className="text-slate-600">
                Based on your selections, we recommend an initial 45-minute consultation including digital 3D intraoral mapping and specialist examination.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={handleFinish}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>Proceed to Book Consultation</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
