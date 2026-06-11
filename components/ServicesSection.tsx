import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/content';
import { site } from '@/lib/site';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 section-alt relative">
      <div className="garage-grid absolute inset-0 opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Everyday Auto Service, Built for Speed & Trust"
          description="From A/C diagnostics to brake service and light repair — each service is designed around clear communication and practical results."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="group metallic-card rounded-lg p-6 lg:p-7 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-sm bg-[#EEF0F3] border border-[#002D62]/15 flex items-center justify-center mb-5 group-hover:border-[#E10600]/50 group-hover:shadow-[0_0_16px_rgba(225,6,0,0.15)] transition-all">
                  <Icon size={22} className="text-[#E10600]" />
                </div>
                <h3 className="text-[#002D62] font-extrabold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <a
                  href={`#${site.serviceRequestId}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#E10600] hover:text-[#002D62] transition-colors"
                >
                  Learn More
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
