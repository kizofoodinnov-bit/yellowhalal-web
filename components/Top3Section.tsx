'use client';

const topBusinesses = [
  {
    id: 1,
    name: 'Restaurant Al-Khaleej',
    category: 'Restaurant',
    rating: 4.8,
    reviews: 342,
    location: 'Paris 11e',
    image: '🍽️',
    badge: 'Certifié Halal',
  },
  {
    id: 2,
    name: 'Boucherie Halal Premium',
    category: 'Boucherie',
    rating: 4.9,
    reviews: 218,
    location: 'Lyon',
    image: '🥩',
    badge: 'Meilleure qualité',
  },
  {
    id: 3,
    name: 'Pâtisserie Orientale',
    category: 'Pâtisserie',
    rating: 4.7,
    reviews: 156,
    location: 'Marseille',
    image: '🥐',
    badge: 'Recommandé',
  },
];

export default function Top3Section() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Les meilleures entreprises
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topBusinesses.map((business) => (
            <div
              key={business.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 h-40 flex items-center justify-center text-6xl">
                {business.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{business.name}</h3>
                    <p className="text-sm text-gray-600">{business.category}</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {business.badge}
                  </span>
                </div>

                {/* Location */}
                <p className="text-sm text-gray-600 mb-4">📍 {business.location}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        {i < Math.floor(business.rating) ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {business.rating} ({business.reviews} avis)
                  </span>
                </div>

                {/* CTA */}
                <button className="w-full btn btn-primary">Voir détails</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
