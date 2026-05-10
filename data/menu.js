import { readFileSync } from 'fs';
import path from 'path';

const menuDataPath = path.join(process.cwd(), 'menu', 'menu-data.json');
const visiblePageIds = new Set([
  'food',
  'special-order',
  'drinks',
  'wines-spirits-cocktails',
]);

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

  return '€ —';
}

function normalizeItem(item) {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
    priceDisplay: normalizePrice(item),
    allergens: item.allergens || [],
    translations: item.translations || null,
    sortOrder: item.sortOrder ?? 0,
  };
}

function normalizeSection(section) {
  return {
    id: section.id,
    title: section.title,
    note: section.note,
    layout: section.layout || 'default',
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
    translations: page.translations || null,
    printOrder: page.printOrder ?? 0,
    sections: sortByOrder(page.sections).map(normalizeSection),
  };
}

function readMenuData() {
  const data = JSON.parse(readFileSync(menuDataPath, 'utf8'));
  const pages = sortByOrder(data.pages, 'printOrder')
    .filter((page) => visiblePageIds.has(page.id) && page.sections?.length)
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
