import Navbar from "./Navbar/Navbar"
import Banner from "../Banner/Banner"
import Products from "../Products/Products"
import LoginFrom from "../LoginFrom/LoginFrom"



const Home = () => {
  return (
    <>
  
    <Navbar/>
    <Banner/>
    <LoginFrom/>
    <div className="product-card-container">
    <Products/>
    </div>
    </>
  )
}

export default Home