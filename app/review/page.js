import JsonLd from '../../components/JsonLd';
import ReviewPageContent from '../../components/ReviewPageContent';
import { LanguageProvider } from '../../components/LanguageProvider';
import { menuData } from '../../data/menu';
import { reviewLinks } from '../../data/review-links';
import {
  buildBreadcrumbSchema,
  buildJsonLdGraph,
  buildMetadata,
  buildOrganizationSchema,
  buildRestaurantSchema,
  buildWebsiteSchema,
} from '../../data/seo';
import { getAbsoluteUrl, getLocalizedPath, siteConfig } from '../../data/site-config';

export const metadata = buildMetadata({ locale: 'en', routeKey: 'reviews' });

export default function ReviewPage() {
  return (
    <>
      <JsonLd
        data={buildJsonLdGraph([
          buildWebsiteSchema(),
          buildOrganizationSchema(),
          buildRestaurantSchema(),
          buildBreadcrumbSchema([
            { name: siteConfig.brand, url: getAbsoluteUrl(getLocalizedPath('en', 'home')) },
            { name: metadata.title, url: getAbsoluteUrl(getLocalizedPath('en', 'reviews')) },
          ]),
        ])}
      />
      <LanguageProvider initialLanguage="en">
        <ReviewPageContent business={menuData.business} links={reviewLinks} />
      </LanguageProvider>
    </>
  );
}
