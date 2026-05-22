import { Phone, MapPin, Snowflake, Disc } from 'lucide-react';
import { site } from '@/lib/site';

const trustChips = [
  { label: 'Brakes', icon: <Disc size={14} className="text-[#e10600]" /> },
  { label: 'Air Conditioning', icon: <Snowflake size={14} className="text-[#1e5a9e]" /> },
  { label: 'Local Morristown Shop', icon: null },
  { label: 'Fast Service', icon: null },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafbfc] to-[#f4f5f7]"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#e8f2fc] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-50 rounded-full blur-3xl" />
      </div>

      <div className="speed-accent absolute top-0 left-0 right-0" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#002d62] font-bold text-sm tracking-wide uppercase mb-4">
              {site.city}, {site.state}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#002d62] leading-tight mb-5">
              Fast Brakes &amp; Air Conditioning Service in Morristown
            </h1>
            <p className="text-[#4a4a4a] text-lg leading-relaxed mb-8 max-w-xl">
              {site.businessName} helps local drivers get back on the road with honest
              diagnostics, clear communication, and fast service for brakes, A/C, and light
              auto repair.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-[#e10600] hover:bg-[#b80500] text-white font-bold px-8 py-4 rounded-sm transition-colors"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href={site.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#002d62] text-[#002d62] hover:bg-[#002d62] hover:text-white font-bold px-8 py-4 rounded-sm transition-colors"
              >
                <MapPin size={20} />
                Get Directions
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {trustChips.map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 bg-white border border-[#e2e4e8] text-[#1a1a1a] text-xs font-semibold px-3 py-2 rounded-full shadow-sm"
                >
                  {chip.icon}
                  {chip.label}
                </span>
              ))}
            </div>
          </div>

          {/* Visual placeholder — replace image in /public when ready */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#e8f2fc] via-white to-[#f4f5f7] border border-[#e2e4e8] shadow-lg overflow-hidden flex flex-col items-center justify-center p-8 text-center">
              <div className="w-full max-w-[280px] mb-4 opacity-90">
                <svg viewBox="0 0 320 120" className="w-full h-auto" aria-hidden>
                  <path
                    d="M40 85 L55 55 Q75 40 110 38 L220 38 Q255 42 270 58 L285 85 Z"
                    fill="#002d62"
                    opacity="0.15"
                  />
                  <path
                    d="M70 85 L85 62 Q100 50 125 48 L195 48 Q215 50 228 62 L240 85 Z"
                    fill="#1e5a9e"
                    opacity="0.2"
                  />
                  <ellipse cx="95" cy="88" rx="22" ry="22" fill="#1a1a1a" opacity="0.08" />
                  <ellipse cx="235" cy="88" rx="22" ry="22" fill="#1a1a1a" opacity="0.08" />
                  <path
                    d="M20 60 Q80 20 160 35 Q240 50 300 45"
                    stroke="#e10600"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.5"
                  />
                  <path
                    d="M30 70 Q90 35 165 48 Q240 62 295 58"
                    stroke="#002d62"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.4"
                  />
                </svg>
              </div>
              <p className="text-[#002d62] font-bold text-sm">Automotive service visual</p>
              <p className="text-[#a7a9ac] text-xs mt-1 max-w-[220px]">
                Replace with your shop or vehicle photo in /public
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
