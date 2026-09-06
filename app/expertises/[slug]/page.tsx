import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import { EXPERTISES } from '@/lib/data/expertises';
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, Users, Clock, Sparkles } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EXPERTISES.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const expertise = EXPERTISES.find((e) => e.slug === slug);
  if (!expertise) return { title: 'Expertise non trouvée | CEIUE' };

  return {
    title: `${expertise.title} | CEIUE`,
    description: expertise.shortDescription,
    alternates: {
      canonical: `https://ceiue.org/expertises/${expertise.slug}/`,
    },
    openGraph: {
      title: `${expertise.title} | CEIUE`,
      description: expertise.shortDescription,
      url: `https://ceiue.org/expertises/${expertise.slug}/`,
    },
  };
}

export default async function ExpertiseDetailPage({ params }: Props) {
  const { slug } = await params;
  const expertise = EXPERTISES.find((e) => e.slug === slug);

  if (!expertise) {
    notFound();
  }

  // Schema.org Service & BreadcrumbList structured data (verified without invented facts)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: 'https://ceiue.org/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Expertises',
            item: 'https://ceiue.org/expertises/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: expertise.title,
            item: `https://ceiue.org/expertises/${expertise.slug}/`,
          },
        ],
      },
      {
        '@type': 'Service',
        name: expertise.title,
        serviceType: expertise.categoryLabel,
        description: expertise.fullDescription,
        provider: {
          '@type': 'Organization',
          name: 'CEIUE',
          url: 'https://ceiue.org',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlobalHeader />

      <main className="pt-32 pb-24 bg-[#07111F] text-[#FBF8F1]">
        {/* Breadcrumb navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <Link href="/expertises" className="hover:text-white">Expertises</Link>
            <span>/</span>
            <span className="text-[#C7A45D] truncate">{expertise.title}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-[#0B1B2E] border border-[#C7A45D]/30 text-[#C7A45D] text-xs font-mono tracking-widest uppercase">
                  {expertise.categoryLabel}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  RÉFÉRENCE CEIUE/{expertise.slug.toUpperCase()}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
                {expertise.title}
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
                {expertise.fullDescription}
              </p>

              {/* Quick stats / indicators */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#102A43]">
                {expertise.statsOrIndicators.map((stat, idx) => (
                  <div key={idx} className="bg-[#0B1B2E] p-4 rounded-xl border border-[#102A43]">
                    <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                      {stat.label}
                    </span>
                    <span className="text-lg font-serif text-[#E1C783] font-semibold">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Framer Editorial Photo Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#102A43] bg-[#0B1B2E] shadow-2xl group">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src={expertise.image}
                    alt={expertise.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-85"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/30 to-transparent" />
                  
                  {/* Floating badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#07111F]/85 backdrop-blur-md border border-white/20 text-xs font-mono text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Dispositif certifié
                    </span>
                    <span className="text-[10px] font-mono text-[#C7A45D] px-2.5 py-1 rounded bg-[#07111F]/90 backdrop-blur-md border border-[#C7A45D]/30">
                      Afrique & International
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#07111F]/80 backdrop-blur-md border border-[#102A43]">
                    <p className="text-xs font-mono text-[#C7A45D] mb-1 uppercase tracking-wider">Cible d'impact régalien</p>
                    <p className="text-xs text-slate-200 line-clamp-2">{expertise.targetInstitutions.join(' • ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem vs Solution Split */}
        <section className="bg-[#0B1B2E] border-y border-[#102A43] py-16 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Problem */}
              <div className="bg-[#07111F] p-8 rounded-2xl border border-[#102A43]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B42318] block mb-2">
                  1. DIAGNOSTIC DU PROBLÈME NATIONAL
                </span>
                <h2 className="font-serif text-2xl text-white mb-4">
                  Le constat qui pénalise les institutions
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  {expertise.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-[#07111F] p-8 rounded-2xl border border-[#C7A45D]/30">
                <span className="text-xs font-mono uppercase tracking-widest text-[#327A55] block mb-2">
                  2. L'INGÉNIERIE DÉPLOYÉE PAR CEIUE
                </span>
                <h2 className="font-serif text-2xl text-white mb-4">
                  La réponse institutionnelle et technique
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  {expertise.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables & Target Institutions */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] block mb-2">
                  LIVRABLES TANGIBLES
                </span>
                <h2 className="font-serif text-3xl text-white">
                  Ce que nous remettons à votre institution
                </h2>
              </div>

              <div className="space-y-3">
                {expertise.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0B1B2E] border border-[#102A43] flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#C7A45D]/10 text-[#C7A45D] flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">
                      0{idx + 1}
                    </div>
                    <div>
                      <span className="text-sm text-white font-medium block">
                        {deliv}
                      </span>
                      <span className="text-xs text-slate-400 font-light">
                        Document contractuel vérifié et transféré aux services de l'État.
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Target Institutions & Governance */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0B1B2E] border border-[#102A43] p-7 rounded-2xl space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#5CC8E8] block mb-2">
                    DESTINATAIRES HABILITÉS
                  </span>
                  <h3 className="font-serif text-2xl text-white">
                    Acteurs & Instances concernés
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {expertise.targetInstitutions.map((inst, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 font-mono">
                      <Users className="w-3.5 h-3.5 text-[#C7A45D]" />
                      <span>{inst}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#102A43] space-y-3">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Engagements CEIUE
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    Respect absolu de la souveraineté nationale, confidentialité des données académiques et accompagnement continu jusqu'au transfert complet d'autonomie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pathway Steps if present */}
        {expertise.pathwaySteps && expertise.pathwaySteps.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="bg-[#0B1B2E] border border-[#102A43] p-8 sm:p-10 rounded-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] block mb-2">
                DÉROULÉ D'EXÉCUTION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white mb-8">
                Les étapes du déploiement
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {expertise.pathwaySteps.map((st) => (
                  <div key={st.step} className="bg-[#07111F] p-5 rounded-xl border border-[#102A43]">
                    <span className="text-xs font-mono text-[#5CC8E8] block mb-1">
                      ÉTAPE 0{st.step}
                    </span>
                    <h3 className="font-serif text-lg text-white mb-2">{st.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Direct Action CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0B1B2E] via-[#102A43] to-[#0B1B2E] border border-[#C7A45D]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A45D]/10 text-[#C7A45D] text-xs font-mono uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5CC8E8]" />
              SAISINE DU DIRECTOIRE
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-white">
              Déployer ce dispositif pour votre pays
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Présentez votre cadre d'intervention, vos impératifs de calendrier et les filières cibles. Une proposition de cadrage vous sera adressée sous 48h ouvrées.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 h-12 rounded-full bg-[#C7A45D] text-[#07111F] font-bold text-sm hover:bg-[#E1C783] transition-colors shadow-lg"
              >
                <span>Présenter un besoin pour cette expertise</span>
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
