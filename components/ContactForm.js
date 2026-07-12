'use client';

import { useEffect, useState } from 'react';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = '7bfd19b9-f0a9-429a-9d2e-8262c21ba95d';
const FORM_SUBJECT = 'New Bistro Putnik website enquiry';

const formCopy = {
  hr: {
    eyebrow: 'Upit',
    title: 'Pošaljite poruku',
    intro: 'Poruka ide izravno na e-poštu Bistro Putnik tima.',
    name: 'Ime',
    email: 'E-pošta',
    phone: 'Telefon',
    message: 'Poruka',
    submit: 'Pošalji upit',
    sending: 'Slanje...',
    sent: 'Poruka je poslana. Javit ćemo se e-poštom.',
    error: 'Poruku nije bilo moguće poslati. Pokušajte ponovno ili nam pišite izravno.',
  },
  en: {
    eyebrow: 'Enquiry',
    title: 'Send a Message',
    intro: 'Your message goes directly to the Bistro Putnik team email.',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    submit: 'Send Enquiry',
    sending: 'Sending...',
    sent: 'Message sent. We will reply by email.',
    error: 'The message could not be sent. Try again or email us directly.',
  },
  de: {
    eyebrow: 'Anfrage',
    title: 'Nachricht senden',
    intro: 'Ihre Nachricht geht direkt an die E-Mail-Adresse des Bistro Putnik Teams.',
    name: 'Name',
    email: 'E-Mail',
    phone: 'Telefon',
    message: 'Nachricht',
    submit: 'Anfrage senden',
    sending: 'Wird gesendet...',
    sent: 'Nachricht gesendet. Wir antworten per E-Mail.',
    error: 'Die Nachricht konnte nicht gesendet werden. Versuchen Sie es erneut oder schreiben Sie uns direkt.',
  },
  sv: {
    eyebrow: 'Förfrågan',
    title: 'Skicka meddelande',
    intro: 'Meddelandet skickas direkt till Bistro Putnik-teamets e-post.',
    name: 'Namn',
    email: 'E-post',
    phone: 'Telefon',
    message: 'Meddelande',
    submit: 'Skicka förfrågan',
    sending: 'Skickar...',
    sent: 'Meddelandet har skickats. Vi svarar via e-post.',
    error: 'Meddelandet kunde inte skickas. Försök igen eller mejla oss direkt.',
  },
  fi: {
    eyebrow: 'Kysely',
    title: 'Lähetä viesti',
    intro: 'Viestisi menee suoraan Bistro Putnik -tiimin sähköpostiin.',
    name: 'Nimi',
    email: 'Sähköposti',
    phone: 'Puhelin',
    message: 'Viesti',
    submit: 'Lähetä kysely',
    sending: 'Lähetetään...',
    sent: 'Viesti on lähetetty. Vastaamme sähköpostitse.',
    error: 'Viestiä ei voitu lähettää. Yritä uudelleen tai lähetä sähköpostia suoraan.',
  },
  no: {
    eyebrow: 'Forespørsel',
    title: 'Send melding',
    intro: 'Meldingen går direkte til Bistro Putnik-teamets e-post.',
    name: 'Navn',
    email: 'E-post',
    phone: 'Telefon',
    message: 'Melding',
    submit: 'Send forespørsel',
    sending: 'Sender...',
    sent: 'Meldingen er sendt. Vi svarer på e-post.',
    error: 'Meldingen kunne ikke sendes. Prøv igjen eller send oss e-post direkte.',
  },
  pl: {
    eyebrow: 'Zapytanie',
    title: 'Wyślij wiadomość',
    intro: 'Wiadomość trafi bezpośrednio na e-mail zespołu Bistro Putnik.',
    name: 'Imię',
    email: 'E-mail',
    phone: 'Telefon',
    message: 'Wiadomość',
    submit: 'Wyślij zapytanie',
    sending: 'Wysyłanie...',
    sent: 'Wiadomość wysłana. Odpowiemy e-mailem.',
    error: 'Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio.',
  },
  da: {
    eyebrow: 'Forespørgsel',
    title: 'Send besked',
    intro: 'Beskeden sendes direkte til Bistro Putnik-teamets e-mail.',
    name: 'Navn',
    email: 'E-mail',
    phone: 'Telefon',
    message: 'Besked',
    submit: 'Send forespørgsel',
    sending: 'Sender...',
    sent: 'Beskeden er sendt. Vi svarer via e-mail.',
    error: 'Beskeden kunne ikke sendes. Prøv igen eller send os en e-mail direkte.',
  },
};

export default function ContactForm({
  email,
  locale = 'en',
  redirectPath = '/en/location/',
  redirectUrl = '',
}) {
  const copy = formCopy[locale] || formCopy.en;
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fallbackRedirect = redirectUrl || `${redirectPath}?contact=sent#contact-form`;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const contactStatus = params.get('contact');

    if (contactStatus === 'sent' || contactStatus === 'error') {
      setStatus(contactStatus);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set('access_key', WEB3FORMS_ACCESS_KEY);
    formData.set('subject', FORM_SUBJECT);

    setIsSubmitting(true);
    setStatus('');
    setErrorMessage('');

    try {
      if (formData.get('company')) {
        form.reset();
        setStatus('sent');
        return;
      }

      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const result = await response.json().catch(() => null);

      if (response.ok && result?.success !== false) {
        form.reset();
        setStatus('sent');
        return;
      }

      setErrorMessage(result?.message || '');
      setStatus('error');
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      id="contact-form"
      className="form-surface space-y-5"
      action={WEB3FORMS_ENDPOINT}
      method="post"
      onSubmit={handleSubmit}
    >
      <div>
        <p className="fine-print">{copy.eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl leading-none text-brand-sand">
          {copy.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#d8dfdf]">{copy.intro}</p>
      </div>

      {status ? (
        <p
          role="status"
          className={`rounded-lg border px-4 py-3 text-sm leading-6 ${
            status === 'sent'
              ? 'border-brand-sand/35 bg-brand-sand/10 text-brand-pearl'
              : 'border-red-300/35 bg-red-950/25 text-red-100'
          }`}
        >
          {status === 'sent' ? copy.sent : errorMessage || copy.error}{' '}
          <a className="font-semibold underline underline-offset-4" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      ) : null}

      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value={FORM_SUBJECT} />
      <input type="hidden" name="from_name" value="Bistro Putnik website" />
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="source" value="location-page" />
      <input type="hidden" name="redirect" value={fallbackRedirect} />

      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input name="company" type="text" tabIndex="-1" autoComplete="off" />
        </label>
        <label>
          Botcheck
          <input name="botcheck" type="checkbox" tabIndex="-1" autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="form-field">
          <span className="form-label">{copy.name}</span>
          <input
            className="form-input"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength="120"
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
          />
        </label>
      </div>

      <label className="form-field">
        <span className="form-label">{copy.phone}</span>
        <input
          className="form-input"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength="80"
        />
      </label>

      <label className="form-field">
        <span className="form-label">{copy.message}</span>
        <textarea
          className="form-input min-h-36 resize-y"
          name="message"
          required
          maxLength="3000"
        />
      </label>

      <button
        className="brand-button w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? copy.sending : copy.submit}
      </button>
    </form>
  );
}
