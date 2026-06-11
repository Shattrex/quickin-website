'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { symptoms } from '@/lib/content';
import { site } from '@/lib/site';
import SectionHeader from '@/components/ui/SectionHeader';
import CTAButton from '@/components/ui/CTAButton';

export default function SymptomChecker() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = symptoms.find((s) => s.id === selectedId);

  return (
    <section id="symptom-checker" className="py-16 lg:py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 red-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Quick Check"
          title="What's your car doing?"
          description="Tap a symptom below to see a recommended next step. This is a front-end guide — a proper diagnostic at the shop confirms the actual cause."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {symptoms.map((symptom) => (
              <button
                key={symptom.id}
                type="button"
                onClick={() => setSelectedId(symptom.id)}
                className={`px-4 py-2.5 rounded-sm text-sm font-semibold transition-all duration-200 border ${
                  selectedId === symptom.id
                    ? 'bg-[#E10600] border-[#E10600] text-white shadow-md shadow-[#E10600]/25'
                    : 'bg-white border-[#D8DCE2] text-[#002D62] hover:border-[#E10600]/50'
                }`}
              >
                {symptom.label}
              </button>
            ))}
          </div>

          <div className="min-h-[240px]">
            {selected ? (
              <div className="metallic-card rounded-lg p-6 lg:p-8 red-glow-border">
                <p className="text-[#A7A9AC] text-xs font-bold uppercase tracking-widest mb-3">
                  Recommended next step
                </p>
                <h3 className="text-[#002D62] font-extrabold text-xl mb-4">
                  {selected.nextStep}
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed mb-6">
                  {selected.recommendation}
                </p>
                <div className="flex items-start gap-2 text-sm text-[#4A4A4A] mb-6">
                  <CheckCircle2 size={16} className="text-[#E10600] shrink-0 mt-0.5" />
                  <span>
                    Symptom selected: <strong className="text-[#002D62]">{selected.label}</strong>
                  </span>
                </div>
                <CTAButton href={`#${site.serviceRequestId}`}>
                  Start a Service Request
                </CTAButton>
              </div>
            ) : (
              <div className="metallic-card rounded-lg p-6 lg:p-8 h-full flex items-center justify-center border-dashed">
                <p className="text-[#4A4A4A] text-center">
                  Select a symptom to see a recommended next step.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
