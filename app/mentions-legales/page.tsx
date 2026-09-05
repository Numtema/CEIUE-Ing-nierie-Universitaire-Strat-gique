import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';

export const metadata: Metadata = {
  title: 'Mentions Légales | CEIUE',
  description: 'Mentions légales et informations éditoriales officielles de la plateforme CEIUE.',
  alternates: {
    canonical: 'https://ceiue.org/mentions-legales/',
  },
};

export default function LegalNoticePage() {
  return (
    <>
      <GlobalHeader />

      <main className="pt-32 pb-24 bg-[#07111F] text-[#FBF8F1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-[#C7A45D]">Mentions Légales</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-5xl text-white">
            Mentions Légales
          </h1>

          <div className="space-y-6 text-sm sm:text-base text-slate-300 font-light leading-relaxed bg-[#0B1B2E] border border-[#102A43] p-8 rounded-2xl">
            <section className="space-y-2">
              <h2 className="font-serif text-xl text-[#E1C783]">1. Éditeur de la plateforme</h2>
              <p>
                Le site officiel accessible à l'adresse <strong>https://ceiue.org</strong> est édité par le <strong>CEIUE (Centre d'Expertise et d'Ingénierie Universitaire)</strong>, organisation dédiée à l'accompagnement des États africains dans la transformation stratégique de leur enseignement supérieur.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-[#102A43]">
              <h2 className="font-serif text-xl text-[#E1C783]">2. Objet du site</h2>
              <p>
                La plateforme a pour objet d'informer les gouvernements, ministères, agences nationales de bourses, universités et partenaires institutionnels sur les expertises, la méthode et les modalités d'intervention du CEIUE.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-[#102A43]">
              <h2 className="font-serif text-xl text-[#E1C783]">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble des contenus (textes, concepts, graphiques, architecture méthodologique, logos, monogrammes et codes) relève de la législation internationale sur le droit d'auteur et la propriété intellectuelle. Toute reproduction ou utilisation non expressément autorisée par le directoire du CEIUE est strictement interdite.
              </p>
            </section>

            <section className="space-y-2 pt-4 border-t border-[#102A43]">
              <h2 className="font-serif text-xl text-[#E1C783]">4. Protection des échanges institutionnels</h2>
              <p>
                Les demandes formulées via le formulaire « Présenter un besoin national » sont traitées dans le respect du secret professionnel et institutionnel le plus rigoureux.
              </p>
            </section>
          </div>
        </div>
      </main>

      <GlobalFooter />
    </>
  );
}
