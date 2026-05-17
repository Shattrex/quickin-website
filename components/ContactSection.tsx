'use client';

import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 5:30 PM' },
  { day: 'Saturday', time: '8:00 AM – 2:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-[#0e1012] py-20 lg:py-28">
      <div className="section-sep" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#E10600]" />
            <span className="text-[#E10600] text-xs font-bold tracking-[0.25em] uppercase">
              Contact & Location
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            Find Us in <span className="text-[#E10600]">Morristown</span>
          </h2>
          <p className="text-[#A7A9AC] text-lg max-w-2xl">
            Call, text, or use the form. We'll respond fast and get you scheduled.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Contact details */}
          <div className="space-y-6">
            {/* Shop info card */}
            <div className="bg-[#1F2124] border border-[#A7A9AC]/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-[#E10600]" />
                <div>
                  <p className="text-white font-black text-base tracking-wide">QUICK IN</p>
                  <p className="text-[#A7A9AC] text-xs tracking-widest uppercase">Auto &amp; Airconditioning</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#E10600] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold">Morristown, Tennessee</p>
                    <p className="text-[#A7A9AC] text-xs">Serving Hamblen County &amp; surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#E10600] flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold">(423) 555-0000</p>
                    <p className="text-[#A7A9AC] text-xs">Call or text</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#E10600] flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold">hello@quickinauto.com</p>
                    <p className="text-[#A7A9AC] text-xs">We respond same day</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-[#E10600] mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    {hours.map(h => (
                      <div key={h.day} className="flex items-center gap-4">
                        <span className="text-[#A7A9AC] text-xs w-36">{h.day}</span>
                        <span className={`text-xs font-semibold ${h.time === 'Closed' ? 'text-[#A7A9AC]/40' : 'text-white'}`}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-1 flex items-center justify-center gap-2 bg-[#E10600] hover:bg-[#b00500] text-white font-bold text-sm tracking-wider uppercase px-6 py-3.5 transition-all duration-200 group"
                style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
              >
                Schedule Service
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:4235550000"
                className="flex-1 flex items-center justify-center gap-2 border border-[#A7A9AC]/20 hover:border-[#A7A9AC]/50 text-[#A7A9AC] hover:text-white font-bold text-sm tracking-wider uppercase px-6 py-3.5 transition-all duration-200"
                style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
              >
                <Phone size={14} />
                Call Now
              </a>
            </div>
          </div>

          {/* Right: Map placeholder */}
          <div className="bg-[#1F2124] border border-[#A7A9AC]/10 overflow-hidden" style={{ minHeight: '360px' }}>
            {/* Dark map placeholder */}
            <div className="relative h-full w-full flex flex-col items-center justify-center min-h-[360px]">
              {/* Fake map grid */}
              <div className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(167,169,172,0.06) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(167,169,172,0.06) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Fake roads */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[40%] left-0 right-0 h-[2px] bg-[#A7A9AC]/10" />
                <div className="absolute top-[60%] left-0 right-0 h-[1px] bg-[#A7A9AC]/08" />
                <div className="absolute left-[35%] top-0 bottom-0 w-[2px] bg-[#A7A9AC]/10" />
                <div className="absolute left-[65%] top-0 bottom-0 w-[1px] bg-[#A7A9AC]/08" />
              </div>

              {/* Location pin */}
              <div className="relative flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="w-14 h-14 bg-[#E10600] flex items-center justify-center animate-glow-pulse">
                    <MapPin size={24} className="text-white" />
                  </div>
                  {/* Pin shadow */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-2 bg-black/40 rounded-full blur-sm" />
                </div>
                <div className="bg-[#0B0B0D]/80 border border-[#A7A9AC]/20 px-4 py-2 text-center">
                  <p className="text-white text-sm font-bold">Quick In Auto &amp; A/C</p>
                  <p className="text-[#A7A9AC] text-xs">Morristown, Tennessee</p>
                </div>
              </div>

              {/* Map label */}
              <div className="absolute bottom-4 right-4">
                <span className="text-[#A7A9AC]/30 text-[10px] tracking-widest uppercase">
                  Live map in production version
                </span>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#E10600]/40" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#E10600]/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
