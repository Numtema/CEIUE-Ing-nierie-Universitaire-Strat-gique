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
      <div className="hidden lg:block bg-[#0B1B2E] border border-[#C7A45D]/20 rounded-2xl p-8 shadow-2xl">
        {/* Navigation line of 6 steps */}
        <div className="grid grid-cols-6 gap-2 border-b border-[#102A43] pb-6">
          {METHOD_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            const isPast = idx < activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#102A43] border-[#C7A45D] ring-1 ring-[#C7A45D]'
                    : isPast
                    ? 'bg-[#07111F]/60 border-[#5CC8E8]/40 text-slate-200'
                    : 'bg-[#07111F]/30 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#C7A45D]' : isPast ? 'text-[#5CC8E8]' : 'text-slate-500'}`}>
                    {step.number}
                  </span>
                  {isPast && <CheckCircle className="w-3.5 h-3.5 text-[#5CC8E8]" />}
                </div>
                <div className={`text-sm font-semibold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {step.name}
                </div>
                <div className="text-[10px] font-mono text-slate-400 mt-1">
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
              <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#C7A45D]/15 text-[#E1C783] border border-[#C7A45D]/30">
                PHASE OPÉRATIONNELLE {current.number}
              </span>
              <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                <Clock className="w-3 h-3 text-[#5CC8E8]" />
                {current.duration}
              </span>
            </div>

            <h4 className="text-2xl font-serif text-white mb-3">
              {current.number}. {current.name}
            </h4>
            <p className="text-slate-300 text-base leading-relaxed mb-6 max-w-2xl">
              {current.desc}
            </p>

            <div className="bg-[#07111F] p-4 rounded-xl border border-[#102A43] inline-flex items-center gap-3 max-w-xl">
              <div className="p-2.5 rounded-lg bg-[#C7A45D]/10 text-[#C7A45D]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block">
                  Livrable contractuel
                </span>
                <span className="text-sm font-medium text-white">
                  {current.keyDeliverable}
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-4 bg-[#102A43]/40 p-6 rounded-xl border border-[#102A43] flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-mono text-[#5CC8E8] uppercase tracking-wider block mb-2">
                Approche CEIUE
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Chaque étape engage la souveraineté de l’État : aucun dispositif n'est déployé sans validation formelle des instances nationales et transfert complet des compétences aux équipes locales.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#102A43] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Étape {activeStepIndex + 1} / {METHOD_STEPS.length}
              </span>
              <button
                onClick={() => setActiveStepIndex((prev) => (prev + 1) % METHOD_STEPS.length)}
                className="text-xs font-mono font-semibold text-[#E1C783] hover:text-white flex items-center gap-1 cursor-pointer"
              >
                Étape suivante <ArrowRight className="w-3.5 h-3.5" />
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
            className="bg-[#0B1B2E] border border-[#102A43] rounded-xl p-5 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#C7A45D]/15 text-[#E1C783] border border-[#C7A45D]/30">
                ÉTAPE {step.number}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {step.duration}
              </span>
            </div>

            <h4 className="text-lg font-serif text-white mb-2">
              {step.name}
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {step.desc}
            </p>

            <div className="pt-3 border-t border-[#102A43] flex items-start gap-2">
              <FileText className="w-4 h-4 text-[#C7A45D] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">
                  Livrable :
                </span>
                <span className="text-xs text-white font-medium">
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
