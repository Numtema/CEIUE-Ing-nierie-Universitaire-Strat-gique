import React from 'react';
import Link from 'next/link';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <GlobalHeader />
      <main className="min-h-screen bg-[#07111F] text-[#FBF8F1] pt-36 pb-24 flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0B1B2E] border border-[#C7A45D]/30 text-[#C7A45D] mb-2">
            <Compass className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#C7A45D] tracking-widest uppercase">Erreur 404</span>
            <h1 className="font-serif text-3xl sm:text-5xl text-white">Page introuvable</h1>
          </div>

          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed">
            La ressource institutionnelle ou la page demandée n'existe pas ou a été déplacée dans le registre du CEIUE.
          </p>

          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C7A45D] text-[#07111F] font-semibold text-sm hover:bg-[#E1C783] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retourner à l'accueil</span>
            </Link>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </>
  );
}
