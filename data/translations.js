export const languages = [
  { code: 'hr', label: 'HR' },
  { code: 'en', label: 'EN' },
  { code: 'sv', label: 'SV' },
  { code: 'fi', label: 'FI' },
  { code: 'no', label: 'NO' },
  { code: 'pl', label: 'PL' },
  { code: 'de', label: 'DE' },
  { code: 'da', label: 'DA' },
];

export const defaultLanguage = 'en';

export const translations = {
  hr: {
    nav: {
      about: 'O nama',
      menu: 'Jelovnik',
      marenda: 'Marenda',
      contact: 'Kontakt',
    },
    ui: {
      languageSelector: 'Odabir jezika',
      logoHome: 'Bistro Putnik početna',
      navigation: 'Navigacija',
      menuPages: 'Stranice jelovnika',
    },
    hero: {
      opening: 'Otvaranje 1.5.2026',
      title: 'Bistro Putnik u Baškoj Vodi',
      text:
        'Hrvatska obalna kuhinja, pažljivo odabrana pića i miran večernji ritam na Makarskoj rivijeri.',
      cta: 'Pogledaj jelovnik',
    },
    about: {
      eyebrow: 'Baška Voda',
      facts: {
        opening: 'Otvaranje',
        venue: 'Objekt',
        contact: 'Kontakt',
      },
    },
    menu: {
      eyebrow: 'Jelovnik',
      title: 'Početni jelovnik',
      description:
        'Hrvatska jela, riba, grill, pića i mala lista jela uz prethodnu narudžbu.',
      itemCount: (count) => `${count} ${count === 1 ? 'stavka' : 'stavki'}`,
      allergens: 'Alergeni',
      section: 'Sekcija',
      noticesTitle: 'Informacije',
      noticesIntro: 'Kratke napomene za goste prije narudžbe.',
      allergenLegendTitle: 'EU lista alergena',
      allergenLegendIntro:
        'Popis obveznih alergena iz Priloga II Uredbe (EU) br. 1169/2011.',
    },
    footer: {
      contact: 'Kontakt',
      company: 'Tvrtka',
      address: 'Sjedište',
      oib: 'OIB',
      mbs: 'MBS',
      registrationNumber: 'Matični broj',
      website: 'Web',
    },
    marenda: {
      backToHome: 'Povratak na početnu',
      printOffer: 'Ispis ponude',
    },
    review: {
      eyebrow: 'Hvala na posjeti',
      title: 'Podijelite svoje iskustvo',
      intro:
        'Ako ste uživali kod nas, značilo bi nam da ostavite kratku recenziju.',
      googleCta: 'Ostavite recenziju na Googleu',
      tripadvisorCta: 'Ostavite recenziju na Tripadvisoru',
      thanks: 'Hvala vam na vremenu i podršci.',
      contactPrompt: 'Želite nam se javiti izravno?',
      contactLink: 'Pošaljite poruku',
    },
  },
  en: {
    nav: {
      about: 'About',
      menu: 'Menu',
      marenda: 'Daily Lunch',
      contact: 'Contact',
    },
    ui: {
      languageSelector: 'Language selector',
      logoHome: 'Bistro Putnik home',
      navigation: 'Navigation',
      menuPages: 'Menu pages',
    },
    hero: {
      opening: 'Opening 1.5.2026',
      title: 'Bistro Putnik in Baška Voda',
      text:
        'Croatian coastal cooking, a careful bar, and an easy evening rhythm on the Makarska Riviera.',
      cta: 'View Menu',
    },
    about: {
      eyebrow: 'Baška Voda',
      facts: {
        opening: 'Opening',
        venue: 'Venue',
        contact: 'Contact',
      },
    },
    menu: {
      eyebrow: 'Menu',
      title: 'The opening menu',
      description:
        'Croatian plates, seafood, grilled dishes, drinks, and a small list prepared by advance order.',
      itemCount: (count) => `${count} ${count === 1 ? 'item' : 'items'}`,
      allergens: 'Allergens',
      section: 'Section',
      noticesTitle: 'Information',
      noticesIntro: 'A few guest notes before ordering.',
      allergenLegendTitle: 'EU allergen list',
      allergenLegendIntro:
        'Mandatory allergen categories from Annex II of Regulation (EU) No 1169/2011.',
    },
    footer: {
      contact: 'Contact',
      company: 'Company',
      address: 'Registered address',
      oib: 'OIB',
      mbs: 'MBS',
      registrationNumber: 'Registration no.',
      website: 'Web',
    },
    marenda: {
      backToHome: 'Back to homepage',
      printOffer: 'Print offer',
    },
    review: {
      eyebrow: 'Thank you for visiting',
      title: 'Share your experience',
      intro:
        'If you enjoyed your time with us, we would be grateful for a short review.',
      googleCta: 'Leave a review on Google',
      tripadvisorCta: 'Leave a review on Tripadvisor',
      thanks: 'Thank you for your time and support.',
      contactPrompt: 'Prefer to contact us directly?',
      contactLink: 'Send us a note',
    },
  },
  sv: {
    nav: {
      about: 'Om oss',
      menu: 'Meny',
      marenda: 'Dagens lunch',
      contact: 'Kontakt',
    },
    ui: {
      languageSelector: 'Språkväljare',
      logoHome: 'Bistro Putnik startsida',
      navigation: 'Navigering',
      menuPages: 'Menysidor',
    },
    hero: {
      opening: 'Öppnar 1.5.2026',
      title: 'Bistro Putnik i Baška Voda',
      text:
        'Kroatisk kustmat, en omsorgsfull bar och en lugn kvällsrytm vid Makarska rivieran.',
      cta: 'Visa meny',
    },
    about: {
      eyebrow: 'Baška Voda',
      facts: {
        opening: 'Öppning',
        venue: 'Plats',
        contact: 'Kontakt',
      },
    },
    menu: {
      eyebrow: 'Meny',
      title: 'Öppningsmenyn',
      description:
        'Kroatiska rätter, fisk och skaldjur, grillat, drycker och några rätter som beställs i förväg.',
      itemCount: (count) => `${count} ${count === 1 ? 'rätt' : 'rätter'}`,
      allergens: 'Allergener',
      section: 'Sektion',
      noticesTitle: 'Information',
      noticesIntro: 'Några korta noteringar inför beställning.',
      allergenLegendTitle: 'EU-lista över allergener',
      allergenLegendIntro:
        'Obligatoriska allergenkategorier enligt bilaga II till förordning (EU) nr 1169/2011.',
    },
    footer: {
      contact: 'Kontakt',
      company: 'Företag',
      address: 'Registrerad adress',
      oib: 'OIB',
      mbs: 'MBS',
      registrationNumber: 'Registreringsnummer',
      website: 'Webb',
    },
    marenda: {
      backToHome: 'Till startsidan',
      printOffer: 'Skriv ut erbjudande',
    },
    review: {
      eyebrow: 'Tack för ditt besök',
      title: 'Dela din upplevelse',
      intro:
        'Om du trivdes hos oss skulle vi uppskatta en kort recension.',
      googleCta: 'Lämna en recension på Google',
      tripadvisorCta: 'Lämna en recension på Tripadvisor',
      thanks: 'Tack för din tid och ditt stöd.',
      contactPrompt: 'Vill du kontakta oss direkt?',
      contactLink: 'Skicka ett meddelande',
    },
  },
  fi: {
    nav: {
      about: 'Meistä',
      menu: 'Menu',
      marenda: 'Päivän lounas',
      contact: 'Yhteys',
    },
    ui: {
      languageSelector: 'Kielen valinta',
      logoHome: 'Bistro Putnik etusivu',
      navigation: 'Navigaatio',
      menuPages: 'Menun sivut',
    },
    hero: {
      opening: 'Avataan 1.5.2026',
      title: 'Bistro Putnik Baška Vodassa',
      text:
        'Kroatialaista rannikkoruokaa, huolella koottu juomavalikoima ja rauhallinen iltatunnelma Makarskan rivieralla.',
      cta: 'Katso menu',
    },
    about: {
      eyebrow: 'Baška Voda',
      facts: {
        opening: 'Avajaiset',
        venue: 'Paikka',
        contact: 'Yhteys',
      },
    },
    menu: {
      eyebrow: 'Menu',
      title: 'Avausmenu',
      description:
        'Kroatialaisia annoksia, kalaa ja äyriäisiä, grilliruokia, juomia sekä pieni ennakkotilauslista.',
      itemCount: (count) => `${count} ${count === 1 ? 'tuote' : 'tuotetta'}`,
      allergens: 'Allergeenit',
      section: 'Osio',
      noticesTitle: 'Tietoa',
      noticesIntro: 'Muutama lyhyt huomio vieraille ennen tilaamista.',
      allergenLegendTitle: 'EU:n allergeeniluettelo',
      allergenLegendIntro:
        'Pakolliset allergeeniluokat asetuksen (EU) N:o 1169/2011 liitteestä II.',
    },
    footer: {
      contact: 'Yhteys',
      company: 'Yritys',
      address: 'Rekisteröity osoite',
      oib: 'OIB',
      mbs: 'MBS',
      registrationNumber: 'Rekisterinumero',
      website: 'Verkko',
    },
    marenda: {
      backToHome: 'Takaisin etusivulle',
      printOffer: 'Tulosta tarjous',
    },
    review: {
      eyebrow: 'Kiitos vierailustasi',
      title: 'Jaa kokemuksesi',
      intro:
        'Jos viihdyit meillä, arvostaisimme lyhyttä arvostelua.',
      googleCta: 'Jätä arvostelu Googleen',
      tripadvisorCta: 'Jätä arvostelu Tripadvisoriin',
      thanks: 'Kiitos ajastasi ja tuestasi.',
      contactPrompt: 'Haluatko ottaa yhteyttä suoraan?',
      contactLink: 'Lähetä viesti',
    },
  },
  no: {
    nav: {
      about: 'Om oss',
      menu: 'Meny',
      marenda: 'Dagens lunsj',
      contact: 'Kontakt',
    },
    ui: {
      languageSelector: 'Språkvelger',
      logoHome: 'Bistro Putnik forside',
      navigation: 'Navigasjon',
      menuPages: 'Menysider',
    },
    hero: {
      opening: 'Åpner 1.5.2026',
      title: 'Bistro Putnik i Baška Voda',
      text:
        'Kroatisk kystmat, en nøye utvalgt bar og en rolig kveldsrytme på Makarska-rivieraen.',
      cta: 'Se menyen',
    },
    about: {
      eyebrow: 'Baška Voda',
      facts: {
        opening: 'Åpning',
        venue: 'Sted',
        contact: 'Kontakt',
      },
    },
    menu: {
      eyebrow: 'Meny',
      title: 'Åpningsmenyen',
      description:
        'Kroatiske retter, sjømat, grillretter, drikke og en liten liste med retter på forhåndsbestilling.',
      itemCount: (count) => `${count} ${count === 1 ? 'valg' : 'valg'}`,
      allergens: 'Allergener',
      section: 'Seksjon',
      noticesTitle: 'Informasjon',
      noticesIntro: 'Noen korte merknader før bestilling.',
      allergenLegendTitle: 'EUs allergenliste',
      allergenLegendIntro:
        'Obligatoriske allergenkategorier fra vedlegg II til forordning (EU) nr. 1169/2011.',
    },
    footer: {
      contact: 'Kontakt',
      company: 'Selskap',
      address: 'Registrert adresse',
      oib: 'OIB',
      mbs: 'MBS',
      registrationNumber: 'Registreringsnummer',
      website: 'Nettsted',
    },
    marenda: {
      backToHome: 'Til forsiden',
      printOffer: 'Skriv ut tilbudet',
    },
    review: {
      eyebrow: 'Takk for besøket',
      title: 'Del opplevelsen din',
      intro:
        'Hvis du hadde en fin stund hos oss, setter vi pris på en kort anmeldelse.',
      googleCta: 'Legg igjen en anmeldelse på Google',
      tripadvisorCta: 'Legg igjen en anmeldelse på Tripadvisor',
      thanks: 'Takk for tiden din og støtten.',
      contactPrompt: 'Vil du kontakte oss direkte?',
      contactLink: 'Send oss en melding',
    },
  },
  pl: {
    nav: {
      about: 'O nas',
      menu: 'Menu',
      marenda: 'Lunch dnia',
      contact: 'Kontakt',
    },
    ui: {
      languageSelector: 'Wybór języka',
      logoHome: 'Bistro Putnik strona główna',
      navigation: 'Nawigacja',
      menuPages: 'Strony menu',
    },
    hero: {
      opening: 'Otwarcie 1.5.2026',
      title: 'Bistro Putnik w Baškiej Vodzie',
      text:
        'Chorwacka kuchnia wybrzeża, starannie dobrany bar i spokojny wieczorny rytm Riwiery Makarskiej.',
      cta: 'Zobacz menu',
    },
    about: {
      eyebrow: 'Baška Voda',
      facts: {
        opening: 'Otwarcie',
        venue: 'Lokal',
        contact: 'Kontakt',
      },
    },
    menu: {
      eyebrow: 'Menu',
      title: 'Menu otwarcia',
      description:
        'Chorwackie dania, ryby i owoce morza, grill, napoje oraz krótka lista dań na wcześniejsze zamówienie.',
      itemCount: (count) => `${count} ${count === 1 ? 'pozycja' : 'pozycji'}`,
      allergens: 'Alergeny',
      section: 'Sekcja',
      noticesTitle: 'Informacje',
      noticesIntro: 'Kilka krótkich uwag dla gości przed zamówieniem.',
      allergenLegendTitle: 'Lista alergenów UE',
      allergenLegendIntro:
        'Obowiązkowe kategorie alergenów z załącznika II do rozporządzenia (UE) nr 1169/2011.',
    },
    footer: {
      contact: 'Kontakt',
      company: 'Firma',
      address: 'Adres rejestrowy',
      oib: 'OIB',
      mbs: 'MBS',
      registrationNumber: 'Numer rejestracyjny',
      website: 'Strona',
    },
    marenda: {
      backToHome: 'Powrót na stronę główną',
      printOffer: 'Drukuj ofertę',
    },
    review: {
      eyebrow: 'Dziękujemy za wizytę',
      title: 'Podziel się wrażeniami',
      intro:
        'Jeśli miło spędzili Państwo u nas czas, będziemy wdzięczni za krótką opinię.',
      googleCta: 'Zostaw opinię w Google',
      tripadvisorCta: 'Zostaw opinię w Tripadvisor',
      thanks: 'Dziękujemy za poświęcony czas i wsparcie.',
      contactPrompt: 'Wolisz skontaktować się bezpośrednio?',
      contactLink: 'Wyślij wiadomość',
    },
  },
  de: {
    nav: {
      about: 'Über uns',
      menu: 'Speisekarte',
      marenda: 'Mittagstisch',
      contact: 'Kontakt',
    },
    ui: {
      languageSelector: 'Sprachauswahl',
      logoHome: 'Bistro Putnik Startseite',
      navigation: 'Navigation',
      menuPages: 'Speisekartenseiten',
    },
    hero: {
      opening: 'Eröffnung am 1.5.2026',
      title: 'Bistro Putnik in Baška Voda',
      text:
        'Kroatische Küstenküche, eine sorgfältig kuratierte Bar und ein ruhiger Abendrhythmus an der Makarska Riviera.',
      cta: 'Speisekarte ansehen',
    },
    about: {
      eyebrow: 'Baška Voda',
      facts: {
        opening: 'Eröffnung',
        venue: 'Lokal',
        contact: 'Kontakt',
      },
    },
    menu: {
      eyebrow: 'Speisekarte',
      title: 'Die Eröffnungskarte',
      description:
        'Kroatische Gerichte, Fisch und Meeresfrüchte, Grillgerichte, Getränke und eine kleine Auswahl auf Vorbestellung.',
      itemCount: (count) => `${count} ${count === 1 ? 'Position' : 'Positionen'}`,
      allergens: 'Allergene',
      section: 'Bereich',
      noticesTitle: 'Informationen',
      noticesIntro: 'Einige kurze Hinweise für Gäste vor der Bestellung.',
      allergenLegendTitle: 'EU-Allergenliste',
      allergenLegendIntro:
        'Verpflichtende Allergenkategorien aus Anhang II der Verordnung (EU) Nr. 1169/2011.',
    },
    footer: {
      contact: 'Kontakt',
      company: 'Unternehmen',
      address: 'Eingetragene Adresse',
      oib: 'OIB',
      mbs: 'MBS',
      registrationNumber: 'Registrierungsnummer',
      website: 'Web',
    },
    marenda: {
      backToHome: 'Zur Startseite',
      printOffer: 'Angebot drucken',
    },
    review: {
      eyebrow: 'Danke für Ihren Besuch',
      title: 'Teilen Sie Ihre Erfahrung',
      intro:
        'Wenn es Ihnen bei uns gefallen hat, freuen wir uns über eine kurze Bewertung.',
      googleCta: 'Bewertung auf Google abgeben',
      tripadvisorCta: 'Bewertung auf Tripadvisor abgeben',
      thanks: 'Vielen Dank für Ihre Zeit und Unterstützung.',
      contactPrompt: 'Möchten Sie uns direkt kontaktieren?',
      contactLink: 'Nachricht senden',
    },
  },
  da: {
    nav: {
      about: 'Om os',
      menu: 'Menu',
      marenda: 'Dagens frokost',
      contact: 'Kontakt',
    },
    ui: {
      languageSelector: 'Sprogvælger',
      logoHome: 'Bistro Putnik forside',
      navigation: 'Navigation',
      menuPages: 'Menusider',
    },
    hero: {
      opening: 'Åbner 1.5.2026',
      title: 'Bistro Putnik i Baška Voda',
      text:
        'Kroatisk kystkøkken, en nøje udvalgt bar og en rolig aftenrytme på Makarska-rivieraen.',
      cta: 'Se menu',
    },
    about: {
      eyebrow: 'Baška Voda',
      facts: {
        opening: 'Åbning',
        venue: 'Sted',
        contact: 'Kontakt',
      },
    },
    menu: {
      eyebrow: 'Menu',
      title: 'Åbningsmenuen',
      description:
        'Kroatiske retter, fisk og skaldyr, grillretter, drikkevarer og en lille liste med retter på forudbestilling.',
      itemCount: (count) => `${count} ${count === 1 ? 'valg' : 'valg'}`,
      allergens: 'Allergener',
      section: 'Sektion',
      noticesTitle: 'Information',
      noticesIntro: 'Et par korte bemærkninger til gæster før bestilling.',
      allergenLegendTitle: 'EU-allergenliste',
      allergenLegendIntro:
        'Obligatoriske allergenkategorier fra bilag II til forordning (EU) nr. 1169/2011.',
    },
    footer: {
      contact: 'Kontakt',
      company: 'Virksomhed',
      address: 'Registreret adresse',
      oib: 'OIB',
      mbs: 'MBS',
      registrationNumber: 'Registreringsnummer',
      website: 'Web',
    },
    marenda: {
      backToHome: 'Til forsiden',
      printOffer: 'Print tilbud',
    },
    review: {
      eyebrow: 'Tak for besøget',
      title: 'Del din oplevelse',
      intro:
        'Hvis du nød dit besøg hos os, vil vi sætte pris på en kort anmeldelse.',
      googleCta: 'Skriv en anmeldelse på Google',
      tripadvisorCta: 'Skriv en anmeldelse på Tripadvisor',
      thanks: 'Tak for din tid og støtte.',
      contactPrompt: 'Vil du kontakte os direkte?',
      contactLink: 'Send os en besked',
    },
  },
};

const baseMenuTranslations = {
  en: {
    story: {
      title: 'Our table story',
      paragraphs: [
        'At Bistro Putnik, we care for Croatian recipes, customs and hospitality. Our menu brings together familiar local flavours, traditional preparations and the Mediterranean spirit of Baška Voda.',
        'Selected dishes are served with our house bread, prepared with care. We choose ingredients thoughtfully and, whenever possible, work with Croatian local suppliers.',
      ],
      closing: 'Simple, honest and full of flavours that feel close to home.',
    },
    pages: {
      food: 'Food',
      'prvosvibanjski-jelovnik': 'May Day menu',
      'special-order': 'By advance order',
      drinks: 'Drinks',
      'wines-spirits-cocktails': 'Wine, spirits and cocktails',
    },
    pageIntro: {
      'prvosvibanjski-jelovnik': 'Special offer for May Day.',
      'special-order':
        'Available by advance order, at least 24 hours ahead, with the number of guests agreed in advance.',
    },
    pageClosing: {
      'special-order':
        'For larger groups and special occasions, we are happy to recommend a serving style and seasonal sides.',
    },
    sections: {
      'hladna-predjela': 'Cold starters',
      'prvosvibanjska-ponuda': 'May Day selection',
      juhe: 'Soups',
      'tjestenine-rizoti': 'Pasta and risotto',
      'arancini-putnik': 'Putnik arancini',
      'grill-mesna-jela': 'Grill and meat dishes',
      'dalmatinski-specijaliteti': 'Dalmatian specialties',
      'pohana-jela': 'Breaded dishes',
      'riba-morska-jela': 'Fish and seafood',
      'vegetarijansko-vegansko': 'Vegetarian and vegan',
      'djecji-meni': "Children's menu",
      'salate-kao-obrok': 'Main-course salads',
      salate: 'Salads',
      'posebna-priprema': 'PEKA',
      'topli-napitci': 'Coffee and hot drinks',
      vode: 'Water',
      'bezalkoholna-pica': 'Soft drinks',
      'sokovi-ledeni-cajevi': 'Juices and iced teas',
      'piva-cider': 'Beer and cider',
      'mix-pica': 'Mixed drinks',
      'vina-na-case': 'Wines by the glass',
      'vina-u-boci': 'Premium wines',
      pjenusci: 'Sparkling wines',
      'aperitivi-rakije-likeri': 'Aperitifs, rakija and liqueurs',
      'whiskey-cognac-zestoka': 'Whiskey, cognac and other spirits',
      gin: 'Gin',
      kokteli: 'Cocktails',
      'signature-cocktails': 'Signature cocktails',
    },
    sectionNotes: {
      'salate-kao-obrok': 'served with warm house bread',
    },
    notices: {
      'prices-eur': 'All prices are listed in euros (€).',
      'vat-included': 'VAT is included in the price.',
      'allergen-on-request': 'Detailed allergen information is available on request.',
      'ask-staff-ingredients':
        'For information about ingredients and allergens, please ask our staff.',
      'frozen-products':
        'Some dishes may contain frozen products, depending on availability and season.',
      'offer-changes':
        'We reserve the right to adjust the offer according to ingredient availability.',
      'allergen-warning':
        'Allergen information follows the standard recipe and available data. Because preparation, seasonal availability, suppliers and traces of allergens may vary, please ask our staff before ordering.',
      'bread-gluten': 'House bread contains gluten (G).',
    },
    allergens: {
      G: 'Cereals containing gluten: wheat, rye, barley, oats, spelt, khorasan wheat or hybridised strains',
      R: 'Crustaceans and products thereof',
      J: 'Eggs and products thereof',
      RI: 'Fish and products thereof',
      K: 'Peanuts and products thereof',
      S: 'Soybeans and products thereof',
      M: 'Milk and products thereof (including lactose)',
      O: 'Nuts: almonds, hazelnuts, walnuts, cashews, pecans, Brazil nuts, pistachios, macadamia or Queensland nuts',
      C: 'Celery and products thereof',
      GU: 'Mustard and products thereof',
      SE: 'Sesame seeds and products thereof',
      'SO₂': 'Sulphur dioxide and sulphites above 10 mg/kg or 10 mg/L as total SO₂',
      L: 'Lupin and products thereof',
      ME: 'Molluscs and products thereof',
    },
    items: {
      'slavonska-plata': {
        name: 'Slavonian platter',
        description:
          'Slavonian ham, kulen, bacon, pork cracklings, cow cheese, pickled vegetables and house bread',
      },
      'dalmatinska-plata': {
        name: 'Dalmatian platter',
        description: 'Prosciutto, buđola, goat cheese, olives and house bread',
      },
      'riblja-plata': {
        name: 'Fish platter',
        description:
          'Mackerel fillet, anchovies, octopus salad, Pag cheese and house bread',
      },
      'pate-mix': {
        name: 'Pâté trio',
        description:
          'Three house pâtés — chicken, tuna and vegetarian — with house bread',
      },
      porchetta: {
        name: 'Porchetta',
        description: 'Italian-style rolled pork, served with house bread and salad',
      },
      'krem-juha-od-rajcice': { name: 'Cream of tomato soup' },
      'krem-juha-od-celera-i-kokosa': { name: 'Cream of celery and coconut soup' },
      'bistra-riblja-juha': { name: 'Clear fish soup' },
      'bistra-goveda-juha': { name: 'Clear beef soup' },
      bolognese: { name: 'Bolognese' },
      carbonara: { name: 'Carbonara' },
      'lazagne-bolognese': { name: 'Lasagne bolognese' },
      'zelene-tagliatelle-s-morskim-plodovima': {
        name: 'Green tagliatelle with seafood',
      },
      'arancini-od-crnog-rizota': {
        name: 'Black risotto and cuttlefish arancini',
        description: 'homemade arancini with black risotto and cuttlefish',
      },
      'cevapi-uz-dollar-chips-i-vrhnje': {
        name: 'Ćevapi with dollar chips and sour cream',
      },
      'punjena-pljeskavica-uz-dollar-chips-i-vrhnje': {
        name: 'Rolled meat fritters in bacon with dollar chips and sour cream',
      },
      'dvije-kobasice-uz-krumpir-s-povrcem': {
        name: 'Slavonian homemade grill sausage with potatoes and vegetables',
      },
      'pileci-file-uz-dollar-chips': { name: 'Chicken fillet with dollar chips' },
      'ramstek-uz-krumpir-i-wok-povrce': {
        name: 'Rump steak with potatoes and wok vegetables',
      },
      'biftek-uz-krumpir-i-wok-povrce': {
        name: 'Beef tenderloin with potatoes and wok vegetables',
      },
      'dalmatinska-pasticada': {
        name: 'Dalmatian pašticada',
        description: 'traditional Dalmatian beef dish with homemade sides',
      },
      'pileci-becki-uz-prilog': { name: 'Chicken schnitzel with side dish' },
      'svinjski-becki-uz-prilog': { name: 'Pork schnitzel with side dish' },
      'teleci-becki-uz-prilog': { name: 'Veal schnitzel with side dish' },
      'pileci-punjeni-odrezak-uz-prilog': {
        name: 'Stuffed chicken cutlet with side dish',
      },
      'svinjski-punjeni-odrezak-uz-prilog': {
        name: 'Stuffed pork cutlet with side dish',
      },
      'teleci-punjeni-odrezak-uz-prilog': {
        name: 'Stuffed veal cutlet with side dish',
      },
      'becki-uz-prilog': {
        name: 'Viennese schnitzel with side',
        description: 'chicken, pork or veal',
      },
      'punjeni-odrezak-uz-prilog': {
        name: 'Stuffed schnitzel with side',
        description: 'chicken, pork or veal',
      },
      'lignje-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grilled squid with chard and potatoes',
      },
      'lignje-przene-s-pommesom': { name: 'Fried squid with fries' },
      'bijela-riba-na-grillu': {
        name: 'Grilled white fish',
        description: 'sea bream, sea bass · chard and potatoes',
      },
      'losos-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grilled salmon with chard and potatoes',
      },
      'tuna-steak-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grilled tuna steak with chard and potatoes',
      },
      'dagnje-na-buzaru': {
        name: 'Mussels in traditional buzara sauce 1 kg',
        description:
          'traditional Dalmatian mussels in white wine, garlic and parsley sauce',
      },
      arabiata: { name: 'Arrabbiata', description: 'vegan' },
      'aglio-olio': { name: 'Aglio e olio', description: 'vegan' },
      'steak-od-karfiola': { name: 'Cauliflower steak', description: 'vegan' },
      'tofu-steak': { name: 'Tofu steak', description: 'vegan' },
      'vege-salata': { name: 'Vegetable salad', description: 'tofu steak · vegan' },
      'vege-arancini': { name: 'Vegetable arancini', description: 'vegetarian' },
      'pileci-nuggets-pommes': { name: 'Chicken nuggets + fries' },
      'mali-bolognese': { name: 'Small bolognese' },
      'mali-cevapi-uz-dollar-chips-i-vrhnje': {
        name: 'Small ćevapi with dollar chips and sour cream',
      },
      'salata-od-skuse-tunjevine': { name: 'Mackerel / tuna salad' },
      'slavonska-salata': { name: 'Slavonian salad', description: 'grilled bacon' },
      'cezar-salata': { name: 'Caesar salad', description: 'chicken fillet' },
      'sezonska-salata-mix': { name: 'Seasonal mixed salad' },
      'kupus-salata': { name: 'Cabbage salad' },
      'krastavci-u-vrhnju': { name: 'Cucumbers in sour cream' },
      'cikla-karamelizirani-luk': { name: 'Beetroot and caramelized onion' },
      'hobotnica-ispod-peke-uz-prilog': {
        name: 'Octopus under the bell with side',
      },
      'prvosvibanjska-salata-od-skuse': { name: 'Mackerel salad' },
      'prvosvibanjske-lignje-frigane': { name: 'Fried squid' },
      'prvosvibanjske-lignje-na-zaru': { name: 'Grilled squid' },
      'prvosvibanjski-losos-grill': { name: 'Grilled salmon' },
      'prvosvibanjski-arancini-crni-rizot-sipa': {
        name: 'Black risotto arancini with cuttlefish',
        description: 'homemade arancini with black risotto and cuttlefish',
      },
      'prvosvibanjske-dagnje-1kg': { name: 'Mussels 1 kg' },
      'prvosvibanjska-dalmatinska-pasticada': {
        name: 'Dalmatian pašticada',
        description: 'traditional Dalmatian beef dish',
      },
      'prvosvibanjska-porketa': {
        name: 'Porchetta',
        description: 'rolled roast pork served with homemade bread',
      },
      'produzena-kava': { name: 'Long coffee' },
      espresso: { name: 'Espresso' },
      'kava-s-mlijekom-slagom': { name: 'Coffee with milk / whipped cream' },
      cappuccino: { name: 'Cappuccino' },
      'bijela-kava': { name: 'White coffee' },
      'latte-macchiato': { name: 'Latte macchiato' },
      nescafe: { name: 'Nescafé' },
      caj: { name: 'Tea' },
      'instant-cappuccino': { name: 'Instant cappuccino' },
      'ice-latte': { name: 'Islatte' },
      'ice-latte-matcha': { name: 'Iced matcha latte' },
      'ice-latte-matcha-s-okusom': { name: 'Iced matcha latte with flavor' },
      'espresso-tonic': { name: 'Espresso tonic' },
      affogato: { name: 'Affogato' },
      'irish-baileys-coffee': { name: 'Irish / Baileys coffee' },
      'ice-coffee': { name: 'Iced coffee' },
      'topla-cokolada': { name: 'Hot chocolate' },
      'romerquelle-negazirana-033': { name: 'Römerquelle still 0.33 l' },
      'romerquelle-gazirana-033': { name: 'Römerquelle sparkling 0.33 l' },
      'romerquelle-negazirana-075': { name: 'Römerquelle still 0.75 l' },
      'romerquelle-gazirana-075': { name: 'Römerquelle sparkling 0.75 l' },
      'romerquelle-limunska-trava': { name: 'Römerquelle lemongrass' },
      'coca-cola-025': { name: 'Coca-Cola 0.25 l' },
      'coca-cola-zero-025': { name: 'Coca-Cola Zero 0.25 l' },
      'fanta-025': { name: 'Fanta 0.25 l' },
      'sprite-025': { name: 'Sprite 0.25 l' },
      'schweppes-tonic-025': { name: 'Schweppes Tonic 0.25 l' },
      'schweppes-bitter-lemon-025': {
        name: 'Schweppes Bitter Lemon 0.25 l',
      },
      'schweppes-tangerina-025': { name: 'Schweppes Tangerina 0.25 l' },
      'thomas-henry-spicy-ginger-beer-020': {
        name: 'Thomas Henry Spicy Ginger Beer 0.20 l',
      },
      'cedevita-limun': { name: 'Cedevita lemon' },
      'cedevita-naranca': { name: 'Cedevita orange' },
      'hidra-limun-050': { name: 'Hidra lemon 0.50 l' },
      'hidra-naranca-050': { name: 'Hidra orange 0.50 l' },
      'hidra-ananas-limeta-050': { name: 'Hidra pineapple-lime 0.50 l' },
      'ledeni-caj-breskva': { name: 'Iced tea peach' },
      'ledeni-caj-sumsko-voce': { name: 'Iced tea forest fruit' },
      'pago-jabuka-020': { name: 'Pago apple 0.20 l' },
      'pago-naranca-020': { name: 'Pago orange 0.20 l' },
      'pago-visnja-020': { name: 'Pago sour cherry 0.20 l' },
      'pago-marelica-020': { name: 'Pago apricot 0.20 l' },
      'pago-ananas-020': { name: 'Pago pineapple 0.20 l' },
      'pago-crni-ribiz-020': { name: 'Pago blackcurrant 0.20 l' },
      'ozujsko-toceno-030': { name: 'Ožujsko draught 0.30 l' },
      'ozujsko-toceno-050': { name: 'Ožujsko draught 0.50 l' },
      'ozujsko-033': { name: 'Ožujsko 0.33 l' },
      'stella-033': { name: 'Stella 0.33 l' },
      'becks-033': { name: 'Beck’s 0.33 l' },
      'tomislav-050': { name: 'Tomislav 0.50 l' },
      'vukovarsko-050': { name: 'Vukovarsko 0.50 l' },
      'ozujsko-radler-limun-050': { name: 'Ožujsko Radler lemon 0.50 l' },
      'somersby-jabuka': { name: 'Somersby apple' },
      'somersby-kruska': { name: 'Somersby pear' },
      'somersby-00-jagoda-limeta': { name: 'Somersby 0.0 strawberry-lime' },
      'radla-030': { name: 'Radler 0.30 l' },
      'radla-050': { name: 'Radler 0.50 l' },
      'mis-mas-030': { name: 'Miš-maš 0.30 l' },
      'mis-mas-050': { name: 'Miš-maš 0.50 l' },
      'bambus-030': { name: 'Bambus 0.30 l' },
      'bambus-050': { name: 'Bambus 0.50 l' },
      'malvazija-1dcl': { name: 'Malvazija 1 dcl' },
      'peljesac-1dcl': { name: 'Pelješac 1 dcl' },
      'rose-benkovac-1dcl': { name: 'Rosé Benkovac 1 dcl' },
      'dalmatinski-prosek-1dcl': { name: 'Dalmatian prošek 1 dcl' },
      'muskat-bric-1dcl': { name: 'Muškat BRIČ 1 dcl' },
      'zlatan-posip-075': { name: 'Zlatan Pošip 0.75 l' },
      'galic-sauvignon-blanc-075': { name: 'Galić Sauvignon Blanc 0.75 l' },
      'muskat-bric-075': { name: 'Muškat BRIČ 0.75 l' },
      'korta-katarina-rose-075': { name: 'Korta Katarina Rosé 0.75 l' },
      'zlatan-plavac-075': { name: 'Zlatan Plavac 0.75 l' },
      'zlatan-crljenak-075': { name: 'Zlatan Crljenak 0.75 l' },
      'prosecco-1dcl': { name: 'Prosecco 1 dcl' },
      'prosecco-075': { name: 'Prosecco 0.75 l' },
      'pelinkovac-dalmacija': { name: 'Pelinkovac Dalmacija' },
      'pelinkovac-antik': { name: 'Pelinkovac Antique' },
      'dalmatinski-prosek': { name: 'Dalmatian prošek' },
      'sibenska-travarica': { name: 'Šibenik travarica' },
      'williams-viljamovka': { name: 'Williams pear brandy' },
      'maraska-visnjevac': { name: 'Maraska sour cherry liqueur' },
      'maraska-orahovac': { name: 'Maraska walnut liqueur' },
      'teranino-korlat': { name: 'Teranino Korlat' },
      jagermeister: { name: 'Jägermeister' },
      limoncello: { name: 'Limoncello' },
      baileys: { name: 'Baileys' },
      aperol: { name: 'Aperol' },
      campari: { name: 'Campari' },
      'martini-bianco': { name: 'Martini Bianco' },
      'martini-rosso': { name: 'Martini Rosso' },
      jameson: { name: 'Jameson' },
      'jim-beam': { name: 'Jim Beam' },
      hennessy: { name: 'Hennessy' },
      'smirnoff-vodka': { name: 'Smirnoff Vodka' },
      'sierra-tequila': { name: 'Sierra Tequila' },
      'bacardi-white': { name: 'Bacardi White' },
      'bacardi-black': { name: 'Bacardi Black' },
      malibu: { name: 'Malibu' },
      'sax-gin': { name: 'SAX Gin' },
      'bulldog-gin': { name: 'Bulldog Gin' },
      'hendricks-gin': { name: 'Hendrick’s Gin' },
      'aperol-spritz': {
        name: 'Aperol Spritz',
        description: 'Aperol, prosecco, soda, orange',
      },
      hugo: {
        name: 'Hugo',
        description: 'prosecco, elderflower, soda, lime, mint',
      },
      mojito: {
        name: 'Mojito',
        description: 'white rum, lime, mint, sugar syrup, soda',
      },
      'gin-tonic': {
        name: 'Gin Tonic',
        description: 'gin, tonic, citrus',
      },
      'cuba-libre': {
        name: 'Cuba Libre',
        description: 'rum, Coca-Cola, lime',
      },
      'moscow-mule': {
        name: 'Moscow Mule',
        description: 'vodka, spicy ginger beer, lime',
      },
      'espresso-martini': {
        name: 'Espresso Martini',
        description: 'vodka, Kahlúa, espresso',
      },
      negroni: {
        name: 'Negroni',
        description: 'gin, Campari, Martini Rosso',
      },
      'mojito-strawberry-passion': {
        name: 'Strawberry / Passion Mojito',
        description: 'white rum, lime, mint, strawberry or passion fruit',
      },
      'limoncello-spritz': {
        name: 'Limoncello Spritz',
        description: 'limoncello, prosecco, soda, citrus',
      },
      'london-mule': {
        name: 'London Mule',
        description: 'gin, spicy ginger beer, lime',
      },
      'my-favourite-spritz': {
        name: 'My Favourite Spritz',
        description: 'Malibu, passion fruit purée, prosecco, citrus mix',
      },
      'karamello-espresso-martini': {
        name: 'Karamello Espresso Martini',
        description: 'vodka, Kahlúa, espresso, caramel',
      },
      'malibu-passion': {
        description: 'Malibu, passion fruit, lime, juice',
      },
      'tequila-sunrise': {
        description: 'tequila, orange, fruit syrup',
      },
      'val-putnika-spritz': {
        description: 'Aperol, prosecco, soda, citrus, Mediterranean herbs',
      },
      'baska-breeze': {
        description: 'gin, elderflower, tonic, lime, aromatic herbs',
      },
      'st-nicholas-sour': {
        description: 'whiskey, lime, sugar syrup, egg white syrup',
      },
      'karamel-espresso-martini': {
        name: 'Caramel Espresso Martini',
        description: 'vodka, Kahlúa, espresso, caramel',
      },
    },
  },
  sv: {
    story: {
      title: 'Vår berättelse vid bordet',
      paragraphs: [
        'På Bistro Putnik vårdar vi kroatiska recept, traditioner och gästfrihet. Menyn förenar välkända lokala smaker, traditionell tillagning och Baška Vodas medelhavskänsla.',
        'Till utvalda rätter serverar vi vårt hembakade bröd, tillagat med omsorg. Vi väljer råvaror med eftertanke och samarbetar, när det är möjligt, med lokala kroatiska leverantörer.',
      ],
      closing: 'Enkelt, ärligt och fullt av smaker som känns nära hemmet.',
    },
    pages: {
      food: 'Mat',
      'prvosvibanjski-jelovnik': 'Första maj-menyn',
      'special-order': 'På förbeställning',
      drinks: 'Drycker',
      'wines-spirits-cocktails': 'Vin, sprit och cocktails',
    },
    pageIntro: {
      'prvosvibanjski-jelovnik': 'Särskilt erbjudande för första maj.',
      'special-order':
        'Tillgängligt vid förbeställning minst 24 timmar i förväg, med antal gäster överenskommet på förhand.',
    },
    pageClosing: {
      'special-order':
        'För större sällskap och särskilda tillfällen rekommenderar vi gärna serveringssätt och säsongens tillbehör.',
    },
    sections: {
      'hladna-predjela': 'Kalla förrätter',
      'topla-predjela': 'Varma förrätter',
      'prvosvibanjska-ponuda': 'Första maj-urval',
      juhe: 'Soppor',
      'tjestenine-rizoti': 'Pasta och risotto',
      'arancini-putnik': 'Putnik-arancini',
      'grill-mesna-jela': 'Grill och kötträtter',
      'dalmatinski-specijaliteti': 'Dalmatiska specialiteter',
      'pohana-jela': 'Panerade rätter',
      'riba-morska-jela': 'Fisk och skaldjur',
      'vegetarijansko-vegansko': 'Vegetariskt och veganskt',
      'djecji-meni': 'Barnmeny',
      'salate-kao-obrok': 'Matiga sallader',
      salate: 'Sallader',
      'posebna-priprema': 'PEKA',
      'topli-napitci': 'Kaffe och varma drycker',
      vode: 'Vatten',
      'bezalkoholna-pica': 'Alkoholfria drycker',
      'sokovi-ledeni-cajevi': 'Juicer och iste',
      'piva-cider': 'Öl och cider',
      'mix-pica': 'Blanddrycker',
      'vina-na-case': 'Vin på glas',
      'vina-u-boci': 'Premiumviner',
      pjenusci: 'Mousserande vin',
      'aperitivi-rakije-likeri': 'Aperitifer, rakija och likörer',
      'whiskey-cognac-zestoka': 'Whiskey, cognac och annan sprit',
      gin: 'Gin',
      kokteli: 'Cocktails',
      'signature-cocktails': 'Signaturcocktails',
    },
    sectionNotes: {
      'salate-kao-obrok': 'serveras med varmt hembakat bröd',
    },
    notices: {
      'prices-eur': 'Alla priser anges i euro (€).',
      'vat-included': 'Moms ingår i priset.',
      'allergen-on-request': 'Detaljerad allergeninformation finns på begäran.',
      'ask-staff-ingredients':
        'Fråga personalen om du vill ha information om ingredienser och allergener.',
      'frozen-products':
        'Vissa rätter kan innehålla frysta produkter, beroende på tillgång och säsong.',
      'offer-changes':
        'Vi förbehåller oss rätten att ändra utbudet beroende på tillgången på råvaror.',
      'allergen-warning':
        'Allergeninformation utgår från standardrecept och tillgänglig information. Eftersom tillagning, säsong, leverantörer och spår av allergener kan variera ber vi dig fråga personalen innan du beställer.',
      'bread-gluten': 'Hembakat bröd innehåller gluten (G).',
    },
    allergens: {
      G: 'Spannmål som innehåller gluten: vete, råg, korn, havre, spelt, khorasanvete eller hybridiserade stammar',
      R: 'Kräftdjur och produkter därav',
      J: 'Ägg och produkter därav',
      RI: 'Fisk och produkter därav',
      K: 'Jordnötter och produkter därav',
      S: 'Sojabönor och produkter därav',
      M: 'Mjölk och mjölkprodukter (inklusive laktos)',
      O: 'Nötter: mandel, hasselnöt, valnöt, cashewnöt, pekannöt, paranöt, pistasch, makadamia eller Queenslandnöt',
      C: 'Selleri och produkter därav',
      GU: 'Senap och produkter därav',
      SE: 'Sesamfrön och produkter därav',
      'SO₂': 'Svaveldioxid och sulfiter över 10 mg/kg eller 10 mg/l som total SO₂',
      L: 'Lupin och produkter därav',
      ME: 'Blötdjur och produkter därav',
    },
    items: {
      'slavonska-plata': {
        name: 'Slavonsk platta',
        description:
          'Slavonsk skinka, kulen, bacon, fläsksvålar, komjölksost, inlagda grönsaker och hembakat bröd',
      },
      'dalmatinska-plata': {
        name: 'Dalmatisk platta',
        description: 'Prosciutto, buđola, getost, oliver och hembakat bröd',
      },
      'riblja-plata': {
        name: 'Fiskplatta',
        description:
          'Makrillfilé, ansjovis, bläckfisksallad, Pag-ost och hembakat bröd',
      },
      'pate-mix': {
        name: 'Patétrio',
        description:
          'Tre sorters huspaté — kyckling, tonfisk och vegetarisk — med hembakat bröd',
      },
      porchetta: {
        name: 'Porchetta',
        description: 'Italienskt rullat fläsk, serverat med hembakat bröd och sallad',
      },
      'krem-juha-od-rajcice': { name: 'Krämig tomatsoppa' },
      'krem-juha-od-celera-i-kokosa': { name: 'Krämig soppa på selleri och kokos' },
      'bistra-riblja-juha': { name: 'Klar fisksoppa' },
      'bistra-goveda-juha': { name: 'Klar nötsoppa' },
      bolognese: { name: 'Bolognese' },
      carbonara: { name: 'Carbonara' },
      'lazagne-bolognese': { name: 'Lasagne bolognese' },
      'zelene-tagliatelle-s-morskim-plodovima': {
        name: 'Grön tagliatelle med skaldjur',
      },
      'arancini-od-crnog-rizota': {
        name: 'Arancini på svart risotto och bläckfisk',
        description: 'hembakade arancini med svart risotto och bläckfisk',
      },
      'cevapi-uz-dollar-chips-i-vrhnje': {
        name: 'Ćevapi med dollar chips och gräddfil',
      },
      'punjena-pljeskavica-uz-dollar-chips-i-vrhnje': {
        name: 'Rullade köttfärsbiffar i bacon med dollar chips och gräddfil',
      },
      'dvije-kobasice-uz-krumpir-s-povrcem': {
        name: 'Slavonsk hemlagad grillkorv med potatis och grönsaker',
      },
      'pileci-file-uz-dollar-chips': { name: 'Kycklingfilé med dollar chips' },
      'ramstek-uz-krumpir-i-wok-povrce': {
        name: 'Rumpstek med potatis och wokade grönsaker',
      },
      'biftek-uz-krumpir-i-wok-povrce': {
        name: 'Oxfilé med potatis och wokade grönsaker',
      },
      'dalmatinska-pasticada': {
        name: 'Dalmatisk pašticada',
        description: 'traditionell dalmatisk nötköttsrätt med hemlagade tillbehör',
      },
      'pileci-becki-uz-prilog': { name: 'Kycklingschnitzel med tillbehör' },
      'svinjski-becki-uz-prilog': { name: 'Fläskschnitzel med tillbehör' },
      'teleci-becki-uz-prilog': { name: 'Kalvschnitzel med tillbehör' },
      'pileci-punjeni-odrezak-uz-prilog': {
        name: 'Fylld kycklingschnitzel med tillbehör',
      },
      'svinjski-punjeni-odrezak-uz-prilog': {
        name: 'Fylld fläskschnitzel med tillbehör',
      },
      'teleci-punjeni-odrezak-uz-prilog': {
        name: 'Fylld kalvschnitzel med tillbehör',
      },
      'becki-uz-prilog': {
        name: 'Wienerschnitzel med tillbehör',
        description: 'kyckling, fläsk eller kalv',
      },
      'punjeni-odrezak-uz-prilog': {
        name: 'Fylld schnitzel med tillbehör',
        description: 'kyckling, fläsk eller kalv',
      },
      'lignje-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grillad bläckfisk med mangold och potatis',
      },
      'lignje-przene-s-pommesom': { name: 'Friterad bläckfisk med pommes' },
      'bijela-riba-na-grillu': {
        name: 'Grillad vit fisk',
        description: 'guldsparid, havsabborre · mangold och potatis',
      },
      'losos-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grillad lax med mangold och potatis',
      },
      'tuna-steak-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grillad tonfiskstek med mangold och potatis',
      },
      'dagnje-na-buzaru': {
        name: 'Musslor i traditionell buzara 1 kg',
        description: 'traditionella dalmatiska musslor i vitt vin, vitlök och persilja',
      },
      arabiata: { name: 'Arrabbiata', description: 'vegansk' },
      'aglio-olio': { name: 'Aglio e olio', description: 'vegansk' },
      'steak-od-karfiola': { name: 'Blomkålsstek', description: 'vegansk' },
      'tofu-steak': { name: 'Tofustek', description: 'vegansk' },
      'vege-salata': { name: 'Grönsakssallad', description: 'tofustek · vegansk' },
      'vege-arancini': { name: 'Grönsaksarancini', description: 'vegetarisk' },
      'pileci-nuggets-pommes': { name: 'Kycklingnuggets + pommes' },
      'mali-bolognese': { name: 'Liten bolognese' },
      'mali-cevapi-uz-dollar-chips-i-vrhnje': {
        name: 'Små ćevapi med dollar chips och gräddfil',
      },
      'salata-od-skuse-tunjevine': { name: 'Makrill- / tonfisksallad' },
      'slavonska-salata': { name: 'Slavonsk sallad', description: 'grillat bacon' },
      'cezar-salata': { name: 'Caesarsallad', description: 'kycklingfilé' },
      'sezonska-salata-mix': { name: 'Säsongens blandade sallad' },
      'kupus-salata': { name: 'Vitkålssallad' },
      'krastavci-u-vrhnju': { name: 'Gurka i gräddfil' },
      'cikla-karamelizirani-luk': { name: 'Rödbeta och karamelliserad lök' },
      'hobotnica-ispod-peke-uz-prilog': {
        name: 'Bläckfisk under peka med tillbehör',
      },
      'prvosvibanjska-salata-od-skuse': { name: 'Makrillsallad' },
      'prvosvibanjske-lignje-frigane': { name: 'Friterad bläckfisk' },
      'prvosvibanjske-lignje-na-zaru': { name: 'Grillad bläckfisk' },
      'prvosvibanjski-losos-grill': { name: 'Grillad lax' },
      'prvosvibanjski-arancini-crni-rizot-sipa': {
        name: 'Arancini på svart risotto med bläckfisk',
        description: 'hembakade arancini med svart risotto och bläckfisk',
      },
      'prvosvibanjske-dagnje-1kg': { name: 'Musslor 1 kg' },
      'prvosvibanjska-dalmatinska-pasticada': {
        name: 'Dalmatisk pašticada',
        description: 'traditionell dalmatisk nötköttsrätt',
      },
      'prvosvibanjska-porketa': {
        name: 'Porchetta',
        description: 'rullat fläsk serverat med hembakat bröd',
      },
      'produzena-kava': { name: 'Lång kaffe' },
      espresso: { name: 'Espresso' },
      'kava-s-mlijekom-slagom': { name: 'Kaffe med mjölk / vispgrädde' },
      cappuccino: { name: 'Cappuccino' },
      'bijela-kava': { name: 'Kaffe med mjölk' },
      'latte-macchiato': { name: 'Latte macchiato' },
      nescafe: { name: 'Nescafé' },
      caj: { name: 'Te' },
      'instant-cappuccino': { name: 'Instant cappuccino' },
      'ice-latte': { name: 'Iced latte' },
      'ice-latte-matcha': { name: 'Iced matcha latte' },
      'ice-latte-matcha-s-okusom': { name: 'Iced matcha latte med smak' },
      'espresso-tonic': { name: 'Espresso tonic' },
      affogato: { name: 'Affogato' },
      'irish-baileys-coffee': { name: 'Irish / Baileys coffee' },
      'ice-coffee': { name: 'Iskaffe' },
      'topla-cokolada': { name: 'Varm choklad' },
      'romerquelle-negazirana-033': { name: 'Römerquelle stilla 0,33 l' },
      'romerquelle-gazirana-033': { name: 'Römerquelle kolsyrat 0,33 l' },
      'romerquelle-negazirana-075': { name: 'Römerquelle stilla 0,75 l' },
      'romerquelle-gazirana-075': { name: 'Römerquelle kolsyrat 0,75 l' },
      'romerquelle-limunska-trava': { name: 'Römerquelle citrongräs' },
      'coca-cola-025': { name: 'Coca-Cola 0,25 l' },
      'coca-cola-zero-025': { name: 'Coca-Cola Zero 0,25 l' },
      'fanta-025': { name: 'Fanta 0,25 l' },
      'sprite-025': { name: 'Sprite 0,25 l' },
      'schweppes-tonic-025': { name: 'Schweppes Tonic 0,25 l' },
      'schweppes-bitter-lemon-025': {
        name: 'Schweppes Bitter Lemon 0,25 l',
      },
      'schweppes-tangerina-025': { name: 'Schweppes Tangerina 0,25 l' },
      'thomas-henry-spicy-ginger-beer-020': {
        name: 'Thomas Henry Spicy Ginger Beer 0,20 l',
      },
      'cedevita-limun': { name: 'Cedevita citron' },
      'cedevita-naranca': { name: 'Cedevita apelsin' },
      'hidra-limun-050': { name: 'Hidra citron 0,50 l' },
      'hidra-naranca-050': { name: 'Hidra apelsin 0,50 l' },
      'hidra-ananas-limeta-050': { name: 'Hidra ananas-lime 0,50 l' },
      'ledeni-caj-breskva': { name: 'Iste persika' },
      'ledeni-caj-sumsko-voce': { name: 'Iste skogsbär' },
      'pago-jabuka-020': { name: 'Pago äpple 0,20 l' },
      'pago-naranca-020': { name: 'Pago apelsin 0,20 l' },
      'pago-visnja-020': { name: 'Pago surkörsbär 0,20 l' },
      'pago-marelica-020': { name: 'Pago aprikos 0,20 l' },
      'pago-ananas-020': { name: 'Pago ananas 0,20 l' },
      'pago-crni-ribiz-020': { name: 'Pago svarta vinbär 0,20 l' },
      'ozujsko-toceno-030': { name: 'Ožujsko fatöl 0,30 l' },
      'ozujsko-toceno-050': { name: 'Ožujsko fatöl 0,50 l' },
      'ozujsko-033': { name: 'Ožujsko 0,33 l' },
      'stella-033': { name: 'Stella 0,33 l' },
      'becks-033': { name: 'Beck’s 0,33 l' },
      'tomislav-050': { name: 'Tomislav 0,50 l' },
      'vukovarsko-050': { name: 'Vukovarsko 0,50 l' },
      'ozujsko-radler-limun-050': { name: 'Ožujsko Radler citron 0,50 l' },
      'somersby-jabuka': { name: 'Somersby äpple' },
      'somersby-kruska': { name: 'Somersby päron' },
      'somersby-00-jagoda-limeta': { name: 'Somersby 0.0 jordgubb-lime' },
      'radla-030': { name: 'Radler 0,30 l' },
      'radla-050': { name: 'Radler 0,50 l' },
      'mis-mas-030': { name: 'Miš-maš 0,30 l' },
      'mis-mas-050': { name: 'Miš-maš 0,50 l' },
      'bambus-030': { name: 'Bambus 0,30 l' },
      'bambus-050': { name: 'Bambus 0,50 l' },
      'malvazija-1dcl': { name: 'Malvazija 1 dcl' },
      'peljesac-1dcl': { name: 'Pelješac 1 dcl' },
      'rose-benkovac-1dcl': { name: 'Rosé Benkovac 1 dcl' },
      'dalmatinski-prosek-1dcl': { name: 'Dalmatisk prošek 1 dcl' },
      'muskat-bric-1dcl': { name: 'Muškat BRIČ 1 dcl' },
      'zlatan-posip-075': { name: 'Zlatan Pošip 0,75 l' },
      'galic-sauvignon-blanc-075': { name: 'Galić Sauvignon Blanc 0,75 l' },
      'muskat-bric-075': { name: 'Muškat BRIČ 0,75 l' },
      'korta-katarina-rose-075': { name: 'Korta Katarina Rosé 0,75 l' },
      'zlatan-plavac-075': { name: 'Zlatan Plavac 0,75 l' },
      'zlatan-crljenak-075': { name: 'Zlatan Crljenak 0,75 l' },
      'prosecco-1dcl': { name: 'Prosecco 1 dcl' },
      'prosecco-075': { name: 'Prosecco 0,75 l' },
      'pelinkovac-dalmacija': { name: 'Pelinkovac Dalmacija' },
      'pelinkovac-antik': { name: 'Pelinkovac Antique' },
      'dalmatinski-prosek': { name: 'Dalmatisk prošek' },
      'sibenska-travarica': { name: 'Šibenik travarica' },
      'williams-viljamovka': { name: 'Williams päronbrännvin' },
      'maraska-visnjevac': { name: 'Maraska surkörsbärslikör' },
      'maraska-orahovac': { name: 'Maraska valnötslikör' },
      'teranino-korlat': { name: 'Teranino Korlat' },
      jagermeister: { name: 'Jägermeister' },
      limoncello: { name: 'Limoncello' },
      baileys: { name: 'Baileys' },
      aperol: { name: 'Aperol' },
      campari: { name: 'Campari' },
      'martini-bianco': { name: 'Martini Bianco' },
      'martini-rosso': { name: 'Martini Rosso' },
      jameson: { name: 'Jameson' },
      'jim-beam': { name: 'Jim Beam' },
      hennessy: { name: 'Hennessy' },
      'smirnoff-vodka': { name: 'Smirnoff Vodka' },
      'sierra-tequila': { name: 'Sierra Tequila' },
      'bacardi-white': { name: 'Bacardi White' },
      'bacardi-black': { name: 'Bacardi Black' },
      malibu: { name: 'Malibu' },
      'sax-gin': { name: 'SAX Gin' },
      'bulldog-gin': { name: 'Bulldog Gin' },
      'hendricks-gin': { name: 'Hendrick’s Gin' },
      'aperol-spritz': {
        name: 'Aperol Spritz',
        description: 'Aperol, prosecco, soda, apelsin',
      },
      hugo: {
        name: 'Hugo',
        description: 'prosecco, fläder, soda, lime, mynta',
      },
      mojito: {
        name: 'Mojito',
        description: 'ljus rom, lime, mynta, sockerlag, soda',
      },
      'gin-tonic': {
        name: 'Gin Tonic',
        description: 'gin, tonic, citrus',
      },
      'cuba-libre': {
        name: 'Cuba Libre',
        description: 'rom, Coca-Cola, lime',
      },
      'moscow-mule': {
        name: 'Moscow Mule',
        description: 'vodka, kryddig ingefärsöl, lime',
      },
      'espresso-martini': {
        name: 'Espresso Martini',
        description: 'vodka, Kahlúa, espresso',
      },
      negroni: {
        name: 'Negroni',
        description: 'gin, Campari, Martini Rosso',
      },
      'mojito-strawberry-passion': {
        name: 'Strawberry / Passion Mojito',
        description: 'ljus rom, lime, mynta, jordgubb eller passionsfrukt',
      },
      'limoncello-spritz': {
        name: 'Limoncello Spritz',
        description: 'limoncello, prosecco, soda, citrus',
      },
      'london-mule': {
        name: 'London Mule',
        description: 'gin, kryddig ingefärsöl, lime',
      },
      'my-favourite-spritz': {
        name: 'My Favourite Spritz',
        description: 'Malibu, passionsfruktspuré, prosecco, citrusmix',
      },
      'karamello-espresso-martini': {
        name: 'Karamello Espresso Martini',
        description: 'vodka, Kahlúa, espresso, karamell',
      },
      'malibu-passion': {
        description: 'Malibu, passionsfrukt, lime, juice',
      },
      'tequila-sunrise': {
        description: 'tequila, apelsin, fruktsirap',
      },
      'val-putnika-spritz': {
        description: 'Aperol, prosecco, soda, citrus, medelhavsörter',
      },
      'baska-breeze': {
        description: 'gin, fläder, tonic, lime, aromatiska örter',
      },
      'st-nicholas-sour': {
        description: 'whiskey, lime, sockerlag, äggvitesirap',
      },
      'karamel-espresso-martini': {
        name: 'Caramel Espresso Martini',
        description: 'vodka, Kahlúa, espresso, karamell',
      },
    },
  },
  no: {
    story: {
      title: 'Vår historie ved bordet',
      paragraphs: [
        'På Bistro Putnik tar vi vare på kroatiske oppskrifter, skikker og gjestfrihet. Menyen samler kjente lokale smaker, tradisjonell tilberedning og middelhavsånden i Baška Voda.',
        'Til utvalgte retter serverer vi vårt husbrød, laget med omtanke. Vi velger råvarer bevisst og samarbeider, når det er mulig, med lokale kroatiske leverandører.',
      ],
      closing: 'Enkelt, ærlig og fullt av smaker som føles nær hjemmet.',
    },
    pages: {
      food: 'Mat',
      'special-order': 'På forhåndsbestilling',
      drinks: 'Drikke',
      'wines-spirits-cocktails': 'Vin, brennevin og cocktails',
    },
    pageIntro: {
      'special-order':
        'Tilgjengelig ved forhåndsbestilling minst 24 timer i forveien, med avtalt antall gjester.',
    },
    pageClosing: {
      'special-order':
        'For større grupper og spesielle anledninger anbefaler vi gjerne serveringsmåte og sesongens tilbehør.',
    },
    sections: {
      'hladna-predjela': 'Kalde forretter',
      juhe: 'Supper',
      'tjestenine-rizoti': 'Pasta og risotto',
      'arancini-putnik': 'Putnik-arancini',
      'grill-mesna-jela': 'Grill- og kjøttretter',
      'dalmatinski-specijaliteti': 'Dalmatiske spesialiteter',
      'pohana-jela': 'Panerte retter',
      'riba-morska-jela': 'Fisk og sjømat',
      'vegetarijansko-vegansko': 'Vegetarisk og vegansk',
      'djecji-meni': 'Barnemeny',
      'salate-kao-obrok': 'Mettende salater',
      salate: 'Salater',
      'posebna-priprema': 'PEKA',
      'topli-napitci': 'Kaffe og varme drikker',
      vode: 'Vann',
      'bezalkoholna-pica': 'Alkoholfri drikke',
      'sokovi-ledeni-cajevi': 'Juice og iste',
      'piva-cider': 'Øl og cider',
      'mix-pica': 'Blandingsdrikker',
      'vina-na-case': 'Vin på glass',
      'vina-u-boci': 'Premiumviner',
      pjenusci: 'Musserende vin',
      'aperitivi-rakije-likeri': 'Aperitiffer, rakija og likører',
      'whiskey-cognac-zestoka': 'Whiskey, cognac og annet brennevin',
      gin: 'Gin',
      kokteli: 'Cocktails',
    },
    sectionNotes: {
      'salate-kao-obrok': 'serveres med varmt husbrød',
    },
    notices: {
      'prices-eur': 'Alle priser er oppgitt i euro (€).',
      'vat-included': 'MVA er inkludert i prisen.',
      'allergen-on-request': 'Detaljert allergeninformasjon er tilgjengelig på forespørsel.',
      'ask-staff-ingredients':
        'Spør personalet om informasjon om ingredienser og allergener.',
      'frozen-products':
        'Noen retter kan inneholde frosne produkter, avhengig av tilgjengelighet og sesong.',
      'offer-changes':
        'Vi forbeholder oss retten til å justere tilbudet etter råvarenes tilgjengelighet.',
      'allergen-warning':
        'Allergeninformasjon følger standardoppskrift og tilgjengelige data. Siden tilberedning, sesong, leverandører og spor av allergener kan variere, ber vi deg spørre personalet før bestilling.',
      'bread-gluten': 'Husbrød inneholder gluten (G).',
    },
    allergens: {
      G: 'Kornslag som inneholder gluten: hvete, rug, bygg, havre, spelt, khorasan-hvete eller hybrider',
      R: 'Krepsdyr og produkter av krepsdyr',
      J: 'Egg og produkter av egg',
      RI: 'Fisk og fiskeprodukter',
      K: 'Peanøtter og produkter av peanøtter',
      S: 'Soyabønner og soyaprodukter',
      M: 'Melk og melkeprodukter (inkludert laktose)',
      O: 'Nøtter: mandler, hasselnøtter, valnøtter, cashewnøtter, pekannøtter, paranøtter, pistasjnøtter, macadamia- eller queenslandnøtter',
      C: 'Selleri og produkter av selleri',
      GU: 'Sennep og produkter av sennep',
      SE: 'Sesamfrø og produkter av sesamfrø',
      'SO₂': 'Svoveldioksid og sulfitter over 10 mg/kg eller 10 mg/l som total SO₂',
      L: 'Lupin og produkter av lupin',
      ME: 'Bløtdyr og produkter av bløtdyr',
    },
    items: {
      'slavonska-plata': {
        name: 'Slavonsk spekefat',
        description:
          'Slavonsk skinke, kulen, bacon, svor, kumelksost, syltede grønnsaker og husbrød',
      },
      'dalmatinska-plata': {
        name: 'Dalmatisk spekefat',
        description: 'Prosciutto, buđola, geitost, oliven og husbrød',
      },
      'riblja-plata': {
        name: 'Fiskefat',
        description: 'Makrellfilet, ansjos, blekksprutsalat, Pag-ost og husbrød',
      },
      'pate-mix': {
        name: 'Patétrio',
        description: 'Tre huspatéer: kylling, tunfisk og vegetarisk, med husbrød',
      },
      porchetta: {
        name: 'Porchetta',
        description: 'Italiensk rullet svin, servert med husbrød og salat',
      },
      'krem-juha-od-rajcice': { name: 'Kremet tomatsuppe' },
      'krem-juha-od-celera-i-kokosa': { name: 'Kremet selleri- og kokossuppe' },
      'bistra-riblja-juha': { name: 'Klar fiskesuppe' },
      'bistra-goveda-juha': { name: 'Klar oksekjøttsuppe' },
      bolognese: { name: 'Bolognese' },
      carbonara: { name: 'Carbonara' },
      'lazagne-bolognese': { name: 'Lasagne bolognese' },
      'zelene-tagliatelle-s-morskim-plodovima': {
        name: 'Grønn tagliatelle med sjømat',
      },
      'arancini-od-crnog-rizota': {
        name: 'Arancini med svart risotto og blekksprut',
        description: 'huslagde arancini med svart risotto og blekksprut',
      },
      'vege-arancini': { name: 'Vegetariske arancini', description: 'vegetarisk' },
      'cevapi-uz-dollar-chips-i-vrhnje': {
        name: 'Ćevapi med dollar chips og rømme',
      },
      'punjena-pljeskavica-uz-dollar-chips-i-vrhnje': {
        name: 'Rullede kjøttkaker i bacon med dollar chips og rømme',
      },
      'dvije-kobasice-uz-krumpir-s-povrcem': {
        name: 'Slavonsk hjemmelaget grillpølse med poteter og grønnsaker',
      },
      'pileci-file-uz-dollar-chips': { name: 'Kyllingfilet med dollar chips' },
      'ramstek-uz-krumpir-i-wok-povrce': {
        name: 'Rump steak med poteter og wokgrønnsaker',
      },
      'biftek-uz-krumpir-i-wok-povrce': {
        name: 'Oksefilet med poteter og wokgrønnsaker',
      },
      'dalmatinska-pasticada': {
        name: 'Dalmatisk pašticada',
        description: 'tradisjonell dalmatisk oksekjøttrett med husets tilbehør',
      },
      'pileci-becki-uz-prilog': { name: 'Kyllingschnitzel med tilbehør' },
      'svinjski-becki-uz-prilog': { name: 'Svineschnitzel med tilbehør' },
      'teleci-becki-uz-prilog': { name: 'Kalveschnitzel med tilbehør' },
      'pileci-punjeni-odrezak-uz-prilog': { name: 'Fylt kyllingschnitzel med tilbehør' },
      'svinjski-punjeni-odrezak-uz-prilog': { name: 'Fylt svineschnitzel med tilbehør' },
      'teleci-punjeni-odrezak-uz-prilog': { name: 'Fylt kalveschnitzel med tilbehør' },
      'lignje-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grillet blekksprut med mangold og poteter',
      },
      'lignje-przene-s-pommesom': { name: 'Fritert blekksprut med pommes frites' },
      'bijela-riba-na-grillu': {
        name: 'Grillet hvit fisk',
        description: 'dorade, havabbor · mangold og poteter',
      },
      'losos-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grillet laks med mangold og poteter',
      },
      'tuna-steak-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grillet tunfiskbiff med mangold og poteter',
      },
      'dagnje-na-buzaru': {
        name: 'Blåskjell i tradisjonell buzara 1 kg',
        description: 'tradisjonelle dalmatiske blåskjell i hvitvin, hvitløk og persille',
      },
      arabiata: { name: 'Arrabbiata', description: 'vegansk' },
      'aglio-olio': { name: 'Aglio e olio', description: 'vegansk' },
      'steak-od-karfiola': { name: 'Blomkålsteak', description: 'vegansk' },
      'tofu-steak': { name: 'Tofusteak', description: 'vegansk' },
      'vege-salata': { name: 'Grønnsakssalat', description: 'tofusteak · vegansk' },
      'pileci-nuggets-pommes': { name: 'Kyllingnuggets + pommes frites' },
      'mali-bolognese': { name: 'Liten bolognese' },
      'mali-cevapi-uz-dollar-chips-i-vrhnje': {
        name: 'Små ćevapi med dollar chips og rømme',
      },
      'salata-od-skuse-tunjevine': { name: 'Makrell- / tunfisksalat' },
      'slavonska-salata': { name: 'Slavonsk salat', description: 'grillet bacon' },
      'cezar-salata': { name: 'Caesarsalat', description: 'kyllingfilet' },
      'sezonska-salata-mix': { name: 'Sesongens blandede salat' },
      'kupus-salata': { name: 'Kålsalat' },
      'krastavci-u-vrhnju': { name: 'Agurk i rømme' },
      'cikla-karamelizirani-luk': { name: 'Rødbete og karamellisert løk' },
      'hobotnica-ispod-peke-uz-prilog': { name: 'Blekksprut under peka med tilbehør' },
      'produzena-kava': { name: 'Lang kaffe' },
      'kava-s-mlijekom-slagom': { name: 'Kaffe med melk / krem' },
      'bijela-kava': { name: 'Kaffe med melk' },
      caj: { name: 'Te' },
      'instant-cappuccino': { name: 'Instant cappuccino' },
      'ice-latte': { name: 'Iced latte' },
      'ice-latte-matcha-s-okusom': { name: 'Iced matcha latte med smak' },
      'ice-latte-matcha': { name: 'Iced matcha latte' },
      'irish-baileys-coffee': { name: 'Irish / Baileys coffee' },
      'ice-coffee': { name: 'Iskaffe' },
      'topla-cokolada': { name: 'Varm sjokolade' },
      'romerquelle-negazirana-033': { name: 'Römerquelle uten kullsyre 0,33 l' },
      'romerquelle-gazirana-033': { name: 'Römerquelle med kullsyre 0,33 l' },
      'romerquelle-negazirana-075': { name: 'Römerquelle uten kullsyre 0,75 l' },
      'romerquelle-gazirana-075': { name: 'Römerquelle med kullsyre 0,75 l' },
      'romerquelle-limunska-trava': { name: 'Römerquelle sitrongress' },
      'cedevita-limun': { name: 'Cedevita sitron' },
      'cedevita-naranca': { name: 'Cedevita appelsin' },
      'hidra-limun-050': { name: 'Hidra sitron 0,50 l' },
      'hidra-naranca-050': { name: 'Hidra appelsin 0,50 l' },
      'hidra-ananas-limeta-050': { name: 'Hidra ananas-lime 0,50 l' },
      'ledeni-caj-breskva': { name: 'Iste fersken' },
      'ledeni-caj-sumsko-voce': { name: 'Iste skogsbær' },
      'pago-jabuka-020': { name: 'Pago eple 0,20 l' },
      'pago-naranca-020': { name: 'Pago appelsin 0,20 l' },
      'pago-visnja-020': { name: 'Pago surkirsebær 0,20 l' },
      'pago-marelica-020': { name: 'Pago aprikos 0,20 l' },
      'pago-ananas-020': { name: 'Pago ananas 0,20 l' },
      'pago-crni-ribiz-020': { name: 'Pago solbær 0,20 l' },
      'ozujsko-toceno-030': { name: 'Ožujsko fatøl 0,30 l' },
      'ozujsko-toceno-050': { name: 'Ožujsko fatøl 0,50 l' },
      'ozujsko-radler-limun-050': { name: 'Ožujsko Radler sitron 0,50 l' },
      'somersby-jabuka': { name: 'Somersby eple' },
      'somersby-kruska': { name: 'Somersby pære' },
      'somersby-00-jagoda-limeta': { name: 'Somersby 0.0 jordbær-lime' },
      'radla-030': { name: 'Radler 0,30 l' },
      'radla-050': { name: 'Radler 0,50 l' },
      'dalmatinski-prosek-1dcl': { name: 'Dalmatisk prošek 1 dcl' },
      'sibenska-travarica': { name: 'Šibenik urtebrennevin' },
      'williams-viljamovka': { name: 'Williams pærebrennevin' },
      'maraska-visnjevac': { name: 'Maraska kirsebærlikør' },
      'maraska-orahovac': { name: 'Maraska valnøttlikør' },
      'dalmatinski-prosek': { name: 'Dalmatisk prošek' },
      'aperol-spritz': { description: 'Aperol, prosecco, soda, appelsin' },
      hugo: { description: 'prosecco, hylleblomst, soda, lime, mynte' },
      mojito: { description: 'lys rom, lime, mynte, sukkersirup, soda' },
      'gin-tonic': { description: 'gin, tonic, sitrus' },
      'cuba-libre': { description: 'rom, Coca-Cola, lime' },
      'moscow-mule': { description: 'vodka, krydret ingefærøl, lime' },
      'mojito-strawberry-passion': {
        description: 'lys rom, lime, mynte, jordbær eller pasjonsfrukt',
      },
      'limoncello-spritz': { description: 'limoncello, prosecco, soda, sitrus' },
      'london-mule': { description: 'gin, krydret ingefærøl, lime' },
      'my-favourite-spritz': {
        description: 'Malibu, pasjonsfruktpuré, prosecco, sitrusmiks',
      },
      'karamello-espresso-martini': {
        description: 'vodka, Kahlúa, espresso, karamell',
      },
    },
  },
  pl: {
    story: {
      title: 'Nasza historia przy stole',
      paragraphs: [
        'W Bistro Putnik pielęgnujemy chorwackie przepisy, zwyczaje i gościnność. Nasze menu łączy znajome lokalne smaki, tradycyjne przygotowanie i śródziemnomorski charakter Baškiej Vody.',
        'Do wybranych dań podajemy nasze pieczywo, przygotowywane z troską. Składniki wybieramy uważnie i, gdy to możliwe, współpracujemy z lokalnymi chorwackimi dostawcami.',
      ],
      closing: 'Prosto, szczerze i z pełnią smaków, które przypominają dom.',
    },
    pages: {
      food: 'Jedzenie',
      'special-order': 'Na zamówienie',
      drinks: 'Napoje',
      'wines-spirits-cocktails': 'Wina, alkohole i koktajle',
    },
    pageIntro: {
      'special-order':
        'Dostępne na wcześniejsze zamówienie, co najmniej 24 godziny wcześniej, po uzgodnieniu liczby gości.',
    },
    pageClosing: {
      'special-order':
        'Dla większych grup i szczególnych okazji chętnie doradzimy sposób podania oraz sezonowe dodatki.',
    },
    sections: {
      'hladna-predjela': 'Zimne przystawki',
      juhe: 'Zupy',
      'tjestenine-rizoti': 'Makarony i risotta',
      'arancini-putnik': 'Arancini Putnik',
      'grill-mesna-jela': 'Grill i dania mięsne',
      'dalmatinski-specijaliteti': 'Specjały dalmatyńskie',
      'pohana-jela': 'Dania panierowane',
      'riba-morska-jela': 'Ryby i owoce morza',
      'vegetarijansko-vegansko': 'Wegetariańskie i wegańskie',
      'djecji-meni': 'Menu dziecięce',
      'salate-kao-obrok': 'Sałatki jako danie',
      salate: 'Sałatki',
      'posebna-priprema': 'PEKA',
      'topli-napitci': 'Kawy i gorące napoje',
      vode: 'Woda',
      'bezalkoholna-pica': 'Napoje bezalkoholowe',
      'sokovi-ledeni-cajevi': 'Soki i herbaty mrożone',
      'piva-cider': 'Piwo i cydr',
      'mix-pica': 'Napoje mieszane',
      'vina-na-case': 'Wina na kieliszki',
      'vina-u-boci': 'Wina premium',
      pjenusci: 'Wina musujące',
      'aperitivi-rakije-likeri': 'Aperitify, rakije i likiery',
      'whiskey-cognac-zestoka': 'Whiskey, koniak i inne alkohole',
      gin: 'Gin',
      kokteli: 'Koktajle',
    },
    sectionNotes: {
      'salate-kao-obrok': 'podawane z ciepłym pieczywem firmowym',
    },
    notices: {
      'prices-eur': 'Wszystkie ceny podane są w euro (€).',
      'vat-included': 'VAT jest wliczony w cenę.',
      'allergen-on-request': 'Szczegółowe informacje o alergenach są dostępne na życzenie.',
      'ask-staff-ingredients':
        'W sprawie składników i alergenów prosimy zapytać obsługę.',
      'frozen-products':
        'Niektóre dania mogą zawierać produkty mrożone, zależnie od dostępności i sezonu.',
      'offer-changes':
        'Zastrzegamy sobie prawo do zmiany oferty w zależności od dostępności składników.',
      'allergen-warning':
        'Informacje o alergenach opierają się na standardowej recepturze i dostępnych danych. Ponieważ przygotowanie, sezon, dostawcy i śladowe ilości alergenów mogą się różnić, prosimy zapytać obsługę przed zamówieniem.',
      'bread-gluten': 'Pieczywo firmowe zawiera gluten (G).',
    },
    allergens: {
      G: 'Zboża zawierające gluten: pszenica, żyto, jęczmień, owies, orkisz, pszenica khorasan lub ich odmiany hybrydowe',
      R: 'Skorupiaki i produkty pochodne',
      J: 'Jaja i produkty pochodne',
      RI: 'Ryby i produkty pochodne',
      K: 'Orzeszki ziemne i produkty pochodne',
      S: 'Soja i produkty pochodne',
      M: 'Mleko i produkty mleczne (w tym laktoza)',
      O: 'Orzechy: migdały, orzechy laskowe, włoskie, nerkowce, pekan, brazylijskie, pistacje, makadamia lub orzechy Queensland',
      C: 'Seler i produkty pochodne',
      GU: 'Gorczyca i produkty pochodne',
      SE: 'Nasiona sezamu i produkty pochodne',
      'SO₂': 'Dwutlenek siarki i siarczyny powyżej 10 mg/kg lub 10 mg/l jako całkowite SO₂',
      L: 'Łubin i produkty pochodne',
      ME: 'Mięczaki i produkty pochodne',
    },
    items: {
      'slavonska-plata': {
        name: 'Półmisek slawoński',
        description:
          'Szynka slawońska, kulen, boczek, skwarki, ser krowi, marynowane warzywa i pieczywo firmowe',
      },
      'dalmatinska-plata': {
        name: 'Półmisek dalmatyński',
        description: 'Prosciutto, buđola, ser kozi, oliwki i pieczywo firmowe',
      },
      'riblja-plata': {
        name: 'Półmisek rybny',
        description: 'Filet z makreli, anchois, sałatka z ośmiornicy, ser z Pagu i pieczywo firmowe',
      },
      'pate-mix': {
        name: 'Trio pasztetów',
        description: 'Trzy pasztety domowe: drobiowy, tuńczykowy i wegetariański, z pieczywem firmowym',
      },
      porchetta: {
        name: 'Porchetta',
        description: 'Rolowana wieprzowina po włosku, podawana z pieczywem firmowym i sałatą',
      },
      'krem-juha-od-rajcice': { name: 'Krem z pomidorów' },
      'krem-juha-od-celera-i-kokosa': { name: 'Krem z selera i kokosa' },
      'bistra-riblja-juha': { name: 'Klarowna zupa rybna' },
      'bistra-goveda-juha': { name: 'Klarowna zupa wołowa' },
      'zelene-tagliatelle-s-morskim-plodovima': {
        name: 'Zielone tagliatelle z owocami morza',
      },
      'arancini-od-crnog-rizota': {
        name: 'Arancini z czarnego risotta i sepii',
        description: 'domowe arancini z czarnego risotta i sepii',
      },
      'vege-arancini': { name: 'Arancini wegetariańskie', description: 'wegetariańskie' },
      'cevapi-uz-dollar-chips-i-vrhnje': {
        name: 'Ćevapi z dollar chips i kwaśną śmietaną',
      },
      'punjena-pljeskavica-uz-dollar-chips-i-vrhnje': {
        name: 'Rolowane kotleciki mięsne w boczku z dollar chips i kwaśną śmietaną',
      },
      'dvije-kobasice-uz-krumpir-s-povrcem': {
        name: 'Domowa slawońska kiełbasa z grilla z ziemniakami i warzywami',
      },
      'pileci-file-uz-dollar-chips': { name: 'Filet z kurczaka z dollar chips' },
      'ramstek-uz-krumpir-i-wok-povrce': {
        name: 'Rostbef z ziemniakami i warzywami z woka',
      },
      'biftek-uz-krumpir-i-wok-povrce': {
        name: 'Polędwica wołowa z ziemniakami i warzywami z woka',
      },
      'dalmatinska-pasticada': {
        name: 'Dalmatyńska pašticada',
        description: 'tradycyjne dalmatyńskie danie wołowe z domowymi dodatkami',
      },
      'pileci-becki-uz-prilog': { name: 'Sznycel z kurczaka z dodatkiem' },
      'svinjski-becki-uz-prilog': { name: 'Sznycel wieprzowy z dodatkiem' },
      'teleci-becki-uz-prilog': { name: 'Sznycel cielęcy z dodatkiem' },
      'pileci-punjeni-odrezak-uz-prilog': { name: 'Faszerowany sznycel z kurczaka z dodatkiem' },
      'svinjski-punjeni-odrezak-uz-prilog': { name: 'Faszerowany sznycel wieprzowy z dodatkiem' },
      'teleci-punjeni-odrezak-uz-prilog': { name: 'Faszerowany sznycel cielęcy z dodatkiem' },
      'lignje-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grillowane kalmary z boćwiną i ziemniakami',
      },
      'lignje-przene-s-pommesom': { name: 'Smażone kalmary z frytkami' },
      'bijela-riba-na-grillu': {
        name: 'Grillowana biała ryba',
        description: 'dorada, labraks · boćwina i ziemniaki',
      },
      'losos-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grillowany łosoś z boćwiną i ziemniakami',
      },
      'tuna-steak-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grillowany stek z tuńczyka z boćwiną i ziemniakami',
      },
      'dagnje-na-buzaru': {
        name: 'Małże w tradycyjnej buzara 1 kg',
        description: 'tradycyjne dalmatyńskie małże w białym winie, czosnku i pietruszce',
      },
      arabiata: { name: 'Arrabbiata', description: 'wegańskie' },
      'aglio-olio': { name: 'Aglio e olio', description: 'wegańskie' },
      'steak-od-karfiola': { name: 'Stek z kalafiora', description: 'wegańskie' },
      'tofu-steak': { name: 'Stek z tofu', description: 'wegańskie' },
      'vege-salata': { name: 'Sałatka warzywna', description: 'stek z tofu · wegańskie' },
      'pileci-nuggets-pommes': { name: 'Nuggetsy z kurczaka + frytki' },
      'mali-bolognese': { name: 'Małe bolognese' },
      'mali-cevapi-uz-dollar-chips-i-vrhnje': {
        name: 'Małe ćevapi z dollar chips i kwaśną śmietaną',
      },
      'salata-od-skuse-tunjevine': { name: 'Sałatka z makreli / tuńczyka' },
      'slavonska-salata': { name: 'Sałatka slawońska', description: 'grillowany boczek' },
      'cezar-salata': { name: 'Sałatka Cezar', description: 'filet z kurczaka' },
      'sezonska-salata-mix': { name: 'Sezonowa sałatka mieszana' },
      'kupus-salata': { name: 'Sałatka z kapusty' },
      'krastavci-u-vrhnju': { name: 'Ogórki w kwaśnej śmietanie' },
      'cikla-karamelizirani-luk': { name: 'Burak i karmelizowana cebula' },
      'hobotnica-ispod-peke-uz-prilog': { name: 'Ośmiornica spod peki z dodatkiem' },
      'produzena-kava': { name: 'Przedłużana kawa' },
      'ice-latte': { name: 'Latte mrożone' },
      'ice-latte-matcha': { name: 'Matcha latte mrożone' },
      'ice-latte-matcha-s-okusom': { name: 'Matcha latte mrożone smakowe' },
      'instant-cappuccino': { name: 'Cappuccino instant' },
      'espresso-tonic': { name: 'Espresso tonic' },
      'kava-s-mlijekom-slagom': { name: 'Kawa z mlekiem / bitą śmietaną' },
      'bijela-kava': { name: 'Kawa z mlekiem' },
      caj: { name: 'Herbata' },
      'ice-coffee': { name: 'Kawa mrożona' },
      'topla-cokolada': { name: 'Gorąca czekolada' },
      'romerquelle-negazirana-033': { name: 'Römerquelle niegazowana 0,33 l' },
      'romerquelle-gazirana-033': { name: 'Römerquelle gazowana 0,33 l' },
      'romerquelle-negazirana-075': { name: 'Römerquelle niegazowana 0,75 l' },
      'romerquelle-gazirana-075': { name: 'Römerquelle gazowana 0,75 l' },
      'romerquelle-limunska-trava': { name: 'Römerquelle trawa cytrynowa' },
      'cedevita-limun': { name: 'Cedevita cytryna' },
      'cedevita-naranca': { name: 'Cedevita pomarańcza' },
      'hidra-limun-050': { name: 'Hidra cytryna 0,50 l' },
      'hidra-naranca-050': { name: 'Hidra pomarańcza 0,50 l' },
      'hidra-ananas-limeta-050': { name: 'Hidra ananas-limonka 0,50 l' },
      'ledeni-caj-breskva': { name: 'Herbata mrożona brzoskwinia' },
      'ledeni-caj-sumsko-voce': { name: 'Herbata mrożona owoce leśne' },
      'pago-jabuka-020': { name: 'Pago jabłko 0,20 l' },
      'pago-naranca-020': { name: 'Pago pomarańcza 0,20 l' },
      'pago-visnja-020': { name: 'Pago wiśnia 0,20 l' },
      'pago-marelica-020': { name: 'Pago morela 0,20 l' },
      'pago-ananas-020': { name: 'Pago ananas 0,20 l' },
      'pago-crni-ribiz-020': { name: 'Pago czarna porzeczka 0,20 l' },
      'ozujsko-toceno-030': { name: 'Ožujsko z beczki 0,30 l' },
      'ozujsko-toceno-050': { name: 'Ožujsko z beczki 0,50 l' },
      'ozujsko-radler-limun-050': { name: 'Ožujsko Radler cytryna 0,50 l' },
      'somersby-jabuka': { name: 'Somersby jabłko' },
      'somersby-kruska': { name: 'Somersby gruszka' },
      'somersby-00-jagoda-limeta': { name: 'Somersby 0.0 truskawka-limonka' },
      'radla-030': { name: 'Radler 0,30 l' },
      'radla-050': { name: 'Radler 0,50 l' },
      'dalmatinski-prosek-1dcl': { name: 'Dalmatyński prošek 1 dcl' },
      'sibenska-travarica': { name: 'Ziołowa rakija z Šibenika' },
      'williams-viljamovka': { name: 'Williams gruszkowica' },
      'maraska-visnjevac': { name: 'Likier wiśniowy Maraska' },
      'maraska-orahovac': { name: 'Likier orzechowy Maraska' },
      'dalmatinski-prosek': { name: 'Dalmatyński prošek' },
      'aperol-spritz': { description: 'Aperol, prosecco, soda, pomarańcza' },
      hugo: { description: 'prosecco, kwiat czarnego bzu, soda, limonka, mięta' },
      mojito: { description: 'biały rum, limonka, mięta, syrop cukrowy, soda' },
      'gin-tonic': { description: 'gin, tonic, cytrusy' },
      'cuba-libre': { description: 'rum, Coca-Cola, limonka' },
      'moscow-mule': { description: 'wódka, pikantne piwo imbirowe, limonka' },
      'mojito-strawberry-passion': {
        description: 'biały rum, limonka, mięta, truskawka lub marakuja',
      },
      'limoncello-spritz': { description: 'limoncello, prosecco, soda, cytrusy' },
      'london-mule': { description: 'gin, pikantne piwo imbirowe, limonka' },
      'my-favourite-spritz': {
        description: 'Malibu, purée z marakui, prosecco, miks cytrusowy',
      },
      'karamello-espresso-martini': {
        description: 'vodka, Kahlúa, espresso, karmel',
      },
    },
  },
  da: {
    story: {
      title: 'Vores historie ved bordet',
      paragraphs: [
        'På Bistro Putnik værner vi om kroatiske opskrifter, traditioner og gæstfrihed. Menuen samler velkendte lokale smage, traditionelle tilberedninger og Baška Vodas middelhavsånd.',
        'Til udvalgte retter serverer vi vores husbrød, tilberedt med omhu. Vi vælger råvarer med omtanke og samarbejder, når det er muligt, med lokale kroatiske leverandører.',
      ],
      closing: 'Enkelt, ærligt og fuldt af smage, der føles tæt på hjemmet.',
    },
    pages: {
      food: 'Mad',
      'special-order': 'Efter forudbestilling',
      drinks: 'Drikkevarer',
      'wines-spirits-cocktails': 'Vin, spiritus og cocktails',
    },
    pageIntro: {
      'special-order':
        'Tilgængeligt ved forudbestilling mindst 24 timer i forvejen, med aftalt antal gæster.',
    },
    pageClosing: {
      'special-order':
        'Til større selskaber og særlige lejligheder anbefaler vi gerne serveringsform og sæsonens tilbehør.',
    },
    sections: {
      'hladna-predjela': 'Kolde forretter',
      juhe: 'Supper',
      'tjestenine-rizoti': 'Pasta og risotto',
      'arancini-putnik': 'Putnik-arancini',
      'grill-mesna-jela': 'Grill- og kødretter',
      'dalmatinski-specijaliteti': 'Dalmatiske specialiteter',
      'pohana-jela': 'Panerede retter',
      'riba-morska-jela': 'Fisk og skaldyr',
      'vegetarijansko-vegansko': 'Vegetarisk og vegansk',
      'djecji-meni': 'Børnemenu',
      'salate-kao-obrok': 'Måltidssalater',
      salate: 'Salater',
      'posebna-priprema': 'PEKA',
      'topli-napitci': 'Kaffe og varme drikke',
      vode: 'Vand',
      'bezalkoholna-pica': 'Alkoholfri drikke',
      'sokovi-ledeni-cajevi': 'Juice og iste',
      'piva-cider': 'Øl og cider',
      'mix-pica': 'Blandede drikke',
      'vina-na-case': 'Vin på glas',
      'vina-u-boci': 'Premiumvine',
      pjenusci: 'Mousserende vin',
      'aperitivi-rakije-likeri': 'Aperitiffer, rakija og likører',
      'whiskey-cognac-zestoka': 'Whiskey, cognac og anden spiritus',
      gin: 'Gin',
      kokteli: 'Cocktails',
    },
    sectionNotes: {
      'salate-kao-obrok': 'serveres med varmt husbrød',
    },
    notices: {
      'prices-eur': 'Alle priser er angivet i euro (€).',
      'vat-included': 'Moms er inkluderet i prisen.',
      'allergen-on-request': 'Detaljerede allergenoplysninger fås på forespørgsel.',
      'ask-staff-ingredients':
        'Spørg personalet om information om ingredienser og allergener.',
      'frozen-products':
        'Nogle retter kan indeholde frosne produkter afhængigt af tilgængelighed og sæson.',
      'offer-changes':
        'Vi forbeholder os retten til at justere tilbuddet efter råvarernes tilgængelighed.',
      'allergen-warning':
        'Allergenoplysninger følger standardopskriften og tilgængelige data. Da tilberedning, sæson, leverandører og spor af allergener kan variere, bedes du spørge personalet før bestilling.',
      'bread-gluten': 'Husbrød indeholder gluten (G).',
    },
    allergens: {
      G: 'Kornsorter, der indeholder gluten: hvede, rug, byg, havre, spelt, khorasan-hvede eller hybridstammer',
      R: 'Krebsdyr og produkter heraf',
      J: 'Æg og produkter heraf',
      RI: 'Fisk og fiskeprodukter',
      K: 'Jordnødder og produkter heraf',
      S: 'Sojabønner og produkter heraf',
      M: 'Mælk og mejeriprodukter (herunder laktose)',
      O: 'Nødder: mandler, hasselnødder, valnødder, cashewnødder, pekannødder, paranødder, pistacienødder, macadamia- eller Queenslandnødder',
      C: 'Selleri og produkter heraf',
      GU: 'Sennep og produkter heraf',
      SE: 'Sesamfrø og produkter heraf',
      'SO₂': 'Svovldioxid og sulfitter over 10 mg/kg eller 10 mg/l som total SO₂',
      L: 'Lupin og produkter heraf',
      ME: 'Bløddyr og produkter heraf',
    },
    items: {
      'slavonska-plata': {
        name: 'Slavonsk tallerken',
        description:
          'Slavonsk skinke, kulen, bacon, flæskesvær, komælksost, syltede grøntsager og husbrød',
      },
      'dalmatinska-plata': {
        name: 'Dalmatisk tallerken',
        description: 'Prosciutto, buđola, gedeost, oliven og husbrød',
      },
      'riblja-plata': {
        name: 'Fisketallerken',
        description: 'Makrelfilet, ansjoser, blækspruttesalat, Pag-ost og husbrød',
      },
      'pate-mix': {
        name: 'Patétrio',
        description: 'Tre slags huspaté: kylling, tun og vegetarisk, med husbrød',
      },
      porchetta: {
        name: 'Porchetta',
        description: 'Italiensk rullet svinekød, serveret med husbrød og salat',
      },
      'krem-juha-od-rajcice': { name: 'Cremet tomatsuppe' },
      'krem-juha-od-celera-i-kokosa': { name: 'Cremet selleri- og kokossuppe' },
      'bistra-riblja-juha': { name: 'Klar fiskesuppe' },
      'bistra-goveda-juha': { name: 'Klar oksekødssuppe' },
      'zelene-tagliatelle-s-morskim-plodovima': {
        name: 'Grøn tagliatelle med skaldyr',
      },
      'arancini-od-crnog-rizota': {
        name: 'Arancini med sort risotto og blæksprutte',
        description: 'hjemmelavede arancini med sort risotto og blæksprutte',
      },
      'vege-arancini': { name: 'Vegetariske arancini', description: 'vegetarisk' },
      'cevapi-uz-dollar-chips-i-vrhnje': {
        name: 'Ćevapi med dollar chips og cremefraiche',
      },
      'punjena-pljeskavica-uz-dollar-chips-i-vrhnje': {
        name: 'Rullede kødbøffer i bacon med dollar chips og cremefraiche',
      },
      'dvije-kobasice-uz-krumpir-s-povrcem': {
        name: 'Slavonsk hjemmelavet grillpølse med kartofler og grøntsager',
      },
      'pileci-file-uz-dollar-chips': { name: 'Kyllingefilet med dollar chips' },
      'ramstek-uz-krumpir-i-wok-povrce': {
        name: 'Rump steak med kartofler og wokgrøntsager',
      },
      'biftek-uz-krumpir-i-wok-povrce': {
        name: 'Oksefilet med kartofler og wokgrøntsager',
      },
      'dalmatinska-pasticada': {
        name: 'Dalmatisk pašticada',
        description: 'traditionel dalmatisk oksekødsret med hjemmelavet tilbehør',
      },
      'pileci-becki-uz-prilog': { name: 'Kyllingeschnitzel med tilbehør' },
      'svinjski-becki-uz-prilog': { name: 'Svineschnitzel med tilbehør' },
      'teleci-becki-uz-prilog': { name: 'Kalveschnitzel med tilbehør' },
      'pileci-punjeni-odrezak-uz-prilog': { name: 'Fyldt kyllingeschnitzel med tilbehør' },
      'svinjski-punjeni-odrezak-uz-prilog': { name: 'Fyldt svineschnitzel med tilbehør' },
      'teleci-punjeni-odrezak-uz-prilog': { name: 'Fyldt kalveschnitzel med tilbehør' },
      'lignje-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grillet blæksprutte med bladbede og kartofler',
      },
      'lignje-przene-s-pommesom': { name: 'Friteret blæksprutte med pommes frites' },
      'bijela-riba-na-grillu': {
        name: 'Grillet hvid fisk',
        description: 'havbrasen, havbars · bladbede og kartofler',
      },
      'losos-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grillet laks med bladbede og kartofler',
      },
      'tuna-steak-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grillet tunsteak med bladbede og kartofler',
      },
      'dagnje-na-buzaru': {
        name: 'Muslinger i traditionel buzara 1 kg',
        description: 'traditionelle dalmatiske muslinger i hvidvin, hvidløg og persille',
      },
      arabiata: { name: 'Arrabbiata', description: 'vegansk' },
      'aglio-olio': { name: 'Aglio e olio', description: 'vegansk' },
      'steak-od-karfiola': { name: 'Blomkålssteak', description: 'vegansk' },
      'tofu-steak': { name: 'Tofusteak', description: 'vegansk' },
      'vege-salata': { name: 'Grøntsagssalat', description: 'tofusteak · vegansk' },
      'pileci-nuggets-pommes': { name: 'Kyllingenuggets + pommes frites' },
      'mali-bolognese': { name: 'Lille bolognese' },
      'mali-cevapi-uz-dollar-chips-i-vrhnje': {
        name: 'Små ćevapi med dollar chips og cremefraiche',
      },
      'salata-od-skuse-tunjevine': { name: 'Makrel- / tunsalat' },
      'slavonska-salata': { name: 'Slavonsk salat', description: 'grillet bacon' },
      'cezar-salata': { name: 'Caesarsalat', description: 'kyllingefilet' },
      'sezonska-salata-mix': { name: 'Sæsonens blandede salat' },
      'kupus-salata': { name: 'Kålsalat' },
      'krastavci-u-vrhnju': { name: 'Agurker i cremefraiche' },
      'cikla-karamelizirani-luk': { name: 'Rødbede og karamelliseret løg' },
      'hobotnica-ispod-peke-uz-prilog': { name: 'Blæksprutte under peka med tilbehør' },
      'produzena-kava': { name: 'Lang kaffe' },
      'ice-latte': { name: 'Islatte' },
      'ice-latte-matcha': { name: 'Ismatcha latte' },
      'ice-latte-matcha-s-okusom': { name: 'Ismatcha latte med smag' },
      'instant-cappuccino': { name: 'Instant cappuccino' },
      'espresso-tonic': { name: 'Espresso tonic' },
      'kava-s-mlijekom-slagom': { name: 'Kaffe med mælk / flødeskum' },
      'bijela-kava': { name: 'Kaffe med mælk' },
      caj: { name: 'Te' },
      'ice-coffee': { name: 'Iskaffe' },
      'topla-cokolada': { name: 'Varm chokolade' },
      'romerquelle-negazirana-033': { name: 'Römerquelle uden brus 0,33 l' },
      'romerquelle-gazirana-033': { name: 'Römerquelle med brus 0,33 l' },
      'romerquelle-negazirana-075': { name: 'Römerquelle uden brus 0,75 l' },
      'romerquelle-gazirana-075': { name: 'Römerquelle med brus 0,75 l' },
      'romerquelle-limunska-trava': { name: 'Römerquelle citrongræs' },
      'cedevita-limun': { name: 'Cedevita citron' },
      'cedevita-naranca': { name: 'Cedevita appelsin' },
      'hidra-limun-050': { name: 'Hidra citron 0,50 l' },
      'hidra-naranca-050': { name: 'Hidra appelsin 0,50 l' },
      'hidra-ananas-limeta-050': { name: 'Hidra ananas-lime 0,50 l' },
      'ledeni-caj-breskva': { name: 'Iste fersken' },
      'ledeni-caj-sumsko-voce': { name: 'Iste skovbær' },
      'pago-jabuka-020': { name: 'Pago æble 0,20 l' },
      'pago-naranca-020': { name: 'Pago appelsin 0,20 l' },
      'pago-visnja-020': { name: 'Pago surkirsebær 0,20 l' },
      'pago-marelica-020': { name: 'Pago abrikos 0,20 l' },
      'pago-ananas-020': { name: 'Pago ananas 0,20 l' },
      'pago-crni-ribiz-020': { name: 'Pago solbær 0,20 l' },
      'ozujsko-toceno-030': { name: 'Ožujsko fadøl 0,30 l' },
      'ozujsko-toceno-050': { name: 'Ožujsko fadøl 0,50 l' },
      'ozujsko-radler-limun-050': { name: 'Ožujsko Radler citron 0,50 l' },
      'somersby-jabuka': { name: 'Somersby æble' },
      'somersby-kruska': { name: 'Somersby pære' },
      'somersby-00-jagoda-limeta': { name: 'Somersby 0.0 jordbær-lime' },
      'radla-030': { name: 'Radler 0,30 l' },
      'radla-050': { name: 'Radler 0,50 l' },
      'dalmatinski-prosek-1dcl': { name: 'Dalmatisk prošek 1 dcl' },
      'sibenska-travarica': { name: 'Šibenik urtesnaps' },
      'williams-viljamovka': { name: 'Williams pærebrændevin' },
      'maraska-visnjevac': { name: 'Maraska kirsebærlikør' },
      'maraska-orahovac': { name: 'Maraska valnøddelikør' },
      'dalmatinski-prosek': { name: 'Dalmatisk prošek' },
      'aperol-spritz': { description: 'Aperol, prosecco, soda, appelsin' },
      hugo: { description: 'prosecco, hyldeblomst, soda, lime, mynte' },
      mojito: { description: 'lys rom, lime, mynte, sukkersirup, soda' },
      'gin-tonic': { description: 'gin, tonic, citrus' },
      'cuba-libre': { description: 'rom, Coca-Cola, lime' },
      'moscow-mule': { description: 'vodka, krydret ingefærøl, lime' },
      'mojito-strawberry-passion': {
        description: 'lys rom, lime, mynte, jordbær eller passionsfrugt',
      },
      'limoncello-spritz': { description: 'limoncello, prosecco, soda, citrus' },
      'london-mule': { description: 'gin, krydret ingefærøl, lime' },
      'my-favourite-spritz': {
        description: 'Malibu, passionsfrugtpuré, prosecco, citrusmix',
      },
      'karamello-espresso-martini': {
        description: 'vodka, Kahlúa, espresso, karamel',
      },
    },
  },
};

const additionalMenuTranslations = {
  de: {
    story: {
      title: 'Unsere Geschichte am Tisch',
      paragraphs: [
        'Im Bistro Putnik pflegen wir kroatische Rezepte, Bräuche und Gastfreundschaft. Unsere Speisekarte verbindet vertraute lokale Aromen, traditionelle Zubereitungen und den mediterranen Geist von Baška Voda.',
        'Zu ausgewählten Gerichten servieren wir unser Hausbrot, mit besonderer Sorgfalt zubereitet. Wir wählen unsere Zutaten bewusst und arbeiten, wann immer möglich, mit lokalen kroatischen Lieferanten.',
      ],
      closing: 'Einfach, ehrlich und voller Aromen, die sich nach Zuhause anfühlen.',
    },
    pages: {
      food: 'Speisen',
      'special-order': 'Auf Vorbestellung',
      drinks: 'Getränke',
      'wines-spirits-cocktails': 'Wein, Spirituosen und Cocktails',
    },
    pageIntro: {
      'special-order':
        'Erhältlich auf Vorbestellung, mindestens 24 Stunden im Voraus, mit vorheriger Absprache der Gästezahl.',
    },
    pageClosing: {
      'special-order':
        'Für größere Gruppen und besondere Anlässe empfehlen wir gerne Servierart und saisonale Beilagen.',
    },
    sections: {
      'hladna-predjela': 'Kalte Vorspeisen',
      juhe: 'Suppen',
      'tjestenine-rizoti': 'Pasta und Risotto',
      'arancini-putnik': 'Putnik-Arancini',
      'grill-mesna-jela': 'Grill- und Fleischgerichte',
      'dalmatinski-specijaliteti': 'Dalmatinische Spezialitäten',
      'pohana-jela': 'Panierte Gerichte',
      'riba-morska-jela': 'Fisch und Meeresfrüchte',
      'vegetarijansko-vegansko': 'Vegetarisch und vegan',
      'djecji-meni': 'Kindermenü',
      'salate-kao-obrok': 'Salate als Hauptgericht',
      salate: 'Salate',
      'posebna-priprema': 'PEKA',
      'topli-napitci': 'Kaffee und Heißgetränke',
      vode: 'Wasser',
      'bezalkoholna-pica': 'Alkoholfreie Getränke',
      'sokovi-ledeni-cajevi': 'Säfte und Eistees',
      'piva-cider': 'Bier und Cider',
      'mix-pica': 'Mixgetränke',
      'vina-na-case': 'Weine im Glas',
      'vina-u-boci': 'Premiumweine',
      pjenusci: 'Schaumweine',
      'aperitivi-rakije-likeri': 'Aperitifs, Rakija und Liköre',
      'whiskey-cognac-zestoka': 'Whiskey, Cognac und andere Spirituosen',
      gin: 'Gin',
      kokteli: 'Cocktails',
    },
    sectionNotes: {
      'salate-kao-obrok': 'serviert mit warmem Hausbrot',
    },
    notices: {
      'prices-eur': 'Alle Preise sind in Euro (€) angegeben.',
      'vat-included': 'Die Mehrwertsteuer ist im Preis enthalten.',
      'allergen-on-request': 'Detaillierte Allergeninformationen sind auf Anfrage erhältlich.',
      'ask-staff-ingredients':
        'Für Informationen zu Zutaten und Allergenen wenden Sie sich bitte an unser Personal.',
      'frozen-products':
        'Einige Gerichte können je nach Verfügbarkeit und Saison Tiefkühlprodukte enthalten.',
      'offer-changes':
        'Wir behalten uns vor, das Angebot je nach Verfügbarkeit der Zutaten anzupassen.',
      'allergen-warning':
        'Allergeninformationen basieren auf dem Standardrezept und den verfügbaren Daten. Da Zubereitung, Saison, Lieferanten und Spuren von Allergenen variieren können, fragen Sie bitte vor der Bestellung unser Personal.',
      'bread-gluten': 'Hausbrot enthält Gluten (G).',
    },
    allergens: {
      G: 'Glutenhaltiges Getreide: Weizen, Roggen, Gerste, Hafer, Dinkel, Khorasan-Weizen oder Hybridstämme',
      R: 'Krebstiere und daraus gewonnene Erzeugnisse',
      J: 'Eier und daraus gewonnene Erzeugnisse',
      RI: 'Fisch und daraus gewonnene Erzeugnisse',
      K: 'Erdnüsse und daraus gewonnene Erzeugnisse',
      S: 'Sojabohnen und daraus gewonnene Erzeugnisse',
      M: 'Milch und Milcherzeugnisse (einschließlich Laktose)',
      O: 'Schalenfrüchte: Mandeln, Haselnüsse, Walnüsse, Cashews, Pekannüsse, Paranüsse, Pistazien, Macadamia- oder Queenslandnüsse',
      C: 'Sellerie und daraus gewonnene Erzeugnisse',
      GU: 'Senf und daraus gewonnene Erzeugnisse',
      SE: 'Sesamsamen und daraus gewonnene Erzeugnisse',
      'SO₂': 'Schwefeldioxid und Sulfite über 10 mg/kg oder 10 mg/l als Gesamt-SO₂',
      L: 'Lupinen und daraus gewonnene Erzeugnisse',
      ME: 'Weichtiere und daraus gewonnene Erzeugnisse',
    },
    items: {
      'slavonska-plata': {
        name: 'Slawonische Platte',
        description:
          'Slawonischer Schinken, Kulen, Speck, Grammeln, Kuhkäse, eingelegtes Gemüse und Hausbrot',
      },
      'dalmatinska-plata': {
        name: 'Dalmatinische Platte',
        description: 'Prosciutto, Buđola, Ziegenkäse, Oliven und Hausbrot',
      },
      'riblja-plata': {
        name: 'Fischplatte',
        description: 'Makrelenfilet, Sardellen, Oktopussalat, Pager Käse und Hausbrot',
      },
      'pate-mix': {
        name: 'Pasteten-Trio',
        description: 'Drei hausgemachte Pasteten: Huhn, Thunfisch und vegetarisch, mit Hausbrot',
      },
      porchetta: {
        name: 'Porchetta',
        description: 'Italienisch gerollter Schweinebraten, serviert mit Hausbrot und Salat',
      },
      'krem-juha-od-rajcice': { name: 'Tomatencremesuppe' },
      'krem-juha-od-celera-i-kokosa': { name: 'Sellerie-Kokos-Cremesuppe' },
      'bistra-riblja-juha': { name: 'Klare Fischsuppe' },
      'bistra-goveda-juha': { name: 'Klare Rindfleischsuppe' },
      bolognese: { name: 'Bolognese' },
      carbonara: { name: 'Carbonara' },
      'lazagne-bolognese': { name: 'Lasagne Bolognese' },
      'zelene-tagliatelle-s-morskim-plodovima': {
        name: 'Grüne Tagliatelle mit Meeresfrüchten',
      },
      'arancini-od-crnog-rizota': {
        name: 'Arancini vom schwarzen Risotto mit Sepia',
        description: 'hausgemachte Arancini mit schwarzem Risotto und Sepia',
      },
      'vege-arancini': { name: 'Vegetarische Arancini', description: 'vegetarisch' },
      'cevapi-uz-dollar-chips-i-vrhnje': {
        name: 'Ćevapi mit Dollar Chips und Sauerrahm',
      },
      'punjena-pljeskavica-uz-dollar-chips-i-vrhnje': {
        name: 'Gerollte Fleischlaibchen im Speckmantel mit Dollar Chips und Sauerrahm',
      },
      'dvije-kobasice-uz-krumpir-s-povrcem': {
        name: 'Hausgemachte slawonische Grillwurst mit Kartoffeln und Gemüse',
      },
      'pileci-file-uz-dollar-chips': { name: 'Hähnchenfilet mit Dollar Chips' },
      'ramstek-uz-krumpir-i-wok-povrce': {
        name: 'Rumpsteak mit Kartoffeln und Wokgemüse',
      },
      'biftek-uz-krumpir-i-wok-povrce': {
        name: 'Rinderfilet mit Kartoffeln und Wokgemüse',
      },
      'dalmatinska-pasticada': {
        name: 'Dalmatinische Pašticada',
        description: 'traditionelles dalmatinisches Rindfleischgericht mit hausgemachten Beilagen',
      },
      'pileci-becki-uz-prilog': { name: 'Hähnchenschnitzel mit Beilage' },
      'svinjski-becki-uz-prilog': { name: 'Schweineschnitzel mit Beilage' },
      'teleci-becki-uz-prilog': { name: 'Kalbsschnitzel mit Beilage' },
      'pileci-punjeni-odrezak-uz-prilog': {
        name: 'Gefülltes Hähnchenschnitzel mit Beilage',
      },
      'svinjski-punjeni-odrezak-uz-prilog': {
        name: 'Gefülltes Schweineschnitzel mit Beilage',
      },
      'teleci-punjeni-odrezak-uz-prilog': {
        name: 'Gefülltes Kalbsschnitzel mit Beilage',
      },
      'lignje-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Gegrillte Calamari mit Mangold und Kartoffeln',
      },
      'lignje-przene-s-pommesom': { name: 'Frittierte Calamari mit Pommes' },
      'bijela-riba-na-grillu': {
        name: 'Gegrillter Weißfisch',
        description: 'Goldbrasse, Wolfsbarsch · Mangold und Kartoffeln',
      },
      'losos-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Gegrillter Lachs mit Mangold und Kartoffeln',
      },
      'tuna-steak-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Gegrilltes Thunfischsteak mit Mangold und Kartoffeln',
      },
      'dagnje-na-buzaru': {
        name: 'Miesmuscheln nach traditioneller Buzara-Art 1 kg',
        description: 'traditionelle dalmatinische Muscheln in Weißwein, Knoblauch und Petersilie',
      },
      arabiata: { name: 'Arrabbiata', description: 'vegan' },
      'aglio-olio': { name: 'Aglio e olio', description: 'vegan' },
      'steak-od-karfiola': { name: 'Blumenkohlsteak', description: 'vegan' },
      'tofu-steak': { name: 'Tofusteak', description: 'vegan' },
      'vege-salata': { name: 'Gemüsesalat', description: 'Tofusteak · vegan' },
      'pileci-nuggets-pommes': { name: 'Chicken Nuggets + Pommes' },
      'mali-bolognese': { name: 'Kleine Bolognese' },
      'mali-cevapi-uz-dollar-chips-i-vrhnje': {
        name: 'Kleine Ćevapi mit Dollar Chips und Sauerrahm',
      },
      'salata-od-skuse-tunjevine': { name: 'Makrelen- / Thunfischsalat' },
      'slavonska-salata': { name: 'Slawonischer Salat', description: 'gegrillter Speck' },
      'cezar-salata': { name: 'Caesar Salad', description: 'Hähnchenfilet' },
      'sezonska-salata-mix': { name: 'Gemischter Saisonsalat' },
      'kupus-salata': { name: 'Krautsalat' },
      'krastavci-u-vrhnju': { name: 'Gurken in Sauerrahm' },
      'cikla-karamelizirani-luk': { name: 'Rote Bete und karamellisierte Zwiebeln' },
      'hobotnica-ispod-peke-uz-prilog': {
        name: 'Oktopus unter der Peka mit Beilage',
      },
      'produzena-kava': { name: 'Verlängerter Kaffee' },
      espresso: { name: 'Espresso' },
      'kava-s-mlijekom-slagom': { name: 'Kaffee mit Milch / Schlagsahne' },
      cappuccino: { name: 'Cappuccino' },
      'bijela-kava': { name: 'Milchkaffee' },
      'latte-macchiato': { name: 'Latte macchiato' },
      nescafe: { name: 'Nescafé' },
      caj: { name: 'Tee' },
      'instant-cappuccino': { name: 'Instant-Cappuccino' },
      'ice-latte': { name: 'Iced Latte' },
      'ice-latte-matcha': { name: 'Iced Matcha Latte' },
      'ice-latte-matcha-s-okusom': { name: 'Iced Matcha Latte mit Aroma' },
      'espresso-tonic': { name: 'Espresso Tonic' },
      affogato: { name: 'Affogato' },
      'irish-baileys-coffee': { name: 'Irish / Baileys Coffee' },
      'ice-coffee': { name: 'Eiskaffee' },
      'topla-cokolada': { name: 'Heiße Schokolade' },
      'romerquelle-negazirana-033': { name: 'Römerquelle still 0,33 l' },
      'romerquelle-gazirana-033': { name: 'Römerquelle prickelnd 0,33 l' },
      'romerquelle-negazirana-075': { name: 'Römerquelle still 0,75 l' },
      'romerquelle-gazirana-075': { name: 'Römerquelle prickelnd 0,75 l' },
      'romerquelle-limunska-trava': { name: 'Römerquelle Zitronengras' },
      'cedevita-limun': { name: 'Cedevita Zitrone' },
      'cedevita-naranca': { name: 'Cedevita Orange' },
      'hidra-limun-050': { name: 'Hidra Zitrone 0,50 l' },
      'hidra-naranca-050': { name: 'Hidra Orange 0,50 l' },
      'hidra-ananas-limeta-050': { name: 'Hidra Ananas-Limette 0,50 l' },
      'ledeni-caj-breskva': { name: 'Eistee Pfirsich' },
      'ledeni-caj-sumsko-voce': { name: 'Eistee Waldfrucht' },
      'pago-jabuka-020': { name: 'Pago Apfel 0,20 l' },
      'pago-naranca-020': { name: 'Pago Orange 0,20 l' },
      'pago-visnja-020': { name: 'Pago Sauerkirsche 0,20 l' },
      'pago-marelica-020': { name: 'Pago Aprikose 0,20 l' },
      'pago-ananas-020': { name: 'Pago Ananas 0,20 l' },
      'pago-crni-ribiz-020': { name: 'Pago Schwarze Johannisbeere 0,20 l' },
      'ozujsko-toceno-030': { name: 'Ožujsko vom Fass 0,30 l' },
      'ozujsko-toceno-050': { name: 'Ožujsko vom Fass 0,50 l' },
      'ozujsko-radler-limun-050': { name: 'Ožujsko Radler Zitrone 0,50 l' },
      'somersby-jabuka': { name: 'Somersby Apfel' },
      'somersby-kruska': { name: 'Somersby Birne' },
      'somersby-00-jagoda-limeta': { name: 'Somersby 0.0 Erdbeere-Limette' },
      'dalmatinski-prosek-1dcl': { name: 'Dalmatinischer Prošek 1 dcl' },
      'sibenska-travarica': { name: 'Šibeniker Kräuterschnaps' },
      'williams-viljamovka': { name: 'Williams-Birnenschnaps' },
      'maraska-visnjevac': { name: 'Maraska Kirschlikör' },
      'maraska-orahovac': { name: 'Maraska Walnusslikör' },
      'dalmatinski-prosek': { name: 'Dalmatinischer Prošek' },
      'aperol-spritz': {
        name: 'Aperol Spritz',
        description: 'Aperol, Prosecco, Soda, Orange',
      },
      hugo: {
        name: 'Hugo',
        description: 'Prosecco, Holunderblüte, Soda, Limette, Minze',
      },
      mojito: {
        name: 'Mojito',
        description: 'weißer Rum, Limette, Minze, Zuckersirup, Soda',
      },
      'gin-tonic': { name: 'Gin Tonic', description: 'Gin, Tonic, Zitrus' },
      'cuba-libre': { name: 'Cuba Libre', description: 'Rum, Coca-Cola, Limette' },
      'moscow-mule': {
        name: 'Moscow Mule',
        description: 'Wodka, würziges Ginger Beer, Limette',
      },
      'espresso-martini': {
        name: 'Espresso Martini',
        description: 'Wodka, Kahlúa, Espresso',
      },
      negroni: { name: 'Negroni', description: 'Gin, Campari, Martini Rosso' },
      'mojito-strawberry-passion': {
        name: 'Strawberry / Passion Mojito',
        description: 'weißer Rum, Limette, Minze, Erdbeere oder Passionsfrucht',
      },
      'limoncello-spritz': {
        name: 'Limoncello Spritz',
        description: 'Limoncello, Prosecco, Soda, Zitrus',
      },
      'london-mule': {
        name: 'London Mule',
        description: 'Gin, würziges Ginger Beer, Limette',
      },
      'my-favourite-spritz': {
        name: 'My Favourite Spritz',
        description: 'Malibu, Passionsfruchtpüree, Prosecco, Citrus-Mix',
      },
      'karamello-espresso-martini': {
        name: 'Karamello Espresso Martini',
        description: 'Wodka, Kahlúa, Espresso, Karamell',
      },
    },
  },
  fi: {
    story: {
      title: 'Tarinamme pöydän ääressä',
      paragraphs: [
        'Bistro Putnikissa vaalimme kroatialaisia reseptejä, tapoja ja vieraanvaraisuutta. Menumme yhdistää tutut paikalliset maut, perinteiset valmistustavat ja Baška Vodan välimerellisen hengen.',
        'Valikoitujen annosten kanssa tarjoamme huolella valmistettua talon leipää. Valitsemme raaka-aineet harkiten ja teemme mahdollisuuksien mukaan yhteistyötä paikallisten kroatialaisten tuottajien kanssa.',
      ],
      closing: 'Yksinkertaista, rehellistä ja täynnä makuja, jotka tuntuvat kodilta.',
    },
    pages: {
      food: 'Ruoka',
      'special-order': 'Ennakkotilauksesta',
      drinks: 'Juomat',
      'wines-spirits-cocktails': 'Viinit, väkevät ja cocktailit',
    },
    pageIntro: {
      'special-order':
        'Saatavilla ennakkotilauksesta vähintään 24 tuntia etukäteen, kun henkilömäärä sovitaan ennalta.',
    },
    pageClosing: {
      'special-order':
        'Suuremmille seurueille ja erityisiin hetkiin suosittelemme mielellämme tarjoilutapaa ja kauden lisukkeita.',
    },
    sections: {
      'hladna-predjela': 'Kylmät alkupalat',
      juhe: 'Keitot',
      'tjestenine-rizoti': 'Pastat ja risotot',
      'arancini-putnik': 'Putnik-arancinit',
      'grill-mesna-jela': 'Grilli- ja liharuoat',
      'dalmatinski-specijaliteti': 'Dalmatialaiset erikoisuudet',
      'pohana-jela': 'Leivitetyt ruoat',
      'riba-morska-jela': 'Kala ja äyriäiset',
      'vegetarijansko-vegansko': 'Kasvis- ja vegaaniruoat',
      'djecji-meni': 'Lasten menu',
      'salate-kao-obrok': 'Ruokaisat salaatit',
      salate: 'Salaatit',
      'posebna-priprema': 'PEKA',
      'topli-napitci': 'Kahvi ja kuumat juomat',
      vode: 'Vesi',
      'bezalkoholna-pica': 'Alkoholittomat juomat',
      'sokovi-ledeni-cajevi': 'Mehut ja jääteet',
      'piva-cider': 'Oluet ja siiderit',
      'mix-pica': 'Sekajuomat',
      'vina-na-case': 'Viinit laseittain',
      'vina-u-boci': 'Laatuviinit',
      pjenusci: 'Kuohuviinit',
      'aperitivi-rakije-likeri': 'Aperitiivit, rakijat ja liköörit',
      'whiskey-cognac-zestoka': 'Viskit, konjakit ja muut väkevät',
      gin: 'Gin',
      kokteli: 'Cocktailit',
    },
    sectionNotes: {
      'salate-kao-obrok': 'tarjoillaan lämpimän talon leivän kanssa',
    },
    notices: {
      'prices-eur': 'Kaikki hinnat ilmoitetaan euroina (€).',
      'vat-included': 'ALV sisältyy hintaan.',
      'allergen-on-request': 'Tarkemmat allergeenitiedot ovat saatavilla pyynnöstä.',
      'ask-staff-ingredients':
        'Kysy henkilökunnalta lisätietoja raaka-aineista ja allergeeneista.',
      'frozen-products':
        'Jotkin annokset voivat sisältää pakastettuja tuotteita saatavuuden ja sesongin mukaan.',
      'offer-changes':
        'Pidätämme oikeuden muuttaa tarjontaa raaka-aineiden saatavuuden mukaan.',
      'allergen-warning':
        'Allergeenitiedot perustuvat vakioreseptiin ja saatavilla oleviin tietoihin. Koska valmistus, sesonki, toimittajat ja allergeenijäämät voivat vaihdella, kysy henkilökunnalta ennen tilaamista.',
      'bread-gluten': 'Talon leipä sisältää gluteenia (G).',
    },
    allergens: {
      G: 'Gluteenia sisältävät viljat: vehnä, ruis, ohra, kaura, speltti, khorasanvehnä tai niiden hybridit',
      R: 'Äyriäiset ja äyriäistuotteet',
      J: 'Munat ja munatuotteet',
      RI: 'Kala ja kalatuotteet',
      K: 'Maapähkinät ja maapähkinätuotteet',
      S: 'Soijapavut ja soijatuotteet',
      M: 'Maito ja maitotuotteet (laktoosi mukaan lukien)',
      O: 'Pähkinät: mantelit, hasselpähkinät, saksanpähkinät, cashewpähkinät, pekaanipähkinät, parapähkinät, pistaasit, macadamia- tai queenslandinpähkinät',
      C: 'Selleri ja sellerituotteet',
      GU: 'Sinappi ja sinappituotteet',
      SE: 'Seesaminsiemenet ja seesamituotteet',
      'SO₂': 'Rikkidioksidi ja sulfiitit yli 10 mg/kg tai 10 mg/l kokonais-SO₂:na',
      L: 'Lupiini ja lupiinituotteet',
      ME: 'Nilviäiset ja nilviäistuotteet',
    },
    items: {
      'slavonska-plata': {
        name: 'Slavonialainen leikkelelautanen',
        description:
          'Slavonialainen kinkku, kulen, pekoni, čvarci, lehmänmaitojuusto, pikkelöityjä kasviksia ja talon leipää',
      },
      'dalmatinska-plata': {
        name: 'Dalmatialainen leikkelelautanen',
        description: 'Prosciuttoa, buđolaa, vuohenjuustoa, oliiveja ja talon leipää',
      },
      'riblja-plata': {
        name: 'Kalalautanen',
        description: 'Makrillifileetä, anjovista, mustekalasalaattia, Pag-juustoa ja talon leipää',
      },
      'pate-mix': {
        name: 'Pateevalikoima',
        description: 'Kolme talon pateeta: kana, tonnikala ja kasvis, talon leivän kanssa',
      },
      porchetta: {
        name: 'Porchetta',
        description: 'Italialaistyylinen rullattu porsas, tarjoillaan talon leivän ja salaatin kanssa',
      },
      'krem-juha-od-rajcice': { name: 'Kermainen tomaattikeitto' },
      'krem-juha-od-celera-i-kokosa': { name: 'Kermainen selleri-kookoskeitto' },
      'bistra-riblja-juha': { name: 'Kirkas kalakeitto' },
      'bistra-goveda-juha': { name: 'Kirkas naudanlihakeitto' },
      bolognese: { name: 'Bolognese' },
      carbonara: { name: 'Carbonara' },
      'lazagne-bolognese': { name: 'Lasagne bolognese' },
      'zelene-tagliatelle-s-morskim-plodovima': {
        name: 'Vihreää tagliatellea merenelävillä',
      },
      'arancini-od-crnog-rizota': {
        name: 'Musta risotto- ja seepia-arancini',
        description: 'talon arancineja mustasta risotosta ja seepialla',
      },
      'vege-arancini': { name: 'Kasvisarancini', description: 'kasvis' },
      'cevapi-uz-dollar-chips-i-vrhnje': {
        name: 'Ćevapi dollar chipsien ja smetanan kanssa',
      },
      'punjena-pljeskavica-uz-dollar-chips-i-vrhnje': {
        name: 'Pekoniin käärityt lihapihvit dollar chipsien ja smetanan kanssa',
      },
      'dvije-kobasice-uz-krumpir-s-povrcem': {
        name: 'Slavonialainen talon grillimakkara perunoiden ja kasvisten kanssa',
      },
      'pileci-file-uz-dollar-chips': { name: 'Kanafilee dollar chipsien kanssa' },
      'ramstek-uz-krumpir-i-wok-povrce': {
        name: 'Rump steak perunoiden ja wok-vihannesten kanssa',
      },
      'biftek-uz-krumpir-i-wok-povrce': {
        name: 'Naudan sisäfilee perunoiden ja wok-vihannesten kanssa',
      },
      'dalmatinska-pasticada': {
        name: 'Dalmatialainen pašticada',
        description: 'perinteinen dalmatialainen naudanliha-annos talon lisukkeilla',
      },
      'pileci-becki-uz-prilog': { name: 'Kanaleike lisukkeella' },
      'svinjski-becki-uz-prilog': { name: 'Porsaanleike lisukkeella' },
      'teleci-becki-uz-prilog': { name: 'Vasikanleike lisukkeella' },
      'pileci-punjeni-odrezak-uz-prilog': { name: 'Täytetty kanaleike lisukkeella' },
      'svinjski-punjeni-odrezak-uz-prilog': { name: 'Täytetty porsaanleike lisukkeella' },
      'teleci-punjeni-odrezak-uz-prilog': { name: 'Täytetty vasikanleike lisukkeella' },
      'lignje-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grillattua kalmaria lehtimangoldin ja perunoiden kanssa',
      },
      'lignje-przene-s-pommesom': { name: 'Friteerattua kalmaria ranskalaisten kanssa' },
      'bijela-riba-na-grillu': {
        name: 'Grillattu valkoinen kala',
        description: 'meriahven, hammasahven · lehtimangoldia ja perunoita',
      },
      'losos-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grillattua lohta lehtimangoldin ja perunoiden kanssa',
      },
      'tuna-steak-na-zaru-uz-blitvu-i-krumpir': {
        name: 'Grillattu tonnikalapihvi lehtimangoldin ja perunoiden kanssa',
      },
      'dagnje-na-buzaru': {
        name: 'Sinisimpukoita perinteisessä buzara-kastikkeessa 1 kg',
        description: 'perinteisiä dalmatialaisia simpukoita valkoviinissä, valkosipulissa ja persiljassa',
      },
      arabiata: { name: 'Arrabbiata', description: 'vegaaninen' },
      'aglio-olio': { name: 'Aglio e olio', description: 'vegaaninen' },
      'steak-od-karfiola': { name: 'Kukkakaalipihvi', description: 'vegaaninen' },
      'tofu-steak': { name: 'Tofupihvi', description: 'vegaaninen' },
      'vege-salata': { name: 'Kasvissalaatti', description: 'tofupihvi · vegaaninen' },
      'pileci-nuggets-pommes': { name: 'Kananugetit + ranskalaiset' },
      'mali-bolognese': { name: 'Pieni bolognese' },
      'mali-cevapi-uz-dollar-chips-i-vrhnje': {
        name: 'Pienet ćevapit dollar chipsien ja smetanan kanssa',
      },
      'salata-od-skuse-tunjevine': { name: 'Makrilli- / tonnikalasalaatti' },
      'slavonska-salata': { name: 'Slavonialainen salaatti', description: 'grillattu pekoni' },
      'cezar-salata': { name: 'Caesar-salaatti', description: 'kanafilee' },
      'sezonska-salata-mix': { name: 'Kauden sekasalaatti' },
      'kupus-salata': { name: 'Kaalisalaatti' },
      'krastavci-u-vrhnju': { name: 'Kurkut smetanassa' },
      'cikla-karamelizirani-luk': { name: 'Punajuuri ja karamellisoitu sipuli' },
      'hobotnica-ispod-peke-uz-prilog': {
        name: 'Mustekalaa pekan alla lisukkeella',
      },
      'produzena-kava': { name: 'Pitkä kahvi' },
      espresso: { name: 'Espresso' },
      'kava-s-mlijekom-slagom': { name: 'Kahvi maidolla / kermavaahdolla' },
      cappuccino: { name: 'Cappuccino' },
      'bijela-kava': { name: 'Maitokahvi' },
      'latte-macchiato': { name: 'Latte macchiato' },
      nescafe: { name: 'Nescafé' },
      caj: { name: 'Tee' },
      'instant-cappuccino': { name: 'Pikacappuccino' },
      'ice-latte': { name: 'Jäälatte' },
      'ice-latte-matcha': { name: 'Jäämatchalatte' },
      'ice-latte-matcha-s-okusom': { name: 'Maustettu jäämatchalatte' },
      'espresso-tonic': { name: 'Espresso tonic' },
      affogato: { name: 'Affogato' },
      'irish-baileys-coffee': { name: 'Irish / Baileys -kahvi' },
      'ice-coffee': { name: 'Jääkahvi' },
      'topla-cokolada': { name: 'Kaakao' },
      'romerquelle-negazirana-033': { name: 'Römerquelle hiilihapoton 0,33 l' },
      'romerquelle-gazirana-033': { name: 'Römerquelle hiilihapollinen 0,33 l' },
      'romerquelle-negazirana-075': { name: 'Römerquelle hiilihapoton 0,75 l' },
      'romerquelle-gazirana-075': { name: 'Römerquelle hiilihapollinen 0,75 l' },
      'romerquelle-limunska-trava': { name: 'Römerquelle sitruunaruoho' },
      'cedevita-limun': { name: 'Cedevita sitruuna' },
      'cedevita-naranca': { name: 'Cedevita appelsiini' },
      'hidra-limun-050': { name: 'Hidra sitruuna 0,50 l' },
      'hidra-naranca-050': { name: 'Hidra appelsiini 0,50 l' },
      'hidra-ananas-limeta-050': { name: 'Hidra ananas-lime 0,50 l' },
      'ledeni-caj-breskva': { name: 'Jäätee persikka' },
      'ledeni-caj-sumsko-voce': { name: 'Jäätee metsämarja' },
      'pago-jabuka-020': { name: 'Pago omena 0,20 l' },
      'pago-naranca-020': { name: 'Pago appelsiini 0,20 l' },
      'pago-visnja-020': { name: 'Pago hapankirsikka 0,20 l' },
      'pago-marelica-020': { name: 'Pago aprikoosi 0,20 l' },
      'pago-ananas-020': { name: 'Pago ananas 0,20 l' },
      'pago-crni-ribiz-020': { name: 'Pago mustaherukka 0,20 l' },
      'ozujsko-toceno-030': { name: 'Ožujsko hanaolut 0,30 l' },
      'ozujsko-toceno-050': { name: 'Ožujsko hanaolut 0,50 l' },
      'ozujsko-radler-limun-050': { name: 'Ožujsko Radler sitruuna 0,50 l' },
      'somersby-jabuka': { name: 'Somersby omena' },
      'somersby-kruska': { name: 'Somersby päärynä' },
      'somersby-00-jagoda-limeta': { name: 'Somersby 0.0 mansikka-lime' },
      'dalmatinski-prosek-1dcl': { name: 'Dalmatialainen prošek 1 dcl' },
      'sibenska-travarica': { name: 'Šibenikin yrttibrandy' },
      'williams-viljamovka': { name: 'Williams päärynäbrandy' },
      'maraska-visnjevac': { name: 'Maraska kirsikkalikööri' },
      'maraska-orahovac': { name: 'Maraska pähkinälikööri' },
      'dalmatinski-prosek': { name: 'Dalmatialainen prošek' },
      'aperol-spritz': {
        name: 'Aperol Spritz',
        description: 'Aperol, prosecco, sooda, appelsiini',
      },
      hugo: { name: 'Hugo', description: 'prosecco, seljankukka, sooda, lime, minttu' },
      mojito: {
        name: 'Mojito',
        description: 'vaalea rommi, lime, minttu, sokerisiirappi, sooda',
      },
      'gin-tonic': { name: 'Gin Tonic', description: 'gin, tonic, sitrukset' },
      'cuba-libre': { name: 'Cuba Libre', description: 'rommi, Coca-Cola, lime' },
      'moscow-mule': {
        name: 'Moscow Mule',
        description: 'vodka, mausteinen inkivääriolut, lime',
      },
      'espresso-martini': {
        name: 'Espresso Martini',
        description: 'vodka, Kahlúa, espresso',
      },
      negroni: { name: 'Negroni', description: 'gin, Campari, Martini Rosso' },
      'mojito-strawberry-passion': {
        name: 'Strawberry / Passion Mojito',
        description: 'vaalea rommi, lime, minttu, mansikka tai passionhedelmä',
      },
      'limoncello-spritz': {
        name: 'Limoncello Spritz',
        description: 'limoncello, prosecco, sooda, sitrukset',
      },
      'london-mule': {
        name: 'London Mule',
        description: 'gin, mausteinen inkivääriolut, lime',
      },
      'my-favourite-spritz': {
        name: 'My Favourite Spritz',
        description: 'Malibu, passionhedelmäpyree, prosecco, sitrussekoitus',
      },
      'karamello-espresso-martini': {
        name: 'Karamello Espresso Martini',
        description: 'vodka, Kahlúa, espresso, karamelli',
      },
    },
  },
};

export const menuTranslations = {
  ...baseMenuTranslations,
  ...additionalMenuTranslations,
};

function hasTranslationValue(value) {
  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return value !== undefined && value !== null && value !== '';
}

function getEmbeddedTranslation(entity, language, field) {
  const value = entity?.translations?.[language]?.[field];
  return hasTranslationValue(value) ? value : null;
}

function getStaticMenuTranslation(language, type, id) {
  const value = menuTranslations[language]?.[type]?.[id];
  return hasTranslationValue(value) ? value : null;
}

function getPreferredTranslation(entity, language, staticTranslation, field, fallback) {
  const embedded = getEmbeddedTranslation(entity, language, field);

  if (embedded !== null) {
    return embedded;
  }

  const staticValue = staticTranslation?.[field];

  if (hasTranslationValue(staticValue)) {
    return staticValue;
  }

  return fallback;
}

export function getLocalizedMenuText(
  language,
  type,
  id,
  fallback,
  entity = null,
  field = 'title'
) {
  return (
    getEmbeddedTranslation(entity, language, field) ||
    getStaticMenuTranslation(language, type, id) ||
    fallback
  );
}

export function getLocalizedItem(item, language) {
  const translation = menuTranslations[language]?.items?.[item.id] || {};

  return {
    ...item,
    name: getPreferredTranslation(item, language, translation, 'name', item.name),
    description: getPreferredTranslation(
      item,
      language,
      translation,
      'description',
      item.description
    ),
  };
}

export function getLocalizedStory(story, language) {
  const translation = menuTranslations[language]?.story;

  return {
    ...story,
    title: getPreferredTranslation(story, language, translation, 'title', story.title),
    paragraphs: getPreferredTranslation(
      story,
      language,
      translation,
      'paragraphs',
      story.paragraphs
    ),
    closing: getPreferredTranslation(
      story,
      language,
      translation,
      'closing',
      story.closing
    ),
  };
}

export function getLocalizedNotice(notice, language) {
  return (
    getEmbeddedTranslation(notice, language, 'text') ||
    getStaticMenuTranslation(language, 'notices', notice.id) ||
    notice.text
  );
}

export function getLocalizedAllergen(allergen, language) {
  return (
    getEmbeddedTranslation(allergen, language, 'name') ||
    getStaticMenuTranslation(language, 'allergens', allergen.code) ||
    allergen.name ||
    allergen.label
  );
}
