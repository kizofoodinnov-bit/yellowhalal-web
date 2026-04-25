import { ArrowRight } from 'lucide-react';

interface AdBannerProps {
  brand: string;
  title: string;
  desc: string;
  cta: string;
  bgColor?: string;
  href?: string;
}

export default function AdBanner({ brand, title, desc, cta, bgColor = '#1A1A1A', href = '#' }: AdBannerProps) {
  return (
    <div className="py-4 px-5">
      <div className="max-w-[1200px] mx-auto">
        <span className="text-[11px] font-medium text-yh-gray-light uppercase tracking-wider mb-2 block">
          Publicité
        </span>
        <a
          href={href}
          className="block rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
          style={{ backgroundColor: bgColor }}
        >
          <div className="flex items-center gap-6 p-6 md:p-8">
            {/* Brand icon */}
            <div className="w-[72px] h-[72px] rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <span className="text-[36px] font-bold text-yh-yellow">{brand}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[18px] md:text-[20px] font-bold text-white mb-1">{title}</h3>
              <p className="text-[14px] text-white/60 line-clamp-1">{desc}</p>
            </div>

            {/* CTA */}
            <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-yh-yellow text-yh-black text-[14px] font-semibold rounded-lg hover:bg-yh-yellow-hover transition-colors shrink-0">
              {cta}
              <ArrowRight size={16} />
            </button>
          </div>
        </a>
      </div>
    </div>
  );
}
