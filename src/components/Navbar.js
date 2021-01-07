import React from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";



const NavBar = () => {
    return (
      <div className="NavContainer">
        <NavLink to="/">Home</NavLink> | <NavLink to="/cart">Cart</NavLink>
      </div>
    )
}

export default NavBar