import { readFileSync } from 'fs';
import path from 'path';

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
    business: data.business,
    story: data.story,
    notices: data.notices || [],
    allergens: data.allergens || [],
    pages,
  };
}

export const menuData = readMenuData();
export const menuPages = menuData.pages;
