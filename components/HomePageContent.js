import ContactForm from './ContactForm';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import MenuBook from './MenuBook';
import SectionHeading from './SectionHeading';
import { translations } from '../data/translations';
import {
  blogArticles,
  defaultLocale,
  getLocalizedPath,
  getLocalizedValue,
  pageContent,
  routeDefinitions,
  siteConfig,
} from '../data/site-config';
import { venueFacts } from '../data/venue-facts';

const featuredGuideKeys = [
  'where-to-eat-baska-voda',
  'lunch-in-baska-voda',
  'lunch-near-nikolina-beach',
  'dalmatian-pasticada',
  'what-is-marenda',
  'croatian-restaurant-menu-guide',
];

const homeContactLabels = {
  hr: { phone: 'Telefon', email: 'E-pošta', location: 'Lokacija' },
  en: { phone: 'Phone', email: 'Email', location: 'Location' },
  de: { phone: 'Telefon', email: 'E-Mail', location: 'Lage' },
  sv: { phone: 'Telefon', email: 'E-post', location: 'Plats' },
  fi: { phone: 'Puhelin', email: 'Sähköposti', location: 'Sijainti' },
  no: { phone: 'Telefon', email: 'E-post', location: 'Beliggenhet' },
  pl: { phone: 'Telefon', email: 'E-mail', location: 'Lokalizacja' },
  da: { phone: 'Telefon', email: 'E-mail', location: 'Beliggenhed' },
  hu: { phone: 'Telefon', email: 'E-mail', location: 'Helyszín' },
};

export default function HomePageContent({ locale = defaultLocale, menu }) {
  const t = translations[locale] || translations.en;
  const story = menu.story;
  const contactLabels = homeContactLabels[locale] || homeContactLabels.en;
  const businessEmail = menu.business.email;
  const phone = menu.business.phone;
  const telHref = phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : '';
  const homePath = getLocalizedPath(locale, 'home');
  const contactRedirectUrl = `${siteConfig.siteUrl}${homePath}?contact=sent#contact-form`;
  const guideIntro = pageContent.blog[locale] || pageContent.blog.en;
  const featuredGuides = featuredGuideKeys
    .map((key) => blogArticles.find((article) => article.key === key))
    .filter(Boolean);

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
              locale={locale}
              pages={menu.pages}
              notices={menu.notices}
            />
          </div>
        </section>

        <section id="guides" className="section-shell scroll-mt-28 pt-0">
          <div className="container-shell space-y-8">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <SectionHeading
                eyebrow={guideIntro.eyebrow}
                title={guideIntro.title}
                description={getLocalizedValue(routeDefinitions.blog.description, locale)}
              />
              <div className="lg:text-right">
                <a
                  href={getLocalizedPath(locale, 'blog')}
                  className="brand-button-secondary"
                >
                  {getLocalizedValue(routeDefinitions.blog.title, locale)}
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {featuredGuides.map((article) => (
                <a
                  key={article.key}
                  href={getLocalizedPath(locale, 'article', { articleKey: article.key })}
                  className="rounded-lg border border-brand-line/25 bg-brand-deep/30 p-5 hover:border-brand-sand hover:bg-brand-deep/50"
                >
                  <p className="fine-print">{siteConfig.locality}</p>
                  <h3 className="mt-3 font-display text-3xl leading-none text-brand-sand">
                    {getLocalizedValue(article.title, locale)}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#d8dfdf]">
                    {getLocalizedValue(article.description, locale)}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="homepage-contact" className="section-shell scroll-mt-28 pt-0">
          <div className="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-6">
              <SectionHeading
                eyebrow={siteConfig.locality}
                title={getLocalizedValue(routeDefinitions.location.title, locale)}
                description={getLocalizedValue(routeDefinitions.location.description, locale)}
              />
              <div className="panel-surface p-6 sm:p-8">
                <dl className="grid gap-5 text-sm leading-6 text-[#d8dfdf]">
                  {phone ? (
                    <div>
                      <dt className="text-brand-sand/80">{contactLabels.phone}</dt>
                      <dd className="mt-1">
                        <a
                          className="font-display text-4xl leading-none text-brand-sand hover:text-[#f4eee0]"
                          href={telHref}
                        >
                          {phone}
                        </a>
                      </dd>
                    </div>
                  ) : null}
                  <div>
                    <dt className="text-brand-sand/80">{contactLabels.email}</dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${businessEmail}`}
                        className="break-all font-semibold text-[#f4eee0] hover:text-brand-sand"
                      >
                        {businessEmail}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-brand-sand/80">{contactLabels.location}</dt>
                    <dd className="mt-1 font-semibold text-[#f4eee0]">
                      {menu.business.venueAddress || menu.business.venue}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="overflow-hidden rounded-lg border border-brand-line/20 bg-brand-deep/40">
                <iframe
                  title={`${siteConfig.venueName} Google Map`}
                  src={venueFacts.googleMapsEmbedUrl}
                  className="h-72 w-full border-0 sm:h-80"
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
                    Google Maps
                  </a>
                </div>
              </div>
            </div>

            <ContactForm
              email={businessEmail}
              locale={locale}
              redirectPath={homePath}
              redirectUrl={contactRedirectUrl}
            />
          </div>
        </section>
      </main>

      <Footer business={menu.business} />
    </div>
  );
}
