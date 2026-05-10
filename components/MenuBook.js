'use client';

import LanguageSelector from './LanguageSelector';
import { useLanguage } from './LanguageProvider';
import MenuCategory from './MenuCategory';
import {
  getLocalizedMenuText,
  getLocalizedNotice,
} from '../data/translations';

function MenuPage({ page, pageIndex }) {
  const { language, t } = useLanguage();
  const pageTitle = getLocalizedMenuText(
    language,
    'pages',
    page.id,
    page.title,
    page,
    'title'
  );
  const intro = getLocalizedMenuText(
    language,
    'pageIntro',
    page.id,
    page.intro,
    page,
    'intro'
  );
  const note = getLocalizedMenuText(
    language,
    'pageNote',
    page.id,
    page.note,
    page,
    'note'
  );
  const closing = getLocalizedMenuText(
    language,
    'pageClosing',
    page.id,
    page.closing,
    page,
    'closing'
  );
  const pageEyebrow = page.id === 'food' ? t.menu.eyebrow : pageTitle;

  return (
    <section id={`menu-${page.id}`} className="scroll-mt-32">
      <div className="border-t border-brand-line/30 pt-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">{pageEyebrow || page.eyebrow}</p>
            <h3 className="section-title mt-3 text-balance">
              {pageTitle}
            </h3>
          </div>
          {note ? (
            <p className="body-copy max-w-md text-sm sm:text-right">
              {note}
            </p>
          ) : null}
        </div>
        {intro ? (
          <p className="body-copy mt-5 max-w-2xl text-sm">{intro}</p>
        ) : null}

        <div className="mt-2">
          {page.sections.map((section, sectionIndex) => (
            <MenuCategory
              key={`${page.id}-${section.id}`}
              section={section}
              defaultOpen={pageIndex === 0 && sectionIndex < 2}
              labels={t.menu}
              language={language}
            />
          ))}
        </div>

        {closing ? (
          <p className="border-t border-brand-line/20 py-6 text-sm italic leading-6 text-[#f4eee0]">
            {closing}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function MenuNotices({ notices }) {
  const { language, t } = useLanguage();

  if (!notices?.length) {
    return null;
  }

  return (
    <section className="border-t border-brand-line/30 pt-8">
      {notices?.length ? (
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="eyebrow">{t.menu.noticesTitle}</p>
            <p className="body-copy mt-3 max-w-md text-sm">
              {t.menu.noticesIntro}
            </p>
          </div>
          <ul className="grid gap-3 text-sm leading-6 text-[#d8dfdf] sm:grid-cols-2">
            {notices.map((notice) => (
              <li key={notice.id} className="border-t border-brand-line/15 pt-3">
                {getLocalizedNotice(notice, language)}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

export default function MenuBook({ pages, notices, allergens }) {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <nav
          aria-label={t.ui.menuPages}
          className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0"
        >
          <div className="flex min-w-max gap-2">
            {pages.map((page) => (
              <a
                key={page.id}
                href={`#menu-${page.id}`}
                className="inline-flex items-center justify-center rounded-full border border-brand-line/25 bg-brand-deep/30 px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#d5dddd] hover:border-brand-sand hover:text-brand-sand"
              >
                {getLocalizedMenuText(
                  language,
                  'pages',
                  page.id,
                  page.title,
                  page,
                  'title'
                )}
              </a>
            ))}
          </div>
        </nav>
        <LanguageSelector className="w-fit" />
      </div>

      {pages.map((page, pageIndex) => (
        <MenuPage key={page.id} page={page} pageIndex={pageIndex} />
      ))}

      <MenuNotices notices={notices} />
    </div>
  );
}
