import {
  getLocalizedPath,
} from '../data/site-config';

const entryCopy = {
  hr: {
    eyebrow: 'Rezervacije',
    title: 'Pošaljite upit za stol',
    text:
      'Online upiti su za 1-12 osoba. Stol je potvrđen tek nakon odgovora Bistro Putnik tima.',
    cta: 'Otvori rezervacije',
    emailAction: 'Pošalji e-poštu',
    fallback: 'Za veće grupe ili hitne promjene nazovite nas ili pošaljite e-poštu.',
  },
  en: {
    eyebrow: 'Reservations',
    title: 'Request a table',
    text:
      'Online requests are for 1-12 guests. Your table is confirmed only after the Bistro Putnik team replies.',
    cta: 'Open Reservations',
    emailAction: 'Email Us',
    fallback: 'For larger groups or urgent changes, call or email us directly.',
  },
  de: {
    eyebrow: 'Reservierungen',
    title: 'Tisch anfragen',
    text:
      'Online-Anfragen sind für 1-12 Personen. Der Tisch ist erst nach Antwort des Bistro Putnik Teams bestätigt.',
    cta: 'Reservierungen öffnen',
    emailAction: 'E-Mail senden',
    fallback:
      'Für größere Gruppen oder dringende Änderungen rufen Sie uns an oder schreiben Sie uns eine E-Mail.',
  },
  sv: {
    eyebrow: 'Bokning',
    title: 'Skicka bordsförfrågan',
    text:
      'Onlineförfrågningar gäller 1-12 gäster. Bordet är bekräftat först när Bistro Putnik-teamet svarar.',
    cta: 'Öppna bokning',
    emailAction: 'Skicka e-post',
    fallback: 'För större grupper eller brådskande ändringar, ring eller mejla oss direkt.',
  },
  fi: {
    eyebrow: 'Varaukset',
    title: 'Lähetä pöytäpyyntö',
    text:
      'Online-pyynnöt ovat 1-12 henkilölle. Pöytä on vahvistettu vasta, kun Bistro Putnik -tiimi vastaa.',
    cta: 'Avaa varaukset',
    emailAction: 'Lähetä sähköposti',
    fallback:
      'Suuremmille ryhmille tai kiireellisille muutoksille soita tai lähetä sähköpostia suoraan.',
  },
  no: {
    eyebrow: 'Reservasjoner',
    title: 'Send bordforespørsel',
    text:
      'Onlineforespørsler gjelder 1-12 gjester. Bordet er først bekreftet når Bistro Putnik-teamet svarer.',
    cta: 'Åpne reservasjoner',
    emailAction: 'Send e-post',
    fallback: 'For større grupper eller raske endringer, ring eller send oss e-post direkte.',
  },
  pl: {
    eyebrow: 'Rezerwacje',
    title: 'Wyślij prośbę o stolik',
    text:
      'Prośby online są dla 1-12 osób. Stolik jest potwierdzony dopiero po odpowiedzi zespołu Bistro Putnik.',
    cta: 'Otwórz rezerwacje',
    emailAction: 'Wyślij e-mail',
    fallback:
      'Dla większych grup lub pilnych zmian prosimy zadzwonić albo napisać e-mail bezpośrednio.',
  },
  da: {
    eyebrow: 'Reservationer',
    title: 'Send bordforespørgsel',
    text:
      'Onlineforespørgsler er for 1-12 gæster. Bordet er først bekræftet, når Bistro Putnik-teamet svarer.',
    cta: 'Åbn reservationer',
    emailAction: 'Send e-mail',
    fallback: 'For større grupper eller hurtige ændringer, ring eller send os en e-mail direkte.',
  },
  hu: {
    eyebrow: 'Asztalfoglalás',
    title: 'Küldjön asztaligényt',
    text:
      'Az online igények 1-12 vendégre szólnak. Az asztal csak a Bistro Putnik válasza után visszaigazolt.',
    cta: 'Asztalfoglalás megnyitása',
    emailAction: 'E-mail küldése',
    fallback:
      'Nagyobb csoportokhoz vagy sürgős módosításokhoz hívjon minket vagy írjon e-mailt.',
  },
};

export default function ReservationEntry({ locale = 'en', email, phone }) {
  const copy = entryCopy[locale] || entryCopy.en;
  const phoneHref = phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : '';

  return (
    <div className="panel-surface p-6 sm:p-8">
      <p className="fine-print">{copy.eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl leading-none text-brand-sand">
        {copy.title}
      </h2>
      <p className="mt-4 text-sm leading-6 text-[#d8dfdf]">{copy.text}</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href={getLocalizedPath(locale, 'reservations')} className="brand-button">
          {copy.cta}
        </a>
        <a href={`mailto:${email}`} className="brand-button-secondary">
          {copy.emailAction}
        </a>
      </div>
      <p className="mt-4 text-xs leading-5 text-[#b9c8ca]">
        {copy.fallback}
        {phone ? (
          <>
            {' '}
            <a className="font-semibold text-[#f4eee0] hover:text-brand-sand" href={phoneHref}>
              {phone}
            </a>
          </>
        ) : null}
      </p>
    </div>
  );
}
