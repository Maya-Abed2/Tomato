import { useContext, useState } from "react";
import { assets } from "../assets/assets"
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
export default function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div
      className="
    container mx-auto px-4 py-5 flex justify-between items-center flex-col space-y-3 md:space-y-0 md:flex-row"
    >
      <Link to="/">
      <img src={assets.logo} alt="logo" className="w-[150px]" />
      </Link>
      <div>
        
      </div>
      <ul className="flex gap-5 text-[#49557e] text-lg">
        <Link to="/"><li
          className={`${
            menu === "home" ? "pb-0.5 border-b-2 text-[#49557e]" : ""
          } cursor-pointer `}
          onClick={() => setMenu("home")}
        >
          home
        </li></Link>
        <li
          className={`${menu === "menu" ? "pb-0.5 border-b-2 text-[#49557e]" : ""} cursor-pointer `}
          onClick={() => setMenu("menu")} id="#food-display"
        >
          menu
        </li>
        <li
          className={`${
            menu === "mobile-app" ? "pb-0.5 border-b-2 text-[#49557e]" : ""
          } cursor-pointer`}
          onClick={() => setMenu("mobile-app")} id="#mobile"
        >
          mobile-app
        </li>
        <li
          className={`${
            menu === "contact" ? "pb-0.5 border-b-2 text-[#49557e]" : ""} cursor-pointer`
          }
          onClick={() => setMenu("contact")}
         id="#contact">
          contact us
        </li>
      </ul>
      <div className="navbar-right flex items-center gap-10">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon relative">
          <Link to='/cart'>
          <img src={assets.basket_icon} alt="basket-icon" />
          </Link>
          <div className={`${getTotalCartAmount()===0?"":'absolute min-w-2.5 min-h-2.5 bg-red-600 rounded-full -top-2 -right-2'}`}></div>
        </div>
        <button className="bg-transparent text-[16px] text-[#49557e] border border-red-500 rounded-full px-7.5 py-2.5 hover:bg-[#fff4f2] duration-300" onClick={()=>{
          setShowLogin(true)       
           }}>
          sign in
        </button>
      </div>
    </div>
  );
}
