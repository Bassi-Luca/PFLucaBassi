import NavBar from "../../components/Navbar/NavBar";
import Buscador from "../Buscador/Buscador";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from "./Footer";

const Body = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="container-fluid d-flex flex-column p-5 bg-danger mb-auto">
          <NavBar menu={"Home"} menu2={"Productos"} menu3={"Contactos"} />
        </div>
        <div>
          <Buscador />
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<ItemListContainer saludo={"saludo"} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Saludo"} />} />
            <Route path="/detail/:idProduct" element={ <ItemDetailContainer /> } />
          </Routes>
        </div>
        <Footer>
          <p>2024 - Coderhouse | React - Bassi Luca</p>
        </Footer>
      </BrowserRouter>
    </div>
  );
};

export default Body;
