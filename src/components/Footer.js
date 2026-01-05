import { useContext } from "react";
import { LanguageContext } from "../context/LangCont";
import { texts } from "../data/texts";

function Footer() {
    const { lang } = useContext(LanguageContext);
    const t = texts[lang];

    return (
        <footer className="footer">
            <p>{t.footer}</p>
            <p>© 2026 Sant Julià de Vilatorta</p>
        </footer>
    );
}

export default Footer;
