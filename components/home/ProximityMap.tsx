'use client';

import { MapPin, Clock, ChevronRight } from 'lucide-react';

const shops = [
  {
    name: 'Boucherie Al-Andalous',
    category: 'Boucherie halal',
    address: '12 rue de la Fontaine au Roi, 75011',
    distance: '0,4 km',
    status: 'Ouvert',
    hours: 'jusqu\'à 21h',
    tags: ['AVS', 'Bio'],
    initial: 'B',
    color: '#C62828',
  },
  {
    name: 'Épicerie du Maghreb',
    category: 'Épicerie orientale',
    address: '45 bd de Belleville, 75020',
    distance: '0,8 km',
    status: 'Ouvert',
    hours: 'jusqu\'à 22h',
    tags: ['Halal', 'Nouveau'],
    initial: 'E',
    color: '#2E7D32',
  },
  {
    name: 'Super Marché Zayan',
    category: 'Supermarché halal',
    address: '3 av. de la République, 93100',
    distance: '1,2 km',
    status: 'Ouvert',
    hours: 'jusqu\'à 20h',
    tags: ['Halal'],
    initial: 'S',
    color: '#1565C0',
  },
  {
    name: 'Boulangerie Orientale',
    category: 'Boulangerie',
    address: '8 rue Jean-Pierre Timbaud, 75011',
    distance: '0,6 km',
    status: 'Ouvert',
    hours: 'jusqu\'à 19h30',
    tags: ['Halal', 'Artisan'],
    initial: 'B',
    color: '#FF8F00',
  },
];

export default function ProximityMap() {
  return (
    <section className="py-10 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[22px] font-bold text-yh-black">
            Autour de vous
          </h2>
          <a href="#" className="text-[14px] font-medium text-yh-blue hover:underline">
            Voir la carte
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {shops.map((shop) => (
            <div
              key={shop.name}
              className="bg-white rounded-xl border border-yh-gray-border p-5 hover:shadow-md transition-shadow cursor-pointer group"
            >
              {/* Icon + Category */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-[44px] h-[44px] rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: shop.color + '15' }}
                >
                  <span className="text-[20px] font-bold" style={{ color: shop.color }}>
                    {shop.initial}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-semibold text-yh-black truncate">{shop.name}</h3>
                  <p className="text-[12px] text-yh-gray">{shop.category}</p>
                </div>
              </div>

              {/* Address */}
              <p className="text-[13px] text-yh-gray flex items-start gap-1.5 mb-2">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <span className="line-clamp-2">{shop.address}</span>
              </p>

              {/* Status + Distance */}
              <div className="flex items-center justify-between mb-3">
                <span className="flex items-center gap-1.5 text-[12px]">
                  <Clock size={12} className="text-yh-green" />
                  <span className="text-yh-green font-medium">{shop.status}</span>
                  <span className="text-yh-gray">{shop.hours}</span>
                </span>
                <span className="text-[12px] text-yh-gray">{shop.distance}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {shop.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-yh-gray-bg text-[11px] font-medium text-yh-gray-dark rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="mt-3 pt-3 border-t border-yh-gray-border flex items-center justify-between">
                <span className="text-[13px] font-medium text-yh-blue">Voir la fiche</span>
                <ChevronRight size={16} className="text-yh-gray-light group-hover:text-yh-blue transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
