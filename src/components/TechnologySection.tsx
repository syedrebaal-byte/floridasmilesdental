import React from 'react';
import { Interactive3DTooth } from './Interactive3DTooth';
import { Cpu, Scan, CheckCircle, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  return (
    <section id="interactive-model" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive 3D Model */}
          <div className="lg:col-span-6 bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <Interactive3DTooth />
          </div>

          {/* Right Column: High-Precision Clinical Technology Story */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 uppercase tracking-widest mb-3">
              <span>Modern Clinical Engineering</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Sub-Millimeter Precision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display mb-6">
              Precision Digital Dentistry. <br />
              Zero Putty. Zero Guesswork.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              At Florida Smiles Dental, cutting-edge technology directly translates to patient comfort and lifelong clinical durability. Our offices in Fort Lauderdale and Lighthouse Point are fully equipped with 3D cone-beam computed tomography (CBCT) and high-speed digital intraoral scanners.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-sky-50 text-sky-700 shrink-0 mt-0.5">
                  <Scan className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">100% Optical 3D Intraoral Scanning</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Say goodbye to choking on impression trays. We capture 6,000 optical frames per second to construct a photorealistic 3D map of your teeth in under two minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-sky-50 text-sky-700 shrink-0 mt-0.5">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Guided Computerized Implant Planning</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Dr. Steven Berkowitz and Dr. Joel Rosenfeld plan implant angles, depths, and bone densities digitally prior to surgery, minimizing recovery time and maximizing stability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-sky-50 text-sky-700 shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Biocompatible Zirconia & E.max Ceramic</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    We fabricate restorations from high-translucency medical ceramic that matches the natural refractive index and fluorescence of natural enamel.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span className="font-semibold text-slate-900">Test-drive the 3D model:</span>
                <span>Toggle the ceramic enamel & implant core view on the left.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
