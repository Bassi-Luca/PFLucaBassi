import CartWidget from "./CartWidget";
const NavBar = ({ menu, menu2, menu3 }) => {
  return (
    <div className="text-white">
      <h1 className="float-md-start mb-0 text-center">E-book</h1>
      <nav
        className=" 
        align-items-baseline align-items-md-baseline flex-md-row flex-nowrap flex-row float-md-end justify-content-evenly nav nav-masthead "
      >
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter category
          </button>
          <ul class="dropdown-menu">
            <li>
              <a
                className="nav-link bolder"
                aria-current="page"
                href="#"
              >
                {menu}
              </a>
            </li>
            <li>
              <a className="nav-link" aria-current="page" href="#">
                {" "}
                {menu2}
              </a>
            </li>
            <li>
              <a className="nav-link" aria-current="page" href="#">
                {menu3}
              </a>
            </li>
          </ul>
        </div>

        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
