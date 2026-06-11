import { processSteps } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 lg:py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 red-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          title="How Quick In Works"
          description="A straightforward process designed to keep you informed at every step — from the first call to getting back on the road."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="metallic-card rounded-lg p-6 lg:p-7 relative overflow-hidden group hover:border-[#E10600]/40 transition-all duration-300"
            >
              <span className="absolute top-4 right-4 text-5xl font-extrabold text-[#002D62]/8 group-hover:text-[#E10600]/15 transition-colors">
                {step.step}
              </span>
              <div className="w-10 h-10 rounded-full bg-[#E10600] flex items-center justify-center text-white font-extrabold text-lg mb-5 shadow-md shadow-[#E10600]/25">
                {step.step}
              </div>
              <h3 className="text-[#002D62] font-extrabold text-lg mb-3">{step.title}</h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
