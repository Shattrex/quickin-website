'use client';

const footerLinks = {
  Services: [
    { label: 'A/C Diagnostics', href: '#ac-diagnostics' },
    { label: 'Brake Service', href: '#brakes' },
    { label: 'Cooling System', href: '#services' },
    { label: 'Battery & Electrical', href: '#services' },
    { label: 'Engine Care', href: '#services' },
  ],
  Company: [
    { label: 'Our Process', href: '#process' },
    { label: 'About Quick In', href: '#contact' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ],
  'Quick In': [
    { label: 'Quick In A/C', href: '#ac-diagnostics' },
    { label: 'Quick In Brakes', href: '#brakes' },
    { label: 'Future Services', href: '#brakes' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0B0D] border-t border-[#A7A9AC]/10">
      {/* Top red stripe */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#E10600] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-black tracking-[0.15em] text-white">
                QUICK<span className="text-[#E10600]"> IN</span>
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#A7A9AC] font-medium uppercase mt-0.5">
                Auto &amp; Airconditioning
              </span>
            </div>
            <p className="text-[#A7A9AC]/70 text-sm leading-relaxed mb-6 max-w-xs">
              Morristown's quick stop for A/C diagnostics, brake service, and honest automotive repair.
            </p>

            {/* Tagline */}
            <div className="border-l-2 border-[#E10600] pl-3">
              <p className="text-[#A7A9AC] text-sm italic">
                "Built for speed. Engineered for trust."
              </p>
            </div>

            {/* Contact quick links */}
            <div className="mt-6 space-y-1.5">
              <p className="text-[#A7A9AC] text-xs">
                <span className="text-white font-semibold">Morristown, TN</span>
              </p>
              <p className="text-[#A7A9AC] text-xs">(423) 555-0000</p>
              <p className="text-[#A7A9AC] text-xs">hello@quickinauto.com</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-xs font-black tracking-[0.2em] uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#A7A9AC]/70 hover:text-white text-sm transition-colors duration-200 hover:text-[#E10600]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-sep my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A7A9AC]/40 text-xs tracking-wide">
            © {new Date().getFullYear()} Quick In Auto &amp; Airconditioning. Morristown, TN.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[#A7A9AC]/30 text-xs">Front-end demo built by</span>
            <span className="text-[#E10600] text-xs font-bold tracking-wider">Alanto AI</span>
          </div>
          <p className="text-[#A7A9AC]/30 text-[10px] tracking-widest uppercase">
            Demo — Not a live site
          </p>
        </div>
      </div>
    </footer>
  );
}
