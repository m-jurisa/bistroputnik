import HomePageContent from '../components/HomePageContent';
import JsonLd from '../components/JsonLd';
import { LanguageProvider } from '../components/LanguageProvider';
import { getLocalizedMenuView } from '../data/menu';
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
      <LanguageProvider initialLanguage="en">
        <HomePageContent locale="en" menu={menu} />
      </LanguageProvider>
    </>
  );
}
