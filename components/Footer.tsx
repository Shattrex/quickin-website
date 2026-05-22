import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

const footerNav = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Brakes', href: '#brakes' },
  { label: 'Air Conditioning', href: '#air-conditioning' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#002d62] text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="inline-block bg-white rounded-sm px-3 py-2 mb-4">
              <Image
                src="/logo.png"
                alt={site.businessName}
                width={180}
                height={64}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 text-sm font-semibold">{site.tagline}</p>
          </div>

          <div>
            <p className="font-bold text-sm uppercase tracking-wide mb-4 text-white/70">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <a href={site.phoneHref} className="hover:text-[#ffcccc] transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="hover:text-[#ffcccc] transition-colors">
                  {site.email}
                </a>
              </li>
              <li>{site.address.full}</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-sm uppercase tracking-wide mb-4 text-white/70">
              Navigation
            </p>
            <ul className="space-y-2">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {site.businessName}. {site.address.cityStateZip}.
          </p>
          <Link href="#home" className="hover:text-white transition-colors">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
