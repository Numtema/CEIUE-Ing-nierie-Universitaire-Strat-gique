import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | CEIUE',
  description: 'Engagements de sécurité et politique de confidentialité des données du CEIUE.',
  alternates: {
    canonical: 'https://ceiue.org/politique-confidentialite/',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <GlobalHeader />

      <main className="pt-32 pb-24 bg-[#07111F] text-[#FBF8F1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-[#C7A45D]">Politique de Confidentialité</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-5xl text-white">
            Politique de Confidentialité
          </h1>

          <div className="space-y-6 text-sm sm:text-base text-slate-300 font-light leading-relaxed bg-[#0B1B2E] border border-[#102A43] p-8 rounded-2xl">
            <section className="space-y-2">
              <h2 className="font-serif text-xl text-[#E1C783]">1. Principe directeur de souveraineté</h2>
              <p>
                Le CEIUE applique les normes les plus strictes en matière de protection des données administratives, diplomatiques et académiques. Aucune donnée collectée ne fait l'objet de commercialisation, de profilage publicitaire ou de transmission à des tiers non habilités.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-[#102A43]">
              <h2 className="font-serif text-xl text-[#E1C783]">2. Données collectées</h2>
              <p>
                Dans le cadre des formulaires institutionnels de saisine préalable, les seules informations requises concernent l'identité du représentant officiel (nom, fonction, courriel professionnel), l'organisme public mandant et la description générale du besoin national.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-[#102A43]">
              <h2 className="font-serif text-xl text-[#E1C783]">3. Durée de conservation & Sécurité</h2>
              <p>
                Les dossiers sont archivés dans un environnement crypté doté d'accès restreints aux seuls membres du directoire et experts assermentés. Les données relatives aux démarches exploratoires non suivies d'effet sont supprimées dans les délais réglementaires légaux.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-[#102A43]">
              <h2 className="font-serif text-xl text-[#E1C783]">4. Droits d'accès et de rectification</h2>
              <p>
                Toute institution ou tout représentant mandaté peut exercer à tout moment ses droits de rectification ou de suppression des informations transmises en adressant une requête via le guichet officiel.
              </p>
            </section>
          </div>
        </div>
      </main>

      <GlobalFooter />
    </>
  );
}
