import { Phone, MapPin } from 'lucide-react';
import { site } from '@/lib/site';

export default function QuickContactStrip() {
  return (
    <section className="bg-[#002d62] text-white py-8 lg:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-white/90 font-bold text-lg lg:text-xl mb-2">
              Need help today? Call {site.businessName}.
            </p>
            <a
              href={site.phoneHref}
              className="text-2xl lg:text-3xl font-extrabold hover:text-[#ffcccc] transition-colors block mb-2"
            >
              {site.phone}
            </a>
            <p className="text-white/80 text-sm flex items-start gap-2">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" />
              {site.address.full}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-[#e10600] hover:bg-[#b80500] text-white font-bold px-8 py-3.5 rounded-sm transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href={site.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#002d62] hover:bg-[#f4f5f7] font-bold px-8 py-3.5 rounded-sm transition-colors"
            >
              <MapPin size={18} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
