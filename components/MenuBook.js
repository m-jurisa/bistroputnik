import LanguageSelector from './LanguageSelector';
import MenuCategory from './MenuCategory';
import { translations } from '../data/translations';

function MenuPage({ page, pageIndex, labels }) {
  const pageEyebrow = page.id === 'food' ? labels.eyebrow : page.title;

  return (
    <section id={`menu-${page.id}`} className="scroll-mt-32">
      <div className="border-t border-brand-line/30 pt-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">{pageEyebrow || page.eyebrow}</p>
            <h3 className="section-title mt-3 text-balance">
              {page.title}
            </h3>
          </div>
          {page.note ? (
            <p className="body-copy max-w-md text-sm sm:text-right">
              {page.note}
            </p>
          ) : null}
        </div>
        {page.intro ? (
          <p className="body-copy mt-5 max-w-2xl text-sm">{page.intro}</p>
        ) : null}

        <div className="mt-2">
          {page.sections.map((section, sectionIndex) => (
            <MenuCategory
              key={`${page.id}-${section.id}`}
              section={section}
              defaultOpen={pageIndex === 0 && sectionIndex < 2}
              labels={labels}
            />
          ))}
        </div>

        {page.closing ? (
          <p className="border-t border-brand-line/20 py-6 text-sm italic leading-6 text-[#f4eee0]">
            {page.closing}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function MenuNotices({ notices, labels }) {
  if (!notices?.length) {
    return null;
  }

  return (
    <section className="border-t border-brand-line/30 pt-8">
      {notices?.length ? (
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="eyebrow">{labels.noticesTitle}</p>
            <p className="body-copy mt-3 max-w-md text-sm">
              {labels.noticesIntro}
            </p>
          </div>
          <ul className="grid gap-3 text-sm leading-6 text-[#d8dfdf] sm:grid-cols-2">
            {notices.map((notice) => (
              <li key={notice.id} className="border-t border-brand-line/15 pt-3">
                {notice.text}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

export default function MenuBook({ locale = 'en', pages, notices }) {
  const t = translations[locale] || translations.en;

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
                {page.title}
              </a>
            ))}
          </div>
        </nav>
        <LanguageSelector className="w-fit" />
      </div>

      {pages.map((page, pageIndex) => (
        <MenuPage key={page.id} page={page} pageIndex={pageIndex} labels={t.menu} />
      ))}

      <MenuNotices notices={notices} labels={t.menu} />
    </div>
  );
}
