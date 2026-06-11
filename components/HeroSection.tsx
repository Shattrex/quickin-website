import { heroTrustBadges } from '@/lib/content';
import { ScheduleServiceButton, WatchVideoButton } from '@/components/ui/CTAButton';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="garage-grid absolute inset-0 opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#002D62] via-[#E10600] to-[#002D62] opacity-80" />
      <div className="absolute bottom-0 right-0 w-[60%] h-px motion-line opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl">
          <p className="section-eyebrow mb-4">Morristown, Tennessee</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-[#002D62] leading-[1.08] mb-6">
            Morristown&apos;s Quick Stop for A/C, Brakes &amp; Light Auto Repair
          </h1>
          <p className="text-[#4A4A4A] text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
            Clear diagnostics, honest estimates, and fast local service built to get you back on
            the road.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <ScheduleServiceButton />
            <WatchVideoButton />
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {heroTrustBadges.map((label) => (
              <span
                key={label}
                className="metallic-card text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 rounded-sm text-[#002D62]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[340px]">
          <div className="metallic-card rounded-lg p-6 red-glow-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#E10600] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#A7A9AC]">
                Service Ready
              </span>
            </div>
            <p className="text-[#002D62] font-bold text-lg mb-2">Local. Fast. Clear.</p>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              A/C diagnostics, brake service, and everyday repairs — built for Morristown drivers
              who need straight answers.
            </p>
            <div className="mt-4 h-px red-divider" />
            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="bg-[#EEF0F3] rounded-sm py-3 border border-[#D8DCE2]">
                <p className="text-[#E10600] font-extrabold text-xl">A/C</p>
                <p className="text-[10px] uppercase tracking-wider text-[#A7A9AC] mt-1">
                  Diagnostics
                </p>
              </div>
              <div className="bg-[#EEF0F3] rounded-sm py-3 border border-[#D8DCE2]">
                <p className="text-[#E10600] font-extrabold text-xl">Brakes</p>
                <p className="text-[10px] uppercase tracking-wider text-[#A7A9AC] mt-1">
                  Service
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
