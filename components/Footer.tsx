import Image from 'next/image';
import Link from 'next/link';
import { site, navLinks } from '@/lib/site';

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
            <p className="text-white font-bold text-sm">{site.fullName}</p>
            <p className="text-white/80 text-sm mt-1">{site.tagline}</p>
            <p className="text-white/80 text-sm mt-1">{site.locationLabel}</p>
            <p className="text-[#E10600] font-extrabold text-sm uppercase tracking-widest mt-3">
              {site.openingStatus}
            </p>
          </div>

          <div>
            <p className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
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
              Stay Updated
            </p>
            <p className="text-white/75 text-sm leading-relaxed mb-4">
              More details, contact information, and opening updates will be added as the location
              prepares to open.
            </p>
            <a
              href={`#${site.openingUpdatesId}`}
              className="text-[#E10600] text-sm font-bold hover:underline"
            >
              Join the Opening List →
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/15 text-white/50 text-xs text-center">
          <p>
            © {new Date().getFullYear()} {site.fullName}. {site.locationLabel}. {site.openingStatus}.
          </p>
          <p className="mt-2 max-w-xl mx-auto">
            More details, contact information, and opening updates will be added as the location
            prepares to open.
          </p>
        </div>
      </div>
    </footer>
  );
}
