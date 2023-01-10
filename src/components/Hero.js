import heroImage from "../img/index-bg.jpg";
import "./Hero.css";

const Hero = () => {
    return(
        <div className="hero">
            <div>
                <h1 className="hero__title">Gotowe Spółki</h1>
                <p className="hero__text">Gotowe Spółki Polskie, Spółki Zagraniczne.</p>
                <p className="hero__text">Koncesje Paliwowe, Licencje na Transport,</p>
                <p className="hero__text">Wirtualne Biura, Konta bankowe.</p>
                <a className="hero__link" href="/spolki-polskie">zobacz</a>
            </div>
            
        </div>
    )
}

export default Hero;