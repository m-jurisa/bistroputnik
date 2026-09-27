import { getPublications, dailyOffer } from '../data/pricing';
import { getPriceCopy } from '../menu/price-copy.mjs';
import { formatReferenceDate, restaurantDate } from '../menu/pricing.mjs';
import SectionHeading from './SectionHeading';

export default function PricesPage({ locale }) {
  const copy = getPriceCopy(locale);
  const { full, daily, archive } = getPublications();
  const current = dailyOffer.offerDate === restaurantDate() && dailyOffer.items.length > 0;
  return (
    <section className="section-shell"><div className="container-shell space-y-8">
      <SectionHeading eyebrow="Bistro Putnik" title={copy.title} description={copy.explanation} />
      <div className="panel-surface space-y-5 p-6 sm:p-8">
        <p className="body-copy text-sm">{copy.downloadNote}</p>
        <div className="flex flex-wrap gap-3">
          <a className="brand-button" download href={full.href}>{copy.full}</a>
          <span data-daily-current="" data-offer-date={dailyOffer.offerDate} data-offer-active={dailyOffer.items.length > 0} hidden={!current}>
            <a className="brand-button-secondary" download href={daily.href}>{copy.daily} · {formatReferenceDate(dailyOffer.offerDate, locale)}</a>
          </span>
        </div>
        <p className="text-sm leading-6 text-[#d8dfdf]">{copy.dailyNote}</p>
        <p className="fine-print">{copy.published}: <time dateTime={full.publishedAt}>{new Intl.DateTimeFormat(locale === 'no' ? 'nb' : locale, { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/Zagreb' }).format(new Date(full.publishedAt))} · Europe/Zagreb</time></p>
      </div>
      <section className="space-y-4">
        <h2 className="font-display text-3xl text-brand-sand">{copy.archive}</h2>
        <ul className="divide-y divide-brand-line/20">
          {archive.map(file => <li key={file.filename} className="py-4">
            <a className="text-sm text-[#f4eee0] underline underline-offset-4" href={file.href} download>
              {file.kind === 'full' ? copy.full : copy.daily} · {formatReferenceDate(file.offerDate, locale)} · #{file.sequence}
            </a>
            <p className="mt-1 break-all text-xs text-[#aebdc0]">{file.filename}</p>
          </li>)}
        </ul>
      </section>
      <section className="space-y-4 border-t border-brand-line/20 pt-6">
        <h2 className="font-display text-3xl text-brand-sand">{copy.sources}</h2>
        <ul className="space-y-3 text-sm text-[#d8dfdf]">
          <li><a className="underline underline-offset-4" href="https://narodne-novine.nn.hr/clanci/sluzbeni/2026_09_101_1212.html">Narodne novine 101/2026 · 1212</a></li>
          <li><a className="underline underline-offset-4" href="https://narodne-novine.nn.hr/clanci/sluzbeni/2026_09_101_1213.html">Narodne novine 101/2026 · 1213</a></li>
          <li><a className="underline underline-offset-4" href="https://mingo.gov.hr/UserDocsImages/slike/MINGO_Poja%C5%A1njenja_dodatna%20cijena_objava%20cjenika.pdf">{copy.guidance}</a></li>
        </ul>
      </section>
    </div></section>
  );
}
