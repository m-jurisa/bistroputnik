import { getSitemapEntries } from '../data/seo';

export const dynamic = 'force-static';

export default function sitemap() {
  return getSitemapEntries();
}
