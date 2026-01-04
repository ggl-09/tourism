import { useContext } from "react";
import { LanguageContext } from "../context/LangCont";
import { texts } from "../data/texts";

function Menu() {
    const { lang, changeLanguage } = useContext(LanguageContext);

    return (
        <nav className="menu">
            <a href="#experience">{texts[lang].menu.experience}</a>
            <a href="#activities">{texts[lang].menu.activities}</a>
            <a href="#places">{texts[lang].menu.places}</a>
            <a href="#eat_sleep">{texts[lang].menu.stay}</a>
            <a href="#plan">{texts[lang].menu.plan}</a>

            <select
                value={lang}
                onChange={(e) => changeLanguage(e.target.value)}
                className="lang-select"
            >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="ca">Català</option>
            </select>
        </nav>
    );
}

export default Menu;
