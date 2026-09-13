import BrandDivider from './BrandDivider';
import LanguageSelector from './LanguageSelector';
import LogoLockupPlaceholder from './LogoLockupPlaceholder';

export default function HeroSection({ chrome }) {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-5rem)] items-start justify-center overflow-hidden px-4 pb-14 pt-8 sm:min-h-[92svh] sm:items-center sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="absolute right-4 top-4 z-20 sm:right-8 sm:top-8">
        <LanguageSelector
          label={chrome.languageSelectorLabel}
          links={chrome.languageLinks}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(228,201,149,0.08),transparent_28%)]" />
      <div className="absolute left-1/2 top-[36%] h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-line/15 sm:top-[42%] sm:h-[40rem] sm:w-[40rem]" />
      <div className="absolute left-1/2 top-[36%] h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-sand/12 sm:top-[42%] sm:h-[30rem] sm:w-[30rem]" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 text-center sm:gap-8">
        <LogoLockupPlaceholder className="backdrop-blur-[2px]" />
        <div className="space-y-4 sm:space-y-6">
          <h1 className="display-title mx-auto max-w-3xl text-balance">
            {chrome.labels.title}
          </h1>
          <p className="mx-auto max-w-xl text-balance text-base leading-7 text-[#e8e3da] sm:text-lg sm:leading-8">
            {chrome.labels.text}
          </p>
          <BrandDivider className="mx-auto w-full max-w-sm" />
        </div>

        <div className="flex w-full max-w-xs flex-col items-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
          <a href={chrome.menuHref} className="brand-button w-full sm:w-auto">
            {chrome.labels.cta}
          </a>
          <a href={chrome.marendaHref} className="brand-button w-full sm:w-auto">
            {chrome.labels.marendaCta}
          </a>
          <a
            href={chrome.breakfastHref}
            className="brand-button-secondary w-full whitespace-normal text-center leading-5 sm:w-auto"
          >
            {chrome.labels.breakfastCta}
          </a>
        </div>
      </div>
    </section>
  );
}
