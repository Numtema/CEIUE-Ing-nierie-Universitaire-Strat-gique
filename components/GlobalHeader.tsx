'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Globe2,
  Users,
  Search,
  Landmark
} from 'lucide-react';
import { EXPERTISES } from '@/lib/data/expertises';

export default function GlobalHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Le CEIUE', href: '/le-ceiue' },
    { label: 'Expertises', href: '/expertises', hasMega: true },
    { label: 'Méthode', href: '/methode' },
    { label: 'Ressources', href: '/ressources' },
  ];

  const filteredExpertises = searchQuery.trim()
    ? EXPERTISES.filter(
        (e) =>
          e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : EXPERTISES;

  return (
    <>
      <header
        id="global-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] py-3.5 shadow-md'
            : 'bg-[#FBF8F1]/95 backdrop-blur-md border-b border-[#E2E8F0]/80 py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Baseline */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A45D]"
            >
              {/* Monogram Crest */}
              <div className="w-10 h-10 rounded-xl bg-[#0B1B2E] border border-[#C7A45D]/40 flex items-center justify-center text-[#C7A45D] group-hover:border-[#C7A45D] transition-colors shadow-sm">
                <Landmark className="w-5 h-5 text-[#C7A45D] group-hover:scale-110 group-hover:text-[#E1C783] transition-transform duration-300" />
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-[0.18em] text-[#0B1B2E] uppercase font-bold leading-tight">
                  CEIUE
                </span>
                <span className="text-[10px] font-mono tracking-[0.14em] uppercase text-[#9A7B38] font-semibold -mt-0.5">
                  Ingénierie universitaire
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-700">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                if (link.hasMega) {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setMegaMenuOpen(true)}
                      onMouseLeave={() => setMegaMenuOpen(false)}
                    >
                      <button
                        onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                        aria-expanded={megaMenuOpen}
                        className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer ${
                          pathname.startsWith('/expertises')
                            ? 'text-[#0B1B2E] font-bold bg-[#FAF5EB]'
                            : 'hover:text-[#0B1B2E] hover:bg-[#FAF5EB]'
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            megaMenuOpen ? 'rotate-180 text-[#C7A45D]' : ''
                          }`}
                        />
                      </button>

                      {/* Mega Menu Editorial Desktop */}
                      {megaMenuOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] mt-2 p-6 bg-white border border-[#E2E8F0] rounded-3xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2E8F0]">
                            <span className="text-xs font-mono uppercase tracking-widest text-[#9A7B38] font-bold">
                              Architecture des interventions CEIUE
                            </span>
                            <Link
                              href="/expertises"
                              className="text-xs text-[#0B1B2E] hover:text-[#9A7B38] flex items-center gap-1 font-mono font-semibold"
                            >
                              Toutes les expertises <ArrowRight className="w-3 h-3 text-[#C7A45D]" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-6">
                            {/* Column 1 */}
                            <div className="space-y-4">
                              <div>
                                <div className="flex items-center gap-1.5 text-xs font-mono text-[#0B1B2E] font-bold mb-2 uppercase tracking-wider">
                                  <GraduationCap className="w-3.5 h-3.5 text-[#C7A45D]" />
                                  1. Former utilement
                                </div>
                                <div className="space-y-1 pl-4 border-l border-[#E2E8F0]">
                                  <Link
                                    href="/expertises/audit-offre-formation"
                                    className="block p-2 rounded-xl hover:bg-[#FAF8F5] group transition-colors"
                                  >
                                    <div className="text-sm font-semibold text-[#0B1B2E] group-hover:text-[#9A7B38]">
                                      Audit & refonte de l'offre
                                    </div>
                                    <div className="text-xs text-slate-500 line-clamp-1">
                                      Alignement filières - priorités nationales
                                    </div>
                                  </Link>
                                  <Link
                                    href="/expertises/cours-diplomants"
                                    className="block p-2 rounded-xl hover:bg-[#FAF8F5] group transition-colors"
                                  >
                                    <div className="text-sm font-semibold text-[#0B1B2E] group-hover:text-[#9A7B38]">
                                      Cours & certifications d'excellence
                                    </div>
                                    <div className="text-xs text-slate-500 line-clamp-1">
                                      Modules exécutifs à déploiement rapide
                                    </div>
                                  </Link>
                                </div>
                              </div>

                              <div>
                                <div className="flex items-center gap-1.5 text-xs font-mono text-[#0B1B2E] font-bold mb-2 uppercase tracking-wider">
                                  <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
                                  2. Sécuriser la confiance
                                </div>
                                <div className="space-y-1 pl-4 border-l border-[#E2E8F0]">
                                  <Link
                                    href="/expertises/authentification-diplomes"
                                    className="block p-2 rounded-xl hover:bg-[#FAF8F5] group transition-colors"
                                  >
                                    <div className="text-sm font-semibold text-[#0B1B2E] group-hover:text-[#0284C7]">
                                      Authentification des diplômes
                                    </div>
                                    <div className="text-xs text-slate-500 line-clamp-1">
                                      Registre national et contrôle sous 72h
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-4">
                              <div>
                                <div className="flex items-center gap-1.5 text-xs font-mono text-[#0B1B2E] font-bold mb-2 uppercase tracking-wider">
                                  <Globe2 className="w-3.5 h-3.5 text-[#C7A45D]" />
                                  3. Coopérer avec le monde
                                </div>
                                <div className="space-y-1 pl-4 border-l border-[#E2E8F0]">
                                  <Link
                                    href="/expertises/partenariats-universitaires"
                                    className="block p-2 rounded-xl hover:bg-[#FAF8F5] group transition-colors"
                                  >
                                    <div className="text-sm font-semibold text-[#0B1B2E] group-hover:text-[#9A7B38]">
                                      Partenariats universitaires
                                    </div>
                                    <div className="text-xs text-slate-500 line-clamp-1">
                                      Accords bilatéraux équitables et recherche
                                    </div>
                                  </Link>
                                  <Link
                                    href="/expertises/co-diplomations"
                                    className="block p-2 rounded-xl hover:bg-[#FAF8F5] group transition-colors"
                                  >
                                    <div className="text-sm font-semibold text-[#0B1B2E] group-hover:text-[#9A7B38]">
                                      Co-diplomations souveraines
                                    </div>
                                    <div className="text-xs text-slate-500 line-clamp-1">
                                      Doubles diplômes avec ancrage local
                                    </div>
                                  </Link>
                                  <Link
                                    href="/expertises/formation-cadres-publics"
                                    className="block p-2 rounded-xl hover:bg-[#FAF8F5] group transition-colors"
                                  >
                                    <div className="text-sm font-semibold text-[#0B1B2E] group-hover:text-[#9A7B38]">
                                      Formation des cadres publics
                                    </div>
                                    <div className="text-xs text-slate-500 line-clamp-1">
                                      Résidences stratégiques pour recteurs et DG
                                    </div>
                                  </Link>
                                </div>
                              </div>

                              <div>
                                <div className="flex items-center gap-1.5 text-xs font-mono text-[#0B1B2E] font-bold mb-2 uppercase tracking-wider">
                                  <Users className="w-3.5 h-3.5 text-[#15803D]" />
                                  4. Retenir & valoriser les talents
                                </div>
                                <div className="space-y-1 pl-4 border-l border-[#E2E8F0]">
                                  <Link
                                    href="/expertises/bourses-ciblees"
                                    className="block p-2 rounded-xl hover:bg-[#FAF8F5] group transition-colors"
                                  >
                                    <div className="text-sm font-semibold text-[#0B1B2E] group-hover:text-[#15803D]">
                                      Bourses ciblées
                                    </div>
                                    <div className="text-xs text-slate-500 line-clamp-1">
                                      Financement fléché sur les manques nationaux
                                    </div>
                                  </Link>
                                  <Link
                                    href="/expertises/retour-talents"
                                    className="block p-2 rounded-xl hover:bg-[#FAF8F5] group transition-colors"
                                  >
                                    <div className="text-sm font-semibold text-[#0B1B2E] group-hover:text-[#15803D]">
                                      Retour sécurisé des talents
                                    </div>
                                    <div className="text-xs text-slate-500 line-clamp-1">
                                      Passerelles d'insertion et rétention active
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-xl transition-colors ${
                      isActive
                        ? 'text-[#0B1B2E] font-bold bg-[#FAF5EB]'
                        : 'hover:text-[#0B1B2E] hover:bg-[#FAF5EB]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Primary Action Button */}
            <div className="hidden sm:flex items-center gap-4">
              <Link
                href="/contact"
                id="header-primary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full bg-[#0B1B2E] hover:bg-[#1E293B] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#C7A45D]"
              >
                <span>Présenter un besoin national</span>
                <ArrowRight className="w-4 h-4 text-[#C7A45D]" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu de navigation'}
                aria-expanded={mobileMenuOpen}
                className="p-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#0B1B2E] hover:text-[#9A7B38] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A45D] shadow-sm cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-fullscreen-menu"
          className="fixed inset-0 z-40 bg-[#FBF8F1] text-[#0B1B2E] pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto lg:hidden animate-in fade-in duration-200"
        >
          <div className="space-y-6">
            {/* Quick search */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher une expertise, un enjeu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#0B1B2E] placeholder-slate-400 focus:outline-none focus:border-[#C7A45D] shadow-sm"
              />
            </div>

            {/* Search results if query */}
            {searchQuery.trim() ? (
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#9A7B38] uppercase tracking-wider font-bold">
                  Résultats ({filteredExpertises.length})
                </span>
                {filteredExpertises.length > 0 ? (
                  filteredExpertises.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/expertises/${item.slug}`}
                      className="block p-3 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#C7A45D] shadow-sm"
                    >
                      <div className="text-sm font-semibold text-[#0B1B2E]">{item.title}</div>
                      <div className="text-xs text-slate-500 line-clamp-1">{item.shortDescription}</div>
                    </Link>
                  ))
                ) : (
                  <p className="text-xs text-slate-500 italic">Aucune expertise ne correspond.</p>
                )}
              </div>
            ) : (
              /* Regular Accordion Mobile Links */
              <div className="space-y-1 divide-y divide-[#E2E8F0]">
                <Link
                  href="/"
                  className="block py-3 text-lg font-serif text-[#0B1B2E] hover:text-[#9A7B38]"
                >
                  Accueil
                </Link>
                <Link
                  href="/le-ceiue"
                  className="block py-3 text-lg font-serif text-[#0B1B2E] hover:text-[#9A7B38]"
                >
                  Le CEIUE
                </Link>
                <div className="py-2">
                  <div className="text-xs font-mono text-[#9A7B38] uppercase tracking-wider mb-2 font-bold">
                    Expertises
                  </div>
                  <div className="pl-3 space-y-2 border-l border-[#E2E8F0]">
                    <Link
                      href="/expertises/audit-offre-formation"
                      className="block text-sm text-slate-700 hover:text-[#0B1B2E]"
                    >
                      Audit de l'offre de formation
                    </Link>
                    <Link
                      href="/expertises/authentification-diplomes"
                      className="block text-sm text-slate-700 hover:text-[#0B1B2E]"
                    >
                      Authentification des diplômes
                    </Link>
                    <Link
                      href="/expertises/bourses-ciblees"
                      className="block text-sm text-slate-700 hover:text-[#0B1B2E]"
                    >
                      Bourses ciblées & filières manquantes
                    </Link>
                    <Link
                      href="/expertises/retour-talents"
                      className="block text-sm text-slate-700 hover:text-[#0B1B2E]"
                    >
                      Retour sécurisé des talents
                    </Link>
                    <Link
                      href="/expertises/partenariats-universitaires"
                      className="block text-sm text-slate-700 hover:text-[#0B1B2E]"
                    >
                      Partenariats universitaires
                    </Link>
                    <Link
                      href="/expertises/co-diplomations"
                      className="block text-sm text-slate-700 hover:text-[#0B1B2E]"
                    >
                      Co-diplomations souveraines
                    </Link>
                  </div>
                </div>
                <Link
                  href="/methode"
                  className="block py-3 text-lg font-serif text-[#0B1B2E] hover:text-[#9A7B38]"
                >
                  Méthode
                </Link>
                <Link
                  href="/ressources"
                  className="block py-3 text-lg font-serif text-[#0B1B2E] hover:text-[#9A7B38]"
                >
                  Ressources & Publications
                </Link>
              </div>
            )}
          </div>

          {/* Sticky CTA on bottom */}
          <div className="mt-8 pt-4 border-t border-[#E2E8F0]">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 h-14 rounded-full bg-[#0B1B2E] hover:bg-[#1E293B] text-white font-bold text-base shadow-xl"
            >
              <span>Présenter un besoin national</span>
              <ArrowRight className="w-5 h-5 text-[#C7A45D]" />
            </Link>
            <p className="text-center font-mono text-[11px] text-slate-500 mt-3">
              Guichet confidentiel réservé aux administrations & partenaires
            </p>
          </div>
        </div>
      )}
    </>
  );
}
