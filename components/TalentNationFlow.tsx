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
    <div className="w-full bg-[#07111F] border border-[#102A43] rounded-2xl p-6 sm:p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#102A43]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5CC8E8]/10 border border-[#5CC8E8]/30 text-[#5CC8E8] text-xs font-mono tracking-widest uppercase mb-2">
            <Building2 className="w-3.5 h-3.5 text-[#C7A45D]" />
            TALENT NATION FLOW
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white">
            Trajectoire de souveraineté des compétences
          </h3>
        </div>
        <div className="font-mono text-xs text-slate-400 max-w-xs">
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
              className={`flex-1 text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-[#102A43] border-[#C7A45D] ring-1 ring-[#C7A45D]'
                  : 'bg-[#0B1B2E]/70 border-[#102A43] hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#C7A45D]' : 'text-slate-500'}`}>
                  {st.step}
                </span>
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#E1C783]' : 'text-slate-500'}`} />
              </div>
              <h4 className={`text-sm font-semibold mb-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                {st.title}
              </h4>
              <span className="text-[11px] font-mono text-slate-400 block">
                {st.tag}
              </span>
            </button>
          );
        })}
      </div>

      {/* Highlight Box */}
      <div className="mt-6 bg-[#0B1B2E] border border-[#C7A45D]/20 rounded-xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#C7A45D]/10 text-[#C7A45D] border border-[#C7A45D]/30">
                PHASE {current.step}
              </span>
              <span className="font-mono text-xs text-[#5CC8E8]">
                Pilotage : {current.actor}
              </span>
            </div>
            <h4 className="text-xl md:text-2xl font-serif text-white mb-2">
              {current.title}
            </h4>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
              {current.goal}
            </p>
            <div className="p-4 rounded-lg bg-[#07111F] border border-[#102A43]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C7A45D] block mb-1">
                Résultat pour la politique publique
              </span>
              <p className="text-xs md:text-sm text-slate-200">
                {current.publicImpact}
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#102A43]/50 p-5 rounded-xl border border-[#102A43] flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-mono text-[#E1C783] uppercase tracking-wider block mb-2">
                Principe fondamental
              </span>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                « Les budgets d’études internationales ne doivent pas être une subvention à l’émigration définitive mais un contrat de souveraineté partagée. »
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Étape {activeStage + 1} sur 5</span>
              <button
                onClick={() => setActiveStage((prev) => (prev + 1) % TALENT_STAGES.length)}
                className="text-[#5CC8E8] hover:text-[#E1C783] font-semibold flex items-center gap-1 cursor-pointer"
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
