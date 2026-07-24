'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { defaultLanguage, languages, translations } from '../data/translations';

const LanguageContext = createContext(null);

function isKnownLanguage(language) {
  return languages.some((item) => item.code === language);
}

export function LanguageProvider({ children, initialLanguage }) {
  const initial = isKnownLanguage(initialLanguage) ? initialLanguage : defaultLanguage;
  const [language, setLanguageState] = useState(initial);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (isKnownLanguage(initialLanguage)) {
      setLanguageState(initialLanguage);
      window.localStorage.setItem('bistroputnik-language', initialLanguage);
      return;
    }

    const savedLanguage = window.localStorage.getItem('bistroputnik-language');
    if (isKnownLanguage(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, [initialLanguage]);

  const setLanguage = (nextLanguage) => {
    if (!isKnownLanguage(nextLanguage)) {
      return;
    }

    setLanguageState(nextLanguage);
    window.localStorage.setItem('bistroputnik-language', nextLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language] || translations[defaultLanguage],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  return context;
}
