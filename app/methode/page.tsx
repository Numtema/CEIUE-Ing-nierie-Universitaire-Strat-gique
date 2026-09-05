import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import MethodInteractive from '@/components/MethodInteractive';
import { METHOD_STEPS } from '@/lib/data/expertises';
import { ArrowRight, ShieldCheck, CheckCircle2, FileText, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Notre méthode — Du diagnostic à l’impact | CEIUE',
  description:
    'Une méthode en six étapes pour transformer une ambition nationale en dispositifs universitaires opérationnels et souverains.',
  alternates: {
    canonical: 'https://ceiue.org/methode/',
  },
};

export default function MethodPage() {
  return (
    <>
      <GlobalHeader />

      <main className="pt-32 pb-24 bg-[#07111F] text-[#FBF8F1]">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-[#C7A45D]">Méthode</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1B2E] border border-[#C7A45D]/30 text-[#C7A45D] text-xs font-mono tracking-widest uppercase">
              RIGUEUR OPÉRATIONNELLE
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Une méthode en six étapes, du diagnostic à l'impact.
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-3xl">
              Construire l'autonomie académique et scientifique d'un pays exige un protocole éprouvé. Ni précipitation, ni inertie : un enchaînement clair où chaque décision engage la responsabilité partagée de l'État et du CEIUE.
            </p>
          </div>
        </section>

        {/* Interactive Method Component */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <MethodInteractive />
        </section>

        {/* Governance & Commitments */}
        <section className="bg-[#0B1B2E] border-y border-[#102A43] py-20 mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#5CC8E8] block mb-2">
                  MODÈLE DE GOUVERNANCE
                </span>
                <h2 className="font-serif text-3xl text-white mb-4">
                  Le principe du transfert progressif et complet
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
                  Le CEIUE n'a pas vocation à se substituer aux administrations publiques africaines. Dès le premier jour du diagnostic, un comité mixte paritaire associe les directeurs de ministères, les présidents d'université et les ingénieurs d'État.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C7A45D] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-200">
                      <strong>Codécision stratégique :</strong> aucun arbitrage de filière sans la tutelle ministérielle et les représentants sectoriels.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C7A45D] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-200">
                      <strong>Formation des encadrants locaux :</strong> chaque outil numérique ou juridique est accompagné de sessions d'appropriation approfondies.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C7A45D] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-200">
                      <strong>Audit d'autonomie finale :</strong> la mission prend fin lorsque les équipes nationales pilotent seules le dispositif avec un standard de qualité international.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden border border-[#102A43] h-52 shadow-xl group">
                  <Image
                    src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80"
                    alt="Travail de terrain et transfert de compétences universitaires"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-80"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-mono text-[#C7A45D] uppercase tracking-wider block">
                      Transfert Opérationnel
                    </span>
                    <p className="text-white text-sm font-serif">
                      Immersion sur le terrain, audits in situ et formation directe des cadres nationaux.
                    </p>
                  </div>
                </div>

                <div className="bg-[#07111F] p-8 rounded-2xl border border-[#102A43] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C7A45D] uppercase tracking-wider">
                    <FileText className="w-4 h-4 text-[#5CC8E8]" />
                    Récapitulatif des livrables par phase
                  </div>
                  <div className="divide-y divide-[#102A43]/70 font-mono text-xs text-slate-300">
                    {METHOD_STEPS.map((s) => (
                      <div key={s.number} className="py-2.5 flex items-center justify-between">
                        <span className="text-slate-400">Phase {s.number} ({s.name})</span>
                        <span className="text-[#E1C783] text-right truncate max-w-[240px]">{s.keyDeliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1B2E] border border-[#C7A45D]/30 rounded-3xl p-8 sm:p-12 text-center space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-white">
              Initier la Phase 01 pour votre institution
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto font-light">
              Le cadrage préalable permet de déterminer le périmètre exact et les modalités d'intervention sans engagement initial.
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
