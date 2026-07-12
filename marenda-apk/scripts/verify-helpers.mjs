import assert from "node:assert/strict";
import { createOfferSignature, normalizeToken } from "../src/helpers/signature.js";
import { createPdfFileName, getLocalDateTime } from "../src/helpers/datetime.js";
import { normalizePriceOptions, parsePrice } from "../src/helpers/format.js";
import { buildOfferPdfHtml } from "../src/pdf/buildOfferPdf.js";

const dishA = { id: "dish-a", nameHr: "A" };
const dishB = { id: "dish-b", nameHr: "B" };
const dishC = { id: "dish-c", nameHr: "C" };

assert.equal(
  createOfferSignature([dishA, dishB, dishC]),
  createOfferSignature([dishC, dishA, dishB]),
  "signature must ignore selection order"
);

assert.equal(normalizeToken("Rižot od liganja"), "rizot-od-liganja");
assert.equal(parsePrice("12,50 €"), 12.5);
assert.deepEqual(normalizePriceOptions("10 €; 12,50 €", 10, "10 €"), [
  { price: 10, priceDisplay: "10,00 EUR" },
  { price: 12.5, priceDisplay: "12,50 EUR" }
]);

const local = getLocalDateTime(new Date(2026, 5, 16, 9, 7, 3));
assert.equal(local.localDate, "2026-06-16");
assert.equal(local.localTime, "09:07");
assert.equal(createPdfFileName("hr", local), "marenda-hr-2026-06-16-09-07.pdf");

const items = [
  {
    nameHr: "Grah s kobasicom",
    nameEn: "Bean stew with sausage",
    descriptionHr: "Kremasti grah i domaća kobasica.",
    descriptionEn: "Creamy beans and local sausage.",
    priceDisplay: "8,50 EUR",
    allergens: ["celery"]
  },
  {
    nameHr: "Istarska maneštra",
    nameEn: "Istrian vegetable stew",
    descriptionHr: "Gusto varivo od povrća.",
    descriptionEn: "Hearty vegetable stew.",
    priceDisplay: "7,90 EUR",
    allergens: []
  },
  {
    nameHr: "Rižot od liganja",
    nameEn: "Squid risotto",
    descriptionHr: "Kremasti rižot s lignjama.",
    descriptionEn: "Creamy squid risotto.",
    priceDisplay: "11,20 EUR",
    allergens: ["molluscs"]
  }
];

const hrHtml = buildOfferPdfHtml({ items, language: "hr" });
const enHtml = buildOfferPdfHtml({ items, language: "en" });

assert.match(hrHtml, /<h1>Marenda<\/h1>/);
assert.match(enHtml, /<h1>Daily Lunch<\/h1>/);
assert.match(hrHtml, /Bistro Putnik/);
assert.doesNotMatch(hrHtml, /www\.|https?:\/\//);
assert.doesNotMatch(enHtml, /www\.|https?:\/\//);

console.log("Helper verification passed.");
