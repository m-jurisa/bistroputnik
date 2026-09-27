import MarendaPageContent from '../../components/MarendaPageContent';
import JsonLd from '../../components/JsonLd';
import { marendaConfig } from '../../data/marenda';
import { menuData } from '../../data/menu';
import { getPageChrome } from '../../data/page-chrome';
import {
  buildBreadcrumbSchema,
  buildJsonLdGraph,
  buildMetadata,
  buildOrganizationSchema,
  buildRestaurantSchema,
  buildWebsiteSchema,
} from '../../data/seo';
import { getAbsoluteUrl, getLocalizedPath, siteConfig } from '../../data/site-config';
import { dailyOffer } from '../../data/pricing';

export const metadata = buildMetadata({ locale: 'en', routeKey: 'marenda' });

export default function MarendaPage() {
  const chrome = getPageChrome('en', 'marenda');

  return (
    <>
      <JsonLd
        data={buildJsonLdGraph([
          buildWebsiteSchema(),
          buildOrganizationSchema(),
          buildRestaurantSchema(),
          buildBreadcrumbSchema([
            { name: siteConfig.brand, url: getAbsoluteUrl(getLocalizedPath('en', 'home')) },
            { name: metadata.title, url: getAbsoluteUrl(getLocalizedPath('en', 'marenda')) },
          ]),
        ])}
      />
      <MarendaPageContent
        business={menuData.business}
        marenda={{
          ...marendaConfig,
          ...dailyOffer,
        }}
        chrome={chrome}
      />
    </>
  );
}
