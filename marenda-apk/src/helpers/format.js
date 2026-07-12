export function parsePrice(value) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  let normalized = String(value || "")
    .replace(/[^\d,.-]/g, "")
    .trim();

  if (normalized.includes(",") && normalized.includes(".")) {
    const lastComma = normalized.lastIndexOf(",");
    const lastDot = normalized.lastIndexOf(".");
    normalized =
      lastComma > lastDot
        ? normalized.replace(/\./g, "").replace(",", ".")
        : normalized.replace(/,/g, "");
  } else {
    normalized = normalized.replace(",", ".");
  }

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function formatPriceDisplay(value) {
  const price = typeof value === "number" ? value : parsePrice(value);
  return `${price.toFixed(2).replace(".", ",")} EUR`;
}

export function parseAllergens(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean).map((item) => String(item).trim()).filter(Boolean);
  }

  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function allergensToInput(value) {
  if (!value) {
    return "";
  }

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return String(value);
}

export function normalizePriceOptions(priceOptions, fallbackPrice, fallbackPriceDisplay) {
  const options = [];

  function addOption(value, displayValue) {
    const price = parsePrice(value);
    if (price <= 0) {
      return;
    }

    options.push({
      price,
      priceDisplay: displayValue || formatPriceDisplay(price)
    });
  }

  if (Array.isArray(priceOptions)) {
    priceOptions.forEach((option) => {
      if (typeof option === "number" || typeof option === "string") {
        addOption(option);
        return;
      }

      addOption(option?.price ?? option?.priceDisplay, option?.priceDisplay);
    });
  } else if (typeof priceOptions === "string") {
    priceOptions
      .split(/[;\n]+|,\s+/)
      .map((item) => item.trim())
      .filter(Boolean)
      .forEach((item) => addOption(item));
  }

  if (fallbackPrice || fallbackPriceDisplay) {
    addOption(fallbackPrice || fallbackPriceDisplay, fallbackPriceDisplay);
  }

  const deduped = [];
  const seen = new Set();
  options.forEach((option) => {
    const key = option.price.toFixed(2);
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(option);
    }
  });

  return deduped;
}

export function priceOptionsToInput(priceOptions) {
  return normalizePriceOptions(priceOptions)
    .map((option) => option.priceDisplay)
    .join("; ");
}
