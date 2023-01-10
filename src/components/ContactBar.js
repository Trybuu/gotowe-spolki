import "./ContactBar.css";


const ContactBar = () => {
    const contactInfo = ["+48 603 557 777", "+48 666 999 559", "+48 663 399 750", "biuro@gotowespolki.pl"];
    return(
        <div className="contact-bar">
            {contactInfo.map(info => <span className="contact-bar__info">{info}</span>)}
        </div>
    )
}

export default ContactBar;