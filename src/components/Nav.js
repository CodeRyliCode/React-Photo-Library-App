import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
        
          <NavLink to="/Travel">Travel</NavLink>
        </li>
        <li>
          <NavLink to="/Penguins">Penguins</NavLink>
        </li>
        <li>
          <NavLink to="/Flowers">Flowers</NavLink>
        
        </li>
      </ul>

    </nav>
  );
};



export default Nav;
