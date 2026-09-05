import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import { ShieldCheck, Compass, ArrowRight, CheckCircle2, Award, Globe, Sparkles, Building2, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: "Le CEIUE — Ingénierie stratégique de l'enseignement supérieur",
  description:
    "Découvrez la mission, la conviction et l'approche du CEIUE auprès des États africains, ministères, agences et universités.",
  alternates: {
    canonical: 'https://ceiue.org/le-ceiue/',
  },
};

export default function AboutPage() {
  return (
    <>
      <GlobalHeader />

      <main className="pt-32 pb-24 bg-[#07111F] text-[#FBF8F1]">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-[#C7A45D]">Le CEIUE</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1B2E] border border-[#C7A45D]/30 text-[#C7A45D] text-xs font-mono tracking-widest uppercase">
              INSTITUTION & MISSION
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Accompagner les États africains dans la transformation stratégique de leur enseignement supérieur.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
              Le CEIUE (Centre d'Expertise et d'Ingénierie Universitaire) relie vision nationale de développement, rigueur académique, coopération internationale équitable et insertion effective des talents.
            </p>
          </div>

          {/* Photographic Bento Grid — Institution & Action */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Photo Card */}
            <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-[#102A43] h-80 sm:h-96 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                alt="Table ronde stratégique et délibération interministérielle"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-[#07111F]/80 backdrop-blur-md border border-[#C7A45D]/40 text-[#C7A45D] text-xs font-mono uppercase tracking-wider mb-2 inline-block">
                  Concertation Régalienne
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold">
                  Une présence stratégique au plus haut niveau de décision académique
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light mt-1 max-w-xl">
                  Le CEIUE réunit directeurs de cabinet, recteurs et bailleurs institutionnels autour de feuilles de route concrètes et financées.
                </p>
              </div>
            </div>

            {/* Side Card with Researcher & Metric */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="relative rounded-3xl overflow-hidden border border-[#102A43] h-44 shadow-xl group">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Chercheurs et ingénieurs africains en biotechnologies"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-mono text-[#5CC8E8] uppercase tracking-wider block">
                    Capital Humain
                  </span>
                  <p className="text-white text-sm font-serif font-semibold">
                    100% des bourses fléchées vers les priorités d'État
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#0B1B2E] border border-[#C7A45D]/30 flex flex-col justify-between flex-1 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45D]">
                    Réseau Actif
                  </span>
                  <Sparkles className="w-4 h-4 text-[#C7A45D]" />
                </div>
                <div className="my-2">
                  <div className="text-3xl font-serif text-white font-bold">48 États</div>
                  <p className="text-xs text-slate-300 font-light mt-1">
                    Connectables au Registre National Unifié et au protocole d'authentification des diplômes.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-[#B8D94E]">
                  ● Protocole d'adhésion ouvert aux gouvernements
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conviction & Identity Manifesto */}
        <section className="bg-[#0B1B2E] border-y border-[#102A43] py-20 mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#5CC8E8]">
                  NOTRE PHILOSOPHIE D'ACTION
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-white">
                  Une autorité sans froideur, une ambition adossée à des preuves
                </h2>
                <p className="text-slate-300 text-base leading-relaxed font-light">
                  L'enseignement supérieur en Afrique a longtemps été géré comme un coût social ou une filière d'émigration non choisie. Le CEIUE pose un paradigme inverse : l'université et la mobilité internationale sont les premiers leviers de la souveraineté économique et scientifique d'un pays.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C7A45D] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-200">
                      <strong>Refus du conformisme générique :</strong> pas de solutions préfabriquées calquées sur d'autres contextes, mais des réponses enracinées dans les priorités du pays.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C7A45D] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-200">
                      <strong>Transparence et confiance :</strong> éradication des faux diplômes et sécurisation des parcours pour donner aux lauréats africains leur juste crédit mondial.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C7A45D] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-200">
                      <strong>Orientation vers le retour :</strong> faire de chaque bourse une promesse d'impact national à travers des mécanismes contractuels respectés.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#07111F] p-8 sm:p-10 rounded-2xl border border-[#C7A45D]/25 shadow-2xl space-y-6">
                <blockquote className="font-serif text-2xl text-[#FBF8F1] italic border-l-2 border-[#C7A45D] pl-4">
                  « Former selon les besoins du pays, coopérer avec le monde, retenir les talents. »
                </blockquote>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  — Règle d'or de l'ingénierie CEIUE
                </p>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Chaque intervention du CEIUE réconcilie les exigences du marché de l'emploi local, les impératifs des plans de développement gouvernementaux et les standards académiques internationaux.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 4 Principles of Intervention */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] block mb-2">
              EXIGENCE DE GOUVERNANCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Les principes non négociables du CEIUE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0B1B2E] border border-[#102A43] p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#C7A45D]/10 text-[#C7A45D] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">Souveraineté des données</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Les registres nationaux des diplômés et les bases de boursiers restent la propriété exclusive de l'État mandant. CEIUE garantit l'hébergement sécurisé et le transfert technologique intégral.
              </p>
            </div>

            <div className="bg-[#0B1B2E] border border-[#102A43] p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#5CC8E8]/10 text-[#5CC8E8] flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">Réciprocité internationale</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Nous ne négocions que des partenariats où les universités africaines sont traitées en pairs scientifiques, avec échange croisé d'enseignants et reconnaissance mutuelle des crédits.
              </p>
            </div>

            <div className="bg-[#0B1B2E] border border-[#102A43] p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#E1C783]/10 text-[#E1C783] flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">Mesure de l'impact réel</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                L'efficacité de nos interventions ne se mesure pas au nombre de pages d'un audit, mais au taux d'insertion professionnelle dans les secteurs vitaux et à la réduction des délais de délivrance des attestations.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0B1B2E] via-[#102A43] to-[#0B1B2E] border border-[#C7A45D]/30 rounded-3xl p-8 sm:p-12 text-center space-y-6">
            <h2 className="font-serif text-2xl sm:text-4xl text-white">
              Engager un dialogue avec le directoire du CEIUE
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light">
              Vous représentez un ministère, une université publique ou une agence nationale de bourses ? Présentez votre problématique institutionnelle.
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
