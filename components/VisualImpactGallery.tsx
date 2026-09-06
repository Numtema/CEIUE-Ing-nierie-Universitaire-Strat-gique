'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
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
  X,
  CheckCircle2,
} from 'lucide-react';
import { CASE_STUDIES } from '@/lib/data/expertises';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  fullDetails: string;
  imageUrl: string;
  metric: string;
  metricLabel: string;
  pillarLink: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'amphi',
    title: "Amphithéâtres & Ingénierie Pédagogique",
    category: "Audit des Cursus",
    location: "Dakar, Sénégal",
    description: "Transformation des maquettes pédagogiques pour aligner 100% des cours sur les besoins industriels et technologiques du pays.",
    fullDetails: "Audit complet de 4 facultés nationales, réduction des doublons théoriques, intégration de modules d'ingénierie énergétique et de gouvernance minière.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80",
    metric: "360°",
    metricLabel: "Audit des maquettes",
    pillarLink: "/expertises/audit-offre-formation",
  },
  {
    id: 'labo',
    title: "Laboratoires Biomédicaux & Recherche de Pointe",
    category: "Filières Critiques",
    location: "Abidjan, Côte d'Ivoire",
    description: "Équipements et bourses ciblées pour former les chercheurs et virologues qui assurent la souveraineté sanitaire du continent.",
    fullDetails: "Création d'un pôle d'excellence en virologie appliquée avec double diplomation internationale et équipements de séquençage génomique.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    metric: "450",
    metricLabel: "Chercheurs financés",
    pillarLink: "/expertises/bourses-ciblees",
  },
  {
    id: 'tech',
    title: "Diaspora Tech & Rétention des Ingénieurs",
    category: "Talent Nation",
    location: "Kigali, Rwanda",
    description: "Accompagnement tripartite pour le retour sécurisé des docteurs et ingénieurs de la diaspora dans les ministères et pôles d'innovation.",
    fullDetails: "Dispositif d'accueil sécurisé, passerelles contractuelles avec les ministères et création de chaires mixtes diaspora-industrie locale.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    metric: "94%",
    metricLabel: "Taux de rétention",
    pillarLink: "/expertises/retour-talents",
  },
  {
    id: 'diplomes',
    title: "Cérémonies Officielles & Diplômes Inviolables",
    category: "Registre National",
    location: "Panafricain",
    description: "Délivrance de titres d'État certifiés avec sceaux cryptographiques, reconnus instantanément par les ambassades et recruteurs mondiaux.",
    fullDetails: "Éradication totale des attestations falsifiées auprès des consulats grâce au registre unifié et à la vérification instantanée sous 72h.",
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
    metric: "< 48h",
    metricLabel: "Délai de vérification",
    pillarLink: "/expertises/authentification-diplomes",
  },
];

export default function VisualImpactGallery() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'cases'>('gallery');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] text-[#0B1B2E] relative overflow-hidden border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E2E8F0]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EB] border border-[#C7A45D]/40 text-[#9A7B38] text-xs font-mono uppercase tracking-widest mb-4 font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A45D]" />
              SOUVERAINETÉ EN IMAGES & RETOURS DE TERRAIN
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#0B1B2E] max-w-2xl leading-tight">
              L'Enseignement Supérieur Africain en pleine transformation
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-2xl font-light leading-relaxed">
              Des amphithéâtres réformés aux laboratoires de pointe : découvrez les réalités concrètes des architectures académiques orchestrées avec les États partenaires.
            </p>
          </div>

          {/* Toggle pill buttons Framer style */}
          <div className="flex items-center p-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'gallery'
                  ? 'bg-[#0B1B2E] text-white font-bold shadow'
                  : 'text-slate-600 hover:text-[#0B1B2E]'
              }`}
            >
              Sur le terrain
            </button>
            <button
              onClick={() => setActiveTab('cases')}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'cases'
                  ? 'bg-[#0B1B2E] text-white font-bold shadow'
                  : 'text-slate-600 hover:text-[#0B1B2E]'
              }`}
            >
              Études de cas d'États
            </button>
          </div>
        </div>

        {/* Tab 1: Photographic Editorial Bento Grid */}
        {activeTab === 'gallery' && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-3xl overflow-hidden bg-white border border-[#E2E8F0] hover:border-[#C7A45D] transition-all duration-300 flex flex-col h-[420px] shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                {/* Photo Header */}
                <div className="relative h-56 w-full overflow-hidden shrink-0 bg-slate-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Top tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/40 text-[#0B1B2E] text-[10px] font-mono uppercase tracking-wider font-semibold shadow-sm">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
                      <MapPin className="w-3 h-3 text-[#C7A45D]" />
                      {item.location}
                    </span>
                  </div>

                  {/* Floating metric sticker */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md border border-[#E2E8F0] rounded-xl px-3 py-1.5 shadow-md">
                    <span className="text-sm font-serif font-bold text-[#0B1B2E] block leading-none">
                      {item.metric}
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 block leading-tight">
                      {item.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-base font-serif font-normal text-[#0B1B2E] group-hover:text-[#9A7B38] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-light mt-2 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#0B1B2E] font-semibold group-hover:text-[#9A7B38] transition-colors">
                    <span>Fiche d'intervention</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-[#C7A45D]" />
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
                className="rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#C7A45D] transition-all duration-300 overflow-hidden flex flex-col shadow-sm hover:shadow-xl group"
              >
                {/* Photo header with badge */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/50 text-[#0B1B2E] text-[11px] font-mono font-bold shadow-sm">
                      {study.country}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md border border-[#E2E8F0] rounded-xl px-3 py-1 text-right shadow-sm">
                    <div className="text-xs font-mono text-[#0B1B2E] font-bold">
                      {study.metric}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#9A7B38] font-bold block mb-1">
                      {study.tag}
                    </span>
                    <h3 className="text-lg font-serif font-normal text-[#0B1B2E] group-hover:text-[#9A7B38] transition-colors leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-light mt-3 leading-relaxed">
                      {study.summary}
                    </p>
                  </div>

                  {/* Impact block */}
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#15803D] flex items-center gap-1.5 mb-1 font-bold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Résultat vérifiable
                    </div>
                    <p className="text-xs text-[#0B1B2E] font-serif">
                      {study.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Callout Banner */}
        <div className="mt-16 rounded-3xl bg-[#0B1B2E] text-white border border-[#C7A45D]/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45D] font-bold">
              Coopération Universitaire Stratégique
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mt-1 font-normal">
              Vous pilotez une université ou un ministère de l'Éducation ?
            </h3>
            <p className="text-slate-300 text-sm mt-2 font-light">
              Découvrez comment adapter ces modèles souverains à la matrice économique de votre pays.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-full bg-[#C7A45D] hover:bg-[#E1C783] text-[#07111F] font-bold text-xs font-mono tracking-wide shadow-md transition-all active:scale-95 shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Échanger avec les experts CEIUE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Modal Quick View */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-[#E2E8F0] rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
                    {selectedItem.category} • {selectedItem.location}
                  </span>
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#FAF5EB] text-[#0B1B2E]">
                    {selectedItem.metric}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#0B1B2E] mb-2 font-normal">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0]">
                  <span className="text-xs font-mono uppercase text-[#9A7B38] font-bold block mb-1">
                    Détail opérationnel de l'intervention :
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedItem.fullDetails}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="px-5 py-2.5 rounded-full border border-[#E2E8F0] text-xs font-mono text-slate-600 hover:text-[#0B1B2E] cursor-pointer"
                  >
                    Fermer
                  </button>
                  <Link
                    href={selectedItem.pillarLink}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B1B2E] hover:bg-[#1E293B] text-white font-bold text-xs font-mono transition-colors shadow"
                  >
                    <span>Consulter l'expertise complète</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C7A45D]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
