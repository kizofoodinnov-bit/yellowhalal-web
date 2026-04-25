'use client';

import { useState } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [query, setQuery] = useState('');
  const [where, setWhere] = useState('Paris');

  return (
    <section className="relative pt-[140px] pb-[100px] px-6 overflow-hidden bg-yh-cream">
      {/* Decorative hamsa */}
      <div
        className="absolute top-[60px] right-[-80px] w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
        style={{ animation: 'float-slow 14s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 100 84" fill="currentColor" className="w-full h-full text-yh-black">
          <path d="M50 2 C75 2, 92 12, 96 35 C100 58, 90 75, 65 80 C40 85, 15 80, 8 58 C1 36, 10 15, 30 6 C36 3, 43 2, 50 2 Z"/>
        </svg>
      </div>

      {/* Glow */}
      <div
        className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,194,0,0.35) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'glow-pulse 10s ease-in-out infinite',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-full shadow-sm border border-yh-gray-10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-yh-yellow opacity-75" style={{ animation: 'pulse-ring 2.2s ease-out infinite' }} />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yh-yellow" />
            </span>
            <span className="text-[13px] font-medium text-yh-gray-90">
              Plus de 15 000 professionnels 100% halal vérifiés
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-[clamp(42px,6vw,80px)] font-semibold tracking-[-0.045em] leading-[1.05]">
            <span className="block overflow-hidden">
              <span className="block" style={{ animation: 'reveal-up 0.8s var(--ease-out) 0.2s both' }}>
                Trouvez facilement
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block" style={{ animation: 'reveal-up 0.8s var(--ease-out) 0.35s both' }}>
                des adresses{' '}
                <span className="relative inline-block">
                  <em className="font-serif italic not-italic text-yh-black">100% Halal</em>
                  <span
                    className="absolute bottom-[4px] left-0 right-0 h-[0.35em] bg-yh-yellow/40 -z-10 origin-left"
                    style={{ animation: 'highlight-reveal 1s var(--ease-out) 1.3s both' }}
                  />
                </span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block" style={{ animation: 'reveal-up 0.8s var(--ease-out) 0.5s both' }}>
                autour de vous.
              </span>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-center text-[16px] md:text-[18px] text-yh-gray-60 max-w-[640px] mx-auto mb-12 leading-relaxed" style={{ animation: 'fade-in-up 0.8s var(--ease-out) 0.7s both' }}>
          Restaurants, boucheries, écoles, mosquées, beautés & soins — tout ce dont vous avez besoin, en un seul clic. Partout en Europe.
        </p>

        {/* Mega Search */}
        <div className="max-w-[720px] mx-auto mb-12" style={{ animation: 'fade-in-up 0.8s var(--ease-out) 0.9s both' }}>
          <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-2 flex items-center gap-0">
            {/* Search field */}
            <div className="flex-1 flex items-center gap-3 px-5 py-3 rounded-xl">
              <Search size={20} className="text-yh-gray-30 shrink-0" />
              <div className="flex-1">
                <label className="eyebrow block mb-0.5">Recherche</label>
                <input
                  type="text"
                  placeholder="Restaurant, boucherie, mosquée..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full text-[15px] font-medium text-yh-black placeholder:text-yh-gray-30 outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Separator */}
            <div className="w-px h-10 bg-yh-gray-10 shrink-0" />

            {/* Where field */}
            <div className="flex-1 flex items-center gap-3 px-5 py-3 rounded-xl">
              <MapPin size={20} className="text-yh-gray-30 shrink-0" />
              <div className="flex-1">
                <label className="eyebrow block mb-0.5">Où</label>
                <input
                  type="text"
                  placeholder="Ville, code postal"
                  value={where}
                  onChange={(e) => setWhere(e.target.value)}
                  className="w-full text-[15px] font-medium text-yh-black placeholder:text-yh-gray-30 outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Search button */}
            <button className="w-[56px] h-[56px] bg-yh-black rounded-xl flex items-center justify-center shrink-0 hover:bg-yh-yellow transition-colors duration-300 group">
              <ArrowRight size={22} className="text-white group-hover:text-yh-black group-hover:rotate-[-45deg] transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 md:gap-16" style={{ animation: 'fade-in-up 0.8s var(--ease-out) 1.1s both' }}>
          <div className="text-center">
            <div className="text-[28px] md:text-[32px] font-bold tracking-tight text-yh-black">
              15k<span className="font-serif italic text-yh-yellow">+</span>
            </div>
            <div className="text-[13px] text-yh-gray-60 mt-0.5">Professionnels vérifiés</div>
          </div>
          <div className="text-center">
            <div className="text-[28px] md:text-[32px] font-bold tracking-tight text-yh-black">
              180 <span className="font-serif italic text-yh-yellow">villes</span>
            </div>
            <div className="text-[13px] text-yh-gray-60 mt-0.5">France · Belgique · UK · Allemagne</div>
          </div>
          <div className="text-center">
            <div className="text-[28px] md:text-[32px] font-bold tracking-tight text-yh-black">
              2,3M<span className="font-serif italic text-yh-yellow">+</span>
            </div>
            <div className="text-[13px] text-yh-gray-60 mt-0.5">Recherches mensuelles</div>
          </div>
        </div>
      </div>
    </section>
  );
}
