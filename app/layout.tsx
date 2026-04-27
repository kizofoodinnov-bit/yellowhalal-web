import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'YellowHalal — Trouvez des adresses 100% Halal',
  description: "L'écosystème halal de référence en Europe. Restaurants, boucheries, écoles, mosquées et plus encore.",
  keywords: 'halal, restaurant halal, boucherie halal, certification halal, Europe',
  openGraph: {
    title: 'YellowHalal — Trouvez des adresses 100% Halal',
    description: "L'écosystème halal de référence en Europe.",
    url: 'https://yellowhalal.com',
    siteName: 'YellowHalal',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
