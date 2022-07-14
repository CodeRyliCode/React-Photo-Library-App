import React from "react";
import "../css/index.css";

//components
import PhotoGallery from "./PhotoGallery";
import SearchForm from "./SearchForm";
import Nav from "./Nav";

const App = () => {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <PhotoGallery />
    </div>
  );
};

export default App;
