import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import { EXPERTISES } from '@/lib/data/expertises';
import { ArrowRight, GraduationCap, ShieldCheck, Globe2, Users, CheckCircle2, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Expertises CEIUE — Former, authentifier, coopérer, retenir',
  description:
    'Explorez les expertises du CEIUE : audit de formation, authentification des diplômes, bourses ciblées, partenariats universitaires et retour des talents.',
  alternates: {
    canonical: 'https://ceiue.org/expertises/',
  },
};

export default function ExpertisesIndexPage() {
  const categories = [
    {
      id: 'former',
      title: '1. Former utilement',
      icon: GraduationCap,
      color: '#C7A45D',
      desc: 'Restructurer les filières universitaires pour répondre aux priorités socio-économiques et industrielles de l’État.',
    },
    {
      id: 'confiance',
      title: '2. Sécuriser la confiance',
      icon: ShieldCheck,
      color: '#5CC8E8',
      desc: 'Restaurer la pleine crédibilité internationale des titres délivrés par les universités nationales.',
    },
    {
      id: 'cooperer',
      title: '3. Coopérer avec le monde',
      icon: Globe2,
      color: '#E1C783',
      desc: 'Bâtir des alliances académiques équilibrées, des co-diplomations souveraines et former les cadres dirigeants.',
    },
    {
      id: 'retenir',
      title: '4. Retenir et valoriser les talents',
      icon: Users,
      color: '#B8D94E',
      desc: 'Transformer la mobilité internationale en levier d’ancrage national et organiser le retour effectif des diplômés.',
    },
  ];

  return (
    <>
      <GlobalHeader />

      <main className="pt-32 pb-24 bg-[#07111F] text-[#FBF8F1]">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-[#C7A45D]">Expertises</span>
          </nav>
        </div>

        {/* Page Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1B2E] border border-[#C7A45D]/30 text-[#C7A45D] text-xs font-mono tracking-widest uppercase">
              RÉPERTOIRE D'INTERVENTION
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Des expertises pour former utilement, sécuriser la confiance et retenir les talents.
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-3xl">
              Chaque dispositif CEIUE est conçu comme une réponse institutionnelle complète : cadre juridique, modélisation financière, plateforme technique et protocole d'impact national.
            </p>
          </div>
        </section>

        {/* Grouped by Problem Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 mb-20">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const items = EXPERTISES.filter((e) => e.category === cat.id);
            return (
              <div key={cat.id} id={cat.id} className="scroll-mt-32">
                <div className="border-b border-[#102A43] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-[#C7A45D]">
                      <Icon className="w-4 h-4" style={{ color: cat.color }} />
                      <span>AXE THÉMATIQUE</span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white">
                      {cat.title}
                    </h2>
                    <p className="text-sm text-slate-400 mt-1 font-light">
                      {cat.desc}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-slate-500">
                    {items.length} dispositif{items.length > 1 ? 's' : ''} opérationnel{items.length > 1 ? 's' : ''}
                  </span>
                </div>

                {/* Cards Grid with Framer Editorial Photography */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {items.map((exp) => (
                    <div
                      key={exp.slug}
                      className="bg-[#0B1B2E] border border-[#102A43] hover:border-[#C7A45D]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
                    >
                      {/* Photographic Card Header */}
                      <div className="relative h-48 w-full overflow-hidden shrink-0">
                        <Image
                          src={exp.image}
                          alt={exp.title}
                          fill
                          className="object-cover group-hover:scale-108 transition-transform duration-700 brightness-75"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2E] via-[#0B1B2E]/40 to-transparent" />

                        {/* Top badges */}
                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold text-white px-2.5 py-1 rounded-full bg-[#07111F]/85 backdrop-blur-md border border-white/20">
                            {exp.categoryLabel}
                          </span>
                          <span className="text-[10px] font-mono text-[#E1C783] px-2 py-0.5 rounded bg-[#07111F]/90 backdrop-blur-md border border-[#C7A45D]/30">
                            CEIUE-REF/{exp.slug}
                          </span>
                        </div>

                        {/* Bottom stat in photo */}
                        <div className="absolute bottom-2.5 right-3.5">
                          <span className="font-mono text-[11px] text-[#5CC8E8] bg-[#07111F]/85 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-[#102A43]">
                            {exp.statsOrIndicators[0].label} : {exp.statsOrIndicators[0].value}
                          </span>
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-7 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="font-serif text-2xl text-white group-hover:text-[#E1C783] transition-colors mb-3 leading-snug">
                            {exp.title}
                          </h3>

                          <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                            {exp.shortDescription}
                          </p>

                          <div className="space-y-3 bg-[#07111F] p-4 rounded-xl border border-[#102A43] mb-6">
                            <div>
                              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B42318] block mb-0.5">
                                Enjeu critique diagnostiqué :
                              </span>
                              <p className="text-xs text-slate-300">
                                {exp.problem}
                              </p>
                            </div>
                            <div className="pt-2 border-t border-[#102A43]">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-[#327A55] block mb-0.5">
                                Réponse apportée :
                              </span>
                              <p className="text-xs text-slate-300">
                                {exp.solution}
                              </p>
                            </div>
                          </div>

                          {/* Deliverables snippet */}
                          <div>
                            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                              Livrables majeurs :
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-300">
                              {exp.deliverables.slice(0, 2).map((deliv, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A45D] shrink-0 mt-0.5" />
                                  <span>{deliv}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-[#102A43] flex items-center justify-between">
                          <span className="text-xs font-mono text-slate-400 truncate pr-2 max-w-[200px]">
                            {exp.publics[0]}
                          </span>
                          <Link
                            href={`/expertises/${exp.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#C7A45D] hover:text-white px-3 py-1.5 rounded-lg bg-[#C7A45D]/10 hover:bg-[#C7A45D]/20 border border-[#C7A45D]/30 transition-all shrink-0"
                          >
                            Dossier complet <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Global CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1B2E] border border-[#C7A45D]/30 rounded-3xl p-8 sm:p-12 text-center space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-white">
              Votre institution a un enjeu spécifique ?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto font-light">
              Le CEIUE conçoit également des programmes sur mesure pour les réformes universitaires nationales ou régionales.
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
