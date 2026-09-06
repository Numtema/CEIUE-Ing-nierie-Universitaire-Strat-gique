'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence
} from 'motion/react';
import {
  TrendingUp,
  ShieldCheck,
  Compass,
  Users,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  Maximize2,
  X,
  ExternalLink,
  ChevronRight,
  Eye
} from 'lucide-react';
import { PILLARS } from '@/lib/data/expertises';

interface PillarEnhanced {
  number: string;
  title: string;
  summary: string;
  link: string;
  metric: string;
  highlight: string;
  image: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  keyCapabilities: string[];
  concreteImpact: string;
  sovereignQuote: string;
}

const PILLARS_DATA: PillarEnhanced[] = [
  {
    ...PILLARS[0],
    icon: TrendingUp,
    keyCapabilities: [
      "Cartographie prospective des 28 filières prioritaires",
      "Élimination des cursus saturés sans débouchés",
      "Matrice d'alignement formation-industrialisation 2026-2035"
    ],
    concreteImpact: "+65% d'adéquation formation-emploi mesurée sur 3 ans",
    sovereignQuote: "Ne plus former au hasard, mais bâtir le réservoir de compétences exigé par les plans d'émergence."
  },
  {
    ...PILLARS[1],
    icon: ShieldCheck,
    keyCapabilities: [
      "Registre national unifié et horodatage cryptographique",
      "Vérification universelle en moins de 72h ouvrées",
      "Interconnexion directe avec les universités et ambassades"
    ],
    concreteImpact: "Zéro tolérance pour les faux diplômes et restauration de la crédibilité internationale",
    sovereignQuote: "La réputation d'un système universitaire national est son actif souverain le plus précieux."
  },
  {
    ...PILLARS[2],
    icon: Compass,
    keyCapabilities: [
      "Bourses 100% fléchées vers les spécialités critiques manquantes",
      "Contrat d'engagement moral et civique de service public",
      "Sélection transparente sur critères d'excellence et de besoins d'État"
    ],
    concreteImpact: "Chaque franc investi dans la mobilité finance un besoin d'État non couvert sur place",
    sovereignQuote: "Les bourses publiques cessent d'être des subventions d'exil pour devenir des investissements d'État."
  },
  {
    ...PILLARS[3],
    icon: Users,
    keyCapabilities: [
      "Contrat tripartite État - Étudiant - Entreprise/Administration",
      "Plateforme d'affectation prioritaire aux grands projets nationaux",
      "Pack d'accueil et d'insertion professionnelle accélérée"
    ],
    concreteImpact: "92% de retour effectif des diplômés soutenus par les dispositifs CEIUE",
    sovereignQuote: "Former à l'étranger n'a de sens que si la nation prépare le terrain de leur retour victorieux."
  }
];

function ParallaxCard({
  pillar,
  index,
  onOpenQuickView
}: {
  pillar: PillarEnhanced;
  index: number;
  onOpenQuickView: (p: PillarEnhanced) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position tracking for 3D tilt & magnetic micro-parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for buttery smooth motion
  const springConfig = { stiffness: 260, damping: 24, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  // Image counter-translation for layered parallax depth
  const imgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [14, -14]), springConfig);
  const imgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);

  // Glare / lighting beam coordinates
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const Icon = pillar.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative h-full flex flex-col"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="relative bg-white border border-[#E2E8F0] group-hover:border-[#C7A45D] rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl flex-1 focus-within:ring-2 focus-within:ring-[#C7A45D]"
      >
        {/* Dynamic cursor-following light sheen / cinematic glare */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle 280px at ${gx}% ${gy}%, rgba(199, 164, 93, 0.15), rgba(92, 200, 232, 0.05) 50%, transparent 80%)`
            )
          }}
        />

        {/* Parallax Cinematic Image Window */}
        <div className="relative h-52 w-full overflow-hidden shrink-0 bg-[#0B1B2E]">
          {/* Multi-layered parallax background image */}
          <motion.div
            style={{
              x: imgX,
              y: imgY,
              scale: isHovered ? 1.14 : 1.05
            }}
            transition={{
              scale: { duration: 0.7, ease: [0.2, 0, 0, 1] }
            }}
            className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)]"
          >
            <Image
              src={pillar.image}
              alt={pillar.title}
              fill
              className="object-cover brightness-[0.9] contrast-[1.05] group-hover:brightness-100 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </motion.div>

          {/* Cinematic lighting vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />

          {/* Top floating badge bar */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold text-[#0B1B2E] px-2.5 py-0.5 rounded-full bg-[#FAF5EB] border border-[#C7A45D]/60 shadow-md flex items-center gap-1">
                <Icon className="w-3 h-3 text-[#0B1B2E]" />
                AXE {pillar.number}
              </span>
            </div>

            <span className="font-mono text-[10px] text-white px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-sm">
              {pillar.badge}
            </span>
          </div>

          {/* Bottom metadata chip inside image */}
          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between z-20">
            <span className="font-mono text-[11px] font-medium text-[#0B1B2E] bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#E2E8F0] shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-pulse" />
              {pillar.metric}
            </span>

            {/* Quick-view trigger button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onOpenQuickView(pillar);
              }}
              className="p-1.5 rounded-md bg-white/90 hover:bg-[#C7A45D] text-[#0B1B2E] hover:text-[#0B1B2E] backdrop-blur-md border border-[#E2E8F0] hover:border-[#C7A45D] transition-all duration-200 shadow cursor-pointer"
              title="Aperçu rapide"
              aria-label={`Aperçu de l'axe ${pillar.number}`}
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card Body with typographic balance */}
        <div className="p-6 flex flex-col justify-between flex-1 relative z-20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#9A7B38] mb-2 uppercase tracking-wider font-semibold">
              <Icon className="w-3.5 h-3.5 text-[#C7A45D]" />
              <span>Ingénierie prioritaire</span>
            </div>

            <h3 className="font-serif text-xl text-[#0B1B2E] group-hover:text-[#9A7B38] transition-colors mb-2.5 leading-snug font-normal">
              {pillar.title}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed mb-6 font-light">
              {pillar.summary}
            </p>
          </div>

          {/* Footer action bar */}
          <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono">
            <span className="truncate pr-2 text-slate-500 font-light group-hover:text-[#0B1B2E] transition-colors">
              {pillar.highlight}
            </span>

            <Link
              href={pillar.link}
              className="shrink-0 p-2 rounded-xl bg-[#FAF5EB] group-hover:bg-[#C7A45D] text-[#9A7B38] group-hover:text-[#0B1B2E] transition-all duration-200 shadow-sm"
              aria-label={`Découvrir ${pillar.title}`}
            >
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function QuatreAxesCinematic() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<'grid' | 'cinema'>('grid');
  const [selectedAxisIndex, setSelectedAxisIndex] = useState(0);
  const [modalPillar, setModalPillar] = useState<PillarEnhanced | null>(null);

  // Global scroll tracking for subtle whole-section parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const sectionY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const currentPillar = PILLARS_DATA[selectedAxisIndex];
  const CurrentIcon = currentPillar.icon;

  return (
    <section
      ref={containerRef}
      id="quatre-axes"
      className="relative py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E2E8F0] overflow-hidden"
    >
      {/* Cinematic ambient background glow */}
      <motion.div
        style={{ y: sectionY }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-radial from-[#C7A45D]/10 via-[#5CC8E8]/5 to-transparent blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Mode Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C7A45D]/40 text-[#9A7B38] text-xs font-mono tracking-widest uppercase mb-4 shadow-sm font-semibold">
              <Layers className="w-3.5 h-3.5 text-[#C7A45D]" />
              <span>PILIER D'INGÉNIERIE STRATÉGIQUE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1B2E] leading-tight font-normal">
              Les quatre axes d'action
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              Une réponse systémique et mesurable pour articuler besoins nationaux, confiance académique infalsifiable et retour souverain des compétences.
            </p>
          </div>

          {/* Interactive Mode Switcher */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-[#E2E8F0] self-start lg:self-end shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab('grid')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'grid'
                  ? 'bg-[#0B1B2E] text-white font-bold shadow'
                  : 'text-slate-600 hover:text-[#0B1B2E]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Grille Parallaxe 3D</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('cinema')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'cinema'
                  ? 'bg-[#0B1B2E] text-white font-bold shadow'
                  : 'text-slate-600 hover:text-[#0B1B2E]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Projection Grand Angle</span>
            </button>
          </div>
        </div>

        {/* TAB 1: 4 Pillars Interactive Parallax Grid */}
        {activeTab === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS_DATA.map((pillar, idx) => (
              <ParallaxCard
                key={pillar.number}
                pillar={pillar}
                index={idx}
                onOpenQuickView={(p) => setModalPillar(p)}
              />
            ))}
          </div>
        )}

        {/* TAB 2: Cinematic Grand Angle View */}
        {activeTab === 'cinema' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden shadow-xl"
          >
            {/* Horizontal Axe Navigation Buttons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-[#E2E8F0] bg-[#FAF8F5]">
              {PILLARS_DATA.map((item, i) => {
                const ItemIcon = item.icon;
                const isSelected = selectedAxisIndex === i;
                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setSelectedAxisIndex(i)}
                    className={`p-4 sm:p-5 text-left border-r border-[#E2E8F0] last:border-r-0 transition-all flex items-center gap-3 relative cursor-pointer ${
                      isSelected
                        ? 'bg-white text-[#0B1B2E]'
                        : 'text-slate-500 hover:text-[#0B1B2E] hover:bg-white/60'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeAxisIndicator"
                        className="absolute top-0 left-0 right-0 h-1 bg-[#C7A45D]"
                      />
                    )}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'bg-[#0B1B2E] text-[#C7A45D] border-[#0B1B2E]'
                          : 'bg-white text-slate-500 border-[#E2E8F0]'
                      }`}
                    >
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] tracking-wider uppercase block text-slate-500 font-semibold">
                        AXE {item.number}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold truncate block">
                        {item.badge}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Cinematic Panorama Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
              {/* Left Column: Photographic Parallax Viewport */}
              <div className="lg:col-span-6 relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md group">
                <motion.div
                  key={currentPillar.number}
                  initial={{ opacity: 0, scale: 1.12 }}
                  animate={{ opacity: 1, scale: 1.03 }}
                  transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentPillar.image}
                    alt={currentPillar.title}
                    fill
                    className="object-cover brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>

                {/* Overlaid Institutional Quote & Metric */}
                <div className="absolute bottom-6 left-6 right-6 z-20 space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/20 text-[#0B1B2E] font-mono text-xs font-semibold shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D]" />
                    <span>{currentPillar.metric}</span>
                  </span>

                  <p className="font-serif italic text-sm sm:text-base text-white/95 leading-snug drop-shadow-md">
                    « {currentPillar.sovereignQuote} »
                  </p>
                </div>
              </div>

              {/* Right Column: In-depth Institutional Architecture */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#9A7B38] uppercase tracking-widest mb-2 font-semibold">
                    <CurrentIcon className="w-4 h-4 text-[#C7A45D]" />
                    <span>AXE {currentPillar.number} — {currentPillar.badge}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0B1B2E] leading-tight font-normal">
                    {currentPillar.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                    {currentPillar.summary}
                  </p>
                </div>

                {/* Capabilities list */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block">
                    Dispositifs opérationnels :
                  </span>
                  {currentPillar.keyCapabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <div className="p-1 rounded-lg bg-[#FAF5EB] border border-[#C7A45D]/40 shrink-0 text-[#9A7B38] mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Concrete Sovereign Impact Box */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0] flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#9A7B38] font-bold block mb-1">
                      Impact direct vérifiable :
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#0B1B2E]">
                      {currentPillar.concreteImpact}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#0B1B2E] shrink-0 bg-white px-2.5 py-1 rounded-lg border border-[#E2E8F0] shadow-sm font-semibold">
                    Certifié CEIUE
                  </span>
                </div>

                {/* Primary CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href={currentPillar.link}
                    className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full bg-[#0B1B2E] hover:bg-[#1E293B] text-white font-mono text-xs font-bold transition-all duration-200 shadow-md"
                  >
                    <span>Consulter le dispositif complet</span>
                    <ArrowRight className="w-4 h-4 text-[#C7A45D]" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setModalPillar(currentPillar)}
                    className="inline-flex items-center justify-center gap-2 px-5 h-12 rounded-full bg-[#FAF8F5] hover:bg-white border border-[#E2E8F0] text-slate-700 hover:text-[#0B1B2E] text-xs font-mono transition-all cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#C7A45D]" />
                    <span>Agrandir la fiche</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Quick-View Modal Overlay */}
      <AnimatePresence>
        {modalPillar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
            onClick={() => setModalPillar(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white border border-[#E2E8F0] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image banner */}
              <div className="relative h-48 sm:h-56 w-full">
                <Image
                  src={modalPillar.image}
                  alt={modalPillar.title}
                  fill
                  className="object-cover brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <button
                  type="button"
                  onClick={() => setModalPillar(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors border border-white/20 cursor-pointer"
                  aria-label="Fermer la fenêtre"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#0B1B2E] px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#C7A45D]/60 shadow">
                    AXE {modalPillar.number} — {modalPillar.badge}
                  </span>
                  <span className="font-mono text-xs text-[#0B1B2E] px-2.5 py-1 rounded-md bg-white/95 border border-[#E2E8F0] shadow-sm font-semibold">
                    {modalPillar.metric}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1B2E] mb-2 font-normal">
                    {modalPillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {modalPillar.summary}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0]">
                  <span className="text-xs font-mono uppercase text-[#9A7B38] font-bold block mb-2">
                    Fondement souverain :
                  </span>
                  <p className="font-serif italic text-sm text-[#0B1B2E]">
                    « {modalPillar.sovereignQuote} »
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block">
                    Leviers d'intervention :
                  </span>
                  {modalPillar.keyCapabilities.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setModalPillar(null)}
                    className="px-5 py-2.5 rounded-full border border-[#E2E8F0] text-xs font-mono text-slate-600 hover:text-[#0B1B2E] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                  >
                    Fermer
                  </button>

                  <Link
                    href={modalPillar.link}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B1B2E] hover:bg-[#1E293B] text-white font-bold text-xs font-mono transition-colors shadow"
                  >
                    <span>Accéder au dossier complet</span>
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
