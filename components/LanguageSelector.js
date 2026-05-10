'use client';

import { languages } from '../data/translations';
import { useLanguage } from './LanguageProvider';

function joinClasses(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function LanguageSelector({ className }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className={joinClasses(
        'inline-flex max-w-[calc(100vw-2rem)] items-center overflow-x-auto rounded-full border border-brand-line/25 bg-brand-deep/45 p-1 backdrop-blur-sm',
        className
      )}
      aria-label={t.ui.languageSelector}
    >
      {languages.map((item) => {
        const active = item.code === language;

        return (
          <button
            key={item.code}
            type="button"
            className={joinClasses(
              'shrink-0 rounded-full px-2.5 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.14em] sm:px-3 sm:text-[0.66rem] sm:tracking-[0.16em]',
              active
                ? 'bg-brand-sand text-brand-deep'
                : 'text-[#d5dddd] hover:text-brand-sand'
            )}
            aria-pressed={active}
            onClick={() => setLanguage(item.code)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
