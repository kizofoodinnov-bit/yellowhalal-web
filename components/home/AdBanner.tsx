import { ArrowRight } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

interface AdBannerProps {
  brand: string;
  title: string;
  desc: string;
  cta: string;
  href?: string;
}

export default function AdBanner({ brand, title, desc, cta, href = '#' }: AdBannerProps) {
  return (
    <RevealOnScroll>
      <div className="relative my-4">
        <span className="ad-label">Publicité</span>
        <a
          href={href}
          className="group block border border-dashed border-yh-gray-30 rounded-3xl p-8 md:p-9 hover:border-yh-black hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, var(--color-yh-yellow-soft) 0%, rgba(255,255,255,0.5) 100%)',
          }}
        >
          <div className="flex items-center gap-6 md:gap-8">
            {/* Brand mark */}
            <div className="w-[88px] h-[88px] rounded-[22px] bg-yh-black flex items-center justify-center shrink-0">
              <span className="font-serif italic text-[44px] text-yh-yellow">{brand}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[20px] md:text-[24px] font-semibold text-yh-black tracking-tight">{title}</h3>
              <p className="text-[14px] text-yh-gray-60 mt-1 line-clamp-2">{desc}</p>
            </div>

            {/* CTA */}
            <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-yh-black text-white text-[14px] font-semibold rounded-full shrink-0 group-hover:bg-yh-yellow group-hover:text-yh-black transition-colors duration-300">
              {cta}
              <ArrowRight size={16} />
            </button>
          </div>
        </a>
      </div>
    </RevealOnScroll>
  );
}
