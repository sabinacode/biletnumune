import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
function Navbar() {
  return (
    <nav>
      <div className="natural"> <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/logo1-1-96x96.png" alt="" style={{width:"70px"}} />
     <h1>Natural Cosmetic</h1></div>
     
     

     
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/basket">Basket</Link>
        </li>
      </ul>
      <div className="icons"> <FaFacebookF style={{fontSize:"20px"}} />
      <FaTwitter  style={{fontSize:"20px"}}/>
      <CiInstagram  style={{fontSize:"20px"}}/></div>
      
    </nav>
  );
}

export default Navbar;
