import { createContext, useState } from "react";


const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Aggiunge un eBook al carrello, sommando le quantità se l'eBook è già presente
  const addEbookInCart = (newEbook) => {
    const existsInCart = isInCart(newEbook.id);
    if (existsInCart) {
      const tempCart = [...cart];
      const index = tempCart.findIndex((ebook) => ebook.id === newEbook.id);
      tempCart[index].quantity += newEbook.quantity;
      setCart(tempCart);
    } else {
      setCart([...cart, newEbook]);
    }
  };

  // Controlla se un eBook è già presente nel carrello
  const isInCart = (id) => cart.some((ebook) => ebook.id === id); 

  // Calcola la quantità totale di eBook nel carrello
  const totalQuantity = () => cart.reduce((total, ebook) => total + ebook.quantity, 0);

  // Calcola il prezzo totale del carrello
  const totalPrecio = () => cart.reduce((total, ebook) => total + ebook.quantity * ebook.precio, 0);

  // Rimuove un eBook dal carrello tramite il suo ID
  const deleteEbookById = (id) => {
    setCart(cart.filter((ebook) => ebook.id !== id));
  };

  // Svuota il carrello
  const deleteCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addEbookInCart, totalQuantity, totalPrecio, deleteEbookById, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
