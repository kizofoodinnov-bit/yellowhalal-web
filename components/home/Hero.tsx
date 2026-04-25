'use client';

import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const quickTags = [
  'Restaurant halal',
  'Boucherie',
  'Mosquée',
  'Pâtisserie orientale',
  'Traiteur',
  'Épicerie',
];

export default function Hero() {
  const [query, setQuery] = useState('');
  const [where, setWhere] = useState('');

  return (
    <section className="bg-yh-yellow">
      <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-24">
        {/* Title */}
        <h1 className="text-center text-[32px] md:text-[44px] font-bold text-yh-black leading-tight tracking-tight mb-3">
          Trouver des services 100% Halal
          <br />
          près de chez vous
        </h1>

        {/* Subtitle */}
        <p className="text-center text-[16px] text-yh-dark/70 mb-10 max-w-[560px] mx-auto">
          Restaurants, boucheries, mosquées, écoles et plus encore.
          <br className="hidden md:block" />
          Plus de 15 000 adresses vérifiées en France et en Europe.
        </p>

        {/* Search bar */}
        <div className="max-w-[780px] mx-auto mb-6">
          <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex flex-col md:flex-row">
            {/* What field */}
            <div className="flex-1 flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-yh-gray-border">
              <Search size={20} className="text-yh-gray-light shrink-0" />
              <input
                type="text"
                placeholder="Que recherchez-vous ?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full text-[15px] text-yh-black placeholder:text-yh-gray-light"
              />
            </div>

            {/* Where field */}
            <div className="flex-1 flex items-center gap-3 px-5 py-4">
              <MapPin size={20} className="text-yh-gray-light shrink-0" />
              <input
                type="text"
                placeholder="Où ? (ville, code postal)"
                value={where}
                onChange={(e) => setWhere(e.target.value)}
                className="w-full text-[15px] text-yh-black placeholder:text-yh-gray-light"
              />
            </div>

            {/* Search button */}
            <button className="m-2 px-8 py-3 bg-yh-black text-white text-[15px] font-semibold rounded-lg hover:bg-yh-dark transition-colors flex items-center gap-2 justify-center">
              <Search size={18} />
              <span className="hidden md:inline">Rechercher</span>
            </button>
          </div>
        </div>

        {/* Quick tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {quickTags.map((tag) => (
            <button
              key={tag}
              className="px-4 py-2 bg-white/60 hover:bg-white text-[13px] font-medium text-yh-dark rounded-full transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
