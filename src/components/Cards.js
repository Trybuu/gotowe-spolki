import "./Cards.css";
import indexBox1 from "../img/index-box-1.jpg";
import indexBox2 from "../img/index-box-2.jpg";
import indexBox3 from "../img/index-box-3.jpg";
const Cards = () => {
    let cardsContent = [
        {
            img: indexBox1,
            title: "Spółki polskie",
            text: "Ze stażem w cenie indywidualnej uzależnionej od zdolności kredytowej",
            link: "/spolki-polskie",
        },
        {
            img: indexBox2,
            title: "Spółki zagraniczne",
            text: "Zapewniamy również, usługę wirtualnego biura i kontakt z biurem księgowym",
            link: "/spolki-zagraniczne",
        },
        {
            img: indexBox3,
            title: "Koncesje i licencje",
            text: "Wolne od Zadłużeń i Wad Prawnych Pod Rygorem Zwrotu Ceny za Spółkę",
            link: "/koncesje-licencje",
        }
    ]
    return(
        <div className="cards">
            <div className="cards-content">
                {cardsContent.map(card =>
                    <div className="card">
                        <img className="card__img" src={card.img} alt="" />
                        <h3 className="card__title">{card.title}</h3>
                        <p className="card__text">{card.text}</p>
                        <a className="card__link" href={card.link}>zobacz</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cards;