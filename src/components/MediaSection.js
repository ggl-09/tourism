import videoD from "../media/videos/videoD.mp4";

function MediaSection() {
    return (
        <section id="experience" className="intro">
            <h2>The Atmosphere</h2>
            <p>
                Life here moves slowly. Days are shaped by nature,
                local traditions, and the rhythm of the countryside.
            </p>

            <video controls muted className="video">
                <source src={videoD} type="video/mp4" />
            </video>
        </section>
    );
}

export default MediaSection;
