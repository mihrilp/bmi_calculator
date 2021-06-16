import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="link" to="/">
        Home
      </NavLink>
      <NavLink className="link" to="/diet-list">
        Diet List
      </NavLink>
    </div>
  );
};

export default Navbar;
