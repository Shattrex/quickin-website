import { Clock, ShieldCheck, MessageCircle, MapPin } from 'lucide-react';
import { site } from '@/lib/site';

const benefits = [
  {
    icon: <Clock size={24} className="text-[#e10600]" />,
    title: 'Fast Turnaround',
    text: 'We respect your time and work to get common brake and A/C concerns handled efficiently.',
  },
  {
    icon: <ShieldCheck size={24} className="text-[#002d62]" />,
    title: 'Honest Diagnostics',
    text: 'We check the issue first and explain what we find before recommending repairs.',
  },
  {
    icon: <MessageCircle size={24} className="text-[#1e5a9e]" />,
    title: 'Clear Communication',
    text: 'You hear what we found, what it means, and what the next step is — in plain language.',
  },
  {
    icon: <MapPin size={24} className="text-[#e10600]" />,
    title: 'Local Morristown Service',
    text: `Serving ${site.city} and nearby drivers who need a shop they can call and visit.`,
  },
];

export default function WhyQuickIn() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-[#f4f5f7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-accent text-2xl lg:text-3xl font-extrabold text-[#002d62] mb-10">
          Built for Fast Local Service
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#e2e4e8] p-6 rounded-sm shadow-sm"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-[#002d62] font-bold text-base mb-2">{item.title}</h3>
              <p className="text-[#4a4a4a] text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
