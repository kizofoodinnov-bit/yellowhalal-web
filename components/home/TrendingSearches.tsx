'use client';

import { TrendingUp, Search } from 'lucide-react';

const trends = [
  { query: 'Restaurants halal ouverts le dimanche', count: '8 340 recherches' },
  { query: 'Mosquées Aïd el-Fitr Paris IDF', count: '23 100 recherches' },
  { query: 'Traiteur mariage oriental', count: '3 620 recherches' },
  { query: 'Agence Omra Ramadan 2027', count: '12 450 recherches' },
  { query: 'Boucherie halal livraison', count: '5 210 recherches' },
  { query: 'Pâtisserie orientale Paris', count: '4 870 recherches' },
];

export default function TrendingSearches() {
  return (
    <section className="py-10 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp size={22} className="text-yh-yellow" />
          <h2 className="text-[22px] font-bold text-yh-black">
            Recherches populaires
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {trends.map((trend, i) => (
            <button
              key={trend.query}
              className="flex items-center gap-4 p-4 bg-yh-gray-bg rounded-xl hover:bg-yh-yellow-light transition-colors text-left group"
            >
              <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 text-[14px] font-bold text-yh-gray group-hover:text-yh-yellow group-hover:bg-yh-yellow/10">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="text-[14px] font-medium text-yh-black truncate">{trend.query}</p>
                <p className="text-[12px] text-yh-gray">{trend.count}</p>
              </div>
              <Search size={16} className="text-yh-gray-light ml-auto shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
