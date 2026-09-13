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
  breakfast: {
    kind: 'content',
    priority: 0.87,
    changeFrequency: 'weekly',
    paths: {
      hr: 'dorucak',
      en: 'breakfast',
      de: 'fruehstueck',
      sv: 'frukost',
      fi: 'aamiainen',
      no: 'frokost',
      pl: 'sniadanie',
      da: 'morgenmad',
      hu: 'reggeli',
    },
    title: {
      hr: 'All-you-can-eat doručak buffet u Baškoj Vodi',
      en: 'All-you-can-eat Breakfast Buffet in Baška Voda',
      de: 'All-you-can-eat Frühstücksbuffet in Baška Voda',
      sv: 'All-you-can-eat frukostbuffé i Baška Voda',
      fi: 'All-you-can-eat aamiaisbuffet Baška Vodassa',
      no: 'All-you-can-eat frokostbuffé i Baška Voda',
      pl: 'Bufet śniadaniowy all-you-can-eat w Baškiej Vodzie',
      da: 'All-you-can-eat morgenmadsbuffet i Baška Voda',
      hu: 'All-you-can-eat reggeli büfé Baška Vodában',
    },
    description: {
      hr: 'All-you-can-eat doručak buffet u Bistro Putnik u Baškoj Vodi za 10 € po osobi, svaki dan 07:00-10:00, uz voće, jaja, bacon, kavu i 100% sokove.',
      en: 'All-you-can-eat breakfast buffet at Bistro Putnik in Baška Voda for €10 per person, every day 07:00-10:00 with fruit, eggs, bacon, coffee, and 100% juices.',
      de: 'All-you-can-eat Frühstücksbuffet bei Bistro Putnik in Baška Voda für 10 € pro Person, täglich 07:00-10:00 Uhr mit Obst, Eiern, Bacon, Kaffee und 100% Säften.',
      sv: 'All-you-can-eat frukostbuffé på Bistro Putnik i Baška Voda för 10 € per person, varje dag 07:00-10:00 med frukt, ägg, bacon, kaffe och 100% juice.',
      fi: 'All-you-can-eat aamiaisbuffet Bistro Putnikissa Baška Vodassa 10 € per henkilö, joka päivä 07:00-10:00: hedelmiä, munia, pekonia, kahvia ja 100% mehuja.',
      no: 'All-you-can-eat frokostbuffé hos Bistro Putnik i Baška Voda for 10 € per person, hver dag 07:00-10:00 med frukt, egg, bacon, kaffe og 100% juice.',
      pl: 'Bufet śniadaniowy all-you-can-eat w Bistro Putnik w Baškiej Vodzie za 10 € od osoby, codziennie 07:00-10:00 z owocami, jajkami, baconem, kawą i 100% sokami.',
      da: 'All-you-can-eat morgenmadsbuffet hos Bistro Putnik i Baška Voda for 10 € pr. person, hver dag 07:00-10:00 med frugt, æg, bacon, kaffe og 100% juice.',
      hu: 'All-you-can-eat reggeli büfé a baška vodai Bistro Putnikban 10 € személyenként, minden nap 07:00-10:00 között gyümölccsel, tojással, baconnel, kávéval és 100% gyümölcslevekkel.',
    },
  },
  reservations: {
    kind: 'reservations',
    priority: 0.86,
    changeFrequency: 'daily',
    paths: {
      hr: 'rezervacije',
      en: 'reservations',
      de: 'reservierungen',
      sv: 'bokning',
      fi: 'varaukset',
      no: 'reservasjoner',
      pl: 'rezerwacje',
      da: 'reservationer',
      hu: 'asztalfoglalas',
    },
    title: {
      hr: 'Rezervacije u Bistro Putnik',
      en: 'Bistro Putnik Reservations',
      de: 'Reservierungen bei Bistro Putnik',
      sv: 'Boka bord på Bistro Putnik',
      fi: 'Bistro Putnik varaukset',
      no: 'Reservasjoner hos Bistro Putnik',
      pl: 'Rezerwacje w Bistro Putnik',
      da: 'Reservationer hos Bistro Putnik',
      hu: 'Asztalfoglalás a Bistro Putnikban',
    },
    description: {
      hr: 'Pošaljite online upit za stol u Bistro Putnik u Baškoj Vodi. Rezervacija je potvrđena tek nakon odgovora tima.',
      en: 'Send an online table request for Bistro Putnik in Baška Voda. A reservation is confirmed only after the team replies.',
      de: 'Senden Sie eine Online-Tischanfrage für Bistro Putnik in Baška Voda. Die Reservierung ist erst nach Antwort des Teams bestätigt.',
      sv: 'Skicka en onlineförfrågan om bord på Bistro Putnik i Baška Voda. Bokningen är bekräftad först när teamet svarar.',
      fi: 'Lähetä online-pöytäpyyntö Bistro Putnikiin Baška Vodassa. Varaus on vahvistettu vasta tiimin vastauksen jälkeen.',
      no: 'Send en online bordforespørsel til Bistro Putnik i Baška Voda. Reservasjonen er først bekreftet når teamet svarer.',
      pl: 'Wyślij online prośbę o stolik w Bistro Putnik w Baškiej Vodzie. Rezerwacja jest potwierdzona dopiero po odpowiedzi zespołu.',
      da: 'Send en online bordforespørgsel til Bistro Putnik i Baška Voda. Reservationen er først bekræftet, når teamet svarer.',
      hu: 'Küldjön online asztaligényt a baška vodai Bistro Putnikba. A foglalás csak a csapat válasza után visszaigazolt.',
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
      hr: 'Vodiči za Baška Voda restorane, doručak buffet, marendu, hranu uz plažu, hrvatski grill i Putnik jelovnik.',
      en: 'Guides for Baška Voda restaurants, breakfast buffet, marenda, beach food, Croatian grill, and the Putnik menu.',
      de: 'Guides für Restaurants in Baška Voda, Frühstücksbuffet, Marenda, Strandessen, kroatischen Grill und die Putnik Speisekarte.',
      sv: 'Guider till restauranger i Baška Voda, frukostbuffé, marenda, strandmat, kroatisk grill och Putniks meny.',
      fi: 'Oppaat Baška Vodan ravintoloihin, aamiaisbuffetiin, marendaan, rantaruoan valintaan, kroatialaiseen grilliin ja Putnikin menuun.',
      no: 'Guider til restauranter i Baška Voda, frokostbuffé, marenda, strandmat, kroatisk grill og Putnik-menyen.',
      pl: 'Przewodniki po restauracjach w Baškiej Vodzie, bufecie śniadaniowym, marendzie, jedzeniu przy plaży, chorwackim grillu i menu Putnik.',
      da: 'Guides til restauranter i Baška Voda, morgenmadsbuffet, marenda, strandmad, kroatisk grill og Putniks menu.',
      hu: 'Útmutatók Baška Voda éttermeihez, reggeli büféhez, marendához, strandételekhez, horvát grillhez és a Putnik étlaphoz.',
    },
  },
};

export const routeDefinitions = routeMeta;

export const blogArticles = guideArticles;

const breakfastInclusionGroups = {
  hr: [
    {
      label: 'Svježe',
      items: ['sezonsko voće', 'žitarice', 'lokalno nabavljeno povrće'],
    },
    {
      label: 'Topli i hladni doručak',
      items: ['varijacije jaja', 'bacon', 'šunka u ovitku', 'pečenica'],
    },
    {
      label: 'Pića',
      items: ['kava', 'čaj', '100% sokovi'],
    },
  ],
  en: [
    {
      label: 'Fresh',
      items: ['seasonal fruit', 'cereals', 'locally sourced vegetables'],
    },
    {
      label: 'Hot and cold breakfast',
      items: ['egg variations', 'bacon', 'ham'],
    },
    {
      label: 'Drinks',
      items: ['coffee', 'tea', '100% juices'],
    },
  ],
  de: [
    {
      label: 'Frisch',
      items: ['saisonales Obst', 'Cerealien', 'Gemüse von lokalen Lieferanten'],
    },
    {
      label: 'Warm und kalt',
      items: ['Ei-Variationen', 'Bacon', 'šunka u ovitku, kroatischer Wickelschinken', 'pečenica, kroatischer Bratenaufschnitt'],
    },
    {
      label: 'Getränke',
      items: ['Kaffee', 'Tee', '100% Säfte'],
    },
  ],
  sv: [
    {
      label: 'Fräscht',
      items: ['säsongens frukt', 'cerealier', 'lokalt inköpta grönsaker'],
    },
    {
      label: 'Varmt och kallt',
      items: ['äggvariationer', 'bacon', 'šunka u ovitku, kroatisk inlindad skinka', 'pečenica, kroatisk stekt fläskbit'],
    },
    {
      label: 'Drycker',
      items: ['kaffe', 'te', '100% juicer'],
    },
  ],
  fi: [
    {
      label: 'Tuoretta',
      items: ['sesongin hedelmät', 'viljatuotteet', 'paikallisesti hankitut vihannekset'],
    },
    {
      label: 'Lämmin ja kylmä aamiainen',
      items: ['kananmunavaihtoehdot', 'pekoni', 'šunka u ovitku, kroatialainen kääritty kinkku', 'pečenica, kroatialainen paistettu porsas'],
    },
    {
      label: 'Juomat',
      items: ['kahvi', 'tee', '100% mehut'],
    },
  ],
  no: [
    {
      label: 'Ferskt',
      items: ['sesongens frukt', 'frokostblandinger', 'lokalt innkjøpte grønnsaker'],
    },
    {
      label: 'Varm og kald frokost',
      items: ['eggvariasjoner', 'bacon', 'šunka u ovitku, kroatisk innpakket skinke', 'pečenica, kroatisk stekt svinekjøtt'],
    },
    {
      label: 'Drikke',
      items: ['kaffe', 'te', '100% juice'],
    },
  ],
  pl: [
    {
      label: 'Świeże',
      items: ['sezonowe owoce', 'płatki śniadaniowe', 'warzywa od lokalnych dostawców'],
    },
    {
      label: 'Na ciepło i zimno',
      items: ['wariacje jaj', 'bacon', 'šunka u ovitku, chorwacka zawijana szynka', 'pečenica, chorwacka pieczeń wieprzowa'],
    },
    {
      label: 'Napoje',
      items: ['kawa', 'herbata', '100% soki'],
    },
  ],
  da: [
    {
      label: 'Frisk',
      items: ['sæsonens frugt', 'cerealier', 'lokalt indkøbte grøntsager'],
    },
    {
      label: 'Varm og kold morgenmad',
      items: ['æggevariationer', 'bacon', 'šunka u ovitku, kroatisk indpakket skinke', 'pečenica, kroatisk stegt svinekød'],
    },
    {
      label: 'Drikkevarer',
      items: ['kaffe', 'te', '100% juice'],
    },
  ],
  hu: [
    {
      label: 'Friss',
      items: ['szezonális gyümölcs', 'gabonafélék', 'helyi forrásból származó zöldségek'],
    },
    {
      label: 'Meleg és hideg reggeli',
      items: ['tojásvariációk', 'bacon', 'šunka u ovitku, horvát göngyölt sonka', 'pečenica, horvát sült sertés'],
    },
    {
      label: 'Italok',
      items: ['kávé', 'tea', '100% gyümölcslevek'],
    },
  ],
};

export const pageContent = {
  breakfast: {
    hr: {
      eyebrow: 'Doručak buffet',
      title: 'All-you-can-eat doručak buffet u Baškoj Vodi',
      intro:
        'Započnite jutro u Bistro Putnik uz all-you-can-eat doručak buffet u Baškoj Vodi za 10 € po osobi, poslužen svaki dan 07:00-10:00 uz svježe, tople, hladne i piće izbore.',
      homeTitle: 'Doručak buffet svaki dan',
      homeIntro:
        'All-you-can-eat doručak buffet za 10 € po osobi, svaki dan 07:00-10:00 u Baškoj Vodi.',
      priceLabel: 'Cijena',
      price: '10 € po osobi',
      timeLabel: 'Vrijeme',
      time: 'Svaki dan 07:00-10:00',
      inclusionsTitle: 'U ponudi',
      inclusions: breakfastInclusionGroups.hr.flatMap((group) => group.items),
      inclusionGroups: breakfastInclusionGroups.hr,
      cta: 'Detalji doručka',
      locationCta: 'Pogledaj lokaciju',
    },
    en: {
      eyebrow: 'Breakfast buffet',
      title: 'All-you-can-eat breakfast buffet in Baška Voda',
      intro:
        'Start the morning at Bistro Putnik with an all-you-can-eat breakfast buffet in Baška Voda for €10 per person, served every day 07:00-10:00 with fresh, hot, cold, and drink choices.',
      homeTitle: 'Breakfast buffet every day',
      homeIntro:
        'All-you-can-eat breakfast buffet for €10 per person, served every day 07:00-10:00 in Baška Voda.',
      priceLabel: 'Price',
      price: '€10 per person',
      timeLabel: 'Time',
      time: 'Every day 07:00-10:00',
      inclusionsTitle: 'Included',
      inclusions: breakfastInclusionGroups.en.flatMap((group) => group.items),
      inclusionGroups: breakfastInclusionGroups.en,
      cta: 'Breakfast Details',
      locationCta: 'View Location',
    },
    de: {
      eyebrow: 'Frühstücksbuffet',
      title: 'All-you-can-eat Frühstücksbuffet in Baška Voda',
      intro:
        'Starten Sie den Morgen bei Bistro Putnik mit einem All-you-can-eat Frühstücksbuffet in Baška Voda für 10 € pro Person, täglich 07:00-10:00 Uhr mit frischen, warmen, kalten und Getränke-Auswahlen.',
      homeTitle: 'Frühstücksbuffet jeden Tag',
      homeIntro:
        'All-you-can-eat Frühstücksbuffet für 10 € pro Person, täglich 07:00-10:00 Uhr in Baška Voda.',
      priceLabel: 'Preis',
      price: '10 € pro Person',
      timeLabel: 'Zeit',
      time: 'Täglich 07:00-10:00 Uhr',
      inclusionsTitle: 'Inklusive',
      inclusions: breakfastInclusionGroups.de.flatMap((group) => group.items),
      inclusionGroups: breakfastInclusionGroups.de,
      cta: 'Frühstück ansehen',
      locationCta: 'Lage ansehen',
    },
    sv: {
      eyebrow: 'Frukostbuffé',
      title: 'All-you-can-eat frukostbuffé i Baška Voda',
      intro:
        'Börja morgonen på Bistro Putnik med en all-you-can-eat frukostbuffé i Baška Voda för 10 € per person, serverad varje dag 07:00-10:00 med färska, varma, kalla och dryckesval.',
      homeTitle: 'Frukostbuffé varje dag',
      homeIntro:
        'All-you-can-eat frukostbuffé för 10 € per person, serverad varje dag 07:00-10:00 i Baška Voda.',
      priceLabel: 'Pris',
      price: '10 € per person',
      timeLabel: 'Tid',
      time: 'Varje dag 07:00-10:00',
      inclusionsTitle: 'Ingår',
      inclusions: breakfastInclusionGroups.sv.flatMap((group) => group.items),
      inclusionGroups: breakfastInclusionGroups.sv,
      cta: 'Frukostdetaljer',
      locationCta: 'Visa plats',
    },
    fi: {
      eyebrow: 'Aamiaisbuffet',
      title: 'All-you-can-eat aamiaisbuffet Baška Vodassa',
      intro:
        'Aloita aamu Bistro Putnikissa all-you-can-eat aamiaisbuffetilla Baška Vodassa hintaan 10 € per henkilö, tarjolla joka päivä 07:00-10:00 tuoreilla, lämpimillä, kylmillä ja juomavaihtoehdoilla.',
      homeTitle: 'Aamiaisbuffet joka päivä',
      homeIntro:
        'All-you-can-eat aamiaisbuffet 10 € per henkilö, tarjolla joka päivä 07:00-10:00 Baška Vodassa.',
      priceLabel: 'Hinta',
      price: '10 € per henkilö',
      timeLabel: 'Aika',
      time: 'Joka päivä 07:00-10:00',
      inclusionsTitle: 'Sisältyy',
      inclusions: breakfastInclusionGroups.fi.flatMap((group) => group.items),
      inclusionGroups: breakfastInclusionGroups.fi,
      cta: 'Aamiaisen tiedot',
      locationCta: 'Katso sijainti',
    },
    no: {
      eyebrow: 'Frokostbuffé',
      title: 'All-you-can-eat frokostbuffé i Baška Voda',
      intro:
        'Start morgenen hos Bistro Putnik med en all-you-can-eat frokostbuffé i Baška Voda for 10 € per person, servert hver dag 07:00-10:00 med ferske, varme, kalde og drikkevalg.',
      homeTitle: 'Frokostbuffé hver dag',
      homeIntro:
        'All-you-can-eat frokostbuffé for 10 € per person, servert hver dag 07:00-10:00 i Baška Voda.',
      priceLabel: 'Pris',
      price: '10 € per person',
      timeLabel: 'Tid',
      time: 'Hver dag 07:00-10:00',
      inclusionsTitle: 'Inkludert',
      inclusions: breakfastInclusionGroups.no.flatMap((group) => group.items),
      inclusionGroups: breakfastInclusionGroups.no,
      cta: 'Frokostdetaljer',
      locationCta: 'Se beliggenhet',
    },
    pl: {
      eyebrow: 'Bufet śniadaniowy',
      title: 'Bufet śniadaniowy all-you-can-eat w Baškiej Vodzie',
      intro:
        'Zacznij poranek w Bistro Putnik od bufetu śniadaniowego all-you-can-eat w Baškiej Vodzie za 10 € od osoby, serwowanego codziennie 07:00-10:00 z wyborami świeżymi, ciepłymi, zimnymi i napojami.',
      homeTitle: 'Bufet śniadaniowy codziennie',
      homeIntro:
        'Bufet śniadaniowy all-you-can-eat za 10 € od osoby, codziennie 07:00-10:00 w Baškiej Vodzie.',
      priceLabel: 'Cena',
      price: '10 € od osoby',
      timeLabel: 'Godziny',
      time: 'Codziennie 07:00-10:00',
      inclusionsTitle: 'W cenie',
      inclusions: breakfastInclusionGroups.pl.flatMap((group) => group.items),
      inclusionGroups: breakfastInclusionGroups.pl,
      cta: 'Szczegóły śniadania',
      locationCta: 'Zobacz lokalizację',
    },
    da: {
      eyebrow: 'Morgenmadsbuffet',
      title: 'All-you-can-eat morgenmadsbuffet i Baška Voda',
      intro:
        'Start morgenen hos Bistro Putnik med en all-you-can-eat morgenmadsbuffet i Baška Voda for 10 € pr. person, serveret hver dag 07:00-10:00 med friske, varme, kolde og drikkevalg.',
      homeTitle: 'Morgenmadsbuffet hver dag',
      homeIntro:
        'All-you-can-eat morgenmadsbuffet for 10 € pr. person, serveret hver dag 07:00-10:00 i Baška Voda.',
      priceLabel: 'Pris',
      price: '10 € pr. person',
      timeLabel: 'Tid',
      time: 'Hver dag 07:00-10:00',
      inclusionsTitle: 'Inkluderet',
      inclusions: breakfastInclusionGroups.da.flatMap((group) => group.items),
      inclusionGroups: breakfastInclusionGroups.da,
      cta: 'Morgenmadsdetaljer',
      locationCta: 'Se beliggenhed',
    },
    hu: {
      eyebrow: 'Reggeli büfé',
      title: 'All-you-can-eat reggeli büfé Baška Vodában',
      intro:
        'Indítsa a reggelt a Bistro Putnikban all-you-can-eat reggeli büfével Baška Vodában, 10 € személyenként, minden nap 07:00-10:00 között friss, meleg, hideg és italválasztékkal.',
      homeTitle: 'Reggeli büfé minden nap',
      homeIntro:
        'All-you-can-eat reggeli büfé 10 € személyenként, minden nap 07:00-10:00 között Baška Vodában.',
      priceLabel: 'Ár',
      price: '10 € személyenként',
      timeLabel: 'Idő',
      time: 'Minden nap 07:00-10:00',
      inclusionsTitle: 'Tartalmazza',
      inclusions: breakfastInclusionGroups.hu.flatMap((group) => group.items),
      inclusionGroups: breakfastInclusionGroups.hu,
      cta: 'Reggeli részletek',
      locationCta: 'Helyszín megtekintése',
    },
  },
  reservations: {
    hr: {
      eyebrow: 'Rezervacije',
      title: 'Upit za stol u Bistro Putnik',
      intro:
        'Pošaljite željeni datum, vrijeme i broj osoba. Ovo je upit za rezervaciju, a stol je potvrđen tek nakon odgovora Bistro Putnik tima.',
      detailsTitle: 'Prije slanja',
      details: [
        'Online upit šalje se izravno timu lokala.',
        'Za više od 12 osoba koristite telefon ili e-poštu.',
        'Upiti su dostupni za termine od 11:00 do 21:30.',
      ],
    },
    en: {
      eyebrow: 'Reservations',
      title: 'Table request for Bistro Putnik',
      intro:
        'Send your preferred date, time, and guest count. This is a reservation request, and your table is confirmed only after the Bistro Putnik team replies.',
      detailsTitle: 'Before sending',
      details: [
        'The online request goes directly to the restaurant team.',
        'For more than 12 guests, use phone or email instead.',
        'Requests are available for times from 11:00 to 21:30.',
      ],
    },
    de: {
      eyebrow: 'Reservierungen',
      title: 'Tischanfrage für Bistro Putnik',
      intro:
        'Senden Sie Ihr gewünschtes Datum, die Uhrzeit und die Personenzahl. Dies ist eine Reservierungsanfrage; der Tisch ist erst nach Antwort des Bistro Putnik Teams bestätigt.',
      detailsTitle: 'Vor dem Senden',
      details: [
        'Die Online-Anfrage geht direkt an das Restaurantteam.',
        'Für mehr als 12 Personen nutzen Sie bitte Telefon oder E-Mail.',
        'Anfragen sind für Zeiten von 11:00 bis 21:30 möglich.',
      ],
    },
    sv: {
      eyebrow: 'Bokning',
      title: 'Bordsförfrågan till Bistro Putnik',
      intro:
        'Skicka önskat datum, tid och antal gäster. Detta är en bokningsförfrågan, och bordet är bekräftat först när Bistro Putnik-teamet svarar.',
      detailsTitle: 'Innan du skickar',
      details: [
        'Onlineförfrågan går direkt till restaurangteamet.',
        'För fler än 12 gäster, använd telefon eller e-post i stället.',
        'Förfrågningar är möjliga för tider från 11:00 till 21:30.',
      ],
    },
    fi: {
      eyebrow: 'Varaukset',
      title: 'Pöytäpyyntö Bistro Putnikiin',
      intro:
        'Lähetä toivottu päivä, aika ja henkilömäärä. Tämä on varauspyyntö, ja pöytä on vahvistettu vasta, kun Bistro Putnik -tiimi vastaa.',
      detailsTitle: 'Ennen lähettämistä',
      details: [
        'Online-pyyntö menee suoraan ravintolan tiimille.',
        'Jos henkilöitä on yli 12, käytä puhelinta tai sähköpostia.',
        'Pyyntöjä voi tehdä ajoille 11:00-21:30.',
      ],
    },
    no: {
      eyebrow: 'Reservasjoner',
      title: 'Bordforespørsel til Bistro Putnik',
      intro:
        'Send ønsket dato, tid og antall gjester. Dette er en reservasjonsforespørsel, og bordet er først bekreftet når Bistro Putnik-teamet svarer.',
      detailsTitle: 'Før du sender',
      details: [
        'Onlineforespørselen går direkte til restaurantteamet.',
        'For flere enn 12 gjester, bruk telefon eller e-post i stedet.',
        'Forespørsler er tilgjengelige for tider fra 11:00 til 21:30.',
      ],
    },
    pl: {
      eyebrow: 'Rezerwacje',
      title: 'Prośba o stolik w Bistro Putnik',
      intro:
        'Wyślij preferowaną datę, godzinę i liczbę osób. To jest prośba o rezerwację, a stolik jest potwierdzony dopiero po odpowiedzi zespołu Bistro Putnik.',
      detailsTitle: 'Przed wysłaniem',
      details: [
        'Prośba online trafia bezpośrednio do zespołu restauracji.',
        'Dla więcej niż 12 osób użyj telefonu lub e-maila.',
        'Prośby są dostępne dla godzin od 11:00 do 21:30.',
      ],
    },
    da: {
      eyebrow: 'Reservationer',
      title: 'Bordforespørgsel til Bistro Putnik',
      intro:
        'Send ønsket dato, tid og antal gæster. Dette er en reservationsforespørgsel, og bordet er først bekræftet, når Bistro Putnik-teamet svarer.',
      detailsTitle: 'Før du sender',
      details: [
        'Onlineforespørgslen går direkte til restaurantteamet.',
        'For flere end 12 gæster, brug telefon eller e-mail i stedet.',
        'Forespørgsler er mulige for tider fra 11:00 til 21:30.',
      ],
    },
    hu: {
      eyebrow: 'Asztalfoglalás',
      title: 'Asztaligény a Bistro Putnikba',
      intro:
        'Küldje el a kívánt dátumot, időpontot és vendégszámot. Ez asztalfoglalási igény, az asztal csak a Bistro Putnik válasza után visszaigazolt.',
      detailsTitle: 'Küldés előtt',
      details: [
        'Az online igény közvetlenül az étterem csapatához érkezik.',
        '12 fő felett használja a telefont vagy az e-mailt.',
        'Igények 11:00 és 21:30 közötti időpontokra küldhetők.',
      ],
    },
  },
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
