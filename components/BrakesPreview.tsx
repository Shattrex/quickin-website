'use client';

import { AlertTriangle, CheckCircle, Disc, Shield } from 'lucide-react';

const brakeServices = [
  {
    icon: <CheckCircle size={20} />,
    title: 'Brake Inspections',
    desc: 'Full pad, rotor, caliper, and fluid inspection with a written assessment.',
  },
  {
    icon: <Disc size={20} />,
    title: 'Pads & Rotors',
    desc: 'Quality replacement parts, properly torqued — not the cheapest option, but the right one.',
  },
  {
    icon: <AlertTriangle size={20} />,
    title: 'Squeaks & Grinding',
    desc: 'We identify the exact source — wear indicators, glazed pads, or worn rotors — before any repair.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Safety-First Estimates',
    desc: 'You get a clear written estimate with everything explained. No pressure tactics.',
  },
];

export default function BrakesPreview() {
  return (
    <section id="brakes" className="relative bg-[#0B0B0D] py-20 lg:py-28 overflow-hidden">
      <div className="section-sep" />

      {/* Red diagonal accent panel */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[40%] pointer-events-none hidden lg:block"
        style={{
          background: 'linear-gradient(135deg, transparent 40%, rgba(225,6,0,0.04) 100%)',
          clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />

      {/* Decorative red speed lines */}
      <div className="absolute right-0 top-[30%] flex flex-col gap-3 pointer-events-none hidden lg:flex">
        {[120, 200, 80, 160, 240, 100].map((w, i) => (
          <div
            key={i}
            className="h-[2px] bg-gradient-to-l from-[#E10600] to-transparent opacity-50"
            style={{ width: `${w}px` }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-[#E10600]" />
              <span className="text-[#E10600] text-xs font-bold tracking-[0.25em] uppercase">
                Brand Extension
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Built to expand into{' '}
              <span className="text-[#E10600]">Quick In Brakes.</span>
            </h2>
            <p className="text-[#A7A9AC] text-base lg:text-lg leading-relaxed mb-8">
              The same Quick In system can extend from A/C repair to brake service,
              giving the brand a clean and scalable service family. Same diagnostic-first
              process. Same clear estimates. Same trust.
            </p>

            <button
              onClick={() => document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-[#E10600] hover:bg-[#b00500] text-white font-bold text-sm tracking-wider uppercase px-6 py-3 transition-all duration-200"
              style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
            >
              Schedule Brake Service
            </button>
          </div>

          {/* Right: Brake service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brakeServices.map((service, i) => (
              <div
                key={service.title}
                className="group relative bg-[#1F2124] border border-[#E10600]/20 hover:border-[#E10600] p-5 transition-all duration-300 hover:shadow-lg hover:shadow-[#E10600]/10"
              >
                {/* Left red bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#E10600]/40 group-hover:bg-[#E10600] transition-colors duration-300" />

                <div className="text-[#E10600] mb-3 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-1.5">
                  {service.title}
                </h3>
                <p className="text-[#A7A9AC]/70 text-xs leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand expansion note */}
        <div className="mt-12 border-t border-[#E10600]/20 pt-8 flex items-center gap-4">
          <div className="flex gap-3">
            <span className="text-xs font-black tracking-widest text-[#E10600] uppercase px-3 py-1.5 border border-[#E10600]/40 bg-[#E10600]/5">
              Quick In A/C
            </span>
            <span className="text-[#A7A9AC]/30 text-xs self-center">+</span>
            <span className="text-xs font-black tracking-widest text-[#A7A9AC] uppercase px-3 py-1.5 border border-[#A7A9AC]/20">
              Quick In Brakes
            </span>
            <span className="text-[#A7A9AC]/30 text-xs self-center">+</span>
            <span className="text-xs font-black tracking-widest text-[#A7A9AC]/30 uppercase px-3 py-1.5 border border-[#A7A9AC]/10">
              Quick In _____
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
