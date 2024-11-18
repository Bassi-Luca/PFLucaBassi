import { useState } from "react";
import FormCheckout from "./FormCheckout";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import db from "../../data/db/db.js";
import { Link } from "react-router-dom";
import ToastOut from "./ToastOut";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  });
  const [idOrder, setIdOrder] = useState(null);
  const { cart, totalPrecio, deleteCart } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrecio()
    };

    uploadOrder(order);
  };

  const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, newOrder)
      .then((response) => {
        setIdOrder(response.id);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        updateStock();
      });
  };

  const updateStock = () => {
    cart.map(({ id, quantity, ...dataEbook }) => {
      const ebookRef = doc(db, "Ebook", id);
      setDoc(ebookRef, { ...dataEbook, dias: dataEbook.dias - quantity });
    });

    // Once stock update is done, clear the cart
    deleteCart();
  };

  return (
    <div>
      {idOrder ? (
        <ToastOut idOrder={idOrder} />
      ) : (
        <FormCheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Checkout;
