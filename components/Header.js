import AnnouncementBar from './AnnouncementBar';
import LogoLockupPlaceholder from './LogoLockupPlaceholder';

export default function Header({
  announcement = null,
  homeHref = '/',
  logoHomeLabel = 'Bistro Putnik home',
  navigationLabel = 'Navigation',
  links = [],
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-brand-line/15 bg-brand-deep/70 backdrop-blur-md">
      <div className="container-shell py-3">
        <div className="flex items-center gap-4">
          <a href={homeHref} aria-label={logoHomeLabel}>
            <LogoLockupPlaceholder compact />
          </a>

          <nav
            aria-label={navigationLabel}
            className="ml-auto hidden min-w-0 gap-x-7 overflow-x-auto whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#d5dddd] lg:flex"
          >
            {links.map((link) => (
              <a
                key={`${link.key}-${link.href}`}
                href={link.href}
                className={link.active ? 'text-brand-sand' : 'hover:text-brand-sand'}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <details className="group ml-auto lg:hidden">
            <summary
              className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-brand-line/25 bg-brand-deep/35 text-brand-sand hover:border-brand-sand [&::-webkit-details-marker]:hidden"
              aria-label={navigationLabel}
            >
              <span className="relative h-4 w-5" aria-hidden="true">
                <span className="absolute left-0 top-0 h-px w-5 bg-current transition duration-300 ease-soft group-open:translate-y-[7px] group-open:rotate-45" />
                <span className="absolute left-0 top-[7px] h-px w-5 bg-current transition duration-300 ease-soft group-open:opacity-0" />
                <span className="absolute bottom-0 left-0 h-px w-5 bg-current transition duration-300 ease-soft group-open:-translate-y-[7px] group-open:-rotate-45" />
              </span>
            </summary>
            <nav
              aria-label={navigationLabel}
              className="absolute inset-x-0 top-full border-b border-brand-line/15 bg-brand-deep/95 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#d5dddd] shadow-xl"
            >
              <div className="mx-auto grid max-w-6xl gap-1">
                {links.map((link) => (
                  <a
                    key={`mobile-${link.key}-${link.href}`}
                    href={link.href}
                    className={`rounded-lg px-3 py-3 hover:bg-brand-deep/35 hover:text-brand-sand ${
                      link.active ? 'text-brand-sand' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          </details>
        </div>
        {announcement ? <AnnouncementBar {...announcement} /> : null}
      </div>
    </header>
  );
}
