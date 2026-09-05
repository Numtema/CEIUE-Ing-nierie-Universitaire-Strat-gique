import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import { RESOURCES } from '@/lib/data/expertises';
import { FileText, ArrowRight, Download, BookOpen, Clock, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ressources & Publications stratégiques | CEIUE',
  description:
    'Notes d’orientation, cadres méthodologiques et guides pour la transformation de l’enseignement supérieur africain.',
  alternates: {
    canonical: 'https://ceiue.org/ressources/',
  },
};

export default function ResourcesPage() {
  return (
    <>
      <GlobalHeader />

      <main className="pt-32 pb-24 bg-[#07111F] text-[#FBF8F1]">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-[#C7A45D]">Ressources</span>
          </nav>
        </div>

        {/* Hero Section with Split Visual Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1B2E] border border-[#C7A45D]/30 text-[#C7A45D] text-xs font-mono tracking-widest uppercase">
                DOCUMENTATION STRATÉGIQUE
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
                Publications, cadres et notes d'orientation.
              </h1>
              <p className="text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                Le CEIUE partage des repères conceptuels, des modèles contractuels et des guides méthodologiques pour nourrir les politiques publiques de formation supérieure et de souveraineté académique.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-lg bg-[#0B1B2E] border border-[#102A43] text-xs font-mono text-slate-300 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#C7A45D]" /> 4 Publications de référence
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0B1B2E] border border-[#102A43] text-xs font-mono text-slate-300 flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-[#5CC8E8]" /> Guides méthodologiques ministériels
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#102A43] bg-[#0B1B2E] shadow-2xl h-72 sm:h-80 w-full group">
                <Image
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80"
                  alt="Documentation stratégique et recherche académique CEIUE"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-80"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#07111F]/85 backdrop-blur-md border border-[#102A43]">
                  <p className="text-xs font-mono text-[#C7A45D] mb-1">CENTRE DE RECHERCHE CEIUE</p>
                  <p className="text-xs text-slate-200">Notes d'orientation et protocoles types réservés aux institutions partenaires.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid with Framer Editorial Photography */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESOURCES.map((res) => (
              <div
                key={res.slug}
                className="bg-[#0B1B2E] border border-[#102A43] hover:border-[#C7A45D]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
              >
                {/* Photo Banner */}
                <div className="relative h-52 w-full overflow-hidden shrink-0">
                  <Image
                    src={res.image}
                    alt={res.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2E] via-[#0B1B2E]/40 to-transparent" />

                  {/* Badges on photo */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-white px-2.5 py-1 rounded-full bg-[#07111F]/90 backdrop-blur-md border border-white/20">
                      {res.theme}
                    </span>
                    <span className="text-[10px] font-mono text-slate-300 flex items-center gap-1 bg-[#07111F]/90 backdrop-blur-md px-2.5 py-1 rounded border border-[#102A43]">
                      <Clock className="w-3 h-3 text-[#C7A45D]" />
                      {res.readTime}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3.5">
                    <span className="text-[10px] font-mono text-[#5CC8E8] bg-[#07111F]/80 backdrop-blur-sm px-2 py-0.5 rounded border border-[#102A43]">
                      {res.date}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl text-white group-hover:text-[#E1C783] transition-colors mb-3 leading-snug">
                      {res.title}
                    </h2>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                      {res.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {res.topics.map((top, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-[#07111F] text-[11px] font-mono text-slate-300 border border-[#102A43]"
                        >
                          #{top}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#102A43] flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">
                      Publication CEIUE
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#C7A45D] hover:text-white px-3.5 py-1.5 rounded-lg bg-[#C7A45D]/10 hover:bg-[#C7A45D]/20 border border-[#C7A45D]/30 transition-all"
                    >
                      Demander le document <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legal notice regarding publications */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs font-mono text-slate-500">
          Les notes d'orientation et documents cadres sont communiqués sur demande officielle aux ministères, agences et institutions universitaires habilitées.
        </section>
      </main>

      <GlobalFooter />
    </>
  );
}
