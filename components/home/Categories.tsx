'use client';

import { UtensilsCrossed, ShoppingCart, Shirt, GraduationCap, Heart, Plane, Calendar, Landmark } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const categories = [
  { name: 'Restauration', icon: UtensilsCrossed, count: '4 280 adresses', color: 'var(--color-cat-restau)' },
  { name: 'Épiceries', icon: ShoppingCart, count: '2 150 adresses', color: 'var(--color-cat-epicerie)' },
  { name: 'Mode & Beauté', icon: Shirt, count: '1 840 adresses', color: 'var(--color-cat-mode)' },
  { name: 'Éducation & Religion', icon: GraduationCap, count: '2 640 adresses', color: 'var(--color-cat-education)' },
  { name: 'Santé & Bien-être', icon: Heart, count: '1 450 adresses', color: 'var(--color-cat-sante)' },
  { name: 'Voyages Halal', icon: Plane, count: '620 offres', color: 'var(--color-cat-voyage)' },
  { name: 'Événementiel', icon: Calendar, count: '1 320 prestataires', color: 'var(--color-cat-event)' },
  { name: 'Finance Islamique', icon: Landmark, count: '180 experts', color: 'var(--color-cat-finance)' },
];

export default function Categories() {
  return (
    <section id="categories" className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="eyebrow">Catégories</span>
              <h2 className="text-[36px] md:text-[44px] font-semibold tracking-[-0.035em] mt-2">
                Explorez par <em className="title-accent">centre d&apos;intérêt</em>
              </h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-1.5 text-[14px] font-medium text-yh-gray-60 hover:text-yh-black transition-colors">
              Toutes les catégories
              <span className="text-yh-yellow">→</span>
            </a>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <RevealOnScroll key={cat.name} delay={i * 60}>
                <button className="group w-full text-left p-6 rounded-2xl border border-yh-gray-10 bg-white hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
                  <div
                    className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-110"
                    style={{ backgroundColor: `${cat.color}15` }}
                  >
                    <Icon size={28} style={{ color: cat.color }} />
                  </div>
                  <h3 className="text-[16px] font-semibold text-yh-black mb-1">{cat.name}</h3>
                  <p className="text-[13px] text-yh-gray-60">{cat.count}</p>
                </button>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
