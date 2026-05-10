import MarendaPageContent from '../../components/MarendaPageContent';
import { LanguageProvider } from '../../components/LanguageProvider';
import { menuData } from '../../data/menu';
import marendaData from '../../menu/marenda-data.json';

const defaultMarendaCopy =
  marendaData.translations[marendaData.defaultLanguage];

export const metadata = {
  title: defaultMarendaCopy.pageTitle,
  description: defaultMarendaCopy.intro,
};

export default function MarendaPage() {
  return (
    <LanguageProvider>
      <MarendaPageContent
        business={menuData.business}
        marenda={marendaData}
      />
    </LanguageProvider>
  );
}
