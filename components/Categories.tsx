'use client';

const categories = [
  { id: 1, name: 'Restaurants', icon: '🍽️', count: 1250 },
  { id: 2, name: 'Boucheries', icon: '🥩', count: 340 },
  { id: 3, name: 'Pâtisseries', icon: '🥐', count: 210 },
  { id: 4, name: 'Épiceries', icon: '🛒', count: 520 },
  { id: 5, name: 'Traiteurs', icon: '🍲', count: 180 },
  { id: 6, name: 'Cafés', icon: '☕', count: 430 },
  { id: 7, name: 'Pizzerias', icon: '🍕', count: 290 },
  { id: 8, name: 'Snacks', icon: '🌮', count: 380 },
];

export default function Categories() {
  return (
    <section id="categories" className="py-12 md:py-20 bg-white">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Parcourez par catégorie
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition">{cat.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{cat.name}</h3>
              <p className="text-sm text-gray-600">{cat.count} entreprises</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
