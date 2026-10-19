import React, { useState } from 'react';
import { PATIENT_FAQS } from '../data/clinicData';
import { Star, ChevronDown, ChevronUp, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ReviewsAndFaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const testimonials = [
    {
      id: 1,
      quote: "Dr. Scerbo and Dr. Berkowitz completely transformed my smile with dental implants and porcelain veneers. Having both a top cosmetic dentist and an implant periodontist collaborating in the same Fort Lauderdale office gave me so much peace of mind.",
      author: "Maria S.",
      location: "Fort Lauderdale Patient",
      treatment: "Full Smile Reconstruction & Implants",
      rating: 5
    },
    {
      id: 2,
      quote: "I suffered a cracked front tooth on a Thursday morning and was in panic. The Lighthouse Point team got me in within an hour, stopped the pain, and placed a beautiful temporary crown the very same day. Truly exceptional clinical care.",
      author: "David R.",
      location: "Lighthouse Point Patient",
      treatment: "Same-Day Emergency Restoration",
      rating: 5
    },
    {
      id: 3,
      quote: "As someone with major dental anxiety, finding Florida Smiles Dental was life-changing. From the warm front desk to the gentle 3D digital scanners with zero gagging putty, every step felt calm and thoroughly explained.",
      author: "Catherine B.",
      location: "Pompano Beach Patient",
      treatment: "Invisalign & Preventive Care",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-sky-800 uppercase tracking-widest mb-3">
            <span>Patient Experiences & Outcomes</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Fort Lauderdale & Lighthouse Point</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Trusted by South Florida Families for Decades
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Real patient reflections on our clinical artistry, gentle approach, and multidisciplinary specialist care.
          </p>
        </div>

        {/* 3 Attributed Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{t.author}</div>
                  <div className="text-[11px] text-slate-500">{t.location}</div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-medium text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    {t.treatment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-widest">
              Answers to Common Questions
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mt-2">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {PATIENT_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/90 overflow-hidden transition-all bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                  >
                    <span className="text-sm font-bold text-slate-900 font-display">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            Have a question not listed here? Call our direct concierge at{' '}
            <a href="tel:9545236525" className="font-semibold text-sky-800 underline">
              (954) 523-6525
            </a>{' '}
            for Fort Lauderdale or{' '}
            <a href="tel:9549432466" className="font-semibold text-sky-800 underline">
              (954) 943-2466
            </a>{' '}
            for Lighthouse Point.
          </div>
        </div>
      </div>
    </section>
  );
};
