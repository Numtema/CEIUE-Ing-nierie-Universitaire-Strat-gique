'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Award,
  Globe2,
  Sparkles,
  Landmark,
  Scale,
  FileCheck2,
  Users2,
  ExternalLink,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <GlobalHeader />

      <main className="pt-28 sm:pt-36 pb-24 bg-[#FBF8F1] text-[#0B1B2E] selection:bg-[#C7A45D]/20">
        {/* Breadcrumb & Meta */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link href="/" className="hover:text-[#0B1B2E] transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-[#9A7B38] font-semibold">Le CEIUE</span>
          </nav>
        </div>

        {/* Hero Section — Monumental Editorial Title */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EB] border border-[#C7A45D]/40 text-[#9A7B38] text-xs font-mono tracking-widest uppercase shadow-sm"
            >
              <Landmark className="w-3.5 h-3.5 text-[#C7A45D]" />
              INSTITUTION & MANDAT RÉGALIEN
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0B1B2E] leading-[1.12] font-normal tracking-tight"
            >
              Accompagner les États africains dans la transformation souveraine de leur enseignement supérieur.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-3xl"
            >
              Le CEIUE (Centre d'Expertise et d'Ingénierie Universitaire) relie vision nationale de développement, rigueur académique internationale, coopérations équilibrées et rétention des talents critiques au service de la nation.
            </motion.p>
          </div>

          {/* Photographic Narrative Bento */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Primary Photographic Window */}
            <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-xl h-96 sm:h-[420px] group bg-white">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                alt="Table ronde stratégique et délibération interministérielle"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2E]/90 via-[#0B1B2E]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-mono uppercase tracking-wider mb-2 inline-block">
                  Concertation Régalienne
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  Une présence stratégique au plus haut niveau de décision académique
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-light mt-1 max-w-xl">
                  Le CEIUE réunit directeurs de cabinet, recteurs et bailleurs institutionnels autour de feuilles de route concrètes, sécurisées et financées.
                </p>
              </div>
            </div>

            {/* Side Column: Key Metrics & Institutional Guarantee */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="relative rounded-3xl overflow-hidden border border-[#E2E8F0] h-52 shadow-md group bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Chercheurs et ingénieurs africains en pôle scientifique"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2E]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono text-[#E1C783] uppercase tracking-wider block font-bold">
                    CAPITAL HUMAIN CRITIQUE
                  </span>
                  <p className="text-white text-sm font-serif font-medium">
                    100% des bourses fléchées vers les priorités d'État
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E8F0] flex flex-col justify-between flex-1 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9A7B38] font-bold">
                    Gouvernance & Réseau
                  </span>
                  <Sparkles className="w-4 h-4 text-[#C7A45D]" />
                </div>
                <div className="my-4">
                  <div className="text-3xl font-serif text-[#0B1B2E] font-normal">
                    48 États partenaires
                  </div>
                  <p className="text-xs text-slate-600 font-light mt-1.5 leading-relaxed">
                    Connectables au Registre National Unifié et au protocole bilatéral de vérification des diplômes en moins de 72h.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-[#15803D] flex items-center font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#15803D] inline-block mr-2 animate-pulse" />
                  <span>Protocole d'adhésion ouvert aux gouvernements</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 02: Manifesto & Vision — Full Width High Contrast Section */}
        <section className="bg-[#0B1B2E] text-white py-24 sm:py-32 relative overflow-hidden mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] font-bold">
                  NOTRE PHILOSOPHIE D'ACTION
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
                  Une autorité sans froideur, une ambition adossée à des preuves mesurables.
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                  L'enseignement supérieur en Afrique a trop souvent été géré comme un coût social ou une voie d'expatriation sans retour. Le CEIUE pose un paradigme souverain : l'université et la mobilité académique sont les premiers leviers de la souveraineté économique, industrielle et scientifique d'une nation.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3.5 bg-[#0F2238]/60 p-4 rounded-2xl border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-[#C7A45D] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-sm block">Refus du conformisme générique</strong>
                      <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        Pas de solutions préfabriquées calquées sur d'autres contextes, mais des architectures académiques enracinées dans les priorités du pays.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-[#0F2238]/60 p-4 rounded-2xl border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-[#5CC8E8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-sm block">Transparence et confiance absolue</strong>
                      <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        Éradication des faux diplômes et sécurisation des titres pour garantir aux lauréats africains leur juste crédit mondial.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-[#0F2238]/60 p-4 rounded-2xl border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-[#B8D94E] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-sm block">Orientation résolue vers le retour</strong>
                      <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        Faire de chaque bourse d'État un investissement à retour garanti grâce aux contrats tripartites et passerelles d'insertion nationale.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monumental Quote Card */}
              <div className="lg:col-span-5 bg-[#07111F] p-8 sm:p-10 rounded-3xl border border-[#C7A45D]/30 shadow-2xl space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] block">
                  Règle d'or CEIUE
                </span>
                <blockquote className="font-serif text-2xl sm:text-3xl text-[#FBF8F1] leading-snug font-normal">
                  « Former selon les besoins du pays, coopérer avec le monde, retenir les talents. »
                </blockquote>
                <p className="text-xs text-slate-400 font-light leading-relaxed pt-4 border-t border-[#102A43]">
                  Chaque intervention du CEIUE réconcilie les exigences du marché de l'emploi local, les impératifs des plans de développement gouvernementaux et les standards académiques internationaux.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#C7A45D]/20 border border-[#C7A45D]/50 flex items-center justify-center text-[#C7A45D]">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-mono text-slate-300">
                    Cadre de déontologie certifié ISO / UNESCO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Les 3 Piliers de Gouvernance Révisés — Crisp Luminous Aesthetic */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9A7B38] font-bold block mb-2">
              EXIGENCE DE GOUVERNANCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1B2E] font-normal mb-4">
              Les principes non négociables de notre engagement
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Toutes nos conventions bilatérales sont encadrées par des clauses strictes protégeant l'indépendance des universités et la souveraineté régalienne des États mandants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pilier 1 */}
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF5EB] border border-[#C7A45D]/40 text-[#9A7B38] flex items-center justify-center mb-6 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#9A7B38]" />
                </div>
                <h3 className="font-serif text-2xl text-[#0B1B2E] font-normal mb-3">
                  Souveraineté des données
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                  Les registres nationaux des diplômés et les bases de boursiers restent la propriété exclusive et inaliénable de l'État mandant. CEIUE garantit l'hébergement souverain et le transfert technologique intégral aux équipes nationales.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] text-xs font-mono text-slate-500 flex items-center justify-between">
                <span>Zéro partage commercial</span>
                <span className="text-[#15803D] font-bold">100% Souverain</span>
              </div>
            </div>

            {/* Pilier 2 */}
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#0284C7] flex items-center justify-center mb-6 shadow-sm">
                  <Globe2 className="w-6 h-6 text-[#0284C7]" />
                </div>
                <h3 className="font-serif text-2xl text-[#0B1B2E] font-normal mb-3">
                  Réciprocité internationale
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                  Nous ne négocions que des partenariats où les universités africaines sont traitées en pairs scientifiques, avec échange croisé d'enseignants, co-diplomations certifiées et reconnaissance mutuelle des crédits ECTS et CAMES.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] text-xs font-mono text-slate-500 flex items-center justify-between">
                <span>Partenariats équilibrés</span>
                <span className="text-[#0284C7] font-bold">Co-diplomation</span>
              </div>
            </div>

            {/* Pilier 3 */}
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] flex items-center justify-center mb-6 shadow-sm">
                  <Award className="w-6 h-6 text-[#15803D]" />
                </div>
                <h3 className="font-serif text-2xl text-[#0B1B2E] font-normal mb-3">
                  Mesure de l'impact réel
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                  L'efficacité de nos interventions ne se mesure pas au nombre de pages d'un audit, mais au taux d'insertion professionnelle dans les secteurs vitaux, au retour effectif des talents et à la réduction des délais de vérification sous 72h.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] text-xs font-mono text-slate-500 flex items-center justify-between">
                <span>Indicateurs audités</span>
                <span className="text-[#15803D] font-bold">Objectifs vérifiables</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: Directoire & Appel à Consultation */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1B2E] rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] font-bold">
                AUDIENCE MINISTÉRIELLE & RECTORALE
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal leading-tight">
                Engager un dialogue avec le directoire du CEIUE
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Vous représentez un ministère de l'Enseignement supérieur, une université publique ou une agence nationale de bourses ? Présentez votre problématique institutionnelle dans le cadre d'un protocole confidentiel sous 48h.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 h-12 rounded-full bg-[#C7A45D] hover:bg-[#E1C783] text-[#07111F] font-bold text-sm transition-all shadow-md active:scale-95"
                >
                  <span>Présenter un besoin national</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </>
  );
}
