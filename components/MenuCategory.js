import {
  getLocalizedItem,
  getLocalizedMenuText,
} from '../data/translations';

function joinClasses(...classes) {
  return classes.filter(Boolean).join(' ');
}

function AllergenLine({ allergens, label }) {
  if (!allergens?.length) {
    return null;
  }

  return (
    <p className="mt-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#aebdc0]">
      {label} {allergens.join(' / ')}
    </p>
  );
}

function displayPrice(item) {
  return item.priceDisplay || '€ —';
}

function hasPlaceholderPrice(item, price) {
  return (
    price.includes('__') ||
    (!item.priceDisplay &&
      (item.price === null || typeof item.price === 'undefined') &&
      typeof item.priceMin === 'undefined' &&
      typeof item.priceMax === 'undefined')
  );
}

function MenuItem({ item, labels, language }) {
  const localizedItem = getLocalizedItem(item, language);
  const price = displayPrice(item);
  const isPlaceholder = hasPlaceholderPrice(item, price);

  return (
    <li className="grid gap-2 border-t border-brand-line/15 pt-4 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-5">
      <div className="min-w-0">
        <p className="break-words text-sm font-semibold leading-6 text-[#f4eee0]">
          {localizedItem.name}
        </p>
        {localizedItem.description ? (
          <p className="mt-1 max-w-2xl text-sm leading-6 text-[#cdd8d9]">
            {localizedItem.description}
          </p>
        ) : null}
        <AllergenLine allergens={item.allergens} label={labels.allergens} />
      </div>
      <p
        className={joinClasses(
          'shrink-0 pt-1 text-right text-sm font-medium tabular-nums text-brand-sand',
          isPlaceholder ? 'text-brand-sand/55' : ''
        )}
      >
        {price}
      </p>
    </li>
  );
}

function ToggleMark() {
  return (
    <span
      aria-hidden="true"
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-line/30 text-lg leading-none text-brand-sand"
    >
      <span className="group-open:hidden">+</span>
      <span className="hidden group-open:block">−</span>
    </span>
  );
}

function SectionSummary({ title, meta }) {
  return (
    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden">
      <div className="min-w-0">
        {meta ? <p className="fine-print">{meta}</p> : null}
        <h3 className="mt-2 break-words text-base font-semibold uppercase leading-6 tracking-[0.08em] text-brand-sand">
          {title}
        </h3>
      </div>
      <ToggleMark />
    </summary>
  );
}

function MenuDivider({ section, language, labels }) {
  return (
    <section className="my-8 border-y border-brand-line/25 py-6">
      <p className="fine-print">{labels.section}</p>
      <h3 className="mt-2 font-display text-3xl leading-none text-brand-sand">
        {getLocalizedMenuText(
          language,
          'sections',
          section.id,
          section.title,
          section,
          'title'
        )}
      </h3>
    </section>
  );
}

function InfoSection({ section, defaultOpen, labels, language }) {
  return (
    <details
      className="group border-t border-brand-line/20 first:border-t-0"
      open={defaultOpen}
    >
      <SectionSummary
        title={getLocalizedMenuText(
          language,
          'sections',
          section.id,
          section.title,
          section,
          'title'
        )}
        meta={labels.section}
      />
      <div className="pb-7">
        <div className="space-y-4">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="body-copy max-w-3xl text-sm">
              {paragraph}
            </p>
          ))}
        </div>

        {section.items.length ? (
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-[#d8dfdf] sm:grid-cols-2">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        {section.allergens.length ? (
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-[#d8dfdf] sm:grid-cols-2 lg:grid-cols-3">
            {section.allergens.map((allergen) => (
              <li key={allergen.code} className="grid grid-cols-[2.7rem_1fr] gap-2">
                <span className="font-semibold tracking-[0.06em] text-brand-sand">
                  {allergen.code}
                </span>
                <span>{allergen.label}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </details>
  );
}

export default function MenuCategory({
  section,
  defaultOpen = false,
  labels,
  language,
}) {
  if (section.layout === 'divider' || !section.items?.length) {
    return (
      <MenuDivider section={section} language={language} labels={labels} />
    );
  }

  if (section.type === 'info') {
    return (
      <InfoSection
        section={section}
        defaultOpen={defaultOpen}
        labels={labels}
        language={language}
      />
    );
  }

  return (
    <details
      className={joinClasses(
        'group border-t border-brand-line/20 first:border-t-0',
        section.signature ? 'border-brand-sand/30' : ''
      )}
      open={defaultOpen}
    >
      <SectionSummary
        title={getLocalizedMenuText(
          language,
          'sections',
          section.id,
          section.title,
          section,
          'title'
        )}
        meta={labels.itemCount(section.items.length)}
      />

      {section.note ? (
        <p className="body-copy -mt-2 pb-5 text-sm">
          {getLocalizedMenuText(
            language,
            'sectionNotes',
            section.id,
            section.note,
            section,
            'note'
          )}
        </p>
      ) : null}

      <ol className="grid gap-4 pb-7 md:grid-cols-2 md:gap-x-9">
        {section.items.map((item) => (
          <MenuItem
            key={`${section.id}-${item.id}`}
            item={item}
            labels={labels}
            language={language}
          />
        ))}
      </ol>
    </details>
  );
}
