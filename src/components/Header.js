import {useContext, useEffect, useState} from "react";
import hero1 from "../media/images/bosc.jpg";
import hero2 from "../media/images/7fontsParc.jpeg";
import hero3 from "../media/images/barnuria.jpg";
import hero4 from "../media/images/Albareda.jpeg";
import hero5 from "../media/images/castell_baix.JPG"

import { texts } from "../data/texts"
import {LanguageContext} from "../context/LangCont";

const images = [hero1, hero2, hero3, hero4, hero5];

function Header() {
    const [current, setCurrent] = useState(0);
    const { lang } = useContext(LanguageContext);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 6000); // change every 6 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <header
            className="hero"
            style={{
                backgroundImage: `url(${images[current]})`
            }}
        >
            <div className="hero-content">
                <h1>Sant Julià de Vilatorta</h1>
                <p>{texts[lang].tagline}</p>
            </div>
        </header>
    );
}

export default Header;
