import { Phone, Snowflake } from 'lucide-react';
import { site } from '@/lib/site';

export default function AirConditioningSection() {
  return (
    <section
      id="air-conditioning"
      className="py-16 lg:py-20 bg-[#e8f2fc] border-y border-[#c5daf0]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#1e5a9e] font-bold text-sm mb-3">
              <Snowflake size={20} />
              Air Conditioning
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#002d62] mb-4">
              Car A/C Not Cooling?
            </h2>
            <p className="text-[#4a4a4a] text-lg leading-relaxed mb-8">
              Tennessee heat makes a weak A/C system impossible to ignore. {site.businessName}{' '}
              checks airflow, cooling performance, leaks, and common A/C issues so you know what
              needs attention.
            </p>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 bg-[#e10600] hover:bg-[#b80500] text-white font-bold px-8 py-4 rounded-sm transition-colors"
            >
              <Phone size={20} />
              Call About A/C Service
            </a>
          </div>
          <div className="hidden lg:block w-48 h-48 rounded-full bg-white/60 border border-[#c5daf0] flex items-center justify-center">
            <Snowflake size={64} className="text-[#1e5a9e] opacity-40" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
