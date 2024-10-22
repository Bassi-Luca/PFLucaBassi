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
          <Routes>
            <div className="container">
                <Route path="/" element={<ItemListContainer saludo={"Saludo"} />} />
                <Route path="/genero/:idGenero" element={<ItemListContainer saludo={"Saludo"} />} />
                <Route path="/detail/:idEbook" element={ <ItemDetailContainer /> } />
            </div>
          </Routes>
        <Footer>
          <p>2024 - Coderhouse | React - Bassi Luca</p>
        </Footer>
      </BrowserRouter>
    </div>
  );
};

export default Body;
