import Hero from "../components/Hero";
import Cards from "../components/Cards";
import About from "../components/About";

import "./Home.css";

export default function Home(){
    return(
        <>
        <Hero/>
        <div className="offer">
            <div className="offer__content">
                <h2 className="title-m">Spółki polskie i zagraniczne</h2>
                <p>Nasza oferta obejmuje również spółki z stażem kilkumiesięcznym lub kilkuletnim. Data ich rejestracji może ułatwić uzyskanie kredytu, dotacji czy pozwolić na udział w przetargu lub innych procedurach urzędowych.</p>
                <Cards/>
                <About/>
            </div>
        </div>
        
        </>
    )
}