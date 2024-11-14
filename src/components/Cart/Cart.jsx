import { useContext } from "react"
import { CartContext } from "../Context/CartContext.jsx"
import { Link } from "react-router-dom"
import "./cart.css"
import { BsFillTrash3Fill } from "react-icons/bs"

const Cart = () => {
  const { cart, totalPrecio, deleteEbookById, deleteCart } = useContext(CartContext)

  //Early return
  if( cart.length === 0 ){
    return(
      <div className="empty-cart">
        <h2 className="title-empty-cart">Oppps...No hay productos en el carrito 😥</h2>
        <Link to="/" className="button-home-empty-cart" >Regresar</Link>
      </div>
    )
  }

  return (
    <div className="cart" >
      <h1 className="title-cart">Productos en el carrito</h1>
      {
        cart.map( (ebookCart) => (
          <div className="item-cart" key={ebookCart.id}>
            <img className="img-item-cart" src={ebookCart.image} width={100} alt="" />
            <p className="text-item-cart">{ebookCart.titulo}</p>
            <p className="text-item-cart">precio c/u: ${ebookCart.precio}</p>
            <p className="text-item-cart">dias de lectura: {ebookCart.dias}</p>
            <p className="text-item-cart">precio parcial: ${ ebookCart.precio * ebookCart.dias } </p>
            <button className="delete-item-cart" onClick={ () => deleteEbookById(ebookCart.id) } >
              <BsFillTrash3Fill />
            </button>
          </div>
        ))
      }

      <div className="info-cart">
        <p className="text-info-cart">Precio total: ${totalPrecio()}</p>
        <button className="button-delete-cart" onClick={deleteCart} >Vaciar carrito</button>
        <Link to="/checkout" >Terminar mi compra</Link>
      </div>
    </div>
  )
}
export default Cart