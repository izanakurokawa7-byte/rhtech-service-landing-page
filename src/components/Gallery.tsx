import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeFeaturedItem, setActiveFeaturedItem] = useState<GalleryItem>(GALLERY_ITEMS[0]);

  return (
    <section id="galeri" className="py-24 bg-[#020617] border-y border-[#1e293b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f172a] border border-[#1e293b] text-cyan-400 text-[11px] font-extrabold uppercase tracking-[0.2em] mb-3">
            Dokumentasi &amp; Portofolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Galeri Pengerjaan
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
            Dokumentasi nyata dari meja kerja RH Tech. Bukti transparansi dan ketelitian kami dalam merakit, merawat, dan mengoptimalkan perangkat Anda.
          </p>
        </div>

        {/* Interactive Compare Slider (Featured Item) */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-[#1e293b] shadow-2xl">

          {/* The Slider Container */}
          <div className="relative w-full h-[320px] sm:h-[460px] rounded-2xl overflow-hidden select-none border border-[#1e293b]">
            
            {/* After Image (Background) */}
            <img
              src={activeFeaturedItem.afterImage}
              alt="Hasil Sesudah Servis"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            


            {/* Before Image (Clipped Overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activeFeaturedItem.beforeImage}
                alt="Kondisi Sebelum Servis"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                style={{ width: '100%', height: '100%', minWidth: '100%' }}
              />
              

            </div>

            {/* Slider Divider Bar */}
            <div
              className="absolute inset-y-0 w-0.5 bg-cyan-400 cursor-ew-resize z-20 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
              style={{ left: `calc(${sliderPosition}% - 1px)` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-xl border-2 border-slate-950">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Native Range Input Controller overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Geser Perbandingan Sebelum dan Sesudah"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>


        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              className="rounded-2xl bg-[#0f172a] border border-[#1e293b] hover:border-cyan-500/40 transition-all duration-300 group overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-0.5">
                {/* Before Image Box */}
                <div className="overflow-hidden group-hover:brightness-95 transition-all">
                  <img
                    src={item.beforeImage}
                    alt={`${item.title} - Sebelum`}
                    className="w-full h-44 sm:h-52 object-cover"
                  />
                </div>

                {/* After Image Box */}
                <div className="overflow-hidden group-hover:brightness-105 transition-all">
                  <img
                    src={item.afterImage}
                    alt={`${item.title} - Sesudah`}
                    className="w-full h-44 sm:h-52 object-cover"
                  />
                </div>
              </div>


            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
