'use client';

export default function CTAPros() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
      <div className="container text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Vous êtes un professionnel Halal ?
        </h2>
        <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
          Rejoignez des milliers d'entreprises qui font confiance à YellowHalal pour augmenter leur visibilité
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white text-yellow-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Créer mon profil
          </button>
          <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition">
            En savoir plus
          </button>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div>
            <div className="text-4xl mb-2">📈</div>
            <h3 className="font-semibold mb-2">Augmentez vos ventes</h3>
            <p className="text-yellow-100">Atteignez plus de clients à la recherche de produits Halal</p>
          </div>
          <div>
            <div className="text-4xl mb-2">⭐</div>
            <h3 className="font-semibold mb-2">Gagnez des avis</h3>
            <p className="text-yellow-100">Recevez des avis vérifiés de vrais clients</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🛡️</div>
            <h3 className="font-semibold mb-2">Certification</h3>
            <p className="text-yellow-100">Affichage de votre certification Halal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
