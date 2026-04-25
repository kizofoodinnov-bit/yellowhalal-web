import Link from 'next/link';
import Image from 'next/image';

const columns = [
  {
    title: 'Découvrir',
    links: ['Restauration', 'Épiceries', 'Mode & Beauté', 'Santé & Bien-être', 'Voyages halal', 'Événementiel'],
  },
  {
    title: 'Professionnels',
    links: ['Inscrire mon établissement', 'Nos tarifs', 'Régie publicitaire', 'Partenariats'],
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

export default function Footer() {
  return (
    <footer id="footer" className="bg-yh-black pt-12 pb-8 px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/yellowhalal.png" alt="YellowHalal" width={32} height={32} />
              <span className="text-[18px] font-bold text-white tracking-tight">
                Yellow<span className="text-white/50">Halal</span>
              </span>
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed mb-5 max-w-[280px]">
              L&apos;annuaire de référence pour trouver des adresses 100% halal en France et en Europe.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'TikTok', 'LinkedIn', 'X'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-[11px] font-medium text-white/40 hover:bg-white/15 hover:text-white transition-colors"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[12px] font-semibold uppercase tracking-wider text-white/30 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[13px] text-white/50 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/30">
            &copy; {new Date().getFullYear()} YellowHalal. Tous droits réservés.
          </p>

          {/* Language */}
          <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
            {['FR', 'EN', 'DE', 'NL', 'AR'].map((lang) => (
              <button
                key={lang}
                className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors ${
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
