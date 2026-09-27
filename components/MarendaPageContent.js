import BrandDivider from './BrandDivider';
import Footer from './Footer';
import Header from './Header';
import LanguageSelector from './LanguageSelector';
import LogoLockupPlaceholder from './LogoLockupPlaceholder';
import Price from './Price';
import PriceDownloads from './PriceDownloads';
import { getPriceCopy } from '../menu/price-copy.mjs';
import { restaurantDate, formatReferenceDate } from '../menu/pricing.mjs';

function getMarendaCopy(data, language) {
  return (
    data.translations?.[language] ||
    data.translations?.[data.defaultLanguage] ||
    data.translations?.hr
  );
}

function formatDishPrice(dish, fallbackPrice) {
  if (dish.priceDisplay) {
    return dish.priceDisplay;
  }

  if (typeof dish.price === 'number') {
    return `${dish.price} €`;
  }

  return dish.price || fallbackPrice;
}

function getLocalizedDish(dish, marenda, language) {
  const baseTranslation =
    dish.translations?.[marenda.defaultLanguage] || dish.translations?.hr;
  const translation =
    language === marenda.defaultLanguage
      ? null
      : dish.translations?.[language];

  return {
    id: dish.id,
    tierName: dish.tierName,
    price: dish.price,
    referencePrice: dish.referencePrice,
    referenceDate: dish.referenceDate,
    staffCode: dish.staffCode,
    title: translation?.name || dish.name || baseTranslation?.name,
    description:
      translation?.description ||
      dish.description ||
      baseTranslation?.description,
    priceDisplay: formatDishPrice(dish, marenda.price),
    allergens: Array.isArray(dish.allergens) ? dish.allergens : [],
  };
}

function getDailyOfferLabel(marenda, language) {
  if (language === marenda.defaultLanguage) {
    return marenda.label;
  }

  return marenda.labelTranslations?.[language] || marenda.label;
}

// Marenda allergens must be verified with kitchen recipes, stocks, sausages, thickening, and supplier declarations before final display.
function getDishes(copy, marenda, language) {
  if (Array.isArray(marenda.items) && marenda.items.length) {
    return marenda.items
      .map((dish) => getLocalizedDish(dish, marenda, language))
      .filter((dish) => dish?.title || dish?.description);
  }

  if (Array.isArray(copy.dishes) && copy.dishes.length) {
    return copy.dishes.filter((dish) => dish?.title || dish?.description);
  }

  return [
    {
      title: copy.dishTitle,
      description: copy.dishDescription,
      price: marenda.price,
      allergens: [],
    },
  ].filter((dish) => dish.title || dish.description);
}

function AllergenTags({ allergens }) {
  if (!allergens?.length) {
    return null;
  }

  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {allergens.map((allergen) => (
        <li
          key={allergen}
          className="rounded-full border border-brand-line/30 px-2 py-1 text-[0.62rem] font-semibold uppercase leading-none tracking-[0.16em] text-[#aebdc0]"
        >
          {allergen}
        </li>
      ))}
    </ul>
  );
}

function RestaurantDateText({ timeZone, prefix = '' }) {
  return (
    <span
      data-restaurant-date=""
      data-time-zone={timeZone}
      data-prefix={prefix}
    >
      {prefix}{new Intl.DateTimeFormat('hr-HR', { timeZone, day: '2-digit', month: '2-digit', year: '2-digit' }).format(new Date()).replaceAll(' ', '').replace(/\.$/, '')}
    </span>
  );
}

function PrintButton({ label }) {
  return (
    <button
      type="button"
      className="brand-button"
      data-print-button=""
    >
      {label}
    </button>
  );
}

export default function MarendaPageContent({ business, marenda, chrome }) {
  const language = chrome.locale;
  const copy = getMarendaCopy(marenda, language);
  const dishes = getDishes(copy, marenda, language);
  const introText =
    marenda.introText?.[language] || marenda.introText?.en || copy.intro;
  const printOfferLabel = chrome.marenda.printOffer || 'Print offer';
  const venueLabel = business.venue || 'Bistro Putnik · Baška Voda';
  const dailyOfferLabel = getDailyOfferLabel(marenda, language);
  const priceCopy = getPriceCopy(language);
  const isCurrent = marenda.offerDate === restaurantDate() && dishes.length > 0;

  return (
    <div className="marenda-page relative min-h-svh overflow-hidden">
      <div className="marenda-screen-only absolute inset-0 hero-wash" />
      <div className="marenda-screen-only absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-deep/70 to-transparent" />
      <div className="marenda-screen-only">
        <Header {...chrome.header} />
      </div>

      <main className="marenda-screen-only relative z-10">
        <section
          id="top"
          className="relative flex min-h-[calc(100svh-5rem)] items-start justify-center overflow-hidden px-4 pb-16 pt-8 sm:min-h-[90svh] sm:items-center sm:px-8 sm:py-16 lg:px-12"
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
              <p className="eyebrow">{copy.eyebrow}</p>
              <h1 className="display-title mx-auto max-w-3xl text-balance">
                {copy.pageTitle}
              </h1>
              {dailyOfferLabel ? (
                <p className="fine-print text-brand-sand">
                  {dailyOfferLabel}
                  {' · '}<RestaurantDateText timeZone="Europe/Zagreb" />
                </p>
              ) : null}
              <p className="mx-auto max-w-2xl text-balance text-base leading-7 text-[#e8e3da] sm:text-lg sm:leading-8">
                {introText}
              </p>
              <BrandDivider className="mx-auto w-full max-w-sm" />
            </div>

            <div data-daily-stale="" data-offer-date={marenda.offerDate} data-offer-active={dishes.length > 0} hidden={isCurrent} className="panel-surface w-full max-w-2xl p-6 sm:p-8">
              <p className="body-copy">{priceCopy.stale}</p>
              <a className="brand-button mt-5" href={`tel:${business.phone.replace(/[^+\d]/g, '')}`}>{business.phone}</a>
            </div>
            <div data-daily-current="" data-offer-date={marenda.offerDate} data-offer-active={dishes.length > 0} hidden={!isCurrent} className="w-full space-y-6">
            <div className="panel-surface mx-auto w-full max-w-2xl p-6 text-left sm:p-8">
              <p className="fine-print">{copy.dishLabel}</p>
              <ol className="mt-4 grid gap-5">
                {dishes.map((dish) => (
                  <li
                    key={dish.id || `${dish.title}-${dish.price || marenda.price}`}
                    className="grid gap-4 border-t border-brand-line/20 pt-5 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6"
                  >
                    <div className="min-w-0">
                      <p className="fine-print mb-2">{dish.tierName}</p>
                      <h2 className="font-display text-3xl leading-none text-brand-sand sm:text-4xl">
                        {dish.staffCode ? (
                          <span className="mr-2 inline-flex rounded-full border border-brand-line/25 px-2 py-0.5 align-middle font-sans text-[0.62rem] font-semibold leading-4 tracking-[0.08em] text-[#aebdc0]">
                            {dish.staffCode}
                          </span>
                        ) : null}
                        {dish.title}
                      </h2>
                      {dish.description ? (
                        <p className="body-copy mt-3 text-sm sm:text-base">
                          {dish.description}
                        </p>
                      ) : null}
                      <AllergenTags allergens={dish.allergens} />
                    </div>
                    <div className="shrink-0 border-t border-brand-line/20 pt-3 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 sm:text-right">
                      <p className="fine-print">{copy.priceLabel}</p>
                      <Price item={dish} locale={language} prominent className="mt-2" />
                    </div>
                  </li>
                ))}
              </ol>
              {marenda.noteEnabled && copy.note ? (
                <p className="mt-6 border-t border-brand-line/20 pt-5 text-sm italic leading-6 text-[#d8dfdf]">
                  {copy.note}
                </p>
              ) : null}
            </div>

            <PriceDownloads locale={language} daily />

            {copy.allergenNote ? (
              <p className="mx-auto max-w-2xl text-center text-xs leading-6 text-[#d8dfdf]/75">
                {copy.allergenNote}
              </p>
            ) : null}

            <p className="body-copy mx-auto max-w-2xl text-sm">{copy.explanation}</p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrintButton label={printOfferLabel} />
              <a href={chrome.header.homeHref} className="brand-button-secondary">
                {chrome.marenda.backToHome}
              </a>
            </div>
            </div>

            {copy.availabilityDisclaimer ? (
              <p className="max-w-2xl border-t border-brand-line/20 pt-5 text-center text-[0.72rem] leading-6 text-[#d8dfdf]/65">
                {copy.availabilityDisclaimer}
              </p>
            ) : null}
          </div>
        </section>
      </main>

      <section className="marenda-print-sheet" aria-label={printOfferLabel} data-daily-current="" data-offer-date={marenda.offerDate} data-offer-active={dishes.length > 0} hidden={!isCurrent}>
        <header className="marenda-print-header">
          <p className="marenda-print-brand">{venueLabel}</p>
          {dailyOfferLabel ? (
            <p className="marenda-print-meta">
              {dailyOfferLabel}
              {' · '}<time dateTime={marenda.offerDate}>{formatReferenceDate(marenda.offerDate, language)}</time>
            </p>
          ) : null}
        </header>

        <div className="marenda-print-title-block">
          <p className="marenda-print-eyebrow">{copy.eyebrow}</p>
          <h1 className="marenda-print-title">{copy.pageTitle}</h1>
          {copy.intro ? (
            <p className="marenda-print-intro">{copy.intro}</p>
          ) : null}
        </div>

        <div className="marenda-print-menu">
          <p className="marenda-print-section-label">{copy.dishLabel}</p>
          <ol className="marenda-print-list">
            {dishes.map((dish) => (
              <li
                key={`print-${dish.id || `${dish.title}-${dish.price || marenda.price}`}`}
                className="marenda-print-item"
              >
                <div>
                  <p>{dish.tierName}</p>
                  <h2>
                    {dish.staffCode ? (
                      <span className="marenda-print-staff-code">{dish.staffCode}</span>
                    ) : null}
                    {dish.title}
                  </h2>
                  {dish.description ? <p>{dish.description}</p> : null}
                  {dish.allergens?.length ? (
                    <ul className="marenda-print-allergens">
                      {dish.allergens.map((allergen) => (
                        <li key={`print-${dish.id}-${allergen}`}>
                          {allergen}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <div className="marenda-print-price-block">
                  <p>{copy.priceLabel}</p>
                  <Price item={dish} locale={language} />
                </div>
              </li>
            ))}
          </ol>
        </div>

        {marenda.noteEnabled && copy.note ? (
          <p className="marenda-print-note">{copy.note}</p>
        ) : null}

        {copy.availabilityDisclaimer ? (
          <p className="marenda-print-note">{copy.availabilityDisclaimer}</p>
        ) : null}

        <footer className="marenda-print-footer">
          {copy.allergenNote ? <p>{copy.allergenNote}</p> : null}
          <p>{chrome.footer.displayHost}</p>
        </footer>
      </section>

      <div className="marenda-screen-only">
        <Footer business={business} chrome={chrome.footer} />
      </div>
    </div>
  );
}
