'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
  Award,
  Sparkles,
  ExternalLink,
  MapPin,
  TrendingUp,
} from 'lucide-react';
import { CASE_STUDIES } from '@/lib/data/expertises';

interface GalleryItem {
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl: string;
  metric: string;
  metricLabel: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: "Amphithéâtres & Ingénierie Pédagogique",
    category: "Audit des Cursus",
    location: "Dakar, Sénégal",
    description: "Transformation des maquettes pédagogiques pour aligner 100% des cours sur les besoins industriels et technologiques du pays.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80",
    metric: "360°",
    metricLabel: "Audit des maquettes",
  },
  {
    title: "Laboratoires Biomédicaux & Recherche de Pointe",
    category: "Filières Critiques",
    location: "Abidjan, Côte d'Ivoire",
    description: "Équipements et bourses ciblées pour former les chercheurs et virologues qui assurent la souveraineté sanitaire du continent.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    metric: "450",
    metricLabel: "Chercheurs financés",
  },
  {
    title: "Diaspora Tech & Rétention des Ingénieurs",
    category: "Talent Nation",
    location: "Kigali, Rwanda",
    description: "Accompagnement tripartite pour le retour sécurisé des docteurs et ingénieurs de la diaspora dans les ministères et pôles d'innovation.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    metric: "94%",
    metricLabel: "Taux de rétention",
  },
  {
    title: "Cérémonies Officielles & Diplômes Inviolables",
    category: "Registre National",
    location: "Panafricain",
    description: "Délivrance de titres d'État certifiés avec sceaux cryptographiques, reconnus instantanément par les ambassades et recruteurs mondiaux.",
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
    metric: "< 48h",
    metricLabel: "Délai de vérification",
  },
];

export default function VisualImpactGallery() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'cases'>('gallery');

  return (
    <section className="py-24 bg-[#07111F] text-white relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#C7A45D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#5CC8E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#102A43]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F2238] border border-[#C7A45D]/30 text-[#C7A45D] text-xs font-mono uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Souveraineté en images & Retours de terrain
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-white max-w-2xl">
              L'Enseignement Supérieur Africain en pleine transformation
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl font-light">
              Des amphithéâtres réformés aux laboratoires de pointe : découvrez les réalités concrètes des réformes académiques orchestrées avec les États partenaires.
            </p>
          </div>

          {/* Toggle pill buttons Framer style */}
          <div className="flex items-center p-1.5 rounded-full bg-[#0B1B2E] border border-[#102A43] shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'gallery'
                  ? 'bg-[#C7A45D] text-[#07111F] font-bold shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Sur le terrain
            </button>
            <button
              onClick={() => setActiveTab('cases')}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'cases'
                  ? 'bg-[#C7A45D] text-[#07111F] font-bold shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Études de cas d'États
            </button>
          </div>
        </div>

        {/* Tab 1: Photographic Editorial Bento Grid */}
        {activeTab === 'gallery' && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-[#0B1B2E] border border-[#102A43] hover:border-[#C7A45D]/60 transition-all duration-500 flex flex-col h-[420px] shadow-xl hover:-translate-y-1"
              >
                {/* Photo Header */}
                <div className="relative h-56 w-full overflow-hidden shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 brightness-85"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2E] via-transparent to-black/30" />

                  {/* Top tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-[#07111F]/80 backdrop-blur-md border border-[#C7A45D]/40 text-[#C7A45D] text-[10px] font-mono uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-300 bg-[#07111F]/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                      <MapPin className="w-3 h-3 text-[#5CC8E8]" />
                      {item.location}
                    </span>
                  </div>

                  {/* Floating metric sticker */}
                  <div className="absolute bottom-3 right-3 bg-[#07111F]/90 backdrop-blur-md border border-[#C7A45D]/40 rounded-xl px-3 py-1.5 shadow-lg">
                    <span className="text-sm font-serif font-bold text-[#E1C783] block leading-none">
                      {item.metric}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 block leading-tight">
                      {item.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-base font-serif font-semibold text-white group-hover:text-[#E1C783] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light mt-2 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#102A43]/80 flex items-center justify-between text-xs font-mono text-[#5CC8E8] group-hover:text-[#C7A45D] transition-colors">
                    <span>Voir l'ingénierie associée</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Case Studies with Detailed Problem / Solution & Impact */}
        {activeTab === 'cases' && (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                className="rounded-2xl bg-[#0B1B2E] border border-[#102A43] hover:border-[#C7A45D]/60 transition-all duration-300 overflow-hidden flex flex-col shadow-xl group"
              >
                {/* Photo header with badge */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-80"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2E] via-transparent to-black/30" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#07111F]/80 backdrop-blur-md border border-[#5CC8E8]/40 text-[#5CC8E8] text-[11px] font-mono font-medium">
                      {study.country}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#07111F]/90 backdrop-blur-md border border-[#C7A45D]/40 rounded-xl px-3 py-1 text-right">
                    <div className="text-xs font-mono text-[#C7A45D] font-bold">
                      {study.metric}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                      {study.tag}
                    </span>
                    <h3 className="text-lg font-serif font-semibold text-white group-hover:text-[#E1C783] transition-colors leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light mt-3 leading-relaxed">
                      {study.summary}
                    </p>
                  </div>

                  {/* Impact block */}
                  <div className="p-3.5 rounded-xl bg-[#07111F] border border-[#102A43]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#B8D94E] flex items-center gap-1.5 mb-1 font-semibold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Résultat vérifiable
                    </div>
                    <p className="text-xs text-slate-200 font-serif">
                      {study.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#0F2238] via-[#0B1B2E] to-[#0F2238] border border-[#C7A45D]/40 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] font-semibold">
              Coopération Universitaire Stratégique
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mt-1">
              Vous pilotez une université ou un ministère de l'Éducation ?
            </h3>
            <p className="text-slate-300 text-sm mt-2 font-light">
              Découvrez comment adapter ces modèles souverains à la matrice économique de votre pays.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C7A45D] to-[#E1C783] text-[#07111F] font-serif font-bold text-sm tracking-wide shadow-lg hover:shadow-[#C7A45D]/30 transition-all hover:scale-105 active:scale-95 shrink-0 flex items-center gap-2"
          >
            Échanger avec les experts CEIUE
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
