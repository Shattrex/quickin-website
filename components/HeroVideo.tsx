'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { site } from '@/lib/site';

export default function HeroVideo() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="relative w-full flex justify-center lg:justify-end">
      <div className="relative w-full max-w-[min(100%,300px)] sm:max-w-[320px]">
        <div className="absolute -inset-2 bg-gradient-to-br from-[#E10600]/20 via-transparent to-[#002D62]/15 rounded-lg blur-sm pointer-events-none" />
        {/* Strict 9:16 portrait frame */}
        <div
          className="relative w-full rounded-lg overflow-hidden metallic-card red-glow-border bg-[#0B0B0D]"
          style={{ aspectRatio: '9 / 16' }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#E10600] z-30" />

          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#EEF0F3] z-10">
              <div className="w-10 h-10 border-2 border-[#002D62]/20 border-t-[#E10600] rounded-full animate-spin" />
              <p className="text-[#4A4A4A] text-sm font-medium px-4 text-center">
                Loading intro video…
              </p>
            </div>
          )}

          <iframe
            src={site.welcomeVideoEmbedUrl}
            title="Quick In Auto intro video"
            className="absolute inset-0 w-full h-full border-0 z-20"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setIframeLoaded(true)}
          />
        </div>

        <a
          href={site.welcomeVideoViewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#002D62] hover:text-[#E10600] transition-colors"
        >
          <ExternalLink size={14} />
          Open video in Google Drive
        </a>
      </div>
    </div>
  );
}
