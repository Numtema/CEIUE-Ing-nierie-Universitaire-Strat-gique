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
import QuatreAxesCinematic from '@/components/QuatreAxesCinematic';
import { EXPERTISES } from '@/lib/data/expertises';
import {
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Users,
  Compass,
  CheckCircle2,
  FileSpreadsheet,
  Building2,
  Sparkles,
  Lock,
  Globe2,
  FileCheck,
  Scale,
  Award,
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
                    className="inline-flex items-center justify-center gap-2 px-7 h-13 rounded-full bg-[#C7A45D] hover:bg-[#E1C783] text-[#07111F] font-bold text-sm tracking-wide transition-all duration-200 shadow-xl hover:shadow-[#C7A45D]/20 active:scale-98"
                  >
                    <span>Présenter un besoin national</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/expertises"
                    className="inline-flex items-center justify-center gap-2 px-6 h-13 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 text-sm font-medium transition-all duration-200"
                  >
                    <span>Explorer nos expertises</span>
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

        {/* SÉQUENCE 03 — LES QUATRE AXES (Cinématique & Parallaxe) */}
        <QuatreAxesCinematic />

        {/* SÉQUENCE 04 — CONVICTION (Fond ivoire #FBF8F1) */}
        <section id="conviction" className="py-24 sm:py-36 bg-[#FBF8F1] text-[#142131] relative overflow-hidden border-b border-[#D9D4C9]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EFE4] border border-[#D9D4C9] text-[#07111F] text-xs font-mono tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C7A45D]" />
                NOTRE CONVICTION FONDATRICE
              </span>

              {/* Monumental Editorial Quote */}
              <blockquote className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#07111F] leading-[1.2] tracking-tight font-normal">
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

        {/* NOUVELLE SÉQUENCE: GALERIE PHOTOGRAPHIQUE & ÉTUDES DE CAS D'ÉTATS */}
        <VisualImpactGallery />

        {/* SÉQUENCE 05 — SYSTÈME D'EXPERTISES AVEC IMAGES ÉDITORIALES SOUVERAINES */}
        <section id="expertises-systeme" className="py-24 sm:py-32 bg-[#07111F] border-b border-[#102A43]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] block mb-2 font-bold">
                CATALOGUE D'INGÉNIERIE SOUVERAINE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4 font-normal">
                Des réponses adaptées à chaque défi d'État
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Nos expertises ne sont pas une liste théorique mais des architectures concrètes créées pour résoudre les blocages structurels de l'enseignement supérieur.
              </p>
            </div>

            {/* Editorial photographic cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {EXPERTISES.map((exp) => (
                <div
                  key={exp.slug}
                  className="bg-[#0B1B2E] border border-[#102A43] hover:border-[#C7A45D]/60 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Authentic Photographic Header */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.82]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2E] via-transparent to-black/40" />

                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-[#07111F]/80 backdrop-blur-md border border-[#C7A45D]/40 text-[#C7A45D] text-[10px] font-mono uppercase tracking-wider font-semibold">
                          {exp.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6">
                      <h3 className="font-serif text-xl text-white group-hover:text-[#E1C783] transition-colors mb-3 leading-snug font-normal">
                        {exp.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-light">
                        {exp.shortDescription}
                      </p>

                      <div className="bg-[#07111F] p-3.5 rounded-2xl border border-[#102A43]">
                        <span className="text-[10px] font-mono text-[#C7A45D] uppercase block mb-1 font-semibold">
                          Enjeu résolu :
                        </span>
                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-light">
                          {exp.problem}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#102A43]/80 mt-4 flex items-center justify-between">
                    <Link
                      href={`/expertises/${exp.slug}`}
                      className="text-xs font-mono text-[#C7A45D] group-hover:text-white flex items-center gap-1.5 font-semibold transition-colors"
                    >
                      <span>Détail du dispositif</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link
                href="/expertises"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#0F2238] border border-[#C7A45D]/40 text-sm font-mono text-[#E1C783] hover:text-white hover:border-[#C7A45D] transition-all shadow-md group cursor-pointer"
              >
                <span>Consulter l'ensemble de la cartographie des expertises</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
              <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] block mb-2 font-bold">
                PROCESSUS OPÉRATIONNEL CEIUE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4 font-normal">
                Une méthode en six étapes, du diagnostic à l'impact
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Une démarche rigoureuse sans promesse éphémère. Chaque étape est adossée à un livrable vérifiable et à un transfert de compétences vers les administrations nationales.
              </p>
            </div>

            <MethodInteractive />
          </div>
        </section>

        {/* SÉQUENCE 09 — LIVRABLES RÉGALIENS & TRANSFERT DE SOUVERAINETÉ */}
        <section id="livrables-souverains" className="py-24 sm:py-32 bg-[#0B1B2E] border-b border-[#102A43]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-[#C7A45D] uppercase tracking-wider mb-2 font-bold">
                <FileSpreadsheet className="w-4 h-4 text-[#5CC8E8]" />
                CAPACITÉS DURABLES & OUTILS D'ÉTAT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4 font-normal">
                Ce que le CEIUE transmet aux institutions mandantes
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                Nous ne laissons pas derrière nous de simples rapports de cabinet. Nous remettons aux gouvernements et universités 5 instruments juridiques, techniques et numériques immédiatement opérationnels :
              </p>
            </div>

            {/* 5 Sovereign Deliverable Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Deliverable 1 */}
              <div className="bg-[#07111F] border border-[#102A43] hover:border-[#C7A45D]/50 rounded-3xl p-7 flex flex-col justify-between transition-colors shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0B1B2E] border border-[#C7A45D]/30 flex items-center justify-center text-[#C7A45D] mb-5">
                    <Compass className="w-5 h-5 text-[#C7A45D]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#5CC8E8] font-semibold block mb-1">
                    Instrument Stratégique
                  </span>
                  <h3 className="font-serif text-lg text-white font-medium mb-3">
                    Stratégie nationale d'alignement des compétences (Horizon 10 ans)
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                    Cartographie prospective reliant les plans nationaux de développement économique et les maquettes d'enseignement supérieur, actualisable par les ministères.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#102A43] text-[11px] font-mono text-[#C7A45D]">
                  Livrable : Matrice macro-académique
                </div>
              </div>

              {/* Deliverable 2 */}
              <div className="bg-[#07111F] border border-[#102A43] hover:border-[#C7A45D]/50 rounded-3xl p-7 flex flex-col justify-between transition-colors shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0B1B2E] border border-[#5CC8E8]/30 flex items-center justify-center text-[#5CC8E8] mb-5">
                    <FileCheck className="w-5 h-5 text-[#5CC8E8]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#5CC8E8] font-semibold block mb-1">
                    Instrument Diagnostique
                  </span>
                  <h3 className="font-serif text-lg text-white font-medium mb-3">
                    Audit indépendant des cursus & filières manquantes
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                    Évaluation indépendante des maquettes pédagogiques existantes, identification des doublons et recommandations d'ouvertures de filières prioritaires.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#102A43] text-[11px] font-mono text-[#5CC8E8]">
                  Livrable : Cahier d'arbitrage ministériel
                </div>
              </div>

              {/* Deliverable 3 */}
              <div className="bg-[#07111F] border border-[#102A43] hover:border-[#C7A45D]/50 rounded-3xl p-7 flex flex-col justify-between transition-colors shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0B1B2E] border border-[#B8D94E]/30 flex items-center justify-center text-[#B8D94E] mb-5">
                    <Lock className="w-5 h-5 text-[#B8D94E]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8D94E] font-semibold block mb-1">
                    Instrument Numérique
                  </span>
                  <h3 className="font-serif text-lg text-white font-medium mb-3">
                    Plateforme souveraine d'authentification des diplômes
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                    Registre unifié infalsifiable avec horodatage cryptographique, permettant la vérification d'un titre en moins de 72h par les chancelleries mondiales.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#102A43] text-[11px] font-mono text-[#B8D94E]">
                  Livrable : Guichet régalien infalsifiable
                </div>
              </div>

              {/* Deliverable 4 */}
              <div className="bg-[#07111F] border border-[#102A43] hover:border-[#C7A45D]/50 rounded-3xl p-7 flex flex-col justify-between transition-colors shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0B1B2E] border border-[#C7A45D]/30 flex items-center justify-center text-[#C7A45D] mb-5">
                    <Users className="w-5 h-5 text-[#C7A45D]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C7A45D] font-semibold block mb-1">
                    Instrument Opérationnel
                  </span>
                  <h3 className="font-serif text-lg text-white font-medium mb-3">
                    Bases de données de suivi des boursiers & retour des talents
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                    Contrats tripartites (État-Étudiant-Université), cartographie des diplômés de la diaspora et passerelles d'insertion dans les fonctions critiques nationales.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#102A43] text-[11px] font-mono text-[#C7A45D]">
                  Livrable : Baromètre & guichet d'insertion
                </div>
              </div>

              {/* Deliverable 5 */}
              <div className="bg-[#07111F] border border-[#102A43] hover:border-[#C7A45D]/50 rounded-3xl p-7 flex flex-col justify-between transition-colors shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0B1B2E] border border-[#5CC8E8]/30 flex items-center justify-center text-[#5CC8E8] mb-5">
                    <Globe2 className="w-5 h-5 text-[#5CC8E8]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#5CC8E8] font-semibold block mb-1">
                    Instrument Juridique
                  </span>
                  <h3 className="font-serif text-lg text-white font-medium mb-3">
                    Conventions bilatérales de co-diplomation équilibrée
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                    Accords interinstitutionnels garantissant la parité scientifique, la délivrance de doubles diplômes reconnus et la mobilité croisée d'enseignants-chercheurs.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#102A43] text-[11px] font-mono text-[#5CC8E8]">
                  Livrable : Traités académiques réciproques
                </div>
              </div>

              {/* Sovereign Guarantee Callout */}
              <div className="bg-[#0F2238] border border-[#C7A45D]/40 rounded-3xl p-7 flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7A45D] font-bold block mb-2">
                    ENGAGEMENT DE SOUVERAINETÉ
                  </span>
                  <h3 className="font-serif text-xl text-white font-normal mb-3">
                    100% de propriété régalienne
                  </h3>
                  <p className="text-xs text-slate-200 font-light leading-relaxed mb-4">
                    Toutes les bases de données, registres et algorithmes développés demeurent la propriété exclusive de l'État mandant. Formation complète des équipes ministérielles pour une autonomie totale.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/methode"
                    className="text-xs font-mono text-[#E1C783] hover:text-white flex items-center gap-1.5 font-semibold"
                  >
                    <span>Voir le cycle de transfert complet</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C7A45D]" />
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
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4 font-normal">
                Présenter un besoin national
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Transmettez votre demande d'audit, de registre de diplômes, de bourses ciblées ou de coopération universitaire. Le directoire du CEIUE s'engage à vous répondre sous 48 heures ouvrées dans le cadre d'un protocole confidentiel.
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
