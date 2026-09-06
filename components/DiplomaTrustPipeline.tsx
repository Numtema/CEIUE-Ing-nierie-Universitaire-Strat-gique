'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  FileSearch,
  CheckCircle2,
  Award,
  Globe,
  ArrowRight,
  ArrowLeft,
  Lock,
  Clock,
  Check,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StepData {
  id: string;
  stepNumber: string;
  title: string;
  time: string;
  actor: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  detail: string;
  proof: string;
  badge: string;
}

const PIPELINE_STEPS: StepData[] = [
  {
    id: 'demande',
    stepNumber: '01',
    title: 'Demande',
    time: 'Minute 0',
    actor: "Ministère / Ambassade / Employeur accrédité",
    icon: FileSearch,
    badge: "Requête initiale",
    summary: "Dépôt du titre universitaire et des pièces justificatives sur le guichet national sécurisé.",
    detail: "L'institution requérante soumet une copie numérique haute résolution du diplôme avec numéro de série officiel et consentement légal du titulaire. Le dossier reçoit un identifiant unique d'audit souverain.",
    proof: "Horodatage infalsifiable et journalisation chiffrée"
  },
  {
    id: 'verification',
    stepNumber: '02',
    title: 'Vérification',
    time: '24 heures',
    actor: 'Registre National des Diplômés (CEIUE)',
    icon: Lock,
    badge: "Audit cryptographique",
    summary: "Interrogation cryptographique des procès-verbaux de délibération des universités d'origine.",
    detail: "Croisement automatique et manuel avec les archives officielles de l'établissement émetteur et les registres des rectorats. Élimination des faux procès-verbaux et certificats de complaisance.",
    proof: "Vérification à la source auprès du doyen et de la scolarité centrale"
  },
  {
    id: 'validation',
    stepNumber: '03',
    title: 'Validation',
    time: '48 heures',
    actor: 'Commission de conformité académique',
    icon: CheckCircle2,
    badge: "Accréditation d'État",
    summary: "Contrôle de l'habilitation de la filière et de l'accréditation nationale à l'année de délivrance.",
    detail: "Vérification de la validité légale du cursus : arrêté ministériel d'ouverture, conformité de la maquette LMD, existence effective du jury et délibération solennelle consignée.",
    proof: "Attestation de conformité ministérielle légale"
  },
  {
    id: 'attestation',
    stepNumber: '04',
    title: 'Attestation',
    time: '72 heures max',
    actor: 'Service Souverain de Certification',
    icon: Award,
    badge: "Sceau infalsifiable",
    summary: "Délivrance d'un certificat d'authenticité doté d'une empreinte numérique infalsifiable.",
    detail: "Génération du certificat officiel bilingue revêtu d'un sceau cryptographique et d'un code QR d'intégrité permanente, consultable sans frais par les autorités étrangères et chancelleries.",
    proof: "Certificat scellé avec clé de signature publique"
  },
  {
    id: 'reconnaissance',
    stepNumber: '05',
    title: 'Reconnaissance',
    time: 'Immédiat',
    actor: 'Consulats & Universités mondiales',
    icon: Globe,
    badge: "Validation mondiale",
    summary: "Validation sans contestation des dossiers de visas d'études, concours et équivalences internationales.",
    detail: "Le diplôme national africain bénéficie d'une présomption irréfragable d'authenticité auprès des chancelleries, facilitant les mobilités d'excellence et les recrutements internationaux sans tracasserie.",
    proof: "Interopérabilité avec les systèmes consulaires et académiques mondiaux"
  }
];

export default function DiplomaTrustPipeline() {
  const [activeStep, setActiveStep] = useState(1); // Default on step 02 (as requested in user prompt)
  const current = PIPELINE_STEPS[activeStep];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full bg-white border border-[#E2E8F0] shadow-xl rounded-3xl p-6 sm:p-10 transition-colors">
      {/* Header bar: DIPLOMA TRUST SYSTEM */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E2E8F0]">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EB] border border-[#C7A45D]/40 text-[#9A7B38] text-xs font-mono tracking-widest uppercase mb-3 font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#C7A45D]" />
            DIPLOMA TRUST SYSTEM
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0B1B2E] font-normal tracking-tight">
            Chaîne de confiance académique nationale
          </h3>
          <p className="text-sm text-slate-600 mt-2 font-light">
            Garantie d'intégrité, d'authenticité et de reconnaissance internationale pour chaque diplôme délivré.
          </p>
        </div>

        {/* High-impact sovereign performance chips */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="px-4 py-2.5 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-left">
            <span className="text-[10px] font-mono uppercase text-[#166534] tracking-wider block font-semibold">
              TEMPS MOYEN
            </span>
            <span className="text-sm sm:text-base font-mono font-bold text-[#15803D]">
              &lt; 72H
            </span>
          </div>

          <div className="px-4 py-2.5 rounded-xl bg-[#FAF5EB] border border-[#C7A45D]/40 text-left">
            <span className="text-[10px] font-mono uppercase text-[#9A7B38] tracking-wider block font-semibold">
              RÉSULTAT GARANTI
            </span>
            <span className="text-sm sm:text-base font-mono font-bold text-[#B38E46]">
              ZÉRO FRAUDE DOCUMENTAIRE
            </span>
          </div>
        </div>
      </div>

      {/* 5-Step Horizontal Interactive Timeline */}
      <div className="mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3" role="tablist">
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
                className={`group text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative ${
                  isCurrent
                    ? 'bg-[#0B1B2E] border-[#0B1B2E] text-white shadow-lg ring-2 ring-[#C7A45D]/50'
                    : isPassed
                    ? 'bg-[#FAF8F5] border-[#E2E8F0] hover:border-[#C7A45D] text-[#0B1B2E]'
                    : 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-slate-300 text-slate-500'
                }`}
              >
                {/* Step indicator top line */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isCurrent
                        ? 'bg-[#C7A45D] text-[#0B1B2E]'
                        : isPassed
                        ? 'bg-[#E2E8F0] text-slate-700'
                        : 'bg-slate-200/60 text-slate-500'
                    }`}
                  >
                    {step.stepNumber}
                  </span>

                  <Icon
                    className={`w-4 h-4 ${
                      isCurrent
                        ? 'text-[#E1C783]'
                        : isPassed
                        ? 'text-[#C7A45D]'
                        : 'text-slate-400'
                    }`}
                  />
                </div>

                <div
                  className={`font-semibold text-sm leading-snug ${
                    isCurrent ? 'text-white' : 'text-[#0B1B2E]'
                  }`}
                >
                  {step.title}
                </div>

                <div
                  className={`text-xs font-mono mt-1 ${
                    isCurrent ? 'text-[#E1C783]' : 'text-slate-500'
                  }`}
                >
                  {step.time}
                </div>
              </button>
            );
          })}
        </div>

        {/* Visual Progress Connector Track */}
        <div className="hidden sm:block relative my-6">
          <div className="h-1.5 w-full bg-[#E2E8F0] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#C7A45D] via-[#B38E46] to-[#0B1B2E] rounded-full"
              animate={{ width: `${((activeStep + 1) / PIPELINE_STEPS.length) * 100}%` }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Active Step Inspector Card (Luminous Layout) */}
        <div className="mt-6 bg-[#FAF8F5] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col lg:flex-row lg:items-start justify-between gap-8"
            >
              {/* Left Column: Descriptive Audit Logic */}
              <div className="max-w-2xl space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-[#0B1B2E] text-white">
                    ÉTAPE {current.stepNumber} / 05
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#9A7B38] bg-[#FAF5EB] px-3 py-1 rounded-md border border-[#C7A45D]/30">
                    Acteur : {current.actor}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-serif text-[#0B1B2E] leading-snug font-normal">
                  <span className="font-semibold">{current.title}</span> — {current.summary}
                </h4>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
                  {current.detail}
                </p>
              </div>

              {/* Right Column: Sovereign Guarantee & Estimated Delay */}
              <div className="lg:w-80 shrink-0 bg-white border border-[#C7A45D]/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-4 h-4 text-[#C7A45D]" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#9A7B38] font-bold">
                      Garantie de souveraineté
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#0B1B2E] leading-relaxed font-medium bg-[#FAF8F5] p-3 rounded-xl border border-[#E2E8F0]">
                    {current.proof}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-[#C7A45D]" />
                    <span>Délai estimé</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-[#0B1B2E] px-2.5 py-1 rounded bg-[#FAF5EB] border border-[#C7A45D]/30">
                    {current.time}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Navigation & Legal Notice Footer */}
          <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-mono text-center sm:text-left flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-[#C7A45D] shrink-0" />
              <span>Processus audité conforme aux conventions internationales d'équivalence.</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl border border-[#E2E8F0] text-xs font-mono text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white hover:border-[#C7A45D] transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Précédent</span>
              </button>

              <button
                type="button"
                disabled={activeStep === PIPELINE_STEPS.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(PIPELINE_STEPS.length - 1, prev + 1))}
                className="px-5 py-2 rounded-xl bg-[#C7A45D] hover:bg-[#B38E46] text-[#0B1B2E] text-xs font-mono font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5 shadow-md"
              >
                <span>Étape suivante</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
