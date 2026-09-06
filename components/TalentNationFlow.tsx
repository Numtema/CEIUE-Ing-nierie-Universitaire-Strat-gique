'use client';

import React, { useState } from 'react';
import { Target, Compass, GraduationCap, Building2, Briefcase, ChevronRight } from 'lucide-react';

const TALENT_STAGES = [
  {
    step: '01',
    title: 'Besoin national',
    tag: 'Politique publique',
    icon: Target,
    actor: 'Ministère sectoriel & Planification',
    goal: 'Identifier les filières souveraines en pénurie critique (ex : oncologie, cybersécurité, énergie solaire, génie civil).',
    publicImpact: 'Les fonds publics ne sont plus attribués au hasard mais ciblés sur les besoins de développement du pays.'
  },
  {
    step: '02',
    title: 'Bourse ciblée',
    tag: 'Sélection & Contrat',
    icon: Compass,
    actor: 'Agence nationale des bourses',
    goal: 'Attribution sur mérite avec convention tripartite et engagement solennel de retour au terme du cursus.',
    publicImpact: 'Sécurisation juridique des deniers de l\'État et responsabilisation mutuelle.'
  },
  {
    step: '03',
    title: 'Formation internationale',
    tag: 'Excellence & Mentorat',
    icon: GraduationCap,
    actor: 'Universités partenaires mondiales',
    goal: 'Acquisition des savoirs de pointe dans des pôles d\'excellence tout en maintenant un lien continu avec l\'administration de tutelle.',
    publicImpact: 'Tutorat académique et veilles trimestrielles pour prévenir la déconnexion avec la nation.'
  },
  {
    step: '04',
    title: 'Préparation du retour',
    tag: 'Anticipation à J-12 mois',
    icon: Building2,
    actor: 'Guichet unique Retour des Talents',
    goal: 'Dès la dernière année, identification du poste cible, homologation préalable du diplôme et préparation logistique.',
    publicImpact: 'Suppression du sas de précarité au retour et intégration directe dans les projets structurants.'
  },
  {
    step: '05',
    title: 'Insertion & Suivi 24 mois',
    tag: 'Impact souverain',
    icon: Briefcase,
    actor: 'Institutions d\'accueil & Pôles industriels',
    goal: 'Prise de fonction, transfert méthodologique, participation à des comités nationaux et suivi d\'évolution sur deux ans.',
    publicImpact: 'Rétention pérenne, diffusion du savoir et renforcement durable des capacités de l\'État.'
  }
];

export default function TalentNationFlow() {
  const [activeStage, setActiveStage] = useState(0);
  const current = TALENT_STAGES[activeStage];

  return (
    <div className="w-full bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-10 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EB] border border-[#C7A45D]/40 text-[#9A7B38] text-xs font-mono tracking-widest uppercase mb-2 font-semibold">
            <Building2 className="w-3.5 h-3.5 text-[#C7A45D]" />
            TALENT NATION FLOW
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1B2E] font-normal">
            Trajectoire de souveraineté des compétences
          </h3>
        </div>
        <div className="font-mono text-xs text-slate-600 max-w-xs">
          Passer d’une politique de départ passif à une dynamique active de formation et d’ancrage national.
        </div>
      </div>

      {/* Horizontal Step Pills on Desktop / Responsive List */}
      <div className="mt-8 flex flex-col lg:flex-row items-stretch gap-3">
        {TALENT_STAGES.map((st, idx) => {
          const Icon = st.icon;
          const isSelected = activeStage === idx;
          return (
            <button
              key={st.step}
              onClick={() => setActiveStage(idx)}
              className={`flex-1 text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-[#0B1B2E] border-[#0B1B2E] text-white shadow-lg ring-2 ring-[#C7A45D]/50'
                  : 'bg-[#FAF8F5] border-[#E2E8F0] text-[#0B1B2E] hover:border-[#C7A45D]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-[#C7A45D] text-[#0B1B2E]' : 'bg-slate-200/60 text-slate-700'
                  }`}
                >
                  {st.step}
                </span>
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#E1C783]' : 'text-[#C7A45D]'}`} />
              </div>
              <h4 className={`text-sm font-semibold mb-1 ${isSelected ? 'text-white' : 'text-[#0B1B2E]'}`}>
                {st.title}
              </h4>
              <span className={`text-[11px] font-mono block ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                {st.tag}
              </span>
            </button>
          );
        })}
      </div>

      {/* Highlight Box */}
      <div className="mt-6 bg-[#FAF8F5] border border-[#E2E8F0] rounded-2xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#0B1B2E] text-white font-bold">
                PHASE {current.step}
              </span>
              <span className="font-mono text-xs text-[#9A7B38] bg-[#FAF5EB] px-2.5 py-0.5 rounded border border-[#C7A45D]/30 font-semibold">
                Pilotage : {current.actor}
              </span>
            </div>
            <h4 className="text-xl md:text-2xl font-serif text-[#0B1B2E] mb-2 font-normal">
              {current.title}
            </h4>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4 font-light">
              {current.goal}
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-sm">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#9A7B38] font-bold block mb-1">
                Résultat pour la politique publique :
              </span>
              <p className="text-xs md:text-sm text-[#0B1B2E] font-medium leading-relaxed">
                {current.publicImpact}
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-white p-6 rounded-2xl border border-[#C7A45D]/40 shadow-sm flex flex-col justify-between h-full space-y-4">
            <div>
              <span className="text-xs font-mono text-[#9A7B38] uppercase tracking-wider font-bold block mb-2">
                Principe fondamental
              </span>
              <p className="text-xs text-slate-700 italic leading-relaxed bg-[#FAF8F5] p-3 rounded-xl border border-[#E2E8F0]">
                « Les budgets d’études internationales ne doivent pas être une subvention à l’émigration définitive mais un contrat de souveraineté partagée. »
              </p>
            </div>
            <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">Étape {activeStage + 1} sur 5</span>
              <button
                onClick={() => setActiveStage((prev) => (prev + 1) % TALENT_STAGES.length)}
                className="text-[#9A7B38] hover:text-[#0B1B2E] font-bold flex items-center gap-1 cursor-pointer"
              >
                Suivant <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
