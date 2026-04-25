'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe, Bookmark, Menu, X } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const navItems = [
  { label: 'Explorer', href: '#categories', active: true },
  { label: 'Professionnels', href: '#cta-pros' },
  { label: 'Deals', href: '#deals' },
  { label: 'Blog', href: '#articles' },
  { label: 'Aide', href: '#footer' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.82)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Nav center - desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`px-4 py-2 rounded-full text-[14px] font-medium transition-colors duration-200 ${
                item.active
                  ? 'text-yh-black bg-yh-gray-10'
                  : 'text-yh-gray-60 hover:text-yh-black hover:bg-yh-gray-10'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions - desktop */}
        <div className="hidden lg:flex items-center gap-2">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-yh-gray-60 hover:text-yh-black hover:bg-yh-gray-10 transition-colors">
            <Globe size={20} />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-yh-gray-60 hover:text-yh-black hover:bg-yh-gray-10 transition-colors">
            <Bookmark size={20} />
          </button>
          <button className="ml-2 px-5 py-2.5 bg-yh-yellow text-yh-black text-[14px] font-semibold rounded-full hover:bg-[#e6af00] transition-colors duration-200">
            Inscription
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-yh-gray-60 hover:bg-yh-gray-10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-yh-gray-10 px-6 py-6">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-3 rounded-xl text-[15px] font-medium text-yh-gray-90 hover:bg-yh-gray-10 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-yh-gray-10 flex gap-3">
            <button className="flex-1 px-5 py-3 bg-yh-yellow text-yh-black text-[14px] font-semibold rounded-full">
              Inscription
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
