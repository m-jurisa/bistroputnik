'use client';

import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import MenuBook from './MenuBook';
import SectionHeading from './SectionHeading';
import { useLanguage } from './LanguageProvider';
import { getLocalizedStory } from '../data/translations';

export default function HomePageContent({ menu }) {
  const { language, t } = useLanguage();
  const story = getLocalizedStory(menu.story, language);
  const businessEmail = menu.business.email;

  return (
    <div className="relative min-h-svh overflow-hidden">
      <div className="absolute inset-0 hero-wash" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-deep/70 to-transparent" />
      <Header />

      <main className="relative z-10">
        <HeroSection />

        <section id="about" className="section-shell scroll-mt-28">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeading
              eyebrow={t.about.eyebrow}
              title={story.title}
            />

            <div className="space-y-6 border-t border-brand-line/25 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="body-copy max-w-2xl">
                  {paragraph}
                </p>
              ))}
              {story.closing ? (
                <p className="max-w-2xl font-display text-2xl italic leading-snug text-[#f4eee0]">
                  {story.closing}
                </p>
              ) : null}

              <div className="grid gap-4 border-t border-brand-line/20 pt-6 sm:grid-cols-3">
                <div>
                  <p className="fine-print">{t.about.facts.opening}</p>
                  <p className="mt-2 text-sm font-semibold text-[#f4eee0]">
                    1.5.2026
                  </p>
                </div>
                <div>
                  <p className="fine-print">{t.about.facts.venue}</p>
                  <p className="mt-2 text-sm font-semibold text-[#f4eee0]">
                    {menu.business.venue}
                  </p>
                </div>
                <div>
                  <p className="fine-print">{t.about.facts.contact}</p>
                  <a
                    href={`mailto:${businessEmail}`}
                    className="mt-2 inline-block break-words text-sm font-semibold text-[#f4eee0] hover:text-brand-sand"
                  >
                    {businessEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="section-shell scroll-mt-28 pt-0">
          <div className="container-shell space-y-10">
            <SectionHeading
              eyebrow={t.menu.eyebrow}
              title={t.menu.title}
              description={t.menu.description}
            />

            <MenuBook
              pages={menu.pages}
              notices={menu.notices}
              allergens={menu.allergens}
            />
          </div>
        </section>
      </main>

      <Footer business={menu.business} />
    </div>
  );
}
