import NavBar from "../../components/Navbar/NavBar";
const Body = () => {
  return (
    <div className="container d-flex w-100 h-100 mx-auto p-5 flex-column bg-danger mb-auto">
      <NavBar menu={"Home"} menu2={"Productos"} menu3={"Contactos"} />
    </div>
  );
};

export default Body;
