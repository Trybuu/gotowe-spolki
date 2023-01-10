import "./About.css";

const About = () => {
    return(
        <div className="about">
            <div className="about-content">
                <div className="about-content__desc">
                    <h2>O naszej firmie</h2>
                    <p>Gotowe Spółki – Gotowe Rozwiązania – Start UP. gotowespolki.pl to jedna z najstarszych firm zajmujących się sprzedażą spółek polskich i zagranicznych, z koncesjami OPC i licencjami na transport – spedycje.</p>
                    <p>Czas przygotowania Gotowej Spółki do transakcji do DWÓCH GODZIN. Możliwość zakupu Gotowej Spółki drogą KORESPONDENCYJNĄ, a także BEZZWŁOCZNY dojazd do klienta.</p>
                    <ul>
                        Zapewniamy również:
                        <li>- Usługę wirtualnego biura</li>
                        <li>- Umocowania poświadczone notarialnie + Apostille</li>
                        <li>- Kapitał zakładowy wg prawa dla danego kraju</li>
                        <li>- Podatek VAT – wg prawa dla danego kraju</li>
                        <li>- Kontakt z biurem księgowym w języku polskim lub poprzez tłumacza</li>
                        <li>- Założenie + utrzymanie Konta bankowego</li>
                    </ul>
                    <p>Nasz Kantor Walutowy Online zapewnia wymianę dowolnej sumy w szybki, bezpieczny i konkurencyjny sposób, a także dokonywania przelewów na rzecz kontrahenta.</p>
                    <p>Zapraszamy do współpracy!</p>
                </div>

                <div className="contact">
                    <h2>Skontaktuj się z nami</h2>
                    <p>
                        Adres:<br></br>
                        60-523 Poznań<br></br>
                        Ul. Dąbrowskiego 75/70<br></br>
                    </p>
                    <p>
                        Telefon: +48 603557777<br></br>
                        Telefon: +48 666 999 559<br></br>
                        Telefon: +48 663399750<br></br>
                    </p>
                    <p>biuro@gotowespolki.pl</p>
                </div>
            </div>
            
        </div>
    )
}

export default About;