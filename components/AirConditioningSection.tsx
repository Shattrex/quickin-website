import { Snowflake } from 'lucide-react';
import { acDiagnosticCards } from '@/lib/content';
import { site } from '@/lib/site';
import SectionHeader from '@/components/ui/SectionHeader';
import CTAButton from '@/components/ui/CTAButton';

export default function AirConditioningSection() {
  return (
    <section id="ac-diagnostics" className="py-16 lg:py-24 section-alt relative overflow-hidden">
      <div className="garage-grid absolute inset-0 opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <SectionHeader
              eyebrow="A/C Diagnostics"
              title="Warm air doesn't always mean you need a new compressor."
              description="Quick In focuses on proper diagnostics before replacing parts. Tennessee heat is hard enough — you deserve to know what's actually wrong with your A/C before paying for a fix you may not need."
            />
            <CTAButton href={`#${site.serviceRequestId}`}>Book A/C Diagnostic</CTAButton>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {acDiagnosticCards.map((card) => (
              <div
                key={card.title}
                className="metallic-card rounded-lg p-5 transition-all duration-300 hover:border-[#E10600]/40"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Snowflake size={16} className="text-[#E10600]" />
                  <h3 className="text-[#002D62] font-bold text-sm">{card.title}</h3>
                </div>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
