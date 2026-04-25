'use client';

const trendingSearches = [
  { id: 1, query: 'Restaurant Halal Paris', searches: 15420 },
  { id: 2, query: 'Boucherie Halal Lyon', searches: 9850 },
  { id: 3, query: 'Pâtisserie Halal Marseille', searches: 7230 },
  { id: 4, query: 'Kebab certifié', searches: 6540 },
  { id: 5, query: 'Couscous traditionnel', searches: 5890 },
  { id: 6, query: 'Viande Halal frais', searches: 5120 },
];

export default function TrendingSearches() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Recherches populaires
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {trendingSearches.map((search) => (
            <button
              key={search.id}
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition text-left"
            >
              <p className="font-semibold text-gray-900">{search.query}</p>
              <p className="text-sm text-gray-600">{search.searches.toLocaleString()} recherches</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
