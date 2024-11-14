import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = ({ menu, menu2, menu3, menu4, menu5, menu6, menu7 }) => {
  return (
    <div className="text-white">
      <Link to={"/"}>
        <h1 className="float-md-start mb-0 text-center text-white">E-book</h1>
      </Link>

      <nav
        className=" 
        align-items-baseline align-items-md-baseline flex-md-row flex-nowrap justify-content-evenly nav"
      >
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter category
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link
                className="nav-link bolder"
                aria-current="page"
                to="/genero/Fantasía"
              >
                {menu}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                aria-current="page"
                to="/genero/Thriller"
              >
                {menu2}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                aria-current="page"
                to="/genero/Distópico"
              >
                {menu3}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                aria-current="page"
                to="/genero/Romántico"
              >
                {menu4}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                aria-current="page"
                to="/genero/Religioso"
              >
                {menu5}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                aria-current="page"
                to="/genero/Estrategia"
              >
                {menu6}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                aria-current="page"
                to="/genero/Fábula"
              >
                {menu7}
              </Link>
            </li>
          </ul>
        </div>

        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
