import { Camera } from 'lucide-react';
import { facilityPlaceholders } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';

export default function FacilityProgressSection() {
  return (
    <section id="coming-soon" className="py-16 lg:py-24 section-alt relative">
      <div className="absolute top-0 left-0 right-0 red-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          title="The Quick In Auto Facility Is Taking Shape"
          description="The new location is currently being prepared for opening. Once construction is complete, this page will be updated with real photos of the building, service bays, team, and customer arrival area."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {facilityPlaceholders.map((item) => (
            <article
              key={item.title}
              className="metallic-card rounded-lg overflow-hidden border border-[#D8DCE2]"
            >
              <div className="relative aspect-[16/10] bg-[#EEF0F3] flex flex-col items-center justify-center p-6 border-b border-[#D8DCE2]">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#002D62]/15 flex items-center justify-center mb-3 shadow-sm">
                  <Camera size={24} className="text-[#A7A9AC]" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A7A9AC]">
                  Real media will be added after construction
                </p>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#002D62] via-[#E10600] to-[#1E5A9E]" />
              </div>
              <div className="p-5 lg:p-6">
                <h3 className="text-[#002D62] font-extrabold text-base mb-2">{item.title}</h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
