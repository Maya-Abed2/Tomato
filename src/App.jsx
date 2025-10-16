import { Routes,Route } from "react-router-dom"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useState } from "react"
import LoginPopup from "./components/LoginPopup"

function App() {
  const [showLogin,setShowLogin] = useState(false);

  return (
    <div>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <Navbar setShowLogin = {setShowLogin}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
