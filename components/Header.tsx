'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="YellowHalal" width={40} height={40} className="rounded" />
          <span className="font-display text-2xl font-bold text-yellow-600">YellowHalal</span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#categories" className="text-gray-700 hover:text-yellow-600 transition">
            Catégories
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-yellow-600 transition">
            À propos
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-yellow-600 transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block btn btn-primary">
          Ajouter mon entreprise
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200 p-4 space-y-3">
          <Link href="#categories" className="block text-gray-700 hover:text-yellow-600">
            Catégories
          </Link>
          <Link href="#about" className="block text-gray-700 hover:text-yellow-600">
            À propos
          </Link>
          <Link href="#contact" className="block text-gray-700 hover:text-yellow-600">
            Contact
          </Link>
          <button className="w-full btn btn-primary mt-2">Ajouter mon entreprise</button>
        </nav>
      )}
    </header>
  );
}
