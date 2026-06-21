import { ArrowUpRight, MapPin } from 'lucide-react';
import { site } from '@/lib/site';
import SectionHeader from '@/components/ui/SectionHeader';

export default function MapSection() {
  return (
    <section id="location" className="py-16 lg:py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 red-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Location"
          title="Find Quick In Auto in Morristown"
          description="The new Quick In Auto location is being prepared at the address below. Opening updates will be shared as the shop gets closer to launch."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="metallic-card rounded-lg p-6 sm:p-8 flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-sm bg-[#E10600]/10 border border-[#E10600]/30 flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-[#E10600]" />
              </div>
              <div>
                <p className="text-[#002D62] font-extrabold text-xl mb-1">{site.fullName}</p>
                <p className="text-[#4A4A4A] leading-relaxed">{site.address.line1}</p>
                <p className="text-[#4A4A4A]">{site.address.cityStateZip}</p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 bg-[#E10600] text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-sm w-fit mb-6">
              {site.openingStatus}
            </span>

            <a
              href={site.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#002D62] hover:bg-[#001F45] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-sm transition-colors shadow-md w-full sm:w-fit"
            >
              Get Directions
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="metallic-card rounded-lg overflow-hidden min-h-[320px] lg:min-h-[400px] relative">
            <iframe
              title="Quick In Auto location map"
              src={site.mapEmbedUrl}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#E10600] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
