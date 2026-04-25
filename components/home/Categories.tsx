'use client';

import { UtensilsCrossed, ShoppingCart, Shirt, GraduationCap, Heart, Plane, Calendar, Landmark } from 'lucide-react';

const categories = [
  { name: 'Restauration', icon: UtensilsCrossed, color: '#FF8F00', bg: '#FFF3E0' },
  { name: 'Épiceries', icon: ShoppingCart, color: '#2E7D32', bg: '#E8F5E9' },
  { name: 'Mode & Beauté', icon: Shirt, color: '#C62828', bg: '#FFEBEE' },
  { name: 'Éducation', icon: GraduationCap, color: '#1565C0', bg: '#E3F2FD' },
  { name: 'Santé', icon: Heart, color: '#00897B', bg: '#E0F2F1' },
  { name: 'Voyages', icon: Plane, color: '#0277BD', bg: '#E1F5FE' },
  { name: 'Événements', icon: Calendar, color: '#AD1457', bg: '#FCE4EC' },
  { name: 'Finance', icon: Landmark, color: '#4527A0', bg: '#EDE7F6' },
];

export default function Categories() {
  return (
    <section id="categories" className="bg-white border-b border-yh-gray-border">
      <div className="max-w-[1200px] mx-auto px-5 py-8">
        <div className="flex justify-between items-start overflow-x-auto gap-2 scrollbar-hide">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                className="flex flex-col items-center gap-2.5 min-w-[100px] px-2 py-3 rounded-xl hover:bg-yh-gray-bg transition-colors group"
              >
                <div
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: cat.bg }}
                >
                  <Icon size={26} style={{ color: cat.color }} />
                </div>
                <span className="text-[13px] font-medium text-yh-gray-dark text-center leading-tight">
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
