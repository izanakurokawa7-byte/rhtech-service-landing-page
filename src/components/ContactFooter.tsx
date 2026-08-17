import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Instagram,
  MessageCircle,
  Send,
  Cpu,
  ExternalLink,
  ShieldAlert,
  ArrowUp
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const ContactFooter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    device: 'Laptop Windows (Asus, Lenovo, Acer, HP, dll)',
    issue: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo RH Tech, perkenalkan saya *${formData.name}* (${formData.phone || 'Nomor ini'}).\n\n• *Jenis Perangkat:* ${formData.device}\n• *Keluhan / Rencana Rakit:* ${formData.issue}\n\nSaya ingin konsultasi servis & booking jadwal pengecekan gratis. Terima kasih!`;
    const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="pt-24 pb-12 bg-[#020617] border-t border-[#1e293b] text-slate-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f172a] border border-[#1e293b] text-cyan-400 text-[11px] font-extrabold uppercase tracking-[0.2em] mb-3">
            Lokasi &amp; Kontak
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kunjungi Workshop Atau Hubungi Kami
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Konsultasikan keluhan komputer Anda sekarang. Kami siap membantu dengan diagnosa yang akurat dan solusi tepat.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#1e293b]">

          {/* Left Column: Workshop Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">

            {/* Brand identity */}
            <div className="flex items-center gap-3">
              <img
                src="/foto-rh.png"
                alt="Logo RH Tech"
                className="w-12 h-12 rounded-xl object-contain bg-[#0b1329] p-1 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
              />
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white">
                  RH <span className="text-cyan-400">TECH</span>
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-slate-400 uppercase font-semibold">
                  Service &amp; PC Build Specialist
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Workshop spesialis perbaikan laptop &amp; komputer, recovery data, cleaning &amp; repaste, serta kustomisasi PC rakitan bergaransi resmi.
            </p>

            {/* Address & Operational Hours Box */}
            <div className="p-5 rounded-2xl bg-[#0f172a] border border-[#1e293b] space-y-4 text-xs">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white mb-0.5">Alamat Workshop</div>
                  <div className="text-slate-300 leading-relaxed">{BUSINESS_INFO.address}</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-2 border-t border-[#1e293b]">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold text-white mb-0.5">Jam Operasional</div>
                  <div className="text-slate-300">{BUSINESS_INFO.hours}</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-2 border-t border-[#1e293b]">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="font-bold text-white mb-0.5">WhatsApp &amp; Telepon</div>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline font-semibold"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-2 border-t border-[#1e293b]">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <div>
                  <div className="font-bold text-white mb-0.5">Instagram Portofolio</div>
                  <span className="text-slate-300">{BUSINESS_INFO.instagram}</span>
                </div>
              </div>
            </div>

            {/* Map Preview Card */}
            <div className="p-4 rounded-2xl bg-[#0f172a] border border-[#1e293b] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Buka Navigasi Google Maps</div>
                  <div className="text-[11px] text-slate-400">Panduan rute menuju workshop RH Tech</div>
                </div>
              </div>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Buka Peta</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right Column: Direct Fast WhatsApp Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0f172a] border border-[#1e293b] shadow-2xl relative">
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Formulir Konsultasi Cepat (WhatsApp)
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Isi form singkat di bawah, Anda akan otomatis terhubung ke WhatsApp teknisi dengan draft pesan yang rapi.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Nama Lengkap <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Hendra Wijaya"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0b1329] border border-[#1e293b] text-white text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      No. WhatsApp Anda (Opsional)
                    </label>
                    <input
                      type="tel"
                      placeholder="Contoh: 0812XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0b1329] border border-[#1e293b] text-white text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Jenis Perangkat / Layanan
                  </label>
                  <select
                    value={formData.device}
                    onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b1329] border border-[#1e293b] text-white text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="Laptop Windows (Asus, Lenovo, Acer, HP, dll)">Laptop Windows (Asus, Lenovo, Acer, HP, dll)</option>
                    <option value="PC Desktop / Komputer Rakitan">PC Desktop / Komputer Rakitan</option>
                    <option value="Custom Rakit PC Gaming / Editing">Custom Rakit PC Gaming / Editing</option>
                    <option value="Deep Cleaning & Ganti Thermal Paste">Deep Cleaning &amp; Ganti Thermal Paste</option>
                    <option value="Upgrade SSD & Tambah RAM">Upgrade SSD &amp; Tambah RAM</option>
                    <option value="Install Ulang OS + Software">Install Ulang OS + Software</option>
                    <option value="Penyelamatan & Recovery Data">Penyelamatan &amp; Recovery Data</option>
                    <option value="Perbaikan Engsel / Casing Pecah">Perbaikan Engsel / Casing Pecah</option>
                    <option value="Keluhan Lainnya">Keluhan Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Ceritakan Kerusakan / Kebutuhan <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Contoh: Laptop gaming Asus sering mati mendadak saat render video. Kipas bunyi kencang. Mau dibersihkan dan dicek IC powernya."
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b1329] border border-[#1e293b] text-white text-xs focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[11px] text-slate-300 flex items-center gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Pengecekan awal tidak dikenakan biaya (100% Gratis &amp; Tanpa Paksaan).</span>
                </div>

                <button
                  type="submit"
                  id="btn-submit-contact-wa"
                  className="w-full py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2.5 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-slate-950" />
                  <span>Kirim &amp; Hubungi WhatsApp Sekarang</span>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} <strong>RH Tech</strong>. Hak Cipta Dilindungi.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors font-medium cursor-pointer"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
