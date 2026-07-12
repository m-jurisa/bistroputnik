import MarendaPageContent from '../../components/MarendaPageContent';
import JsonLd from '../../components/JsonLd';
import { LanguageProvider } from '../../components/LanguageProvider';
import { marendaConfig } from '../../data/marenda';
import { menuData } from '../../data/menu';
import {
  buildBreadcrumbSchema,
  buildJsonLdGraph,
  buildMetadata,
  buildOrganizationSchema,
  buildRestaurantSchema,
  buildWebsiteSchema,
} from '../../data/seo';
import { getAbsoluteUrl, getLocalizedPath, siteConfig } from '../../data/site-config';
import marendaItemsData from '../../menu/marenda-items.json';

export const metadata = buildMetadata({ locale: 'en', routeKey: 'marenda' });

export default function MarendaPage() {
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
      <LanguageProvider initialLanguage="en">
        <MarendaPageContent
          business={menuData.business}
          marenda={{
            ...marendaConfig,
            items: marendaItemsData.items,
          }}
        />
      </LanguageProvider>
    </>
  );
}
