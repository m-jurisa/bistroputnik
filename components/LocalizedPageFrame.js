import Footer from './Footer';
import Header from './Header';
import { LanguageProvider } from './LanguageProvider';

export default function LocalizedPageFrame({ business, children, locale }) {
  return (
    <LanguageProvider initialLanguage={locale}>
      <div className="relative min-h-svh overflow-hidden">
        <div className="absolute inset-0 hero-wash" />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-deep/70 to-transparent" />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer business={business} />
      </div>
    </LanguageProvider>
  );
}
