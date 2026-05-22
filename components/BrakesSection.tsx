import { Phone } from 'lucide-react';
import { site } from '@/lib/site';

export default function BrakesSection() {
  return (
    <section id="brakes" className="py-16 lg:py-20 bg-[#002d62] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-4">Brakes Feeling Off?</h2>
          <p className="text-white/85 text-lg leading-relaxed mb-8">
            If your brakes are squeaking, grinding, vibrating, or taking longer to stop, bring it
            to {site.businessName}. We&apos;ll inspect the issue and explain the next step clearly.
          </p>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 bg-[#e10600] hover:bg-[#b80500] text-white font-bold px-8 py-4 rounded-sm transition-colors"
          >
            <Phone size={20} />
            Call About Brake Service
          </a>
        </div>
      </div>
    </section>
  );
}
