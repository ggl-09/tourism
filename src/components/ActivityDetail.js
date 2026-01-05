/* Makes the main logic of the detail page of the activities */

import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LangCont";
import { texts } from "../data/texts";
import { imageMap } from "../data/imageMap";    // for the images
import { audioMap } from "../data/audioMap";    // for the audios

function ActivityDetail() {
    const { id } = useParams();
    const { lang } = useContext(LanguageContext);

    const info = texts[lang].activitiesInfo[id];

    if (!info) return <h2>Activity not found</h2>;

    return (
        <article className="detail-page">
            <Link to="/" className="detail-back">← Back</Link>
            <h1 className="detail-title">{info.title}</h1>

            {info.sections.map((section, index) => {
                const {
                    text,
                    imageKey,
                    audioKey,
                    imageLayout = "full",
                    imageSize = "medium",
                    imageRatio = "horizontal"
                } = section;

                const audioSrc = audioKey && audioMap[audioKey];

                return (
                    <section
                        key={index}
                        className={`detail-section layout-${imageLayout}`}
                    >
                        <div className="text-content">
                            <p>{text}</p>

                            {audioSrc && (
                                <div className="audio-container">
                                    <audio controls>
                                        <source src={audioSrc} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            )}
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

export default ActivityDetail;
