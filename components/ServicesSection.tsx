import Image from 'next/image';
import { futureServices } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';
import { OpeningUpdatesButton } from '@/components/ui/CTAButton';

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 section-alt relative">
      <div className="garage-grid absolute inset-0 opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Future Services"
          title="What Quick In Auto Will Specialize In"
          description="Quick In Auto is being built around the automotive services Morristown drivers need most. More details will be announced as the new location prepares to open."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {futureServices.map((service) => (
            <article
              key={service.id}
              className="group metallic-card rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E10600]" />
              </div>
              <div className="p-5 lg:p-6">
                <h3 className="text-[#002D62] font-extrabold text-lg mb-2">{service.title}</h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <OpeningUpdatesButton
                  className="w-full sm:w-auto px-4 py-2.5 text-sm"
                  label="Get Updates on This Service"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
