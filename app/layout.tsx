import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

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
    <html lang="fr" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}
