import MenuBook from './MenuBook';
import ContactForm from './ContactForm';
import SectionHeading from './SectionHeading';
import {
  blogArticles,
  getAbsoluteUrl,
  getLocalizedPath,
  getLocalizedValue,
  pageContent,
  routeDefinitions,
  siteConfig,
} from '../data/site-config';
import { translations } from '../data/translations';
import { venueFacts } from '../data/venue-facts';

function localeCopy(collection, locale) {
  return collection?.[locale] || collection?.en;
}

const guideUi = {
  hr: {
    updated: 'Ažurirano',
    recommendations: 'Preporuke iz jelovnika',
    visitLinks: 'Planiranje posjeta',
    relatedGuides: 'Povezani vodiči',
    allGuides: 'Svi vodiči',
    viewMenu: 'Pogledaj jelovnik',
  },
  en: {
    updated: 'Updated',
    recommendations: 'Menu Recommendations',
    visitLinks: 'Plan the Visit',
    relatedGuides: 'Related Guides',
    allGuides: 'All Guides',
    viewMenu: 'View Menu',
  },
  de: {
    updated: 'Aktualisiert',
    recommendations: 'Empfehlungen aus der Speisekarte',
    visitLinks: 'Besuch planen',
    relatedGuides: 'Verwandte Guides',
    allGuides: 'Alle Guides',
    viewMenu: 'Speisekarte ansehen',
  },
  sv: {
    updated: 'Uppdaterad',
    recommendations: 'Menyrekommendationer',
    visitLinks: 'Planera besöket',
    relatedGuides: 'Relaterade guider',
    allGuides: 'Alla guider',
    viewMenu: 'Visa meny',
  },
  fi: {
    updated: 'Päivitetty',
    recommendations: 'Menun suositukset',
    visitLinks: 'Suunnittele käynti',
    relatedGuides: 'Aiheeseen liittyvät oppaat',
    allGuides: 'Kaikki oppaat',
    viewMenu: 'Katso menu',
  },
  no: {
    updated: 'Oppdatert',
    recommendations: 'Anbefalinger fra menyen',
    visitLinks: 'Planlegg besøket',
    relatedGuides: 'Relaterte guider',
    allGuides: 'Alle guider',
    viewMenu: 'Se meny',
  },
  pl: {
    updated: 'Zaktualizowano',
    recommendations: 'Rekomendacje z menu',
    visitLinks: 'Zaplanuj wizytę',
    relatedGuides: 'Powiązane przewodniki',
    allGuides: 'Wszystkie przewodniki',
    viewMenu: 'Zobacz menu',
  },
  da: {
    updated: 'Opdateret',
    recommendations: 'Anbefalinger fra menuen',
    visitLinks: 'Planlæg besøget',
    relatedGuides: 'Relaterede guides',
    allGuides: 'Alle guides',
    viewMenu: 'Se menu',
  },
};

const directContactCopy = {
  hr: {
    eyebrow: 'Izravni kontakt',
    phoneHint: 'Za najbrži odgovor nazovite lokal.',
    email: 'E-pošta',
    emailHint: 'E-mail je prikazan za kopiranje, a link otvara novu poruku.',
    emailAction: 'Pošaljite e-poštu',
  },
  en: {
    eyebrow: 'Direct Contact',
    phoneHint: 'For the fastest reply, call the restaurant.',
    email: 'Email',
    emailHint: 'The email is written out for copy and paste, and the link opens a new message.',
    emailAction: 'Send Email',
  },
  de: {
    eyebrow: 'Direkter Kontakt',
    phoneHint: 'Für die schnellste Antwort rufen Sie das Lokal an.',
    email: 'E-Mail',
    emailHint: 'Die E-Mail-Adresse ist zum Kopieren ausgeschrieben, der Link öffnet eine neue Nachricht.',
    emailAction: 'E-Mail senden',
  },
  sv: {
    eyebrow: 'Direktkontakt',
    phoneHint: 'Ring restaurangen för snabbast svar.',
    email: 'E-post',
    emailHint: 'E-postadressen visas för kopiering och länken öppnar ett nytt meddelande.',
    emailAction: 'Skicka e-post',
  },
  fi: {
    eyebrow: 'Suora yhteys',
    phoneHint: 'Nopeimman vastauksen saat soittamalla ravintolaan.',
    email: 'Sähköposti',
    emailHint: 'Sähköposti on kirjoitettu näkyviin kopiointia varten, ja linkki avaa uuden viestin.',
    emailAction: 'Lähetä sähköposti',
  },
  no: {
    eyebrow: 'Direkte kontakt',
    phoneHint: 'Ring restauranten for raskest svar.',
    email: 'E-post',
    emailHint: 'E-postadressen vises for kopiering, og lenken åpner en ny melding.',
    emailAction: 'Send e-post',
  },
  pl: {
    eyebrow: 'Kontakt bezpośredni',
    phoneHint: 'Aby uzyskać najszybszą odpowiedź, zadzwoń do lokalu.',
    email: 'E-mail',
    emailHint: 'Adres e-mail jest widoczny do skopiowania, a link otwiera nową wiadomość.',
    emailAction: 'Wyślij e-mail',
  },
  da: {
    eyebrow: 'Direkte kontakt',
    phoneHint: 'Ring til restauranten for det hurtigste svar.',
    email: 'E-mail',
    emailHint: 'E-mailadressen vises til kopiering, og linket åbner en ny besked.',
    emailAction: 'Send e-mail',
  },
};

function PageIntro({ eyebrow, title, description }) {
  return (
    <section id="top" className="section-shell scroll-mt-28">
      <div className="container-shell pt-8 sm:pt-12">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="max-w-4xl"
        />
      </div>
    </section>
  );
}

function RouteLinks({ locale }) {
  const links = [
    ['menu', getLocalizedValue(routeDefinitions.menu.title, locale)],
    ['marenda', getLocalizedValue(routeDefinitions.marenda.title, locale)],
    ['location', getLocalizedValue(routeDefinitions.location.title, locale)],
  ];

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {links.map(([routeKey, label]) => (
        <a key={routeKey} href={getLocalizedPath(locale, routeKey)} className="brand-button-secondary">
          {label}
        </a>
      ))}
    </div>
  );
}

function ArticleRouteLinks({ locale, routeKeys = [] }) {
  const ui = guideUi[locale] || guideUi.en;
  const links = routeKeys
    .filter((routeKey) => routeDefinitions[routeKey])
    .map((routeKey) => ({
      routeKey,
      href: getLocalizedPath(locale, routeKey),
      label: getLocalizedValue(routeDefinitions[routeKey].title, locale),
    }));

  if (!links.length) {
    return null;
  }

  return (
    <section className="mt-10 border-t border-brand-line/20 pt-7">
      <p className="fine-print">{ui.visitLinks}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {links.map((link) => (
          <a key={link.routeKey} href={link.href} className="brand-button-secondary">
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function RecommendedMenuItems({ locale, items = [] }) {
  const ui = guideUi[locale] || guideUi.en;

  if (!items.length) {
    return null;
  }

  return (
    <section className="mt-10 border-t border-brand-line/20 pt-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="fine-print">{siteConfig.venueName}</p>
          <h2 className="mt-2 font-display text-3xl leading-none text-brand-sand">
            {ui.recommendations}
          </h2>
        </div>
        <a href={getLocalizedPath(locale, 'menu')} className="brand-button-secondary">
          {ui.viewMenu}
        </a>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => {
          return (
            <a
              key={item.id}
              href={getLocalizedPath(locale, 'menu')}
              className="rounded-lg border border-brand-line/20 bg-brand-deep/25 p-5 hover:border-brand-sand hover:bg-brand-deep/45"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="break-words text-base font-semibold leading-6 text-[#f4eee0]">
                    {item.name}
                  </p>
                  {item.description ? (
                    <p className="mt-2 text-sm leading-6 text-[#cdd8d9]">
                      {item.description}
                    </p>
                  ) : null}
                </div>
                <p className="shrink-0 text-sm font-semibold tabular-nums text-brand-sand">
                  {item.priceDisplay}
                </p>
              </div>
              {item.sectionTitle ? (
                <p className="mt-4 fine-print">
                  {item.sectionTitle}
                </p>
              ) : null}
            </a>
          );
        })}
      </div>
    </section>
  );
}

function RelatedGuides({ locale, article }) {
  const ui = guideUi[locale] || guideUi.en;
  const related = (article.relatedGuideKeys || [])
    .map((key) => blogArticles.find((item) => item.key === key))
    .filter(Boolean);

  if (!related.length) {
    return null;
  }

  return (
    <section className="mt-10 border-t border-brand-line/20 pt-7">
      <p className="fine-print">{ui.relatedGuides}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {related.map((item) => (
          <a
            key={item.key}
            href={getLocalizedPath(locale, 'article', { articleKey: item.key })}
            className="rounded-lg border border-brand-line/20 bg-brand-deep/20 p-5 hover:border-brand-sand hover:bg-brand-deep/40"
          >
            <h2 className="font-display text-2xl leading-none text-brand-sand">
              {getLocalizedValue(item.title, locale)}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#d8dfdf]">
              {getLocalizedValue(item.description, locale)}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function MenuStandalonePage({ locale, menu }) {
  const t = translations[locale] || translations.en;

  return (
    <>
      <PageIntro
        eyebrow={t.menu.eyebrow}
        title={getLocalizedValue(routeDefinitions.menu.title, locale)}
        description={getLocalizedValue(routeDefinitions.menu.description, locale)}
      />
      <section className="section-shell scroll-mt-28 pt-0">
        <div className="container-shell space-y-10">
          <MenuBook
            locale={locale}
            pages={menu.pages}
            notices={menu.notices}
          />
        </div>
      </section>
    </>
  );
}

export function LocationPage({ locale, business }) {
  const copy = localeCopy(pageContent.location, locale);
  const directCopy = directContactCopy[locale] || directContactCopy.en;
  const locationPath = getLocalizedPath(locale, 'location');
  const contactRedirectUrl = `${siteConfig.siteUrl}${locationPath}?contact=sent#contact-form`;
  const telHref = venueFacts.phone ? `tel:${venueFacts.phone.replace(/[^\d+]/g, '')}` : '';

  return (
    <>
      <PageIntro eyebrow={copy.eyebrow} title={copy.title} description={copy.intro} />
      <section className="section-shell pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-7">
            <div className="panel-surface p-6 sm:p-8">
              <p className="fine-print">Contact</p>
              <dl className="mt-5 grid gap-5 text-sm leading-6 text-[#d8dfdf]">
                <div>
                  <dt className="text-brand-sand/80">Venue</dt>
                  <dd className="mt-1 font-semibold text-[#f4eee0]">
                    {siteConfig.venueDisplayName}
                  </dd>
                </div>
                <div>
                  <dt className="text-brand-sand/80">Address</dt>
                  <dd className="mt-1">
                    <a
                      className="font-semibold text-[#f4eee0] hover:text-brand-sand"
                      href={venueFacts.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {venueFacts.fullAddress}
                    </a>
                  </dd>
                </div>
                {venueFacts.phone ? (
                  <div>
                    <dt className="text-brand-sand/80">Phone</dt>
                    <dd className="mt-1">
                      <a className="font-semibold text-[#f4eee0] hover:text-brand-sand" href={telHref}>
                        {venueFacts.phone}
                      </a>
                    </dd>
                  </div>
                ) : null}
                <div>
                  <dt className="text-brand-sand/80">Email</dt>
                  <dd className="mt-1">
                    <a className="font-semibold text-[#f4eee0] hover:text-brand-sand" href={`mailto:${business.email}`}>
                      {business.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-brand-sand/80">Website</dt>
                  <dd className="mt-1">
                    <a className="font-semibold text-[#f4eee0] hover:text-brand-sand" href={siteConfig.siteUrl}>
                      {siteConfig.displayHost}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <ul className="grid gap-4 text-sm leading-6 text-[#d8dfdf] sm:grid-cols-3">
              {copy.notes.map((note) => (
                <li key={note} className="border-t border-brand-line/20 pt-4">
                  {note}
                </li>
              ))}
            </ul>
            <RouteLinks locale={locale} />
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg border border-brand-line/20 bg-brand-deep/40">
              <iframe
                title={`${siteConfig.venueName} Google Map`}
                src={venueFacts.googleMapsEmbedUrl}
                className="h-80 w-full border-0 sm:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="flex flex-col gap-3 border-t border-brand-line/20 p-4 text-sm leading-6 text-[#d8dfdf] sm:flex-row sm:items-center sm:justify-between">
                <span>{venueFacts.fullAddress}</span>
                <a
                  className="font-semibold text-[#f4eee0] hover:text-brand-sand"
                  href={venueFacts.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Google Maps
                </a>
              </div>
            </div>
            <div className="panel-surface p-6 sm:p-8">
              <p className="fine-print">{directCopy.eyebrow}</p>
              {venueFacts.phone ? (
                <>
                  <a
                    className="mt-4 block break-words font-display text-4xl leading-none text-brand-sand hover:text-[#f4eee0] sm:text-5xl"
                    href={telHref}
                  >
                    {venueFacts.phone}
                  </a>
                  <p className="mt-3 text-sm leading-6 text-[#d8dfdf]">
                    {directCopy.phoneHint}
                  </p>
                </>
              ) : null}
              <div className="mt-7 border-t border-brand-line/20 pt-6">
                <p className="fine-print">{directCopy.email}</p>
                <a
                  className="mt-3 block break-all font-display text-3xl leading-tight text-[#f4eee0] hover:text-brand-sand"
                  href={`mailto:${business.email}`}
                >
                  {business.email}
                </a>
                <p className="mt-3 text-sm leading-6 text-[#d8dfdf]">
                  {directCopy.emailHint}
                </p>
                <a
                  className="brand-button-secondary mt-5"
                  href={`mailto:${business.email}`}
                >
                  {directCopy.emailAction}
                </a>
              </div>
            </div>
            <ContactForm
              email={business.email}
              locale={locale}
              redirectPath={locationPath}
              redirectUrl={contactRedirectUrl}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export function VisitPage({ locale }) {
  const copy = localeCopy(pageContent.visit, locale);

  return (
    <>
      <PageIntro eyebrow={copy.eyebrow} title={copy.title} description={copy.intro} />
      <section className="section-shell pt-0">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="fine-print">{siteConfig.locality}</p>
            <h2 className="mt-3 font-display text-4xl leading-none text-brand-sand">
              {siteConfig.venueDisplayName}
            </h2>
          </div>
          <div className="space-y-7">
            <ul className="grid gap-4 sm:grid-cols-3">
              {copy.points.map((point) => (
                <li key={point} className="border-t border-brand-line/20 pt-4 text-sm leading-6 text-[#d8dfdf]">
                  {point}
                </li>
              ))}
            </ul>
            <RouteLinks locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}

export function BlogIndexPage({ locale }) {
  const copy = localeCopy(pageContent.blog, locale);

  return (
    <>
      <PageIntro
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={getLocalizedValue(routeDefinitions.blog.description, locale)}
      />
      <section className="section-shell pt-0">
        <div className="container-shell grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {blogArticles.map((article) => (
            <a
              key={article.key}
              href={getLocalizedPath(locale, 'article', { articleKey: article.key })}
              className="rounded-lg border border-brand-line/25 bg-brand-deep/30 p-5 hover:border-brand-sand hover:bg-brand-deep/50"
            >
              <p className="fine-print">{siteConfig.locality}</p>
              <h2 className="mt-3 font-display text-3xl leading-none text-brand-sand">
                {getLocalizedValue(article.title, locale)}
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#d8dfdf]">
                {getLocalizedValue(article.description, locale)}
              </p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export function ArticlePage({ locale, article, recommendedItems = [] }) {
  const ui = guideUi[locale] || guideUi.en;
  const body = getLocalizedValue(article.body, locale);
  const bodyParagraphs = Array.isArray(body) ? body : [];
  const localizedSections = getLocalizedValue(article.sections, locale);
  const sections = Array.isArray(localizedSections) ? localizedSections : [];
  const title = getLocalizedValue(article.title, locale);

  return (
    <>
      <PageIntro
        eyebrow={siteConfig.locality}
        title={title}
        description={getLocalizedValue(article.description, locale)}
      />
      <article className="section-shell pt-0">
        <div className="container-shell max-w-4xl">
          <p className="fine-print">
            {ui.updated}{' '}
            {new Intl.DateTimeFormat(locale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }).format(new Date(article.dateModified))}
          </p>
          {sections.length ? (
            <div className="mt-6 space-y-8 border-t border-brand-line/20 pt-6">
              {sections.map((section) => (
                <section key={section.title} className="space-y-4">
                  <h2 className="font-display text-3xl leading-none text-brand-sand">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {(section.paragraphs || []).map((paragraph) => (
                      <p key={paragraph} className="body-copy">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="mt-6 space-y-5 border-t border-brand-line/20 pt-6">
              {bodyParagraphs.map((paragraph) => (
                <p key={paragraph} className="body-copy">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
          <RecommendedMenuItems
            locale={locale}
            items={recommendedItems}
          />
          <ArticleRouteLinks
            locale={locale}
            routeKeys={article.relatedRouteKeys || ['menu', 'marenda', 'location', 'reviews']}
          />
          <RelatedGuides locale={locale} article={article} />
          <div className="mt-8">
            <a href={getLocalizedPath(locale, 'blog')} className="brand-button-secondary">
              {ui.allGuides}
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

export function LegacyCanonicalNote({ path }) {
  return <link rel="canonical" href={getAbsoluteUrl(path)} />;
}
