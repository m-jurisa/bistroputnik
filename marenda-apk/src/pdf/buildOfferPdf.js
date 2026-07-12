const palette = {
  teal: "#103F4D",
  sand: "#E4C995",
  paper: "#F7F5F0",
  divider: "#C9D3D6",
  text: "#18343B",
  muted: "#647078"
};

const copy = {
  hr: {
    section: "Dnevna ponuda",
    title: "Marenda",
    intro: "Tri svježe pripremljena jela za današnju marendu u Bistro Putniku.",
    allergens: "Alergeni",
    footer: "Ponuda vrijedi do isteka zaliha."
  },
  en: {
    section: "Today's offer",
    title: "Daily Lunch",
    intro: "Three freshly prepared dishes for today's lunch at Bistro Putnik.",
    allergens: "Allergens",
    footer: "Available while stocks last."
  }
};

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function itemName(item, language) {
  if (language === "en") {
    return item.nameEn || item.nameHr;
  }

  return item.nameHr || item.nameEn;
}

function itemDescription(item, language) {
  if (language === "en") {
    return item.descriptionEn || item.descriptionHr;
  }

  return item.descriptionHr || item.descriptionEn;
}

function allergenPills(item, labels) {
  const allergens = Array.isArray(item.allergens) ? item.allergens.filter(Boolean) : [];
  if (allergens.length === 0) {
    return "";
  }

  return `
    <div class="allergens">
      <span class="allergen-label">${escapeHtml(labels.allergens)}</span>
      ${allergens.map((allergen) => `<span class="pill">${escapeHtml(allergen)}</span>`).join("")}
    </div>
  `;
}

function dishRows(items, language, labels) {
  return items
    .map(
      (item, index) => `
        <section class="dish ${index === items.length - 1 ? "dish-last" : ""}">
          <div class="dish-main">
            <div class="dish-copy">
              <h2>${escapeHtml(itemName(item, language))}</h2>
              <p>${escapeHtml(itemDescription(item, language))}</p>
              ${allergenPills(item, labels)}
            </div>
            <div class="price">${escapeHtml(item.priceDisplay || "")}</div>
          </div>
        </section>
      `
    )
    .join("");
}

export function buildOfferPdfHtml({ items, language = "hr" }) {
  const safeLanguage = language === "en" ? "en" : "hr";
  const labels = copy[safeLanguage];

  return `<!DOCTYPE html>
<html lang="${safeLanguage}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bistro Putnik ${escapeHtml(labels.title)}</title>
    <style>
      @page {
        size: A4;
        margin: 0;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background: ${palette.paper};
        color: ${palette.text};
        font-family: Arial, Helvetica, sans-serif;
      }

      .sheet {
        width: 595pt;
        min-height: 842pt;
        padding: 54pt 58pt 44pt;
        background: ${palette.paper};
      }

      .top-line {
        height: 1pt;
        background: ${palette.teal};
        margin-bottom: 20pt;
      }

      header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 54pt;
      }

      .brand {
        color: ${palette.teal};
        font-size: 12pt;
        font-weight: 700;
        letter-spacing: 1.4pt;
        text-transform: uppercase;
      }

      .brand-mark {
        width: 42pt;
        height: 42pt;
        border: 1pt solid ${palette.sand};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${palette.teal};
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 17pt;
      }

      .section {
        color: ${palette.sand};
        font-size: 10pt;
        letter-spacing: 2pt;
        text-transform: uppercase;
        margin-bottom: 8pt;
      }

      h1 {
        color: ${palette.teal};
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 56pt;
        font-weight: 400;
        line-height: 1;
        margin: 0 0 14pt;
      }

      .intro {
        color: ${palette.muted};
        font-size: 12pt;
        line-height: 1.55;
        margin: 0 0 40pt;
        max-width: 360pt;
      }

      .menu {
        border-top: 1pt solid ${palette.divider};
      }

      .dish {
        border-bottom: 1pt solid ${palette.divider};
        padding: 19pt 0 17pt;
      }

      .dish-main {
        display: flex;
        gap: 24pt;
        justify-content: space-between;
        align-items: flex-start;
      }

      .dish-copy {
        flex: 1;
        padding-right: 12pt;
      }

      h2 {
        color: ${palette.teal};
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 19pt;
        font-weight: 400;
        line-height: 1.2;
        margin: 0 0 7pt;
      }

      p {
        color: ${palette.text};
        font-size: 10.5pt;
        line-height: 1.45;
        margin: 0;
      }

      .price {
        min-width: 76pt;
        color: ${palette.teal};
        font-size: 13pt;
        font-weight: 700;
        text-align: right;
        white-space: nowrap;
      }

      .allergens {
        display: flex;
        flex-wrap: wrap;
        gap: 5pt;
        margin-top: 10pt;
      }

      .allergen-label {
        color: ${palette.muted};
        font-size: 8pt;
        line-height: 15pt;
        margin-right: 2pt;
      }

      .pill {
        border: 0.8pt solid ${palette.sand};
        border-radius: 999pt;
        color: ${palette.teal};
        font-size: 7.5pt;
        line-height: 14pt;
        padding: 0 7pt;
      }

      footer {
        color: ${palette.muted};
        font-size: 9pt;
        line-height: 1.4;
        margin-top: 32pt;
      }
    </style>
  </head>
  <body>
    <main class="sheet">
      <div class="top-line"></div>
      <header>
        <div class="brand">Bistro Putnik</div>
        <div class="brand-mark">BP</div>
      </header>

      <div class="section">${escapeHtml(labels.section)}</div>
      <h1>${escapeHtml(labels.title)}</h1>
      <p class="intro">${escapeHtml(labels.intro)}</p>

      <div class="menu">
        ${dishRows(items, safeLanguage, labels)}
      </div>

      <footer>${escapeHtml(labels.footer)}</footer>
    </main>
  </body>
</html>`;
}
