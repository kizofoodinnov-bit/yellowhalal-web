'use client';

const banners = [
  {
    id: 1,
    title: 'Devenez partenaire YellowHalal',
    description: 'Augmentez votre visibilité et attirez plus de clients',
    cta: 'En savoir plus',
    bgColor: 'from-yellow-500 to-yellow-600',
  },
  {
    id: 2,
    title: 'Offre spéciale pour les restaurants',
    description: 'Réduction de 30% sur votre première année',
    cta: 'Profiter de l\'offre',
    bgColor: 'from-amber-500 to-amber-600',
  },
];

export default function AdBanners() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`bg-gradient-to-r ${banner.bgColor} rounded-lg p-8 text-white shadow-lg hover:shadow-xl transition`}
            >
              <h3 className="font-display text-2xl font-bold mb-2">{banner.title}</h3>
              <p className="text-white/90 mb-6">{banner.description}</p>
              <button className="bg-white text-yellow-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition">
                {banner.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
