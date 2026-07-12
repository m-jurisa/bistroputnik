import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';
import { buildMetadata } from '../data/seo';
import { siteConfig } from '../data/site-config';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const defaultMetadata = buildMetadata({ locale: 'en', routeKey: 'home' });

export const metadata = {
  ...defaultMetadata,
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.brand,
  title: {
    default: defaultMetadata.title,
    template: '%s | Bistro Putnik',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="bg-brand-deep font-sans text-brand-pearl antialiased">
        {children}
      </body>
    </html>
  );
}
