import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'YellowHalal — Coming soon',
  description: "L'écosystème halal de référence en Europe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
