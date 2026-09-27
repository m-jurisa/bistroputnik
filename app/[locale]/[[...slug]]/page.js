import { notFound } from 'next/navigation';
import HomePageContent from '../../../components/HomePageContent';
import JsonLd from '../../../components/JsonLd';
import LocalizedPageFrame from '../../../components/LocalizedPageFrame';
import MarendaPageContent from '../../../components/MarendaPageContent';
import ReviewPageContent from '../../../components/ReviewPageContent';
import PricesPage from '../../../components/PricesPage';
import { dailyOffer } from '../../../data/pricing';
import {
  ArticlePage,
  BlogIndexPage,
  BreakfastPage,
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
import { getPageChrome } from '../../../data/page-chrome';
import { reviewLinks } from '../../../data/review-links';
import {
  buildArticleSchema,
  buildBreakfastOfferSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
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
    routeKey === 'breakfast' ? buildBreakfastOfferSchema(locale) : null,
    routeKey === 'article' ? buildArticleSchema(article, locale) : null,
    routeKey === 'article' ? buildFaqSchema(article, locale) : null,
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
  const chrome = getPageChrome(locale, match.routeKey, match.article?.key);

  if (match.routeKey === 'home') {
    const menu = getLocalizedMenuView(locale);

    return (
      <>
        <JsonLd data={jsonLd} />
        <HomePageContent locale={locale} menu={menu} chrome={chrome} />
      </>
    );
  }

  if (match.routeKey === 'marenda') {
    return (
      <>
        <JsonLd data={jsonLd} />
        <MarendaPageContent
          business={menuData.business}
          marenda={{
            ...marendaConfig,
            ...dailyOffer,
          }}
          chrome={chrome}
        />
      </>
    );
  }

  if (match.routeKey === 'reviews') {
    return (
      <>
        <JsonLd data={jsonLd} />
        <ReviewPageContent
          business={menuData.business}
          links={reviewLinks}
          chrome={chrome}
        />
      </>
    );
  }

  const pageByRoute = {
    prices: <PricesPage locale={locale} />,
    menu: (
      <MenuStandalonePage
        locale={locale}
        menu={getLocalizedMenuView(locale)}
        chrome={chrome}
      />
    ),
    breakfast: <BreakfastPage locale={locale} />,
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
      <LocalizedPageFrame business={menuData.business} chrome={chrome}>
        {pageByRoute[match.routeKey] || null}
      </LocalizedPageFrame>
    </>
  );
}
