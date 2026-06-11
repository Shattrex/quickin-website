'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { site, navLinks } from '@/lib/site';
import { ScheduleServiceButton } from '@/components/ui/CTAButton';

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
      className={`sticky top-0 z-50 bg-white/98 backdrop-blur-md transition-all duration-200 border-b ${
        scrolled
          ? 'border-[#002D62]/15 shadow-md'
          : 'border-[#D8DCE2]'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 motion-line opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px] lg:h-[88px] gap-4">
          <Link
            href="#home"
            className="flex-shrink-0"
            onClick={closeMenu}
          >
            <Image
              src={site.logoPath}
              alt={`${site.fullName} logo`}
              width={240}
              height={88}
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#002D62] hover:text-[#E10600] text-sm font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ScheduleServiceButton className="px-5 py-2.5 text-sm" />
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-[#002D62]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-[#D8DCE2] bg-white px-4 py-4 shadow-xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-3 text-[#002D62] font-semibold border-b border-[#EEF0F3]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4">
            <ScheduleServiceButton className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
