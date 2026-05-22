import { Disc, Snowflake, Droplets, Battery, Wrench, Search } from 'lucide-react';

const services = [
  {
    icon: <Disc size={28} className="text-[#e10600]" />,
    title: 'Brake Service',
    description:
      'Brake pads, rotors, squeaking, grinding, inspections, and stopping-power concerns.',
    accent: 'border-t-[#e10600]',
  },
  {
    icon: <Snowflake size={28} className="text-[#1e5a9e]" />,
    title: 'Air Conditioning',
    description:
      'Warm air, weak airflow, leaks, recharge concerns, compressor issues, and A/C diagnostics.',
    accent: 'border-t-[#1e5a9e]',
  },
  {
    icon: <Droplets size={28} className="text-[#002d62]" />,
    title: 'Cooling System',
    description:
      'Overheating, coolant leaks, fans, hoses, radiator concerns, and temperature issues.',
    accent: 'border-t-[#002d62]',
  },
  {
    icon: <Battery size={28} className="text-[#a7a9ac]" />,
    title: 'Battery & Electrical',
    description:
      'Battery testing, alternator concerns, starter issues, and basic electrical diagnostics.',
    accent: 'border-t-[#a7a9ac]',
  },
  {
    icon: <Wrench size={28} className="text-[#002d62]" />,
    title: 'Light Auto Repair',
    description:
      'Minor repairs and maintenance-focused service to help keep your vehicle dependable.',
    accent: 'border-t-[#002d62]',
  },
  {
    icon: <Search size={28} className="text-[#e10600]" />,
    title: 'Diagnostics',
    description:
      'Clear inspections and honest recommendations before unnecessary work is done.',
    accent: 'border-t-[#e10600]',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-accent text-2xl lg:text-3xl font-extrabold text-[#002d62] mb-3">
          What We Help With
        </h2>
        <p className="text-[#4a4a4a] mb-10 max-w-2xl">
          Brakes and air conditioning are our specialty — with support for the everyday issues
          that keep Morristown drivers on the road.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className={`bg-[#f4f5f7] border border-[#e2e4e8] border-t-4 ${service.accent} p-6 rounded-sm hover:shadow-md transition-shadow`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-[#002d62] font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-[#4a4a4a] text-sm leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
