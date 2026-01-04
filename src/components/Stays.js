import { useContext, useRef } from "react";
import { LanguageContext } from "../context/LangCont";
import { texts } from "../data/texts";

import manyana from "../media/images/manyana.jpg";
import albareda from "../media/images/albaredaHR.jpg";
import marti from "../media/images/marti.jpg"
import kairos from  "../media/images/kairos.jpg"

// images by ID
const staysImages = {
    manyana,
    albareda,
    marti,
    kairos
};

// non-language data
const staysMeta = {
    manyana: { price: 2, stars: 1 },
    albareda: { price: 4, stars: 4 },
    marti: { price: 2, stars: 3},
    kairos: { price: 1, stars: 0}
};

const stayIDs = Object.keys(staysImages);

function Stays({ addItem }) {
    const scrollRef = useRef(null);
    const { lang } = useContext(LanguageContext);
    const t = texts[lang];

    const scroll = (direction) => {
        scrollRef.current?.scrollBy({
            left: direction === "left" ? -350 : 350,
            behavior: "smooth"
        });
    };

    const renderSymbols = (count, symbol) => symbol.repeat(count);

    return (
        <section id="eat-stay" className="slider-section">
            <h2>{t.menu.stay}</h2>

            <div className="slider-container">
                <button className="nav-btn left" onClick={() => scroll("left")}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <div className="slider-track" ref={scrollRef}>
                    {stayIDs.map((id) => {
                        const info = t.staysInfo[id];
                        const meta = staysMeta[id];

                        if (!info) return null;

                        return (
                            <div
                                key={id}
                                className="card slider-card"
                                style={{ backgroundImage: `url(${staysImages[id]})` }}
                            >
                                <div className="card-overlay">
                                    <h3>{info.title}</h3>
                                    <p className="card-subtitle">{info.type}</p>

                                    <div className="rating-info">
                    <span className="price-rating">
                      {renderSymbols(meta.price, "$")}
                        <span className="dimmed">
                        {renderSymbols(4 - meta.price, "$")}
                      </span>
                    </span>

                                        {meta.stars > 0 && (
                                            <span className="star-rating">
                        {renderSymbols(meta.stars, "★")}
                      </span>
                                        )}
                                    </div>

                                    <div className="card-actions">
                                        <button
                                            className="add-plan-btn"
                                            onClick={() => addItem(info.title)}
                                        >
                                            {t.add}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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

export default Stays;
