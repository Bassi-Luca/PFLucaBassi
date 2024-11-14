import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./Widget.css"

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const total = totalQuantity();

  return (
    <div className="d-flex align-items-center">
      <Link to="/cart" className="cartwidget d-flex align-items-center">
        <PiShoppingCartBold
          className={total > 0 ? "icon-cartwidget" : "empty-cartwidget"}
        />
        {total > 0 && <p className="number-cartwidget">{total}</p>}
      </Link>
    </div>
  );
};

export default CartWidget;
