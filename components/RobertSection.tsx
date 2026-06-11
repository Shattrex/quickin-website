import Image from 'next/image';
import { Check } from 'lucide-react';
import { robertTrustBullets } from '@/lib/content';
import { site } from '@/lib/site';
import CTAButton from '@/components/ui/CTAButton';

export default function RobertSection() {
  return (
    <section id="meet-robert" className="py-16 lg:py-24 section-alt relative">
      <div className="absolute top-0 left-0 right-0 red-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-[#E10600]/15 via-transparent to-[#002D62]/10 rounded-lg blur-md" />
            <div className="relative aspect-[3/4] sm:aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-lg overflow-hidden metallic-card red-glow-border">
              <Image
                src={site.robertImage}
                alt="Robert — service leader at Quick In Auto & Airconditioning"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#E10600]" />
            </div>
          </div>

          <div>
            <p className="section-eyebrow mb-3">Meet Robert</p>
            <h2 className="relative heading-accent inline-block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002D62] mb-3">
              Meet Robert
            </h2>
            <p className="text-[#E10600] font-bold text-lg mb-6">
              The trusted face helping keep Quick In moving.
            </p>
            <p className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed mb-8">
              Robert helps lead the day-to-day service experience at Quick In Auto &amp;
              Airconditioning. From helping customers understand what their vehicle needs to
              keeping the process clear and organized, Robert brings a practical, local, and
              dependable presence to the shop.
            </p>

            <ul className="space-y-3 mb-8">
              {robertTrustBullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-sm bg-[#E10600]/10 border border-[#E10600]/30 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-[#E10600]" />
                  </span>
                  <span className="text-[#002D62] font-semibold">{bullet}</span>
                </li>
              ))}
            </ul>

            <CTAButton href={`#${site.serviceRequestId}`}>
              Start a Service Request
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
