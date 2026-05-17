'use client';

import { Search, Droplets, Cpu, Wind, Zap, DollarSign } from 'lucide-react';

const diagnosticCards = [
  {
    icon: <Search size={22} />,
    title: 'Leak Detection',
    desc: 'We use UV dye and electronic detectors to find refrigerant leaks at the source — not just refill and send you home.',
  },
  {
    icon: <Droplets size={22} />,
    title: 'Recharge Checks',
    desc: 'Low refrigerant is a symptom, not the fix. We verify system pressure and capacity before any recharge.',
  },
  {
    icon: <Cpu size={22} />,
    title: 'Compressor Diagnosis',
    desc: "Compressor failure is expensive. We verify it's actually the compressor — and not a clutch, fuse, or pressure switch — before recommending replacement.",
  },
  {
    icon: <Wind size={22} />,
    title: 'Condenser & Evaporator',
    desc: 'Clogged or damaged condensers/evaporators are common and often misdiagnosed. We inspect the full loop.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Electrical HVAC Diagnostics',
    desc: 'Sometimes the issue is a relay, fuse, blend door actuator, or fan motor — not refrigerant at all.',
  },
  {
    icon: <DollarSign size={22} />,
    title: 'Clear Diagnostic Fee Policy',
    desc: 'We charge a flat diagnostic fee, explain exactly what we found, then give you the estimate. No pressure. No surprises.',
  },
];

export default function ACDiagnosticsSection() {
  return (
    <section id="ac-diagnostics" className="relative bg-[#0e1012] py-20 lg:py-28">
      <div className="section-sep" />

      {/* Background detail */}
      <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#E10600]" />
            <span className="text-[#E10600] text-xs font-bold tracking-[0.25em] uppercase">
              A/C Service
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Warm air doesn't always mean{' '}
            <span className="text-[#E10600]">you need a new compressor.</span>
          </h2>
          <p className="text-[#A7A9AC] text-lg leading-relaxed">
            Quick In diagnoses first, explains clearly, then repairs properly.
            We find the actual cause before recommending any part or service.
          </p>
        </div>

        {/* Diagnostic cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {diagnosticCards.map((card, i) => (
            <div
              key={card.title}
              className="group relative bg-[#1F2124] border border-[#A7A9AC]/10 p-6 hover:border-[#E10600]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#E10600]/5"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#E10600]/60 transition-all duration-300" />

              {/* Number badge */}
              <div className="absolute top-4 right-4 text-[#A7A9AC]/15 text-4xl font-black leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="text-[#E10600] mb-4 group-hover:scale-110 transition-transform duration-200">
                {card.icon}
              </div>

              <h3 className="text-white font-bold text-base mb-2 group-hover:text-white transition-colors">
                {card.title}
              </h3>
              <p className="text-[#A7A9AC]/80 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom trust statement */}
        <div className="mt-12 bg-[#1F2124] border border-[#E10600]/20 p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="flex-1">
            <p className="text-white font-bold text-lg mb-1">
              The Quick In approach: diagnose first.
            </p>
            <p className="text-[#A7A9AC] text-sm">
              We won't recommend a compressor until we've confirmed through testing that the compressor is actually the problem. That's how trust is built.
            </p>
          </div>
          <button
            onClick={() => document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 flex items-center gap-2 bg-[#E10600] hover:bg-[#b00500] text-white font-bold text-sm tracking-wider uppercase px-6 py-3 transition-all duration-200"
            style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
          >
            Book A/C Diagnostic
          </button>
        </div>
      </div>
    </section>
  );
}
