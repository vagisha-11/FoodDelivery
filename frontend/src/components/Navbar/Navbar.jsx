import React, { useContext, useState } from "react"
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({setShowLogin}) => {

  const[menu,setMenu]=useState("home");
  const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/Food-Delivery-Website">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          <Link to="/Food-Delivery-Website">Home</Link>
        </li>
        <li>
          <ScrollLink
            to="exploreMenu"
            smooth={true}
            duration={500}
            onClick={() => {
              setMenu("menu");
            }}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </ScrollLink>
        </li>
        <li
          onClick={() => {
            setMenu("mobile app");
          }}
          className={menu === "mobile app" ? "active" : ""}
        >
          Mobile App
        </li>
        <li
          onClick={() => {
            setMenu("contact us");
          }}
          className={menu === "contact us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />

        <div className="navbar-search-icon">
          <div className={getTotalCartAmount()===0 ? "" : "dot"}> </div>
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
        </div>
        <button
          onClick={() => {
            setShowLogin(true);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
