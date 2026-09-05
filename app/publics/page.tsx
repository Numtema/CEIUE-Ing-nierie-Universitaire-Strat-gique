import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import { AUDIENCES } from '@/lib/data/expertises';
import { Building, ArrowRight, ShieldCheck, CheckCircle2, Award, Landmark, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Publics & Institutions partenaires | CEIUE',
  description:
    'Gouvernements, ministères, agences de bourses, universités et partenaires internationaux : découvrez comment le CEIUE articule vos besoins.',
  alternates: {
    canonical: 'https://ceiue.org/publics/',
  },
};

export default function PublicsPage() {
  return (
    <>
      <GlobalHeader />

      <main className="pt-32 pb-24 bg-[#07111F] text-[#FBF8F1]">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-[#C7A45D]">Publics</span>
          </nav>
        </div>

        {/* Hero Section with Split Visual Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1B2E] border border-[#C7A45D]/30 text-[#C7A45D] text-xs font-mono tracking-widest uppercase">
                INTERLOCUTEURS INSTITUTIONNELS
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
                Une ingénierie dédiée aux décideurs du capital humain.
              </h1>
              <p className="text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                Chaque acteur institutionnel porte une part de la souveraineté universitaire nationale. Le CEIUE conçoit des passerelles adaptées aux mandats de chacun, de la tutelle ministérielle aux partenariats bilatéraux.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-lg bg-[#0B1B2E] border border-[#102A43] text-xs font-mono text-slate-300 flex items-center gap-2">
                  <Landmark className="w-3.5 h-3.5 text-[#C7A45D]" /> 6 Collèges institutionnels
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#0B1B2E] border border-[#102A43] text-xs font-mono text-slate-300 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#5CC8E8]" /> Confidentialité régalienne
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#102A43] bg-[#0B1B2E] shadow-2xl h-72 sm:h-80 w-full group">
                <Image
                  src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80"
                  alt="Délégation institutionnelle et sommet académique"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-80"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#07111F]/85 backdrop-blur-md border border-[#102A43]">
                  <p className="text-xs font-mono text-[#C7A45D] mb-1">GOUVERNANCE INTERNATIONALE</p>
                  <p className="text-xs text-slate-200">Accompagnement sur-mesure pour ministères, agences et corps diplomatiques.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audiences Breakdown with Photographic Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-20">
          {AUDIENCES.map((aud, index) => (
            <div
              key={aud.id}
              id={aud.id}
              className="bg-[#0B1B2E] border border-[#102A43] hover:border-[#C7A45D]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Photo Header / Side Column */}
                <div className="lg:col-span-4 relative h-64 lg:h-auto min-h-[220px] overflow-hidden">
                  <Image
                    src={aud.image}
                    alt={aud.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0B1B2E]/40 to-[#0B1B2E]" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[11px] font-bold text-white px-2.5 py-1 rounded-full bg-[#07111F]/90 backdrop-blur-md border border-[#C7A45D]/40">
                      PUBLIC 0{index + 1}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                    <span className="text-xs font-mono text-[#5CC8E8] bg-[#07111F]/80 backdrop-blur-sm px-2 py-0.5 rounded">
                      {aud.role}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-8 p-8 sm:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="hidden lg:flex items-center gap-2">
                      <span className="text-xs font-mono text-[#5CC8E8] uppercase tracking-wider">
                        {aud.role}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-[#E1C783] transition-colors">
                      {aud.title}
                    </h2>

                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      CEIUE intervient comme bras d'ingénierie technique pour sécuriser vos arbitrages, consolider les registres et garantir la pleine conformité aux normes internationales de diplomation.
                    </p>

                    <div className="bg-[#07111F] p-5 rounded-xl border border-[#102A43] space-y-3 mt-4">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#C7A45D] block">
                        Défis et enjeux prioritaires accompagnés :
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {aud.needs.map((need, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-[#C7A45D] shrink-0 mt-0.5" />
                            <span>{need}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#102A43] flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">
                      Protocole d'intervention bilatérale
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#E1C783] hover:text-white px-3 py-1.5 rounded-lg bg-[#C7A45D]/10 hover:bg-[#C7A45D]/20 border border-[#C7A45D]/30 transition-all"
                    >
                      Échanger avec un expert CEIUE <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Global CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0B1B2E] via-[#102A43] to-[#0B1B2E] border border-[#C7A45D]/30 rounded-3xl p-8 sm:p-12 text-center space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-white">
              Vous représentez une institution publique ou un partenaire ?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto font-light">
              Contactez le directoire du CEIUE pour organiser un entretien institutionnel confidentiel sous 48h.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 h-12 rounded-full bg-[#C7A45D] text-[#07111F] font-bold text-sm hover:bg-[#E1C783] transition-colors"
              >
                <span>Présenter un besoin national</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </>
  );
}
