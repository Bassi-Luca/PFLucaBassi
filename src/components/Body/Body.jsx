import NavBar from "../../components/Navbar/NavBar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout.jsx";
import { Footer } from "./Footer";
import { CartProvider } from "../Context/CartContext.jsx";

const Body = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="container-fluid d-flex flex-column p-5 bg-danger mb-auto">
          <NavBar
            menu={"Fantasía"}
            menu2={"Thriller"}
            menu3={"Distópico"}
            menu4={"Romántico"}
            menu5={"Religioso"}
            menu6={"Estrategia"}
            menu7={"Fábula"}
          />
        </div>
        <Routes>
          <Route path="/" element={<ItemListContainer saludo={"Saludo"} />} />
          <Route
            path="/genero/:idGenero"
            element={<ItemListContainer saludo={"Saludo"} />}
          />
          <Route path="/detail/:idEbook" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer>
          <p>2024 - Coderhouse | React - Bassi Luca</p>
        </Footer>
      </CartProvider>
    </BrowserRouter>
  );
};

export default Body;
