'use client';

import React, { useState } from 'react';
import HeroVisualBento from './HeroVisualBento';
import NetworkMap from './NetworkMap';
import { ShieldCheck, Globe2, Sparkles } from 'lucide-react';

export default function HeroVisualContainer() {
  const [activeVisual, setActiveVisual] = useState<'bento' | 'network'>('bento');

  return (
    <div className="w-full flex flex-col items-center">
      {/* Framer/Webflow Switcher Pill */}
      <div className="mb-5 inline-flex items-center p-1 rounded-full bg-[#0B1B2E]/90 border border-[#102A43] backdrop-blur-md shadow-xl">
        <button
          onClick={() => setActiveVisual('bento')}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
            activeVisual === 'bento'
              ? 'bg-gradient-to-r from-[#C7A45D] to-[#E1C783] text-[#07111F] font-bold shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Spécimen & Talents</span>
        </button>

        <button
          onClick={() => setActiveVisual('network')}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
            activeVisual === 'network'
              ? 'bg-gradient-to-r from-[#C7A45D] to-[#E1C783] text-[#07111F] font-bold shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Globe2 className="w-3.5 h-3.5" />
          <span>Cartographie Panafricaine</span>
        </button>
      </div>

      {/* Visual content container with smooth transition */}
      <div className="w-full flex items-center justify-center transition-opacity duration-300">
        {activeVisual === 'bento' ? (
          <HeroVisualBento />
        ) : (
          <div className="w-full flex justify-center py-2">
            <NetworkMap />
          </div>
        )}
      </div>
    </div>
  );
}
