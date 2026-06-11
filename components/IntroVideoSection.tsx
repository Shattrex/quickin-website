'use client';

import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { site } from '@/lib/site';
import SectionHeader from '@/components/ui/SectionHeader';

export default function IntroVideoSection() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id={site.introVideoId} className="py-16 lg:py-24 section-alt relative">
      <div className="absolute top-0 left-0 right-0 red-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          title="Welcome to Quick In Auto & Airconditioning"
          description="Watch a quick introduction to the Quick In approach: clear communication, reliable diagnostics, and service built around getting local drivers back on the road."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden red-glow-border bg-white">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#EEF0F3] z-10">
                <div className="w-10 h-10 border-2 border-[#002D62]/20 border-t-[#E10600] rounded-full animate-spin" />
                <p className="text-[#4A4A4A] text-sm font-medium">Loading video player…</p>
              </div>
            )}

            <iframe
              src={site.introVideoEmbedUrl}
              title="Welcome to Quick In Auto & Airconditioning"
              className="absolute inset-0 w-full h-full border-0 z-20"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIframeLoaded(true)}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">
            <a
              href={site.introVideoViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#002D62] hover:text-[#E10600] transition-colors"
            >
              <ExternalLink size={16} />
              Open video in Google Drive
            </a>
            <span className="hidden sm:inline text-[#A7A9AC]">·</span>
            <p className="text-[#4A4A4A] text-sm text-center">
              Use the player controls to play. Sound starts when you press play.
            </p>
          </div>

          <div className="mt-6 text-center">
            <a
              href={site.introVideoViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#002D62] hover:bg-[#001F45] text-white font-bold text-sm px-6 py-3 rounded-sm transition-colors"
            >
              <Play size={16} fill="white" />
              Watch Intro Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
