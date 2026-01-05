/* Places section to get just a glimpse of the places to visit */

import { Link } from "react-router-dom";
import {useContext, useRef} from "react";
import { texts } from "../data/texts";
import { LanguageContext } from "../context/LangCont";

// Image imports
import elRoser from "../media/images/colegi_esg.jpg";
import churchImg from "../media/images/church.jpg";
import seven from "../media/images/7fontsParc.jpeg";
import bellpuig from "../media/images/bellpuig.jpg";
import lluri from "../media/images/llorenc.jpg"
import puig from "../media/images/agulla.jpg"

const placeImages = {
    "old-church": churchImg,
    "agulla": puig,
    "seven": seven,
    "castle": bellpuig,
    "cole": elRoser,
    "llorenc": lluri
};


const placeIDs = Object.keys(placeImages);


function Places({ addItem }) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 350;
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    const { lang } = useContext(LanguageContext);
    const t = texts[lang];


    return (
        <section id="places" className="slider-section">
            <h2>{t.menu.places}</h2>

            <div className="slider-container">
                <button className="nav-btn left" onClick={() => scroll("left")}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <div className="slider-track" ref={scrollRef}>
                    {placeIDs.map((id) => (
                        <div
                            key={id}
                            className="card slider-card"
                            style={{ backgroundImage: `url(${placeImages[id]})` }}
                        >
                            <div className="card-overlay">
                                <h3>{t.placesInfo[id].title}</h3>

                                <div className="card-actions">
                                    <Link to={`/places/${id}`} className="hover-text">
                                        {t.learn}
                                    </Link>

                                    <button
                                        className="add-plan-btn"
                                        onClick={() => addItem(t.placesInfo[id].title)}
                                    >
                                        {t.add}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="nav-btn right" onClick={() => scroll("right")}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default Places;