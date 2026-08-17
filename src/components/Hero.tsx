import React from 'react';
import { MessageCircle, ArrowDown, ShieldCheck, BadgePercent, Sparkles, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Hero: React.FC = () => {
  const waHeroLink = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Halo RH Tech, saya ingin konsultasi servis komputer / laptop / rakit PC.')}`;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#020617]">
      {/* Subtle Cyan Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Clean Grid Overlay */}
      <div className="absolute inset-0 -z-10 opacity-15 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f172a] border border-[#1e293b] text-cyan-400 text-[11px] font-extrabold uppercase tracking-[0.2em] mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span>Ahli Servis &amp; Rakit PC</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.12] sm:leading-[1.12]">
          Professional <br className="hidden sm:inline" />
          <span className="text-cyan-400">
            Tech Solutions
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Solusi terpercaya untuk perbaikan perangkat keras, optimasi sistem, dan perakitan PC kustom dengan standar performa tinggi serta garansi resmi.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <a
            id="hero-cta-whatsapp"
            href={waHeroLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 text-slate-950" />
            <span>Konsultasi WhatsApp</span>
          </a>

          <a
            id="hero-cta-services"
            href="#layanan"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0f172a] hover:bg-slate-800 text-slate-300 hover:text-white border border-[#1e293b] hover:border-slate-700 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200"
          >
            <span>Lihat Layanan</span>
            <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Trust Badges in Clean Minimalism Cards */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-2xl bg-[#0f172a] border border-[#1e293b] hover:border-cyan-500/40 transition-all flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Garansi Servis</div>
              <div className="text-xs sm:text-sm font-bold text-slate-100">s/d 30 Hari</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0f172a] border border-[#1e293b] hover:border-cyan-500/40 transition-all flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <BadgePercent className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Cek Kerusakan</div>
              <div className="text-xs sm:text-sm font-bold text-slate-100">100% Gratis</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0f172a] border border-[#1e293b] hover:border-cyan-500/40 transition-all flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Transparansi</div>
              <div className="text-xs sm:text-sm font-bold text-slate-100">Foto &amp; Video Bukti</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0f172a] border border-[#1e293b] hover:border-cyan-500/40 transition-all flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Pengerjaan</div>
              <div className="text-xs sm:text-sm font-bold text-slate-100">Bisa Ditunggu</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
