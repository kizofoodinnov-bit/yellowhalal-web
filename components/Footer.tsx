'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-4">YellowHalal</h3>
            <p className="text-sm mb-4">
              La plateforme de référence pour trouver les meilleures entreprises Halal en Europe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
                Twitter
              </a>
            </div>
          </div>

          {/* For Users */}
          <div>
            <h4 className="font-semibold text-white mb-4">Pour les utilisateurs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-yellow-500 transition">
                  Rechercher une entreprise
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition">
                  Laisser un avis
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition">
                  Guides et conseils
                </Link>
              </li>
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h4 className="font-semibold text-white mb-4">Pour les professionnels</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-yellow-500 transition">
                  Créer un profil
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition">
                  Tarifs et offres
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-yellow-500 transition">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2026 YellowHalal. Tous droits réservés.</p>
          <p>Fait avec ❤️ pour la communauté Halal</p>
        </div>
      </div>
    </footer>
  );
}
