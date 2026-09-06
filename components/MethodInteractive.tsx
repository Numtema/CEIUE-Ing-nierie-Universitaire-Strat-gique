'use client';

import React, { useState } from 'react';
import { METHOD_STEPS } from '@/lib/data/expertises';
import { CheckCircle, Clock, FileText, ArrowRight } from 'lucide-react';

export default function MethodInteractive() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const current = METHOD_STEPS[activeStepIndex];

  return (
    <div className="w-full">
      {/* Desktop view: Tabbed interactive pipeline */}
      <div className="hidden lg:block bg-white border border-[#E2E8F0] rounded-3xl p-8 shadow-xl">
        {/* Navigation line of 6 steps */}
        <div className="grid grid-cols-6 gap-2 border-b border-[#E2E8F0] pb-6">
          {METHOD_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            const isPast = idx < activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B1B2E] border-[#0B1B2E] text-white shadow-md'
                    : isPast
                    ? 'bg-[#FAF8F5] border-[#E2E8F0] text-[#0B1B2E] hover:border-[#C7A45D]'
                    : 'bg-[#F8FAFC] border-[#E2E8F0] text-slate-500 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isSelected ? 'text-[#C7A45D]' : isPast ? 'text-[#0B1B2E]' : 'text-slate-400'
                    }`}
                  >
                    {step.number}
                  </span>
                  {isPast && <CheckCircle className="w-3.5 h-3.5 text-[#15803D]" />}
                </div>
                <div className={`text-sm font-semibold truncate ${isSelected ? 'text-white' : 'text-[#0B1B2E]'}`}>
                  {step.name}
                </div>
                <div className={`text-[10px] font-mono mt-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {step.duration}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Panel */}
        <div className="mt-8 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#0B1B2E] text-white font-bold">
                PHASE OPÉRATIONNELLE {current.number}
              </span>
              <span className="flex items-center gap-1 text-xs font-mono text-slate-600 font-semibold bg-[#FAF5EB] px-2.5 py-0.5 rounded border border-[#C7A45D]/30">
                <Clock className="w-3 h-3 text-[#C7A45D]" />
                {current.duration}
              </span>
            </div>

            <h4 className="text-2xl font-serif text-[#0B1B2E] mb-3 font-normal">
              {current.number}. {current.name}
            </h4>
            <p className="text-slate-700 text-base leading-relaxed mb-6 max-w-2xl font-light">
              {current.desc}
            </p>

            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E2E8F0] inline-flex items-center gap-3 max-w-xl">
              <div className="p-2.5 rounded-xl bg-white border border-[#C7A45D]/30 text-[#9A7B38]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#9A7B38] font-bold block">
                  Livrable contractuel
                </span>
                <span className="text-sm font-semibold text-[#0B1B2E]">
                  {current.keyDeliverable}
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-4 bg-white p-6 rounded-2xl border border-[#C7A45D]/40 shadow-sm flex flex-col justify-between h-full space-y-4">
            <div>
              <span className="text-xs font-mono text-[#9A7B38] uppercase tracking-wider font-bold block mb-2">
                Approche CEIUE
              </span>
              <p className="text-xs text-slate-700 leading-relaxed bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E2E8F0]">
                Chaque étape engage la souveraineté de l’État : aucun dispositif n'est déployé sans validation formelle des instances nationales et transfert complet des compétences aux équipes locales.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                Étape {activeStepIndex + 1} / {METHOD_STEPS.length}
              </span>
              <button
                onClick={() => setActiveStepIndex((prev) => (prev + 1) % METHOD_STEPS.length)}
                className="text-xs font-mono font-bold text-[#9A7B38] hover:text-[#0B1B2E] flex items-center gap-1 cursor-pointer"
              >
                Étape suivante <ArrowRight className="w-3.5 h-3.5 text-[#C7A45D]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view: Clean vertical stacked timeline */}
      <div className="lg:hidden space-y-4">
        {METHOD_STEPS.map((step) => (
          <div
            key={step.number}
            className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#0B1B2E] text-white font-bold">
                ÉTAPE {step.number}
              </span>
              <span className="text-xs font-mono text-slate-500">
                {step.duration}
              </span>
            </div>

            <h4 className="text-lg font-serif text-[#0B1B2E] mb-2 font-normal">
              {step.name}
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 font-light">
              {step.desc}
            </p>

            <div className="pt-3 border-t border-[#E2E8F0] flex items-start gap-2 bg-[#FAF8F5] p-3 rounded-xl">
              <FileText className="w-4 h-4 text-[#C7A45D] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-mono text-[#9A7B38] font-bold block uppercase">
                  Livrable :
                </span>
                <span className="text-xs text-[#0B1B2E] font-medium">
                  {step.keyDeliverable}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
