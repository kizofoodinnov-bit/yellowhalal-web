'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ============================================================
   YellowHalal Homepage — PagesJaunes-inspired professional design
   All styles inline for pixel-perfect control
   ============================================================ */

// ─── Colors ──────────────────────────────────────────────────
const C = {
  yellow: '#FFC200',
  yellowHover: '#E6AF00',
  yellowLight: '#FFF8E1',
  black: '#1A1A1A',
  dark: '#2D2D2D',
  grayDark: '#4A4A4A',
  gray: '#757575',
  grayLight: '#9E9E9E',
  grayBorder: '#E0E0E0',
  grayBg: '#F5F5F5',
  white: '#FFFFFF',
  green: '#2E7D32',
  greenLight: '#E8F5E9',
  blue: '#1565C0',
};

// ─── Data ────────────────────────────────────────────────────
const categories = [
  { name: 'Restauration', icon: '🍽️', color: '#FF8F00', bg: '#FFF3E0' },
  { name: 'Épiceries', icon: '🛒', color: '#2E7D32', bg: '#E8F5E9' },
  { name: 'Mode & Beauté', icon: '👗', color: '#C62828', bg: '#FFEBEE' },
  { name: 'Éducation', icon: '🎓', color: '#1565C0', bg: '#E3F2FD' },
  { name: 'Santé', icon: '❤️', color: '#00897B', bg: '#E0F2F1' },
  { name: 'Voyages', icon: '✈️', color: '#0277BD', bg: '#E1F5FE' },
  { name: 'Événements', icon: '📅', color: '#AD1457', bg: '#FCE4EC' },
  { name: 'Finance', icon: '🏛️', color: '#4527A0', bg: '#EDE7F6' },
];

const merchants = [
  { name: 'Sultan Café & Palace', cat: 'Restaurant marocain', addr: '24 rue du Faubourg Saint-Denis, 75010 Paris', rating: 5.0, reviews: 142, dist: '0,3 km', hours: 'Ouvert jusqu\'à 23h', cert: 'Certifié AVS', tags: ['Fine dining', 'Livraison', 'Terrasse'], initial: 'S', color: '#FF8F00' },
  { name: 'Al-Baraka Grill', cat: 'Restaurant libanais', addr: '67 boulevard de Belleville, 75011 Paris', rating: 4.8, reviews: 89, dist: '0,8 km', hours: 'Ouvert jusqu\'à 22h', cert: 'Halal certifié', tags: ['Grill', 'À emporter', 'Parking'], initial: 'A', color: '#2E7D32' },
  { name: 'Dar Zaman', cat: 'Pâtisserie orientale', addr: '15 rue Jean-Pierre Timbaud, 75011 Paris', rating: 4.7, reviews: 56, dist: '1,2 km', hours: 'Ouvert jusqu\'à 20h', cert: '100% Halal', tags: ['Pâtisserie', 'Salon de thé', 'Commande en ligne'], initial: 'D', color: '#6A1B9A' },
];

const shops = [
  { name: 'Boucherie Al-Andalous', cat: 'Boucherie halal', addr: '12 rue de la Fontaine au Roi, 75011', dist: '0,4 km', hours: 'Ouvert jusqu\'à 21h', tags: ['AVS', 'Bio'], initial: 'B', color: '#C62828' },
  { name: 'Épicerie du Maghreb', cat: 'Épicerie orientale', addr: '45 bd de Belleville, 75020', dist: '0,8 km', hours: 'Ouvert jusqu\'à 22h', tags: ['Halal', 'Nouveau'], initial: 'E', color: '#2E7D32' },
  { name: 'Super Marché Zayan', cat: 'Supermarché halal', addr: '3 av. de la République, 93100', dist: '1,2 km', hours: 'Ouvert jusqu\'à 20h', tags: ['Halal'], initial: 'S', color: '#1565C0' },
  { name: 'Boulangerie Orientale', cat: 'Boulangerie', addr: '8 rue Jean-Pierre Timbaud, 75011', dist: '0,6 km', hours: 'Ouvert jusqu\'à 19h30', tags: ['Halal', 'Artisan'], initial: 'B', color: '#FF8F00' },
];

const trends = [
  { q: 'Restaurants halal ouverts le dimanche', n: '8 340' },
  { q: 'Mosquées Aïd el-Fitr Paris IDF', n: '23 100' },
  { q: 'Traiteur mariage oriental', n: '3 620' },
  { q: 'Agence Omra Ramadan 2027', n: '12 450' },
  { q: 'Boucherie halal livraison', n: '5 210' },
  { q: 'Pâtisserie orientale Paris', n: '4 870' },
];

const articles = [
  { title: 'Horaires de prière et calendrier du Ramadan 2027', cat: 'Guide pratique', date: '15 mars 2027', excerpt: 'Retrouvez les horaires de prière précis et le calendrier complet du Ramadan 2027 pour toutes les grandes villes de France.', color: '#2E7D32' },
  { title: 'AVS, Achahada, Mosquée de Paris : comprendre les certifications', cat: 'Décryptage', date: '12 mars 2027', excerpt: 'Tout savoir sur les organismes de certification halal en France et comment les reconnaître.', color: '#FF8F00' },
  { title: 'Top 10 des destinations halal-friendly pour l\'été 2027', cat: 'Dossier', date: '10 mars 2027', excerpt: 'De la Turquie au Maroc en passant par la Malaisie, notre sélection des meilleures destinations.', color: '#1565C0' },
];

const footerCols = [
  { title: 'Découvrir', links: ['Restauration', 'Épiceries', 'Mode & Beauté', 'Santé & Bien-être', 'Voyages halal', 'Événementiel'] },
  { title: 'Professionnels', links: ['Inscrire mon établissement', 'Nos tarifs', 'Régie publicitaire', 'Partenariats'] },
  { title: 'À propos', links: ['Qui sommes-nous', 'Notre mission', 'Recrutement', 'Presse', 'Contact'] },
  { title: 'Aide', links: ['Centre d\'aide', 'CGU', 'Confidentialité', 'Cookies', 'Mentions légales'] },
];

// ─── Stars Component ─────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= Math.floor(rating) ? C.yellow : '#DDD', fontSize: 16 }}>★</span>
      ))}
    </span>
  );
}

// ─── Main Page ───────────────────────────────────────────────
export default function HomePage() {
  const [query, setQuery] = useState('');
  const [where, setWhere] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const container: React.CSSProperties = { maxWidth: 1140, margin: '0 auto', padding: '0 24px' };

  return (
    <div style={{ minHeight: '100vh', background: C.grayBg }}>

      {/* ═══════════════ HEADER ═══════════════ */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: C.white, borderBottom: `1px solid ${C.grayBorder}` }}>
        <div style={{ ...container, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Image src="/yellowhalal.png" alt="YellowHalal" width={36} height={36} />
            <span style={{ fontSize: 20, fontWeight: 800, color: C.black, letterSpacing: '-0.02em' }}>
              Yellow<span style={{ fontWeight: 500, color: C.gray }}>Halal</span>
            </span>
          </a>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {['Explorer', 'Professionnels', 'Blog', 'Aide'].map(l => (
              <a key={l} href="#" style={{ fontSize: 14, fontWeight: 500, color: C.grayDark }}>{l}</a>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="#" style={{ fontSize: 14, fontWeight: 500, color: C.grayDark }}>Se connecter</a>
            <a href="#cta-pros" style={{ fontSize: 14, fontWeight: 600, color: C.black, background: C.yellow, padding: '10px 20px', borderRadius: 8 }}>
              Référencer mon entreprise
            </a>
          </div>
        </div>
      </header>

      {/* ═══════════════ HERO ═══════════════ */}
      <section style={{ background: C.yellow, padding: '64px 24px 56px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, color: C.black, lineHeight: 1.15, marginBottom: 12, letterSpacing: '-0.02em' }}>
            Trouver des services 100% Halal<br />près de chez vous
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', marginBottom: 32, lineHeight: 1.6 }}>
            Restaurants, boucheries, mosquées, écoles et plus encore.<br />
            Plus de 15 000 adresses vérifiées en France et en Europe.
          </p>

          {/* Search bar */}
          <div style={{ background: C.white, borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'stretch', overflow: 'hidden', maxWidth: 720, margin: '0 auto 24px' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', borderRight: `1px solid ${C.grayBorder}` }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.grayLight} strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input type="text" placeholder="Que recherchez-vous ?" value={query} onChange={e => setQuery(e.target.value)} style={{ flex: 1, fontSize: 15, color: C.black }} />
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.grayLight} strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <input type="text" placeholder="Où ? (ville, code postal)" value={where} onChange={e => setWhere(e.target.value)} style={{ flex: 1, fontSize: 15, color: C.black }} />
            </div>
            <button style={{ background: C.black, color: C.white, padding: '0 28px', fontSize: 15, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              Rechercher
            </button>
          </div>

          {/* Quick tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
            {['Restaurant halal', 'Boucherie', 'Mosquée', 'Pâtisserie orientale', 'Traiteur', 'Épicerie'].map(t => (
              <button key={t} style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.6)', borderRadius: 20, fontSize: 13, fontWeight: 500, color: C.dark }}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CATEGORIES ═══════════════ */}
      <section style={{ background: C.white, borderBottom: `1px solid ${C.grayBorder}`, padding: '24px 0' }}>
        <div style={{ ...container, display: 'flex', justifyContent: 'space-around', gap: 8, overflowX: 'auto' }}>
          {categories.map(cat => (
            <button key={cat.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, minWidth: 90, padding: '12px 8px', borderRadius: 12, background: 'transparent', transition: 'background 0.2s' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: cat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>
                {cat.icon}
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: C.grayDark, textAlign: 'center' }}>{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ═══════════════ TOP 3 ═══════════════ */}
      <section style={{ padding: '40px 0' }}>
        <div style={container}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: C.black }}>Les mieux notés près de chez vous</h2>
            <a href="#" style={{ fontSize: 14, fontWeight: 500, color: C.blue }}>Voir tout →</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {merchants.map((m, i) => (
              <div key={m.name} style={{ background: C.white, borderRadius: 12, border: `1px solid ${C.grayBorder}`, overflow: 'hidden', display: 'flex' }}>
                {/* Image placeholder */}
                <div style={{ width: 200, minHeight: 180, background: m.color + '12', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 72, fontWeight: 700, color: m.color + '40' }}>{m.initial}</span>
                </div>

                {/* Content */}
                <div style={{ flex: 1, padding: 20 }}>
                  {/* Row 1: rank + category + cert */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ background: C.yellow, color: C.black, fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 4 }}>#{i+1}</span>
                      <span style={{ fontSize: 13, color: C.gray }}>{m.cat}</span>
                    </div>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: C.green }}>
                      <span style={{ fontSize: 16 }}>✓</span> {m.cert}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: C.black, marginBottom: 6 }}>{m.name}</h3>

                  {/* Rating */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <Stars rating={m.rating} />
                    <span style={{ fontSize: 14, fontWeight: 600, color: C.black }}>{m.rating}</span>
                    <span style={{ fontSize: 13, color: C.gray }}>({m.reviews} avis)</span>
                  </div>

                  {/* Info */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 13, color: C.gray, marginBottom: 10 }}>
                    <span>📍 {m.addr}</span>
                    <span style={{ color: C.green, fontWeight: 500 }}>🕐 {m.hours}</span>
                    <span>📐 {m.dist}</span>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
                    {m.tags.map(t => (
                      <span key={t} style={{ padding: '4px 10px', background: C.grayBg, fontSize: 12, fontWeight: 500, color: C.grayDark, borderRadius: 6 }}>{t}</span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', background: C.black, color: C.white, fontSize: 13, fontWeight: 600, borderRadius: 8 }}>
                      📞 Afficher le N°
                    </button>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', border: `1px solid ${C.grayBorder}`, fontSize: 13, fontWeight: 600, color: C.grayDark, borderRadius: 8 }}>
                      🧭 Itinéraire
                    </button>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', border: `1px solid ${C.grayBorder}`, fontSize: 13, fontWeight: 600, color: C.grayDark, borderRadius: 8 }}>
                      ⭐ Écrire un avis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ AD BANNER 1 ═══════════════ */}
      <div style={container}>
        <p style={{ fontSize: 11, color: C.grayLight, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Publicité</p>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 20, background: C.black, borderRadius: 12, padding: '20px 28px', marginBottom: 8 }}>
          <div style={{ width: 64, height: 64, borderRadius: 12, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 32, fontWeight: 700, color: C.yellow }}>I</span>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: C.white, marginBottom: 2 }}>Isla Délice — Certifié halal depuis 1992</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Découvrez notre gamme complète de charcuterie et traiteur halal dans plus de 3 500 points de vente.</p>
          </div>
          <button style={{ padding: '12px 24px', background: C.yellow, color: C.black, fontSize: 14, fontWeight: 600, borderRadius: 8, flexShrink: 0 }}>Découvrir →</button>
        </a>
      </div>

      {/* ═══════════════ PROXIMITY ═══════════════ */}
      <section style={{ padding: '40px 0' }}>
        <div style={container}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: C.black }}>Autour de vous</h2>
            <a href="#" style={{ fontSize: 14, fontWeight: 500, color: C.blue }}>Voir la carte →</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {shops.map(s => (
              <div key={s.name} style={{ background: C.white, borderRadius: 12, border: `1px solid ${C.grayBorder}`, padding: 20, cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: s.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 20, fontWeight: 700, color: s.color }}>{s.initial}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: C.black }}>{s.name}</h3>
                    <p style={{ fontSize: 12, color: C.gray }}>{s.cat}</p>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: C.gray, marginBottom: 8 }}>📍 {s.addr}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 12 }}>
                  <span style={{ color: C.green, fontWeight: 500 }}>● {s.hours}</span>
                  <span style={{ color: C.gray }}>{s.dist}</span>
                </div>
                <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ padding: '3px 8px', background: C.grayBg, fontSize: 11, fontWeight: 500, color: C.grayDark, borderRadius: 4 }}>{t}</span>
                  ))}
                </div>
                <div style={{ borderTop: `1px solid ${C.grayBorder}`, paddingTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: C.blue }}>Voir la fiche</span>
                  <span style={{ fontSize: 14, color: C.grayLight }}>›</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TRENDING ═══════════════ */}
      <section style={{ background: C.white, padding: '40px 0' }}>
        <div style={container}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: C.black, marginBottom: 20 }}>🔥 Recherches populaires</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {trends.map((t, i) => (
              <button key={t.q} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', background: C.grayBg, borderRadius: 10, textAlign: 'left' }}>
                <span style={{ width: 32, height: 32, borderRadius: 8, background: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: C.gray, flexShrink: 0 }}>{i+1}</span>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 500, color: C.black }}>{t.q}</p>
                  <p style={{ fontSize: 12, color: C.gray }}>{t.n} recherches</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ AD BANNER 2 ═══════════════ */}
      <div style={container}>
        <p style={{ fontSize: 11, color: C.grayLight, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6, marginTop: 16 }}>Publicité</p>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 20, background: '#0D47A1', borderRadius: 12, padding: '20px 28px', marginBottom: 8 }}>
          <div style={{ width: 64, height: 64, borderRadius: 12, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 32, fontWeight: 700, color: C.yellow }}>H</span>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: C.white, marginBottom: 2 }}>HalalBooking — Vacances halal-friendly</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Plus de 800 hôtels sélectionnés en Turquie, Espagne, Maroc. Plages privées, piscines séparées, cuisine halal.</p>
          </div>
          <button style={{ padding: '12px 24px', background: C.yellow, color: C.black, fontSize: 14, fontWeight: 600, borderRadius: 8, flexShrink: 0 }}>Réserver →</button>
        </a>
      </div>

      {/* ═══════════════ ARTICLES ═══════════════ */}
      <section style={{ padding: '40px 0' }}>
        <div style={container}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: C.black }}>Actualités et guides</h2>
            <a href="#" style={{ fontSize: 14, fontWeight: 500, color: C.blue }}>Tous les articles →</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {articles.map(a => (
              <div key={a.title} style={{ background: C.white, borderRadius: 12, border: `1px solid ${C.grayBorder}`, overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ height: 160, background: a.color + '12', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 48, fontWeight: 700, color: a.color + '25' }}>{a.title[0]}</span>
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 4, background: a.color + '15', color: a.color }}>{a.cat}</span>
                    <span style={{ fontSize: 12, color: C.gray }}>{a.date}</span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: C.black, lineHeight: 1.4, marginBottom: 8 }}>{a.title}</h3>
                  <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.5, marginBottom: 12 }}>{a.excerpt}</p>
                  <span style={{ fontSize: 13, fontWeight: 500, color: C.blue }}>Lire l&apos;article →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA PROS ═══════════════ */}
      <section id="cta-pros" style={{ padding: '40px 0' }}>
        <div style={container}>
          <div style={{ background: C.black, borderRadius: 20, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.2fr 1fr' }}>
            <div style={{ padding: '48px 40px' }}>
              <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, color: C.yellow, background: 'rgba(255,194,0,0.15)', padding: '4px 12px', borderRadius: 20, marginBottom: 16 }}>Pour les professionnels</span>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: C.white, lineHeight: 1.2, marginBottom: 16 }}>Développez votre activité sur YellowHalal</h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: 24 }}>
                Rejoignez plus de 15 000 professionnels qui utilisent YellowHalal pour développer leur clientèle.
              </p>
              <ul style={{ listStyle: 'none', marginBottom: 28 }}>
                {['Fiche détaillée avec photos et horaires', 'Avis clients et notation', 'Référencement prioritaire', 'Statistiques de visibilité en temps réel'].map(b => (
                  <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 10 }}>
                    <span style={{ color: C.yellow, fontSize: 16 }}>✓</span> {b}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 12 }}>
                <button style={{ padding: '14px 24px', background: C.yellow, color: C.black, fontSize: 14, fontWeight: 600, borderRadius: 8 }}>Inscrire mon établissement →</button>
                <button style={{ padding: '14px 24px', border: '1px solid rgba(255,255,255,0.2)', color: C.white, fontSize: 14, fontWeight: 500, borderRadius: 8 }}>En savoir plus</button>
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '48px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { val: '15k+', label: 'Professionnels inscrits', icon: '👥' },
                  { val: '2,3M', label: 'Recherches / mois', icon: '👁️' },
                  { val: '+38%', label: 'Appels générés', icon: '📈' },
                  { val: '180 villes', label: 'Couverture France', icon: '🗺️' },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: 'center', padding: 20, background: 'rgba(255,255,255,0.04)', borderRadius: 12 }}>
                    <div style={{ fontSize: 24, marginBottom: 4 }}>{s.icon}</div>
                    <div style={{ fontSize: 24, fontWeight: 700, color: C.white }}>{s.val}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <p style={{ textAlign: 'center', fontSize: 14, color: 'rgba(255,255,255,0.3)', marginTop: 20 }}>À partir de 19,90€ / mois</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer id="footer" style={{ background: C.black, padding: '48px 0 32px' }}>
        <div style={container}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: 32, marginBottom: 40 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <Image src="/yellowhalal.png" alt="YellowHalal" width={28} height={28} />
                <span style={{ fontSize: 18, fontWeight: 700, color: C.white }}>Yellow<span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.4)' }}>Halal</span></span>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, maxWidth: 260, marginBottom: 16 }}>
                L&apos;annuaire de référence pour trouver des adresses 100% halal en France et en Europe.
              </p>
            </div>
            {footerCols.map(col => (
              <div key={col.title}>
                <h3 style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>{col.title}</h3>
                <ul style={{ listStyle: 'none' }}>
                  {col.links.map(l => (
                    <li key={l} style={{ marginBottom: 10 }}>
                      <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2026 YellowHalal. Tous droits réservés.</p>
            <div style={{ display: 'flex', gap: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: 4 }}>
              {['FR', 'EN', 'DE', 'NL', 'AR'].map(l => (
                <button key={l} style={{ padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 500, background: l === 'FR' ? C.yellow : 'transparent', color: l === 'FR' ? C.black : 'rgba(255,255,255,0.35)' }}>{l}</button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
