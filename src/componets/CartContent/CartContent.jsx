import {useContext} from "react"
import  {dataContext} from "../Context/DataContext"
import CartElements from "./CartElements"
import CartTotal from "./CartTotal"
import "./CartContent.css"
import Navbar from "../Home/Navbar/Navbar"

const CartContent = () => {
  const {cart} = useContext(dataContext)
  return (
    <>
      <Navbar/>
      {cart.length > 0 ?(
        <>
        <CartElements/>
        <CartTotal/>
        <button>Finalizar compra</button>
        </>
      ) : (<h2 className="cart-msj-center">El carrito no tiene productos agregados</h2>)} 
      
    </>
  )
  
}


export default CartContent