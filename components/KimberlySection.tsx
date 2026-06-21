import Image from 'next/image';
import { site } from '@/lib/site';
import SectionHeader from '@/components/ui/SectionHeader';
import { OpeningUpdatesButton } from '@/components/ui/CTAButton';

export default function KimberlySection() {
  return (
    <section id="kimberly" className="py-16 lg:py-24 section-alt relative">
      <div className="absolute top-0 left-0 right-0 red-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Local Vision"
              title="Built With a Vision for Better Local Service"
              description="Quick In Auto is being developed to give Morristown drivers a more straightforward experience when brakes, air conditioning, and everyday vehicle concerns need attention. As the location comes together, the team will share updates, photos, and a closer look at what is being built."
            />
            <OpeningUpdatesButton label="Be First to Know" />
          </div>

          <div className="relative">
            <div className="metallic-card rounded-lg overflow-hidden red-glow-border">
              <div className="relative aspect-[3/4] sm:aspect-[4/5]">
                <Image
                  src={site.facilityShopImage}
                  alt="Quick In Auto shop location in Morristown, Tennessee"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#E10600]" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#002D62]/80 to-transparent p-5">
                  <p className="text-white font-bold text-sm">Quick In Auto — Morristown, TN</p>
                  <p className="text-white/85 text-xs mt-1">{site.address.full}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
