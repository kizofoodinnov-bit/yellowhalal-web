import Link from 'next/link';

const columns = [
  {
    title: 'Découvrir',
    links: ['Restauration', 'Épiceries', 'Mode & Beauté', 'Santé & Bien-être', 'Voyages halal', 'Événementiel'],
  },
  {
    title: 'Professionnels',
    links: ['Inscrire mon établissement', 'Nos tarifs', 'Régie publicitaire', 'Partenariats', 'API Développeurs'],
  },
  {
    title: 'À propos',
    links: ['Qui sommes-nous', 'Notre mission', 'Recrutement', 'Presse', 'Contact'],
  },
  {
    title: 'Aide',
    links: ['Centre d\'aide', 'CGU', 'Confidentialité', 'Cookies', 'Mentions légales'],
  },
];

const socials = [
  { name: 'Instagram', href: '#' },
  { name: 'TikTok', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'X', href: '#' },
];

const languages = ['FR', 'EN', 'DE', 'NL', 'AR'];

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-yh-black pt-[120px] pb-12 px-6 overflow-hidden">
      {/* Watermark */}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 font-serif italic text-[280px] md:text-[340px] text-white/[0.04] select-none pointer-events-none whitespace-nowrap leading-none">
        YellowHalal
      </span>

      <div className="relative max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 md:gap-8 mb-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <svg viewBox="0 0 100 84" className="w-[38px] h-[32px]" fill="var(--color-yh-yellow)">
                <path d="M50 2 C75 2, 92 12, 96 35 C100 58, 90 75, 65 80 C40 85, 15 80, 8 58 C1 36, 10 15, 30 6 C36 3, 43 2, 50 2 Z"/>
              </svg>
              <span className="text-[22px] tracking-[-0.03em]">
                <span className="font-extrabold text-white">Yellow</span>
                <span className="font-medium text-white/50">Halal</span>
              </span>
            </div>
            <p className="text-[14px] text-white/40 leading-relaxed max-w-[300px] mb-6">
              L&apos;écosystème de référence pour la communauté musulmane en France et en Europe. Trouvez facilement des adresses 100% halal autour de vous.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[12px] font-medium text-white/40 hover:bg-white/10 hover:text-white transition-colors"
                  aria-label={s.name}
                >
                  {s.name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/30 mb-5">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="footer-link text-[14px] text-white/50 hover:text-yh-yellow transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/30">
            &copy; {new Date().getFullYear()} YellowHalal. Tous droits réservés.
          </p>

          {/* Language switcher */}
          <div className="flex items-center gap-1 bg-white/5 rounded-full p-1">
            {languages.map((lang) => (
              <button
                key={lang}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-colors ${
                  lang === 'FR'
                    ? 'bg-yh-yellow text-yh-black'
                    : 'text-white/40 hover:text-white/60'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
