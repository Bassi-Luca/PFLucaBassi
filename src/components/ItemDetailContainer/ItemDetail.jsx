import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"; // Assicurati di importare ItemCount se è un componente

const ItemDetail = ({ ebook }) => {
  const [showItemCount, setShowItemCount] = useState(true);
  const { addEbookInCart } = useContext(CartContext);

  const addEbook = (count) => {
    const ebookCart = { ...ebook, quantity: count }; // Usare ebook al posto di product

    addEbookInCart(ebookCart);
    setShowItemCount(false);  // Nasconde ItemCount dopo l'aggiunta
  };

  if (!ebook) {
    return <div>Loading...</div>;  // In caso `ebook` sia undefined o vuoto
  }

  return (
    <div className="align-items-center d-flex float-start offcanvas-body">
      <img src={ebook.image} className="w-25 border m-5" alt={ebook.titulo} />
      <div>
        <h2>{ebook.titulo}</h2>
        <p className="ms-auto ps-4 text-start">{ebook.descripcion}</p>
        
        {
          showItemCount ? (
            <ItemCount dias={ebook.dias} addEbook={addEbook} />
          ) : (
            <Link to="/cart">Terminar mi compra</Link>
          )
        }
      </div>
    </div>
  );
};

export default ItemDetail;
