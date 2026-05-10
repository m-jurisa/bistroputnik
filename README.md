# Bistro Putnik Menu

Static menu tools for Bistro Putnik. The menu is rendered from `menu/menu-data.json`.

## 1. How Menu Data Works

`menu/menu-data.json` is the source of truth for the printed menu. Pages are rendered by `printOrder`, sections by `sortOrder`, and items by `sortOrder`.

Run locally from the `menu/` directory:

```bash
cd menu
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000/index.html
```

## 2. How Prices Remain Source Of Truth

Prices live only in base item objects in `menu-data.json`.

Use:

- `priceDisplay` for exact guest-facing text such as `15€` or `€ __,__`
- `price` for numeric EUR formatting if `priceDisplay` is not present

Do not add prices to translation objects.

## 3. How Translations Work

Croatian (`hr`) is the source language. Visible menu languages are:

```text
HR EN SV FI NO PL DE DA
```

The renderer uses:

1. Croatian base fields for `hr`
2. `translations[language][field]` when present
3. Croatian fallback when a translation is missing

Missing translation fallbacks are logged in the browser console. Italian legacy translations may remain in data but are not shown in the visible selector.

## 4. How To Export Missing Translations

Open `menu/index.html` and click `Export Missing Translations`.

This downloads `missing-translations.json` with paths, IDs, source Croatian text, fields, and target languages that still need translation.

## 5. How To Import Translations

Open `menu/index.html` and click `Import Translations`.

The browser merges uploaded translations into the in-memory menu copy. Then click `Export JSON` to download the updated full `menu-data.json`.

Supported import entries may use `path` or `id` plus `field`, with translations in a `translations` or `values` object.

## 6. Final Print Checks

Before final print, verify:

- Menu translations are correct in every selected language
- Allergens are complete and legally verified
- Prices are correct in base item objects
- Placeholder prices are intentional
