'use client';

import RevealOnScroll from '@/components/ui/RevealOnScroll';

const articles = [
  {
    title: 'Horaires de prière et calendrier du Ramadan 2027 ville par ville',
    category: 'Guide pratique',
    time: '4 min',
    date: '15 mars 2027',
    excerpt: 'Retrouvez les horaires de prière précis et le calendrier complet du Ramadan 2027 pour toutes les grandes villes de France.',
    gradient: 'from-emerald-800 to-emerald-600',
    featured: true,
  },
  {
    title: 'AVS, Achahada, Mosquée de Paris : comprendre les certifications',
    category: 'Décryptage',
    time: '6 min',
    date: '12 mars 2027',
    excerpt: '',
    gradient: 'from-orange-700 to-amber-500',
    featured: false,
  },
  {
    title: 'Top 10 des destinations halal-friendly pour l\'été 2027',
    category: 'Dossier',
    time: '8 min',
    date: '10 mars 2027',
    excerpt: '',
    gradient: 'from-violet-800 to-purple-600',
    featured: false,
  },
];

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="eyebrow">Éditorial</span>
              <h2 className="text-[36px] md:text-[44px] font-semibold tracking-[-0.035em] mt-2">
                Actus & <em className="title-accent">guides</em> de la communauté
              </h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-1.5 text-[14px] font-medium text-yh-gray-60 hover:text-yh-black transition-colors">
              Tous les articles
              <span className="text-yh-yellow">→</span>
            </a>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-5">
          {articles.map((article, i) => (
            <RevealOnScroll key={article.title} delay={i * 100}>
              <div className="group cursor-pointer">
                {/* Media */}
                <div className={`relative rounded-2xl overflow-hidden ${article.featured ? 'h-[340px]' : 'h-[220px]'} bg-gradient-to-br ${article.gradient} mb-4`}>
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold text-white">
                    {article.category}
                  </span>

                  {/* Decorative text */}
                  <span className="absolute bottom-6 left-6 right-6 font-serif italic text-white/15 text-[48px] md:text-[64px] leading-none select-none pointer-events-none">
                    {article.category}
                  </span>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Body */}
                <div className="flex items-center gap-2 text-[12px] text-yh-gray-60 mb-2">
                  <span className="font-medium text-yh-yellow">{article.category}</span>
                  <span>·</span>
                  <span>{article.time}</span>
                  <span>·</span>
                  <span>{article.date}</span>
                </div>
                <h3 className={`font-semibold text-yh-black group-hover:text-yh-yellow transition-colors ${article.featured ? 'text-[22px]' : 'text-[17px]'} leading-snug`}>
                  {article.title}
                </h3>
                {article.featured && article.excerpt && (
                  <p className="text-[14px] text-yh-gray-60 mt-2 leading-relaxed">{article.excerpt}</p>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
