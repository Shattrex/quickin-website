import { site } from '@/lib/site';

export default function AnnouncementStrip() {
  return (
    <div className="bg-[#002D62] text-white text-center py-2.5 px-4 text-xs sm:text-sm font-bold tracking-wide">
      {site.announcementText}
    </div>
  );
}
