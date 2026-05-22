'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { site } from '@/lib/site';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Brakes', href: '#brakes' },
  { label: 'Air Conditioning', href: '#air-conditioning' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-md border-b border-[#e2e4e8]' : 'border-b border-[#e2e4e8]/80'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] lg:h-[80px] gap-4">
          <Link href="#home" className="flex-shrink-0" onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt={site.businessName}
              width={200}
              height={72}
              className="h-12 sm:h-14 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#1a1a1a] hover:text-[#002d62] text-sm font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-[#002d62] font-bold text-sm hover:text-[#e10600] transition-colors"
            >
              <Phone size={16} className="text-[#e10600]" />
              {site.phone}
            </a>
            <a
              href={site.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e10600] hover:bg-[#b80500] text-white font-bold text-sm px-5 py-2.5 rounded-sm transition-colors"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-[#002d62]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-[#e2e4e8] bg-white px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-3 text-[#1a1a1a] font-semibold border-b border-[#f4f5f7] last:border-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 py-3 border-2 border-[#002d62] text-[#002d62] font-bold rounded-sm"
            >
              <Phone size={18} />
              {site.phone}
            </a>
            <a
              href={site.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[#e10600] text-white font-bold rounded-sm"
            >
              <MapPin size={18} />
              Get Directions
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
