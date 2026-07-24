import { guideArticles } from './guide-articles';

export const supportedLocales = ['hr', 'en', 'de', 'sv', 'fi', 'no', 'pl', 'da', 'hu'];

export const defaultLocale = 'en';

export const siteConfig = {
  siteUrl: 'https://bistroputnik.com',
  displayHost: 'bistroputnik.com',
  brand: 'Bistro Putnik',
  venueName: 'Bistro Putnik',
  venueDisplayName: 'Bistro Putnik · Baška Voda',
  areaServed: 'Baška Voda, Croatia',
  locality: 'Baška Voda',
  region: 'Split-Dalmatia County',
  country: 'Croatia',
  countryCode: 'HR',
  email: 'epiphany-tsc@proton.me',
  openingDate: '2026-05-01',
  cuisine: [
    'Croatian',
    'Dalmatian',
    'Mediterranean',
    'Seafood',
    'Grill',
    'Marenda',
  ],
  socialLinks: [],
  images: ['/logo-primary.png'],
};

const routeMeta = {
  home: {
    kind: 'home',
    priority: 1,
    changeFrequency: 'weekly',
    paths: {
      hr: '',
      en: '',
      de: '',
      sv: '',
      fi: '',
      no: '',
      pl: '',
      da: '',
      hu: '',
    },
    title: {
      hr: 'Bistro Putnik u Baškoj Vodi',
      en: 'Bistro Putnik in Baška Voda',
      de: 'Bistro Putnik in Baška Voda',
      sv: 'Bistro Putnik i Baška Voda',
      fi: 'Bistro Putnik Baška Vodassa',
      no: 'Bistro Putnik i Baška Voda',
      pl: 'Bistro Putnik w Baškiej Vodzie',
      da: 'Bistro Putnik i Baška Voda',
      hu: 'Bistro Putnik Baška Vodában',
    },
    description: {
      hr: 'Bistro Putnik u Baškoj Vodi priprema hrvatsku obalnu kuhinju, marendu, ribu, grill, pića i jelovnik za goste Makarske rivijere.',
      en: 'Bistro Putnik in Baška Voda serves Croatian coastal food, daily marenda, seafood, grill dishes, drinks, and a visitor-friendly menu on the Makarska Riviera.',
      de: 'Bistro Putnik in Baška Voda bietet kroatische Küstenküche, tägliche Marenda, Fisch, Grillgerichte, Getränke und eine Speisekarte für Gäste der Makarska Riviera.',
      sv: 'Bistro Putnik i Baška Voda serverar kroatisk kustmat, dagens marenda, fisk, grillrätter, drycker och en meny för gäster på Makarska rivieran.',
      fi: 'Bistro Putnik Baška Vodassa tarjoaa kroatialaista rannikkoruokaa, päivän marendan, kalaa, grilliruokia, juomia ja matkailijaystävällisen menun Makarskan rivieralla.',
      no: 'Bistro Putnik i Baška Voda serverer kroatisk kystmat, dagens marenda, sjømat, grillretter, drikke og en meny for gjester på Makarska-rivieraen.',
      pl: 'Bistro Putnik w Baškiej Vodzie oferuje chorwacką kuchnię wybrzeża, marendę dnia, ryby, grill, napoje i menu dla gości Riwiery Makarskiej.',
      da: 'Bistro Putnik i Baška Voda serverer kroatisk kystmad, dagens marenda, fisk, grillretter, drikkevarer og en menu til gæster på Makarska-rivieraen.',
      hu: 'A baška vodai Bistro Putnik horvát tengerparti ételeket, napi marendát, halat, grillfogásokat, italokat és vendégbarát étlapot kínál a Makarska-riviérán.',
    },
  },
  menu: {
    kind: 'menu',
    priority: 0.9,
    changeFrequency: 'weekly',
    paths: {
      hr: 'jelovnik',
      en: 'menu',
      de: 'speisekarte',
      sv: 'meny',
      fi: 'menu',
      no: 'meny',
      pl: 'menu',
      da: 'menu',
      hu: 'etlap',
    },
    title: {
      hr: 'Jelovnik Bistro Putnik',
      en: 'Bistro Putnik Menu',
      de: 'Speisekarte von Bistro Putnik',
      sv: 'Bistro Putnik meny',
      fi: 'Bistro Putnik menu',
      no: 'Bistro Putnik meny',
      pl: 'Menu Bistro Putnik',
      da: 'Bistro Putnik menu',
      hu: 'Bistro Putnik étlap',
    },
    description: {
      hr: 'Pregledajte jelovnik Bistro Putnik u Baškoj Vodi: hrvatska jela, riba, grill, pića, alergeni i cijene u eurima.',
      en: 'Browse the Bistro Putnik menu in Baška Voda: Croatian dishes, seafood, grill, drinks, allergens, and euro prices.',
      de: 'Entdecken Sie die Speisekarte von Bistro Putnik in Baška Voda: kroatische Gerichte, Fisch, Grill, Getränke, Allergene und Preise in Euro.',
      sv: 'Se Bistro Putniks meny i Baška Voda: kroatiska rätter, fisk, grill, drycker, allergener och priser i euro.',
      fi: 'Tutustu Bistro Putnikin menuun Baška Vodassa: kroatialaiset ruoat, kala, grilli, juomat, allergeenit ja eurohinnat.',
      no: 'Se Bistro Putnik-menyen i Baška Voda: kroatiske retter, sjømat, grill, drikke, allergener og priser i euro.',
      pl: 'Zobacz menu Bistro Putnik w Baškiej Vodzie: chorwackie dania, ryby, grill, napoje, alergeny i ceny w euro.',
      da: 'Se Bistro Putniks menu i Baška Voda: kroatiske retter, fisk, grill, drikkevarer, allergener og priser i euro.',
      hu: 'Tekintse meg a Bistro Putnik étlapját Baška Vodában: horvát ételek, halak, grillfogások, italok, allergének és euróárak.',
    },
  },
  marenda: {
    kind: 'marenda',
    priority: 0.88,
    changeFrequency: 'daily',
    paths: {
      hr: 'marenda',
      en: 'marenda',
      de: 'marenda',
      sv: 'marenda',
      fi: 'marenda',
      no: 'marenda',
      pl: 'marenda',
      da: 'marenda',
      hu: 'marenda',
    },
    title: {
      hr: 'Marenda u Baškoj Vodi',
      en: 'Daily Marenda in Baška Voda',
      de: 'Tägliche Marenda in Baška Voda',
      sv: 'Dagens marenda i Baška Voda',
      fi: 'Päivän marenda Baška Vodassa',
      no: 'Dagens marenda i Baška Voda',
      pl: 'Codzienna marenda w Baškiej Vodzie',
      da: 'Dagens marenda i Baška Voda',
      hu: 'Napi marenda Baška Vodában',
    },
    description: {
      hr: 'Dnevna marenda Bistro Putnik s lokalnim jelima, jasnim cijenama i ponudom dostupnom dok se dnevna količina ne rasproda.',
      en: 'Bistro Putnik daily marenda with local dishes, clear prices, and an offer available until the daily quantity is sold out.',
      de: 'Die tägliche Marenda von Bistro Putnik mit lokalen Gerichten, klaren Preisen und einem Angebot, solange die Tagesmenge reicht.',
      sv: 'Bistro Putniks dagliga marenda med lokala rätter, tydliga priser och ett erbjudande som gäller tills dagens mängd är slut.',
      fi: 'Bistro Putnikin päivän marenda: paikallisia annoksia, selkeät hinnat ja tarjonta päivän erän loppumiseen asti.',
      no: 'Bistro Putniks daglige marenda med lokale retter, tydelige priser og tilbud så lenge dagens mengde varer.',
      pl: 'Codzienna marenda Bistro Putnik z lokalnymi daniami, jasnymi cenami i ofertą dostępną do wyczerpania dziennej porcji.',
      da: 'Bistro Putniks daglige marenda med lokale retter, tydelige priser og tilbud, så længe dagens portion rækker.',
      hu: 'A Bistro Putnik napi marendája helyi ételekkel, egyértelmű árakkal és a napi adag elfogyásáig elérhető kínálattal.',
    },
  },
  location: {
    kind: 'location',
    priority: 0.82,
    changeFrequency: 'monthly',
    paths: {
      hr: 'lokacija',
      en: 'location',
      de: 'lage',
      sv: 'plats',
      fi: 'sijainti',
      no: 'beliggenhet',
      pl: 'lokalizacja',
      da: 'beliggenhed',
      hu: 'kapcsolat',
    },
    title: {
      hr: 'Lokacija i kontakt',
      en: 'Location and Contact',
      de: 'Lage und Kontakt',
      sv: 'Plats och kontakt',
      fi: 'Sijainti ja yhteys',
      no: 'Beliggenhet og kontakt',
      pl: 'Lokalizacja i kontakt',
      da: 'Beliggenhed og kontakt',
      hu: 'Helyszín és kapcsolat',
    },
    description: {
      hr: 'Kontakt informacije za Bistro Putnik na adresi Naputica 14 u Baškoj Vodi: karta, telefon, e-pošta i obrazac za upit.',
      en: 'Contact information for Bistro Putnik at Naputica 14 in Baška Voda: map, phone, email, and enquiry form.',
      de: 'Kontaktinformationen für Bistro Putnik in der Naputica 14 in Baška Voda: Karte, Telefon, E-Mail und Anfrageformular.',
      sv: 'Kontaktinformation för Bistro Putnik på Naputica 14 i Baška Voda: karta, telefon, e-post och kontaktformulär.',
      fi: 'Bistro Putnikin yhteystiedot osoitteessa Naputica 14, Baška Voda: kartta, puhelin, sähköposti ja yhteydenottolomake.',
      no: 'Kontaktinformasjon for Bistro Putnik på Naputica 14 i Baška Voda: kart, telefon, e-post og kontaktskjema.',
      pl: 'Informacje kontaktowe Bistro Putnik przy Naputica 14 w Baškiej Vodzie: mapa, telefon, e-mail i formularz kontaktowy.',
      da: 'Kontaktinformation for Bistro Putnik på Naputica 14 i Baška Voda: kort, telefon, e-mail og kontaktformular.',
      hu: 'Kapcsolati információk a Bistro Putnikhoz, Naputica 14, Baška Voda: térkép, telefon, e-mail és kapcsolatfelvételi űrlap.',
    },
  },
  reviews: {
    kind: 'reviews',
    priority: 0.62,
    changeFrequency: 'monthly',
    paths: {
      hr: 'recenzije',
      en: 'reviews',
      de: 'bewertungen',
      sv: 'recensioner',
      fi: 'arvostelut',
      no: 'anmeldelser',
      pl: 'opinie',
      da: 'anmeldelser',
      hu: 'ertekelesek',
    },
    title: {
      hr: 'Recenzije Bistro Putnik',
      en: 'Bistro Putnik Reviews',
      de: 'Bewertungen für Bistro Putnik',
      sv: 'Bistro Putnik recensioner',
      fi: 'Bistro Putnik arvostelut',
      no: 'Bistro Putnik anmeldelser',
      pl: 'Opinie Bistro Putnik',
      da: 'Bistro Putnik anmeldelser',
      hu: 'Bistro Putnik értékelések',
    },
    description: {
      hr: 'Poveznice za recenzije i izravan kontakt s Bistro Putnik u Baškoj Vodi.',
      en: 'Review links and direct contact for Bistro Putnik in Baška Voda.',
      de: 'Bewertungslinks und direkter Kontakt für Bistro Putnik in Baška Voda.',
      sv: 'Recensionslänkar och direktkontakt för Bistro Putnik i Baška Voda.',
      fi: 'Arvostelulinkit ja suora yhteys Bistro Putnikiin Baška Vodassa.',
      no: 'Anmeldelseslenker og direkte kontakt for Bistro Putnik i Baška Voda.',
      pl: 'Linki do opinii i bezpośredni kontakt z Bistro Putnik w Baškiej Vodzie.',
      da: 'Anmeldelseslinks og direkte kontakt til Bistro Putnik i Baška Voda.',
      hu: 'Értékelési linkek és közvetlen kapcsolat a baška vodai Bistro Putnikhoz.',
    },
  },
  visit: {
    kind: 'content',
    priority: 0.72,
    changeFrequency: 'monthly',
    paths: {
      hr: 'baska-voda',
      en: 'baska-voda',
      de: 'baska-voda',
      sv: 'baska-voda',
      fi: 'baska-voda',
      no: 'baska-voda',
      pl: 'baska-voda',
      da: 'baska-voda',
      hu: 'baska-voda',
    },
    title: {
      hr: 'Baška Voda za goste',
      en: 'Baška Voda Visitor Guide',
      de: 'Baška Voda für Gäste',
      sv: 'Baška Voda för besökare',
      fi: 'Baška Voda vierailijoille',
      no: 'Baška Voda for gjester',
      pl: 'Baška Voda dla gości',
      da: 'Baška Voda for gæster',
      hu: 'Baška Voda vendégeknek',
    },
    description: {
      hr: 'Kratki vodič za goste koji traže ručak, večeru, marendu i hrvatsku obalnu hranu u Baškoj Vodi.',
      en: 'A concise visitor guide for lunch, dinner, marenda, and Croatian coastal food in Baška Voda.',
      de: 'Ein kurzer Gästeführer für Mittagessen, Abendessen, Marenda und kroatische Küstenküche in Baška Voda.',
      sv: 'En kort besöksguide för lunch, middag, marenda och kroatisk kustmat i Baška Voda.',
      fi: 'Tiivis opas lounaalle, illalliselle, marendalle ja kroatialaiselle rannikkoruoalle Baška Vodassa.',
      no: 'En kort guide for lunsj, middag, marenda og kroatisk kystmat i Baška Voda.',
      pl: 'Krótki przewodnik po lunchu, kolacji, marendzie i chorwackiej kuchni wybrzeża w Baškiej Vodzie.',
      da: 'En kort guide til frokost, middag, marenda og kroatisk kystmad i Baška Voda.',
      hu: 'Rövid vendégútmutató ebédhez, vacsorához, marendához és horvát tengerparti ételekhez Baška Vodában.',
    },
  },
  blog: {
    kind: 'blog',
    priority: 0.68,
    changeFrequency: 'monthly',
    paths: {
      hr: 'vodic',
      en: 'guide',
      de: 'ratgeber',
      sv: 'guide',
      fi: 'opas',
      no: 'guide',
      pl: 'przewodnik',
      da: 'guide',
      hu: 'utmutatok',
    },
    title: {
      hr: 'Vodič za hranu u Baškoj Vodi',
      en: 'Baška Voda Food Guide',
      de: 'Food Guide für Baška Voda',
      sv: 'Matguide för Baška Voda',
      fi: 'Baška Vodan ruokaopas',
      no: 'Matguide for Baška Voda',
      pl: 'Przewodnik kulinarny po Baškiej Vodzie',
      da: 'Madguide til Baška Voda',
      hu: 'Baška Voda ételútmutató',
    },
    description: {
      hr: 'Lokalni vodiči za ručak, plaže, marendu, dalmatinska jela, morsku hranu, grill i hrvatski restoranski jelovnik u Baškoj Vodi.',
      en: 'Local guides for lunch, beaches, marenda, Dalmatian dishes, seafood, grill, and Croatian restaurant menus in Baška Voda.',
      de: 'Lokale Guides zu Mittagessen, Stränden, Marenda, dalmatinischen Gerichten, Fisch, Grill und kroatischen Restaurantkarten in Baška Voda.',
      sv: 'Lokala guider till lunch, stränder, marenda, dalmatiska rätter, fisk, grill och kroatiska restaurangmenyer i Baška Voda.',
      fi: 'Paikallisia oppaita lounaasta, rannoista, marendasta, dalmatialaisista ruoista, kalasta, grillistä ja kroatialaisista menuista Baška Vodassa.',
      no: 'Lokale guider til lunsj, strender, marenda, dalmatiske retter, sjømat, grill og kroatiske restaurantmenyer i Baška Voda.',
      pl: 'Lokalne przewodniki po lunchu, plażach, marendzie, daniach dalmatyńskich, owocach morza, grillu i chorwackim menu w Baškiej Vodzie.',
      da: 'Lokale guides til frokost, strande, marenda, dalmatiske retter, fisk, grill og kroatiske restaurantmenuer i Baška Voda.',
      hu: 'Helyi útmutatók ebédhez, strandokhoz, marendához, dalmát ételekhez, tengeri fogásokhoz, grillhez és horvát éttermi étlaphoz Baška Vodában.',
    },
  },
};

export const routeDefinitions = routeMeta;

export const blogArticles = guideArticles;

export const pageContent = {
  location: {
    hr: {
      eyebrow: 'Lokacija',
      title: 'Bistro Putnik u Baškoj Vodi',
      intro:
        'Bistro Putnik nalazi se na adresi Naputica 14 u Baškoj Vodi. Ovdje možete otvoriti kartu, nazvati lokal, poslati upit ili nam se javiti e-poštom.',
      notes: [
        'Adresa lokala: Naputica 14, 21320 Baška Voda.',
        'Za kontakt koristite telefon, obrazac ili izravnu e-poštu.',
        'Jelovnik, marenda i vodiči dostupni su na stranicama lokala.',
      ],
    },
    en: {
      eyebrow: 'Location',
      title: 'Bistro Putnik in Baška Voda',
      intro:
        'Bistro Putnik is located at Naputica 14 in Baška Voda. Open the map, call the restaurant, send an enquiry, or contact us directly by email.',
      notes: [
        'Venue address: Naputica 14, 21320 Baška Voda.',
        'Use the phone number, contact form, or direct email for contact.',
        'The menu, marenda, and local guides are available on the restaurant pages.',
      ],
    },
    de: {
      eyebrow: 'Lage',
      title: 'Bistro Putnik in Baška Voda',
      intro:
        'Bistro Putnik befindet sich in der Naputica 14 in Baška Voda. Öffnen Sie die Karte, rufen Sie das Lokal an, senden Sie eine Anfrage oder kontaktieren Sie uns direkt per E-Mail.',
      notes: [
        'Adresse des Lokals: Naputica 14, 21320 Baška Voda.',
        'Nutzen Sie die Telefonnummer, das Formular oder die direkte E-Mail-Adresse für Kontakt.',
        'Speisekarte, Marenda und lokale Guides stehen auf den Restaurantseiten.',
      ],
    },
    sv: {
      eyebrow: 'Plats',
      title: 'Bistro Putnik i Baška Voda',
      intro:
        'Bistro Putnik ligger på Naputica 14 i Baška Voda. Öppna kartan, ring restaurangen, skicka en fråga eller kontakta oss direkt via e-post.',
      notes: [
        'Restaurangens adress: Naputica 14, 21320 Baška Voda.',
        'Använd telefonnumret, kontaktformuläret eller direkt e-post för kontakt.',
        'Meny, marenda och lokala guider finns på restaurangens sidor.',
      ],
    },
    fi: {
      eyebrow: 'Sijainti',
      title: 'Bistro Putnik Baška Vodassa',
      intro:
        'Bistro Putnik sijaitsee osoitteessa Naputica 14, Baška Voda. Avaa kartta, soita ravintolaan, lähetä kysely tai ota yhteyttä suoraan sähköpostitse.',
      notes: [
        'Ravintolan osoite: Naputica 14, 21320 Baška Voda.',
        'Käytä yhteydenottoon puhelinnumeroa, lomaketta tai suoraa sähköpostia.',
        'Menu, marenda ja paikalliset oppaat löytyvät ravintolan sivuilta.',
      ],
    },
    no: {
      eyebrow: 'Beliggenhet',
      title: 'Bistro Putnik i Baška Voda',
      intro:
        'Bistro Putnik ligger på Naputica 14 i Baška Voda. Åpne kartet, ring restauranten, send en forespørsel eller kontakt oss direkte på e-post.',
      notes: [
        'Restaurantadresse: Naputica 14, 21320 Baška Voda.',
        'Bruk telefonnummeret, kontaktskjemaet eller direkte e-post for kontakt.',
        'Meny, marenda og lokale guider er tilgjengelige på restaurantsidene.',
      ],
    },
    pl: {
      eyebrow: 'Lokalizacja',
      title: 'Bistro Putnik w Baškiej Vodzie',
      intro:
        'Bistro Putnik znajduje się przy Naputica 14 w Baškiej Vodzie. Otwórz mapę, zadzwoń do lokalu, wyślij zapytanie lub skontaktuj się z nami bezpośrednio e-mailem.',
      notes: [
        'Adres lokalu: Naputica 14, 21320 Baška Voda.',
        'Do kontaktu użyj numeru telefonu, formularza lub bezpośredniego adresu e-mail.',
        'Menu, marenda i lokalne przewodniki są dostępne na stronach restauracji.',
      ],
    },
    da: {
      eyebrow: 'Beliggenhed',
      title: 'Bistro Putnik i Baška Voda',
      intro:
        'Bistro Putnik ligger på Naputica 14 i Baška Voda. Åbn kortet, ring til restauranten, send en forespørgsel eller kontakt os direkte via e-mail.',
      notes: [
        'Restaurantens adresse: Naputica 14, 21320 Baška Voda.',
        'Brug telefonnummeret, kontaktformularen eller den direkte e-mailadresse til kontakt.',
        'Menu, marenda og lokale guides findes på restaurantens sider.',
      ],
    },
    hu: {
      eyebrow: 'Helyszín',
      title: 'Bistro Putnik Baška Vodában',
      intro:
        'A Bistro Putnik a baška vodai Naputica 14 alatt található. Nyissa meg a térképet, hívja az éttermet, küldjön érdeklődést, vagy írjon nekünk közvetlenül e-mailben.',
      notes: [
        'Az étterem címe: Naputica 14, 21320 Baška Voda.',
        'Kapcsolatfelvételhez használja a telefonszámot, az űrlapot vagy a közvetlen e-mail címet.',
        'Az étlap, a marenda és a helyi útmutatók az étterem oldalain érhetők el.',
      ],
    },
  },
  visit: {
    hr: {
      eyebrow: 'Baška Voda',
      title: 'Ručak, večera i marenda za goste Baške Vode',
      intro:
        'Baška Voda je mjesto za jednostavan dnevni ritam: plaža, šetnja, marenda, obalna jela i večernja pića. Bistro Putnik želi taj ritam učiniti jasnim za lokalne goste i putnike.',
      points: ['Marenda za dnevni ručak', 'Hrvatska obalna jela i grill', 'Jasne cijene i alergeni'],
    },
    en: {
      eyebrow: 'Baška Voda',
      title: 'Lunch, dinner, and marenda for Baška Voda visitors',
      intro:
        'Baška Voda works best at an easy daily pace: beach time, a walk, marenda, coastal plates, and evening drinks. Bistro Putnik makes that rhythm clear for local guests and travellers.',
      points: ['Marenda for a daily lunch', 'Croatian coastal dishes and grill', 'Clear prices and allergen notes'],
    },
    de: {
      eyebrow: 'Baška Voda',
      title: 'Mittagessen, Abendessen und Marenda für Gäste in Baška Voda',
      intro:
        'Baška Voda passt zu einem entspannten Tagesrhythmus: Strand, Spaziergang, Marenda, Küstengerichte und Getränke am Abend. Bistro Putnik macht diesen Rhythmus für Gäste übersichtlich.',
      points: ['Marenda als Tagesmittagessen', 'Kroatische Küstengerichte und Grill', 'Klare Preise und Allergenhinweise'],
    },
    sv: {
      eyebrow: 'Baška Voda',
      title: 'Lunch, middag och marenda för besökare i Baška Voda',
      intro:
        'Baška Voda passar bäst i ett enkelt dagsflöde: strand, promenad, marenda, kustmat och kvällsdrycker. Bistro Putnik gör rytmen tydlig för lokala gäster och resenärer.',
      points: ['Marenda till dagens lunch', 'Kroatisk kustmat och grill', 'Tydliga priser och allergener'],
    },
    fi: {
      eyebrow: 'Baška Voda',
      title: 'Lounas, illallinen ja marenda Baška Vodan vierailijoille',
      intro:
        'Baška Voda toimii parhaiten rennossa päivärytmissä: ranta, kävely, marenda, rannikon annokset ja illan juomat. Bistro Putnik tekee tämän rytmin selkeäksi vieraille.',
      points: ['Marenda päivän lounaaksi', 'Kroatialaisia rannikko- ja grilliannoksia', 'Selkeät hinnat ja allergeenimerkinnät'],
    },
    no: {
      eyebrow: 'Baška Voda',
      title: 'Lunsj, middag og marenda for gjester i Baška Voda',
      intro:
        'Baška Voda passer best i en enkel dagsrytme: strand, spasertur, marenda, kystretter og kveldsdrikke. Bistro Putnik gjør denne rytmen tydelig for lokale gjester og reisende.',
      points: ['Marenda som dagens lunsj', 'Kroatiske kystretter og grill', 'Tydelige priser og allergenmerking'],
    },
    pl: {
      eyebrow: 'Baška Voda',
      title: 'Lunch, kolacja i marenda dla gości Baškiej Vody',
      intro:
        'Baška Voda najlepiej działa w spokojnym rytmie dnia: plaża, spacer, marenda, dania wybrzeża i wieczorne napoje. Bistro Putnik pokazuje ten rytm jasno dla gości i podróżnych.',
      points: ['Marenda jako lunch dnia', 'Chorwackie dania wybrzeża i grill', 'Czytelne ceny i alergeny'],
    },
    da: {
      eyebrow: 'Baška Voda',
      title: 'Frokost, middag og marenda for gæster i Baška Voda',
      intro:
        'Baška Voda fungerer bedst i en rolig dagsrytme: strand, gåtur, marenda, kystretter og aftendrikke. Bistro Putnik gør denne rytme tydelig for lokale gæster og rejsende.',
      points: ['Marenda som dagens frokost', 'Kroatiske kystretter og grill', 'Tydelige priser og allergener'],
    },
    hu: {
      eyebrow: 'Baška Voda',
      title: 'Ebéd, vacsora és marenda Baška Voda vendégeinek',
      intro:
        'Baška Voda legjobban nyugodt napi ritmusban működik: strand, séta, marenda, tengerparti ételek és esti italok. A Bistro Putnik ezt a ritmust teszi átláthatóvá a helyi vendégeknek és az utazóknak.',
      points: ['Marenda napi ebédhez', 'Horvát tengerparti ételek és grill', 'Egyértelmű árak és allergénjelölések'],
    },
  },
  blog: {
    hr: { eyebrow: 'Vodiči', title: 'Vodiči za hranu u Baškoj Vodi' },
    en: { eyebrow: 'Guides', title: 'Food guides for Baška Voda' },
    de: { eyebrow: 'Guides', title: 'Food Guides für Baška Voda' },
    sv: { eyebrow: 'Guider', title: 'Matguider för Baška Voda' },
    fi: { eyebrow: 'Oppaat', title: 'Ruokaoppaat Baška Vodaan' },
    no: { eyebrow: 'Guider', title: 'Matguider for Baška Voda' },
    pl: { eyebrow: 'Przewodniki', title: 'Przewodniki kulinarne po Baškiej Vodzie' },
    da: { eyebrow: 'Guides', title: 'Madguides til Baška Voda' },
    hu: { eyebrow: 'Útmutatók', title: 'Ételútmutatók Baška Vodához' },
  },
};

function trimSlashes(value = '') {
  return value.replace(/^\/+|\/+$/g, '');
}

export function isSupportedLocale(locale) {
  return supportedLocales.includes(locale);
}

export function getLocalizedValue(values, locale) {
  return values?.[locale] || values?.[defaultLocale] || '';
}

export function getLocalizedPath(locale, routeKey, options = {}) {
  const safeLocale = isSupportedLocale(locale) ? locale : defaultLocale;

  if (routeKey === 'article' || options.articleKey) {
    const article = blogArticles.find((item) => item.key === options.articleKey);
    const blogPath = trimSlashes(getLocalizedValue(routeDefinitions.blog.paths, safeLocale));
    const articlePath = trimSlashes(getLocalizedValue(article?.paths, safeLocale));
    return `/${[safeLocale, blogPath, articlePath].filter(Boolean).join('/')}/`;
  }

  const route = routeDefinitions[routeKey];

  if (!route) {
    return `/${safeLocale}/`;
  }

  const routePath = trimSlashes(getLocalizedValue(route.paths, safeLocale));

  return `/${[safeLocale, routePath].filter(Boolean).join('/')}/`;
}

export function getAbsoluteUrl(path = '/') {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function getLocalizedAlternates(routeKey, options = {}) {
  return Object.fromEntries(
    supportedLocales.map((locale) => [
      locale,
      getAbsoluteUrl(getLocalizedPath(locale, routeKey, options)),
    ])
  );
}

export function getAlternateLanguages(routeKey, options = {}) {
  return {
    ...getLocalizedAlternates(routeKey, options),
    'x-default': getAbsoluteUrl(
      routeKey === 'home' ? '/' : getLocalizedPath(defaultLocale, routeKey, options)
    ),
  };
}

export function resolveLocalizedRoute(locale, segments = []) {
  if (!isSupportedLocale(locale)) {
    return null;
  }

  const path = trimSlashes(segments.join('/'));

  for (const [routeKey, route] of Object.entries(routeDefinitions)) {
    if (trimSlashes(getLocalizedValue(route.paths, locale)) === path) {
      return { routeKey, route };
    }
  }

  const blogPath = trimSlashes(getLocalizedValue(routeDefinitions.blog.paths, locale));
  const article = blogArticles.find((item) => {
    const articlePath = trimSlashes(getLocalizedValue(item.paths, locale));
    return `${blogPath}/${articlePath}` === path;
  });

  if (article) {
    return {
      routeKey: 'article',
      route: {
        kind: 'article',
        title: article.title,
        description: article.description,
        priority: article.priority,
        changeFrequency: 'monthly',
      },
      article,
    };
  }

  return null;
}

export function resolvePathname(pathname = '/') {
  const segments = trimSlashes(pathname).split('/').filter(Boolean);
  const first = segments[0];
  const locale = isSupportedLocale(first) ? first : defaultLocale;
  const routeSegments = isSupportedLocale(first) ? segments.slice(1) : segments;
  const localized = resolveLocalizedRoute(locale, routeSegments);

  if (localized) {
    return { ...localized, locale };
  }

  const legacyPath = trimSlashes(routeSegments.join('/'));
  const legacyRouteKey =
    legacyPath === 'review'
      ? 'reviews'
      : legacyPath === ''
        ? 'home'
        : Object.entries(routeDefinitions).find(([, route]) =>
            Object.values(route.paths).some((path) => trimSlashes(path) === legacyPath)
          )?.[0];

  if (legacyRouteKey) {
    return {
      routeKey: legacyRouteKey,
      route: routeDefinitions[legacyRouteKey],
      locale,
    };
  }

  return { routeKey: 'home', route: routeDefinitions.home, locale };
}

export function getLanguageSwitchPath(pathname, nextLocale) {
  const resolved = resolvePathname(pathname);

  if (resolved.routeKey === 'article') {
    return getLocalizedPath(nextLocale, 'article', {
      articleKey: resolved.article?.key,
    });
  }

  return getLocalizedPath(nextLocale, resolved.routeKey);
}

export function getStaticRouteParams() {
  const params = [];

  for (const locale of supportedLocales) {
    for (const [routeKey, route] of Object.entries(routeDefinitions)) {
      params.push({
        locale,
        slug: trimSlashes(getLocalizedValue(route.paths, locale)).split('/').filter(Boolean),
      });
    }

    for (const article of blogArticles) {
      const blogPath = trimSlashes(getLocalizedValue(routeDefinitions.blog.paths, locale));
      const articlePath = trimSlashes(getLocalizedValue(article.paths, locale));
      params.push({
        locale,
        slug: [blogPath, articlePath].filter(Boolean),
      });
    }
  }

  return params;
}
