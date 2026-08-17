import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const FloatingWA: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Halo RH Tech, saya ingin konsultasi servis komputer / laptop.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Interactive Tooltip Pop-up */}
      {showTooltip && (
        <div className="relative p-3.5 rounded-2xl bg-[#0f172a] border border-cyan-500/30 text-slate-200 text-xs shadow-2xl max-w-[220px]">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#020617] border border-[#1e293b] text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
            aria-label="Tutup pesan"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="font-bold text-white text-[11px] flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Chat Admin Sekarang</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-tight">
            Ada kendala laptop / PC? Konsultasi gratis via WhatsApp sekarang!
          </p>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        id="floating-wa-btn"
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="p-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-2xl shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group cursor-pointer"
      >
        <MessageCircle className="w-6 h-6 text-slate-950" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2 text-xs font-extrabold uppercase tracking-wider text-slate-950">
          Chat WhatsApp
        </span>
      </a>
    </div>
  );
};
