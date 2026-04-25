import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Top3Section from '@/components/Top3Section';
import AdBanners from '@/components/AdBanners';
import TrendingSearches from '@/components/TrendingSearches';
import Articles from '@/components/Articles';
import CTAPros from '@/components/CTAPros';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'YellowHalal - Trouvez les meilleures entreprises Halal',
  description: 'Découvrez les restaurants, boucheries et services certifiés Halal près de chez vous.',
  keywords: 'Halal, restaurant, boucherie, certification, Europe',
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Top3Section />
      <AdBanners />
      <TrendingSearches />
      <Articles />
      <CTAPros />
      <Footer />
    </>
  );
}
