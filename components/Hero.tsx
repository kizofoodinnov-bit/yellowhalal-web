'use client';

import { useState } from 'react';

export default function Hero() {
  const [searchWhat, setSearchWhat] = useState('');
  const [searchWhere, setSearchWhere] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search logic
    console.log('Search:', { searchWhat, searchWhere });
  };

  return (
    <section className="bg-gradient-to-b from-yellow-50 to-white py-12 md:py-20">
      <div className="container">
        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trouvez les meilleures entreprises <span className="text-yellow-600">Halal</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les restaurants, boucheries et services certifiés Halal près de chez vous
          </p>
        </div>

        {/* MegaSearch */}
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* What */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Quoi ?</label>
                <input
                  type="text"
                  placeholder="Restaurant, boucherie, pâtisserie..."
                  value={searchWhat}
                  onChange={(e) => setSearchWhat(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Where */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Où ?</label>
                <input
                  type="text"
                  placeholder="Ville, code postal..."
                  value={searchWhere}
                  onChange={(e) => setSearchWhere(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button type="submit" className="w-full btn btn-primary h-12">
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-3">
          <button className="px-4 py-2 bg-gray-100 hover:bg-yellow-100 text-gray-700 rounded-full transition">
            Restaurants Halal
          </button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-yellow-100 text-gray-700 rounded-full transition">
            Boucheries
          </button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-yellow-100 text-gray-700 rounded-full transition">
            Pâtisseries
          </button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-yellow-100 text-gray-700 rounded-full transition">
            Épiceries
          </button>
        </div>
      </div>
    </section>
  );
}
