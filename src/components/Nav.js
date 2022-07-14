import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import PhotoGallery from "./PhotoGallery";

const Nav = ({apiKey, photos}) => {
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
<Routes>
<Route path="/" element={<PhotoGallery apiKey={apiKey} photos={photos.travel} />} />
<Route path="/travel" element={<PhotoGallery apiKey={apiKey} photos={photos.travel} />} />
<Route path="/penguins" element={<PhotoGallery apiKey={apiKey} photos={photos.penguins} />} />
<Route path="/flowers" element={<PhotoGallery apiKey={apiKey} photos={photos.flowers}/>} />

</Routes>

    </nav>
  );
};

export default Nav;
