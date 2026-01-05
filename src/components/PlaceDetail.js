/* Makes the main logic of the detail page of the places to visit */

import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LangCont";
import { texts } from "../data/texts";
import { imageMap } from "../data/imageMap";

function PlaceDetail({ addItem }) {
    const { id } = useParams();
    const { lang } = useContext(LanguageContext);
    const info = texts[lang].placesInfo[id];

    if (!info) return <p>Not found</p>;

    return (
        <article className="detail-page">
            <Link to="/" className="detail-back">← Back</Link>
            <h1 className="detail-title">{info.title}</h1>

            {info.sections.map((section, index) => {
                const {
                    text,
                    imageKey,
                    imageLayout = "full",
                    imageSize = "medium",
                    imageRatio = "horizontal"
                } = section;

                return (
                    <section key={index} className={`detail-section layout-${imageLayout}`}>
                        <div className="text-content">
                            <p>{text}</p>
                        </div>

                        {imageKey && imageMap[imageKey] && (
                            <img
                                src={imageMap[imageKey]}
                                alt={info.title}
                                className={`detail-image size-${imageSize} ratio-${imageRatio}`}
                                loading="lazy"
                            />
                        )}
                    </section>
                );
            })}


        </article>
    );
}

export default PlaceDetail;
