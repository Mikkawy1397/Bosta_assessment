import { createContext} from 'react';

// Create a context with a default value.
export const LanguageContext = createContext({
  language: 'ar', // default language
  changeLanguage: () => {}, // placeholder for a function to change the language
});