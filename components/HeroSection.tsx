import Image from 'next/image';
import { site } from '@/lib/site';
import { OpeningUpdatesButton } from '@/components/ui/CTAButton';
import CTAButton from '@/components/ui/CTAButton';
import HeroVideo from '@/components/HeroVideo';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="garage-grid absolute inset-0 opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#002D62] via-[#E10600] to-[#1E5A9E] opacity-80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center">
          <div>
            <div className="mb-6">
              <Image
                src={site.logoPath}
                alt={site.fullName}
                width={260}
                height={96}
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
                priority
              />
            </div>

            <p className="section-eyebrow mb-4">COMING SOON TO MORRISTOWN, TENNESSEE</p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-[#002D62] leading-[1.1] mb-5">
              A New Home for Brakes &amp; Air Conditioning Is Coming Soon.
            </h1>
            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6 max-w-xl">
              Quick In Auto is being built for local drivers who want practical automotive care,
              clear communication, and dependable help with brakes, air conditioning, diagnostics,
              and light auto repair.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <OpeningUpdatesButton />
              <CTAButton href="#services" variant="outline">
                Explore Future Services
              </CTAButton>
            </div>

            <span className="inline-flex items-center gap-2 bg-[#E10600] text-white text-xs font-extrabold uppercase tracking-widest px-4 py-2 rounded-sm shadow-md">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              {site.openingStatus}
            </span>
          </div>

          <HeroVideo />
        </div>
      </div>

      <div className="red-divider" />
    </section>
  );
}
