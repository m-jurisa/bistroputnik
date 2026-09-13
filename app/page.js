import HomePageContent from '../components/HomePageContent';
import JsonLd from '../components/JsonLd';
import { getLocalizedMenuView } from '../data/menu';
import { getPageChrome } from '../data/page-chrome';
import {
  buildBreadcrumbSchema,
  buildJsonLdGraph,
  buildMetadata,
  buildOrganizationSchema,
  buildRestaurantSchema,
  buildWebsiteSchema,
} from '../data/seo';
import { getAbsoluteUrl, siteConfig } from '../data/site-config';

export const metadata = buildMetadata({ locale: 'en', routeKey: 'home' });

export default function HomePage() {
  const menu = getLocalizedMenuView('en');
  const chrome = getPageChrome('en', 'home');

  return (
    <>
      <JsonLd
        data={buildJsonLdGraph([
          buildWebsiteSchema(),
          buildOrganizationSchema(),
          buildRestaurantSchema(),
          buildBreadcrumbSchema([
            { name: siteConfig.brand, url: getAbsoluteUrl('/') },
          ]),
        ])}
      />
      <HomePageContent locale="en" menu={menu} chrome={chrome} />
    </>
  );
}
