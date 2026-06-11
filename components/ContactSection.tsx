import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { site } from '@/lib/site';
import SectionHeader from '@/components/ui/SectionHeader';
import { ScheduleServiceButton } from '@/components/ui/CTAButton';
import CTAButton from '@/components/ui/CTAButton';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative">
      <div className="garage-grid absolute inset-0 opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Contact"
          title="Quick In Auto & Airconditioning"
          description="Serving Morristown, Tennessee with clear diagnostics, honest estimates, and fast local service."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="metallic-card rounded-lg p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-[#E10600] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#002D62] font-bold">{site.fullName}</p>
                <p className="text-[#4A4A4A]">{site.locationLabel}</p>
                <p className="text-[#A7A9AC] text-sm mt-1">{site.address.full}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={20} className="text-[#E10600] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#A7A9AC] text-sm">Phone</p>
                <a
                  href={site.phoneHref}
                  className="text-[#002D62] font-bold hover:text-[#E10600] transition-colors"
                >
                  {site.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail size={20} className="text-[#E10600] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#A7A9AC] text-sm">Email</p>
                <a
                  href={site.emailHref}
                  className="text-[#002D62] font-bold hover:text-[#E10600] transition-colors"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={20} className="text-[#E10600] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#A7A9AC] text-sm">Hours</p>
                <p className="text-[#002D62] font-semibold">{site.hours}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <ScheduleServiceButton />
              <CTAButton href={site.phoneHref} variant="outline">
                <Phone size={16} />
                Call Now
              </CTAButton>
            </div>
          </div>

          <div className="metallic-card rounded-lg overflow-hidden min-h-[320px] relative">
            <div className="absolute inset-0 garage-grid opacity-50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <MapPin size={40} className="text-[#E10600]/60 mb-4" />
              <p className="text-[#002D62] font-bold text-lg mb-2">Map Placeholder</p>
              <p className="text-[#4A4A4A] text-sm max-w-xs">
                Live Google Maps embed will appear here once the final shop location is confirmed.
              </p>
              <a
                href={site.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[#E10600] text-sm font-bold hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#E10600]" />
          </div>
        </div>
      </div>
    </section>
  );
}
