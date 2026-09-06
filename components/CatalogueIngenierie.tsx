'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Filter
} from 'lucide-react';
import { EXPERTISES, ExpertiseItem } from '@/lib/data/expertises';

export default function CatalogueIngenierie() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes les expertises' },
    { id: 'former', label: 'Former utilement' },
    { id: 'confiance', label: 'Sécuriser la confiance' },
    { id: 'retenir', label: 'Retenir les talents' },
    { id: 'cooperer', label: 'Coopérer avec le monde' },
  ];

  const filtered = selectedCategory === 'all'
    ? EXPERTISES
    : EXPERTISES.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="expertises-systeme"
      className="py-24 sm:py-32 bg-[#FBF8F1] border-b border-[#E2E8F0] relative overflow-hidden"
    >
      {/* Ambient subtle light glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#C7A45D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#5CC8E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EB] border border-[#C7A45D]/40 text-[#9A7B38] text-xs font-mono tracking-widest uppercase mb-3 font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A45D]" />
              <span>CATALOGUE D'INGÉNIERIE SOUVERAINE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1B2E] leading-tight font-normal">
              Des réponses adaptées à chaque défi d'État
            </h2>

            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              Chaque dispositif est une architecture concrète et mesurable conçue pour résoudre les blocages structurels de l'enseignement supérieur africain.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0B1B2E] text-white font-semibold shadow-sm'
                    : 'bg-white border border-[#E2E8F0] text-slate-600 hover:text-[#0B1B2E] hover:border-[#C7A45D]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Expertise Cards Grid WITH IMAGES ON EVERY SINGLE ITEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((exp: ExpertiseItem, idx: number) => {
            const primaryStat = exp.statsOrIndicators?.[0] || { label: 'Impact', value: 'Certifié' };

            return (
              <motion.div
                key={exp.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group bg-white border border-[#E2E8F0] hover:border-[#C7A45D] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* PHOTOGRAPHIC IMAGE HEADER (Mandatory on every item) */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#0B1B2E]">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 brightness-[0.92] contrast-[1.05]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    {/* Top pill badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="font-mono text-[11px] font-bold text-[#0B1B2E] px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#C7A45D]/60 shadow-md">
                        {exp.categoryLabel}
                      </span>

                      <span className="font-mono text-[11px] text-white px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                        {primaryStat.label} : {primaryStat.value}
                      </span>
                    </div>

                    {/* Bottom overlay title on image */}
                    <div className="absolute bottom-3 left-4 right-4 z-10">
                      <span className="text-white text-xs font-mono flex items-center gap-1 opacity-90 drop-shadow">
                        <BookOpen className="w-3.5 h-3.5 text-[#E1C783]" />
                        <span>Dispositif d'ingénierie</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#0B1B2E] group-hover:text-[#9A7B38] transition-colors leading-snug font-normal">
                      {exp.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed font-light line-clamp-3">
                      {exp.shortDescription}
                    </p>

                    {/* Enjeu résolu / Défi d'État box */}
                    <div className="bg-[#FAF8F5] border border-[#E2E8F0] p-4 rounded-2xl space-y-1.5">
                      <span className="text-[11px] font-mono text-[#9A7B38] uppercase font-bold tracking-wider block">
                        Défi d'État résolu :
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed line-clamp-2">
                        {exp.problem}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer action bar */}
                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500">
                      {exp.deliverables?.length || 4} livrables souverains
                    </span>

                    <Link
                      href={`/expertises/${exp.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0B1B2E] group-hover:text-[#9A7B38] transition-colors"
                    >
                      <span>Détail du dispositif</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C7A45D]" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/expertises"
            className="inline-flex items-center gap-3 px-8 h-13 rounded-full bg-[#0B1B2E] hover:bg-[#1E293B] text-white font-mono text-xs font-bold transition-all shadow-md group"
          >
            <span>Consulter l'ensemble de la cartographie des expertises</span>
            <ArrowRight className="w-4 h-4 text-[#C7A45D] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
