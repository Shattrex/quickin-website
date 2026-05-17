'use client';

import { useState } from 'react';
import { AlertTriangle, ChevronRight, RotateCcw } from 'lucide-react';

type Symptom = {
  id: string;
  label: string;
  emoji: string;
};

type Recommendation = {
  title: string;
  body: string;
  urgency: 'high' | 'medium' | 'low';
  service: string;
};

const symptoms: Symptom[] = [
  { id: 'ac-warm', label: 'A/C blowing warm air', emoji: '🌡️' },
  { id: 'ac-weak', label: 'Weak airflow', emoji: '💨' },
  { id: 'brakes-grind', label: 'Grinding brakes', emoji: '⚠️' },
  { id: 'brakes-squeak', label: 'Squeaking brakes', emoji: '🔊' },
  { id: 'overheat', label: 'Car overheating', emoji: '🔥' },
  { id: 'warning-light', label: 'Warning light on', emoji: '🚨' },
  { id: 'battery', label: 'Battery keeps dying', emoji: '🔋' },
  { id: 'not-sure', label: "I'm not sure", emoji: '❓' },
];

const recommendations: Record<string, Recommendation> = {
  'ac-warm': {
    title: 'A/C Diagnostic Check',
    body: 'Warm air can come from low refrigerant, a refrigerant leak, electrical issues, or a failing compressor. We diagnose first — so you only pay for what you actually need.',
    urgency: 'medium',
    service: 'A/C Diagnostics & Repair',
  },
  'ac-weak': {
    title: 'HVAC Airflow Inspection',
    body: 'Weak airflow typically points to a clogged cabin air filter, blower motor issues, or a blocked evaporator. Quick fix in most cases.',
    urgency: 'low',
    service: 'A/C Diagnostics & Repair',
  },
  'brakes-grind': {
    title: 'Brake Inspection — Urgent',
    body: 'Grinding is metal-on-metal contact. This means your brake pads are completely worn and your rotors may be damaged. Schedule immediately — this is a safety issue.',
    urgency: 'high',
    service: 'Brake Service',
  },
  'brakes-squeak': {
    title: 'Brake Pad Inspection',
    body: 'Squeaking brakes usually means your brake pad wear indicators are contacting the rotor — a built-in warning. Service soon to avoid rotor damage.',
    urgency: 'medium',
    service: 'Brake Service',
  },
  'overheat': {
    title: 'Cooling System Diagnosis',
    body: 'Overheating can be caused by low coolant, a failing thermostat, a damaged radiator, or a bad water pump. Do not drive an overheating vehicle. Schedule ASAP.',
    urgency: 'high',
    service: 'Cooling System',
  },
  'warning-light': {
    title: 'Diagnostic Scan',
    body: 'Warning lights trigger stored fault codes in your vehicle\'s computer. We pull and interpret those codes, explain what they mean, and give you a clear estimate.',
    urgency: 'medium',
    service: 'Engine Care',
  },
  'battery': {
    title: 'Battery & Charging System Test',
    body: 'A repeatedly dying battery points to a failing battery, a bad alternator, or a parasitic draw draining power overnight. We test the full charging system.',
    urgency: 'medium',
    service: 'Battery & Electrical',
  },
  'not-sure': {
    title: "Let's Figure It Out Together",
    body: "You don't need to know the diagnosis before you come in. Describe what you're experiencing, and we'll handle the rest with a proper inspection.",
    urgency: 'low',
    service: 'General Maintenance',
  },
};

const urgencyColors = {
  high: { bg: 'bg-[#E10600]/10', border: 'border-[#E10600]', text: 'text-[#E10600]', label: 'HIGH PRIORITY' },
  medium: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/50', text: 'text-yellow-400', label: 'SCHEDULE SOON' },
  low: { bg: 'bg-[#A7A9AC]/10', border: 'border-[#A7A9AC]/30', text: 'text-[#A7A9AC]', label: 'ROUTINE' },
};

export default function SymptomChecker() {
  const [selected, setSelected] = useState<string | null>(null);
  const rec = selected ? recommendations[selected] : null;

  const scrollToForm = () => {
    document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="symptom-checker" className="relative bg-[#0e1012] py-20 lg:py-28">
      <div className="section-sep" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#E10600]" />
            <span className="text-[#E10600] text-xs font-bold tracking-[0.25em] uppercase">
              Symptom Checker
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            What's your <span className="text-[#A7A9AC]">car doing?</span>
          </h2>
          <p className="text-[#A7A9AC] text-lg">
            Select a symptom and we'll tell you exactly what it likely means.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Symptom grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {symptoms.map((symptom) => {
              const isActive = selected === symptom.id;
              return (
                <button
                  key={symptom.id}
                  onClick={() => setSelected(isActive ? null : symptom.id)}
                  className={`group flex items-center gap-3 p-4 border text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-[#E10600]/10 border-[#E10600] text-white'
                      : 'bg-[#1F2124] border-[#A7A9AC]/15 hover:border-[#E10600]/40 hover:bg-[#1F2124]/80 text-[#A7A9AC] hover:text-white'
                  }`}
                >
                  <span className="text-xl flex-shrink-0">{symptom.emoji}</span>
                  <span className="font-semibold text-sm leading-tight">{symptom.label}</span>
                  {isActive && (
                    <span className="ml-auto">
                      <div className="w-2 h-2 rounded-full bg-[#E10600]" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Recommendation panel */}
          <div className="min-h-[280px]">
            {!rec ? (
              <div className="h-full flex flex-col items-center justify-center bg-[#1F2124] border border-[#A7A9AC]/10 p-8 text-center min-h-[280px]">
                <AlertTriangle size={36} className="text-[#A7A9AC]/30 mb-4" />
                <p className="text-[#A7A9AC]/50 text-sm font-medium tracking-wide">
                  Select a symptom on the left to see our recommendation
                </p>
              </div>
            ) : (
              <div className={`animate-fade-in-up h-full border p-6 ${urgencyColors[rec.urgency].bg} ${urgencyColors[rec.urgency].border}`}>
                {/* Urgency badge */}
                <div className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-4 ${urgencyColors[rec.urgency].text}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${urgencyColors[rec.urgency].text.replace('text-', 'bg-')}`} />
                  {urgencyColors[rec.urgency].label}
                </div>

                <h3 className="text-white text-xl font-black mb-3">
                  Recommended Next Step:
                </h3>
                <h4 className={`text-lg font-bold mb-4 ${urgencyColors[rec.urgency].text}`}>
                  {rec.title}
                </h4>

                <p className="text-[#A7A9AC] text-sm leading-relaxed mb-6">
                  {rec.body}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={scrollToForm}
                    className="flex items-center justify-center gap-2 bg-[#E10600] hover:bg-[#b00500] text-white font-bold text-xs tracking-wider uppercase px-5 py-3 transition-all duration-200 group"
                    style={{ clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)' }}
                  >
                    Schedule for {rec.service}
                    <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => setSelected(null)}
                    className="flex items-center justify-center gap-2 border border-[#A7A9AC]/20 hover:border-[#A7A9AC]/50 text-[#A7A9AC] hover:text-white font-bold text-xs tracking-wider uppercase px-5 py-3 transition-all duration-200"
                  >
                    <RotateCcw size={12} />
                    Check Another
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
