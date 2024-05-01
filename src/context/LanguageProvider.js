import React, { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const storedLang = localStorage.getItem("language");
    return storedLang || "ar";
  });
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
