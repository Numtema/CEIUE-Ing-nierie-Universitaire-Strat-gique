'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  CheckCircle2,
  QrCode,
  Award,
  Sparkles,
  ExternalLink,
  Lock,
  GraduationCap,
  Globe2,
  TrendingUp,
} from 'lucide-react';

export default function HeroVisualBento() {
  const [verified, setVerified] = useState(true);
  const [verifying, setVerifying] = useState(false);

  const triggerVerification = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setVerified(true);
    }, 700);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto flex flex-col gap-5">
      {/* Glow aura behind the bento */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#C7A45D]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#5CC8E8]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Card: Interactive Sovereign Digital Diploma Verification Specimen */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#0F2238] via-[#0B1B2E] to-[#07111F] p-6 sm:p-7 border border-[#C7A45D]/40 shadow-2xl overflow-hidden backdrop-blur-xl group hover:border-[#C7A45D] transition-all duration-300">
        {/* Subtle radial sheen */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#C7A45D]/10 to-transparent pointer-events-none" />

        {/* Header line of the specimen */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#102A43]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C7A45D]/10 border border-[#C7A45D]/30 flex items-center justify-center text-[#C7A45D] shadow-inner">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#C7A45D] font-semibold">
                  RÉPUBLIQUE • MINISTÈRE DE TUTELLE
                </span>
              </div>
              <p className="text-xs text-white font-medium">
                Registre National Unifié des Titres Supérieurs
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#327A55]/20 border border-[#327A55]/40 text-[#B8D94E] text-[10px] font-mono font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8D94E] animate-ping" />
            VÉRIFICATION INFALSIFIABLE
          </span>
        </div>

        {/* Specimen body */}
        <div className="py-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#07111F]/80 p-3.5 rounded-xl border border-[#102A43]">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                Titulaire du diplôme homologué
              </span>
              <p className="text-sm font-serif text-white font-semibold flex items-center gap-2">
                Dr. Awa KOUAMÉ-DIOP
                <span className="text-[10px] font-mono font-normal text-[#5CC8E8] bg-[#5CC8E8]/10 px-1.5 py-0.5 rounded border border-[#5CC8E8]/30">
                  Doctorat d'État
                </span>
              </p>
              <p className="text-xs text-slate-300 font-light">
                Génie Biomédical & Virologie Appliquée • Pôle Régional
              </p>
            </div>

            {/* QR Micro code simulated */}
            <div className="flex items-center gap-2 sm:self-center shrink-0 bg-[#0B1B2E] p-2 rounded-lg border border-[#102A43]">
              <QrCode className="w-9 h-9 text-[#E1C783]" />
              <div className="text-[9px] font-mono text-slate-400 leading-tight">
                <div>HASH SOUVERAIN</div>
                <div className="text-[#5CC8E8]">CEIUE-89F3A</div>
              </div>
            </div>
          </div>

          {/* Real-time verification state simulation bar */}
          <div className="p-3.5 rounded-xl bg-[#081524] border border-[#102A43] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  verifying
                    ? 'bg-[#E1C783]/20 text-[#E1C783] animate-spin'
                    : 'bg-[#327A55]/20 text-[#B8D94E]'
                }`}
              >
                {verifying ? (
                  <Sparkles className="w-4 h-4" />
                ) : (
                  <CheckCircle2 className="w-4 h-4" />
                )}
              </div>
              <div className="text-left">
                <div className="text-xs text-white font-mono font-medium">
                  {verifying
                    ? 'Interrogation du registre...'
                    : 'Attestation certifiée authentique'}
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  Horodatage blockchain souveraine • Clé d'État délivrée
                </div>
              </div>
            </div>

            <button
              onClick={triggerVerification}
              disabled={verifying}
              className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-[#0F263E] hover:bg-[#153454] text-[#C7A45D] hover:text-white border border-[#C7A45D]/30 transition-all active:scale-95 cursor-pointer shrink-0"
            >
              {verifying ? 'Analyse...' : 'Tester le registre'}
            </button>
          </div>
        </div>

        {/* Bottom telemetry indicators */}
        <div className="pt-3 border-t border-[#102A43] flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Lock className="w-3.5 h-3.5 text-[#C7A45D]" />
            Chiffrement asymétrique régalien
          </span>
          <span className="text-[#5CC8E8]">Homologation &lt; 72h</span>
        </div>
      </div>

      {/* Floating Bento Row: Editorial Photography + Live Impact Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Photographic Card 1: Modern Campus & Faculty */}
        <div className="relative rounded-2xl overflow-hidden border border-[#102A43] group hover:border-[#C7A45D]/50 transition-all duration-300 h-44">
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
            alt="Campus universitaire moderne et étudiants en ingénierie"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
            sizes="(max-width: 768px) 100vw, 300px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/50 to-transparent" />
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <span className="self-start px-2 py-0.5 rounded-full bg-[#07111F]/80 backdrop-blur-md border border-[#C7A45D]/40 text-[#C7A45D] text-[10px] font-mono uppercase tracking-wider">
              Académique
            </span>
            <div>
              <p className="text-white text-xs font-serif font-medium leading-snug">
                Filières critiques & ingénierie souveraine
              </p>
              <p className="text-[10px] font-mono text-[#5CC8E8] mt-0.5">
                48 universités partenaires
              </p>
            </div>
          </div>
        </div>

        {/* Photographic Card 2: Strategic Tech & Talent Return */}
        <div className="relative rounded-2xl overflow-hidden border border-[#102A43] group hover:border-[#C7A45D]/50 transition-all duration-300 h-44">
          <Image
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
            alt="Chercheurs et ingénieurs africains en pôle d'innovation technologique"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
            sizes="(max-width: 768px) 100vw, 300px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/50 to-transparent" />
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <span className="self-start px-2 py-0.5 rounded-full bg-[#07111F]/80 backdrop-blur-md border border-[#5CC8E8]/40 text-[#5CC8E8] text-[10px] font-mono uppercase tracking-wider">
              Talent Nation
            </span>
            <div>
              <p className="text-white text-xs font-serif font-medium leading-snug">
                Insertion & rétention de la diaspora
              </p>
              <p className="text-[10px] font-mono text-[#B8D94E] mt-0.5">
                94% de retour effectif
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
