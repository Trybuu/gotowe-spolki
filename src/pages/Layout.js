import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/spolki-polskie">Spółki Polskie</Link>
          </li>
          <li>
            <Link to="/spolki-zagraniczne">Spółki zagraniczne</Link>
          </li>
          <li>
            <Link to="/konta-bankowe">Konta bankowe</Link>
          </li>
          <li>
            <Link to="/koncesje-licencje">Koncesje i licencje</Link>
          </li>
          <li>
            <Link to="/raje-podatkowe">Konta bankowe</Link>
          </li>
          <li>
            <Link to="/inne-uslugi">Inne usługi</Link>
          </li>
          <li>
            <Link to="/fundacje">Fundacje</Link>
          </li>
          <li>
            <Link to="/biznes-za-granica">Biznes za granicą</Link>
          </li>
          <li>
            <Link to="/artykuly">Artykuły</Link>
          </li>
          <li>
            <Link to="/csr">Csr</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;