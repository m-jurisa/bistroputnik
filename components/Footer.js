'use client';

import { useLanguage } from './LanguageProvider';

export default function Footer({ business }) {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="relative z-10 border-t border-brand-line/20">
      <div className="container-shell grid gap-8 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="font-display text-3xl leading-none text-brand-sand">
            {business.venue}
          </p>
          <address className="mt-5 space-y-1 text-sm not-italic leading-6 text-[#d8dfdf]">
            <p>
              <span className="text-brand-sand/80">{t.footer.company}: </span>
              {business.companyName}
            </p>
            <p>
              <span className="text-brand-sand/80">{t.footer.address}: </span>
              {business.registeredAddress}
            </p>
            <p>
              <span className="text-brand-sand/80">{t.footer.oib}: </span>
              {business.oib}
            </p>
            <p>
              <span className="text-brand-sand/80">{t.footer.mbs}: </span>
              {business.mbs}
            </p>
            <p>
              <span className="text-brand-sand/80">
                {t.footer.registrationNumber}:{' '}
              </span>
              {business.registrationNumber}
            </p>
          </address>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:text-right">
          <div>
            <p className="fine-print">{t.footer.contact}</p>
            <a
              href={`mailto:${business.email}`}
              className="mt-2 inline-block text-sm font-semibold text-[#f4eee0] hover:text-brand-sand"
            >
              {business.email}
            </a>
          </div>
          <div>
            <p className="fine-print">{t.footer.website}</p>
            <a
              href={`https://${business.website}`}
              className="mt-2 inline-block text-sm font-semibold text-[#f4eee0] hover:text-brand-sand"
            >
              {business.website}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
