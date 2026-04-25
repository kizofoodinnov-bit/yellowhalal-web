'use client';

import { ArrowRight, Users, Eye, TrendingUp, CheckCircle } from 'lucide-react';

const benefits = [
  'Fiche détaillée avec photos et horaires',
  'Avis clients et notation',
  'Référencement prioritaire dans les résultats',
  'Statistiques de visibilité en temps réel',
];

export default function CTAPros() {
  return (
    <section id="cta-pros" className="py-10 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-yh-black rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left content */}
            <div className="p-8 md:p-12">
              <span className="inline-block px-3 py-1 bg-yh-yellow/20 text-yh-yellow text-[12px] font-semibold rounded-full mb-4">
                Pour les professionnels
              </span>

              <h2 className="text-[28px] md:text-[34px] font-bold text-white leading-tight mb-4">
                Développez votre activité sur YellowHalal
              </h2>

              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Rejoignez plus de 15 000 professionnels qui utilisent YellowHalal pour développer leur clientèle.
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[14px] text-white/80">
                    <CheckCircle size={18} className="text-yh-yellow shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-6 py-3 bg-yh-yellow text-yh-black text-[14px] font-semibold rounded-lg hover:bg-yh-yellow-hover transition-colors">
                  Inscrire mon établissement
                  <ArrowRight size={16} />
                </button>
                <button className="px-6 py-3 border border-white/20 text-white text-[14px] font-medium rounded-lg hover:border-white/40 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Right stats */}
            <div className="bg-white/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-5 bg-white/5 rounded-xl">
                  <Users size={28} className="text-yh-yellow mx-auto mb-2" />
                  <div className="text-[28px] font-bold text-white">15k+</div>
                  <div className="text-[13px] text-white/50">Professionnels inscrits</div>
                </div>
                <div className="text-center p-5 bg-white/5 rounded-xl">
                  <Eye size={28} className="text-yh-yellow mx-auto mb-2" />
                  <div className="text-[28px] font-bold text-white">2,3M</div>
                  <div className="text-[13px] text-white/50">Recherches / mois</div>
                </div>
                <div className="text-center p-5 bg-white/5 rounded-xl">
                  <TrendingUp size={28} className="text-yh-yellow mx-auto mb-2" />
                  <div className="text-[28px] font-bold text-white">+38%</div>
                  <div className="text-[13px] text-white/50">Appels générés</div>
                </div>
                <div className="text-center p-5 bg-white/5 rounded-xl">
                  <div className="text-yh-yellow text-[28px] mb-2">180</div>
                  <div className="text-[28px] font-bold text-white">villes</div>
                  <div className="text-[13px] text-white/50">Couverture France</div>
                </div>
              </div>

              <p className="text-center text-[14px] text-white/40 mt-6">
                À partir de 19,90€ / mois
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
