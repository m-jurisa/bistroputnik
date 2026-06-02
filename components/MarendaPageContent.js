'use client';

import BrandDivider from './BrandDivider';
import Footer from './Footer';
import Header from './Header';
import LanguageSelector from './LanguageSelector';
import LogoLockupPlaceholder from './LogoLockupPlaceholder';
import { useLanguage } from './LanguageProvider';

const marendaIntroText = {
  hr: 'Naša dnevna marenda prati lokalni ritam: sezonska jela, jasno istaknute cijene i ponuda dostupna dok se dnevni meni ne rasproda.',
  en: 'Our daily lunch follows the local rhythm: seasonal dishes, clear prices, and an offer available until the day’s menu is sold out.',
  sv: 'Vår dagliga lunch följer den lokala rytmen: säsongsbetonade rätter, tydliga priser och ett erbjudande som gäller tills dagens meny är slutsåld.',
  fi: 'Päivän lounaamme seuraa paikallista rytmiä: kauden annoksia, selkeät hinnat ja tarjonta, joka on saatavilla niin kauan kuin päivän menu riittää.',
  no: 'Vår dagens lunsj følger den lokale rytmen: sesongbaserte retter, tydelige priser og et tilbud som gjelder til dagens meny er utsolgt.',
  pl: 'Nasz lunch dnia podąża za lokalnym rytmem: sezonowe dania, przejrzyste ceny i oferta dostępna do wyprzedania dziennego menu.',
  de: 'Unser tägliches Mittagsangebot folgt dem lokalen Rhythmus: saisonale Gerichte, klare Preise und ein Angebot, das verfügbar ist, bis das Tagesmenü ausverkauft ist.',
  da: 'Vores daglige frokost følger den lokale rytme: sæsonbetonede retter, tydelige priser og et tilbud, der gælder, indtil dagens menu er udsolgt.',
};

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
  const translation =
    language === marenda.defaultLanguage
      ? null
      : dish.translations?.[language];

  return {
    id: dish.id,
    title: translation?.name || dish.name,
    description: translation?.description || dish.description,
    price: formatDishPrice(dish, marenda.price),
    allergens: Array.isArray(dish.allergens) ? dish.allergens : [],
  };
}

function getDailyOfferLabel(marenda, language) {
  if (language === marenda.defaultLanguage) {
    return marenda.label;
  }

  return marenda.labelTranslations?.[language] || marenda.label;
}

// Draft marenda allergens must be verified with kitchen recipes, stocks, sausages, thickening, and supplier declarations before final display.
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

export default function MarendaPageContent({ business, marenda }) {
  const { language, t } = useLanguage();
  const copy = getMarendaCopy(marenda, language);
  const dishes = getDishes(copy, marenda, language);
  const introText = marendaIntroText[language] || marendaIntroText.en;
  const printOfferLabel = t.marenda.printOffer || 'Print offer';
  const venueLabel = business.venue || 'Bistro Putnik · Baška Voda';
  const dailyOfferMeta = [
    getDailyOfferLabel(marenda, language),
    marenda.dateDisplay,
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <div className="marenda-page relative min-h-svh overflow-hidden">
      <div className="marenda-screen-only absolute inset-0 hero-wash" />
      <div className="marenda-screen-only absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-deep/70 to-transparent" />
      <div className="marenda-screen-only">
        <Header />
      </div>

      <main className="marenda-screen-only relative z-10">
        <section
          id="top"
          className="relative flex min-h-[calc(100svh-5rem)] items-start justify-center overflow-hidden px-4 pb-16 pt-8 sm:min-h-[90svh] sm:items-center sm:px-8 sm:py-16 lg:px-12"
        >
          <div className="absolute right-4 top-4 z-20 sm:right-8 sm:top-8">
            <LanguageSelector />
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
              {dailyOfferMeta ? (
                <p className="fine-print text-brand-sand">
                  {dailyOfferMeta}
                </p>
              ) : null}
              <p className="mx-auto max-w-2xl text-balance text-base leading-7 text-[#e8e3da] sm:text-lg sm:leading-8">
                {introText}
              </p>
              <BrandDivider className="mx-auto w-full max-w-sm" />
            </div>

            <div className="panel-surface w-full max-w-2xl p-6 text-left sm:p-8">
              <p className="fine-print">{copy.dishLabel}</p>
              <ol className="mt-4 grid gap-5">
                {dishes.map((dish) => (
                  <li
                    key={dish.id || `${dish.title}-${dish.price || marenda.price}`}
                    className="grid gap-4 border-t border-brand-line/20 pt-5 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6"
                  >
                    <div className="min-w-0">
                      <h2 className="font-display text-3xl leading-none text-brand-sand sm:text-4xl">
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
                      <p className="mt-2 text-2xl font-semibold tabular-nums text-[#f4eee0] sm:text-3xl">
                        {dish.price || marenda.price}
                      </p>
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

            {copy.allergenNote ? (
              <p className="max-w-2xl text-center text-xs leading-6 text-[#d8dfdf]/75">
                {copy.allergenNote}
              </p>
            ) : null}

            <p className="body-copy max-w-2xl text-sm">{copy.explanation}</p>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <button
                type="button"
                className="brand-button"
                onClick={() => window.print()}
              >
                {printOfferLabel}
              </button>
              <a href="/" className="brand-button-secondary">
                {t.marenda.backToHome}
              </a>
            </div>
          </div>
        </section>
      </main>

      <section className="marenda-print-sheet" aria-label={printOfferLabel}>
        <header className="marenda-print-header">
          <p className="marenda-print-brand">{venueLabel}</p>
          {dailyOfferMeta ? (
            <p className="marenda-print-meta">{dailyOfferMeta}</p>
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
                  <h2>{dish.title}</h2>
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
                  <strong>{dish.price || marenda.price}</strong>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {marenda.noteEnabled && copy.note ? (
          <p className="marenda-print-note">{copy.note}</p>
        ) : null}

        <footer className="marenda-print-footer">
          {copy.allergenNote ? <p>{copy.allergenNote}</p> : null}
          {business.website ? <p>{business.website}</p> : null}
        </footer>
      </section>

      <div className="marenda-screen-only">
        <Footer business={business} />
      </div>
    </div>
  );
}
