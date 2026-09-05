import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import NationalNeedForm from '@/components/NationalNeedForm';
import { ShieldCheck, Clock, Lock, CheckCircle2, Award, Landmark } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Présenter un besoin national | CEIUE',
  description:
    'Présentez au CEIUE un enjeu national lié à l’enseignement supérieur, aux compétences, aux diplômes ou aux talents.',
  alternates: {
    canonical: 'https://ceiue.org/contact/',
  },
};

export default function ContactPage() {
  return (
    <>
      <GlobalHeader />

      <main className="pt-32 pb-24 bg-[#07111F] text-[#FBF8F1]">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-[#C7A45D]">Présenter un besoin national</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1B2E] border border-[#C7A45D]/30 text-[#C7A45D] text-xs font-mono tracking-widest uppercase">
              GUICHET INSTITUTIONNEL
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Présenter un besoin national.
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-3xl">
              Ce guichet est exclusivement réservé aux gouvernements, ministères, agences de bourses, universités et partenaires internationaux souhaitant formaliser une demande d'ingénierie ou de coopération stratégique.
            </p>
          </div>
        </section>

        {/* Main Grid: Form + Trust Sidebar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8">
              <NationalNeedForm />
            </div>

            {/* Sidebar Column: Trust & Expectations */}
            <div className="lg:col-span-4 space-y-6">
              {/* Photo Card */}
              <div className="relative rounded-2xl overflow-hidden border border-[#102A43] bg-[#0B1B2E] shadow-xl h-48 w-full group">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                  alt="Protocole bilatéral CEIUE"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2E] via-[#0B1B2E]/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#C7A45D] font-bold">Liaison diplomatique</span>
                  <span className="text-[10px] font-mono text-slate-300 bg-[#07111F]/80 px-2 py-0.5 rounded border border-[#102A43]">
                    Guichet Directoire
                  </span>
                </div>
              </div>

              <div className="bg-[#0B1B2E] border border-[#102A43] p-6 sm:p-7 rounded-2xl space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C7A45D] uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-[#5CC8E8]" />
                  Délais & Traitement
                </div>
                <h3 className="font-serif text-xl text-white">
                  Que se passe-t-il après l'envoi ?
                </h3>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7A45D] shrink-0 mt-0.5" />
                    <span><strong>Attribution d'un code dossier :</strong> confirmation immédiate avec identifiant unique sécurisé.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7A45D] shrink-0 mt-0.5" />
                    <span><strong>Accusé sous 48h :</strong> prise de contact par un membre habilité du directoire CEIUE.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7A45D] shrink-0 mt-0.5" />
                    <span><strong>Entretien préalable :</strong> cadrage technique et juridique en visioconférence confidentielle.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C7A45D] shrink-0 mt-0.5" />
                    <span><strong>Note d'orientation :</strong> remise sans engagement d'une première feuille de route d'intervention.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#0B1B2E] border border-[#102A43] p-6 sm:p-7 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#5CC8E8] uppercase tracking-wider">
                  <Lock className="w-4 h-4 text-[#C7A45D]" />
                  Protocole de Confidentialité
                </div>
                <h3 className="font-serif text-lg text-white">
                  Secret institutionnel garanti
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Aucune information relative aux faiblesses diagnostiquées, aux effectifs étudiants ou aux projets de réformes n'est rendue publique. Tous les échanges sont couverts par un engagement strict de non-divulgation.
                </p>
              </div>

              <div className="bg-[#07111F] p-6 rounded-2xl border border-[#C7A45D]/20 text-xs font-mono text-slate-400 space-y-2">
                <div className="text-[#C7A45D] uppercase font-bold">Domaine officiel</div>
                <div className="text-white">https://ceiue.org</div>
                <div className="pt-2 text-[11px] text-slate-500">
                  Centre d'Expertise et d'Ingénierie Universitaire pour les États africains.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </>
  );
}
