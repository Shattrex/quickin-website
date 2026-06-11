import { Disc, Shield } from 'lucide-react';
import { brakeCards } from '@/lib/content';
import { site } from '@/lib/site';
import SectionHeader from '@/components/ui/SectionHeader';
import CTAButton from '@/components/ui/CTAButton';

export default function BrakesSection() {
  return (
    <section id="brakes" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E10600]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Quick In Brakes"
          title="Built to expand into Quick In Brakes."
          description="The Quick In brand is designed to grow from A/C repair into brake service and other everyday auto needs while keeping the same fast, clear, local service experience."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-10">
          {brakeCards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg p-6 border-2 border-[#E10600]/25 bg-white hover:border-[#E10600]/60 hover:shadow-[0_0_24px_rgba(225,6,0,0.1)] transition-all duration-300 shadow-sm"
            >
              <div className="w-10 h-10 rounded-sm bg-[#E10600]/10 border border-[#E10600]/30 flex items-center justify-center mb-4">
                <Disc size={20} className="text-[#E10600]" />
              </div>
              <h3 className="text-[#002D62] font-extrabold text-base mb-2">{card.title}</h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-lg border border-[#E10600]/30 bg-[#E10600]/5">
          <Shield size={28} className="text-[#E10600] shrink-0" />
          <p className="text-[#002D62] font-semibold flex-1">
            Safety-first brake estimates — know what is urgent before you approve any work.
          </p>
          <CTAButton href={`#${site.serviceRequestId}`}>Schedule Brake Service</CTAButton>
        </div>
      </div>
    </section>
  );
}
