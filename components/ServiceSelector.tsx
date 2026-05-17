'use client';

import { useState } from 'react';
import { Wind, Disc, Droplets, Battery, Wrench, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 'ac',
    icon: <Wind size={28} />,
    title: 'A/C Diagnostics & Repair',
    description: 'Full HVAC diagnostic, refrigerant checks, leak detection, and compressor testing.',
  },
  {
    id: 'brakes',
    icon: <Disc size={28} />,
    title: 'Brake Service',
    description: 'Pad replacement, rotor resurfacing, brake fluid service, and safety inspections.',
  },
  {
    id: 'cooling',
    icon: <Droplets size={28} />,
    title: 'Cooling System',
    description: 'Coolant flush, thermostat inspection, radiator service, and pressure testing.',
  },
  {
    id: 'electrical',
    icon: <Battery size={28} />,
    title: 'Battery & Electrical',
    description: 'Battery testing, alternator diagnosis, starter service, and electrical repairs.',
  },
  {
    id: 'maintenance',
    icon: <Wrench size={28} />,
    title: 'General Maintenance',
    description: 'Oil changes, filter replacements, belts, hoses, and scheduled services.',
  },
  {
    id: 'engine',
    icon: <Wrench size={28} />,
    title: 'Engine Care',
    description: 'Check engine diagnostics, performance checks, tune-ups, and light engine repair.',
  },
];

export default function ServiceSelector() {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedService = services.find(s => s.id === selected);

  const scrollToForm = () => {
    document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative bg-[#0B0B0D] py-20 lg:py-28">
      <div className="section-sep mb-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#E10600]" />
            <span className="text-[#E10600] text-xs font-bold tracking-[0.25em] uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            Select Your <span className="text-[#E10600]">Service</span>
          </h2>
          <p className="text-[#A7A9AC] text-lg max-w-2xl">
            Tell us what you need. We'll build your request, schedule your appointment, and keep you updated every step of the way.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {services.map((service) => {
            const isSelected = selected === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setSelected(isSelected ? null : service.id)}
                className={`group relative text-left p-6 border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#E10600]/10 border-[#E10600] shadow-lg shadow-[#E10600]/10'
                    : 'bg-[#1F2124] border-[#A7A9AC]/15 hover:border-[#E10600]/50 hover:bg-[#1F2124]/80 hover:shadow-md hover:shadow-[#E10600]/5'
                }`}
              >
                {/* Selected indicator */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#E10600] animate-blink" />
                )}

                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                    isSelected ? 'bg-[#E10600]' : 'bg-transparent group-hover:bg-[#E10600]/40'
                  }`}
                />

                {/* Icon */}
                <div
                  className={`mb-4 transition-colors duration-200 ${
                    isSelected ? 'text-[#E10600]' : 'text-[#A7A9AC] group-hover:text-[#E10600]'
                  }`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className={`font-bold text-base mb-2 transition-colors duration-200 ${
                  isSelected ? 'text-white' : 'text-[#A7A9AC] group-hover:text-white'
                }`}>
                  {service.title}
                </h3>
                <p className="text-[#A7A9AC]/70 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Metallic border effect */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                  isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'
                }`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(225,6,0,0.05) 0%, transparent 50%)',
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Selected service panel */}
        {selectedService && (
          <div className="animate-fade-in-up bg-[#1F2124] border border-[#E10600]/40 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-[#E10600]">{selectedService.icon}</div>
              <div>
                <p className="text-[#A7A9AC] text-xs tracking-widest uppercase mb-1">
                  Selected Service
                </p>
                <p className="text-white font-bold text-lg">{selectedService.title}</p>
              </div>
            </div>
            <button
              onClick={scrollToForm}
              className="flex items-center gap-2 bg-[#E10600] hover:bg-[#b00500] text-white font-bold text-sm tracking-wider uppercase px-6 py-3 transition-all duration-200 whitespace-nowrap group"
              style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
            >
              Start Request
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
