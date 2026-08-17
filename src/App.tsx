import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactFooter } from './components/ContactFooter';
import { CodeModal } from './components/CodeModal';
import { FloatingWA } from './components/FloatingWA';

export default function App() {
  const [codeModalOpen, setCodeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 relative">
      {/* Main Navbar */}
      <Navbar onOpenCodeModal={() => setCodeModalOpen(true)} />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About & Branding Section */}
        <About />

        {/* 3. Services & Custom PC Build */}
        <Services />

        {/* 4. Gallery (Before & After) */}
        <Gallery />

        {/* 5. Testimonials */}
        <Testimonials />

        {/* 6. FAQ Section */}
        <FaqSection />
      </main>

      {/* 7. Footer & Contact Details */}
      <ContactFooter />

      {/* Floating WhatsApp Action Pill */}
      <FloatingWA />

      {/* Standalone Code View & Copy Modal */}
      <CodeModal
        isOpen={codeModalOpen}
        onClose={() => setCodeModalOpen(false)}
      />
    </div>
  );
}
