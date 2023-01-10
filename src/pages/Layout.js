import React, { useState } from "react";
import { Outlet, Link, useAsyncError } from "react-router-dom";

import ContactBar from "../components/ContactBar";
import Hero from "../components/Hero";

import useWindowDimensions from "./../components/GetWindowDimensions";
import GetSizeWhenResize from "./../components/GetSizeWhenResize";

import "./../css/global.css"
import "./Layout.css";

import logo from "./../img/logo.png";
import burger from "./../img/burger.svg";

const Layout = () => {
    const {width} = useWindowDimensions();
    const [isActive, setActive] = useState("true");
    const handleToggle = () => {
        if(width <= 900){
            setActive(!isActive);
        }
    }

  return (
    <>
      <ContactBar/>
      <nav className="nav">
        <div className="nav-top">
            <div className="nav-logo">
                <Link className="nav-list-element-link" to="/"><img className="nav-logo-img" src={logo} alt="" /></Link>
            </div>
            <button className="menu-button" onClick={handleToggle}>
                <img src={burger} alt="" />
            </button>
        </div>
        
        <GetSizeWhenResize/>
        
        <ul className={`nav-list ${isActive ? '' : 'show'}`}>
          <li className="nav-list-element">
            <Link className="nav-list-element-link" to="/spolki-polskie">Gotowe Spółki Polskie</Link>
          </li>
          <li className="nav-list-element">
            <Link className="nav-list-element-link" to="/spolki-zagraniczne">Spółki zagraniczne</Link>
          </li>
          <li className="nav-list-element">
            <Link className="nav-list-element-link" to="/konta-bankowe">Konta bankowe</Link>
          </li>
          <li className="nav-list-element">
            <Link className="nav-list-element-link" to="/koncesje-licencje">Koncesje i licencje</Link>
          </li>
          <li className="nav-list-element">
            <Link className="nav-list-element-link" to="/raje-podatkowe">Konta bankowe</Link>
          </li>
          <li className="nav-list-element">
            <Link className="nav-list-element-link" to="/inne-uslugi">Inne usługi</Link>
          </li>
          <li className="nav-list-element">
            <Link className="nav-list-element-link" to="/fundacje">Fundacje</Link>
          </li>
          <li className="nav-list-element">
            <Link className="nav-list-element-link" to="/biznes-za-granica">Biznes za granicą</Link>
          </li>
          <li className="nav-list-element">
            <Link className="nav-list-element-link" to="/artykuly">Artykuły</Link>
          </li>
          <li className="nav-list-element">
            <Link className="nav-list-element-link" to="/csr">Csr</Link>
          </li>
          <li className="nav-list-element">
            <Link className="nav-list-element-link" to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;