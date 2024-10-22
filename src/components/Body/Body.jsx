import NavBar from "../../components/Navbar/NavBar";
import Buscador from "../Buscador/Buscador";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Footer";

const Body = () => {
  return (
    <BrowserRouter>
      {" "}
      <div className="container-fluid d-flex flex-column p-5 bg-danger mb-auto">
        {" "}
        <NavBar menu={"Fantasía"} menu2={"Thriller"} menu3={"Distópico"} />{" "}
      </div>{" "}
      <div>
        <Buscador />{" "}
      </div>{" "}
      <Routes>
        {" "}
        <Route
          path="/"
          element={<ItemListContainer saludo={"Saludo"} />}
        />{" "}
        <Route
          path="/genero/:idGenero"
          element={<ItemListContainer saludo={"Saludo"} />}
        />{" "}
       
      </Routes>{" "}
      <Footer>
        <p>2024 - Coderhouse | React - Bassi Luca</p>{" "}
      </Footer>{" "}
    </BrowserRouter>
  );
};

export default Body;
