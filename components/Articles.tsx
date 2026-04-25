'use client';

const articles = [
  {
    id: 1,
    title: 'Guide complet : Comment choisir un restaurant Halal',
    excerpt: 'Découvrez les critères essentiels pour identifier un vrai restaurant Halal...',
    date: '25 avril 2026',
    category: 'Guide',
    image: '📖',
  },
  {
    id: 2,
    title: 'Les meilleures boucheries Halal de France',
    excerpt: 'Sélection des meilleures adresses pour acheter votre viande Halal...',
    date: '24 avril 2026',
    category: 'Recommandations',
    image: '🏆',
  },
  {
    id: 3,
    title: 'Certification Halal : Comment ça marche ?',
    excerpt: 'Comprendre les normes et certifications Halal en France et en Europe...',
    date: '23 avril 2026',
    category: 'Éducation',
    image: '✓',
  },
];

export default function Articles() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Actualités et guides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
            >
              {/* Image */}
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 h-40 flex items-center justify-center text-5xl">
                {article.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-600">{article.date}</span>
                </div>

                <h3 className="font-semibold text-lg text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm">{article.excerpt}</p>

                <button className="mt-4 text-yellow-600 font-semibold hover:text-yellow-700 transition">
                  Lire la suite →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
