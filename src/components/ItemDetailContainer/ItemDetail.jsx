import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"; 

const ItemDetail = ({ ebook }) => {
  console.log("Ebook:", ebook);  
  const [showItemCount, setShowItemCount] = useState(true);
  const { addEbookInCart } = useContext(CartContext);

  const addEbook = (count) => {
    console.log("Count:", count);  
    const ebookCart = { ...ebook, quantity: count };
    addEbookInCart(ebookCart);
    setShowItemCount(false);  
  };

  if (!ebook) {
    return <div>Loading...</div>;  
  }

  return (
    <div className="d-flex">
      <img src={ebook.image || 'default-image.jpg'} className="w-25 border m-5" alt={ebook.titulo || 'No title'} />
      <div>
        <h2>{ebook.titulo}</h2>
        <p className="ms-auto ps-4 text-start">{ebook.descripcion}</p>
        <p className="ms-auto ps-4 text-start">Precio: {ebook.precio}</p>
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
