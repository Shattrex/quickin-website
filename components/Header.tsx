'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'A/C Diagnostics', href: '#ac-diagnostics' },
  { label: 'Brakes', href: '#brakes' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0D]/95 backdrop-blur-md border-b border-[#E10600]/20 shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col group">
            <span className="text-xl lg:text-2xl font-black tracking-[0.15em] text-white group-hover:text-[#E10600] transition-colors duration-200">
              QUICK<span className="text-[#E10600]"> IN</span>
            </span>
            <span className="text-[9px] lg:text-[10px] tracking-[0.3em] text-[#A7A9AC] font-medium uppercase -mt-1">
              Auto &amp; Airconditioning
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#A7A9AC] hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E10600] group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={scrollToForm}
              className="flex items-center gap-2 bg-[#E10600] hover:bg-[#b00500] text-white text-sm font-bold px-5 py-2.5 tracking-wider uppercase transition-all duration-200 group"
              style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
            >
              Schedule Service
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#A7A9AC] hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0B0B0D]/98 backdrop-blur-md border-b border-[#E10600]/20">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#A7A9AC] hover:text-white py-2 text-sm font-medium tracking-wide border-b border-[#1F2124] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={scrollToForm}
              className="mt-2 bg-[#E10600] hover:bg-[#b00500] text-white text-sm font-bold py-3 tracking-wider uppercase transition-colors"
            >
              Schedule Service
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
