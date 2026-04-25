'use client';

import { ArrowRight, Star, Eye, Phone } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

export default function CTAPros() {
  return (
    <section id="cta-pros" className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <RevealOnScroll>
          <div className="relative bg-yh-black rounded-[32px] px-8 md:px-[60px] py-16 md:py-[72px] overflow-hidden">
            {/* Glow */}
            <div
              className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,194,0,0.25) 0%, transparent 70%)',
                filter: 'blur(80px)',
                animation: 'glow-pulse 12s ease-in-out infinite',
              }}
            />

            <div className="relative grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 items-center">
              {/* Left */}
              <div>
                <span className="eyebrow !text-yh-yellow">Pour les professionnels</span>
                <h2 className="text-[36px] md:text-[52px] font-semibold tracking-[-0.04em] leading-[1.1] text-white mt-4 mb-6">
                  Donnez plus de visibilité à votre{' '}
                  <em className="font-serif italic text-yh-yellow">établissement halal</em>
                </h2>
                <p className="text-[16px] text-white/60 leading-relaxed mb-8 max-w-[520px]">
                  Rejoignez 15 000+ professionnels qui développent leur activité sur YellowHalal. Fiche détaillée, photos, avis clients, click-and-collect, référencement prioritaire.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 px-6 py-3.5 bg-yh-yellow text-yh-black text-[14px] font-semibold rounded-full hover:bg-[#e6af00] transition-colors">
                    Inscrire mon établissement
                    <ArrowRight size={16} />
                  </button>
                  <button className="px-6 py-3.5 border border-white/20 text-white text-[14px] font-semibold rounded-full hover:border-white/40 transition-colors">
                    Voir nos tarifs
                  </button>
                </div>
              </div>

              {/* Right - Merchant card mockup */}
              <div className="hidden md:block">
                <div
                  className="relative bg-yh-graphite rounded-2xl p-6 border border-white/10 transition-transform duration-500 hover:rotate-0"
                  style={{ transform: 'rotate(3deg)' }}
                >
                  {/* Avatar */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-full bg-yh-yellow flex items-center justify-center">
                      <span className="font-serif italic text-[24px] text-yh-black">S</span>
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-white">Sultan Café & Palace</div>
                      <div className="text-[12px] text-white/50">Restaurant marocain</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <Star size={18} className="text-yh-yellow mx-auto mb-1" />
                      <div className="text-[16px] font-bold text-white">142</div>
                      <div className="text-[11px] text-white/40">avis</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <Eye size={18} className="text-yh-yellow mx-auto mb-1" />
                      <div className="text-[16px] font-bold text-white">2,3k</div>
                      <div className="text-[11px] text-white/40">vues/mois</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <Phone size={18} className="text-yh-yellow mx-auto mb-1" />
                      <div className="text-[16px] font-bold text-white">+38%</div>
                      <div className="text-[11px] text-white/40">appels</div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div
                    className="absolute -top-4 -right-4 bg-yh-yellow text-yh-black text-[12px] font-bold px-4 py-2 rounded-full shadow-lg"
                    style={{ animation: 'float-badge 4s ease-in-out infinite' }}
                  >
                    À partir de 19,90€/mois
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
