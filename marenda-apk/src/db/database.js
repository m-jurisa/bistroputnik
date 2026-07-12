import * as SQLite from "expo-sqlite";
import { seedDishes } from "../data/seedDishes";
import { normalizePriceOptions, parseAllergens } from "../helpers/format";

let databasePromise;

function nowStamp() {
  return new Date().toISOString();
}

export function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

async function getDb() {
  if (!databasePromise) {
    databasePromise = SQLite.openDatabaseAsync("bistro-putnik-marenda.db");
  }

  return databasePromise;
}

function serializeAllergens(allergens) {
  return JSON.stringify(parseAllergens(allergens));
}

function serializePriceOptions(dish) {
  return JSON.stringify(normalizePriceOptions(dish.priceOptions, dish.price, dish.priceDisplay));
}

function rowToDish(row) {
  let allergens = [];
  try {
    allergens = JSON.parse(row.allergens || "[]");
  } catch {
    allergens = [];
  }

  let priceOptions = [];
  try {
    priceOptions = JSON.parse(row.priceOptions || "[]");
  } catch {
    priceOptions = [];
  }

  const normalizedPriceOptions = normalizePriceOptions(
    priceOptions,
    Number(row.price || 0),
    row.priceDisplay
  );

  return {
    id: row.id,
    nameHr: row.nameHr,
    nameEn: row.nameEn,
    descriptionHr: row.descriptionHr,
    descriptionEn: row.descriptionEn,
    price: Number(row.price || 0),
    priceDisplay: row.priceDisplay,
    priceOptions: normalizedPriceOptions,
    allergens,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt
  };
}

function rowToOffer(row) {
  let items = [];
  try {
    items = JSON.parse(row.items || "[]");
  } catch {
    items = [];
  }

  return {
    id: row.id,
    items,
    language: row.language,
    createdAt: row.createdAt,
    localDate: row.localDate,
    localTime: row.localTime,
    signature: row.signature,
    pdfTitle: row.pdfTitle,
    pdfFileUri: row.pdfFileUri,
    source: row.source || "pdf"
  };
}

export async function initDatabase() {
  const db = await getDb();

  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS dishes (
      id TEXT PRIMARY KEY NOT NULL,
      nameHr TEXT NOT NULL,
      nameEn TEXT NOT NULL,
      descriptionHr TEXT,
      descriptionEn TEXT,
      price REAL NOT NULL DEFAULT 0,
      priceDisplay TEXT NOT NULL,
      priceOptions TEXT,
      allergens TEXT,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS generated_offers (
      id TEXT PRIMARY KEY NOT NULL,
      items TEXT NOT NULL,
      language TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      localDate TEXT NOT NULL,
      localTime TEXT NOT NULL,
      signature TEXT NOT NULL,
      pdfTitle TEXT NOT NULL,
      pdfFileUri TEXT,
      source TEXT NOT NULL DEFAULT 'pdf'
    );
    CREATE INDEX IF NOT EXISTS idx_generated_offers_signature
      ON generated_offers(signature);
  `);

  const dishColumns = await db.getAllAsync("PRAGMA table_info(dishes)");
  const hasPriceOptions = dishColumns.some((column) => column.name === "priceOptions");
  if (!hasPriceOptions) {
    await db.runAsync("ALTER TABLE dishes ADD COLUMN priceOptions TEXT");
  }

  const dishesWithoutOptions = await db.getAllAsync(
    "SELECT id, price, priceDisplay FROM dishes WHERE priceOptions IS NULL OR priceOptions = ''"
  );
  for (const dish of dishesWithoutOptions) {
    await db.runAsync(
      "UPDATE dishes SET priceOptions = ? WHERE id = ?",
      JSON.stringify(normalizePriceOptions([], dish.price, dish.priceDisplay)),
      dish.id
    );
  }

  const offerColumns = await db.getAllAsync("PRAGMA table_info(generated_offers)");
  const hasSource = offerColumns.some((column) => column.name === "source");
  if (!hasSource) {
    await db.runAsync("ALTER TABLE generated_offers ADD COLUMN source TEXT NOT NULL DEFAULT 'pdf'");
  }

  const existing = await db.getFirstAsync("SELECT COUNT(*) AS count FROM dishes");
  if (!existing || existing.count === 0) {
    for (const dish of seedDishes) {
      await saveDish(dish);
    }
  } else {
    for (const dish of seedDishes) {
      const row = await db.getFirstAsync("SELECT id FROM dishes WHERE id = ?", dish.id);
      if (!row) {
        await saveDish(dish);
      }
    }
  }
}

export async function getDishes() {
  const db = await getDb();
  const rows = await db.getAllAsync("SELECT * FROM dishes ORDER BY nameHr COLLATE NOCASE ASC");
  return rows.map(rowToDish);
}

export async function saveDish(dish) {
  const db = await getDb();
  const timestamp = nowStamp();
  const id = dish.id || createId("dish");
  const allergens = serializeAllergens(dish.allergens);
  const priceOptions = serializePriceOptions(dish);

  await db.runAsync(
    `
      INSERT INTO dishes (
        id, nameHr, nameEn, descriptionHr, descriptionEn,
        price, priceDisplay, priceOptions, allergens, createdAt, updatedAt
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        nameHr = excluded.nameHr,
        nameEn = excluded.nameEn,
        descriptionHr = excluded.descriptionHr,
        descriptionEn = excluded.descriptionEn,
        price = excluded.price,
        priceDisplay = excluded.priceDisplay,
        priceOptions = excluded.priceOptions,
        allergens = excluded.allergens,
        updatedAt = excluded.updatedAt
    `,
    id,
    dish.nameHr,
    dish.nameEn,
    dish.descriptionHr || "",
    dish.descriptionEn || "",
    Number(dish.price || 0),
    dish.priceDisplay,
    priceOptions,
    allergens,
    dish.createdAt || timestamp,
    timestamp
  );

  return {
    ...dish,
    id,
    priceOptions: normalizePriceOptions(dish.priceOptions, dish.price, dish.priceDisplay),
    allergens: parseAllergens(dish.allergens)
  };
}

export async function deleteDish(id) {
  const db = await getDb();
  await db.runAsync("DELETE FROM dishes WHERE id = ?", id);
}

export async function addGeneratedOffer(offer) {
  const db = await getDb();

  await db.runAsync(
    `
      INSERT INTO generated_offers (
        id, items, language, createdAt, localDate, localTime,
        signature, pdfTitle, pdfFileUri, source
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    offer.id || createId("offer"),
    JSON.stringify(offer.items),
    offer.language,
    offer.createdAt,
    offer.localDate,
    offer.localTime,
    offer.signature,
    offer.pdfTitle,
    offer.pdfFileUri || "",
    offer.source || "pdf"
  );
}

export async function updateGeneratedOffer(offer) {
  const db = await getDb();

  await db.runAsync(
    `
      UPDATE generated_offers SET
        items = ?,
        language = ?,
        createdAt = ?,
        localDate = ?,
        localTime = ?,
        signature = ?,
        pdfTitle = ?,
        pdfFileUri = ?,
        source = ?
      WHERE id = ?
    `,
    JSON.stringify(offer.items),
    offer.language,
    offer.createdAt,
    offer.localDate,
    offer.localTime,
    offer.signature,
    offer.pdfTitle,
    offer.pdfFileUri || "",
    offer.source || "pdf",
    offer.id
  );
}

export async function deleteGeneratedOffer(id) {
  const db = await getDb();
  await db.runAsync("DELETE FROM generated_offers WHERE id = ?", id);
}

export async function getGeneratedOffers() {
  const db = await getDb();
  const rows = await db.getAllAsync("SELECT * FROM generated_offers ORDER BY createdAt DESC");
  return rows.map(rowToOffer);
}

export async function findOfferBySignature(signature) {
  const db = await getDb();
  const row = await db.getFirstAsync(
    "SELECT * FROM generated_offers WHERE signature = ? ORDER BY createdAt ASC LIMIT 1",
    signature
  );
  return row ? rowToOffer(row) : null;
}
