'use client';

import React, { useState } from 'react';
import { ShieldCheck, FileSearch, CheckCircle2, Award, Globe, ArrowRight, Lock } from 'lucide-react';

const PIPELINE_STEPS = [
  {
    id: 'demande',
    title: 'Demande',
    short: '01. Requête',
    icon: FileSearch,
    actor: 'Ministère / Ambassade / Employeur',
    time: 'Minute 0',
    summary: 'Dépôt du titre universitaire et des pièces justificatives sur le guichet national sécurisé.',
    detail: 'L\'institution requérante soumet une copie numérique haute résolution du diplôme avec numéro de série et consentement légal du titulaire. Le dossier reçoit un identifiant unique d\'audit.',
    proof: 'Horodatage infalsifiable et journalisation chiffrée'
  },
  {
    id: 'verification',
    title: 'Vérification',
    short: '02. Registre',
    icon: Lock,
    actor: 'Registre National des Diplômés (CEIUE)',
    time: '24 heures',
    summary: 'Interrogation cryptographique des procès-verbaux de délibération des universités d\'origine.',
    detail: 'Croisement automatique et manuel avec les archives officielles de l\'établissement émetteur et les registres des rectorats. Élimination des faux procès-verbaux et certificats de complaisance.',
    proof: 'Vérification à la source auprès du doyen et de la scolarité centrale'
  },
  {
    id: 'validation',
    title: 'Validation',
    short: '03. Collège',
    icon: CheckCircle2,
    actor: 'Commission de conformité académique',
    time: '48 heures',
    summary: 'Contrôle de l\'habilitation de la filière et de l\'accréditation nationale à l\'année de délivrance.',
    detail: 'Vérification de la validité légale du cursus : arrêté ministériel d\'ouverture, conformité de la maquette LMD, existence effective du jury et délibération solennelle.',
    proof: 'Attestation de conformité ministérielle légale'
  },
  {
    id: 'attestation',
    title: 'Attestation',
    short: '04. Certificat',
    icon: Award,
    actor: 'Service Souverain de Certification',
    time: '72 heures max',
    summary: 'Délivrance d\'un certificat d\'authenticité doté d\'une empreinte numérique infalsifiable.',
    detail: 'Génération du certificat officiel bilingue revêtu d\'un sceau cryptographique et d\'un code QR d\'intégrité permanente, consultable sans frais par les autorités étrangères.',
    proof: 'Certificat scellé avec clé de signature publique'
  },
  {
    id: 'reconnaissance',
    title: 'Reconnaissance',
    short: '05. Rayonnement',
    icon: Globe,
    actor: 'Consulats & Universités mondiales',
    time: 'Immédiat',
    summary: 'Validation sans contestation des dossiers de visas d\'études, concours et équivalences internationales.',
    detail: 'Le diplôme national africain bénéficie d\'une présomption irréfragable d\'authenticité auprès des chancelleries, facilitant les mobilités d\'excellence et les recrutements internationaux.',
    proof: 'Interopérabilité avec les systèmes consulaires et académiques mondiaux'
  }
];

export default function DiplomaTrustPipeline() {
  const [activeStep, setActiveStep] = useState(1);
  const current = PIPELINE_STEPS[activeStep];

  return (
    <div className="w-full bg-[#0B1B2E] border border-[#C7A45D]/20 rounded-2xl p-6 sm:p-10 shadow-2xl">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#102A43]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A45D]/10 border border-[#C7A45D]/30 text-[#E1C783] text-xs font-mono tracking-widest uppercase mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#5CC8E8]" />
            DIPLOMA TRUST SYSTEM
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF8F1]">
            Chaîne de confiance académique nationale
          </h3>
        </div>
        <div className="text-left md:text-right font-mono text-xs text-[#94A3B8]">
          <span className="text-[#5CC8E8] font-bold">TEMPS MOYEN</span> : &lt; 72H
          <span className="block text-[#C7A45D]">ZÉRO FRAUDE DOCUMENTAIRE</span>
        </div>
      </div>

      {/* Interactive Step Navigator */}
      <div className="mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3" role="tablist">
          {PIPELINE_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;
            const isPassed = idx < activeStep;
            return (
              <button
                key={step.id}
                role="tab"
                aria-selected={isCurrent}
                onClick={() => setActiveStep(idx)}
                className={`group text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#102A43] border-[#C7A45D] ring-1 ring-[#C7A45D] shadow-lg'
                    : isPassed
                    ? 'bg-[#07111F]/70 border-[#5CC8E8]/40 text-[#FBF8F1] hover:border-[#5CC8E8]'
                    : 'bg-[#07111F]/40 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono tracking-wider ${isCurrent ? 'text-[#C7A45D]' : 'text-slate-500'}`}>
                    0{idx + 1}
                  </span>
                  <Icon className={`w-4 h-4 ${isCurrent ? 'text-[#E1C783]' : isPassed ? 'text-[#5CC8E8]' : 'text-slate-600'}`} />
                </div>
                <div className={`font-semibold text-sm leading-tight ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 truncate">
                  {step.time}
                </div>
              </button>
            );
          })}
        </div>

        {/* Visual Connector Line */}
        <div className="hidden sm:block relative my-6">
          <div className="h-1 w-full bg-[#102A43] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#C7A45D] via-[#5CC8E8] to-[#E1C783] transition-all duration-300 rounded-full"
              style={{ width: `${((activeStep + 1) / PIPELINE_STEPS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Detailed View */}
        <div className="mt-6 bg-[#07111F] border border-[#102A43] rounded-xl p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#C7A45D]/15 text-[#E1C783] border border-[#C7A45D]/30">
                  ÉTAPE 0{activeStep + 1} / 05
                </span>
                <span className="text-xs font-mono text-[#5CC8E8] tracking-wide">
                  Acteur : {current.actor}
                </span>
              </div>
              <h4 className="text-xl md:text-2xl font-serif text-white mb-3">
                {current.title} — {current.summary}
              </h4>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {current.detail}
              </p>
            </div>

            <div className="bg-[#0B1B2E] border border-[#C7A45D]/20 rounded-xl p-5 min-w-[260px] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7A45D] block mb-1">
                  Garantie de souveraineté
                </span>
                <p className="text-xs text-[#FBF8F1] leading-relaxed font-medium">
                  {current.proof}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-[#102A43] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Délai estimé</span>
                <span className="text-xs font-mono font-semibold text-[#5CC8E8]">{current.time}</span>
              </div>
            </div>
          </div>

          {/* Step action footer */}
          <div className="mt-6 pt-5 border-t border-[#102A43]/80 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-mono">
              Processus audité conforme aux conventions internationales d'équivalence.
            </div>
            <div className="flex items-center gap-2">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-slate-500"
              >
                Précédent
              </button>
              <button
                disabled={activeStep === PIPELINE_STEPS.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(PIPELINE_STEPS.length - 1, prev + 1))}
                className="px-3 py-1.5 rounded-lg bg-[#C7A45D] text-[#07111F] text-xs font-semibold hover:bg-[#E1C783] disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
              >
                Étape suivante
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
