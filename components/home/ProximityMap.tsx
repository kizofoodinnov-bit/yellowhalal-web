'use client';

import { MapPin, ArrowRight } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const shops = [
  {
    name: 'Boucherie Al-Andalous',
    address: '12 rue de la Fontaine au Roi, 75011',
    tags: [{ label: 'AVS', style: 'bg-yh-black text-yh-yellow' }, { label: 'Bio', style: 'bg-yh-green/10 text-yh-green-dark' }],
    distance: '0,4 km',
    status: 'Ouvert jusqu\'à 21h',
  },
  {
    name: 'Épicerie du Maghreb',
    address: '45 bd de Belleville, 75020',
    tags: [{ label: 'Halal', style: 'bg-yh-yellow/20 text-yh-black' }, { label: 'Nouveau', style: 'bg-yh-yellow text-yh-black' }],
    distance: '0,8 km',
    status: 'Ouvert jusqu\'à 22h',
  },
  {
    name: 'Super Marché Zayan',
    address: '3 av. de la République, 93100',
    tags: [{ label: 'Halal', style: 'bg-yh-yellow/20 text-yh-black' }],
    distance: '1,2 km',
    status: 'Ouvert jusqu\'à 20h',
  },
  {
    name: 'Boulangerie Orientale',
    address: '8 rue Jean-Pierre Timbaud, 75011',
    tags: [{ label: 'Halal', style: 'bg-yh-yellow/20 text-yh-black' }, { label: 'Artisan', style: 'bg-yh-gray-10 text-yh-gray-90' }],
    distance: '0,6 km',
    status: 'Ouvert jusqu\'à 19h30',
  },
];

export default function ProximityMap() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="eyebrow">Autour de vous</span>
              <h2 className="text-[36px] md:text-[44px] font-semibold tracking-[-0.035em] mt-2">
                Commerces <em className="title-accent">à proximité</em>
              </h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-1.5 text-[14px] font-medium text-yh-gray-60 hover:text-yh-black transition-colors">
              Ouvrir la carte
              <span className="text-yh-yellow">→</span>
            </a>
          </div>
        </RevealOnScroll>

        <div className="bg-white rounded-[28px] border border-yh-gray-10 p-6 md:p-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {shops.map((shop, i) => (
              <RevealOnScroll key={shop.name} delay={i * 80}>
                <div className="group p-5 rounded-2xl border border-yh-gray-10 hover:border-yh-black hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer">
                  {/* Status */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yh-green" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
                      <span className="text-[12px] font-medium text-yh-green-dark">{shop.status}</span>
                    </div>
                    <span className="text-[12px] text-yh-gray-60">{shop.distance}</span>
                  </div>

                  {/* Name */}
                  <h3 className="text-[17px] font-semibold text-yh-black mb-1">{shop.name}</h3>

                  {/* Address */}
                  <p className="text-[13px] text-yh-gray-60 mb-3 flex items-start gap-1.5">
                    <MapPin size={14} className="shrink-0 mt-0.5" />
                    {shop.address}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {shop.tags.map((tag) => (
                      <span key={tag.label} className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${tag.style}`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="flex items-center gap-2 px-6 py-3 bg-yh-black text-white text-[14px] font-semibold rounded-full hover:bg-yh-graphite transition-colors">
              Explorer la carte complète
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
