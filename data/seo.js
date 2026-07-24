import {
  blogArticles,
  defaultLocale,
  getAbsoluteUrl,
  getAlternateLanguages,
  getLocalizedPath,
  getLocalizedValue,
  getStaticRouteParams,
  routeDefinitions,
  siteConfig,
  supportedLocales,
} from './site-config';
import { getLocalizedItem, getLocalizedMenuText } from './translations';
import { venueFacts } from './venue-facts';

const localeMap = {
  hr: 'hr_HR',
  en: 'en_US',
  de: 'de_DE',
  sv: 'sv_SE',
  fi: 'fi_FI',
  no: 'nb_NO',
  pl: 'pl_PL',
  da: 'da_DK',
  hu: 'hu_HU',
};

function compactObject(value) {
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => {
      if (Array.isArray(item)) {
        return item.length > 0;
      }

      return item !== undefined && item !== null && item !== '';
    })
  );
}

export function getRouteTitle(routeKey, locale, article = null) {
  if (article) {
    return getLocalizedValue(article.title, locale);
  }

  return getLocalizedValue(routeDefinitions[routeKey]?.title, locale);
}

export function getRouteDescription(routeKey, locale, article = null) {
  if (article) {
    return getLocalizedValue(article.description, locale);
  }

  return getLocalizedValue(routeDefinitions[routeKey]?.description, locale);
}

export function buildMetadata({ locale = defaultLocale, routeKey = 'home', article = null } = {}) {
  const title = getRouteTitle(routeKey, locale, article);
  const description = getRouteDescription(routeKey, locale, article);
  const openGraphTitle =
    (article
      ? getLocalizedValue(article.ogTitle, locale)
      : getLocalizedValue(routeDefinitions[routeKey]?.ogTitle, locale)) || title;
  const openGraphDescription =
    (article
      ? getLocalizedValue(article.ogDescription, locale)
      : getLocalizedValue(routeDefinitions[routeKey]?.ogDescription, locale)) || description;
  const canonicalPath =
    routeKey === 'article'
      ? getLocalizedPath(locale, 'article', { articleKey: article?.key })
      : getLocalizedPath(locale, routeKey);
  const url = getAbsoluteUrl(canonicalPath);
  const imageUrl = getAbsoluteUrl(siteConfig.images[0]);
  const alternates =
    routeKey === 'article'
      ? getAlternateLanguages('article', { articleKey: article?.key })
      : getAlternateLanguages(routeKey);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: alternates,
    },
    openGraph: {
      type: article ? 'article' : 'website',
      title: openGraphTitle,
      description: openGraphDescription,
      url,
      siteName: siteConfig.brand,
      locale: localeMap[locale] || localeMap[defaultLocale],
      alternateLocale: supportedLocales
        .filter((item) => item !== locale)
        .map((item) => localeMap[item] || item),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.brand} logo`,
        },
      ],
      ...(article
        ? {
            publishedTime: article.datePublished,
            modifiedTime: article.dateModified,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphTitle,
      description: openGraphDescription,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function getSitemapEntries() {
  const entries = [];

  entries.push({
    url: getAbsoluteUrl('/'),
    lastModified: new Date('2026-07-12'),
    changeFrequency: 'weekly',
    priority: 0.9,
    alternates: {
      languages: getAlternateLanguages('home'),
    },
  });

  for (const { locale, slug } of getStaticRouteParams()) {
    const routeMatch = Object.entries(routeDefinitions).find(([, route]) => {
      const path = getLocalizedValue(route.paths, locale)
        .replace(/^\/+|\/+$/g, '')
        .split('/')
        .filter(Boolean);
      return path.join('/') === slug.join('/');
    });
    const article = blogArticles.find((item) => {
      const blogPath = getLocalizedValue(routeDefinitions.blog.paths, locale)
        .replace(/^\/+|\/+$/g, '');
      const articlePath = getLocalizedValue(item.paths, locale).replace(/^\/+|\/+$/g, '');
      return [blogPath, articlePath].filter(Boolean).join('/') === slug.join('/');
    });
    const routeKey = routeMatch?.[0] || (article ? 'article' : 'home');
    const path =
      routeKey === 'article'
        ? getLocalizedPath(locale, 'article', { articleKey: article?.key })
        : getLocalizedPath(locale, routeKey);
    const route = routeMatch?.[1] || routeDefinitions.blog;

    entries.push({
      url: getAbsoluteUrl(path),
      lastModified: new Date(article?.dateModified || '2026-07-12'),
      changeFrequency: route.changeFrequency || 'monthly',
      priority: article?.priority || route.priority || 0.5,
      alternates: {
        languages:
          routeKey === 'article'
            ? getAlternateLanguages('article', { articleKey: article?.key })
            : getAlternateLanguages(routeKey),
      },
    });
  }

  return entries;
}

export function buildWebsiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${siteConfig.siteUrl}/#website`,
    url: siteConfig.siteUrl,
    name: siteConfig.brand,
    inLanguage: supportedLocales,
    publisher: {
      '@id': `${siteConfig.siteUrl}/#organization`,
    },
  };
}

export function buildOrganizationSchema() {
  return compactObject({
    '@type': 'Organization',
    '@id': `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.brand,
    legalName: 'EPIPHANY TSC j.d.o.o. za ugostiteljstvo',
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    logo: getAbsoluteUrl(siteConfig.images[0]),
    sameAs: siteConfig.socialLinks,
  });
}

export function buildRestaurantSchema() {
  return compactObject({
    '@type': ['Restaurant', 'LocalBusiness'],
    '@id': `${siteConfig.siteUrl}/#restaurant`,
    name: siteConfig.venueName,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    image: siteConfig.images.map((image) => getAbsoluteUrl(image)),
    servesCuisine: siteConfig.cuisine,
    currenciesAccepted: 'EUR',
    areaServed: siteConfig.areaServed,
    address:
      venueFacts.streetAddress
        ? {
            '@type': 'PostalAddress',
            streetAddress: venueFacts.streetAddress,
            addressLocality: siteConfig.locality,
            addressRegion: siteConfig.region,
            addressCountry: siteConfig.countryCode,
          }
        : undefined,
    telephone: venueFacts.phone,
    geo: venueFacts.geo
      ? {
          '@type': 'GeoCoordinates',
          latitude: venueFacts.geo.latitude,
          longitude: venueFacts.geo.longitude,
        }
      : undefined,
    openingHoursSpecification: venueFacts.openingHours,
    hasMap: venueFacts.googleMapsUrl,
    acceptsReservations: venueFacts.reservationUrl ? true : undefined,
    reservationUrl: venueFacts.reservationUrl,
    parentOrganization: {
      '@id': `${siteConfig.siteUrl}/#organization`,
    },
  });
}

export function buildMenuSchema(menu, locale = defaultLocale) {
  const sections = menu.pages.flatMap((page) =>
    page.sections
      .filter((section) => section.items?.length)
      .map((section) => ({
        '@type': 'MenuSection',
        name: getLocalizedMenuText(locale, 'sections', section.id, section.title, section, 'title'),
        hasMenuItem: section.items.map((item) => {
          const localized = getLocalizedItem(item, locale);

          return compactObject({
            '@type': 'MenuItem',
            name: localized.name,
            description: localized.description,
            offers:
              typeof item.price === 'number'
                ? {
                    '@type': 'Offer',
                    price: item.price,
                    priceCurrency: menu.currency || 'EUR',
                  }
                : undefined,
          });
        }),
      }))
  );

  return {
    '@type': 'Menu',
    '@id': `${siteConfig.siteUrl}/#menu`,
    name: `${siteConfig.brand} menu`,
    inLanguage: locale,
    hasMenuSection: sections,
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleSchema(article, locale) {
  const articlePath = getLocalizedPath(locale, 'article', { articleKey: article.key });
  const url = getAbsoluteUrl(articlePath);

  return compactObject({
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: getLocalizedValue(article.title, locale),
    description: getLocalizedValue(article.description, locale),
    image: siteConfig.images.map((image) => getAbsoluteUrl(image)),
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    inLanguage: locale,
    articleSection: article.intentTags?.join(', '),
    keywords: article.intentTags?.join(', '),
    author: {
      '@id': `${siteConfig.siteUrl}/#organization`,
    },
    publisher: {
      '@id': `${siteConfig.siteUrl}/#organization`,
    },
    mainEntityOfPage: url,
    isPartOf: {
      '@id': `${siteConfig.siteUrl}/#website`,
    },
    about: article.intentTags?.map((name) => ({
      '@type': 'Thing',
      name,
    })),
  });
}

export function buildJsonLdGraph(schemas) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.filter(Boolean),
  };
}
