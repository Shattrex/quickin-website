'use client';

import { Shield, Zap, DollarSign, MapPin, ChevronRight, ArrowDown } from 'lucide-react';

const trustBadges = [
  { icon: <Zap size={16} />, label: 'A/C Diagnostics' },
  { icon: <Shield size={16} />, label: 'Brake Service' },
  { icon: <DollarSign size={16} />, label: 'Clear Estimates' },
  { icon: <MapPin size={16} />, label: 'Local Morristown Shop' },
];

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSymptoms = () => {
    document.getElementById('symptom-checker')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0B0B0D] pt-20">
      {/* Grid texture */}
      <div className="absolute inset-0 grid-texture opacity-60 pointer-events-none" />

      {/* Diagonal graphite panel */}
      <div
        className="absolute right-0 top-0 h-full w-[45%] bg-[#1F2124]/40 pointer-events-none hidden lg:block"
        style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)' }}
      />

      {/* Top speed stripe */}
      <div className="absolute top-20 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E10600]/40 to-transparent pointer-events-none" />

      {/* Red speed lines — left side */}
      <div className="absolute left-0 top-[35%] pointer-events-none hidden lg:flex flex-col gap-3">
        {[180, 280, 160, 220, 100].map((w, i) => (
          <div
            key={i}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#E10600] to-transparent opacity-60"
            style={{ width: `${w}px`, marginLeft: `${i * 8}px` }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Pre-headline badge */}
          <div className="inline-flex items-center gap-2 bg-[#E10600]/10 border border-[#E10600]/30 px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E10600] animate-blink" />
            <span className="text-[#E10600] text-xs font-bold tracking-[0.2em] uppercase">
              Morristown, Tennessee
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight mb-6">
            <span className="block text-white">Morristown's</span>
            <span className="block metallic-text">Quick Stop</span>
            <span className="block text-white">
              for A/C, Brakes
            </span>
            <span className="block text-white">
              &amp; <span className="text-[#E10600]">Light Auto Repair</span>
            </span>
          </h1>

          {/* Sub headline */}
          <p className="text-[#A7A9AC] text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
            Clear diagnostics, honest estimates, and fast local service
            built to get you back on the road.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <button
              onClick={scrollToForm}
              className="group flex items-center justify-center gap-3 bg-[#E10600] hover:bg-[#b00500] text-white font-bold text-sm tracking-wider uppercase px-8 py-4 transition-all duration-200 relative overflow-hidden"
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Schedule Service
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </button>

            <button
              onClick={scrollToSymptoms}
              className="group flex items-center justify-center gap-3 bg-transparent border border-[#A7A9AC]/30 hover:border-[#A7A9AC] text-[#A7A9AC] hover:text-white font-bold text-sm tracking-wider uppercase px-8 py-4 transition-all duration-200"
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            >
              Check My Symptoms
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-[#1F2124] border border-[#A7A9AC]/15 px-4 py-2"
              >
                <span className="text-[#E10600]">{badge.icon}</span>
                <span className="text-[#A7A9AC] text-xs font-semibold tracking-wide uppercase">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[#A7A9AC] text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={14} className="text-[#A7A9AC] animate-bounce" />
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-sep" />
    </section>
  );
}
