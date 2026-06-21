import Image from 'next/image';
import { Check } from 'lucide-react';
import { robertBullets } from '@/lib/content';
import { site } from '@/lib/site';
import { OpeningUpdatesButton } from '@/components/ui/CTAButton';

export default function RobertSection() {
  return (
    <section id="meet-robert" className="py-16 lg:py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 red-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 bg-gradient-to-br from-[#E10600]/15 via-transparent to-[#002D62]/10 rounded-lg blur-md" />
            <div className="relative aspect-[3/4] sm:aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-lg overflow-hidden metallic-card red-glow-border">
              <Image
                src={site.robertImage}
                alt="Robert Livingston — Quick In Auto"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#E10600]" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block bg-[#002D62]/10 border border-[#002D62]/20 text-[#002D62] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm mb-4">
              Meet the Team Before Opening Day
            </span>
            <p className="section-eyebrow mb-3">Team Spotlight</p>
            <h2 className="relative heading-accent inline-block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002D62] mb-3">
              Meet Robert Livingston
            </h2>
            <p className="text-[#E10600] font-bold text-lg mb-6">
              Leading Day-to-Day Operations at Quick In Auto
            </p>
            <p className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed mb-8">
              Robert will help lead the day-to-day operations at Quick In Auto as the new location
              comes together. His focus will be straightforward communication, practical service,
              and helping local drivers feel confident about what their vehicle needs.
            </p>

            <ul className="space-y-3 mb-8">
              {robertBullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-sm bg-[#E10600]/10 border border-[#E10600]/30 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-[#E10600]" />
                  </span>
                  <span className="text-[#002D62] font-semibold">{bullet}</span>
                </li>
              ))}
            </ul>

            <OpeningUpdatesButton label="Request Service Updates" />
          </div>
        </div>
      </div>
    </section>
  );
}
