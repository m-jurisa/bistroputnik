import { formatEuro, formatReferenceDate } from '../menu/pricing.mjs';
import { getPriceCopy } from '../menu/price-copy.mjs';

export default function Price({ item, locale = 'en', className = '', prominent = false }) {
  const copy = getPriceCopy(locale);
  return (
    <span className={`price-pair ${className}`} data-price-id={item.id}>
      <span className={prominent ? 'price-current price-current-prominent' : 'price-current'}>
        <span className="sr-only">{copy.current}: </span>{formatEuro(item.price, locale)}
      </span>
      <span className="price-reference">
        {copy.reference} <time dateTime={item.referenceDate}>{formatReferenceDate(item.referenceDate, locale)}</time>
        <span className="price-reference-value">{formatEuro(item.referencePrice, locale)}</span>
      </span>
    </span>
  );
}
