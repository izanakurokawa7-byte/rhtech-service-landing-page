import React, { useState } from 'react';
import {
  Laptop,
  Cpu,
  Fan,
  HardDrive,
  AppWindow,
  Wrench,
  Check,
  Clock,
  ShieldCheck,
  MessageCircle,
  Calculator,
  ArrowRight,
  Sparkles,
  Database
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/content';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Interactive Estimator State
  const [estimatorDevice, setEstimatorDevice] = useState<string>('laptop');
  const [estimatorIssue, setEstimatorIssue] = useState<string>('overheat');
  const [customNotes, setCustomNotes] = useState<string>('');

  const filterCategories = [
    { id: 'all', label: 'Semua Layanan' },
    { id: 'laptop', label: 'Laptop' },
    { id: 'rakit', label: 'Rakit PC Custom' },
    { id: 'cleaning', label: 'Deep Cleaning' },
    { id: 'upgrade', label: 'Upgrade Hardware' },
    { id: 'pc', label: 'Recovery Data' },
  ];

  const filteredServices = selectedFilter === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedFilter);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Fan': return <Fan className="w-6 h-6" />;
      case 'HardDrive': return <HardDrive className="w-6 h-6" />;
      case 'AppWindow': return <AppWindow className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      default: return <Wrench className="w-6 h-6" />;
    }
  };

  // Estimator logic calculations
  const getEstimationDetails = () => {
    switch (estimatorIssue) {
      case 'overheat':
        return {
          title: 'Overheat Panas / Fan Bising',
          range: 'Rp 100.000 (Termasuk Pasta Deepcool Z3)',
          time: '1 - 2 Jam (Bisa Ditunggu)',
          tips: 'Pembersihan heatsink, kipas, & ganti thermal paste berkualitas tinggi Deepcool Z3.',
        };
      case 'lemot':
        return {
          title: 'Komputer Lemot / Upgrade RAM & SSD',
          range: 'Rp 100.000 (Flat Jasa Pasang & Install OS)',
          time: '1 - 3 Jam',
          tips: 'Solusi terbaik: Migrasi Windows ke SSD NVMe + Tambah RAM.',
        };
      case 'recovery_data':
        return {
          title: 'Penyelamatan & Recovery Data',
          range: 'Rp 150.000',
          time: '1 - 3 Hari',
          tips: 'Bypass partisi & kloning data aman.',
        };
      case 'engsel':
        return {
          title: 'Engsel Casing Patah / Retak',
          range: 'Rp 100.000 - Rp 200.000',
          time: '3 - 6 Jam',
          tips: 'Rekonstruksi dengan resin kuat + setel kekencangan engsel.',
        };
      case 'rakit_pc':
        return {
          title: 'Mau Rakit PC Baru (Gaming/Office)',
          range: 'Rp 250.000 (Jasa Rakit)',
          time: '1 - 2 Hari Kerja',
          tips: 'Termasuk optimasi airflow, install OS + driver, stress test 24 jam.',
        };
      default:
        return {
          title: 'Konsultasi Kerusakan Umum',
          range: 'Sesuai Hasil Diagnosa',
          time: '1 - 2 Hari',
          tips: 'Bawa ke workshop untuk kami cek tanpa biaya sama sekali.',
        };
    }
  };

  const currentEst = getEstimationDetails();

  const handleSendEstimateWA = () => {
    const deviceLabels: Record<string, string> = {
      laptop: 'Laptop (Windows)',
      pc_desktop: 'PC Desktop / Komputer Rakitan',
      all_in_one: 'PC All-in-One'
    };
    const deviceName = deviceLabels[estimatorDevice] || estimatorDevice.toUpperCase();
    const message = `Halo RH Tech, saya ingin konsultasi via kalkulator web:\n\n• *Perangkat:* ${deviceName}\n• *Kendala/Kebutuhan:* ${currentEst.title}\n• *Solusi Awal:* ${currentEst.tips}\n• *Estimasi Biaya:* ${currentEst.range}\n• *Estimasi Waktu:* ${currentEst.time}\n• *Catatan Tambahan:* ${customNotes || '-'}\n\nMohon info ketersediaan teknisi. Terima kasih!`;
    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="layanan" className="py-24 relative bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f172a] border border-[#1e293b] text-cyan-400 text-[11px] font-extrabold uppercase tracking-[0.2em] mb-3">
            Layanan &amp; Rakit PC
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Solusi Komprehensif Servis &amp; Perakitan PC
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
            Dikerjakan dengan prosedur teliti, alat diagnostik presisi, dan jaminan suku cadang berkualitas.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${selectedFilter === cat.id
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25'
                    : 'bg-[#0f172a] border border-[#1e293b] text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const serviceWaUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Halo RH Tech, saya tertarik dengan layanan *${service.title}*. Mohon info lebih lanjut.`)}`;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="p-6 rounded-2xl bg-[#0f172a] border border-[#1e293b] hover:border-cyan-500/40 hover:bg-[#111c38] transition-all duration-300 group flex flex-col justify-between relative shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                      {getServiceIcon(service.icon)}
                    </div>
                    {service.popular && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        Populer
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 border-t border-[#1e293b] pt-4 mb-5">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1e293b] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{service.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{service.warranty}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <div className="text-[10px] text-slate-400 font-medium">Biaya / Jasa Mulai</div>
                      <div className="text-sm sm:text-base font-extrabold text-white">
                        {service.startingPrice}
                      </div>
                    </div>

                    <a
                      href={serviceWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 border border-cyan-500/30 hover:border-cyan-500 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                    >
                      <span>Pesan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Estimator & Diagnostic Box */}
        <div className="mt-16 p-6 sm:p-10 rounded-3xl bg-[#0f172a] border border-[#1e293b] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left: Interactive Selector */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                <span>Simulasi Estimasi Biaya Cepat</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Ketahui Estimasi Biaya &amp; Solusi Kerusakan Anda
              </h3>

              <p className="text-xs sm:text-sm text-slate-400">
                Pilih jenis perangkat dan kendala yang Anda alami untuk melihat gambaran biaya serta estimasi waktu pengerjaan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Jenis Perangkat</label>
                  <select
                    id="estimator-device-select"
                    value={estimatorDevice}
                    onChange={(e) => setEstimatorDevice(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b1329] border border-[#1e293b] text-white text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="laptop">Laptop (Windows)</option>
                    <option value="pc_desktop">PC Desktop / Komputer Rakitan</option>
                    <option value="all_in_one">PC All-in-One</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Gejala Kerusakan</label>
                  <select
                    id="estimator-issue-select"
                    value={estimatorIssue}
                    onChange={(e) => setEstimatorIssue(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b1329] border border-[#1e293b] text-white text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="overheat">Overheat Panas / Fan Bising</option>
                    <option value="lemot">Komputer Lemot / Upgrade RAM &amp; SSD</option>
                    <option value="recovery_data">Penyelamatan &amp; Recovery Data</option>
                    <option value="engsel">Engsel Casing Patah / Retak</option>
                    <option value="rakit_pc">Mau Rakit PC Baru (Gaming/Office)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Detail Tambahan (Opsional)</label>
                <input
                  type="text"
                  placeholder="Contoh: Asus Vivobook i5 mati mendadak setelah kena air..."
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0b1329] border border-[#1e293b] text-white text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            {/* Right: Instant Result Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#0b1329] border border-cyan-500/30 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#1e293b]">
                  <span className="text-xs font-semibold text-slate-400">Hasil Analisa Awal</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Pengecekan Gratis
                  </span>
                </div>

                <div>
                  <div className="text-sm font-bold text-white">{currentEst.title}</div>
                  <div className="text-xs text-cyan-400 font-semibold mt-1">{currentEst.tips}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#020617] border border-[#1e293b] space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Estimasi Biaya:</span>
                    <span className="font-bold text-emerald-400 text-sm">{currentEst.range}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Estimasi Pengerjaan:</span>
                    <span className="font-semibold text-slate-200">{currentEst.time}</span>
                  </div>
                </div>

                <button
                  id="btn-send-estimate-wa"
                  onClick={handleSendEstimateWA}
                  className="w-full py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all duration-200 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-slate-950" />
                  <span>Kirim Hasil ke WhatsApp</span>
                </button>

                <p className="text-[10px] text-slate-500 text-center">
                  *Estimasi bersifat perkiraan awal. Biaya fix dipastikan setelah pengecekan fisik gratis di workshop.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
