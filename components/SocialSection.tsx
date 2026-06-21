import { Share2 } from 'lucide-react';
import { site } from '@/lib/site';
import SectionHeader from '@/components/ui/SectionHeader';

export default function SocialSection() {
  return (
    <section id="social" className="py-12 lg:py-16 bg-white relative border-y border-[#D8DCE2]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          align="center"
          title="Follow the Build-Up"
          description="Follow Quick In Auto as the new Morristown location comes together. Opening updates, behind-the-scenes progress, and service announcements will be shared soon."
        />
        <a
          href={site.facebookHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#002D62] hover:bg-[#001F45] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-sm transition-colors shadow-md"
        >
          <Share2 size={18} />
          Follow Quick In Auto on Facebook
        </a>
        {/* TODO: Replace facebookHref with the official Quick In Auto Facebook page URL */}
      </div>
    </section>
  );
}
