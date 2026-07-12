import { readFileSync } from 'fs';
import path from 'path';
import { siteConfig } from './site-config';
import {
  getLocalizedItem,
  getLocalizedMenuText,
  getLocalizedNotice,
  getLocalizedStory,
} from './translations';

const menuDataPath = path.join(process.cwd(), 'menu', 'menu-data.json');
function sortByOrder(items, key = 'sortOrder') {
  return [...(items || [])].sort((a, b) => (a?.[key] ?? 0) - (b?.[key] ?? 0));
}

function normalizePrice(item) {
  if (item.priceDisplay) {
    return item.priceDisplay;
  }

  if (item.price !== null && typeof item.price !== 'undefined') {
    return `€ ${item.price}`;
  }

  if (
    item.priceMin !== null &&
    typeof item.priceMin !== 'undefined' &&
    item.priceMax !== null &&
    typeof item.priceMax !== 'undefined'
  ) {
    return `€ ${item.priceMin}-${item.priceMax}`;
  }

  return '€ —';
}

function normalizeItem(item) {
  const normalized = {
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
    priceDisplay: normalizePrice(item),
    allergens: item.allergens || [],
    dietary: item.dietary || [],
    isAvailable: item.isAvailable ?? true,
    isSpecialOrder: item.isSpecialOrder ?? false,
    notes: item.notes || [],
    translations: item.translations || null,
    sortOrder: item.sortOrder ?? 0,
  };

  if (item.priceMin !== null && typeof item.priceMin !== 'undefined') {
    normalized.priceMin = item.priceMin;
  }

  if (item.priceMax !== null && typeof item.priceMax !== 'undefined') {
    normalized.priceMax = item.priceMax;
  }

  if (item.currency) {
    normalized.currency = item.currency;
  }

  return normalized;
}

function normalizeSection(section) {
  return {
    id: section.id,
    title: section.title,
    note: section.note,
    layout: section.layout || 'default',
    type: section.type || null,
    signature: section.signature || false,
    paragraphs: section.paragraphs || [],
    allergens: section.allergens || [],
    translations: section.translations || null,
    sortOrder: section.sortOrder ?? 0,
    items: sortByOrder(section.items).map(normalizeItem),
  };
}

function normalizePage(page) {
  return {
    id: page.id,
    title: page.title,
    intro: page.intro || null,
    note: page.note || null,
    closing: page.closing || null,
    type: page.type,
    showHeader: page.showHeader ?? true,
    showFooter: page.showFooter ?? true,
    translations: page.translations || null,
    printOrder: page.printOrder ?? 0,
    sections: sortByOrder(page.sections).map(normalizeSection),
  };
}

function shouldShowPage(page) {
  return page?.type !== 'information' && page.sections?.length;
}

function readMenuData() {
  const data = JSON.parse(readFileSync(menuDataPath, 'utf8'));
  const pages = sortByOrder(data.pages, 'printOrder')
    .filter(shouldShowPage)
    .map(normalizePage);

  return {
    schemaVersion: data.schemaVersion,
    language: data.language,
    currency: data.currency,
    brand: data.brand,
    business: {
      ...data.business,
      website: siteConfig.displayHost,
    },
    story: data.story,
    notices: data.notices || [],
    allergens: data.allergens || [],
    pages,
  };
}

export const menuData = readMenuData();
export const menuPages = menuData.pages;

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

function localizeMenuItem(item, locale) {
  const localized = getLocalizedItem(item, locale);

  return compactObject({
    id: item.id,
    name: localized.name,
    description: localized.description,
    price: item.price,
    priceDisplay: item.priceDisplay,
    priceMin: item.priceMin,
    priceMax: item.priceMax,
    allergens: item.allergens || [],
  });
}

function localizeMenuSection(section, locale) {
  return compactObject({
    id: section.id,
    title: getLocalizedMenuText(
      locale,
      'sections',
      section.id,
      section.title,
      section,
      'title'
    ),
    note: getLocalizedMenuText(
      locale,
      'sectionNotes',
      section.id,
      section.note,
      section,
      'note'
    ),
    layout: section.layout || 'default',
    type: section.type || null,
    signature: section.signature || false,
    paragraphs: getLocalizedMenuText(
      locale,
      'sectionParagraphs',
      section.id,
      section.paragraphs || [],
      section,
      'paragraphs'
    ),
    allergens: section.allergens || [],
    items: (section.items || []).map((item) =>
      typeof item === 'string' ? item : localizeMenuItem(item, locale)
    ),
  });
}

function localizeMenuPage(page, locale) {
  return compactObject({
    id: page.id,
    title: getLocalizedMenuText(locale, 'pages', page.id, page.title, page, 'title'),
    intro: getLocalizedMenuText(locale, 'pageIntro', page.id, page.intro, page, 'intro'),
    note: getLocalizedMenuText(locale, 'pageNote', page.id, page.note, page, 'note'),
    closing: getLocalizedMenuText(
      locale,
      'pageClosing',
      page.id,
      page.closing,
      page,
      'closing'
    ),
    type: page.type,
    sections: (page.sections || []).map((section) => localizeMenuSection(section, locale)),
  });
}

export function getLocalizedMenuView(locale, menu = menuData) {
  return {
    currency: menu.currency,
    business: menu.business,
    story: getLocalizedStory(menu.story, locale),
    notices: (menu.notices || []).map((notice) => ({
      id: notice.id,
      text: getLocalizedNotice(notice, locale),
    })),
    pages: (menu.pages || []).map((page) => localizeMenuPage(page, locale)),
  };
}

export function getLocalizedRecommendedMenuItems(locale, itemIds = [], menu = menuData) {
  if (!itemIds?.length) {
    return [];
  }

  const itemById = new Map();

  for (const page of menu.pages || []) {
    for (const section of page.sections || []) {
      for (const item of section.items || []) {
        if (!item?.id) {
          continue;
        }

        const localized = localizeMenuItem(item, locale);
        itemById.set(item.id, {
          ...localized,
          sectionTitle: getLocalizedMenuText(
            locale,
            'sections',
            section.id,
            section.title,
            section,
            'title'
          ),
        });
      }
    }
  }

  return itemIds.map((id) => itemById.get(id)).filter(Boolean);
}
