import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";
import { Link } from "react-router-dom";

import { BsFillTrash3Fill } from "react-icons/bs";

const Cart = () => {
  const { cart, totalPrecio, deleteEbookById, deleteCart } = useContext(CartContext);

  // Early return
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2 className="title-empty-cart">Oppps...No hay productos en el carrito 😥</h2>
        <Link to="/" className="button-home-empty-cart">
          Regresar
        </Link>
      </div>
    );
  }

  return (
    <div className="container border cart m-5">
      <h1 className="title-cart">Tu compra:</h1>
      {cart.map((ebookCart, index) => (
        <>
          <div className="d-flex align-items-center mx-auto mb-3" key={ebookCart.id}>
            <img className="border img-fluid rounded rounded-3" src={ebookCart.image} width={50} alt="ebook" />
            <p className="ms-2">{ebookCart.titulo} |</p>
            <p className="ms-2">precio c/u: ${ebookCart.precio} |</p>
            <p className="ms-2">dias de lectura: {ebookCart.dias} |</p>
            <p className="mx-2">precio parcial: ${ebookCart.precio * ebookCart.dias}</p>
            <button className="" onClick={() => deleteEbookById(ebookCart.id)}>
              <BsFillTrash3Fill />
            </button>
          </div>
          {index < cart.length - 1 && <hr />}
        </>
      ))}

      <div className="info-cart">
        <p className="text-info-cart">Precio total: ${totalPrecio()}</p>
        <button className="button-delete-cart" onClick={deleteCart}>
          Vaciar carrito
        </button>
        <Link to="/checkout">Terminar mi compra</Link>
      </div>
    </div>
  );
};

export default Cart;
