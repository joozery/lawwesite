'use client';

import { useEffect, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/translations/en';
import th from '@/translations/th';

// Initialize i18n instance
const i18nInstance = i18n.createInstance();

i18nInstance
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      th: {
        translation: th
      }
    },
    fallbackLng: 'en',
    lng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    react: {
      useSuspense: false
    }
  });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);

    // Update document language and font class on language change
    const updateLanguage = (lng: string) => {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lng;

        // Update font class based on language
        if (lng === 'th') {
          document.documentElement.classList.add('font-thai');
          document.documentElement.classList.remove('font-en');
        } else {
          document.documentElement.classList.add('font-en');
          document.documentElement.classList.remove('font-thai');
        }
      }
    };

    // Set initial language
    updateLanguage(i18nInstance.language);

    // Listen for language changes
    i18nInstance.on('languageChanged', updateLanguage);

    return () => {
      i18nInstance.off('languageChanged', updateLanguage);
    };
  }, []);

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}

