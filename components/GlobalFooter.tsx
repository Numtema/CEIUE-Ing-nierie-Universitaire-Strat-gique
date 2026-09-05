import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Mail, Globe, MapPin } from 'lucide-react';

export default function GlobalFooter() {
  return (
    <footer id="global-footer" className="bg-[#050D17] text-[#94A3B8] border-t border-[#102A43] pt-20 pb-12 relative overflow-hidden">
      {/* Constellation line & subtle radial ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C7A45D]/50 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#C7A45D]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-footer Callout Banner */}
        <div className="bg-[#0B1B2E] border border-[#C7A45D]/25 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C7A45D] mb-3">
                <ShieldCheck className="w-4 h-4 text-[#5CC8E8]" />
                ENGAGEMENT INSTITUTIONNEL SOUVERAIN
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FBF8F1] leading-tight">
                Ne plus financer seulement des départs. Bâtir des capacités nationales durables.
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                CEIUE accompagne les gouvernements, agences de bourses et universités africaines pour faire de l'enseignement supérieur le moteur de la souveraineté économique.
              </p>
            </div>
            <div className="shrink-0 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full bg-[#C7A45D] hover:bg-[#E1C783] text-[#07111F] font-bold text-base transition-all duration-200 shadow-xl active:scale-[0.98]"
              >
                <span>Présenter un besoin national</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#102A43]/80">
          {/* Col 1: Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B1B2E] border border-[#C7A45D]/40 flex items-center justify-center text-[#C7A45D]">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <polygon
                    points="50,6 92,28 92,72 50,94 8,72 8,28"
                    stroke="#C7A45D"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle cx="50" cy="50" r="10" fill="#E1C783" />
                  <line x1="50" y1="20" x2="50" y2="80" stroke="#C7A45D" strokeWidth="3" />
                </svg>
              </div>
              <span className="font-serif text-2xl tracking-widest text-[#FBF8F1] uppercase font-bold">
                CEIUE
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Centre d'Expertise et d'Ingénierie Universitaire pour les États africains.
              Transformation stratégique de l'offre de formation, authentification des titres et ancrage souverain des talents.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500 space-y-1">
              <div>Domaine officiel : <span className="text-[#C7A45D]">https://ceiue.org</span></div>
              <div>Direction artistique : <span className="text-slate-300">Souveraineté en mouvement</span></div>
              <div className="flex items-center gap-1.5 pt-1 text-slate-400">
                <Globe className="w-3.5 h-3.5 text-[#5CC8E8]" />
                Afrique & Coopération Internationale
              </div>
            </div>
          </div>

          {/* Col 2: Les Quatre Axes */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] mb-4">
              Les Quatre Axes
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/expertises/audit-offre-formation" className="hover:text-white transition-colors">
                  Stratégie des compétences
                </Link>
              </li>
              <li>
                <Link href="/expertises/authentification-diplomes" className="hover:text-white transition-colors">
                  Authentification des diplômes
                </Link>
              </li>
              <li>
                <Link href="/expertises/bourses-ciblees" className="hover:text-white transition-colors">
                  Bourses ciblées
                </Link>
              </li>
              <li>
                <Link href="/expertises/retour-talents" className="hover:text-white transition-colors">
                  Retour sécurisé des talents
                </Link>
              </li>
              <li>
                <Link href="/expertises/partenariats-universitaires" className="hover:text-white transition-colors">
                  Partenariats internationaux
                </Link>
              </li>
              <li>
                <Link href="/expertises/co-diplomations" className="hover:text-white transition-colors">
                  Co-diplomations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Institutionnelle */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/le-ceiue" className="hover:text-white transition-colors">
                  Le CEIUE & Conviction
                </Link>
              </li>
              <li>
                <Link href="/expertises" className="hover:text-white transition-colors">
                  Toutes les expertises
                </Link>
              </li>
              <li>
                <Link href="/methode" className="hover:text-white transition-colors">
                  La méthode en 6 étapes
                </Link>
              </li>
              <li>
                <Link href="/publics" className="hover:text-white transition-colors">
                  Institutions & Publics
                </Link>
              </li>
              <li>
                <Link href="/ressources" className="hover:text-white transition-colors">
                  Notes & Ressources
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Sécurité */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] mb-4">
              Contact Institutionnel
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/contact" className="text-[#5CC8E8] hover:text-[#E1C783] font-semibold transition-colors">
                  Présenter un besoin national →
                </Link>
              </li>
              <li className="pt-2 text-xs text-slate-400">
                Guichet dédié aux ministères, agences et partenaires accrédités.
              </li>
              <li className="pt-2 text-xs text-slate-500 font-mono">
                Réponse officielle sous 48h ouvrées avec protocole de cadrage.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} CEIUE (Centre d'Expertise et d'Ingénierie Universitaire). Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-slate-300 transition-colors">
              Mentions Légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-slate-300 transition-colors">
              Politique de Confidentialité
            </Link>
            <span className="text-slate-600">|</span>
            <span className="text-[#C7A45D]">Conformité WCAG AA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
