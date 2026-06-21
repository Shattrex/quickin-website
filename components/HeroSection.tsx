import Image from 'next/image';
import { heroImage } from '@/lib/content';
import { site } from '@/lib/site';
import { OpeningUpdatesButton } from '@/components/ui/CTAButton';
import CTAButton from '@/components/ui/CTAButton';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="garage-grid absolute inset-0 opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#002D62] via-[#E10600] to-[#1E5A9E] opacity-80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
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

          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-[#E10600]/20 via-transparent to-[#002D62]/15 rounded-lg blur-sm" />
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden metallic-card red-glow-border">
              <Image
                src={heroImage}
                alt="Modest local automotive service environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/50 via-transparent to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#E10600]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <p className="text-white font-bold text-sm drop-shadow-md">
                  A trustworthy local automotive service experience — preparing to open in Morristown
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="red-divider" />
    </section>
  );
}
