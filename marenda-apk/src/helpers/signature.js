export function normalizeToken(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getDishSignatureToken(dish) {
  if (dish && dish.id) {
    return `id:${String(dish.id)}`;
  }

  const customName = dish?.nameHr || dish?.nameEn || dish?.name || "custom";
  return `custom:${normalizeToken(customName)}`;
}

export function createOfferSignature(items) {
  return items.map(getDishSignatureToken).sort().join("|");
}
