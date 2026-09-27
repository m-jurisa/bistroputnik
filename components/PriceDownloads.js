import { getPublications } from '../data/pricing';
import { getPriceCopy } from '../menu/price-copy.mjs';
import { getLocalizedPath } from '../data/site-config';

export default function PriceDownloads({ locale = 'en', daily = false, explain = true }) {
  const copy = getPriceCopy(locale);
  const files = getPublications();
  return (
    <div className="price-downloads rounded-lg border border-brand-line/25 bg-brand-deep/30 p-5 sm:p-6">
      {explain ? <p className="mb-4 max-w-3xl text-sm leading-6 text-[#d8dfdf]">{copy.explanation}</p> : null}
      <div className="flex flex-wrap items-center gap-3">
        {daily && files.daily ? <a className="brand-button-secondary" download href={files.daily.href}>{copy.daily}</a> : null}
        <a className="brand-button-secondary" download href={files.full.href}>{copy.full}</a>
        <a className="text-sm text-brand-sand underline underline-offset-4" href={getLocalizedPath(locale, 'prices')}>{copy.title}</a>
      </div>
    </div>
  );
}
