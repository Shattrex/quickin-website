'use client';

import { Building2, MapPin, Wrench, Car } from 'lucide-react';

const trustCards = [
  {
    icon: <Building2 size={20} />,
    title: '3-Bay Facility',
    desc: 'Equipped for diagnostics, A/C, brakes, and light automotive repair.',
  },
  {
    icon: <MapPin size={20} />,
    title: 'Morristown, TN',
    desc: 'Locally operated and invested in this community for the long term.',
  },
  {
    icon: <Wrench size={20} />,
    title: 'A/C + Light Repair',
    desc: 'Air conditioning, brake service, cooling systems, electrical, and maintenance.',
  },
  {
    icon: <Car size={20} />,
    title: 'Built for Older Vehicles',
    desc: 'We specialize in keeping reliable vehicles running — not just servicing new ones.',
  },
];

export default function LocalTrustSection() {
  return (
    <section className="relative bg-[#0B0B0D] py-20 lg:py-28">
      <div className="section-sep" />

      {/* Background grid */}
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-[#E10600]" />
              <span className="text-[#E10600] text-xs font-bold tracking-[0.25em] uppercase">
                About Quick In
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Built for{' '}
              <span className="text-[#E10600]">Morristown</span>{' '}
              drivers.
            </h2>
            <p className="text-[#A7A9AC] text-lg leading-relaxed mb-6">
              In a community where vehicles are needed for work, school, healthcare,
              and daily life — downtime matters. Quick In is built around fast
              communication, clear diagnostics, and reliable repair.
            </p>
            <p className="text-[#A7A9AC] leading-relaxed">
              We're not a chain. We don't upsell. We don't guess. We find out what's
              wrong, tell you what it costs, and fix it right.
            </p>

            {/* Morristown callout */}
            <div className="mt-8 flex items-center gap-3">
              <div className="w-[3px] h-12 bg-[#E10600]" />
              <div>
                <p className="text-white font-bold">Morristown, Tennessee</p>
                <p className="text-[#A7A9AC] text-sm">Serving our local community</p>
              </div>
            </div>
          </div>

          {/* Right: Facility cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustCards.map((card) => (
              <div
                key={card.title}
                className="group bg-[#1F2124] border border-[#A7A9AC]/10 hover:border-[#A7A9AC]/30 p-5 transition-all duration-300"
              >
                <div className="text-[#E10600] mb-3">{card.icon}</div>
                <h3 className="text-white font-bold text-sm mb-1.5">{card.title}</h3>
                <p className="text-[#A7A9AC]/70 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
