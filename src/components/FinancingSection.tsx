import React, { useState } from 'react';
import { ACCEPTED_INSURANCES } from '../data/clinicData';
import { Shield, Calculator, CheckCircle2, CreditCard, HeartHandshake, ArrowRight } from 'lucide-react';

interface FinancingSectionProps {
  onOpenBooking: () => void;
}

export const FinancingSection: React.FC<FinancingSectionProps> = ({ onOpenBooking }) => {
  // Calculator state
  const [treatmentAmount, setTreatmentAmount] = useState<number>(3500);
  const [termMonths, setTermMonths] = useState<number>(24);

  // Simple estimated monthly payment calculation
  // (Assuming typical ~9.9% APR for extended terms, or 0% for 12 months)
  const isZeroApr = termMonths <= 12;
  const apr = isZeroApr ? 0 : 0.099;
  const monthlyRate = apr / 12;
  const estimatedMonthly = isZeroApr
    ? Math.round(treatmentAmount / termMonths)
    : Math.round((treatmentAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) / (Math.pow(1 + monthlyRate, termMonths) - 1));

  return (
    <section id="financing" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 uppercase tracking-widest mb-3">
            <span>Financial Accessibility & Transparency</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>No Hidden Surprise Fees</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Insurance & Flexible Financing Options
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            We believe world-class dentistry should be straightforward and accessible. Our treatment coordinators work directly with your insurer to maximize your annual benefits and offer customized monthly payment solutions.
          </p>
        </div>

        {/* 3 Pillars of Financial Care */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {/* Pillar 1: PPO Insurance */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-5">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                Accepted PPO Insurances
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                We accept and file claims with virtually all major PPO dental plans. We verify your benefits ahead of time so you know your exact coverage.
              </p>

              <div className="space-y-2 border-t border-slate-100 pt-4">
                <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Common Providers Accepted:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {ACCEPTED_INSURANCES.map((ins, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                    >
                      {ins}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Complimentary insurance verification before any major treatment begins.
            </div>
          </div>

          {/* Pillar 2: 0% APR Flexible Financing */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-5">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                0% APR Patient Financing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Spread the cost of your smile makeover, clear aligners, or dental implants into affordable monthly installments through trusted healthcare lenders.
              </p>

              <div className="space-y-3 border-t border-slate-100 pt-4 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>CareCredit:</strong> Interest-free promotional options for 6, 12, or 24 months.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Sunbit:</strong> High approval rates with 85%+ patients accepted without hard credit pulls.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Proceed Finance:</strong> Extended low-rate terms specifically for full-arch All-on-X implants.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Pre-qualify in under 60 seconds with no impact on your credit score.
            </div>
          </div>

          {/* Pillar 3: In-House Dental Savings Plan */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-5">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                Florida Smiles Savings Plan
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                No insurance? No problem. Our private membership plan covers 100% of your annual preventive dental care with zero waiting periods or deductibles.
              </p>

              <div className="space-y-3 border-t border-slate-100 pt-4 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>2 Comprehensive exams, cleanings & digital X-rays included annually</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>1 Free emergency exam & diagnostic X-ray per year</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Up to 20% savings on veneers, crowns, implants & fillings</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Available immediately upon enrollment at both office locations.
            </div>
          </div>
        </div>

        {/* Interactive Payment Estimator */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 uppercase tracking-widest mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Monthly Payment Estimator</span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">
            Calculate Your Estimated Monthly Investment
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Sliders */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-2">
                  <span>Estimated Treatment Cost:</span>
                  <span className="text-base text-slate-900 font-bold tabular-nums">
                    ${treatmentAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="15000"
                  step="250"
                  value={treatmentAmount}
                  onChange={(e) => setTreatmentAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>$1,000 (Cosmetic Whitening / Aligners)</span>
                  <span>$15,000+ (Full Arch / Complex)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-2">
                  <span>Financing Duration:</span>
                  <span className="text-sm text-slate-900 font-bold">
                    {termMonths} Months {isZeroApr ? '(0% APR)' : ''}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[12, 24, 36, 48].map((months) => (
                    <button
                      key={months}
                      onClick={() => setTermMonths(months)}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        termMonths === months
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {months} mo
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimated Calculation Result Card */}
            <div className="md:col-span-5 p-6 bg-slate-900 text-white rounded-xl text-center flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                  Estimated Monthly Payment
                </span>
                <div className="text-4xl font-bold text-white mt-2 mb-1 tabular-nums font-display">
                  ${estimatedMonthly}
                  <span className="text-sm font-normal text-slate-400">/mo</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  {isZeroApr
                    ? 'Based on 0% APR promotional financing over 12 months.'
                    : `Based on an estimated ${termMonths}-month financing term.`}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Schedule Your Consultation
                </button>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 mt-6 text-center">
            *Estimates are for illustrative purposes. Final financing terms and payment schedules are subject to credit approval by third-party lenders and customized treatment plan specifics.
          </p>
        </div>
      </div>
    </section>
  );
};
