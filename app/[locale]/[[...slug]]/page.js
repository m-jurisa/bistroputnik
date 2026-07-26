import { notFound } from 'next/navigation';
import HomePageContent from '../../../components/HomePageContent';
import JsonLd from '../../../components/JsonLd';
import { LanguageProvider } from '../../../components/LanguageProvider';
import LocalizedPageFrame from '../../../components/LocalizedPageFrame';
import MarendaPageContent from '../../../components/MarendaPageContent';
import ReviewPageContent from '../../../components/ReviewPageContent';
import {
  ArticlePage,
  BlogIndexPage,
  LocationPage,
  MenuStandalonePage,
  ReservationsPage,
  VisitPage,
} from '../../../components/SeoPages';
import { marendaConfig } from '../../../data/marenda';
import {
  getLocalizedMenuView,
  getLocalizedRecommendedMenuItems,
  menuData,
} from '../../../data/menu';
import { reviewLinks } from '../../../data/review-links';
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildJsonLdGraph,
  buildMenuSchema,
  buildMetadata,
  buildOrganizationSchema,
  buildRestaurantSchema,
  buildWebsiteSchema,
} from '../../../data/seo';
import {
  getAbsoluteUrl,
  getLocalizedPath,
  getLocalizedValue,
  getStaticRouteParams,
  isSupportedLocale,
  resolveLocalizedRoute,
  routeDefinitions,
  siteConfig,
} from '../../../data/site-config';
import marendaItemsData from '../../../menu/marenda-items.json';

export function generateStaticParams() {
  return getStaticRouteParams();
}

export async function generateMetadata({ params }) {
  const { locale, slug = [] } = await params;
  const match = resolveLocalizedRoute(locale, slug);

  if (!match) {
    return {};
  }

  return buildMetadata({
    locale,
    routeKey: match.routeKey,
    article: match.article,
  });
}

function buildBreadcrumbs(locale, routeKey, article = null) {
  const items = [
    {
      name: siteConfig.brand,
      url: getAbsoluteUrl(getLocalizedPath(locale, 'home')),
    },
  ];

  if (routeKey === 'article') {
    items.push({
      name: getLocalizedValue(routeDefinitions.blog.title, locale),
      url: getAbsoluteUrl(getLocalizedPath(locale, 'blog')),
    });
    items.push({
      name: getLocalizedValue(article.title, locale),
      url: getAbsoluteUrl(getLocalizedPath(locale, 'article', { articleKey: article.key })),
    });
    return items;
  }

  if (routeKey !== 'home') {
    items.push({
      name: getLocalizedValue(routeDefinitions[routeKey].title, locale),
      url: getAbsoluteUrl(getLocalizedPath(locale, routeKey)),
    });
  }

  return items;
}

function buildPageGraph(locale, routeKey, article = null) {
  const schemas = [
    buildWebsiteSchema(),
    buildOrganizationSchema(),
    buildRestaurantSchema(),
    routeKey === 'menu' ? buildMenuSchema(menuData, locale) : null,
    routeKey === 'article' ? buildArticleSchema(article, locale) : null,
    buildBreadcrumbSchema(buildBreadcrumbs(locale, routeKey, article)),
  ];

  return buildJsonLdGraph(schemas);
}

export default async function LocalizedPage({ params }) {
  const { locale, slug = [] } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const match = resolveLocalizedRoute(locale, slug);

  if (!match) {
    notFound();
  }

  const jsonLd = buildPageGraph(locale, match.routeKey, match.article);

  if (match.routeKey === 'home') {
    const menu = getLocalizedMenuView(locale);

    return (
      <>
        <JsonLd data={jsonLd} />
        <LanguageProvider initialLanguage={locale}>
          <HomePageContent locale={locale} menu={menu} />
        </LanguageProvider>
      </>
    );
  }

  if (match.routeKey === 'marenda') {
    return (
      <>
        <JsonLd data={jsonLd} />
        <LanguageProvider initialLanguage={locale}>
          <MarendaPageContent
            business={menuData.business}
            marenda={{
              ...marendaConfig,
              items: marendaItemsData.items,
            }}
          />
        </LanguageProvider>
      </>
    );
  }

  if (match.routeKey === 'reviews') {
    return (
      <>
        <JsonLd data={jsonLd} />
        <LanguageProvider initialLanguage={locale}>
          <ReviewPageContent business={menuData.business} links={reviewLinks} />
        </LanguageProvider>
      </>
    );
  }

  const pageByRoute = {
    menu: <MenuStandalonePage locale={locale} menu={getLocalizedMenuView(locale)} />,
    reservations: <ReservationsPage locale={locale} business={menuData.business} />,
    location: <LocationPage locale={locale} business={menuData.business} />,
    visit: <VisitPage locale={locale} />,
    blog: <BlogIndexPage locale={locale} />,
    article: (
      <ArticlePage
        locale={locale}
        article={match.article}
        recommendedItems={getLocalizedRecommendedMenuItems(
          locale,
          match.article?.recommendedMenuItemIds
        )}
      />
    ),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <LocalizedPageFrame business={menuData.business} locale={locale}>
        {pageByRoute[match.routeKey] || null}
      </LocalizedPageFrame>
    </>
  );
}
