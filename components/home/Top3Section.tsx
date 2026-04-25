'use client';

import { Star, ArrowUpRight, Bookmark, Clock, BadgeCheck } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const merchants = [
  {
    position: 1,
    name: 'Sultan Café & Palace',
    category: 'Marocain · Fine dining',
    rating: 5.0,
    reviews: 142,
    hours: '23h',
    price: '€€',
    cert: 'Certifié AVS',
    featured: true,
    gradient: 'from-amber-900 to-amber-700',
  },
  {
    position: 2,
    name: 'Al-Baraka Grill',
    category: 'Libanais · Grill',
    rating: 4.8,
    reviews: 89,
    hours: '22h',
    price: '€',
    cert: 'Halal certifié',
    featured: false,
    gradient: 'from-emerald-900 to-emerald-700',
  },
  {
    position: 3,
    name: 'Dar Zaman',
    category: 'Pâtisserie orientale',
    rating: 4.7,
    reviews: 56,
    hours: '20h',
    price: '€',
    cert: '100% Halal',
    featured: false,
    gradient: 'from-violet-900 to-violet-700',
  },
];

export default function Top3Section() {
  return (
    <section className="py-20 px-6 bg-yh-cream">
      <div className="max-w-[1280px] mx-auto">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="eyebrow">Top Premium</span>
              <h2 className="text-[36px] md:text-[44px] font-semibold tracking-[-0.035em] mt-2">
                Les <em className="title-accent">restaurants</em> recommandés
              </h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-1.5 text-[14px] font-medium text-yh-gray-60 hover:text-yh-black transition-colors">
              Voir tous les restaurants
              <span className="text-yh-yellow">→</span>
            </a>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-5">
          {merchants.map((m, i) => (
            <RevealOnScroll key={m.name} delay={i * 100}>
              <div className="group relative rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-2.5 hover:shadow-2xl transition-all duration-500">
                {/* Media area */}
                <div className={`relative bg-gradient-to-br ${m.gradient} ${m.featured ? 'h-[360px]' : 'h-[280px]'}`}>
                  {/* Brand letter */}
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-serif italic text-white/10 select-none">
                    {m.name[0]}
                  </span>

                  {/* Position badge */}
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-yh-yellow flex items-center justify-center font-serif italic text-[16px] text-yh-black font-bold">
                      {m.position}
                    </span>
                    <span className="text-[11px] font-semibold text-white/80 uppercase tracking-wider">Position Premium</span>
                  </div>

                  {/* Save button */}
                  <button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Bookmark size={18} className="text-white" />
                  </button>

                  {/* Bottom overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-[11px] font-medium text-white/90 mb-2">
                      {m.category}
                    </span>
                    <h3 className={`font-semibold text-white ${m.featured ? 'text-[32px]' : 'text-[24px]'} tracking-tight`}>
                      {m.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-2 text-[13px] text-white/70">
                      <span className="flex items-center gap-1">
                        <Star size={14} className="text-yh-yellow fill-yh-yellow" />
                        {m.rating} ({m.reviews} avis)
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {m.hours}
                      </span>
                      <span>{m.price}</span>
                    </div>
                  </div>

                  {/* Hover scale image effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Footer */}
                <div className="bg-white px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[13px] font-medium text-yh-green-dark">
                    <BadgeCheck size={16} className="text-yh-green" />
                    {m.cert}
                  </div>
                  <ArrowUpRight size={18} className="text-yh-gray-30 group-hover:text-yh-black transition-colors" />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
