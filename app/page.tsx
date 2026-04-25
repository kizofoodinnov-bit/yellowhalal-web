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
        <Hero />
        <Categories />
        <Top3Section />
        <AdBanner
          brand="I"
          title="Isla Délice — Certifié halal depuis 1992"
          desc="Découvrez notre gamme complète de charcuterie et traiteur halal dans plus de 3 500 points de vente."
          cta="Découvrir"
          bgColor="#1A1A1A"
        />
        <ProximityMap />
        <TrendingSearches />
        <AdBanner
          brand="H"
          title="HalalBooking — Vacances halal-friendly"
          desc="Plus de 800 hôtels sélectionnés en Turquie, Espagne, Maroc. Plages privées, piscines séparées, cuisine halal."
          cta="Réserver"
          bgColor="#0D47A1"
        />
        <ArticlesSection />
        <CTAPros />
      </main>
      <Footer />
    </>
  );
}
