import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState("en");

    function changeLanguage(newLang) {
        setLang(newLang);
    }

    return (
        <LanguageContext.Provider value={{ lang, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
