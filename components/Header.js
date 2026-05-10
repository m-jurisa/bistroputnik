'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LogoLockupPlaceholder from './LogoLockupPlaceholder';
import { useLanguage } from './LanguageProvider';

const links = [
  { key: 'about', href: '#about', homeSection: true },
  { key: 'menu', href: '#menu', homeSection: true },
  { key: 'marenda', href: '/marenda' },
  { key: 'contact', href: '#contact' },
];

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-30 border-b border-brand-line/15 bg-brand-deep/70 backdrop-blur-md">
      <div className="container-shell py-3">
        <div className="flex items-center gap-4">
          <a href={isHome ? '#top' : '/'} aria-label={t.ui.logoHome}>
            <LogoLockupPlaceholder compact />
          </a>

          <nav
            aria-label={t.ui.navigation}
            className="ml-auto hidden min-w-0 gap-x-7 overflow-x-auto whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#d5dddd] lg:flex"
          >
            {links.map((link) => {
              const href = link.homeSection && !isHome ? `/${link.href}` : link.href;
              const active = pathname === link.href;

              return (
                <a
                  key={`${link.key}-${href}`}
                  href={href}
                  className={active ? 'text-brand-sand' : 'hover:text-brand-sand'}
                >
                  {t.nav[link.key]}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-line/25 bg-brand-deep/35 text-brand-sand hover:border-brand-sand lg:hidden"
            aria-label={t.ui.navigation}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="relative h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition duration-300 ease-soft ${
                  menuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-5 bg-current transition duration-300 ease-soft ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-5 bg-current transition duration-300 ease-soft ${
                  menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`grid overflow-hidden transition-[grid-template-rows,opacity,transform] duration-300 ease-soft lg:hidden ${
            menuOpen
              ? 'grid-rows-[1fr] opacity-100 translate-y-0'
              : 'pointer-events-none grid-rows-[0fr] -translate-y-1 opacity-0'
          }`}
          aria-hidden={!menuOpen}
        >
          <nav
            aria-label={t.ui.navigation}
            className="min-h-0 overflow-hidden"
          >
            <div className="mt-3 grid gap-1 border-t border-brand-line/15 pt-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#d5dddd]">
              {links.map((link) => {
                const href = link.homeSection && !isHome ? `/${link.href}` : link.href;
                const active = pathname === link.href;

                return (
                  <a
                    key={`mobile-${link.key}-${href}`}
                    href={href}
                    tabIndex={menuOpen ? 0 : -1}
                    className={`rounded-lg px-3 py-3 hover:bg-brand-deep/35 hover:text-brand-sand ${
                      active ? 'text-brand-sand' : ''
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {t.nav[link.key]}
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
