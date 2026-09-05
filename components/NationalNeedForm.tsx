'use client';

import React, { useState } from 'react';
import { ShieldCheck, CheckCircle, Send, AlertCircle, ArrowRight, RefreshCw, FileText } from 'lucide-react';

interface FormData {
  organization: string;
  country: string;
  needType: string;
  message: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  consent: boolean;
}

interface FormErrors {
  organization?: string;
  country?: string;
  needType?: string;
  message?: string;
  name?: string;
  email?: string;
  consent?: string;
}

const NEED_TYPES = [
  { id: 'reforme-offre', label: "Audit & Alignement de l'offre de formation" },
  { id: 'authentification', label: "Authentification des diplômes & Registre national" },
  { id: 'bourses-ciblees', label: "Dispositif de bourses ciblées & filières manquantes" },
  { id: 'retour-talents', label: "Programme de retour sécurisé des talents" },
  { id: 'partenariat-codiplomation', label: "Partenariats universitaires & Co-diplomations" },
  { id: 'cadres-publics', label: "Formation des cadres dirigeants de l'enseignement supérieur" },
  { id: 'autre', label: "Autre enjeu stratégique national" },
];

export default function NationalNeedForm() {
  const [data, setData] = useState<FormData>({
    organization: '',
    country: '',
    needType: 'reforme-offre',
    message: '',
    name: '',
    role: '',
    email: '',
    phone: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [successReceipt, setSuccessReceipt] = useState<{
    refCode: string;
    timestamp: string;
    details: FormData;
  } | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!data.organization.trim()) {
      errs.organization = "Veuillez préciser le nom de votre institution ou ministère.";
    }
    if (!data.country.trim()) {
      errs.country = "Veuillez indiquer le pays ou la zone géographique concernée.";
    }
    if (!data.needType) {
      errs.needType = "Veuillez sélectionner la nature du besoin.";
    }
    if (!data.message.trim() || data.message.length < 20) {
      errs.message = "Veuillez décrire le besoin national en au moins 20 caractères.";
    }
    if (!data.name.trim()) {
      errs.name = "Veuillez renseigner votre nom et prénom.";
    }
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = "Veuillez fournir une adresse email institutionnelle valide.";
    }
    if (!data.consent) {
      errs.consent = "Votre consentement au traitement confidentiel des données est requis.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate high-standard institutional submission
    setTimeout(() => {
      const year = new Date().getFullYear();
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const code = `CEIUE-${year}-${randomSuffix}`;
      const now = new Date().toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      setSuccessReceipt({
        refCode: code,
        timestamp: now,
        details: { ...data },
      });
      setSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setData({
      organization: '',
      country: '',
      needType: 'reforme-offre',
      message: '',
      name: '',
      role: '',
      email: '',
      phone: '',
      consent: false,
    });
    setErrors({});
    setSuccessReceipt(null);
  };

  if (successReceipt) {
    return (
      <div className="bg-[#0B1B2E] border border-[#C7A45D]/40 rounded-2xl p-6 sm:p-10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center gap-3 pb-6 border-b border-[#102A43]">
          <div className="w-12 h-12 rounded-full bg-[#327A55]/20 border border-[#327A55] flex items-center justify-center text-[#B8D94E]">
            <CheckCircle className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#5CC8E8] uppercase tracking-wider">
                Dossier Institutionnel Enregistré
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#C7A45D]/20 text-[#E1C783] border border-[#C7A45D]/40">
                {successReceipt.refCode}
              </span>
            </div>
            <h3 className="font-serif text-2xl text-white">
              Votre besoin national a été transmis au directoire du CEIUE
            </h3>
          </div>
        </div>

        <div className="py-6 space-y-6">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Un accusé de réception officiel accompagné d'un protocole de cadrage préalable vous sera communiqué à l'adresse <strong className="text-white">{successReceipt.details.email}</strong> dans un délai de <strong>48 heures ouvrées</strong>.
          </p>

          <div className="bg-[#07111F] rounded-xl border border-[#102A43] p-5 space-y-3 font-mono text-xs text-slate-300">
            <div className="flex justify-between border-b border-[#102A43] pb-2">
              <span className="text-slate-500">RÉFÉRENCE DU DOSSIER :</span>
              <span className="text-[#C7A45D] font-bold">{successReceipt.refCode}</span>
            </div>
            <div className="flex justify-between border-b border-[#102A43] pb-2">
              <span className="text-slate-500">DATE DE SOUMISSION :</span>
              <span>{successReceipt.timestamp}</span>
            </div>
            <div className="flex justify-between border-b border-[#102A43] pb-2">
              <span className="text-slate-500">ORGANISATION :</span>
              <span className="text-white">{successReceipt.details.organization} ({successReceipt.details.country})</span>
            </div>
            <div className="flex justify-between border-b border-[#102A43] pb-2">
              <span className="text-slate-500">REPRÉSENTANT :</span>
              <span>{successReceipt.details.name} {successReceipt.details.role ? `(${successReceipt.details.role})` : ''}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">OBJET DU BESOIN :</span>
              <span className="text-[#5CC8E8]">{NEED_TYPES.find((t) => t.id === successReceipt.details.needType)?.label}</span>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#102A43]/50 border border-[#102A43] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C7A45D] shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 leading-relaxed">
              Toutes les données échangées demeurent protégées par le secret institutionnel et ne font l'objet d'aucune exploitation commerciale ou publique non autorisée.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-[#102A43] flex justify-end">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 text-xs font-mono text-slate-300 hover:text-white hover:border-[#C7A45D] transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Soumettre un autre besoin
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="national-need-form"
      className="bg-[#0B1B2E] border border-[#C7A45D]/25 rounded-2xl p-6 sm:p-10 shadow-2xl"
      noValidate
    >
      <div className="border-b border-[#102A43] pb-6 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A45D]/10 border border-[#C7A45D]/30 text-[#C7A45D] text-xs font-mono tracking-widest uppercase mb-2">
          <FileText className="w-3.5 h-3.5 text-[#5CC8E8]" />
          CADRAGE DE BESOIN INSTITUTIONNEL
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-white">
          Formulaire de saisine préalable
        </h3>
        <p className="text-sm text-slate-400 mt-2">
          Réservé aux gouvernements, ministères, agences de bourses, rectorats et organisations internationales.
        </p>
      </div>

      <div className="space-y-6">
        {/* Row 1: Organization & Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="organization" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
              Organisation ou Ministère *
            </label>
            <input
              id="organization"
              type="text"
              placeholder="ex : Ministère de l'Enseignement Supérieur"
              value={data.organization}
              onChange={(e) => setData({ ...data, organization: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl bg-[#07111F] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C7A45D] ${
                errors.organization ? 'border-[#B42318]' : 'border-[#102A43]'
              }`}
            />
            {errors.organization && (
              <p className="mt-1.5 text-xs text-[#B42318] flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.organization}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="country" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
              Pays ou Zone géographique *
            </label>
            <input
              id="country"
              type="text"
              placeholder="ex : Sénégal, Côte d'Ivoire, RDC, zone CEMAC..."
              value={data.country}
              onChange={(e) => setData({ ...data, country: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl bg-[#07111F] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C7A45D] ${
                errors.country ? 'border-[#B42318]' : 'border-[#102A43]'
              }`}
            />
            {errors.country && (
              <p className="mt-1.5 text-xs text-[#B42318] flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.country}
              </p>
            )}
          </div>
        </div>

        {/* Need Type Selection */}
        <div>
          <label htmlFor="needType" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
            Nature prioritaire de l'enjeu *
          </label>
          <select
            id="needType"
            value={data.needType}
            onChange={(e) => setData({ ...data, needType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-[#102A43] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C7A45D]"
          >
            {NEED_TYPES.map((t) => (
              <option key={t.id} value={t.id} className="bg-[#07111F] text-white">
                {t.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message / Strategic scope */}
        <div>
          <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
            Description synthétique de la situation et des objectifs *
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Précisez le contexte national, les difficultés rencontrées, les filières concernées et les échéances souhaitées..."
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-[#07111F] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C7A45D] ${
              errors.message ? 'border-[#B42318]' : 'border-[#102A43]'
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-[#B42318] flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#102A43]">
          <div>
            <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
              Nom et Prénom du déclarant *
            </label>
            <input
              id="name"
              type="text"
              placeholder="ex : Dr. Awa Diallo"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl bg-[#07111F] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C7A45D] ${
                errors.name ? 'border-[#B42318]' : 'border-[#102A43]'
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-[#B42318] flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="role" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
              Fonction ou Titre officiel
            </label>
            <input
              id="role"
              type="text"
              placeholder="ex : Conseiller technique, Directeur des bourses..."
              value={data.role}
              onChange={(e) => setData({ ...data, role: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-[#102A43] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C7A45D]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
              Courriel institutionnel *
            </label>
            <input
              id="email"
              type="email"
              placeholder="adresse@gouvernement.gouv... ou @univ..."
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl bg-[#07111F] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C7A45D] ${
                errors.email ? 'border-[#B42318]' : 'border-[#102A43]'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-[#B42318] flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
              Téléphone ou Ligne directe (optionnel)
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+221 ... / +225 ..."
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-[#102A43] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C7A45D]"
            />
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={data.consent}
              onChange={(e) => setData({ ...data, consent: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-slate-700 bg-[#07111F] text-[#C7A45D] focus:ring-[#C7A45D]"
            />
            <span className="text-xs text-slate-300 leading-relaxed">
              J'atteste représenter une institution ou autorité publique habilitée et accepte le traitement confidentiel de ces informations conformément aux dispositions de la politique de sécurité du CEIUE.
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1.5 text-xs text-[#B42318] flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.consent}
            </p>
          )}
        </div>

        {/* Submit button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-slate-500">
            Délai moyen de prise en charge : 48h ouvrées
          </span>
          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-12 rounded-full bg-[#C7A45D] hover:bg-[#E1C783] text-[#07111F] font-bold text-sm transition-all duration-200 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98]"
          >
            {submitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Enregistrement du dossier...</span>
              </>
            ) : (
              <>
                <span>Transmettre le besoin national</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
