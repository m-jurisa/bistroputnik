'use client';

import { useEffect, useState } from 'react';

const WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_RESERVATION_WEBHOOK_URL || '';
const SOURCE = 'bistroputnik.com';
const MIN_TIME = '11:00';
const MAX_TIME = '21:30';
const MAX_GUESTS = 12;

const formCopy = {
  hr: {
    eyebrow: 'Rezervacije',
    title: 'Pošaljite upit za stol',
    intro:
      'Upit ide timu Bistro Putnik. Stol je potvrđen tek nakon našeg odgovora.',
    name: 'Ime i prezime',
    email: 'E-pošta',
    phone: 'Telefon',
    guests: 'Broj osoba',
    date: 'Datum',
    time: 'Vrijeme',
    note: 'Napomena',
    notePlaceholder: 'Alergije, dječja stolica, posebna prigoda...',
    consent:
      'Dopuštam Bistro Putnik timu da koristi ove podatke samo za odgovor na upit za rezervaciju.',
    guestsHint: 'Online upiti su za 1-12 osoba.',
    timeHint: 'Dostupna vremena za upit: 11:00-21:30.',
    submit: 'Pošalji upit',
    sending: 'Slanje...',
    sent:
      'Upit je zaprimljen. Stol još nije potvrđen; Bistro Putnik javit će vam se e-poštom ili telefonom.',
    error:
      'Upit nije bilo moguće poslati. Pokušajte ponovno ili nas kontaktirajte izravno.',
    unavailable:
      'Online upiti za rezervacije trenutačno nisu dostupni. Molimo nazovite nas ili pošaljite e-poštu.',
    requiredError: 'Ispunite sva obvezna polja.',
    guestsError: 'Unesite cijeli broj osoba.',
    largeGroupError:
      'Za više od 12 osoba molimo nazovite nas ili pošaljite e-poštu.',
    dateError: 'Odaberite današnji ili budući datum.',
    timeError: 'Odaberite vrijeme između 11:00 i 21:30.',
    consentError: 'Potrebna je privola za odgovor na upit.',
    fallbackPrefix: 'Izravni kontakt:',
  },
  en: {
    eyebrow: 'Reservations',
    title: 'Request a table',
    intro:
      'Your request goes to the Bistro Putnik team. The table is confirmed only after we reply.',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    guests: 'Guests',
    date: 'Date',
    time: 'Time',
    note: 'Note',
    notePlaceholder: 'Allergies, child seat, occasion...',
    consent:
      'I allow Bistro Putnik to use these contact details only to reply about this reservation request.',
    guestsHint: 'Online requests are for 1-12 guests.',
    timeHint: 'Request times are available from 11:00 to 21:30.',
    submit: 'Send Request',
    sending: 'Sending...',
    sent:
      'Request received. This is not a confirmed table yet; Bistro Putnik will reply by email or phone.',
    error:
      'The reservation request could not be sent. Try again or contact us directly.',
    unavailable:
      'Online reservation requests are currently unavailable. Please call or email us directly.',
    requiredError: 'Please complete all required fields.',
    guestsError: 'Enter a whole number of guests.',
    largeGroupError: 'For more than 12 guests, please call or email us directly.',
    dateError: 'Choose today or a future date.',
    timeError: 'Choose a time between 11:00 and 21:30.',
    consentError: 'Consent is required so we can reply to this request.',
    fallbackPrefix: 'Direct contact:',
  },
  de: {
    eyebrow: 'Reservierungen',
    title: 'Tisch anfragen',
    intro:
      'Ihre Anfrage geht an das Bistro Putnik Team. Der Tisch ist erst nach unserer Antwort bestätigt.',
    name: 'Name',
    email: 'E-Mail',
    phone: 'Telefon',
    guests: 'Personen',
    date: 'Datum',
    time: 'Uhrzeit',
    note: 'Hinweis',
    notePlaceholder: 'Allergien, Kinderstuhl, Anlass...',
    consent:
      'Ich erlaube Bistro Putnik, diese Kontaktdaten nur zur Antwort auf diese Reservierungsanfrage zu nutzen.',
    guestsHint: 'Online-Anfragen sind für 1-12 Personen.',
    timeHint: 'Anfragezeiten: 11:00-21:30.',
    submit: 'Anfrage senden',
    sending: 'Wird gesendet...',
    sent:
      'Anfrage erhalten. Der Tisch ist noch nicht bestätigt; Bistro Putnik antwortet per E-Mail oder Telefon.',
    error:
      'Die Reservierungsanfrage konnte nicht gesendet werden. Versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
    unavailable:
      'Online-Reservierungsanfragen sind derzeit nicht verfügbar. Bitte rufen Sie uns an oder schreiben Sie uns eine E-Mail.',
    requiredError: 'Bitte füllen Sie alle Pflichtfelder aus.',
    guestsError: 'Geben Sie eine ganze Personenzahl ein.',
    largeGroupError:
      'Für mehr als 12 Personen rufen Sie uns bitte an oder schreiben Sie uns eine E-Mail.',
    dateError: 'Wählen Sie heute oder ein zukünftiges Datum.',
    timeError: 'Wählen Sie eine Uhrzeit zwischen 11:00 und 21:30.',
    consentError: 'Die Zustimmung ist erforderlich, damit wir antworten können.',
    fallbackPrefix: 'Direkter Kontakt:',
  },
  sv: {
    eyebrow: 'Bokning',
    title: 'Skicka bordsförfrågan',
    intro:
      'Din förfrågan går till Bistro Putnik-teamet. Bordet är bekräftat först när vi svarar.',
    name: 'Namn',
    email: 'E-post',
    phone: 'Telefon',
    guests: 'Gäster',
    date: 'Datum',
    time: 'Tid',
    note: 'Notering',
    notePlaceholder: 'Allergier, barnstol, tillfälle...',
    consent:
      'Jag tillåter Bistro Putnik att använda dessa kontaktuppgifter endast för att svara på bokningsförfrågan.',
    guestsHint: 'Onlineförfrågningar gäller 1-12 gäster.',
    timeHint: 'Förfrågningstider: 11:00-21:30.',
    submit: 'Skicka förfrågan',
    sending: 'Skickar...',
    sent:
      'Förfrågan är mottagen. Bordet är inte bekräftat ännu; Bistro Putnik svarar via e-post eller telefon.',
    error:
      'Bokningsförfrågan kunde inte skickas. Försök igen eller kontakta oss direkt.',
    unavailable:
      'Onlineförfrågningar för bokning är inte tillgängliga just nu. Ring eller mejla oss direkt.',
    requiredError: 'Fyll i alla obligatoriska fält.',
    guestsError: 'Ange ett helt antal gäster.',
    largeGroupError: 'För fler än 12 gäster, ring eller mejla oss direkt.',
    dateError: 'Välj dagens datum eller ett framtida datum.',
    timeError: 'Välj en tid mellan 11:00 och 21:30.',
    consentError: 'Samtycke krävs för att vi ska kunna svara.',
    fallbackPrefix: 'Direktkontakt:',
  },
  fi: {
    eyebrow: 'Varaukset',
    title: 'Lähetä pöytäpyyntö',
    intro:
      'Pyyntösi menee Bistro Putnik -tiimille. Pöytä on vahvistettu vasta, kun vastaamme.',
    name: 'Nimi',
    email: 'Sähköposti',
    phone: 'Puhelin',
    guests: 'Henkilöä',
    date: 'Päivä',
    time: 'Aika',
    note: 'Huomio',
    notePlaceholder: 'Allergiat, syöttötuoli, tilaisuus...',
    consent:
      'Sallin Bistro Putnikin käyttää näitä yhteystietoja vain tähän varauspyyntöön vastaamiseen.',
    guestsHint: 'Online-pyynnöt ovat 1-12 henkilölle.',
    timeHint: 'Pyyntöajat: 11:00-21:30.',
    submit: 'Lähetä pyyntö',
    sending: 'Lähetetään...',
    sent:
      'Pyyntö vastaanotettu. Pöytää ei ole vielä vahvistettu; Bistro Putnik vastaa sähköpostitse tai puhelimitse.',
    error:
      'Varauspyyntöä ei voitu lähettää. Yritä uudelleen tai ota yhteyttä suoraan.',
    unavailable:
      'Online-varauspyynnöt eivät ole juuri nyt käytettävissä. Soita tai lähetä sähköpostia suoraan.',
    requiredError: 'Täytä kaikki pakolliset kentät.',
    guestsError: 'Anna kokonaisluku henkilömääräksi.',
    largeGroupError:
      'Jos henkilöitä on yli 12, soita tai lähetä sähköpostia suoraan.',
    dateError: 'Valitse tämä päivä tai tuleva päivä.',
    timeError: 'Valitse aika välillä 11:00-21:30.',
    consentError: 'Suostumus tarvitaan, jotta voimme vastata pyyntöön.',
    fallbackPrefix: 'Suora yhteys:',
  },
  no: {
    eyebrow: 'Reservasjoner',
    title: 'Send bordforespørsel',
    intro:
      'Forespørselen går til Bistro Putnik-teamet. Bordet er først bekreftet når vi svarer.',
    name: 'Navn',
    email: 'E-post',
    phone: 'Telefon',
    guests: 'Gjester',
    date: 'Dato',
    time: 'Tid',
    note: 'Merknad',
    notePlaceholder: 'Allergier, barnestol, anledning...',
    consent:
      'Jeg tillater Bistro Putnik å bruke disse kontaktopplysningene bare for å svare på denne reservasjonsforespørselen.',
    guestsHint: 'Onlineforespørsler gjelder 1-12 gjester.',
    timeHint: 'Forespørselstider: 11:00-21:30.',
    submit: 'Send forespørsel',
    sending: 'Sender...',
    sent:
      'Forespørselen er mottatt. Bordet er ikke bekreftet ennå; Bistro Putnik svarer på e-post eller telefon.',
    error:
      'Reservasjonsforespørselen kunne ikke sendes. Prøv igjen eller kontakt oss direkte.',
    unavailable:
      'Online reservasjonsforespørsler er ikke tilgjengelige nå. Ring eller send oss e-post direkte.',
    requiredError: 'Fyll ut alle obligatoriske felt.',
    guestsError: 'Skriv inn et helt antall gjester.',
    largeGroupError: 'For flere enn 12 gjester, ring eller send oss e-post direkte.',
    dateError: 'Velg dagens dato eller en fremtidig dato.',
    timeError: 'Velg et tidspunkt mellom 11:00 og 21:30.',
    consentError: 'Samtykke kreves for at vi kan svare.',
    fallbackPrefix: 'Direkte kontakt:',
  },
  pl: {
    eyebrow: 'Rezerwacje',
    title: 'Wyślij prośbę o stolik',
    intro:
      'Prośba trafia do zespołu Bistro Putnik. Stolik jest potwierdzony dopiero po naszej odpowiedzi.',
    name: 'Imię i nazwisko',
    email: 'E-mail',
    phone: 'Telefon',
    guests: 'Liczba osób',
    date: 'Data',
    time: 'Godzina',
    note: 'Notatka',
    notePlaceholder: 'Alergie, krzesełko dla dziecka, okazja...',
    consent:
      'Zgadzam się, aby Bistro Putnik użyło tych danych kontaktowych wyłącznie do odpowiedzi na tę prośbę o rezerwację.',
    guestsHint: 'Prośby online są dla 1-12 osób.',
    timeHint: 'Godziny zapytań: 11:00-21:30.',
    submit: 'Wyślij prośbę',
    sending: 'Wysyłanie...',
    sent:
      'Prośba została odebrana. Stolik nie jest jeszcze potwierdzony; Bistro Putnik odpowie e-mailem lub telefonicznie.',
    error:
      'Nie udało się wysłać prośby o rezerwację. Spróbuj ponownie albo skontaktuj się bezpośrednio.',
    unavailable:
      'Prośby o rezerwację online są teraz niedostępne. Zadzwoń lub napisz e-mail bezpośrednio.',
    requiredError: 'Wypełnij wszystkie wymagane pola.',
    guestsError: 'Podaj pełną liczbę osób.',
    largeGroupError:
      'Dla więcej niż 12 osób prosimy zadzwonić lub napisać e-mail bezpośrednio.',
    dateError: 'Wybierz dzisiejszą lub przyszłą datę.',
    timeError: 'Wybierz godzinę między 11:00 a 21:30.',
    consentError: 'Zgoda jest wymagana, abyśmy mogli odpowiedzieć.',
    fallbackPrefix: 'Kontakt bezpośredni:',
  },
  da: {
    eyebrow: 'Reservationer',
    title: 'Send bordforespørgsel',
    intro:
      'Din forespørgsel går til Bistro Putnik-teamet. Bordet er først bekræftet, når vi svarer.',
    name: 'Navn',
    email: 'E-mail',
    phone: 'Telefon',
    guests: 'Gæster',
    date: 'Dato',
    time: 'Tid',
    note: 'Bemærkning',
    notePlaceholder: 'Allergier, barnestol, anledning...',
    consent:
      'Jeg tillader Bistro Putnik at bruge disse kontaktoplysninger kun til at svare på denne reservationsforespørgsel.',
    guestsHint: 'Onlineforespørgsler er for 1-12 gæster.',
    timeHint: 'Forespørgselstider: 11:00-21:30.',
    submit: 'Send forespørgsel',
    sending: 'Sender...',
    sent:
      'Forespørgslen er modtaget. Bordet er ikke bekræftet endnu; Bistro Putnik svarer via e-mail eller telefon.',
    error:
      'Reservationsforespørgslen kunne ikke sendes. Prøv igen eller kontakt os direkte.',
    unavailable:
      'Online reservationsforespørgsler er ikke tilgængelige nu. Ring eller send os en e-mail direkte.',
    requiredError: 'Udfyld alle obligatoriske felter.',
    guestsError: 'Indtast et helt antal gæster.',
    largeGroupError: 'For flere end 12 gæster, ring eller send os en e-mail direkte.',
    dateError: 'Vælg dagens dato eller en fremtidig dato.',
    timeError: 'Vælg et tidspunkt mellem 11:00 og 21:30.',
    consentError: 'Samtykke er nødvendigt, så vi kan svare.',
    fallbackPrefix: 'Direkte kontakt:',
  },
  hu: {
    eyebrow: 'Asztalfoglalás',
    title: 'Küldjön asztaligényt',
    intro:
      'Az igény a Bistro Putnik csapatához érkezik. Az asztal csak a válaszunk után tekinthető visszaigazoltnak.',
    name: 'Név',
    email: 'E-mail',
    phone: 'Telefon',
    guests: 'Vendégek száma',
    date: 'Dátum',
    time: 'Időpont',
    note: 'Megjegyzés',
    notePlaceholder: 'Allergiák, etetőszék, alkalom...',
    consent:
      'Engedélyezem, hogy a Bistro Putnik ezeket az elérhetőségeket csak erre az asztalfoglalási igényre válaszolva használja.',
    guestsHint: 'Az online igények 1-12 vendégre szólnak.',
    timeHint: 'Igényelhető időpontok: 11:00-21:30.',
    submit: 'Igény elküldése',
    sending: 'Küldés...',
    sent:
      'Az igényt megkaptuk. Az asztal még nincs visszaigazolva; a Bistro Putnik e-mailben vagy telefonon válaszol.',
    error:
      'Az asztalfoglalási igényt nem sikerült elküldeni. Próbálja újra, vagy lépjen kapcsolatba velünk közvetlenül.',
    unavailable:
      'Az online asztalfoglalási igények jelenleg nem érhetők el. Kérjük, hívjon minket vagy írjon e-mailt.',
    requiredError: 'Töltse ki az összes kötelező mezőt.',
    guestsError: 'Adjon meg egész számú vendéget.',
    largeGroupError:
      '12 fő felett kérjük, hívjon minket vagy írjon e-mailt közvetlenül.',
    dateError: 'Mai vagy jövőbeli dátumot válasszon.',
    timeError: 'Válasszon időpontot 11:00 és 21:30 között.',
    consentError: 'A válaszadáshoz szükség van a hozzájárulásra.',
    fallbackPrefix: 'Közvetlen kapcsolat:',
  },
};

function getTodayValue() {
  const now = new Date();
  const timezoneOffsetMs = now.getTimezoneOffset() * 60 * 1000;
  return new Date(now.getTime() - timezoneOffsetMs).toISOString().slice(0, 10);
}

function clean(value) {
  return String(value || '').trim();
}

function isWholeNumber(value) {
  return Number.isInteger(value);
}

function isValidTime(value) {
  return /^\d{2}:\d{2}$/.test(value) && value >= MIN_TIME && value <= MAX_TIME;
}

function FallbackLinks({ copy, email, phone }) {
  const phoneHref = phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : '';

  return (
    <span className="mt-2 block">
      {copy.fallbackPrefix}{' '}
      {phone ? (
        <>
          <a className="font-semibold underline underline-offset-4" href={phoneHref}>
            {phone}
          </a>
          {' · '}
        </>
      ) : null}
      <a className="font-semibold underline underline-offset-4" href={`mailto:${email}`}>
        {email}
      </a>
    </span>
  );
}

export default function ReservationForm({ email, phone = '', locale = 'en' }) {
  const copy = formCopy[locale] || formCopy.en;
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [today, setToday] = useState('');
  const onlineAvailable = Boolean(WEBHOOK_URL);

  useEffect(() => {
    setToday(getTodayValue());
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatus('');
    setErrorMessage('');

    try {
      if (formData.get('company')) {
        form.reset();
        setStatus('sent');
        return;
      }

      if (!onlineAvailable) {
        setErrorMessage(copy.unavailable);
        setStatus('error');
        return;
      }

      const name = clean(formData.get('name'));
      const formEmail = clean(formData.get('email'));
      const formPhone = clean(formData.get('phone'));
      const guestsValue = clean(formData.get('guests'));
      const guests = Number(guestsValue);
      const date = clean(formData.get('date'));
      const time = clean(formData.get('time'));
      const note = clean(formData.get('note'));
      const consent = formData.get('consent') === 'on';

      let validationMessage = '';

      if (!name || !formEmail || !formPhone || !date || !time) {
        validationMessage = copy.requiredError;
      } else if (!consent) {
        validationMessage = copy.consentError;
      } else if (!guestsValue || !isWholeNumber(guests) || guests < 1) {
        validationMessage = copy.guestsError;
      } else if (guests > MAX_GUESTS) {
        validationMessage = copy.largeGroupError;
      } else if (date < getTodayValue()) {
        validationMessage = copy.dateError;
      } else if (!isValidTime(time)) {
        validationMessage = copy.timeError;
      }

      if (validationMessage) {
        setErrorMessage(validationMessage);
        setStatus('error');
        return;
      }

      const payload = {
        type: 'reservation_request',
        source: SOURCE,
        locale,
        name,
        email: formEmail,
        phone: formPhone,
        guests,
        date,
        time,
        note,
        consent,
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);

      if (response.ok && result?.success !== false) {
        form.reset();
        setStatus('sent');
        return;
      }

      setErrorMessage(result?.message || copy.error);
      setStatus('error');
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      id="reservation-form"
      className="form-surface space-y-5"
      onSubmit={handleSubmit}
    >
      <div>
        <p className="fine-print">{copy.eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl leading-none text-brand-sand">
          {copy.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#d8dfdf]">{copy.intro}</p>
      </div>

      {!onlineAvailable ? (
        <p
          role="status"
          className="rounded-lg border border-red-300/35 bg-red-950/25 px-4 py-3 text-sm leading-6 text-red-100"
        >
          {copy.unavailable}
          <FallbackLinks copy={copy} email={email} phone={phone} />
        </p>
      ) : null}

      {status ? (
        <p
          role="status"
          className={`rounded-lg border px-4 py-3 text-sm leading-6 ${
            status === 'sent'
              ? 'border-brand-sand/35 bg-brand-sand/10 text-brand-pearl'
              : 'border-red-300/35 bg-red-950/25 text-red-100'
          }`}
        >
          {status === 'sent' ? copy.sent : errorMessage || copy.error}
          {status === 'error' ? (
            <FallbackLinks copy={copy} email={email} phone={phone} />
          ) : null}
        </p>
      ) : null}

      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input name="company" type="text" tabIndex="-1" autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="form-field sm:col-span-2">
          <span className="form-label">{copy.name}</span>
          <input
            className="form-input"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength="120"
            disabled={!onlineAvailable || isSubmitting}
          />
        </label>

        <label className="form-field">
          <span className="form-label">{copy.email}</span>
          <input
            className="form-input"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength="180"
            disabled={!onlineAvailable || isSubmitting}
          />
        </label>

        <label className="form-field">
          <span className="form-label">{copy.phone}</span>
          <input
            className="form-input"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength="80"
            disabled={!onlineAvailable || isSubmitting}
          />
        </label>

        <label className="form-field">
          <span className="form-label">{copy.guests}</span>
          <input
            className="form-input"
            name="guests"
            type="number"
            inputMode="numeric"
            min="1"
            max="99"
            defaultValue="2"
            required
            disabled={!onlineAvailable || isSubmitting}
          />
          <span className="text-xs leading-5 text-[#b9c8ca]">{copy.guestsHint}</span>
        </label>

        <label className="form-field">
          <span className="form-label">{copy.date}</span>
          <input
            className="form-input"
            name="date"
            type="date"
            min={today || undefined}
            required
            disabled={!onlineAvailable || isSubmitting}
          />
        </label>

        <label className="form-field">
          <span className="form-label">{copy.time}</span>
          <input
            className="form-input"
            name="time"
            type="time"
            min={MIN_TIME}
            max={MAX_TIME}
            step="900"
            required
            disabled={!onlineAvailable || isSubmitting}
          />
          <span className="text-xs leading-5 text-[#b9c8ca]">{copy.timeHint}</span>
        </label>

        <label className="form-field sm:col-span-2">
          <span className="form-label">{copy.note}</span>
          <textarea
            className="form-input min-h-28 resize-y"
            name="note"
            rows="4"
            maxLength="1000"
            placeholder={copy.notePlaceholder}
            disabled={!onlineAvailable || isSubmitting}
          />
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm leading-6 text-[#d8dfdf]">
        <input
          className="mt-1 h-4 w-4 rounded border-brand-line/35 bg-brand-deep/40 accent-brand-sand"
          name="consent"
          type="checkbox"
          required
          disabled={!onlineAvailable || isSubmitting}
        />
        <span>{copy.consent}</span>
      </label>

      <button
        className="brand-button w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        type="submit"
        disabled={!onlineAvailable || isSubmitting}
      >
        {isSubmitting ? copy.sending : copy.submit}
      </button>
    </form>
  );
}
