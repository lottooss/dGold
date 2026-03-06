import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'sq' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (sq: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('sq');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'sq' ? 'en' : 'sq'));
  };

  const t = (sq: string, en: string) => {
    return language === 'sq' ? sq : en;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
