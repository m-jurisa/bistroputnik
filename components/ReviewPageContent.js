'use client';

import BrandDivider from './BrandDivider';
import Footer from './Footer';
import Header from './Header';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from './LanguageProvider';

function ReviewPlatformLink({ href, label, platform, mark }) {
  return (
    <a
      href={href}
      className="group grid min-h-[5.5rem] grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-lg border border-brand-line/25 bg-brand-deep/35 px-4 py-4 text-left backdrop-blur-sm hover:border-brand-sand hover:bg-brand-deep/55 sm:min-h-[6rem] sm:px-5"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-line/30 bg-brand-sand/10 font-display text-2xl leading-none text-brand-sand">
        {mark}
      </span>
      <span className="min-w-0">
        <span className="fine-print block text-brand-sand/80">{platform}</span>
        <span className="mt-1 block text-sm font-semibold leading-6 text-brand-pearl group-hover:text-brand-sand sm:text-base">
          {label}
        </span>
      </span>
    </a>
  );
}

export default function ReviewPageContent({ business, links }) {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-svh overflow-hidden">
      <div className="absolute inset-0 hero-wash" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-deep/70 to-transparent" />
      <Header />

      <main className="relative z-10">
        <section
          id="top"
          className="relative flex min-h-[calc(100svh-5rem)] items-start justify-center overflow-hidden px-4 pb-12 pt-8 sm:items-center sm:px-8 sm:py-16 lg:px-12"
        >
          <div className="absolute right-4 top-4 z-20 sm:right-8 sm:top-8">
            <LanguageSelector />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(228,201,149,0.08),transparent_28%)]" />
          <div className="absolute left-1/2 top-[35%] h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-line/15 sm:top-[42%] sm:h-[34rem] sm:w-[34rem]" />
          <div className="absolute left-1/2 top-[35%] h-[13rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-sand/12 sm:top-[42%] sm:h-[25rem] sm:w-[25rem]" />

          <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center pt-12 text-center sm:pt-0">
            <p className="eyebrow">{t.review.eyebrow}</p>
            <h1 className="section-title mt-3 text-balance">
              {t.review.title}
            </h1>
            <p className="body-copy mt-4 max-w-sm text-balance text-sm sm:text-base">
              {t.review.intro}
            </p>
            <BrandDivider className="mt-6 w-full max-w-xs" />

            <div className="mt-7 grid w-full gap-3">
              <ReviewPlatformLink
                href={links.google}
                label={t.review.googleCta}
                platform="Google"
                mark="G"
              />
              <ReviewPlatformLink
                href={links.tripadvisor}
                label={t.review.tripadvisorCta}
                platform="Tripadvisor"
                mark="TA"
              />
            </div>

            <p className="mt-6 text-sm leading-6 text-[#d8dfdf]/80">
              {t.review.thanks}
            </p>
            <p className="mt-3 text-xs leading-6 text-[#d8dfdf]/70">
              {t.review.contactPrompt}{' '}
              <a
                href={`mailto:${business.email}`}
                className="font-semibold text-brand-sand hover:text-[#f4eee0]"
              >
                {t.review.contactLink}
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer business={business} />
    </div>
  );
}
