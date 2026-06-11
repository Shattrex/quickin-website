import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'A/C Diagnostics', href: '#ac-diagnostics' },
  { label: 'Brakes', href: '#brakes' },
  { label: 'Meet Robert', href: '#meet-robert' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#002D62] text-white relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E10600]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          <div>
            <Link href="#home" className="inline-block mb-4">
              <Image
                src={site.logoPath}
                alt={site.fullName}
                width={200}
                height={72}
                className="h-14 w-auto object-contain bg-white rounded-sm px-2 py-1"
              />
            </Link>
            <p className="text-white/75 text-sm italic">{site.tagline}</p>
          </div>

          <div>
            <p className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </p>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/75 text-sm hover:text-[#E10600] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Location
            </p>
            <p className="text-white/75 text-sm">{site.fullName}</p>
            <p className="text-white/75 text-sm">{site.locationLabel}</p>
            <a
              href={site.phoneHref}
              className="text-[#E10600] text-sm font-bold mt-2 inline-block hover:underline"
            >
              {site.phone}
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-4 text-white/50 text-xs">
          <p>
            © {new Date().getFullYear()} {site.fullName}. Demo site — placeholders where noted.
          </p>
          <p>{site.locationLabel}</p>
        </div>
      </div>
    </footer>
  );
}
