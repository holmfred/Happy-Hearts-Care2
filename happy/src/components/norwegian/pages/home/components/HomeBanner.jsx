import Video from "../../../../../images/Video.mp4";

export default function HomeBanner() {
    return (
        <>
            <div className="banner">
                <video autoPlay muted loop playsInline>
                    <source src={Video} type="video/mp4"/>
                </video>
            </div>
            <div className="banner-text">
                <h1>Din Støtte</h1>
                <h1>Påvirker Familier</h1>
                <h1>i Ngatataek</h1>
                <p className="banner-hash">#CareWithUs</p>
            </div>
        </>
    );
}