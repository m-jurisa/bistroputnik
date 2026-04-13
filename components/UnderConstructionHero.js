import BrandDivider from './BrandDivider';
import LogoLockupPlaceholder from './LogoLockupPlaceholder';
import { siteMeta } from '../data/site';

export default function UnderConstructionHero() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 py-16 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-brand-soft" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,40,48,0.82)_0%,rgba(14,55,67,0.24)_45%,rgba(8,40,48,0.88)_100%)]" />
      <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-line/20" />
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-sand/20" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-8 text-center">
        <LogoLockupPlaceholder className="backdrop-blur-[2px]" />
        <BrandDivider className="w-full max-w-md" />
        <div className="space-y-5">
          <p className="eyebrow">Bistro Putnik</p>
          <h1 className="display-title text-balance">We are under construction</h1>
          <p className="mx-auto max-w-2xl text-balance text-lg leading-8 text-[#e8e3da]">
            Check back in a few days. We are opening on 1.5.2026.
          </p>
          <p className="fine-print text-[#c8cfcf]">{siteMeta.slogan}</p>
        </div>
      </div>
    </main>
  );
}
