'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ============================================================
   YellowHalal Homepage — PagesJaunes-inspired with real images
   ============================================================ */

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

/* SVG icon paths for categories */
const catIcons: Record<string, string> = {
  Restauration: 'M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z',
  'Épiceries': 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
  'Mode & Beauté': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
  'Éducation': 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z',
  'Santé': 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  Voyages: 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z',
  'Événements': 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z',
  Finance: 'M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z',
};

const categories = [
  { name: 'Restauration' },
  { name: 'Épiceries' },
  { name: 'Mode & Beauté' },
  { name: 'Éducation' },
  { name: 'Santé' },
  { name: 'Voyages' },
  { name: 'Événements' },
  { name: 'Finance' },
];

const merchants = [
  { name: 'Sultan Café & Palace', cat: 'Restaurant marocain', addr: '24 rue du Faubourg Saint-Denis, 75010 Paris', rating: 5.0, reviews: 142, dist: '0,3 km', hours: 'Ouvert jusqu\'à 23h', cert: 'Certifié AVS', tags: ['Fine dining', 'Livraison', 'Terrasse'], img: '/images/restaurant-1.jpg', color: '#FF8F00' },
  { name: 'Al-Baraka Grill', cat: 'Restaurant libanais', addr: '67 boulevard de Belleville, 75011 Paris', rating: 4.8, reviews: 89, dist: '0,8 km', hours: 'Ouvert jusqu\'à 22h', cert: 'Halal certifié', tags: ['Grill', 'À emporter', 'Parking'], img: '/images/grill.jpg', color: '#2E7D32' },
  { name: 'Dar Zaman', cat: 'Pâtisserie orientale', addr: '15 rue Jean-Pierre Timbaud, 75011 Paris', rating: 4.7, reviews: 56, dist: '1,2 km', hours: 'Ouvert jusqu\'à 20h', cert: '100% Halal', tags: ['Pâtisserie', 'Salon de thé', 'Commande en ligne'], img: '/images/patisserie.jpg', color: '#6A1B9A' },
];

const shops = [
  { name: 'Boucherie Al-Andalous', cat: 'Boucherie halal', addr: '12 rue de la Fontaine au Roi, 75011', dist: '0,4 km', hours: 'Ouvert jusqu\'à 21h', tags: ['AVS', 'Bio'], img: '/images/boucherie.jpg', color: '#C62828' },
  { name: 'Épicerie du Maghreb', cat: 'Épicerie orientale', addr: '45 bd de Belleville, 75020', dist: '0,8 km', hours: 'Ouvert jusqu\'à 22h', tags: ['Halal', 'Nouveau'], img: '/images/epicerie.jpg', color: '#2E7D32' },
  { name: 'Super Marché Zayan', cat: 'Supermarché halal', addr: '3 av. de la République, 93100', dist: '1,2 km', hours: 'Ouvert jusqu\'à 20h', tags: ['Halal'], img: '/images/halal-food.jpg', color: '#1565C0' },
  { name: 'Boulangerie Orientale', cat: 'Boulangerie', addr: '8 rue Jean-Pierre Timbaud, 75011', dist: '0,6 km', hours: 'Ouvert jusqu\'à 19h30', tags: ['Halal', 'Artisan'], img: '/images/baklava.jpg', color: '#FF8F00' },
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
  { title: 'Horaires de prière et calendrier du Ramadan 2027', cat: 'Guide pratique', date: '15 mars 2027', excerpt: 'Retrouvez les horaires de prière précis et le calendrier complet du Ramadan 2027 pour toutes les grandes villes de France.', color: '#2E7D32', img: '/images/mosque.jpg' },
  { title: 'AVS, Achahada, Mosquée de Paris : comprendre les certifications', cat: 'Décryptage', date: '12 mars 2027', excerpt: 'Tout savoir sur les organismes de certification halal en France et comment les reconnaître.', color: '#FF8F00', img: '/images/kebab.jpg' },
  { title: 'Top 10 des destinations halal-friendly pour l\'été 2027', cat: 'Dossier', date: '10 mars 2027', excerpt: 'De la Turquie au Maroc en passant par la Malaisie, notre sélection des meilleures destinations.', color: '#1565C0', img: '/images/hotel.jpg' },
];

const footerCols = [
  { title: 'Découvrir', links: ['Restauration', 'Épiceries', 'Mode & Beauté', 'Santé & Bien-être', 'Voyages halal', 'Événementiel'] },
  { title: 'Professionnels', links: ['Inscrire mon établissement', 'Nos tarifs', 'Régie publicitaire', 'Partenariats'] },
  { title: 'À propos', links: ['Qui sommes-nous', 'Notre mission', 'Recrutement', 'Presse', 'Contact'] },
  { title: 'Aide', links: ['Centre d\'aide', 'CGU', 'Confidentialité', 'Cookies', 'Mentions légales'] },
];

function Stars({ rating }: { rating: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= Math.floor(rating) ? C.yellow : '#DDD', fontSize: 16 }}>★</span>
      ))}
    </span>
  );
}

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [where, setWhere] = useState('');

  const container: React.CSSProperties = { maxWidth: 1140, margin: '0 auto', padding: '0 24px' };

  return (
    <div style={{ minHeight: '100vh', background: C.white, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>

      {/* ═══════════════ HEADER ═══════════════ */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: C.white, borderBottom: `1px solid ${C.grayBorder}`, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
        <div style={{ ...container, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <Image src="/yellowhalal.png" alt="YellowHalal" width={36} height={36} />
            <span style={{ fontSize: 20, fontWeight: 800, color: C.black, letterSpacing: '-0.02em' }}>
              Yellow<span style={{ fontWeight: 500, color: C.gray }}>Halal</span>
            </span>
          </a>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {['Explorer', 'Professionnels', 'Blog', 'Aide'].map(l => (
              <a key={l} href="#" style={{ fontSize: 14, fontWeight: 500, color: C.grayDark, textDecoration: 'none' }}>{l}</a>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="#" style={{ fontSize: 14, fontWeight: 500, color: C.grayDark, textDecoration: 'none' }}>Se connecter</a>
            <a href="#cta-pros" style={{ fontSize: 14, fontWeight: 600, color: C.black, background: C.yellow, padding: '10px 20px', borderRadius: 8, textDecoration: 'none' }}>
              Référencer mon entreprise
            </a>
          </div>
        </div>
      </header>

      {/* ═══════════════ HERO WITH BACKGROUND IMAGE ═══════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/halal-food.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,194,0,0.92) 0%, rgba(255,194,0,0.88) 100%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, padding: '72px 24px 64px', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, color: C.black, lineHeight: 1.15, marginBottom: 12, letterSpacing: '-0.02em' }}>
            Trouver des services 100% Halal<br />près de chez vous
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.6)', marginBottom: 32, lineHeight: 1.6 }}>
            Restaurants, boucheries, mosquées, écoles et plus encore.<br />
            Plus de 15 000 adresses vérifiées en France et en Europe.
          </p>

          {/* Search bar */}
          <div style={{ background: C.white, borderRadius: 12, boxShadow: '0 8px 32px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'stretch', overflow: 'hidden', maxWidth: 720, margin: '0 auto 24px', height: 56 }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, padding: '0 20px', borderRight: `1px solid ${C.grayBorder}` }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.grayLight} strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input type="text" placeholder="Que recherchez-vous ?" value={query} onChange={e => setQuery(e.target.value)} style={{ flex: 1, fontSize: 15, color: C.black, border: 'none', outline: 'none', background: 'transparent' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, padding: '0 20px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.grayLight} strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <input type="text" placeholder="Où ? (ville, code postal)" value={where} onChange={e => setWhere(e.target.value)} style={{ flex: 1, fontSize: 15, color: C.black, border: 'none', outline: 'none', background: 'transparent' }} />
            </div>
            <button style={{ background: C.black, color: C.white, padding: '0 28px', fontSize: 15, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, border: 'none', cursor: 'pointer' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              Rechercher
            </button>
          </div>

          {/* Quick tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
            {['Restaurant halal', 'Boucherie', 'Mosquée', 'Pâtisserie orientale', 'Traiteur', 'Épicerie', 'Hôtel'].map(t => (
              <button key={t} style={{ padding: '8px 16px', background: C.white, borderRadius: 20, fontSize: 13, fontWeight: 500, color: C.dark, border: 'none', cursor: 'pointer', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CATEGORIES WITH SVG ICONS ═══════════════ */}
      <section style={{ background: C.white, borderBottom: `1px solid ${C.grayBorder}`, padding: '32px 0' }}>
        <div style={{ ...container, display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 12 }}>
          {categories.map(cat => (
            <button key={cat.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '8px', borderRadius: 12, background: 'transparent', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: C.white, border: `2px solid ${C.grayBorder}`, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill={C.black}>
                  <path d={catIcons[cat.name] || ''} />
                </svg>
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: C.grayDark, textAlign: 'center' }}>{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ═══════════════ TOP 3 WITH REAL IMAGES ═══════════════ */}
      <section style={{ padding: '48px 0', background: C.grayBg }}>
        <div style={container}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: C.black }}>Les mieux notés près de chez vous</h2>
            <a href="#" style={{ fontSize: 14, fontWeight: 600, color: C.blue, textDecoration: 'none' }}>Voir tout →</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {merchants.map((m, i) => (
              <div key={m.name} style={{ background: C.white, borderRadius: 16, border: `1px solid ${C.grayBorder}`, overflow: 'hidden', display: 'flex', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', transition: 'box-shadow 0.2s' }}>
                {/* Real image */}
                <div style={{ width: 240, minHeight: 220, position: 'relative', flexShrink: 0 }}>
                  <Image src={m.img} alt={m.name} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 12, left: 12, background: C.yellow, color: C.black, fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 6 }}>
                    #{i+1}
                  </div>
                </div>

                {/* Content */}
                <div style={{ flex: 1, padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: C.gray }}>{m.cat}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: C.green, background: C.greenLight, padding: '3px 10px', borderRadius: 20 }}>
                      ✓ {m.cert}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 20, fontWeight: 700, color: C.black, marginBottom: 8 }}>{m.name}</h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <Stars rating={m.rating} />
                    <span style={{ fontSize: 15, fontWeight: 700, color: C.black }}>{m.rating}</span>
                    <span style={{ fontSize: 13, color: C.gray }}>({m.reviews} avis)</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 13, color: C.gray, marginBottom: 12 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>📍 {m.addr}</span>
                    <span style={{ color: C.green, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4 }}>🕐 {m.hours}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>📐 {m.dist}</span>
                  </div>

                  <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
                    {m.tags.map(t => (
                      <span key={t} style={{ padding: '4px 12px', background: C.grayBg, fontSize: 12, fontWeight: 500, color: C.grayDark, borderRadius: 6 }}>{t}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: 10 }}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', background: C.yellow, color: C.black, fontSize: 13, fontWeight: 700, borderRadius: 8, border: 'none', cursor: 'pointer' }}>
                      📞 Afficher le N°
                    </button>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', border: `1px solid ${C.grayBorder}`, fontSize: 13, fontWeight: 600, color: C.grayDark, borderRadius: 8, background: C.white, cursor: 'pointer' }}>
                      🧭 Itinéraire
                    </button>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', border: `1px solid ${C.grayBorder}`, fontSize: 13, fontWeight: 600, color: C.grayDark, borderRadius: 8, background: C.white, cursor: 'pointer' }}>
                      ⭐ Écrire un avis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ AD BANNER 1 — ISLA DELICE ═══════════════ */}
      <section style={{ padding: '16px 0 0' }}>
        <div style={container}>
          <p style={{ fontSize: 11, color: C.grayLight, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Publicité</p>
          <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', height: 160 }}>
            <Image src="/images/anaaka.png" alt="Anaaka Halal Skincare" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%)' }} />
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', padding: '0 32px' }}>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: C.white, marginBottom: 4 }}>Anaaka — Halal Skincare de luxe</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>Des soins haut de gamme, certifiés halal, pour sublimer votre peau au naturel.</p>
              </div>
              <button style={{ padding: '14px 28px', background: C.yellow, color: C.black, fontSize: 14, fontWeight: 700, borderRadius: 10, border: 'none', cursor: 'pointer', flexShrink: 0, marginLeft: 24 }}>Découvrir →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROXIMITY WITH IMAGES ═══════════════ */}
      <section style={{ padding: '48px 0' }}>
        <div style={container}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: C.black }}>Autour de vous</h2>
            <a href="#" style={{ fontSize: 14, fontWeight: 600, color: C.blue, textDecoration: 'none' }}>Voir la carte →</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {shops.map(s => (
              <div key={s.name} style={{ background: C.white, borderRadius: 16, border: `1px solid ${C.grayBorder}`, overflow: 'hidden', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'box-shadow 0.2s' }}>
                {/* Image */}
                <div style={{ position: 'relative', height: 140 }}>
                  <Image src={s.img} alt={s.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 16 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 2 }}>{s.name}</h3>
                  <p style={{ fontSize: 12, color: C.gray, marginBottom: 8 }}>{s.cat}</p>
                  <p style={{ fontSize: 13, color: C.gray, marginBottom: 8 }}>📍 {s.addr}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 12 }}>
                    <span style={{ color: C.green, fontWeight: 600 }}>● {s.hours}</span>
                    <span style={{ color: C.gray }}>{s.dist}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
                    {s.tags.map(t => (
                      <span key={t} style={{ padding: '3px 8px', background: C.grayBg, fontSize: 11, fontWeight: 500, color: C.grayDark, borderRadius: 4 }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ borderTop: `1px solid ${C.grayBorder}`, paddingTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: C.blue }}>Voir la fiche</span>
                    <span style={{ fontSize: 14, color: C.grayLight }}>›</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TRENDING ═══════════════ */}
      <section style={{ background: C.grayBg, padding: '48px 0' }}>
        <div style={container}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: C.black, marginBottom: 24 }}>🔥 Recherches populaires</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {trends.map((t, i) => (
              <button key={t.q} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', background: C.white, borderRadius: 12, textAlign: 'left', border: `1px solid ${C.grayBorder}`, cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
                <span style={{ width: 36, height: 36, borderRadius: 8, background: i < 3 ? C.yellow : C.grayBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: i < 3 ? C.black : C.gray, flexShrink: 0 }}>{i+1}</span>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: C.black, marginBottom: 2 }}>{t.q}</p>
                  <p style={{ fontSize: 12, color: C.gray }}>{t.n} recherches</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ AD BANNER 2 — HALALBOOKING ═══════════════ */}
      <section style={{ padding: '16px 0 0' }}>
        <div style={container}>
          <p style={{ fontSize: 11, color: C.grayLight, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Publicité</p>
          <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', height: 160 }}>
            <Image src="/images/hotel.jpg" alt="HalalBooking" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(13,71,161,0.9) 0%, rgba(13,71,161,0.5) 100%)' }} />
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', padding: '0 32px' }}>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: C.white, marginBottom: 4 }}>HalalBooking — Vacances halal-friendly</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>Plus de 800 hôtels sélectionnés en Turquie, Espagne, Maroc. Plages privées, piscines séparées, cuisine halal.</p>
              </div>
              <button style={{ padding: '14px 28px', background: C.yellow, color: C.black, fontSize: 14, fontWeight: 700, borderRadius: 10, border: 'none', cursor: 'pointer', flexShrink: 0, marginLeft: 24 }}>Réserver →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ARTICLES WITH IMAGES ═══════════════ */}
      <section style={{ padding: '48px 0' }}>
        <div style={container}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: C.black }}>Actualités et guides</h2>
            <a href="#" style={{ fontSize: 14, fontWeight: 600, color: C.blue, textDecoration: 'none' }}>Tous les articles →</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {articles.map(a => (
              <div key={a.title} style={{ background: C.white, borderRadius: 16, border: `1px solid ${C.grayBorder}`, overflow: 'hidden', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'box-shadow 0.2s' }}>
                <div style={{ position: 'relative', height: 180 }}>
                  <Image src={a.img} alt={a.title} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.3) 100%)' }} />
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: a.color + '15', color: a.color }}>{a.cat}</span>
                    <span style={{ fontSize: 12, color: C.gray }}>{a.date}</span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.black, lineHeight: 1.4, marginBottom: 8 }}>{a.title}</h3>
                  <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.6, marginBottom: 12 }}>{a.excerpt}</p>
                  <span style={{ fontSize: 13, fontWeight: 600, color: C.blue }}>Lire l&apos;article →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ COFFRETS CADEAUX ═══════════════ */}
      <section style={{ padding: '56px 0', background: 'linear-gradient(180deg, #FFFDF5 0%, #FFF8E1 100%)' }}>
        <div style={container}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, color: C.yellow, background: 'rgba(255,194,0,0.15)', padding: '6px 16px', borderRadius: 20, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>🎁 Nouveau</span>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: C.black, marginBottom: 8 }}>Coffrets Cadeaux YellowHalal</h2>
            <p style={{ fontSize: 16, color: C.gray, maxWidth: 600, margin: '0 auto' }}>Offrez une expérience unique 100% halal. Gastronomie, bien-être, spa… des idées cadeaux d’exception pour vos proches.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { name: 'Gastronomie d\u2019Exception', desc: 'Un dîner d\u2019exception pour 2 personnes dans un restaurant halal étoilé ou bistronomique.', price: '89,90', img: '/images/box-gastronomie.png', badge: 'Best-seller' },
              { name: 'Échappée Bien-Être & Spa', desc: 'Une séance bien-être dans un spa halal-friendly avec espaces privatifs et massages modestes.', price: '119,90', img: '/images/box-spa.png', badge: 'Exclusif' },
              { name: 'Pause Bien-Être entre Femmes', desc: 'Le coffret soins réservé aux femmes : hammam, massages et saunas dans un cadre 100% privatif.', price: '99,90', img: '/images/box-femmes.png', badge: 'Femmes' },
              { name: 'Soins & Spas Premium', desc: 'Collection premium : une séance bien-être d\u2019exception pour 1 ou 2 personnes dans un spa de luxe.', price: '159,90', img: '/images/box-premium.png', badge: 'Premium' },
            ].map(box => (
              <div key={box.name} style={{ background: C.white, borderRadius: 16, overflow: 'hidden', border: `1px solid ${C.grayBorder}`, boxShadow: '0 4px 20px rgba(0,0,0,0.06)', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}>
                <div style={{ position: 'relative', width: '100%', height: 280 }}>
                  <Image src={box.img} alt={box.name} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 12, left: 12, background: C.yellow, color: C.black, fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>{box.badge}</div>
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.black, marginBottom: 6, lineHeight: 1.3 }}>{box.name}</h3>
                  <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.5, marginBottom: 16, minHeight: 40 }}>{box.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: C.black }}>{box.price}<span style={{ fontSize: 14, fontWeight: 500, color: C.gray }}>€</span></span>
                    <button style={{ padding: '10px 20px', background: C.yellow, color: C.black, fontSize: 13, fontWeight: 700, borderRadius: 10, border: 'none', cursor: 'pointer' }}>Commander →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button style={{ padding: '14px 32px', background: C.black, color: C.white, fontSize: 14, fontWeight: 700, borderRadius: 12, border: 'none', cursor: 'pointer' }}>Voir tous les coffrets →</button>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA PROS ═══════════════ */}
      <section id="cta-pros" style={{ padding: '48px 0' }}>
        <div style={container}>
          <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden' }}>
            <Image src="/images/restaurant-2.jpg" alt="" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.85) 100%)' }} />
            <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', padding: '56px 48px' }}>
              <div>
                <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, color: C.yellow, background: 'rgba(255,194,0,0.15)', padding: '6px 14px', borderRadius: 20, marginBottom: 20 }}>Pour les professionnels</span>
                <h2 style={{ fontSize: 34, fontWeight: 800, color: C.white, lineHeight: 1.2, marginBottom: 16 }}>Développez votre activité sur YellowHalal</h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 28 }}>
                  Rejoignez plus de 15 000 professionnels qui utilisent YellowHalal pour développer leur clientèle.
                </p>
                <ul style={{ listStyle: 'none', marginBottom: 32, padding: 0 }}>
                  {['Fiche détaillée avec photos et horaires', 'Avis clients et notation', 'Référencement prioritaire', 'Statistiques de visibilité en temps réel'].map(b => (
                    <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 12 }}>
                      <span style={{ color: C.yellow, fontSize: 18, fontWeight: 700 }}>✓</span> {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button style={{ padding: '14px 28px', background: C.yellow, color: C.black, fontSize: 15, fontWeight: 700, borderRadius: 10, border: 'none', cursor: 'pointer' }}>
                    Inscrire mon établissement →
                  </button>
                  <button style={{ padding: '14px 28px', border: '1px solid rgba(255,255,255,0.2)', color: C.white, fontSize: 14, fontWeight: 500, borderRadius: 10, background: 'transparent', cursor: 'pointer' }}>En savoir plus</button>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 40 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    { val: '15k+', label: 'Professionnels inscrits', icon: '👥' },
                    { val: '2,3M', label: 'Recherches / mois', icon: '👁️' },
                    { val: '+38%', label: 'Appels générés', icon: '📈' },
                    { val: '180 villes', label: 'Couverture France', icon: '🗺️' },
                  ].map(s => (
                    <div key={s.label} style={{ textAlign: 'center', padding: 24, background: 'rgba(255,255,255,0.06)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ fontSize: 28, marginBottom: 6 }}>{s.icon}</div>
                      <div style={{ fontSize: 28, fontWeight: 800, color: C.white }}>{s.val}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                <p style={{ textAlign: 'center', fontSize: 14, color: 'rgba(255,255,255,0.35)', marginTop: 24 }}>À partir de <span style={{ color: C.yellow, fontWeight: 700 }}>19,90€</span> / mois</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer style={{ background: C.black, padding: '56px 0 32px' }}>
        <div style={container}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: 32, marginBottom: 48 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Image src="/yellowhalal.png" alt="YellowHalal" width={28} height={28} />
                <span style={{ fontSize: 18, fontWeight: 700, color: C.white }}>Yellow<span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.4)' }}>Halal</span></span>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 260 }}>
                L&apos;annuaire de référence pour trouver des adresses 100% halal en France et en Europe.
              </p>
            </div>
            {footerCols.map(col => (
              <div key={col.title}>
                <h3 style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>{col.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {col.links.map(l => (
                    <li key={l} style={{ marginBottom: 10 }}>
                      <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2026 YellowHalal. Tous droits réservés.</p>
            <div style={{ display: 'flex', gap: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: 4 }}>
              {['FR', 'EN', 'DE', 'NL', 'AR'].map(l => (
                <button key={l} style={{ padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, background: l === 'FR' ? C.yellow : 'transparent', color: l === 'FR' ? C.black : 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer' }}>{l}</button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
