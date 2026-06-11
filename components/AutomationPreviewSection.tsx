import { Activity, TrendingUp } from 'lucide-react';
import { automationCards } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';

export default function AutomationPreviewSection() {
  return (
    <section id="automation" className="py-16 lg:py-24 section-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 red-divider" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Future-Ready"
          title="Built today as a website. Ready tomorrow as a service engine."
          description="The live version can connect service requests, booking, missed-call text-back, appointment reminders, review requests, and customer follow-up through GoHighLevel."
        />

        <div className="dashboard-card rounded-t-lg px-4 sm:px-6 py-3 flex items-center justify-between border-b border-[#D8DCE2]">
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-[#E10600]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#002D62]">
              Quick In Automation Preview
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#A7A9AC] hidden sm:block">
            GHL · Demo Mode
          </span>
        </div>

        <div className="dashboard-card rounded-b-lg p-4 sm:p-6 border-t-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {automationCards.map((card) => (
              <div
                key={card.id}
                className="bg-[#EEF0F3] rounded-lg p-4 border border-[#D8DCE2] hover:border-[#E10600]/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <p className="text-[#4A4A4A] text-xs font-semibold leading-tight pr-2">
                    {card.title}
                  </p>
                  <TrendingUp
                    size={14}
                    className="text-[#E10600]/60 group-hover:text-[#E10600] shrink-0 transition-colors"
                  />
                </div>
                <p className="text-[#002D62] font-extrabold text-2xl mb-1">{card.metric}</p>
                <p className="text-[#4A4A4A] text-xs">{card.status}</p>
                <p className="text-[#E10600]/80 text-[10px] font-mono mt-2">{card.trend}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
