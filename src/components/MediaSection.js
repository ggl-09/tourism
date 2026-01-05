/* Show the video */

// Video import
import videoD from "../media/videos/Video Project.mp4";

import { LanguageContext } from "../context/LangCont";
import { texts } from "../data/texts";
import {useContext} from "react";

function MediaSection() {
    const { lang } = useContext(LanguageContext);
    const t = texts[lang];

    return (
        <section id="experience" className="intro">
            <h2>{t.media}</h2>
            <p>{t.mediaText}</p>

            <video controls muted className="video">
                <source src={videoD} type="video/mp4" />
            </video>
        </section>
    );
}

export default MediaSection;
