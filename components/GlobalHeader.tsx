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
  Search
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
    { label: 'Publics', href: '/publics' },
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
            ? 'bg-[#07111F]/95 backdrop-blur-md border-b border-[#102A43]/80 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#07111F]/90 via-[#07111F]/60 to-transparent py-5'
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
              <div className="w-10 h-10 rounded-xl bg-[#0B1B2E] border border-[#C7A45D]/40 flex items-center justify-center text-[#C7A45D] group-hover:border-[#C7A45D] transition-colors shadow-inner">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <polygon
                    points="50,6 92,28 92,72 50,94 8,72 8,28"
                    stroke="#C7A45D"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle cx="50" cy="50" r="10" fill="#E1C783" />
                  <line x1="50" y1="20" x2="50" y2="80" stroke="#C7A45D" strokeWidth="3" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-[0.18em] text-[#FBF8F1] uppercase font-bold leading-tight">
                  CEIUE
                </span>
                <span className="text-[10px] font-mono tracking-[0.14em] uppercase text-[#C7A45D] -mt-0.5">
                  Ingénierie universitaire
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-300">
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
                        className={`px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                          pathname.startsWith('/expertises')
                            ? 'text-[#C7A45D] font-semibold'
                            : 'hover:text-white hover:bg-[#102A43]/40'
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
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] mt-1 p-6 bg-[#0B1B2E] border border-[#C7A45D]/30 rounded-2xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#102A43]">
                            <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45D]">
                              Architecture des interventions CEIUE
                            </span>
                            <Link
                              href="/expertises"
                              className="text-xs text-[#5CC8E8] hover:text-white flex items-center gap-1 font-mono"
                            >
                              Toutes les expertises <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-6">
                            {/* Column 1 */}
                            <div className="space-y-4">
                              <div>
                                <div className="flex items-center gap-1.5 text-xs font-mono text-white mb-2 uppercase tracking-wider">
                                  <GraduationCap className="w-3.5 h-3.5 text-[#C7A45D]" />
                                  1. Former utilement
                                </div>
                                <div className="space-y-1 pl-4 border-l border-[#102A43]">
                                  <Link
                                    href="/expertises/audit-offre-formation"
                                    className="block p-2 rounded-lg hover:bg-[#102A43] group transition-colors"
                                  >
                                    <div className="text-sm font-medium text-slate-200 group-hover:text-[#E1C783]">
                                      Audit & refonte de l'offre
                                    </div>
                                    <div className="text-xs text-slate-400 line-clamp-1">
                                      Alignement filières - priorités nationales
                                    </div>
                                  </Link>
                                  <Link
                                    href="/expertises/cours-diplomants"
                                    className="block p-2 rounded-lg hover:bg-[#102A43] group transition-colors"
                                  >
                                    <div className="text-sm font-medium text-slate-200 group-hover:text-[#E1C783]">
                                      Cours & certifications d'excellence
                                    </div>
                                    <div className="text-xs text-slate-400 line-clamp-1">
                                      Modules exécutifs à déploiement rapide
                                    </div>
                                  </Link>
                                </div>
                              </div>

                              <div>
                                <div className="flex items-center gap-1.5 text-xs font-mono text-white mb-2 uppercase tracking-wider">
                                  <ShieldCheck className="w-3.5 h-3.5 text-[#5CC8E8]" />
                                  2. Sécuriser la confiance
                                </div>
                                <div className="space-y-1 pl-4 border-l border-[#102A43]">
                                  <Link
                                    href="/expertises/authentification-diplomes"
                                    className="block p-2 rounded-lg hover:bg-[#102A43] group transition-colors"
                                  >
                                    <div className="text-sm font-medium text-slate-200 group-hover:text-[#5CC8E8]">
                                      Authentification des diplômes
                                    </div>
                                    <div className="text-xs text-slate-400 line-clamp-1">
                                      Registre national et contrôle sous 72h
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-4">
                              <div>
                                <div className="flex items-center gap-1.5 text-xs font-mono text-white mb-2 uppercase tracking-wider">
                                  <Globe2 className="w-3.5 h-3.5 text-[#C7A45D]" />
                                  3. Coopérer avec le monde
                                </div>
                                <div className="space-y-1 pl-4 border-l border-[#102A43]">
                                  <Link
                                    href="/expertises/partenariats-universitaires"
                                    className="block p-2 rounded-lg hover:bg-[#102A43] group transition-colors"
                                  >
                                    <div className="text-sm font-medium text-slate-200 group-hover:text-[#E1C783]">
                                      Partenariats universitaires
                                    </div>
                                    <div className="text-xs text-slate-400 line-clamp-1">
                                      Accords bilatéraux équitables et recherche
                                    </div>
                                  </Link>
                                  <Link
                                    href="/expertises/co-diplomations"
                                    className="block p-2 rounded-lg hover:bg-[#102A43] group transition-colors"
                                  >
                                    <div className="text-sm font-medium text-slate-200 group-hover:text-[#E1C783]">
                                      Co-diplomations souveraines
                                    </div>
                                    <div className="text-xs text-slate-400 line-clamp-1">
                                      Doubles diplômes avec ancrage local
                                    </div>
                                  </Link>
                                  <Link
                                    href="/expertises/formation-cadres-publics"
                                    className="block p-2 rounded-lg hover:bg-[#102A43] group transition-colors"
                                  >
                                    <div className="text-sm font-medium text-slate-200 group-hover:text-[#E1C783]">
                                      Formation des cadres publics
                                    </div>
                                    <div className="text-xs text-slate-400 line-clamp-1">
                                      Résidences stratégiques pour recteurs et DG
                                    </div>
                                  </Link>
                                </div>
                              </div>

                              <div>
                                <div className="flex items-center gap-1.5 text-xs font-mono text-white mb-2 uppercase tracking-wider">
                                  <Users className="w-3.5 h-3.5 text-[#E1C783]" />
                                  4. Retenir & valoriser les talents
                                </div>
                                <div className="space-y-1 pl-4 border-l border-[#102A43]">
                                  <Link
                                    href="/expertises/bourses-ciblees"
                                    className="block p-2 rounded-lg hover:bg-[#102A43] group transition-colors"
                                  >
                                    <div className="text-sm font-medium text-slate-200 group-hover:text-[#E1C783]">
                                      Bourses ciblées
                                    </div>
                                    <div className="text-xs text-slate-400 line-clamp-1">
                                      Financement fléché sur les manques nationaux
                                    </div>
                                  </Link>
                                  <Link
                                    href="/expertises/retour-talents"
                                    className="block p-2 rounded-lg hover:bg-[#102A43] group transition-colors"
                                  >
                                    <div className="text-sm font-medium text-slate-200 group-hover:text-[#E1C783]">
                                      Retour sécurisé des talents
                                    </div>
                                    <div className="text-xs text-slate-400 line-clamp-1">
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
                    className={`px-3.5 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'text-[#C7A45D] font-semibold bg-[#102A43]/50'
                        : 'hover:text-white hover:bg-[#102A43]/30'
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
                className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full bg-[#C7A45D] hover:bg-[#E1C783] text-[#07111F] font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#C7A45D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F]"
              >
                <span>Présenter un besoin national</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu de navigation'}
                aria-expanded={mobileMenuOpen}
                className="p-2.5 rounded-xl bg-[#0B1B2E] border border-[#102A43] text-slate-200 hover:text-[#C7A45D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A45D]"
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
          className="fixed inset-0 z-40 bg-[#07111F] text-white pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto lg:hidden animate-in fade-in duration-200"
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
                className="w-full pl-10 pr-4 py-2.5 bg-[#0B1B2E] border border-[#102A43] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C7A45D]"
              />
            </div>

            {/* Search results if query */}
            {searchQuery.trim() ? (
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#C7A45D] uppercase tracking-wider">
                  Résultats ({filteredExpertises.length})
                </span>
                {filteredExpertises.length > 0 ? (
                  filteredExpertises.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/expertises/${item.slug}`}
                      className="block p-3 rounded-xl bg-[#0B1B2E] border border-[#102A43] hover:border-[#C7A45D]"
                    >
                      <div className="text-sm font-semibold text-white">{item.title}</div>
                      <div className="text-xs text-slate-400 line-clamp-1">{item.shortDescription}</div>
                    </Link>
                  ))
                ) : (
                  <p className="text-xs text-slate-400 italic">Aucune expertise ne correspond.</p>
                )}
              </div>
            ) : (
              /* Regular Accordion Mobile Links */
              <div className="space-y-1 divide-y divide-[#102A43]/50">
                <Link
                  href="/"
                  className="block py-3 text-lg font-serif text-slate-200 hover:text-[#C7A45D]"
                >
                  Accueil
                </Link>
                <Link
                  href="/le-ceiue"
                  className="block py-3 text-lg font-serif text-slate-200 hover:text-[#C7A45D]"
                >
                  Le CEIUE
                </Link>
                <div className="py-2">
                  <div className="text-xs font-mono text-[#C7A45D] uppercase tracking-wider mb-2">
                    Expertises
                  </div>
                  <div className="pl-3 space-y-2 border-l border-[#102A43]">
                    <Link
                      href="/expertises/audit-offre-formation"
                      className="block text-sm text-slate-300 hover:text-white"
                    >
                      Audit de l'offre de formation
                    </Link>
                    <Link
                      href="/expertises/authentification-diplomes"
                      className="block text-sm text-slate-300 hover:text-[#5CC8E8]"
                    >
                      Authentification des diplômes
                    </Link>
                    <Link
                      href="/expertises/bourses-ciblees"
                      className="block text-sm text-slate-300 hover:text-white"
                    >
                      Bourses ciblées & filières manquantes
                    </Link>
                    <Link
                      href="/expertises/retour-talents"
                      className="block text-sm text-slate-300 hover:text-white"
                    >
                      Retour sécurisé des talents
                    </Link>
                    <Link
                      href="/expertises/partenariats-universitaires"
                      className="block text-sm text-slate-300 hover:text-white"
                    >
                      Partenariats universitaires
                    </Link>
                    <Link
                      href="/expertises/co-diplomations"
                      className="block text-sm text-slate-300 hover:text-white"
                    >
                      Co-diplomations souveraines
                    </Link>
                  </div>
                </div>
                <Link
                  href="/methode"
                  className="block py-3 text-lg font-serif text-slate-200 hover:text-[#C7A45D]"
                >
                  Méthode
                </Link>
                <Link
                  href="/publics"
                  className="block py-3 text-lg font-serif text-slate-200 hover:text-[#C7A45D]"
                >
                  Publics & Institutions
                </Link>
                <Link
                  href="/ressources"
                  className="block py-3 text-lg font-serif text-slate-200 hover:text-[#C7A45D]"
                >
                  Ressources & Publications
                </Link>
              </div>
            )}
          </div>

          {/* Sticky CTA on bottom */}
          <div className="mt-8 pt-4 border-t border-[#102A43]">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 h-14 rounded-full bg-[#C7A45D] text-[#07111F] font-bold text-base shadow-xl"
            >
              <span>Présenter un besoin national</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-center font-mono text-[11px] text-slate-400 mt-3">
              Guichet confidentiel réservé aux administrations & partenaires
            </p>
          </div>
        </div>
      )}
    </>
  );
}
