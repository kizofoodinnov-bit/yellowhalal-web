'use client';

import { Star, MapPin, Phone, Navigation, BadgeCheck, Clock } from 'lucide-react';

const merchants = [
  {
    name: 'Sultan Café & Palace',
    category: 'Restaurant marocain',
    address: '24 rue du Faubourg Saint-Denis, 75010 Paris',
    phone: '01 42 XX XX XX',
    rating: 5.0,
    reviews: 142,
    distance: '0,3 km',
    hours: 'Ouvert jusqu\'à 23h',
    cert: 'Certifié AVS',
    tags: ['Fine dining', 'Livraison', 'Terrasse'],
    initial: 'S',
    color: '#FF8F00',
  },
  {
    name: 'Al-Baraka Grill',
    category: 'Restaurant libanais',
    address: '67 boulevard de Belleville, 75011 Paris',
    phone: '01 43 XX XX XX',
    rating: 4.8,
    reviews: 89,
    distance: '0,8 km',
    hours: 'Ouvert jusqu\'à 22h',
    cert: 'Halal certifié',
    tags: ['Grill', 'À emporter', 'Parking'],
    initial: 'A',
    color: '#2E7D32',
  },
  {
    name: 'Dar Zaman',
    category: 'Pâtisserie orientale',
    address: '15 rue Jean-Pierre Timbaud, 75011 Paris',
    phone: '01 48 XX XX XX',
    rating: 4.7,
    reviews: 56,
    distance: '1,2 km',
    hours: 'Ouvert jusqu\'à 20h',
    cert: '100% Halal',
    tags: ['Pâtisserie', 'Salon de thé', 'Commande en ligne'],
    initial: 'D',
    color: '#6A1B9A',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className={i <= Math.floor(rating) ? 'text-yh-yellow fill-yh-yellow' : 'text-yh-gray-border'}
        />
      ))}
    </div>
  );
}

export default function Top3Section() {
  return (
    <section className="py-10 px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[22px] font-bold text-yh-black">
            Les mieux notés près de chez vous
          </h2>
          <a href="#" className="text-[14px] font-medium text-yh-blue hover:underline">
            Voir tout
          </a>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {merchants.map((m, i) => (
            <div
              key={m.name}
              className="bg-white rounded-xl border border-yh-gray-border hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left: Image placeholder */}
                <div className="md:w-[220px] h-[180px] md:h-auto flex-shrink-0 rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: m.color + '15' }}
                >
                  <span className="text-[64px] font-bold" style={{ color: m.color }}>
                    {m.initial}
                  </span>
                </div>

                {/* Right: Content */}
                <div className="flex-1 p-5">
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[12px] font-semibold text-white bg-yh-yellow px-2 py-0.5 rounded">
                          #{i + 1}
                        </span>
                        <span className="text-[13px] text-yh-gray">{m.category}</span>
                      </div>
                      <h3 className="text-[18px] font-bold text-yh-black">{m.name}</h3>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <BadgeCheck size={18} className="text-yh-green" />
                      <span className="text-[12px] font-semibold text-yh-green">{m.cert}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <StarRating rating={m.rating} />
                    <span className="text-[14px] font-semibold text-yh-black">{m.rating}</span>
                    <span className="text-[13px] text-yh-gray">({m.reviews} avis)</span>
                  </div>

                  {/* Info row */}
                  <div className="flex flex-wrap items-center gap-4 text-[13px] text-yh-gray mb-3">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {m.address}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-yh-green" />
                      <span className="text-yh-green font-medium">{m.hours}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Navigation size={14} />
                      {m.distance}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {m.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-yh-gray-bg text-[12px] font-medium text-yh-gray-dark rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-2">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-yh-black text-white text-[13px] font-semibold rounded-lg hover:bg-yh-dark transition-colors">
                      <Phone size={14} />
                      Afficher le N°
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-yh-gray-border text-[13px] font-semibold text-yh-gray-dark rounded-lg hover:bg-yh-gray-bg transition-colors">
                      <Navigation size={14} />
                      Itinéraire
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-yh-gray-border text-[13px] font-semibold text-yh-gray-dark rounded-lg hover:bg-yh-gray-bg transition-colors">
                      <Star size={14} />
                      Écrire un avis
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
