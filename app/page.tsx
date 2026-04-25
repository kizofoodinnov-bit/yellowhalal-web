import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import Top3Section from '@/components/home/Top3Section';
import AdBanner from '@/components/home/AdBanner';
import ProximityMap from '@/components/home/ProximityMap';
import TrendingSearches from '@/components/home/TrendingSearches';
import ArticlesSection from '@/components/home/ArticlesSection';
import CTAPros from '@/components/home/CTAPros';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero + MegaSearch + Stats */}
        <Hero />

        {/* 2. Categories */}
        <Categories />

        {/* 3. Top 3 Restaurants */}
        <Top3Section />

        {/* 4. Ad Banner #1 - Isla Délice */}
        <div className="max-w-[1280px] mx-auto px-6">
          <AdBanner
            brand="I"
            title="Isla Délice · Certifié halal depuis 1992"
            desc="Découvrez notre gamme complète de charcuterie et traiteur halal dans plus de 3 500 points de vente."
            cta="Découvrir"
          />
        </div>

        {/* 5. Commerces à proximité */}
        <ProximityMap />

        {/* 6. Recherches en tendance */}
        <TrendingSearches />

        {/* 7. Ad Banner #2 - HalalBooking */}
        <div className="max-w-[1280px] mx-auto px-6">
          <AdBanner
            brand="H"
            title="HalalBooking · Vacances halal-friendly"
            desc="Plus de 800 hôtels sélectionnés en Turquie, Espagne, Maroc. Plages privées, piscines séparées, cuisine halal."
            cta="Réserver"
          />
        </div>

        {/* 8. Articles & Guides */}
        <ArticlesSection />

        {/* 9. CTA Professionnels */}
        <CTAPros />
      </main>
      <Footer />
    </>
  );
}
