'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Explorer', href: '#categories' },
  { label: 'Professionnels', href: '#cta-pros' },
  { label: 'Blog', href: '#articles' },
  { label: 'Aide', href: '#footer' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-yh-gray-border">
      <div className="max-w-[1200px] mx-auto px-5 h-[64px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/yellowhalal.png" alt="YellowHalal" width={36} height={36} />
          <span className="text-[20px] font-bold text-yh-black tracking-tight">
            Yellow<span className="text-yh-gray">Halal</span>
          </span>
        </Link>

        {/* Nav - desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[14px] font-medium text-yh-gray-dark hover:text-yh-black transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA - desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-[14px] font-medium text-yh-gray-dark hover:text-yh-black">
            Se connecter
          </Link>
          <Link
            href="#cta-pros"
            className="px-5 py-2.5 bg-yh-yellow text-yh-black text-[14px] font-semibold rounded-lg hover:bg-yh-yellow-hover transition-colors"
          >
            Référencer mon entreprise
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-yh-gray-dark"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-yh-gray-border px-5 py-4">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-3 text-[15px] font-medium text-yh-gray-dark hover:bg-yh-gray-bg rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 pt-3 border-t border-yh-gray-border">
            <Link
              href="#cta-pros"
              className="block w-full text-center px-5 py-3 bg-yh-yellow text-yh-black text-[14px] font-semibold rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Référencer mon entreprise
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
