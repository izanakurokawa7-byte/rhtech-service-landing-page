import React, { useState, useEffect } from 'react';
import { Cpu, MessageCircle, Menu, X, Code, Phone, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onOpenCodeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCodeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active nav spy
      const sections = ['hero', 'about', 'layanan', 'galeri', 'faq', 'kontak'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Beranda' },
    { id: 'about', label: 'Tentang' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'faq', label: 'FAQ' },
    { id: 'kontak', label: 'Kontak' },
  ];

  const waLink = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Halo RH Tech, saya ingin konsultasi servis komputer / laptop.')}`;

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#020617]/90 backdrop-blur-md border-b border-[#1e293b] shadow-lg shadow-black/50 py-3.5'
        : 'bg-transparent border-b border-[#1e293b]/40 py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo & Brand */}
          <a
            href="#hero"
            id="nav-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <img src="/foto-rh.png" alt="Logo RH Tech" className="h-10 w-auto object-contain rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.4)] border border-cyan-500/20" />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white">RH <span className="text-cyan-400">TECH</span></span>
              </div>
              <span className="block text-[10px] tracking-[0.2em] text-slate-400 uppercase font-semibold">
                Service &amp; PC Build
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-[#0f172a]/80 p-1.5 rounded-full border border-[#1e293b] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={`#${link.id}`}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">

            {/* WA Button */}
            <a
              id="nav-wa-cta"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              id="btn-mobile-code"
              onClick={onOpenCodeModal}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400"
              aria-label="Lihat Kode"
            >
              <Code className="w-5 h-5" />
            </button>

            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div id="mobile-menu-drawer" className="lg:hidden mt-4 pt-4 pb-6 px-4 rounded-2xl bg-[#0f172a] border border-[#1e293b] shadow-2xl space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-colors ${activeSection === link.id
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800'
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>Konsultasi WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCodeModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider"
              >
                <Code className="w-4 h-4 text-cyan-400" />
                <span>Lihat Kode HTML Murni</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
