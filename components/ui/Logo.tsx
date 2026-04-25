import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <Image
        src="/logo.svg"
        alt="YellowHalal"
        width={38}
        height={32}
        className="transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-[1.08]"
        style={{ transitionTimingFunction: 'var(--ease-spring)' }}
      />
      <span className="text-[22px] tracking-[-0.03em]">
        <span className="font-extrabold text-yh-black">Yellow</span>
        <span className="font-medium text-yh-gray-90">Halal</span>
      </span>
    </Link>
  );
}
