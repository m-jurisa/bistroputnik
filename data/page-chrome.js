import { languages, translations } from './translations';
import {
  getCurrentAnnouncement,
  isAnnouncementVisibleOnDate,
} from './announcements';
import { getLocalizedPath, siteConfig } from './site-config';
import { venueFacts } from './venue-facts';
import { getPriceCopy } from '../menu/price-copy.mjs';

const navLinks = [
  { key: 'about', routeKey: 'home', hash: '#about' },
  { key: 'menu', routeKey: 'menu' },
  { key: 'guides', routeKey: 'blog' },
  { key: 'marenda', routeKey: 'marenda' },
  { key: 'reservations', routeKey: 'reservations' },
  { key: 'contact', routeKey: 'location' },
];

function getTranslations(locale) {
  return translations[locale] || translations.en;
}

function getRouteOptions(routeKey, articleKey) {
  return routeKey === 'article' && articleKey ? { articleKey } : {};
}

function buildLanguageLinks(locale, routeKey, articleKey) {
  return languages.map((language) => ({
    code: language.code,
    label: language.label,
    href: getLocalizedPath(language.code, routeKey, getRouteOptions(routeKey, articleKey)),
    active: language.code === locale,
  }));
}

function buildHeader(locale, routeKey) {
  const t = getTranslations(locale);
  const isHome = routeKey === 'home';
  const activeAnnouncement = getCurrentAnnouncement();
  const announcementCopy = activeAnnouncement
    ? t.announcement?.[activeAnnouncement.copyKey] ||
      translations.en.announcement?.[activeAnnouncement.copyKey]
    : null;

  return {
    homeHref: isHome ? '#top' : getLocalizedPath(locale, 'home'),
    logoHomeLabel: t.ui.logoHome,
    navigationLabel: t.ui.navigation,
    announcement:
      activeAnnouncement && announcementCopy
        ? {
            ...announcementCopy,
            endDate: activeAnnouncement.endDate,
            initialVisible: isAnnouncementVisibleOnDate(activeAnnouncement),
            startDate: activeAnnouncement.startDate,
            timeZone: activeAnnouncement.timeZone,
          }
        : null,
    links: navLinks.map((link) => ({
      key: link.key,
      href:
        link.hash && isHome
          ? link.hash
          : `${getLocalizedPath(locale, link.routeKey)}${link.hash || ''}`,
      label: t.nav[link.key],
      active:
        link.routeKey === routeKey ||
        (routeKey === 'article' && link.routeKey === 'blog'),
    })),
  };
}

export function getPageChrome(locale, routeKey = 'home', articleKey = null) {
  const t = getTranslations(locale);

  return {
    locale,
    languageLinks: buildLanguageLinks(locale, routeKey, articleKey),
    languageSelectorLabel: t.ui.languageSelector,
    header: buildHeader(locale, routeKey),
    footer: {
      pricesHref: getLocalizedPath(locale, 'prices'),
      pricesLabel: getPriceCopy(locale).title,
      labels: t.footer,
      googleMapsUrl: venueFacts.googleMapsUrl,
      fullAddress: venueFacts.fullAddress,
      phone: venueFacts.phone,
      siteUrl: siteConfig.siteUrl,
      displayHost: siteConfig.displayHost,
    },
    hero: {
      labels: t.hero,
      menuHref: getLocalizedPath(locale, 'menu'),
      marendaHref: getLocalizedPath(locale, 'marenda'),
      breakfastHref: getLocalizedPath(locale, 'breakfast'),
    },
    marenda: t.marenda,
    review: t.review,
    menuPagesLabel: t.ui.menuPages,
  };
}
