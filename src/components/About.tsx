import React from 'react';
import { CheckCircle2, Shield, Wrench, Award, Clock, Cpu, Users } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#020617] border-y border-[#1e293b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Brand Story & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f172a] border border-[#1e293b] text-cyan-400 text-[11px] font-extrabold uppercase tracking-[0.2em]">
              Tentang RH Tech
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Dedikasi 3+ Tahun dalam Diagnosa &amp; Perbaikan Hardware Komputer
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Didirikan oleh <strong className="text-white font-semibold">Rizky Hermawan</strong>, <strong>RH Tech</strong> lahir dari komitmen menghadirkan layanan servis komputer yang jujur, terbuka, dan berorientasi pada solusi jangka panjang bagi pelanggan.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Banyak pemilik laptop atau PC merasa khawatir akan tagihan membengkak atau pergantian part yang tidak perlu. Di RH Tech, kami menerapkan standar <span className="text-cyan-400 font-medium">100% Transparansi</span>: setiap pengecekan dikomunikasikan secara mendetail, lengkap dengan estimasi biaya di awal dan dokumentasi foto/video saat pengerjaan.
            </p>

            {/* Core Values / Features */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#0f172a] border border-[#1e293b] hover:border-cyan-500/30 transition-all flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white">Biaya Transparan Di Awal</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Tidak ada biaya tak terduga. Semua atas persetujuan Anda sebelum dieksekusi.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0f172a] border border-[#1e293b] hover:border-cyan-500/30 transition-all flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white">Garansi Nota Fisik &amp; Digital</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Jaminan servis 30 hari. Jika kendala terulang, kami tangani tanpa biaya tambahan.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span>Peralatan Diagnosa Mikroskopis &amp; Multitester</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Sparepart Original &amp; Bergaransi Resmi</span>
              </div>
            </div>

          </div>

          {/* Right Column: Technician Profile & Stats */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#0f172a] border border-[#1e293b] shadow-2xl space-y-6">

              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Profile Card Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-[#1e293b]">
                <img
                  src="/foto-rh.png"
                  alt="Foto Rizky RH Tech"
                  className="w-14 h-14 rounded-xl object-cover border-2 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">Rizky Hermawan</h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase">
                      Founder
                    </span>
                  </div>
                  <p className="text-xs text-cyan-400 font-medium mt-0.5">Teknisi IT Muda &amp; Konsultan Hardware</p>
                  <p className="text-xs text-slate-400 mt-0.5">Spesialis Maintenance, Upgrade, &amp; Build PC</p>
                </div>
              </div>

              {/* Numerical Metrics Bento */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-[#0b1329] border border-[#1e293b] text-center flex flex-col justify-center items-center h-full">
                  <div className="text-lg sm:text-xl font-extrabold text-cyan-400 leading-tight">
                    {BUSINESS_INFO.completedDevices}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1.5 font-medium">Laptop & PC Custom</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0b1329] border border-[#1e293b] text-center flex flex-col justify-center items-center h-full">
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-400 leading-tight">
                    {BUSINESS_INFO.satisfactionRate}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1.5 font-medium">Konsultasi & Pengecekan Awal</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0b1329] border border-[#1e293b] text-center flex flex-col justify-center items-center h-full">
                  <div className="text-lg sm:text-xl font-extrabold text-cyan-300 leading-tight">
                    {BUSINESS_INFO.experienceYears}+ Tahun
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1.5 font-medium">Pengalaman Lapangan</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0b1329] border border-[#1e293b] text-center flex flex-col justify-center items-center h-full">
                  <div className="text-lg sm:text-xl font-extrabold text-amber-400 leading-tight">
                    {BUSINESS_INFO.warrantyDays}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1.5 font-medium">Garansi Servis</div>
                </div>
              </div>

              {/* Service Method Callout */}
              <div className="p-4 rounded-2xl bg-[#0b1329] border border-[#1e293b] text-xs text-slate-300 flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>
                  Melayani servis walk-in langsung ke workshop, maupun kirim via ojek online / ekspedisi aman.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
