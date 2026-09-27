export const timeZone = 'Europe/Zagreb';

export function restaurantDate(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
}

export function validDate(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
}

export function formatEuro(value, locale = 'hr') {
  return new Intl.NumberFormat(locale === 'no' ? 'nb' : locale, {
    style: 'currency', currency: 'EUR', minimumFractionDigits: 2,
  }).format(value);
}

export function formatReferenceDate(value, locale = 'hr') {
  return new Intl.DateTimeFormat(locale === 'no' ? 'nb' : locale, {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${value}T12:00:00Z`));
}

export function validatePrice(item) {
  for (const field of ['price', 'referencePrice']) {
    if (!Number.isFinite(item[field]) || item[field] <= 0 || Math.abs(item[field] * 100 - Math.round(item[field] * 100)) > 0.000001) {
      throw new Error(`${item.id}: ${field} must be a positive EUR amount with at most two decimals.`);
    }
  }
  if (!validDate(item.referenceDate)) throw new Error(`${item.id}: referenceDate must be YYYY-MM-DD.`);
  if (typeof item.isPromotional !== 'boolean') throw new Error(`${item.id}: isPromotional must be true or false.`);
  if (item.isPromotional !== Boolean(item.promotionName?.trim())) throw new Error(`${item.id}: promotionName must match isPromotional.`);
  return item;
}

export function resolveMarenda(offer) {
  if (!validDate(offer.offerDate)) throw new Error('Marenda offerDate must be YYYY-MM-DD.');
  if (!Array.isArray(offer.tiers) || offer.tiers.length !== 6) throw new Error('Six marenda tiers are required.');
  const tiers = new Map();
  offer.tiers.forEach((tier) => {
    validatePrice({ ...tier, referencePrice: tier.referencePrice ?? tier.price, referenceDate: tier.referenceDate ?? offer.offerDate });
    if (tiers.has(tier.id) || !tier.name?.trim()) throw new Error('Invalid or duplicate marenda tier.');
    tiers.set(tier.id, tier);
  });
  if (!Array.isArray(offer.items)) throw new Error('Marenda items must be an array.');
  const ids = new Set();
  offer.items.forEach(item => {
    if (typeof item.id !== 'string' || !item.id.trim() || ids.has(item.id)) throw new Error('Invalid or duplicate daily dish id.');
    ids.add(item.id);
  });
  const active = offer.items.filter((item) => item.isAvailable !== false);
  if (active.length > 6) throw new Error('At most six daily dishes can be published.');
  const used = new Set();
  return active.map((item) => {
    const tier = tiers.get(item.tierId);
    if (!tier || used.has(item.tierId) || !item.name?.trim() || !item.id) throw new Error(`Invalid or duplicate daily tier: ${item.id}`);
    used.add(item.tierId);
    if (item.price != null && item.price !== tier.price) throw new Error(`${item.id}: price conflicts with ${tier.name}. Remove the dish price; it comes from the tier.`);
    const history = offer.priceHistory?.[item.id];
    const resolved = { ...item, price: tier.price, priceDisplay: undefined,
      referencePrice: history?.referencePrice ?? item.referencePrice ?? tier.referencePrice ?? tier.price,
      referenceDate: history?.referenceDate ?? item.referenceDate ?? tier.referenceDate ?? offer.offerDate,
      isPromotional: tier.isPromotional, promotionName: tier.promotionName || '', tierName: tier.name };
    return validatePrice(resolved);
  });
}
