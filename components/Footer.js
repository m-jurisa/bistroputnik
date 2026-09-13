export default function Footer({ business, chrome }) {
  const labels = chrome?.labels || {};
  const phone = chrome?.phone || '';
  const telHref = phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : '';

  return (
    <footer id="contact" className="relative z-10 border-t border-brand-line/20">
      <div className="container-shell grid gap-8 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="font-display text-3xl leading-none text-brand-sand">
            {business.venue}
          </p>
          <address className="mt-5 space-y-1 text-sm not-italic leading-6 text-[#d8dfdf]">
            <p>
              <span className="text-brand-sand/80">{labels.company}: </span>
              {business.companyName}
            </p>
            <p>
              <span className="text-brand-sand/80">{labels.address}: </span>
              {business.registeredAddress}
            </p>
            <p>
              <span className="text-brand-sand/80">{labels.oib}: </span>
              {business.oib}
            </p>
            <p>
              <span className="text-brand-sand/80">{labels.mbs}: </span>
              {business.mbs}
            </p>
            <p>
              <span className="text-brand-sand/80">
                {labels.registrationNumber}:{' '}
              </span>
              {business.registrationNumber}
            </p>
          </address>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:text-right">
          <div>
            <p className="fine-print">{labels.location}</p>
            <a
              href={chrome?.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-[#f4eee0] hover:text-brand-sand"
            >
              {chrome?.fullAddress}
            </a>
          </div>
          <div>
            <p className="fine-print">{labels.contact}</p>
            <a
              href={`mailto:${business.email}`}
              className="mt-2 inline-block text-sm font-semibold text-[#f4eee0] hover:text-brand-sand"
            >
              {business.email}
            </a>
            {phone ? (
              <a
                href={telHref}
                className="mt-2 block text-sm font-semibold text-[#f4eee0] hover:text-brand-sand"
              >
                {phone}
              </a>
            ) : null}
          </div>
          <div>
            <p className="fine-print">{labels.website}</p>
            <a
              href={chrome?.siteUrl}
              className="mt-2 inline-block text-sm font-semibold text-[#f4eee0] hover:text-brand-sand"
            >
              {chrome?.displayHost}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
