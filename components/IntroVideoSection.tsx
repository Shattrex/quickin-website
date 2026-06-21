'use client';

import { Play } from 'lucide-react';
import { site } from '@/lib/site';
import SectionHeader from '@/components/ui/SectionHeader';

export default function IntroVideoSection() {
  const hasVideo = Boolean(site.welcomeVideoEmbedUrl);

  return (
    <section id={site.introVideoId} className="py-16 lg:py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 red-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          title="A Welcome From Quick In Auto Is Coming Soon"
          description="As the location gets closer to opening, this space will feature a short welcome video from Kimberly and the Quick In Auto team."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden red-glow-border bg-[#EEF0F3]">
            {hasVideo ? (
              <iframe
                src={site.welcomeVideoEmbedUrl!}
                title="Welcome from Quick In Auto"
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <div className="absolute inset-0 garage-grid opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                  <span className="flex items-center justify-center w-20 h-20 rounded-full bg-[#002D62]/10 border-2 border-[#002D62]/20">
                    <Play size={36} className="text-[#002D62] ml-1" />
                  </span>
                  <p className="text-[#002D62] font-extrabold text-lg sm:text-xl">
                    Quick In Auto Welcome Video Coming Soon
                  </p>
                  <p className="text-[#4A4A4A] text-sm max-w-md">
                    {/* TODO: Embed HeyGen welcome video using Kimberly's image when ready */}
                    A HeyGen welcome video from Kimberly will appear here as opening approaches.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
