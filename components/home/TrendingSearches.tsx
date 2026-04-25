'use client';

import { ChevronsUp } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const trends = [
  { query: 'Restaurants halal ouverts le dimanche', delta: '+62,4%', volume: '8 340 recherches' },
  { query: 'Mosquées Aïd el-Fitr Paris IDF', delta: '+148,2%', volume: '23 100 recherches' },
  { query: 'Traiteur mariage oriental', delta: '+38,6%', volume: '3 620 recherches' },
  { query: 'Agence Omra Ramadan 2027', delta: '+91,3%', volume: '12 450 recherches' },
];

export default function TrendingSearches() {
  return (
    <section className="py-20 px-6 bg-yh-cream">
      <div className="max-w-[1280px] mx-auto">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="eyebrow">Temps réel</span>
              <h2 className="text-[36px] md:text-[44px] font-semibold tracking-[-0.035em] mt-2">
                Recherches <em className="title-accent">en tendance</em>
              </h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-1.5 text-[14px] font-medium text-yh-gray-60 hover:text-yh-black transition-colors">
              Voir toutes les tendances
              <span className="text-yh-yellow">→</span>
            </a>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trends.map((trend, i) => (
            <RevealOnScroll key={trend.query} delay={i * 80}>
              <div className="group relative p-6 rounded-2xl bg-white border border-yh-gray-10 hover:border-yh-black hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Sparkline decoration */}
                <svg className="absolute bottom-0 right-0 w-24 h-16 opacity-10" viewBox="0 0 100 60">
                  <polyline
                    points="0,50 15,45 30,35 45,40 55,20 70,25 85,10 100,15"
                    fill="none"
                    stroke="var(--color-yh-yellow)"
                    strokeWidth="3"
                  />
                </svg>

                <h3 className="text-[17px] font-semibold text-yh-black mb-3 leading-snug">{trend.query}</h3>

                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yh-green/10 text-[12px] font-semibold text-yh-green-dark">
                    <ChevronsUp size={14} />
                    {trend.delta}
                  </span>
                </div>

                <p className="text-[13px] text-yh-gray-60">{trend.volume}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
