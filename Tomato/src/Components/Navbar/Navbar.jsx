import "./Navbar.css";
import { assets } from '../../assets/assets';
import { useState } from "react";

const Navbar = () => {

    const [Home, setHome] = useState("Home")
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setHome('Home')} className= {Home === "Home"?"active":""}>Home</li>
        <li onClick={()=>setHome('Menu')} className= {Home === "Menu"?"active":""}>Menu</li>
        <li onClick={()=>setHome('Mobile App')} className= {Home === "Mobile App"?"active":""}>Mobile App</li>
        <li onClick={()=>setHome('Contact Us')} className= {Home === "Contact Us"?"active":""}>Contact Us</li>
      </ul>
      <div className="navbar">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
