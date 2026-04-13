import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

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

export const metadata = {
  metadataBase: new URL('https://bistroputnik.example'),
  title: {
    default: 'Bistro Putnik',
    template: '%s | Bistro Putnik',
  },
  description:
    'A premium Mediterranean bistro website concept rooted in Baška Voda and Croatian coastal hospitality.',
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
