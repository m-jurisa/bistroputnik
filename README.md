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

Regular menu and breakfast prices live in base objects in `menu/menu-data.json`. Daily dish prices are derived from the tiers in `menu/marenda-items.json`.

Use:

- `price` for the current numeric EUR price
- `referencePrice` and `referenceDate` for the historical reference price
- `isPromotional` and `promotionName` for promotion status

The website, printable menu and CSV exports use numeric prices. Legacy `priceDisplay` text is not a pricing source for these outputs.

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

## 7. Website Export And Contact

The website is exported statically with Next:

```bash
npm run build
```

The build validates the menu JSON and existing archive, publishes changed CSV price lists, verifies them, runs `next build`, then runs `scripts/prune-static-export.mjs` to remove unused Next payloads and any old `marenda-story.png` from the export. It also verifies that every archived CSV and the current manifest were copied into `out/cjenici/`. Social images are no longer generated during website builds. `npm run build:final` is an alias for this complete build. Use `npm run build:next` for the same automatic price preparation with an unpruned debug export.

To regenerate only the story image:

```bash
npm run generate:marenda-story
```

The public contact page shows the phone number, direct email link, and a contact form powered by Web3Forms. The form posts directly from the static page to:

```text
https://api.web3forms.com/submit
```

The Web3Forms access key is public and is stored in `components/ContactForm.js`:

```text
7bfd19b9-f0a9-429a-9d2e-8262c21ba95d
```

No SMTP variables are required for the visible contact form.

The reservations page stays fully static and posts JSON directly from the browser to n8n. Set this public build-time variable before exporting:

```bash
NEXT_PUBLIC_N8N_RESERVATION_WEBHOOK_URL=https://your-n8n.example/webhook/reservations npm run build
```

The webhook should accept `POST` requests with `Content-Type: application/json`, allow CORS for `https://bistroputnik.com` and local development origins, and return JSON such as `{ "success": true }` for accepted requests. If the variable is missing, the static form shows a phone/email fallback instead of sending.

After `npm run build`, the exported `out/` folder can be uploaded to static hosting. If Hostinger Node hosting is used, `npm start` serves the exported files through `server/static-server.mjs`, but form delivery does not depend on the Node server.

## 8. Daily Marenda and Price Publications

The marenda page stays online and shows the dated offer from `menu/marenda-items.json`. Update `offerDate` (YYYY-MM-DD, Europe/Zagreb), then edit the actual dishes, translations and allergens. Each dish refers to one of six tiers using `tierId`: `marenda-1` (€10) through `marenda-6` (€15). Prices come from the tiers; do not put duplicate price strings on daily dishes. Each active tier has at most one dish. Use an empty `items` array when there is no daily offer.

Before daily service:

```bash
npm run build
```

Upload the complete `out/` directory, including `cjenici/`. The build prepares local release files; it does not deploy the site. Confirm both download links work on the live site after upload. Publish changes before service and by 08:00 Zagreb time when a new price takes effect that day. The webpage shows the current Zagreb date and refreshes it across midnight; the printed offer, CSV dates and archive labels use the manually entered `offerDate`. With JavaScript enabled, stale or empty offers show an ask-staff message. A static site cannot generate tomorrow's dishes without a new build and deployment.

The full Croatian CSV contains the menu, breakfast and the actual offered marenda dishes, with dish names and offer dates. Daily service IDs use the `marenda:` prefix to avoid collisions with regular menu dishes. The daily CSV contains only that date's named dishes. Both are linked from the marenda page; the full list is also linked from menus. The localized price-information page links every archived publication. CSV opens in Excel; XLS/XLSX is not the statutory export format.

For a regular menu or tier price change, edit numeric `price`, then run `npm run build` and upload `out/`. Separate publishing commands remain available for CSV-only preparation. `referencePrice` and `referenceDate` describe the historical regular price and must not track current-price edits. The initial 10 September 2026 reference data was confirmed by the owner; newly introduced services require their true first-offer price and date. Every priced item requires `isPromotional` and a matching `promotionName` (empty when false). No initial prices are promotional.

Published CSV files and `public/cjenici/manifest.json` must be saved in version control and carried into every deployment. The generator retains them indefinitely; never delete the archive during upload. The manifest records file hashes, publication sequence and reference values. A build automatically publishes changed CSV content or offer dates and fails before writing new publications if an archived file is missing/changed. Unchanged rebuilds create no duplicate CSVs. Historical data corrections require a documented, deliberate correction of the manifest's reference ledger before republishing; do not silently replace an old CSV.

The six tiers determine current prices independently of dish ordering. Historical reference prices live in the persistent `priceHistory` object, keyed by stable dish ID, and survive removal from the offer and later tier changes. Do not change IDs when reusing a dish. Missing history is recovered from saved publications; new dishes use explicit reference fields from the dish or assigned tier, or the initial current tier price and `offerDate` when no reference was supplied. The build maintains internal `lastChangedAt` and `contentHash` fields; unchanged offer content retains them. Keep these fields and `priceHistory` when editing the JSON. The separate Android marenda PDF app remains unchanged.

Legal sources, effective 1 October 2026:

- [NN 101/2026-1212: displaying reference prices](https://narodne-novine.nn.hr/clanci/sluzbeni/2026_09_101_1212.html)
- [NN 101/2026-1213: CSV/XML price publication](https://narodne-novine.nn.hr/clanci/sluzbeni/2026_09_101_1213.html)
- [Ministry of Economy implementation guidance](https://mingo.gov.hr/UserDocsImages/slike/MINGO_Poja%C5%A1njenja_dodatna%20cijena_objava%20cjenika.pdf)
