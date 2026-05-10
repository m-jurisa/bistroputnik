export const DEFAULT_LANGUAGE = "hr";

export const SUPPORTED_LANGUAGES = [
  { code: "hr", label: "Hrvatski", printLabel: "HR" },
  { code: "en", label: "English", printLabel: "EN" },
  { code: "sv", label: "Svenska", printLabel: "SV" },
  { code: "fi", label: "Suomi", printLabel: "FI" },
  { code: "no", label: "Norsk", printLabel: "NO" },
  { code: "pl", label: "Polski", printLabel: "PL" },
  { code: "de", label: "Deutsch", printLabel: "DE" },
  { code: "da", label: "Dansk", printLabel: "DA" }
];

export const UI_TRANSLATIONS = {
  hr: {
    printPdf: "Print / PDF",
    exportJson: "Izvoz JSON",
    exportCurrentJson: "Izvoz JSON trenutnog jezika",
    exportMissingTranslations: "Izvoz prijevoda koji nedostaju",
    importTranslations: "Uvoz prijevoda",
    notices: "Napomene",
    allergens: "Alergeni",
    importComplete: "Prijevodi su spojeni u radnu kopiju. Izvezite puni JSON za spremanje promjena.",
    noMissingTranslations: "Nema evidentiranih prijevoda koji nedostaju."
  },
  en: {
    printPdf: "Print / PDF",
    exportJson: "Export JSON",
    exportCurrentJson: "Export current language JSON",
    exportMissingTranslations: "Export Missing Translations",
    importTranslations: "Import Translations",
    notices: "Guest notes",
    allergens: "Allergens",
    importComplete: "Translations were merged into the working copy. Export the full JSON to save changes.",
    noMissingTranslations: "No missing translations were found."
  },
  sv: {
    printPdf: "Skriv ut / PDF",
    exportJson: "Exportera JSON",
    exportCurrentJson: "Exportera JSON för aktuellt språk",
    exportMissingTranslations: "Exportera saknade översättningar",
    importTranslations: "Importera översättningar",
    notices: "Gästinformation",
    allergens: "Allergener",
    importComplete: "Översättningarna har slagits samman i arbetskopian. Exportera fullständig JSON för att spara ändringarna.",
    noMissingTranslations: "Inga saknade översättningar hittades."
  },
  fi: {
    printPdf: "Tulosta / PDF",
    exportJson: "Vie JSON",
    exportCurrentJson: "Vie nykyisen kielen JSON",
    exportMissingTranslations: "Vie puuttuvat käännökset",
    importTranslations: "Tuo käännökset",
    notices: "Asiakastiedot",
    allergens: "Allergeenit",
    importComplete: "Käännökset yhdistettiin työversioon. Vie koko JSON tallentaaksesi muutokset.",
    noMissingTranslations: "Puuttuvia käännöksiä ei löytynyt."
  },
  no: {
    printPdf: "Skriv ut / PDF",
    exportJson: "Eksporter JSON",
    exportCurrentJson: "Eksporter JSON for valgt språk",
    exportMissingTranslations: "Eksporter manglende oversettelser",
    importTranslations: "Importer oversettelser",
    notices: "Gjestinformasjon",
    allergens: "Allergener",
    importComplete: "Oversettelsene er slått sammen i arbeidskopien. Eksporter full JSON for å lagre endringene.",
    noMissingTranslations: "Ingen manglende oversettelser ble funnet."
  },
  pl: {
    printPdf: "Druk / PDF",
    exportJson: "Eksportuj JSON",
    exportCurrentJson: "Eksportuj JSON bieżącego języka",
    exportMissingTranslations: "Eksportuj brakujące tłumaczenia",
    importTranslations: "Importuj tłumaczenia",
    notices: "Informacje dla gości",
    allergens: "Alergeny",
    importComplete: "Tłumaczenia zostały scalone z kopią roboczą. Wyeksportuj pełny JSON, aby zapisać zmiany.",
    noMissingTranslations: "Nie znaleziono brakujących tłumaczeń."
  },
  de: {
    printPdf: "Drucken / PDF",
    exportJson: "JSON exportieren",
    exportCurrentJson: "JSON der aktuellen Sprache exportieren",
    exportMissingTranslations: "Fehlende Übersetzungen exportieren",
    importTranslations: "Übersetzungen importieren",
    notices: "Gästehinweise",
    allergens: "Allergene",
    importComplete: "Die Übersetzungen wurden in die Arbeitskopie übernommen. Exportieren Sie das vollständige JSON, um die Änderungen zu speichern.",
    noMissingTranslations: "Es wurden keine fehlenden Übersetzungen gefunden."
  },
  da: {
    printPdf: "Print / PDF",
    exportJson: "Eksporter JSON",
    exportCurrentJson: "Eksporter JSON for aktuelt sprog",
    exportMissingTranslations: "Eksporter manglende oversættelser",
    importTranslations: "Importer oversættelser",
    notices: "Gæsteinformation",
    allergens: "Allergener",
    importComplete: "Oversættelserne er flettet ind i arbejdskopien. Eksporter fuld JSON for at gemme ændringerne.",
    noMissingTranslations: "Der blev ikke fundet manglende oversættelser."
  }
};

export function getUiLabel(language, key) {
  return UI_TRANSLATIONS[language]?.[key] || UI_TRANSLATIONS.en[key] || UI_TRANSLATIONS.hr[key] || key;
}
