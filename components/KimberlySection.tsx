'use client';

import Image from 'next/image';
import { useState } from 'react';
import { User } from 'lucide-react';
import { site } from '@/lib/site';
import SectionHeader from '@/components/ui/SectionHeader';
import { OpeningUpdatesButton } from '@/components/ui/CTAButton';

export default function KimberlySection() {
  const [imageError, setImageError] = useState(false);

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
              <div className="relative aspect-[4/5] sm:aspect-[3/4] bg-[#EEF0F3]">
                {!imageError ? (
                  <Image
                    src={site.kimberlyImage}
                    alt="Kimberly — Quick In Auto"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#002D62]/10 border border-[#002D62]/20 flex items-center justify-center mb-4">
                      <User size={36} className="text-[#002D62]/50" />
                    </div>
                    <p className="text-[#002D62] font-bold mb-1">Kimberly</p>
                    <p className="text-[#4A4A4A] text-sm">
                      {/* TODO: Replace with Kimberly's official photo when provided */}
                      Photo coming soon
                    </p>
                  </div>
                )}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#E10600]" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#002D62]/70 to-transparent p-5">
                  <p className="text-white font-bold text-sm">Quick In Auto — Morristown, TN</p>
                  <p className="text-white/80 text-xs mt-1">Opening updates coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
