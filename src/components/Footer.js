import { useContext } from "react";
import { LanguageContext } from "../context/LangCont";
import { texts } from "../data/texts";

function Footer() {
    const { lang } = useContext(LanguageContext);

    return (
        <footer className="footer">
            <p>{texts[lang].footer}</p>
            <p>© 2025 My Town Tourism</p>
        </footer>
    );
}

export default Footer;
