import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Polskie from "./pages/Polskie";
import Zagraniczne from "./pages/Zagraniczne";
import Konta from "./pages/Konta";
import Koncesje from "./pages/Koncesje";
import Raje from "./pages/Raje";
import Inne from "./pages/Inne";
import Fundacje from "./pages/Fundacje";
import Biznes from "./pages/Biznes";
import Artykuly from "./pages/Artykuly";
import Csr from "./pages/Csr";
import Kontakt from "./pages/Kontakt";
import Nopage from "./pages/Nopage";


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="spolki-polskie" element={<Polskie />} />
          <Route path="spolki-zagraniczne" element={<Zagraniczne />} />
          <Route path="konta-bankowe" element={<Konta />} />
          <Route path="koncesje-licencje" element={<Koncesje />} />
          <Route path="raje-podatkowe" element={<Raje />} />
          <Route path="inne-uslugi" element={<Inne />} />
          <Route path="fundacje" element={<Fundacje />} />
          <Route path="biznes-za-granica" element={<Biznes />} />
          <Route path="artykuly" element={<Artykuly />} />
          <Route path="csr" element={<Csr />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
