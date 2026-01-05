/* Activities section to get just a glimpse of the activity */

import { Link } from "react-router-dom";
import {useContext, useRef} from "react";
import { LanguageContext } from "../context/LangCont";
import { texts } from "../data/texts"

// Image imports
import barNuria from "../media/images/barnuria.jpg";
import mill from "../media/images/molin.jpg";
import plane from "../media/images/aviation.jpg";
import caramelles from "../media/images/caramelles.jpg";
import house from "../media/images/stateHome.jpg";

const activitiesImgs = {
    "bar-nuria": barNuria,
    "mills": mill,
    "aviation": plane,
    "caramelles": caramelles,
    "stateHome": house
};

const activitiesIDs = Object.keys(activitiesImgs);

function Activities({ addItem }) {
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
        <section id="activities" className="slider-section">
            <h2>{t.menu.activities}</h2>

            <div className="slider-container">
                <button className="nav-btn left" onClick={() => scroll("left")}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <div className="slider-track" ref={scrollRef}>
                    {activitiesIDs.map((id) => (
                        <div
                            className="card slider-card"
                            key={id}
                            style={{ backgroundImage: `url(${activitiesImgs[id]})` }}
                        >
                            <div className="card-overlay">
                                <h3>{t.activitiesInfo[id].title}</h3>

                                <div className="card-actions">
                                    <Link to={`/activities/${id}`} className="hover-text">
                                        {t.learn}
                                    </Link>

                                    <button
                                        className="add-plan-btn"
                                        onClick={() => addItem(t.activitiesInfo[id].title)}
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

export default Activities;
