import CartWidget from "./CartWidget";
const NavBar = ({ menu, menu2, menu3 }) => {
  return (
    <div className="text-white">
      <h1 className="float-md-start mb-0 text-center">E-book</h1>
      <nav
        className=" 
        align-items-baseline align-items-md-baseline flex-md-row flex-nowrap flex-row float-md-end justify-content-evenly nav nav-masthead "
      >
        <a className="nav-link text-white bolder" aria-current="page" href="#">
          {menu}
        </a>
        <a className="nav-link text-white" aria-current="page" href="#">
          {" "}
          {menu2}
        </a>
        <a className="nav-link text-white" aria-current="page" href="#">
          {menu3}
        </a>
        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
