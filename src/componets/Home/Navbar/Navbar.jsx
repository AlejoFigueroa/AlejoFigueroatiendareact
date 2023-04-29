import { useContext } from "react"
import { dataContext } from "../../Context/DataContext"
import "./Navbar.css"
import { Link } from "react-router-dom"
import TotalItems from "../../CartContent/TotalItems"


const Navbar = () => {
  const {cart} = useContext(dataContext)
  return (
    <div className="nav-container">
        <nav className="navbar">
        <Link to={"/"}>
          <h1 className="navbar-logo">TIENDA shoes </h1>
        </Link>
        <Link className="seeCarrito" to={"/cart"}>
          🛒
          {cart.lengh > 0 ? <TotalItems/> : null }
        </Link>
        </nav>
    </div>
  )
}

export default Navbar