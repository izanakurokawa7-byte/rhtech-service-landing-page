import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode, Sparkles, Code2 } from 'lucide-react';
import { STANDALONE_HTML_CODE } from '../data/standaloneCode';

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeModal: React.FC<CodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(STANDALONE_HTML_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([STANDALONE_HTML_CODE], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rhtech-landing-page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0f172a] border border-[#1e293b] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#1e293b] flex items-center justify-between bg-[#0b1329]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Source Code HTML Murni (Tailwind CDN + Vanilla JS)
              </h3>
              <p className="text-xs text-slate-400">
                Single-file <code className="text-cyan-400 font-mono">index.html</code> siap pakai, responsif, dan dilengkapi Intersection Observer.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#0f172a] border border-[#1e293b] text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Toolbar */}
        <div className="px-6 py-3 bg-[#0b1329] border-b border-[#1e293b] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Single File (<code className="text-cyan-400 font-mono">.html</code>)</span>
            <span className="text-slate-600">•</span>
            <span>Tailwind CDN</span>
            <span className="text-slate-600">•</span>
            <span>Vanilla JS Observer</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0f172a] hover:bg-slate-800 text-slate-200 border border-[#1e293b] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download HTML</span>
            </button>

            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all shadow-md cursor-pointer ${
                copied
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Tersalin ke Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Semua Kode</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Preview Box */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto bg-[#020617] font-mono text-xs text-slate-300 leading-relaxed select-all">
          <pre className="whitespace-pre-wrap break-all">
            {STANDALONE_HTML_CODE}
          </pre>
        </div>

        {/* Modal Footer Info */}
        <div className="p-4 bg-[#0b1329] border-t border-[#1e293b] text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Cara pakai: Simpan teks di atas sebagai <code className="text-cyan-400">index.html</code> dan buka langsung di browser apapun!</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#0f172a] border border-[#1e293b] text-slate-300 hover:text-white text-xs font-semibold cursor-pointer"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
