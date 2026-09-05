import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import MonogramLoader from '@/components/MonogramLoader';
import HeroVisualContainer from '@/components/HeroVisualContainer';
import VisualImpactGallery from '@/components/VisualImpactGallery';
import DiplomaTrustPipeline from '@/components/DiplomaTrustPipeline';
import TalentNationFlow from '@/components/TalentNationFlow';
import MethodInteractive from '@/components/MethodInteractive';
import NationalNeedForm from '@/components/NationalNeedForm';
import { PILLARS, EXPERTISES, AUDIENCES } from '@/lib/data/expertises';
import {
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Users,
  Compass,
  CheckCircle2,
  FileSpreadsheet,
  Building,
  Sparkles
} from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Séquence 01: Non-blocking Monogram Preloader */}
      <MonogramLoader />

      {/* Progressive Fixed Global Header */}
      <GlobalHeader />

      <main id="main-content" className="relative bg-[#07111F] text-[#FBF8F1] overflow-hidden">
        {/* SÉQUENCE 02 — HERO */}
        <section
          id="hero"
          className="relative min-h-[92vh] pt-32 pb-20 sm:pt-40 sm:pb-28 flex items-center justify-center border-b border-[#102A43]"
        >
          {/* Ambient background gradients and grain */}
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-radial from-[#C7A45D]/10 via-[#5CC8E8]/5 to-transparent blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Text Editorial Column */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Institutional Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1B2E] border border-[#C7A45D]/30 text-[#C7A45D] text-xs font-mono tracking-widest uppercase shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#B8D94E] animate-pulse" />
                  SOUVERAINETÉ EN MOUVEMENT — CEIUE
                </div>

                {/* Main H1 indexable */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.15] tracking-tight">
                  Transformer l'enseignement supérieur africain en levier de{' '}
                  <span className="italic text-[#E1C783] underline decoration-[#C7A45D]/40 underline-offset-8">
                    souveraineté
                  </span>
                  , d'employabilité et de développement.
                </h1>

                {/* Subtext */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
                  CEIUE accompagne les États africains dans la construction de systèmes de formation alignés sur leurs besoins, leurs talents et leurs ambitions internationales.
                </p>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/contact"
                    id="hero-cta-primary"
                    className="inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full bg-[#C7A45D] hover:bg-[#E1C783] text-[#07111F] font-bold text-base transition-all duration-200 shadow-xl active:scale-[0.98]"
                  >
                    <span>Présenter un besoin national</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <Link
                    href="#quatre-axes"
                    id="hero-cta-secondary"
                    className="inline-flex items-center justify-center gap-2 px-7 h-14 rounded-full bg-[#0B1B2E] hover:bg-[#102A43] border border-[#102A43] hover:border-[#C7A45D]/50 text-slate-200 font-medium text-sm transition-all"
                  >
                    <span>Découvrir nos expertises</span>
                  </Link>
                </div>

                {/* Sovereign Trust Badges */}
                <div className="pt-6 border-t border-[#102A43]/70 grid grid-cols-3 gap-4 max-w-lg font-mono text-xs">
                  <div>
                    <span className="text-[#5CC8E8] font-semibold block text-base sm:text-lg">100%</span>
                    <span className="text-slate-400 text-[11px]">Alignement souverain</span>
                  </div>
                  <div>
                    <span className="text-[#C7A45D] font-semibold block text-base sm:text-lg">&lt; 72h</span>
                    <span className="text-slate-400 text-[11px]">Contrôle diplômes</span>
                  </div>
                  <div>
                    <span className="text-[#B8D94E] font-semibold block text-base sm:text-lg">6 étapes</span>
                    <span className="text-slate-400 text-[11px]">Méthode éprouvée</span>
                  </div>
                </div>
              </div>

              {/* Visual Interactive Column: Switchable Bento & Living Network */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <HeroVisualContainer />
              </div>
            </div>
          </div>
        </section>

        {/* SÉQUENCE 03 — LES QUATRE AXES */}
        <section id="quatre-axes" className="py-24 sm:py-32 bg-[#0B1B2E] border-b border-[#102A43]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] block mb-2">
                  PILIER D'INGÉNIERIE STRATÉGIQUE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
                  Les quatre axes d'action
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-300 max-w-md">
                Une réponse systémique pour articuler besoins nationaux, confiance académique et capital humain.
              </p>
            </div>

            {/* 4 Pillars Interactive Grid with Modern Editorial Photography */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PILLARS.map((pillar) => (
                <Link
                  key={pillar.number}
                  href={pillar.link}
                  className="group bg-[#07111F] border border-[#102A43] hover:border-[#C7A45D] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#C7A45D]"
                >
                  {/* Image Header with Framer-style badge overlay */}
                  <div className="relative h-44 w-full overflow-hidden shrink-0">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 brightness-80"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/40 to-transparent" />

                    {/* Top pill badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-[#07111F] px-2.5 py-0.5 rounded-full bg-[#C7A45D] shadow">
                        AXE {pillar.number}
                      </span>
                      <span className="font-mono text-[10px] text-white px-2 py-0.5 rounded-full bg-[#07111F]/80 backdrop-blur-md border border-white/20">
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-2 right-3">
                      <span className="font-mono text-[11px] text-[#5CC8E8] bg-[#07111F]/85 backdrop-blur-sm px-2 py-0.5 rounded border border-[#102A43]">
                        {pillar.metric}
                      </span>
                    </div>
                  </div>

                  {/* Body text */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-serif text-xl text-white group-hover:text-[#E1C783] transition-colors mb-2 leading-snug">
                        {pillar.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                        {pillar.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#102A43] flex items-center justify-between text-xs font-mono text-[#C7A45D]">
                      <span className="truncate pr-2 text-slate-400">{pillar.highlight}</span>
                      <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SÉQUENCE 04 — CONVICTION (Fond ivoire #FBF8F1) */}
        <section id="conviction" className="py-24 sm:py-36 bg-[#FBF8F1] text-[#142131] relative overflow-hidden border-b border-[#D9D4C9]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EFE4] border border-[#D9D4C9] text-[#07111F] text-xs font-mono tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C7A45D]" />
                NOTRE CONVICTION FONDATRICE
              </span>

              {/* Monumental Editorial Quote */}
              <blockquote className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#07111F] leading-[1.2] tracking-tight">
                « Former selon les besoins du pays, coopérer avec le monde, retenir les talents. »
              </blockquote>

              <p className="text-base sm:text-xl text-[#607080] leading-relaxed max-w-3xl mx-auto font-light">
                Les budgets de mobilité internationale ne doivent plus être des subventions à l'expatriation sans retour. Ils peuvent devenir des investissements structurants : filières prioritaires, bases nationales de diplômés, diplômes universitaires prestigieux sur place, partenariats équilibrés et insertion garantie au retour.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#142131]">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#D9D4C9] shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#327A55]" />
                  <span>Filières prioritaires identifiées</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#D9D4C9] shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#327A55]" />
                  <span>Registre unifié infalsifiable</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#D9D4C9] shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#327A55]" />
                  <span>Contrats tripartites de retour</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NOUVELLE SÉQUENCE: GALERIE PHOTOGRAPHIQUE & ÉTUDES DE CAS D'ÉTATS (Framer & Webflow Style) */}
        <VisualImpactGallery />

        {/* SÉQUENCE 05 — SYSTÈME D'EXPERTISES */}
        <section id="expertises-systeme" className="py-24 sm:py-32 bg-[#07111F] border-b border-[#102A43]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] block mb-2">
                CATALOGUE D'INGÉNIERIE SOUVERAINE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                Des réponses adaptées à chaque défi d'État
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nos expertises ne sont pas une liste théorique mais des architectures concrètes créées pour résoudre les blocages structurels de l'enseignement supérieur.
              </p>
            </div>

            {/* Editorial grouped layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXPERTISES.map((exp) => (
                <div
                  key={exp.slug}
                  className="bg-[#0B1B2E] border border-[#102A43] hover:border-[#C7A45D]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-[#5CC8E8] uppercase tracking-wider">
                        {exp.categoryLabel}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-white group-hover:text-[#E1C783] transition-colors mb-3">
                      {exp.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {exp.shortDescription}
                    </p>

                    <div className="bg-[#07111F] p-3 rounded-xl border border-[#102A43] mb-4">
                      <span className="text-[10px] font-mono text-[#C7A45D] uppercase block mb-1">
                        Enjeu résolu :
                      </span>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {exp.problem}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#102A43] flex items-center justify-between">
                    <Link
                      href={`/expertises/${exp.slug}`}
                      className="text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5"
                    >
                      Détail du dispositif <ArrowRight className="w-3.5 h-3.5 text-[#C7A45D]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/expertises"
                className="inline-flex items-center gap-2 text-sm font-mono text-[#E1C783] hover:text-white underline underline-offset-4"
              >
                Consulter l'ensemble de la cartographie des expertises →
              </Link>
            </div>
          </div>
        </section>

        {/* SÉQUENCE 06 — DIPLOMA TRUST SYSTEM */}
        <section id="diploma-trust" className="py-24 sm:py-32 bg-[#050D17] border-b border-[#102A43]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DiplomaTrustPipeline />
          </div>
        </section>

        {/* SÉQUENCE 07 — TALENT NATION FLOW */}
        <section id="talent-nation" className="py-24 sm:py-32 bg-[#0B1B2E] border-b border-[#102A43]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TalentNationFlow />
          </div>
        </section>

        {/* SÉQUENCE 08 — MÉTHODE EN SIX ÉTAPES */}
        <section id="methode" className="py-24 sm:py-32 bg-[#07111F] border-b border-[#102A43]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] block mb-2">
                PROCESSUS OPÉRATIONNEL CEIUE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                Une méthode en six étapes, du diagnostic à l'impact
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Une démarche rigoureuse sans promesse éphémère. Chaque étape est adossée à un livrable vérifiable et à un transfert de compétences vers les administrations nationales.
              </p>
            </div>

            <MethodInteractive />
          </div>
        </section>

        {/* SÉQUENCE 09 — LIVRABLES ET PUBLICS */}
        <section id="livrables-publics" className="py-24 sm:py-32 bg-[#0B1B2E] border-b border-[#102A43]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Livrables Nationaux */}
              <div className="bg-[#07111F] border border-[#102A43] rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C7A45D] uppercase tracking-wider mb-3">
                    <FileSpreadsheet className="w-4 h-4 text-[#5CC8E8]" />
                    Livrables et Capacités Durables
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
                    Ce que CEIUE transmet aux institutions
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                    Nous ne laissons pas derrière nous de simples rapports de cabinet. Nous remettons des instruments juridiques, techniques et numériques opérationnels :
                  </p>

                  <ul className="space-y-3 text-sm text-slate-200">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C7A45D] mt-2 shrink-0" />
                      <span><strong>Stratégies nationales</strong> d'alignement des compétences à horizon 10 ans.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C7A45D] mt-2 shrink-0" />
                      <span><strong>Audits indépendants</strong> des cursus universitaires et filières manquantes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C7A45D] mt-2 shrink-0" />
                      <span><strong>Procédures & plateformes</strong> d'authentification rapide et infalsifiable des diplômes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C7A45D] mt-2 shrink-0" />
                      <span><strong>Bases de données souveraines</strong> pour le suivi des boursiers et le retour de la diaspora.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C7A45D] mt-2 shrink-0" />
                      <span><strong>Accords internationaux</strong> de co-diplomation équilibrée et conventions de double titre.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8 mt-6 border-t border-[#102A43]">
                  <Link
                    href="/methode"
                    className="text-xs font-mono text-[#5CC8E8] hover:text-[#E1C783] flex items-center gap-1.5"
                  >
                    Voir le cycle complet des livrables <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Publics et Partenaires */}
              <div className="bg-[#07111F] border border-[#102A43] rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#5CC8E8] uppercase tracking-wider mb-3">
                    <Building className="w-4 h-4 text-[#C7A45D]" />
                    Acteurs & Mandants Institutionnels
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
                    À qui s'adresse le CEIUE
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                    Notre dialogue s'établit exclusivement avec les décideurs et autorités en charge du capital humain national :
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {AUDIENCES.map((aud) => (
                      <div
                        key={aud.id}
                        className="p-3.5 rounded-xl bg-[#0B1B2E] border border-[#102A43]"
                      >
                        <span className="font-serif text-sm text-white block mb-0.5">
                          {aud.title}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {aud.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-[#102A43]">
                  <Link
                    href="/publics"
                    className="text-xs font-mono text-[#E1C783] hover:text-white flex items-center gap-1.5"
                  >
                    Explorer les parcours dédiés par public <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SÉQUENCE 10 — CONVERSION : FORMULAIRE DE BESOIN NATIONAL */}
        <section id="formulaire-besoin" className="py-24 sm:py-32 bg-[#07111F]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A45D]/10 border border-[#C7A45D]/30 text-[#C7A45D] text-xs font-mono tracking-widest uppercase mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5CC8E8]" />
                ACTION STRATÉGIQUE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                Présenter un besoin national
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Transmettez votre demande d'audit, de registre de diplômes, de bourses ciblées ou de coopération universitaire. Le directoire du CEIUE s'engage à vous répondre sous 48 heures ouvrées.
              </p>
            </div>

            <NationalNeedForm />
          </div>
        </section>
      </main>

      {/* Global Institutional Footer */}
      <GlobalFooter />
    </>
  );
}
