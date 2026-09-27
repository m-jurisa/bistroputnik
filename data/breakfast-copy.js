import menu from '../menu/menu-data.json';
import { formatEuro, formatReferenceDate } from '../menu/pricing.mjs';
import { getPriceCopy, priceCopy } from '../menu/price-copy.mjs';

// A token keeps promotional prose, metadata and FAQs tied to the same service price.
export function resolveBreakfastCopy(value, locale = 'en') {
  if (typeof value === 'string') {
    const item = menu.breakfast;
    const text = `${formatEuro(item.price, locale)} (${getPriceCopy(locale).reference} ${formatReferenceDate(item.referenceDate, locale)}: ${formatEuro(item.referencePrice, locale)})`;
    return value.replaceAll('{breakfastPrice}', text);
  }
  if (Array.isArray(value)) return value.map(item => resolveBreakfastCopy(item, locale));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) =>
    [key, resolveBreakfastCopy(item, priceCopy[key] ? key : locale)]));
  return value;
}
