import HomePageContent from '../components/HomePageContent';
import { LanguageProvider } from '../components/LanguageProvider';
import { menuData } from '../data/menu';

export default function HomePage() {
  return (
    <LanguageProvider>
      <HomePageContent menu={menuData} />
    </LanguageProvider>
  );
}
