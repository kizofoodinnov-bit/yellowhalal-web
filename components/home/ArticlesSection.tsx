'use client';

import { ChevronRight } from 'lucide-react';

const articles = [
  {
    title: 'Horaires de prière et calendrier du Ramadan 2027',
    category: 'Guide pratique',
    date: '15 mars 2027',
    time: '4 min de lecture',
    excerpt: 'Retrouvez les horaires de prière précis et le calendrier complet du Ramadan 2027 pour toutes les grandes villes de France.',
    color: '#2E7D32',
    initial: 'R',
  },
  {
    title: 'AVS, Achahada, Mosquée de Paris : comprendre les certifications',
    category: 'Décryptage',
    date: '12 mars 2027',
    time: '6 min de lecture',
    excerpt: 'Tout savoir sur les organismes de certification halal en France et comment les reconnaître.',
    color: '#FF8F00',
    initial: 'C',
  },
  {
    title: 'Top 10 des destinations halal-friendly pour l\'été 2027',
    category: 'Dossier',
    date: '10 mars 2027',
    time: '8 min de lecture',
    excerpt: 'De la Turquie au Maroc en passant par la Malaisie, notre sélection des meilleures destinations.',
    color: '#1565C0',
    initial: 'V',
  },
];

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-10 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[22px] font-bold text-yh-black">
            Actualités et guides
          </h2>
          <a href="#" className="text-[14px] font-medium text-yh-blue hover:underline">
            Tous les articles
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((article) => (
            <div
              key={article.title}
              className="bg-white rounded-xl border border-yh-gray-border overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
            >
              {/* Image placeholder */}
              <div
                className="h-[180px] flex items-center justify-center"
                style={{ backgroundColor: article.color + '12' }}
              >
                <span className="text-[56px] font-bold" style={{ color: article.color + '30' }}>
                  {article.initial}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[11px] font-semibold px-2 py-0.5 rounded"
                    style={{ backgroundColor: article.color + '15', color: article.color }}
                  >
                    {article.category}
                  </span>
                  <span className="text-[12px] text-yh-gray">{article.date}</span>
                </div>

                <h3 className="text-[16px] font-bold text-yh-black mb-2 leading-snug group-hover:text-yh-blue transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-[13px] text-yh-gray leading-relaxed line-clamp-2 mb-3">
                  {article.excerpt}
                </p>

                <span className="flex items-center gap-1 text-[13px] font-medium text-yh-blue">
                  Lire l&apos;article
                  <ChevronRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
